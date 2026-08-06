import fs from "fs";

const meta = JSON.parse(fs.readFileSync("scripts/batch-articles-meta.json", "utf8"));
let blog = fs.readFileSync("src/pages/BlogPage.tsx", "utf8");

for (const a of meta) {
  const file = fs.readFileSync(`src/pages/blog/${a.component}.tsx`, "utf8");
  const m = file.match(/(\d+ min) read/);
  if (!m) continue;
  const rt = m[1];
  const slug = a.slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  blog = blog.replace(
    new RegExp(`(slug: "${slug}"[\\s\\S]*?readTime: ")[^"]*"`),
    `$1${rt}"`
  );
}

fs.writeFileSync("src/pages/BlogPage.tsx", blog);
console.log("Done");
