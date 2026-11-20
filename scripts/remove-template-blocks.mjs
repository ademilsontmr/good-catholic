#!/usr/bin/env node
/**
 * Remove the generic sections that older expansion scripts (expand-shallow-articles, expand-novena-articles)
 * pasted into many articles: same heading + near-identical paragraph on every page.
 *
 * A section is removed only when its <h2> is one of the known template headings AND its text is at least
 * 50% the same (5-word shingles) as the section with that heading on another page — so any section that
 * was genuinely customized for its article stays.
 *
 *   node scripts/remove-template-blocks.mjs            # dry run: report what would go and words left
 *   node scripts/remove-template-blocks.mjs --apply
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "src/pages/blog");
const apply = process.argv.includes("--apply");

const TEMPLATE_HEADINGS = new Set([
  "Teaching Children and Grandchildren",
  "Related Devotions and Next Steps",
  "When Catholics Pray It",
  "How to Pray With Reverence",
  "What This Prayer Means in Catholic Worship",
  "Scripture and the Communion of Saints",
  "Questions Catholics Ask Today",
  "Trust and Perseverance",
  "Step-by-Step for U.S. Catholics",
  "What the Church Requires vs. Encourages",
  "When to Talk to Your Pastor",
  "What You Need to Know First",
  "How This Fits Catholic Life",
  "Practical Application",
  "Going Deeper",
  "Understanding the Topic",
  "Why Pray This Novena?",
  "What Is a Novena?",
]);

const decode = (s) => s.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
const textOf = (jsx) => decode(jsx.replace(/<[^>]+>/g, " ").replace(/\{[^}]*\}/g, " ")).replace(/\s+/g, " ").trim();
const shingles = (t) => {
  const w = t.toLowerCase().match(/[a-z']+/g) || [];
  const s = new Set();
  for (let i = 0; i + 5 <= w.length; i++) s.add(w.slice(i, i + 5).join(" "));
  return s;
};
const overlap = (a, b) => {
  if (!a.size || !b.size) return 0;
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n / Math.min(a.size, b.size);
};

// A section: the <h2>…</h2> line plus following paragraph-level blocks (LinkedText / p / ul / ol),
// stopping at the next heading, component, comment, or container tag.
const SECTION = /^([ \t]*)<h2\b[^>]*>([^<]+)<\/h2>[ \t]*\n((?:\1<(?:LinkedText|p|ul|ol)\b[\s\S]*?<\/(?:LinkedText|p|ul|ol)>[ \t]*\n(?:[ \t]*\n)?)+)/gm;

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));
const sections = []; // { file, heading, full, text, sh }
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of src.matchAll(SECTION)) {
    const heading = decode(m[2].trim());
    if (!TEMPLATE_HEADINGS.has(heading)) continue;
    const text = textOf(m[3]);
    sections.push({ file: f, heading, full: m[0], text, sh: shingles(text) });
  }
}

const toRemove = new Map(); // file -> [section]
for (const s of sections) {
  const twin = sections.some((o) => o !== s && o.heading === s.heading && o.file !== s.file && overlap(s.sh, o.sh) >= 0.5);
  if (twin) toRemove.set(s.file, [...(toRemove.get(s.file) ?? []), s]);
}

const report = [];
for (const [f, secs] of toRemove) {
  const p = path.join(dir, f);
  let src = fs.readFileSync(p, "utf8");
  for (const s of secs) src = src.replace(s.full, "");
  // drop the now-empty marker comments the expansion scripts left behind
  src = src.replace(/^[ \t]*\{\/\* data-expanded-depth(?:-\d+)? \*\/\}[ \t]*\n/gm, "");
  const prose = src.match(/<div className="prose[^"]*">([\s\S]*?)<BlogFAQ|<article[\s\S]*?<\/article>/)?.[0] ?? src;
  const wordsLeft = (textOf(prose).match(/[A-Za-z']+/g) || []).length;
  report.push({ file: f, removed: secs.length, wordsLeft });
  if (apply) fs.writeFileSync(p, src);
}

report.sort((a, b) => a.wordsLeft - b.wordsLeft);
console.log(`${apply ? "Applied" : "Dry run"}: ${report.length} files, ${report.reduce((n, r) => n + r.removed, 0)} sections`);
console.log("Fewest words left:");
for (const r of report.filter((x) => x.wordsLeft < 600)) console.log(`  ${String(r.wordsLeft).padStart(5)} words  -${r.removed}  ${r.file}`);
const kept = sections.filter((s) => !toRemove.get(s.file)?.includes(s));
console.log(`Template-heading sections kept as unique: ${kept.length}`);
for (const k of kept.slice(0, 10)) console.log(`  kept: ${k.file} — ${k.heading}`);
