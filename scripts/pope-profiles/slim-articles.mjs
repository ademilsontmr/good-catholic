#!/usr/bin/env node
/**
 * Pope pages now render the written profiles in src/data/popeProfiles/. This keeps only the fields the page
 * still needs in src/data/popeArticles.ts (title, numbering, related popes) and derives the meta description
 * and read time from each profile, so the generated filler text is no longer shipped to readers.
 *
 * Run after scripts/pope-profiles/build.mjs. (Re-running generate-pope-articles.mjs would bring the filler
 * back — run this script again afterwards.)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const file = path.join(root, "src/data/popeArticles.ts");
const src = fs.readFileSync(file, "utf8");

const start = src.indexOf("= [") + 2;
let depth = 0;
let end = start;
for (let i = start; i < src.length; i++) {
  if (src[i] === "[") depth++;
  else if (src[i] === "]" && --depth === 0) {
    end = i + 1;
    break;
  }
}
const articles = JSON.parse(src.slice(start, end));

const META_MAX = 158;
function metaFrom(answer) {
  let out = "";
  // split on sentence ends, but not after abbreviations like "St." or "c."
  const sentences = answer.split(/(?<!\b(?:St|Sts|Bl|Fr|Mt|Jn|Lk|Mk|c|ca|Dr|Mr|Mrs|vs|no|Nos?)\.)(?<=[.!?])\s+(?=[A-Z])/);
  for (const s of sentences) {
    if ((out + " " + s).trim().length > META_MAX) break;
    out = (out + " " + s).trim();
  }
  return out || answer.slice(0, META_MAX - 1).replace(/\s+\S*$/, "") + "…";
}

let missing = 0;
const slim = articles.map((a) => {
  const p = path.join(root, "src/data/popeProfiles", `${a.slug}.json`);
  if (!fs.existsSync(p)) {
    missing++;
    return a;
  }
  const profile = JSON.parse(fs.readFileSync(p, "utf8"));
  const words = [profile.directAnswer, ...profile.sections.flatMap((s) => s.paras), ...profile.faqs.map((f) => f.answer)]
    .join(" ")
    .split(/\s+/).length;
  return {
    num: a.num,
    slug: a.slug,
    title: a.title,
    metaDescription: metaFrom(profile.directAnswer),
    excerpt: a.excerpt,
    readTime: `${Math.max(3, Math.round(words / 200))} min`,
    relatedPopes: a.relatedPopes,
  };
});

const out =
  `/** Pope page index. Body text lives in src/data/popeProfiles/<slug>.json (see scripts/pope-profiles/). */\n` +
  `import type { PopeArticleContent } from "@/lib/popeSlugs";\n\n` +
  `export const POPE_ARTICLES: PopeArticleContent[] = ${JSON.stringify(slim, null, 2)};\n\n` +
  `export const POPE_ARTICLES_BY_SLUG: Record<string, PopeArticleContent> = Object.fromEntries(\n  POPE_ARTICLES.map((a) => [a.slug, a])\n);\n\n` +
  `export const POPE_ARTICLES_BY_NUM: Record<number, PopeArticleContent> = Object.fromEntries(\n  POPE_ARTICLES.map((a) => [a.num, a])\n);\n`;
fs.writeFileSync(file, out);
console.log(`popeArticles.ts: ${slim.length} entries slimmed (${missing} without a profile), ${src.length} → ${out.length} bytes`);
