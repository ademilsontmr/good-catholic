import fs from "fs";
import path from "path";

const roots = [
  path.join(process.cwd(), "src/pages/blog"),
  path.join(process.cwd(), "src/pages"),
];

const IMPORT = `import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";`;

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function toAttr(value) {
  if (value.includes('"')) {
    return `{${JSON.stringify(value)}}`;
  }
  return `"${value}"`;
}

function addImport(content) {
  if (content.includes("@/components/blog/ArticleBottomCTA")) return content;
  const anchor = content.indexOf('from "@/components/');
  if (anchor === -1) {
    const helmet = content.indexOf('import { Helmet }');
    if (helmet === -1) return IMPORT + "\n" + content;
    const lineEnd = content.indexOf("\n", helmet);
    return content.slice(0, lineEnd + 1) + IMPORT + "\n" + content.slice(lineEnd + 1);
  }
  let pos = anchor;
  while (pos !== -1) {
    const lineEnd = content.indexOf("\n", pos);
    const insertAt = lineEnd + 1;
    const nextImport = content.indexOf('import ', insertAt);
    const nextNonImport = content.slice(insertAt).search(/^(?!import )/m);
    if (nextImport === -1 || nextImport > nextNonImport) {
      return content.slice(0, insertAt) + IMPORT + "\n" + content.slice(insertAt);
    }
    pos = content.indexOf('from "@/components/', insertAt);
  }
  return content;
}

function replaceBlock(content) {
  const pattern =
    /<div className="mt-12 p-8 bg-gradient-to-r from-accent\/10 to-primary\/10 rounded-2xl text-center">([\s\S]*?)<\/div>/g;

  let changed = false;
  const next = content.replace(pattern, (_, inner) => {
    changed = true;
    const h3 = inner.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const p = inner.match(/<p className="text-text-muted mb-6">\s*([\s\S]*?)\s*<\/p>/);
    const title = h3 ? stripTags(h3[1]) : null;
    const description = p ? stripTags(p[1]) : null;

    if (title && description) {
      return `<ArticleBottomCTA title=${toAttr(title)} description=${toAttr(description)} />`;
    }
    return "<ArticleBottomCTA />";
  });

  return changed ? next : content;
}

let updated = 0;

for (const root of roots) {
  const files = fs
    .readdirSync(root)
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => path.join(root, f));

  for (const file of files) {
    const original = fs.readFileSync(file, "utf8");
    if (!original.includes("bg-gradient-to-r from-accent/10 to-primary/10")) continue;

    let content = replaceBlock(original);
    if (content === original) continue;

    content = addImport(content);
    fs.writeFileSync(file, content);
    updated++;
    console.log("Updated", path.relative(process.cwd(), file));
  }
}

console.log("\nDone. Files updated:", updated);
