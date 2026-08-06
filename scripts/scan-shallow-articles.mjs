import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");
const files = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith(".tsx") && !f.includes("ArticlePage") && !f.includes("Hub.tsx"));

function analyze(content, file) {
  const start = content.indexOf('<div className="prose prose-lg max-w-none">');
  let words = 0;
  if (start !== -1) {
    const endMarkers = ["<BlogFAQ", "<RelatedArticles", "<ArticleBottomCTA"];
    let end = content.length;
    for (const marker of endMarkers) {
      const idx = content.indexOf(marker, start);
      if (idx !== -1 && idx < end) end = idx;
    }
    const text = content
      .slice(start, end)
      .replace(/<[^>]+>/g, " ")
      .replace(/\{[^}]*\}/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    words = text.split(" ").filter(Boolean).length;
  }
  const badSubtitle = /text-xl text-text-muted leading-relaxed">St\.<\/p>/.test(content);
  const badDirect = /font-medium">(?:org,|Learn how to pray Saint Michael|St\.<\/)/.test(content);
  const h2 = (content.match(/<h2 className/g) || []).length;
  const linked = (content.match(/<LinkedText/g) || []).length;
  const faq = (content.match(/question:/g) || []).length;
  const hasQuiz = content.includes("<QuizCTA");
  const slug = content.match(/blog\/([^/]+)\//)?.[1] || file.replace(".tsx", "");
  return { file, slug, words, badSubtitle, badDirect, h2, linked, faq, hasQuiz };
}

const results = files.map((f) => analyze(fs.readFileSync(path.join(blogDir, f), "utf8"), f));
results.sort((a, b) => a.words - b.words);

const shallow = results.filter(
  (r) =>
    r.words < 700 ||
    r.badSubtitle ||
    r.badDirect ||
    (r.h2 < 4 && r.words < 900) ||
    (r.linked < 3 && r.words < 800)
);

console.log(JSON.stringify({ total: results.length, shallow: shallow.length, list: shallow }, null, 2));
