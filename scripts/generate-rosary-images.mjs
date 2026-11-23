#!/usr/bin/env node
/**
 * Images for /rosary/:
 *   public/images/rosary/rosary-og.jpg              (1200x630 share image)
 *   public/images/rosary/parts-of-the-rosary.svg        (labeled diagram shown on the page)
 * Run: node scripts/generate-rosary-images.mjs   (uses the puppeteer dev dependency for the JPEG)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public/images/rosary");
fs.mkdirSync(outDir, { recursive: true });

const NAVY = "#0f263d";
const BLUE = "#0d4b92";
const GOLD = "#d5a015";
const GOLD_LIGHT = "#f1d27a";
const CREAM = "#faf8f2";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "'Helvetica Neue', Arial, sans-serif";

/** Rosary drawing: loop of 54 beads + medal, pendant of 5 beads + crucifix. Returns SVG elements and key points. */
function rosary({ cx, cy, r, small, large, color, stroke, crossColor, gap }) {
  const els = [];
  const pts = { loop: [] };
  els.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${stroke}" stroke-width="2"/>`);
  const medalY = cy + r;
  const pendantGap = gap ?? r * 0.2;
  const pendantY = [4, 3, 2, 1, 0].map((k, i) => medalY + pendantGap * (i + 1.1)); // 4 (large) … 0 (large)
  const crossTop = pendantY[4] + pendantGap * 0.9;
  els.push(`<line x1="${cx}" y1="${medalY}" x2="${cx}" y2="${crossTop}" stroke="${stroke}" stroke-width="2"/>`);
  for (let i = 0; i < 54; i++) {
    const a = ((90 + ((i + 1) * 360) / 55) * Math.PI) / 180;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    pts.loop.push({ x, y });
    const isLarge = [10, 21, 32, 43].includes(i);
    els.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isLarge ? large : small}" fill="${color}"/>`);
  }
  els.push(`<rect x="${cx - large * 1.3}" y="${medalY - large * 1.6}" width="${large * 2.6}" height="${large * 3.2}" rx="${large * 1.2}" fill="${color}"/>`);
  pendantY.forEach((y, i) => {
    const isLarge = i === 0 || i === 4;
    els.push(`<circle cx="${cx}" cy="${y.toFixed(1)}" r="${isLarge ? large : small}" fill="${color}"/>`);
  });
  const ch = pendantGap * 2.4;
  const cw = ch * 0.62;
  const bar = Math.max(4, large * 0.9);
  els.push(
    `<rect x="${cx - bar / 2}" y="${crossTop}" width="${bar}" height="${ch}" rx="2" fill="${crossColor}"/>`,
    `<rect x="${cx - cw / 2}" y="${crossTop + ch * 0.24}" width="${cw}" height="${bar}" rx="2" fill="${crossColor}"/>`,
  );
  return { svg: els.join("\n  "), medalY, pendantY, crossTop, crossMid: crossTop + ch * 0.5, pts };
}

