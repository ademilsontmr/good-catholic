#!/usr/bin/env node
/**
 * Adds BreadcrumbSchema to static blog article pages that already use ArticleSchema.
 * Usage: node scripts/apply-breadcrumb-schema.mjs [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, "../src/pages/blog");
const dryRun = process.argv.includes("--dry-run");
const BATCH_SIZE = 50;

const SKIP_FILES = new Set([
  "CatholicFeastDateArticlePage.tsx",
  "SaintOfDayArticlePage.tsx",
  "CatholicFeastDatesHub.tsx",
  "SaintOfDayHub.tsx",
]);

function findArticleSchemaEnd(content, startIndex) {
  let i = startIndex;
  while (i < content.length - 1) {
    if (content[i] === "/" && content[i + 1] === ">") {
      return i + 2;
    }
    i++;
  }
  return -1;
}

function extractCanonical(content) {
  const m = content.match(/<link rel="canonical" href="([^"]+)"\s*\/?>/);
  return m?.[1] ?? null;
}

function extractBreadcrumbLabel(content) {
  const m = content.match(/<span className="text-text[^"]*">([^<{]+)<\/span>/);
  if (m?.[1]?.trim()) return m[1].trim();

  const titleProp = content.match(/<ArticleSchema[\s\S]*?\btitle="([^"]+)"/);
  if (titleProp?.[1]) return titleProp[1];

  const helmetTitle = content.match(/<title>([^<|]+)/);
  if (helmetTitle?.[1]?.trim()) return helmetTitle[1].trim();

  return null;
}

function slugToLabel(url) {
  const slug = url.replace(/\/$/, "").split("/").pop() || "Article";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function updateImport(content) {
  if (content.includes("BreadcrumbSchema")) return content;

  if (content.includes("ArticleSchema, HowToSchema")) {
    return content.replace(
      'import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";',
      'import { ArticleSchema, BreadcrumbSchema, HowToSchema } from "@/components/blog/ArticleSchema";'
    );
  }

  return content.replace(
    'import { ArticleSchema } from "@/components/blog/ArticleSchema";',
    'import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";'
  );
}

function escapeJsxString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildBreadcrumbBlock(label, url, indent = "      ") {
  const safeLabel = escapeJsxString(label);
  return `${indent}<BreadcrumbSchema
${indent}  items={[
${indent}    { name: "Home", url: "https://guidecatholic.com/" },
${indent}    { name: "Blog", url: "https://guidecatholic.com/blog/" },
${indent}    { name: "${safeLabel}", url: "${url}" },
${indent}  ]}
${indent}/>`;
}

function buildPopeBreadcrumbBlock(indent = "      ") {
  return `${indent}<BreadcrumbSchema
${indent}  items={[
${indent}    { name: "Home", url: "https://guidecatholic.com/" },
${indent}    { name: "Blog", url: "https://guidecatholic.com/blog/" },
${indent}    { name: "List of Popes", url: "https://guidecatholic.com/blog/list-of-all-popes-catholic-complete-guide/" },
${indent}    { name: displayName, url: canonical },
${indent}  ]}
${indent}/>`;
}

function processFile(filePath) {
  const name = path.basename(filePath);
  let content = fs.readFileSync(filePath, "utf8");

  if (SKIP_FILES.has(name)) return { name, status: "skipped-hub-or-done" };
  if (!content.includes("ArticleSchema")) return { name, status: "no-article-schema" };
  if (content.includes("BreadcrumbSchema")) return { name, status: "already-has" };

  const schemaStart = content.indexOf("<ArticleSchema");
  if (schemaStart === -1) return { name, status: "no-article-schema" };

  const schemaEnd = findArticleSchemaEnd(content, schemaStart);
  if (schemaEnd === -1) return { name, status: "parse-error" };

  content = updateImport(content);

  let block;
  if (name === "PopeArticlePage.tsx") {
    block = buildPopeBreadcrumbBlock();
  } else {
    const canonical = extractCanonical(content);
    if (!canonical) return { name, status: "no-canonical" };
    const label = extractBreadcrumbLabel(content) || slugToLabel(canonical);
    block = buildBreadcrumbBlock(label, canonical);
  }

  const insertAt = findArticleSchemaEnd(content, content.indexOf("<ArticleSchema"));
  const before = content.slice(0, insertAt);
  const after = content.slice(insertAt);
  content = `${before}\n${block}${after}`;

  if (!dryRun) fs.writeFileSync(filePath, content);
  return { name, status: "updated" };
}

const files = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => path.join(blogDir, f))
  .sort();

const results = files.map(processFile);
const updated = results.filter((r) => r.status === "updated");
const already = results.filter((r) => r.status === "already-has");
const skipped = results.filter((r) => r.status === "skipped-hub-or-done");
const errors = results.filter(
  (r) => !["updated", "already-has", "skipped-hub-or-done"].includes(r.status)
);

console.log(`BreadcrumbSchema batch apply${dryRun ? " (dry run)" : ""}`);
console.log(`Updated: ${updated.length} | Already had: ${already.length} | Skipped hubs: ${skipped.length}`);

if (updated.length) {
  for (let i = 0; i < updated.length; i += BATCH_SIZE) {
    const batch = updated.slice(i, i + BATCH_SIZE);
    console.log(`\nBatch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} files):`);
    batch.forEach((r) => console.log(`  + ${r.name}`));
  }
}

if (errors.length) {
  console.log("\nNeeds manual review:");
  errors.forEach((r) => console.log(`  ? ${r.name}: ${r.status}`));
}

console.log("\nDone.");
