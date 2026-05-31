#!/usr/bin/env node
/**
 * Regenerate public/sitemap.xml from App routes, BlogPage metadata, and URL fragment files.
 * Run: node scripts/generate-sitemap.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { BLOG_REDIRECT_ALIAS_PATHS } from "./blog-redirect-aliases.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const SITE = "https://guidecatholic.com";
const TODAY = new Date().toISOString().slice(0, 10);
const POSTS_PER_PAGE = 9;

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function parseBlogDates(blogPageSource) {
  const dates = new Map();
  for (const m of blogPageSource.matchAll(/slug: "([^"]+)"[\s\S]*?date: "(\d{4}-\d{2}-\d{2})"/g)) {
    dates.set(m[1], m[2]);
  }
  return dates;
}

function extractAppBlogPaths(appSource) {
  const skip = new Set([
    "/blog",
    "/blog/page/:page",
    "/blog/catholic-feast-days/:feastSlug",
    "/blog/saint-of-the-day/:dateSlug",
    "/blog/:articleSlug",
  ]);
  const paths = new Set();
  for (const m of appSource.matchAll(/path="(\/blog\/[^"]+)"/g)) {
    const p = m[1];
    if (skip.has(p) || p.includes(":")) continue;
    paths.add(p.endsWith("/") ? p : `${p}/`);
  }
  return [...paths].sort();
}

function readUrlFragments(relPath) {
  const raw = read(relPath).trim();
  if (!raw) return [];
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const loc = line.match(/<loc>([^<]+)<\/loc>/)?.[1];
      const changefreq = line.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1] ?? "yearly";
      const priority = line.match(/<priority>([^<]+)<\/priority>/)?.[1] ?? "0.8";
      if (!loc) return null;
      return { loc, changefreq, priority, lastmod: TODAY };
    })
    .filter(Boolean);
}

function urlBlock({ loc, lastmod, changefreq, priority }, compact = false) {
  if (compact) {
    return `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  }
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function slugFromBlogPath(p) {
  return p.replace(/^\/blog\//, "").replace(/\/$/, "");
}

/** Blog articles use today's date after content/SEO updates; fallback to publish date if newer. */
function articleLastmod(pathname, blogDates) {
  const slug = slugFromBlogPath(pathname);
  const published = blogDates.get(slug);
  if (published && published > TODAY) return published;
  return TODAY;
}

const appSource = read("src/App.tsx");
const blogSource = read("src/pages/BlogPage.tsx");
const blogDates = parseBlogDates(blogSource);
const blogPaths = extractAppBlogPaths(appSource);
const totalPages = Math.ceil(
  (blogSource.match(/slug: "/g) ?? []).length / POSTS_PER_PAGE
);

const staticPages = [
  { loc: `${SITE}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE}/daily-verses/`, changefreq: "daily", priority: "0.8" },
  { loc: `${SITE}/quiz-intro/`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/quiz/`, changefreq: "monthly", priority: "0.9" },
  { loc: `${SITE}/checkout/`, changefreq: "monthly", priority: "0.6" },
  { loc: `${SITE}/result/`, changefreq: "monthly", priority: "0.6" },
  { loc: `${SITE}/get-result/`, changefreq: "monthly", priority: "0.6" },
  { loc: `${SITE}/blog/`, changefreq: "weekly", priority: "0.8" },
  { loc: `${SITE}/lockscreen/`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE}/terms/`, changefreq: "yearly", priority: "0.3" },
  { loc: `${SITE}/privacy/`, changefreq: "yearly", priority: "0.3" },
  { loc: `${SITE}/contact/`, changefreq: "monthly", priority: "0.4" },
].map((entry) => ({ ...entry, lastmod: TODAY }));

const paginationPages = [];
for (let i = 2; i <= totalPages; i++) {
  paginationPages.push({
    loc: `${SITE}/blog/page/${i}/`,
    lastmod: TODAY,
    changefreq: "weekly",
    priority: "0.7",
  });
}

const blogArticles = blogPaths
  .filter(
    (p) =>
      p !== "/blog/saint-of-the-day/" &&
      p !== "/blog/catholic-feast-days/" &&
      !BLOG_REDIRECT_ALIAS_PATHS.has(p)
  )
  .map((p) => ({
  loc: `${SITE}${p}`,
  lastmod: articleLastmod(p, blogDates),
  changefreq: "monthly",
  priority: "0.8",
}));

const popeUrls = readUrlFragments("scripts/pope-sitemap-urls.txt");
const saintUrls = readUrlFragments("scripts/saint-of-day-sitemap-urls.txt");
const feastUrls = readUrlFragments("scripts/catholic-feast-dates-sitemap-urls.txt");

const parts = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...staticPages.map((u) => urlBlock(u)),
  ...paginationPages.map((u) => urlBlock(u, true)),
  ...blogArticles.map((u) => urlBlock(u)),
  ...popeUrls.map((u) => urlBlock(u, true)),
  ...saintUrls.map((u) => urlBlock(u, true)),
  ...feastUrls.map((u) => urlBlock(u, true)),
  "</urlset>",
  "",
];

const outPath = path.join(root, "public/sitemap.xml");
fs.writeFileSync(outPath, parts.join("\n"));

const total =
  staticPages.length +
  paginationPages.length +
  blogArticles.length +
  popeUrls.length +
  saintUrls.length +
  feastUrls.length;

console.log(`Wrote ${outPath}`);
console.log(`  Static + legal: ${staticPages.length}`);
console.log(`  Blog pagination: ${paginationPages.length} (pages 2–${totalPages})`);
console.log(`  Blog articles: ${blogArticles.length}`);
console.log(`  Popes: ${popeUrls.length}`);
console.log(`  Saint of the day: ${saintUrls.length}`);
console.log(`  Feast dates: ${feastUrls.length}`);
console.log(`  Total URLs: ${total}`);
console.log(`  lastmod: ${TODAY}`);
