/**
 * Regenerate favicons after editing public/favicon.svg:
 *   npm install --save-dev sharp to-ico && node scripts/generate-favicons.mjs && npm uninstall sharp to-ico
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const svgPath = join(publicDir, "favicon.svg");
const svg = await readFile(svgPath);

const sizes = [16, 32, 48, 180, 192];
const pngBuffers = {};

for (const size of sizes) {
  const buffer = await sharp(svg).resize(size, size).png().toBuffer();
  pngBuffers[size] = buffer;
  await writeFile(join(publicDir, `favicon-${size}.png`), buffer);
}

await writeFile(join(publicDir, "favicon.ico"), await toIco([pngBuffers[16], pngBuffers[32], pngBuffers[48]]));
await writeFile(join(publicDir, "apple-touch-icon.png"), pngBuffers[180]);

console.log("Generated favicon.ico, apple-touch-icon.png, and favicon-*.png");
