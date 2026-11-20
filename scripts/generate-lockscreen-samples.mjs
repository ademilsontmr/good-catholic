#!/usr/bin/env node
/**
 * Writes the sample wallpapers shown in the /lockscreen/ gallery to public/lockscreens/*.svg.
 * They mirror the canvas design in src/lib/lockscreenCanvas.ts closely enough to preview it,
 * and give Google and Bing Images real, crawlable files with descriptive names.
 * Run: node scripts/generate-lockscreen-samples.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "lockscreens");

const THEMES = {
  "Onyx & Gold": { bg1: "#14110c", bg2: "#1f1a12", bg3: "#060504", accent: "#d4af37", text: "#f4ecd8", sub: "#a8987a" },
  Ivory: { bg1: "#fbf6ea", bg2: "#f1e6cc", bg3: "#e3d2ac", accent: "#a67c1f", text: "#2a2015", sub: "#7a6a50", light: true },
  "Deep Blue": { bg1: "#0f2044", bg2: "#1a3a6e", bg3: "#0a1628", accent: "#c9a227", text: "#f5f0e8", sub: "#a8b8d0", tag: "#c9a227", tagText: "#0f2044" },
  "Royal Purple": { bg1: "#2d1b69", bg2: "#4a2c8a", bg3: "#1a0f3d", accent: "#f0c040", text: "#f5f0ff", sub: "#c4b0e8", tag: "#f0c040", tagText: "#2d1b69" },
  "Sacred Gold": { bg1: "#7a4f00", bg2: "#b87800", bg3: "#4a2f00", accent: "#ffd700", text: "#fff8e7", sub: "#e8d090", tag: "#fff8e7", tagText: "#7a4f00" },
  "Forest Green": { bg1: "#0d3320", bg2: "#1a5c38", bg3: "#071a10", accent: "#7ec8a0", text: "#f0fff4", sub: "#90c8a8", tag: "#7ec8a0", tagText: "#0d3320" },
  Crimson: { bg1: "#4a0a0a", bg2: "#7a1515", bg3: "#2a0505", accent: "#f5c842", text: "#fff5f5", sub: "#e8a0a0", tag: "#f5c842", tagText: "#4a0a0a" },
  Midnight: { bg1: "#080c18", bg2: "#141c30", bg3: "#040810", accent: "#8ab4f8", text: "#e8eeff", sub: "#8090b0", tag: "#8ab4f8", tagText: "#080c18" },
  Rose: { bg1: "#4a1030", bg2: "#7a1a50", bg3: "#2a0818", accent: "#f9a8d4", text: "#fff0f8", sub: "#e8a0c0", tag: "#f9a8d4", tagText: "#4a1030" },
  Slate: { bg1: "#1a2030", bg2: "#2a3348", bg3: "#0e1420", accent: "#94a3b8", text: "#f1f5f9", sub: "#8090a8", tag: "#94a3b8", tagText: "#1a2030" },
};

// Keep in sync with GALLERY in src/pages/LockscreenPage.tsx.
const SAMPLES = [
  { file: "advent-lockscreen-isaiah-7-14", theme: "Royal Purple", design: "cathedral", tag: "Advent", text: "Behold a virgin shall conceive, and bear a son, and his name shall be called Emmanuel.", ref: "Isaiah 7:14" },
  { file: "christmas-lockscreen-luke-2-14", theme: "Onyx & Gold", design: "gilded", tag: "Christmas", text: "Glory to God in the highest; and on earth peace to men of good will.", ref: "Luke 2:14" },
  { file: "hail-mary-lockscreen", theme: "Deep Blue", design: "halo", tag: "Prayer", text: "Hail Mary, full of grace, the Lord is with thee.", ref: "The Hail Mary" },
  { file: "be-still-psalm-46-10-lockscreen", theme: "Midnight", design: "minimal", tag: "Peace", text: "Be still and know that I am God.", ref: "Psalm 46:10" },
  { file: "st-michael-prayer-lockscreen", theme: "Crimson", design: "cathedral", tag: "Protection", text: "St. Michael the Archangel, defend us in battle.", ref: "Prayer to St. Michael" },
  { file: "jeremiah-29-11-lockscreen", theme: "Forest Green", design: "gilded", tag: "Hope", text: "For I know the plans I have for you, declares the Lord.", ref: "Jeremiah 29:11" },
  { file: "gaudete-rejoice-lockscreen", theme: "Rose", design: "halo", tag: "Gaudete", text: "Rejoice in the Lord always; again, I say, rejoice. The Lord is nigh.", ref: "Philippians 4:4-5" },
  { file: "jesus-i-trust-in-you-lockscreen", theme: "Ivory", design: "cathedral", tag: "Divine Mercy", text: "Jesus, I trust in You.", ref: "Divine Mercy" },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const mix = (h, t, a) => { const x = hex(h), y = hex(t); return `rgb(${x.map((v, i) => Math.round(v + (y[i] - v) * a)).join(",")})`; };

/** Rough wrap: Cormorant/Georgia italic averages about 0.45 em per character. */
function wrap(text, maxChars) {
  const lines = [];
  let cur = "";
  for (const w of text.split(" ")) {
    const t = cur ? `${cur} ${w}` : w;
    if (t.length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}

function svg({ theme, design, tag, text, ref }) {
  const t = THEMES[theme];
  const W = 390;
  const H = 846;
  const size = 22;
  const lineH = size * 1.28;
  const lines = wrap(text, design === "minimal" ? 30 : 26);
  const blockH = lines.length * lineH;
  const textTop = H * 0.53 - blockH / 2;
  const crossY = Math.max(textTop - 92, H * 0.2);
  const cx = W / 2;
  const a = t.accent;
  const rays = [];
  if (design === "cathedral" || design === "halo") {
    const n = 48;
    const R = W * 1.05;
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2;
      const a1 = a0 + (Math.PI * 2) / n / (i % 2 ? 3.2 : 1.8);
      rays.push(`<path d="M${cx} ${crossY}L${(cx + Math.cos(a0) * R).toFixed(1)} ${(crossY + Math.sin(a0) * R).toFixed(1)}L${(cx + Math.cos(a1) * R).toFixed(1)} ${(crossY + Math.sin(a1) * R).toFixed(1)}Z"/>`);
    }
  }
  const arch = (l, r, top, bottom) => {
    const w = r - l;
    const spring = top + w * 0.62;
    return `M${l} ${bottom}L${l} ${spring}Q${l} ${top + w * 0.12} ${(l + r) / 2} ${top}Q${r} ${top + w * 0.12} ${r} ${spring}L${r} ${bottom}`;
  };
  let frame = "";
  if (design === "cathedral") {
    frame = `<path d="${arch(W * 0.1, W * 0.9, H * 0.115, H * 0.855)}Z" fill="${t.light ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.16)"}"/>
<path d="${arch(W * 0.1, W * 0.9, H * 0.115, H * 0.855)}" fill="none" stroke="url(#m)" stroke-width="1.6"/>
<path d="${arch(W * 0.1 + 7, W * 0.9 - 7, H * 0.115 + 11, H * 0.855 - 7)}" fill="none" stroke="${a}" stroke-opacity="0.4" stroke-width="0.7"/>`;
  } else if (design === "gilded") {
    frame = `<rect x="22" y="35" width="${W - 44}" height="${H - 70}" fill="none" stroke="url(#m)" stroke-width="1.6"/>
<rect x="29" y="42" width="${W - 58}" height="${H - 84}" fill="none" stroke="${a}" stroke-opacity="0.45" stroke-width="0.7"/>`;
  } else if (design === "halo") {
    frame = `<circle cx="${cx}" cy="${crossY + 3}" r="30" fill="none" stroke="url(#m)" stroke-width="1.4"/><circle cx="${cx}" cy="${crossY + 3}" r="36" fill="none" stroke="${a}" stroke-opacity="0.35" stroke-width="0.6"/>`;
  }
  // Flared Latin cross, 26 units tall-ish, centered on crossY
  const S = 26, arm = S * 0.16, fl = arm * 0.55, vT = crossY - S * 0.55, vB = crossY + S * 0.95, hY = crossY - S * 0.12, hH = S * 0.55;
  const crossPts = [[cx - arm / 2 - fl, vT], [cx + arm / 2 + fl, vT], [cx + arm / 2, vT + arm * 1.4], [cx + arm / 2, hY - arm / 2], [cx + hH - arm * 1.4, hY - arm / 2], [cx + hH, hY - arm / 2 - fl], [cx + hH, hY + arm / 2 + fl], [cx + hH - arm * 1.4, hY + arm / 2], [cx + arm / 2, hY + arm / 2], [cx + arm / 2, vB - arm * 1.4], [cx + arm / 2 + fl, vB], [cx - arm / 2 - fl, vB], [cx - arm / 2, vB - arm * 1.4], [cx - arm / 2, hY + arm / 2], [cx - hH + arm * 1.4, hY + arm / 2], [cx - hH, hY + arm / 2 + fl], [cx - hH, hY - arm / 2 - fl], [cx - hH + arm * 1.4, hY - arm / 2], [cx - arm / 2, hY - arm / 2], [cx - arm / 2, vT + arm * 1.4]]
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const labelY = crossY + S + 30;
  const refY = textTop + blockH + 44;
  const serif = `'Cormorant Garamond', Georgia, 'Times New Roman', serif`;
  const caps = `Cinzel, Georgia, serif`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(`${text} — ${ref}`)}">
<title>${esc(`${tag} Catholic lockscreen wallpaper: ${ref}`)}</title>
<defs>
<linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1"><stop offset="0" stop-color="${t.bg1}"/><stop offset="0.55" stop-color="${t.bg2}"/><stop offset="1" stop-color="${t.bg3}"/></linearGradient>
<radialGradient id="glow" cx="${cx}" cy="${crossY}" r="${W * 0.95}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${a}" stop-opacity="0.2"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
<radialGradient id="ray" cx="${cx}" cy="${crossY}" r="${W * 1.05}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${a}" stop-opacity="${t.light ? 0.1 : 0.2}"/><stop offset="0.6" stop-color="${a}" stop-opacity="${t.light ? 0.03 : 0.05}"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
<radialGradient id="vig" cx="0.5" cy="0.5" r="0.75"><stop offset="0.35" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="${t.light ? "#5a3c14" : "#000"}" stop-opacity="${t.light ? 0.22 : 0.55}"/></radialGradient>
<linearGradient id="m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${mix(a, "#000000", 0.25)}"/><stop offset="0.35" stop-color="${mix(a, "#ffffff", 0.45)}"/><stop offset="0.5" stop-color="${mix(a, "#ffffff", 0.15)}"/><stop offset="0.7" stop-color="${mix(a, "#ffffff", 0.5)}"/><stop offset="1" stop-color="${mix(a, "#000000", 0.3)}"/></linearGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#glow)"/>
<g fill="url(#ray)">${rays.join("")}</g>
${frame}
<rect width="${W}" height="${H}" fill="url(#vig)"/>
<polygon points="${crossPts}" fill="url(#m)"/>
<text x="${cx}" y="${labelY}" text-anchor="middle" font-family="${caps}" font-size="9.5" font-weight="600" letter-spacing="3.2" fill="${a}">${esc(tag.toUpperCase())}</text>
<g font-family="${serif}" font-style="italic" font-weight="400" font-size="${size}" fill="${t.text}" text-anchor="middle">${lines
    .map((l, i) => `<text x="${cx}" y="${(textTop + lineH * 0.8 + i * lineH).toFixed(1)}">${esc(l)}</text>`)
    .join("")}</g>
<g stroke="${a}" stroke-opacity="0.7" stroke-width="0.8"><line x1="${cx - 34}" y1="${textTop + blockH + 18}" x2="${cx - 7}" y2="${textTop + blockH + 18}"/><line x1="${cx + 7}" y1="${textTop + blockH + 18}" x2="${cx + 34}" y2="${textTop + blockH + 18}"/></g>
<rect x="${cx - 2.1}" y="${textTop + blockH + 15.9}" width="4.2" height="4.2" fill="${a}" transform="rotate(45 ${cx} ${textTop + blockH + 18})"/>
<text x="${cx}" y="${refY.toFixed(1)}" text-anchor="middle" font-family="${caps}" font-size="10.5" font-weight="600" letter-spacing="2.4" fill="${a}">${esc(ref.toUpperCase())}</text>
<text x="${cx}" y="${(design === "minimal" ? H * 0.93 : H * 0.905).toFixed(1)}" text-anchor="middle" font-family="${caps}" font-size="7" letter-spacing="2.2" fill="${t.sub}" fill-opacity="0.7">GUIDECATHOLIC.COM</text>
</svg>
`;
}

fs.mkdirSync(outDir, { recursive: true });
for (const s of SAMPLES) fs.writeFileSync(path.join(outDir, `${s.file}.svg`), svg(s));
console.log(`Wrote ${SAMPLES.length} samples to ${path.relative(root, outDir)}/`);
