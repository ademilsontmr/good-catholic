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

/**
 * Merge the template's default og:/twitter: tags with the page's own, tag by tag:
 * - a tag the page sets itself replaces the template default;
 * - title/description/url defaults are rewritten from the page's <title>, description and canonical,
 *   so a page never shares the homepage's text or URL;
 * - image/card/type defaults stay, so every page has a share image.
 */
function mergeSocialMeta(html, { title, meta, link }) {
  const has = (key) => new RegExp(`(?:property|name)="${key}"`).test(meta);
  const pageTitle = title.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]?.trim();
  const pageDesc = meta.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1];
  const canonical = link.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1];
  const derived = {
    "og:title": pageTitle,
    "twitter:title": pageTitle,
    "og:description": pageDesc,
    "twitter:description": pageDesc,
    "og:url": canonical,
  };

  return html.replace(
    /<meta data-rh="true" (property|name)="((?:og|twitter):[^"]+)" content="[^"]*"\s*\/?>\n?/g,
    (tag, attr, key) => {
      if (has(key)) return "";
      if (key in derived) {
        return derived[key] ? `<meta data-rh="true" ${attr}="${key}" content="${derived[key]}" />\n` : "";
      }
      return tag;
    }
  );
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
    if (meta.includes('name="robots"') && meta.includes("noindex")) {
      html = html.replace(/<meta data-rh="true" name="robots"[^>]*>\n?/g, "");
      html = html.replace(/<meta data-rh="true" name="googlebot"[^>]*>\n?/g, "");
      html = html.replace(/<meta data-rh="true" name="bingbot"[^>]*>\n?/g, "");
    }
    html = mergeSocialMeta(html, { title, meta, link });

    html = html.replace("</head>", `${meta}${link}${script}</head>`);
  }

  return html;
}
