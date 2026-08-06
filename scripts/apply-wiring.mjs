import fs from "fs";

const blogBlock = fs.readFileSync("scripts/blog-entries-block.txt", "utf8");
const lazyImports = fs.readFileSync("scripts/lazy-imports.txt", "utf8");
const routes = fs.readFileSync("scripts/routes.txt", "utf8");
const sitemap = fs.readFileSync("scripts/sitemap.txt", "utf8");

// BlogPage
let blogPage = fs.readFileSync("src/pages/BlogPage.tsx", "utf8");
blogPage = blogPage.replace(
  /import \{([^}]+)\} from "lucide-react";/,
  (m, icons) => {
    const needed = ["Brain", "Search", "Baby", "ShieldAlert", "GraduationCap", "Gavel", "HeartCrack", "HandHeart", "Zap", "Crown", "CircleDot"];
    const existing = icons.split(",").map((s) => s.trim());
    for (const ic of needed) {
      if (!existing.includes(ic) && !existing.includes(`type LucideIcon`)) {
        const typeIdx = existing.findIndex((x) => x.startsWith("type LucideIcon"));
        if (typeIdx >= 0) existing.splice(typeIdx, 0, ic);
        else existing.push(ic);
      }
    }
    return `import { ${existing.join(", ")} } from "lucide-react";`;
  }
);
blogPage = blogPage.replace(
  /export const blogPosts: BlogPost\[\] = \[\n/,
  `export const blogPosts: BlogPost[] = [\n${blogBlock},\n`
);
fs.writeFileSync("src/pages/BlogPage.tsx", blogPage);

// App.tsx
let app = fs.readFileSync("src/App.tsx", "utf8");
app = app.replace(
  /const UndoerOfKnotsNovenaGuide = lazy\(\(\) => import\("\.\/pages\/blog\/UndoerOfKnotsNovenaGuide"\)\);\n\n\/\/ Doctrine/,
  `const UndoerOfKnotsNovenaGuide = lazy(() => import("./pages/blog/UndoerOfKnotsNovenaGuide"));\n${lazyImports}\n\n// Doctrine`
);
app = app.replace(
  /<Route path="\/blog\/undoer-of-knots-novena-guide\/" element=\{<UndoerOfKnotsNovenaGuide \/>} \/>\n\n            \{\/\* Saints Series \*\/\}/,
  `<Route path="/blog/undoer-of-knots-novena-guide/" element={<UndoerOfKnotsNovenaGuide />} />\n${routes}\n\n            {/* Saints Series */}`
);
fs.writeFileSync("src/App.tsx", app);

// sitemap
let sm = fs.readFileSync("public/sitemap.xml", "utf8");
sm = sm.replace(
  /  <url><loc>https:\/\/guidecatholic\.com\/blog\/undoer-of-knots-novena-guide\/<\/loc>[\s\S]*?<\/urlset>/,
  `  <url><loc>https://guidecatholic.com/blog/undoer-of-knots-novena-guide/</loc><lastmod>2026-06-01</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>\n${sitemap}\n</urlset>`
);
fs.writeFileSync("public/sitemap.xml", sm);

// interlinks
const interlinks = fs.readFileSync("src/lib/interlinks.ts", "utf8");
const newLinks = `
  "Litany of Loreto": "/blog/litany-of-loreto-catholic/",
  "Prayer of Abandonment": "/blog/prayer-of-abandonment-catholic/",
  "Spiritual Communion": "/blog/act-of-spiritual-communion-catholic/",
  "Act of Spiritual Communion": "/blog/act-of-spiritual-communion-catholic/",
  "St. Expedite": "/blog/st-expedite-novena-guide/",
  "novena for the dead": "/blog/novena-for-the-dead-catholic/",
  "novena for anxiety": "/blog/novena-for-anxiety-catholic/",
  "St. Anthony novena": "/blog/st-anthony-novena-lost-things/",
  "St. Gerard": "/blog/st-gerard-novena-pregnancy/",
  "novena for addiction": "/blog/novena-for-addiction-catholic/",
  "novena for exams": "/blog/novena-for-exams-catholic/",
  "St. Michael novena": "/blog/st-michael-novena-protection/",
  "novena for fertility": "/blog/novena-for-fertility-catholic/",
  "Corpus Christi": "/blog/corpus-christi-feast-guide-catholic/",
  "Sacred Heart devotion": "/blog/sacred-heart-devotion-complete-guide/",
  "Assumption of Mary": "/blog/assumption-of-mary-catholic-guide/",
  "Queenship of Mary": "/blog/queenship-of-mary-catholic-guide/",
  "RCIA": "/blog/how-long-is-rcia-process/",
  "godparent": "/blog/catholic-godparent-requirements-usa/",
  "First Communion": "/blog/what-age-first-communion-catholic-usa/",
  "organ donation": "/blog/can-catholics-donate-organs/",
  "cremated remains": "/blog/can-catholics-keep-ashes-at-home/",
`;
fs.writeFileSync(
  "src/lib/interlinks.ts",
  interlinks.replace(
    `"novena for clarity": "/blog/novena-for-clarity-catholic/",`,
    `"novena for clarity": "/blog/novena-for-clarity-catholic/",${newLinks}`
  )
);

console.log("Patched BlogPage, App, sitemap, interlinks");
