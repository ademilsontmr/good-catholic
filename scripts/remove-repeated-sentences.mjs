#!/usr/bin/env node
/**
 * Remove boilerplate sentences that a generator pasted into many pages of one family
 * (e.g. the same closing advice on 40 Bible-verse pages).
 *
 *   node scripts/remove-repeated-sentences.mjs --files 'src/pages/blog/BibleVerses*.tsx,...' [--min 5] [--apply]
 *
 * A sentence (≥ 50 chars, inside a text node or string literal) is removed from every file in the set when
 * it appears verbatim in at least --min files. Elements left empty are dropped, and an <h2> left with no
 * content before the next heading is dropped too. Scripture quotations inside <blockquote> are never touched.
 */
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const apply = args.includes("--apply");
const min = Number(opt("--min", 5));
const patterns = opt("--files", "").split(",").filter(Boolean);

const glob = (pat) => {
  const dir = path.dirname(pat);
  const re = new RegExp("^" + path.basename(pat).replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$");
  return fs.readdirSync(dir).filter((f) => re.test(f)).map((f) => path.join(dir, f));
};
const files = [...new Set(patterns.flatMap(glob))];

const decode = (s) => s.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
// Sentences in JSX text and string literals, outside blockquotes.
function sentencesOf(src) {
  const text = src.replace(/<blockquote[\s\S]*?<\/blockquote>/g, " ");
  const chunks = [
    ...text.matchAll(/>([^<>{}]{50,})</g),
    // prose inside data/prop strings only — never className or other attributes
    ...text.matchAll(/(?<=(?:answer|text|description|excerpt|intro|note)\s*[:=]\s*\{?)"([^"\\<>\n]{50,})"/g),
  ].map((m) => m[1]);
  return chunks
    .flatMap((c) => c.split(/(?<=[.!?])\s+/))
    .map((s) => s.trim())
    .filter((s) => s.length >= 50 && /[.!?]$/.test(s) && s.split(/\s+/).length >= 8 && !/988|911/.test(s));
}

const count = new Map();
for (const f of files) for (const s of new Set(sentencesOf(fs.readFileSync(f, "utf8")))) count.set(s, (count.get(s) ?? 0) + 1);
const boiler = [...count].filter(([, n]) => n >= min).map(([s]) => s).sort((a, b) => b.length - a.length);

const faqRe = /[ \t]*\{\s*question:\s*"((?:[^"\\]|\\.)*)",\s*answer:\s*"((?:[^"\\]|\\.)*)"\s*\},?\n?/g;
const faqCount = new Map();
for (const f of files) for (const m of new Set([...fs.readFileSync(f, "utf8").matchAll(faqRe)].map((x) => x[1] + "\u0000" + x[2]))) faqCount.set(m, (faqCount.get(m) ?? 0) + 1);
const boilerFaqs = new Set([...faqCount].filter(([, n]) => n >= min).map(([k]) => k));

let removedTotal = 0;
const words = [];
for (const f of files) {
  let src = fs.readFileSync(f, "utf8");
  const before = src;
  src = src.replace(faqRe, (m, q, a) => (boilerFaqs.has(q + "\u0000" + a) ? (removedTotal++, "") : m));
  for (const s of boiler) {
    const esc = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    src = src.replace(new RegExp(`[ \\t]*${esc}`, "g"), () => (removedTotal++, ""));
  }
  if (src === before) continue;
  // drop elements whose text became empty
  src = src.replace(/^[ \t]*<(LinkedText|p|li)\b[^>]*>\s*<\/\1>[ \t]*\n/gm, "");
  src = src.replace(/^[ \t]*<(ul|ol)\b[^>]*>\s*<\/\1>[ \t]*\n/gm, "");
  // drop an <h2> immediately followed by another heading or the end of the prose block
  src = src.replace(/^[ \t]*<h2\b[^>]*>[^<]*<\/h2>[ \t]*\n(?=(?:[ \t]*\n)*[ \t]*(?:<h2\b|<\/div>|<QuizCTA|\{\/\*))/gm, "");
  const body = src.match(/<article[\s\S]*<\/article>/)?.[0] ?? src;
  words.push([path.basename(f), (decode(body.replace(/<[^>]+>/g, " ").replace(/\{[^}]*\}/g, " ")).match(/[A-Za-z']+/g) || []).length]);
  if (apply) fs.writeFileSync(f, src);
}
words.sort((a, b) => a[1] - b[1]);
console.log(`${apply ? "Applied" : "Dry run"}: ${files.length} files, ${boiler.length} boilerplate sentences, ${boilerFaqs.size} boilerplate FAQs, ${removedTotal} removals`);
console.log("Fewest words left:", words.slice(0, 6).map(([f, w]) => `${f} ${w}`).join(" | "));
boiler.forEach((s) => console.log(`  ${count.get(s)}× ${s.slice(0, 100)}`));
