#!/usr/bin/env node
/**
 * Post-build static HTML prerender for Cloudflare Pages.
 * Renders every sitemap URL with React SSR — full content in HTML, no Puppeteer.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import {
  collectPrerenderRoutes,
  routeToOutputFile,
  injectPrerenderedHtml,
} from "./prerender-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distDir = path.join(root, "dist");
const serverEntry = path.join(root, ".ssg-build/server/entry-server.js");

const CONCURRENCY = 8;
const SKIP_PREFIXES = ["/quiz", "/checkout", "/get-result", "/result", "/lockscreen"];

async function main() {
  if (!fs.existsSync(serverEntry)) {
    console.error("Missing SSR bundle. Run: vite build --ssr src/entry-server.tsx --outDir .ssg-build/server");
    process.exit(1);
  }

  const templatePath = path.join(distDir, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("Missing dist/index.html — run vite build first");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf8");
  const { render } = await import(pathToFileURL(serverEntry).href);

  let routes = collectPrerenderRoutes().filter((r) => !SKIP_PREFIXES.some((p) => r === p || r.startsWith(`${p}/`)));

  console.log(`Prerendering ${routes.length} routes (concurrency ${CONCURRENCY})...`);

  let ok = 0;
  let fail = 0;
  const errors = [];

  async function renderRoute(route) {
    try {
      const { html, helmet } = await render(route);
      if (!html || html.length < 200) {
        throw new Error(`Empty or tiny HTML (${html?.length ?? 0} bytes)`);
      }
      const pageHtml = injectPrerenderedHtml(template, html, helmet);
      const outFile = routeToOutputFile(route);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, pageHtml);
      ok++;
      if (ok % 50 === 0) console.log(`  ...${ok} pages`);
    } catch (err) {
      fail++;
      errors.push({ route, message: err?.message ?? String(err) });
    }
  }

  for (let i = 0; i < routes.length; i += CONCURRENCY) {
    const batch = routes.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(renderRoute));
  }

  console.log(`Done: ${ok} prerendered, ${fail} failed`);
  if (errors.length > 0) {
    console.log("First failures:");
    errors.slice(0, 10).forEach((e) => console.log(`  ${e.route}: ${e.message}`));
  }

  // Verify sample
  const sample = routeToOutputFile("/blog/saint-of-the-day/may-29/");
  if (fs.existsSync(sample)) {
    const sampleHtml = fs.readFileSync(sample, "utf8");
    const hasContent = sampleHtml.includes("Maximinus") || sampleHtml.includes("Saint of the Day");
    console.log(`Sample ${sample}: ${sampleHtml.length} bytes, has content: ${hasContent}`);
  }

  if (fail > routes.length * 0.1) {
    process.exit(1);
  }
}

main();
