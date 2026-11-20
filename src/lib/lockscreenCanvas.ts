import type { DesignTheme } from "@/data/lockscreenTexts";

export type LockscreenDesign = "cathedral" | "gilded" | "halo" | "minimal";

export interface LockscreenOptions {
  text: string;
  ref: string;
  tag: string;
  showTag: boolean;
  /** 0.8–1.3, multiplies the base text size. */
  fontScale: number;
  /** "lower" keeps the text clear of the large lock screen clock. */
  position: "center" | "lower";
  design: LockscreenDesign;
}

/** Fonts the page loads from Google Fonts; serif fallbacks keep the layout if they fail. */
export const VERSE_FONT = `"Cormorant Garamond", Georgia, "Times New Roman", serif`;
export const CAPS_FONT = `Cinzel, "Trajan Pro", Georgia, serif`;

/** Base layout is designed on a 390 pt wide screen and scaled to the canvas width. */
const BASE_W = 390;

// ─── Color helpers ───────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const n = parseInt(h.length === 3 ? h.split("").map((c) => c + c).join("") : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function mix(hex: string, target: string, amount: number): string {
  const a = hexToRgb(hex);
  const b = hexToRgb(target);
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * amount));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}

function rgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** A metallic gradient built from the theme accent, so gold reads as gold leaf. */
function metal(ctx: CanvasRenderingContext2D, accent: string, x0: number, y0: number, x1: number, y1: number) {
  const g = ctx.createLinearGradient(x0, y0, x1, y1);
  g.addColorStop(0, mix(accent, "#000000", 0.25));
  g.addColorStop(0.35, mix(accent, "#ffffff", 0.45));
  g.addColorStop(0.5, mix(accent, "#ffffff", 0.15));
  g.addColorStop(0.7, mix(accent, "#ffffff", 0.5));
  g.addColorStop(1, mix(accent, "#000000", 0.3));
  return g;
}

// ─── Text helpers ────────────────────────────────────────────────────────────

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split(/\n+/)) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    let current = "";
    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
  }
  return lines;
}

/** Letter-spaced text drawn glyph by glyph (canvas letterSpacing is not supported everywhere). */
function spacedWidth(ctx: CanvasRenderingContext2D, text: string, spacing: number) {
  return [...text].reduce((w, ch) => w + ctx.measureText(ch).width + spacing, -spacing);
}

function drawSpaced(ctx: CanvasRenderingContext2D, text: string, cx: number, y: number, spacing: number) {
  const total = spacedWidth(ctx, text, spacing);
  let x = cx - total / 2;
  const align = ctx.textAlign;
  ctx.textAlign = "left";
  for (const ch of text) {
    ctx.fillText(ch, x, y);
    x += ctx.measureText(ch).width + spacing;
  }
  ctx.textAlign = align;
  return total;
}

// ─── Ornaments ───────────────────────────────────────────────────────────────

let grainTile: HTMLCanvasElement | null = null;
function grain(ctx: CanvasRenderingContext2D) {
  if (!grainTile) {
    grainTile = document.createElement("canvas");
    grainTile.width = grainTile.height = 128;
    const g = grainTile.getContext("2d");
    if (g) {
      const img = g.createImageData(128, 128);
      for (let i = 0; i < img.data.length; i += 4) {
        const v = Math.random() * 255;
        img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
        img.data[i + 3] = 22;
      }
      g.putImageData(img, 0, 0);
    }
  }
  return ctx.createPattern(grainTile, "repeat");
}

function diamond(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r, y);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r, y);
  ctx.closePath();
  ctx.fill();
}

/** line — ◆ — line */
function divider(ctx: CanvasRenderingContext2D, cx: number, y: number, half: number, s: number, accent: string) {
  ctx.strokeStyle = rgba(accent, 0.7);
  ctx.lineWidth = 0.8 * s;
  ctx.beginPath();
  ctx.moveTo(cx - half, y);
  ctx.lineTo(cx - 7 * s, y);
  ctx.moveTo(cx + 7 * s, y);
  ctx.lineTo(cx + half, y);
  ctx.stroke();
  ctx.fillStyle = accent;
  diamond(ctx, cx, y, 3 * s);
  ctx.fillStyle = rgba(accent, 0.6);
  diamond(ctx, cx - half - 4 * s, y, 1.6 * s);
  diamond(ctx, cx + half + 4 * s, y, 1.6 * s);
}

