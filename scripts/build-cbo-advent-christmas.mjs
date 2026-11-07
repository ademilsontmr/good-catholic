/**
 * Builds src/data/cboCompanionGuidesAdventChristmas.ts from guide definitions.
 */
import fs from "fs";
import path from "path";
import { readFileSync } from "fs";

const guidesPath = path.join(process.cwd(), "scripts/advent-christmas-guides.json");
const GUIDES = JSON.parse(readFileSync(guidesPath, "utf8"));

const outPath = path.join(process.cwd(), "src/data/cboCompanionGuidesAdventChristmas.ts");

const HEADER = `import type { LiturgicalFeastGuide } from "./liturgicalFeastGuides";

const CBO = "https://catholicbibleonline.com/bible/";
const CBO_ADVENT = "https://catholicbibleonline.com/calendar/advent/";
const GC_NOV_FEB = "https://catholicbibleonline.com/blog/catholic-saint-feast-prayers-nov-dec-jan-feb-guide/";
const GC_ST_ANDREW = "https://catholicbibleonline.com/blog/st-andrew-prayer-catholic-guide/";
const GC_O_ANTIPHONS = "https://catholicbibleonline.com/blog/o-antiphons-advent-prayer-guide/";
const GC_ADVENT_WREATH = "https://catholicbibleonline.com/blog/advent-wreath-prayers-blessing-catholic-guide/";
const GC_ADVENT_SCRIPTURE = "https://catholicbibleonline.com/blog/advent-bible-verses-catholic-scripture-guide/";
const GC_CHRISTMAS_PRAYERS = "https://catholicbibleonline.com/blog/catholic-christmas-prayers-complete-guide/";
const GC_CHRISTMAS_EVE = "https://catholicbibleonline.com/blog/christmas-eve-prayer-vigil-creche-guide/";
const GC_CHRISTMAS_GRACE = "https://catholicbibleonline.com/blog/prayer-before-christmas-dinner-catholic-grace/";
const GC_BABY_JESUS = "https://catholicbibleonline.com/blog/prayer-to-baby-jesus-nativity-catholic-guide/";
const GC_ST_STEPHEN = "https://catholicbibleonline.com/blog/st-stephen-prayer-catholic-guide/";
const GC_ST_JOHN = "https://catholicbibleonline.com/blog/st-john-evangelist-prayer-catholic-guide/";
const GC_HOLY_FAMILY = "https://catholicbibleonline.com/blog/holy-family-sunday-prayer-feast-guide/";
const GC_HOLY_INNOCENTS = "https://catholicbibleonline.com/blog/holy-innocents-prayer-catholic-guide/";

export const CBO_COMPANION_ADVENT_CHRISTMAS: LiturgicalFeastGuide[] = `;

const FOOTER = `;

export function cboCompanionAdventChristmasBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return CBO_COMPANION_ADVENT_CHRISTMAS.find((guide) => guide.slug === slug);
}
`;

function jsonStringify(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const padIn = "  ".repeat(indent + 1);
  if (value === null) return "null";
  if (typeof value === "string") {
    return JSON.stringify(value);
  }
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return (
      "[\n" +
      value.map((v) => padIn + jsonStringify(v, indent + 1)).join(",\n") +
      "\n" +
      pad +
      "]"
    );
  }
  if (typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    return (
      "{\n" +
      keys
        .map((k) => {
          const v = value[k];
          if (v === undefined) return null;
          return padIn + JSON.stringify(k) + ": " + jsonStringify(v, indent + 1);
        })
        .filter(Boolean)
        .join(",\n") +
      "\n" +
      pad +
      "}"
    );
  }
  throw new Error("unsupported type");
}

function guideText(g) {
  let t = (g.lede || "") + (g.answer || "") + (g.prayer || "");
  for (const f of g.facts || []) t += f.label + f.value;
  for (const tl of g.timeline || []) t += tl.when + tl.what;
  for (const s of g.sections || []) {
    t += s.heading || "";
    for (const p of s.paragraphs || []) t += p;
    for (const li of s.list || []) t += li;
    if (s.callout) t += s.callout.label + s.callout.text;
    if (s.table) {
      t += s.table.caption;
      for (const h of s.table.headers) t += h;
      for (const r of s.table.rows) for (const c of r) t += c;
    }
  }
  for (const faq of g.faqs || []) t += faq.question + faq.answer;
  return t.length;
}

const body = GUIDES.map((g) => jsonStringify(g, 1)).join(",\n");
const full = HEADER + "[\n" + body + "\n]" + FOOTER;
fs.writeFileSync(outPath, full, "utf8");

let total = 0;
const counts = [];
for (const g of GUIDES) {
  const c = guideText(g);
  counts.push({ slug: g.slug, chars: c });
  total += c;
}
console.log("slug count:", GUIDES.length);
console.log("avg chars/guide:", Math.round(total / GUIDES.length));
for (const { slug, chars } of counts) {
  const ok = chars >= 12000 && chars <= 16000 ? "OK" : "CHECK";
  console.log(`${ok} ${slug}: ${chars}`);
}
