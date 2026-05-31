#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BLOG_REDIRECT_ALIAS_PATHS } from "./blog-redirect-aliases.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distDir = path.join(root, "dist");
const SITE = "https://guidecatholic.com";

/** Collect prerender paths from sitemap + essential app routes. */
export function collectPrerenderRoutes() {
  const sitemapPath = path.join(root, "public/sitemap.xml");
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const fromSitemap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const full = m[1];
    try {
      return new URL(full).pathname;
    } catch {
      return full.replace(SITE, "");
    }
  });

  const extra = ["/blog/", "/quiz-intro/", "/daily-verses/", "/terms/", "/privacy/", "/contact/"];
  const all = [...new Set([...fromSitemap, ...extra])].filter((p) => !BLOG_REDIRECT_ALIAS_PATHS.has(p));
  return all.sort();
}

/** /blog/foo/ -> dist/blog/foo/index.html */
export function routeToOutputFile(route) {
  let r = route;
  if (!r.startsWith("/")) r = `/${r}`;
  if (r !== "/" && !r.endsWith("/")) r = `${r}/`;
  if (r === "/") return path.join(distDir, "index.html");
  const segments = r.replace(/^\/|\/$/g, "").split("/");
  return path.join(distDir, ...segments, "index.html");
}

export function injectPrerenderedHtml(template, bodyHtml, helmet) {
  let html = template.replace(/<div id="root"><\/div>/, `<div id="root">${bodyHtml}</div>`);

  if (helmet) {
    const title = helmet.title?.toString() ?? "";
    const meta = helmet.meta?.toString() ?? "";
    const link = helmet.link?.toString() ?? "";
    const script = helmet.script?.toString() ?? "";

    if (title) {
      html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/, title);
    }

    // Drop generic homepage SEO tags when the page supplies its own
    if (meta.includes('name="description"')) {
      html = html.replace(/<meta data-rh="true" name="description"[^>]*>\n?/g, "");
    }
    if (link.includes('rel="canonical"')) {
      html = html.replace(/<link data-rh="true" rel="canonical"[^>]*>\n?/g, "");
    }
    if (meta.includes('property="og:title"')) {
      html = html.replace(/<meta data-rh="true" property="og:[^"]+"[^>]*>\n?/g, "");
      html = html.replace(/<meta data-rh="true" name="twitter:[^"]+"[^>]*>\n?/g, "");
    }

    html = html.replace("</head>", `${meta}${link}${script}</head>`);
  }

  return html;
}