/* ---------- Share image ---------- */
const og = rosary({ cx: 930, cy: 235, r: 150, small: 6.5, large: 10, color: GOLD, stroke: "rgba(241,210,122,0.35)", crossColor: GOLD_LIGHT });
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${NAVY}"/><stop offset="1" stop-color="${BLUE}"/></linearGradient>
    <radialGradient id="glow" cx="930" cy="235" r="260" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${GOLD}" stop-opacity="0.28"/><stop offset="1" stop-color="${GOLD}" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="930" cy="235" r="260" fill="url(#glow)"/>
  ${og.svg}
  <text x="80" y="150" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="26" font-weight="600" letter-spacing="4">GUIDE CATHOLIC</text>
  <text x="80" y="250" fill="${CREAM}" font-family="${SERIF}" font-size="76" font-weight="700">Pray the</text>
  <text x="80" y="340" fill="${CREAM}" font-family="${SERIF}" font-size="76" font-weight="700">Holy Rosary</text>
  <rect x="80" y="372" width="90" height="5" rx="2" fill="${GOLD}"/>
  <text x="80" y="430" fill="${CREAM}" fill-opacity="0.88" font-family="${SANS}" font-size="30">Guided, bead by bead</text>
  <text x="80" y="474" fill="${CREAM}" fill-opacity="0.88" font-family="${SANS}" font-size="30">Today's mysteries · All 20 mysteries</text>
  <text x="80" y="560" fill="${GOLD_LIGHT}" font-family="${SANS}" font-size="26" font-weight="600">guidecatholic.com/rosary</text>
</svg>
`;

/* ---------- Labeled diagram ---------- */
const W = 900;
const H = 700;
const CXD = 400;
const d = rosary({ cx: CXD, cy: 215, r: 150, small: 6.5, large: 10.5, color: BLUE, stroke: "#c9d3df", crossColor: NAVY, gap: 27 });
/** Leader line from a bead to a text block; side "left" right-aligns the text at x. */
const label = (bx, by, x, y, lines, side) => {
  const lineEnd = side === "left" ? x + 8 : x - 8;
  const texts = lines
    .map(
      (t, i) =>
        `<text x="${x}" y="${y + 6 + i * 21}" text-anchor="${side === "left" ? "end" : "start"}" font-family="${SANS}" font-size="${i === 0 ? 18 : 15}" font-weight="${i === 0 ? 700 : 400}" fill="${i === 0 ? NAVY : "#4b5b6b"}">${t}</text>`,
    )
    .join("");
  return `<polyline points="${bx.toFixed(1)},${by.toFixed(1)} ${lineEnd},${y} " fill="none" stroke="${GOLD}" stroke-width="1.6"/><circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="3.5" fill="${GOLD}"/>${texts}`;
};
// Decade 1 = loop indices 0–9; draw a bracket just outside those beads.
const arc = [];
for (let i = 0; i <= 9; i++) {
  const a = ((90 + ((i + 1) * 360) / 55) * Math.PI) / 180;
  arc.push(`${(CXD + 172 * Math.cos(a)).toFixed(1)} ${(215 + 172 * Math.sin(a)).toFixed(1)}`);
}
const decArc = `<path d="M ${arc.join(" L ")}" fill="none" stroke="${GOLD}" stroke-width="4" stroke-linecap="round"/>`;
const decMidA = ((90 + (5.5 * 360) / 55) * Math.PI) / 180;
const decMid = { x: CXD + 172 * Math.cos(decMidA), y: 215 + 172 * Math.sin(decMidA) };
const big2 = d.pts.loop[10];
const diagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">Parts of the Rosary</title>
  <desc id="d">Labeled diagram of rosary beads: the crucifix, the Our Father beads, the three Hail Mary beads, the centerpiece medal, and a decade of ten Hail Mary beads.</desc>
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <text x="${W / 2}" y="44" text-anchor="middle" font-family="${SERIF}" font-size="30" font-weight="700" fill="${NAVY}">Parts of the Rosary</text>
  ${d.svg}
  ${decArc}
  ${label(decMid.x, decMid.y, 190, 380, ["A decade", "10 Hail Marys on", "one mystery"], "left")}
  ${label(big2.x, big2.y, 190, 205, ["Our Father bead", "between decades, after", "Glory Be and Fatima Prayer"], "left")}
  ${label(CXD + 12, d.medalY, 610, 345, ["Centerpiece medal", "Hail, Holy Queen at the end"], "right")}
  ${label(CXD + 11, d.pendantY[0], 610, 415, ["Our Father bead", "first mystery begins"], "right")}
  ${label(CXD + 8, d.pendantY[2], 610, 480, ["Three Hail Mary beads", "for faith, hope and charity"], "right")}
  ${label(CXD + 11, d.pendantY[4], 610, 545, ["Our Father bead", "after the Creed"], "right")}
  ${label(CXD + 16, d.crossMid, 610, 610, ["Crucifix", "Sign of the Cross and Creed"], "right")}
  <text x="${W / 2}" y="${H - 18}" text-anchor="middle" font-family="${SANS}" font-size="14" fill="#6b7785">guidecatholic.com/rosary</text>
</svg>
`;
fs.writeFileSync(path.join(outDir, "parts-of-the-rosary.svg"), diagramSvg);

/* ---------- Share image: JPEG, small enough for social crawlers ---------- */
const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(`<html><body style="margin:0">${ogSvg}</body></html>`);
await page.screenshot({ path: path.join(outDir, "rosary-og.jpg"), type: "jpeg", quality: 72, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log("Wrote public/images/rosary/rosary-og.jpg and parts-of-the-rosary.svg");
