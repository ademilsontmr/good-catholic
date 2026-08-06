import fs from "fs";
import path from "path";

const articles = JSON.parse(fs.readFileSync("scripts/batch-articles-meta.json", "utf8"));
const blogEntries = articles.map((a, idx) => ({
  id: 1303 + idx,
  slug: a.slug,
  title: a.title,
  excerpt: a.desc,
  date: "2026-05-30",
  readTime: a.type === "guide" ? "10 min" : "7 min",
  category: a.category === "Prayer" ? "Prayers & Devotions" : a.category === "Liturgy" ? "Liturgy & Worship" : "Catholic Living",
  icon: a.icon,
  bgColor: a.bg,
  iconColor: a.iconColor,
}));

// Highest id first for blog listing
const blogBlock = [...blogEntries].reverse().map((e) => `  {
    id: ${e.id},
    slug: "${e.slug}",
    title: "${e.title.replace(/"/g, '\\"')}",
    excerpt: "${e.excerpt.replace(/"/g, '\\"')}",
    date: "${e.date}",
    readTime: "${e.readTime}",
    category: "${e.category}",
    icon: ${e.icon},
    bgColor: "${e.bgColor}",
    iconColor: "${e.iconColor}"
  }`).join(",\n");

fs.writeFileSync("scripts/blog-entries-block.txt", blogBlock);

const lazyImports = articles.map((a) => `const ${a.component} = lazy(() => import("./pages/blog/${a.component}"));`).join("\n");
const routes = articles.map((a) => `            <Route path="/blog/${a.slug}/" element={<${a.component} />} />`).join("\n");
const sitemap = articles.map((a) => `  <url><loc>https://guidecatholic.com/blog/${a.slug}/</loc><lastmod>2026-05-30</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>`).join("\n");

fs.writeFileSync("scripts/lazy-imports.txt", lazyImports);
fs.writeFileSync("scripts/routes.txt", routes);
fs.writeFileSync("scripts/sitemap.txt", sitemap);
console.log("Generated wiring files");