/** Latin cross with flared, gilded ends. */
function cross(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, accent: string) {
  const arm = size * 0.16;
  const vTop = cy - size * 0.55;
  const vBottom = cy + size * 0.95;
  const hY = cy - size * 0.12;
  const hHalf = size * 0.55;
  ctx.save();
  ctx.shadowColor = rgba(accent, 0.55);
  ctx.shadowBlur = size * 0.6;
  ctx.fillStyle = metal(ctx, accent, cx - hHalf, vTop, cx + hHalf, vBottom);
  const flare = arm * 0.55;
  ctx.beginPath();
  // vertical beam with flared ends
  ctx.moveTo(cx - arm / 2 - flare, vTop);
  ctx.lineTo(cx + arm / 2 + flare, vTop);
  ctx.lineTo(cx + arm / 2, vTop + arm * 1.4);
  ctx.lineTo(cx + arm / 2, hY - arm / 2);
  ctx.lineTo(cx + hHalf - arm * 1.4, hY - arm / 2);
  ctx.lineTo(cx + hHalf, hY - arm / 2 - flare);
  ctx.lineTo(cx + hHalf, hY + arm / 2 + flare);
  ctx.lineTo(cx + hHalf - arm * 1.4, hY + arm / 2);
  ctx.lineTo(cx + arm / 2, hY + arm / 2);
  ctx.lineTo(cx + arm / 2, vBottom - arm * 1.4);
  ctx.lineTo(cx + arm / 2 + flare, vBottom);
  ctx.lineTo(cx - arm / 2 - flare, vBottom);
  ctx.lineTo(cx - arm / 2, vBottom - arm * 1.4);
  ctx.lineTo(cx - arm / 2, hY + arm / 2);
  ctx.lineTo(cx - hHalf + arm * 1.4, hY + arm / 2);
  ctx.lineTo(cx - hHalf, hY + arm / 2 + flare);
  ctx.lineTo(cx - hHalf, hY - arm / 2 - flare);
  ctx.lineTo(cx - hHalf + arm * 1.4, hY - arm / 2);
  ctx.lineTo(cx - arm / 2, hY - arm / 2);
  ctx.lineTo(cx - arm / 2, vTop + arm * 1.4);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function rays(ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number, accent: string, strength: number) {
  ctx.save();
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
  g.addColorStop(0, rgba(accent, 0.22 * strength));
  g.addColorStop(0.6, rgba(accent, 0.06 * strength));
  g.addColorStop(1, rgba(accent, 0));
  ctx.fillStyle = g;
  const count = 48;
  for (let i = 0; i < count; i++) {
    const a0 = (i / count) * Math.PI * 2;
    const a1 = a0 + (Math.PI * 2) / count / (i % 2 ? 3.2 : 1.8);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a0) * radius, cy + Math.sin(a0) * radius);
    ctx.lineTo(cx + Math.cos(a1) * radius, cy + Math.sin(a1) * radius);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

/** Pointed (lancet) arch like a cathedral window. */
function archPath(ctx: CanvasRenderingContext2D, left: number, right: number, top: number, bottom: number) {
  const w = right - left;
  const spring = top + w * 0.62;
  const cx = (left + right) / 2;
  ctx.beginPath();
  ctx.moveTo(left, bottom);
  ctx.lineTo(left, spring);
  ctx.quadraticCurveTo(left, top + w * 0.12, cx, top);
  ctx.quadraticCurveTo(right, top + w * 0.12, right, spring);
  ctx.lineTo(right, bottom);
}

function cornerOrnament(ctx: CanvasRenderingContext2D, x: number, y: number, dx: number, dy: number, s: number, accent: string) {
  ctx.fillStyle = accent;
  diamond(ctx, x, y, 3.2 * s);
  ctx.strokeStyle = rgba(accent, 0.8);
  ctx.lineWidth = 0.8 * s;
  ctx.beginPath();
  ctx.arc(x + dx * 9 * s, y + dy * 9 * s, 6 * s, 0, Math.PI * 2);
  ctx.stroke();
}

// ─── Main renderer ───────────────────────────────────────────────────────────

/** Draws a lock screen wallpaper onto `canvas` at its current width × height. */
export function drawLockscreen(canvas: HTMLCanvasElement, opts: LockscreenOptions, theme: DesignTheme) {
  const W = canvas.width;
  const H = canvas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const s = W / BASE_W;
  const light = !!theme.light;
  const accent = theme.accent;

  // 1. Background
  const bg = ctx.createLinearGradient(0, 0, W * 0.35, H);
  bg.addColorStop(0, theme.bg1);
  bg.addColorStop(0.55, theme.bg2);
  bg.addColorStop(1, theme.bg3);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 2. Text block measurements (needed to place everything else)
  const centerY = opts.position === "lower" ? H * 0.6 : H * 0.53;
  const maxW = W * (opts.design === "minimal" ? 0.78 : 0.66);
  let size = 25 * s * opts.fontScale;
  let lines: string[] = [];
  for (let i = 0; i < 14; i++) {
    ctx.font = `italic 600 ${size}px ${VERSE_FONT}`;
    lines = wrapText(ctx, opts.text.trim(), maxW);
    if (lines.length <= 9) break;
    size *= 0.92;
  }
  const lineH = size * 1.28;
  const blockH = lines.length * lineH;
  const textTop = centerY - blockH / 2;
  const crossSize = 26 * s;
  const crossY = Math.max(textTop - (opts.showTag && opts.tag.trim() ? 92 : 64) * s, H * 0.2);

  // 3. Light: glow and rays from the cross
  const glow = ctx.createRadialGradient(W / 2, crossY, 0, W / 2, crossY, W * 0.95);
  glow.addColorStop(0, rgba(accent, light ? 0.22 : 0.2));
  glow.addColorStop(1, rgba(accent, 0));
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
  if (opts.design === "cathedral" || opts.design === "halo") {
    rays(ctx, W / 2, crossY, W * 1.05, accent, (opts.design === "halo" ? 1.1 : 0.8) * (light ? 0.45 : 1));
  }

  // 4. Frame
  ctx.save();
  if (opts.design === "cathedral") {
    const left = W * 0.1;
    const right = W * 0.9;
    const top = H * 0.115;
    const bottom = H * 0.855;
    archPath(ctx, left, right, top, bottom);
    ctx.closePath();
    ctx.fillStyle = light ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.16)";
    ctx.fill();
    ctx.strokeStyle = metal(ctx, accent, left, top, right, bottom);
    ctx.lineWidth = 1.6 * s;
    archPath(ctx, left, right, top, bottom);
    ctx.stroke();
    ctx.strokeStyle = rgba(accent, 0.4);
    ctx.lineWidth = 0.7 * s;
    archPath(ctx, left + 7 * s, right - 7 * s, top + 11 * s, bottom - 7 * s);
    ctx.stroke();
    ctx.fillStyle = accent;
    diamond(ctx, W / 2, top - 7 * s, 3 * s);
  } else if (opts.design === "gilded") {
    const m = 22 * s;
    ctx.strokeStyle = metal(ctx, accent, 0, 0, W, H);
    ctx.lineWidth = 1.6 * s;
    ctx.strokeRect(m, m * 1.6, W - m * 2, H - m * 3.2);
    ctx.strokeStyle = rgba(accent, 0.45);
    ctx.lineWidth = 0.7 * s;
    ctx.strokeRect(m + 7 * s, m * 1.6 + 7 * s, W - m * 2 - 14 * s, H - m * 3.2 - 14 * s);
    cornerOrnament(ctx, m, m * 1.6, 1, 1, s, accent);
    cornerOrnament(ctx, W - m, m * 1.6, -1, 1, s, accent);
    cornerOrnament(ctx, m, H - m * 1.6, 1, -1, s, accent);
    cornerOrnament(ctx, W - m, H - m * 1.6, -1, -1, s, accent);
  } else if (opts.design === "halo") {
    ctx.strokeStyle = metal(ctx, accent, W / 2 - 60 * s, crossY - 60 * s, W / 2 + 60 * s, crossY + 60 * s);
    ctx.lineWidth = 1.4 * s;
    ctx.beginPath();
    ctx.arc(W / 2, crossY + 3 * s, 30 * s, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = rgba(accent, 0.35);
    ctx.lineWidth = 0.6 * s;
    ctx.beginPath();
    ctx.arc(W / 2, crossY + 3 * s, 36 * s, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // 5. Vignette and grain for depth
  const vig = ctx.createRadialGradient(W / 2, H * 0.48, W * 0.25, W / 2, H * 0.5, H * 0.75);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, light ? "rgba(90,60,20,0.22)" : "rgba(0,0,0,0.55)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);
  const pattern = grain(ctx);
  if (pattern) {
    ctx.save();
    ctx.globalAlpha = light ? 0.35 : 0.5;
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }

  // 6. Cross
  cross(ctx, W / 2, crossY, crossSize, accent);

  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  // 7. Label: ◆ ADVENT ◆
  if (opts.showTag && opts.tag.trim()) {
    const label = opts.tag.trim().toUpperCase().slice(0, 28);
    ctx.font = `600 ${9.5 * s}px ${CAPS_FONT}`;
    ctx.fillStyle = accent;
    const y = crossY + crossSize + 30 * s;
    const w = drawSpaced(ctx, label, W / 2, y, 3.2 * s);
    ctx.fillStyle = rgba(accent, 0.75);
    diamond(ctx, W / 2 - w / 2 - 12 * s, y - 3.3 * s, 2.2 * s);
    diamond(ctx, W / 2 + w / 2 + 12 * s, y - 3.3 * s, 2.2 * s);
  }

  // 8. Verse
  ctx.save();
  ctx.font = `italic 600 ${size}px ${VERSE_FONT}`;
  ctx.fillStyle = theme.text;
  ctx.shadowColor = light ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.45)";
  ctx.shadowBlur = 10 * s;
  ctx.shadowOffsetY = 1 * s;
  lines.forEach((line, i) => ctx.fillText(line, W / 2, textTop + lineH * 0.8 + i * lineH));
  ctx.restore();

  // 9. Reference with ornament
  let afterY = textTop + blockH;
  if (opts.ref.trim()) {
    divider(ctx, W / 2, afterY + 18 * s, 34 * s, s, accent);
    ctx.font = `600 ${10.5 * s}px ${CAPS_FONT}`;
    ctx.fillStyle = accent;
    drawSpaced(ctx, opts.ref.trim().toUpperCase(), W / 2, afterY + 44 * s, 2.4 * s);
    afterY += 44 * s;
  }

  // 10. Discreet credit
  ctx.font = `500 ${7 * s}px ${CAPS_FONT}`;
  ctx.fillStyle = rgba(theme.sub, 0.7);
  drawSpaced(ctx, "GUIDECATHOLIC.COM", W / 2, opts.design === "minimal" ? H * 0.93 : H * 0.905, 2.2 * s);
}
