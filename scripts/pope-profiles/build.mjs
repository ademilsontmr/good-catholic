#!/usr/bin/env node
/**
 * Turn the agent-written batches (scripts/pope-profiles/out/batch-*.json) into one JSON module per pope
 * (src/data/popeProfiles/<slug>.json), loaded lazily by that pope's page. Validates shape and checks that
 * no sentence is shared between two popes.
 *
 * Run: node scripts/pope-profiles/build.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..", "..");
const outDir = path.join(root, "src/data/popeProfiles");
fs.mkdirSync(outDir, { recursive: true });

const profiles = fs
  .readdirSync(path.join(here, "out"))
  .filter((f) => /^batch-\d+\.json$/.test(f))
  .flatMap((f) => JSON.parse(fs.readFileSync(path.join(here, "out", f), "utf8")));

const problems = [];
const sentenceOwner = new Map();
for (const p of profiles) {
  if (!p.slug || !p.directAnswer || !p.sections?.length || !p.keyFacts?.length || !p.faqs?.length) problems.push(`shape: ${p.slug}`);
  const text = [p.directAnswer, ...p.sections.flatMap((s) => s.paras), ...p.faqs.map((f) => f.answer)].join(" ");
  for (const s of text.split(/(?<=[.!?])\s+/).filter((x) => x.length >= 50)) {
    const owner = sentenceOwner.get(s);
    if (owner && owner !== p.slug) problems.push(`shared sentence ${owner} / ${p.slug}: ${s.slice(0, 70)}`);
    sentenceOwner.set(s, p.slug);
  }
  fs.writeFileSync(path.join(outDir, `${p.slug}.json`), JSON.stringify(p));
}
const words = profiles
  .map((p) => [p.slug, [p.directAnswer, ...p.sections.flatMap((s) => s.paras)].join(" ").split(/\s+/).length])
  .sort((a, b) => a[1] - b[1]);
console.log(`${profiles.length} profiles written to src/data/popeProfiles/`);
console.log(`words: min ${words[0]?.[1]} (${words[0]?.[0]}), median ${words[words.length >> 1]?.[1]}, max ${words.at(-1)?.[1]}`);
if (problems.length) {
  console.log(`${problems.length} problem(s):`);
  problems.slice(0, 20).forEach((x) => console.log("  " + x));
}
