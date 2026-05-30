import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const SKIP_FILES = new Set([
  "PopeArticlePage.tsx",
  "SaintOfDayArticlePage.tsx",
  "CatholicFeastDateArticlePage.tsx",
  "SaintOfDayHub.tsx",
  "CatholicFeastDatesHub.tsx",
]);

const jsxText = (s) =>
  s
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function extractMetaDescription(content) {
  const m = content.match(/name="description"\s+content="([^"]+)"/);
  if (m) return m[1];
  const m2 = content.match(/name='description'\s+content='([^']+)'/);
  if (m2) return m2[1];
  const schema = content.match(/ArticleSchema[\s\S]*?description="([^"]+)"/);
  if (schema) return schema[1];
  return null;
}

function extractSubtitle(content) {
  const m = content.match(
    /<p className="text-xl text-text-muted leading-relaxed">\s*([\s\S]*?)<\/p>/
  );
  if (!m) return null;
  return m[1].replace(/<[^>]+>/g, "").trim();
}

function toDirectAnswer(raw) {
  if (!raw) return null;
  let text = raw
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

  // Drop trailing site branding
  text = text.replace(/\s*\|\s*Guide Catholic\s*$/i, "").trim();

  const parts = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
  let answer = parts && parts.length > 0 ? parts.slice(0, 2).join(" ").trim() : text;

  if (answer.length > 340) {
    answer = answer.slice(0, 337).replace(/\s+\S*$/, "") + "…";
  }
  if (answer.length < 40 && text.length > answer.length) {
    answer = text.slice(0, 340).replace(/\s+\S*$/, "") + (text.length > 340 ? "…" : "");
  }
  return jsxText(answer);
}

function directAnswerBlock(text) {
  return `
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">${text}</p>
              </div>
`;
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".tsx"));
let added = 0;
let skipped = 0;
let failed = [];

for (const file of files) {
  if (SKIP_FILES.has(file)) {
    skipped++;
    continue;
  }

  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("bg-amber-50/80")) {
    skipped++;
    continue;
  }

  if (!content.includes("prose prose-lg max-w-none") && !content.includes("prose prose prose-lg max-w-none")) {
    skipped++;
    continue;
  }

  const desc = extractMetaDescription(content);
  const subtitle = extractSubtitle(content);
  const answer = toDirectAnswer(desc || subtitle);
  if (!answer) {
    failed.push(file);
    continue;
  }

  const prosePatterns = [
    /(<div className="prose prose-lg max-w-none">)\s*\n/,
    /(<div className="prose prose prose-lg max-w-none">)\s*\n/,
  ];
  let newContent = content;
  for (const pattern of prosePatterns) {
    const attempt = newContent.replace(pattern, `$1\n${block}\n`);
    if (attempt !== newContent) {
      newContent = attempt;
      break;
    }
  }
  if (newContent === content) {
    for (const pattern of prosePatterns) {
      const attempt = newContent.replace(pattern, `$1\n${block}\n`);
      if (attempt !== newContent) {
        newContent = attempt;
        break;
      }
    }
    if (newContent === content) {
      const fallback = content.replace(
        /(<div className="prose prose(?: prose)?-lg max-w-none">)/,
        `$1\n${block}\n`
      );
      if (fallback === content) {
        failed.push(file);
        continue;
      }
      newContent = fallback;
    }
  }
  fs.writeFileSync(filePath, newContent);

  added++;
  if (added % 50 === 0) console.log("Added", added, "...");
}

console.log("Done. Added:", added, "Skipped:", skipped, "Failed:", failed.length);
if (failed.length) console.log("Failed files:", failed.join(", "));
