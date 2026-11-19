#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver…).
 *
 *   node scripts/indexnow-submit.mjs                 # every URL in public/sitemap.xml
 *   node scripts/indexnow-submit.mjs --since 2026-11-01   # only <lastmod> on/after that date
 *   node scripts/indexnow-submit.mjs --changed       # only URLs added to the sitemap in the last commit
 *   node scripts/indexnow-submit.mjs <url> [<url>…]  # specific URLs
 *   add --dry-run to print what would be sent
 *
 * The key file public/<KEY>.txt must already be live on the site, so run this AFTER deploy.
 */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const HOST = "guidecatholic.com";
const SITE = `https://${HOST}`;
const KEY = "9a827ff362bd4399108a66b41d1d6c1f";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 10000; // IndexNow limit per request

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const changed = args.includes("--changed");
const sinceIdx = args.indexOf("--since");
const since = sinceIdx >= 0 ? args[sinceIdx + 1] : null;
const explicit = args.filter((a) => a.startsWith("http"));

function parseSitemap(xml) {
  const entries = [];
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    const lastmod = m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
    if (loc) entries.push({ loc, lastmod });
  }
  return entries;
}

function collectUrls() {
  if (explicit.length) return explicit;
  const current = parseSitemap(fs.readFileSync(path.join(root, "public/sitemap.xml"), "utf8"));
  if (changed) {
    let previous = new Set();
    try {
      const old = execSync("git show HEAD~1:public/sitemap.xml", { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
      previous = new Set(parseSitemap(old).map((e) => `${e.loc}|${e.lastmod}`));
    } catch {
      console.warn("Could not read previous sitemap from git — sending everything.");
    }
    return current.filter((e) => !previous.has(`${e.loc}|${e.lastmod}`)).map((e) => e.loc);
  }
  if (since) return current.filter((e) => e.lastmod >= since).map((e) => e.loc);
  return current.map((e) => e.loc);
}

async function main() {
  const urls = [...new Set(collectUrls())].filter((u) => u.startsWith(SITE));
  if (!urls.length) {
    console.log("No URLs to submit.");
    return;
  }
  console.log(`${dryRun ? "[dry-run] " : ""}${urls.length} URL(s) for IndexNow`);
  if (dryRun) {
    urls.slice(0, 10).forEach((u) => console.log("  " + u));
    if (urls.length > 10) console.log(`  …and ${urls.length - 10} more`);
    return;
  }

  const keyCheck = await fetch(KEY_LOCATION);
  const keyBody = keyCheck.ok ? (await keyCheck.text()).trim() : "";
  if (keyBody !== KEY) {
    console.error(`Key file not live at ${KEY_LOCATION} (HTTP ${keyCheck.status}). Deploy first, then run again.`);
    process.exit(1);
  }

  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    const text = await res.text();
    console.log(`Batch ${i / BATCH + 1}: HTTP ${res.status} ${res.statusText} ${text}`.trim());
    if (!res.ok) process.exit(1);
  }
  console.log("Done. 200/202 = accepted.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
