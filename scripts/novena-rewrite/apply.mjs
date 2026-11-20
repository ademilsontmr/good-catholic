#!/usr/bin/env node
/**
 * Replace the templated body of novena articles with intention-specific content.
 *
 * Each content file in scripts/novena-rewrite/content/<slug>.mjs exports:
 *   { file, slug, answer, sections: [{ h2, paras?: string[], list?: string[], ordered?: boolean }],
 *     prayer, faqs: [{ question, answer }], ctaAfter?: number }
 *
 * The script rewrites everything inside <div className="prose prose-lg max-w-none"> … </div>
 * and the <BlogFAQ faqs={[…]} /> array. Header, meta tags, schema and related articles stay untouched.
 *
 * Run: node scripts/novena-rewrite/apply.mjs [slug …]   (no args = every content file)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..", "..");
const contentDir = path.join(here, "content");

const lit = (s) => "`" + s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${") + "`";
const P = "text-text leading-relaxed mb-6";
const H2 = "font-display text-2xl font-bold text-text mt-10 mb-4";

function renderBody(c, adSlot, keptLinks = []) {
  const out = [];
  out.push(`              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">`);
  out.push(`                <p className="text-lg text-text leading-relaxed font-medium">{${lit(c.answer)}}</p>`);
  out.push(`              </div>`);
  if (adSlot) out.push(`              <BlogArticleAd slot="${adSlot}" />`);
  c.sections.forEach((s, i) => {
    out.push("");
    out.push(`              <h2 className="${H2}">{${lit(s.h2)}}</h2>`);
    for (const p of s.paras ?? []) {
      out.push(`              <LinkedText className="${P}" currentSlug="${c.slug}">{${lit(p)}}</LinkedText>`);
    }
    if (s.list) {
      const tag = s.ordered ? "ol" : "ul";
      const cls = s.ordered ? "list-decimal" : "list-disc";
      out.push(`              <${tag} className="${cls} pl-6 text-text space-y-3 mb-6">`);
      for (const li of s.list) out.push(`                <li>{${lit(li)}}</li>`);
      out.push(`              </${tag}>`);
    }
    if (s.after) for (const p of s.after) out.push(`              <LinkedText className="${P}" currentSlug="${c.slug}">{${lit(p)}}</LinkedText>`);
    if (s.prayer) {
      out.push(`              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">`);
      out.push(`                <h3 className="font-display text-lg font-bold text-text mb-3">{${lit(s.prayer.title)}}</h3>`);
      for (const p of s.prayer.text.split("\n\n")) {
        out.push(`                <p className="text-text italic leading-relaxed mb-3">{${lit(p)}}</p>`);
      }
      out.push(`              </div>`);
    }
    if (i === (c.ctaAfter ?? 2)) {
      out.push("");
      out.push(`              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />`);
    }
  });
  if (keptLinks.length) {
    // Hand-written links from the old body, so no internal or partner link is lost in the rewrite.
    const parts = keptLinks.map((l) =>
      l.internal
        ? `<Link to="${l.href}" className="text-accent underline underline-offset-2 hover:text-accent/80">{${lit(l.label)}}</Link>`
        : `<a href="${l.href}" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 hover:text-accent/80">{${lit(l.label)}}</a>`
    );
    out.push("");
    out.push(`              <p className="${P}">Related reading: ${parts.join(" · ")}</p>`);
  }
  return out.join("\n");
}

/** Internal <Link> and external <a> tags written by hand in the old body. */
function extractLinks(block) {
  const links = new Map();
  const clean = (t) => t.replace(/<[^>]+>/g, "").replace(/\{" "\}/g, " ").replace(/\s+/g, " ").trim();
  for (const m of block.matchAll(/<Link\s+to="([^"]+)"[^>]*>([\s\S]*?)<\/Link>/g)) links.set(m[1], { href: m[1], label: clean(m[2]), internal: true });
  for (const m of block.matchAll(/<a\s+href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) links.set(m[1], { href: m[1], label: clean(m[2]), internal: false });
  return [...links.values()].filter((l) => l.label);
}

function renderFaqs(faqs) {
  return (
    "[\n" +
    faqs.map((f) => `              { question: ${lit(f.question)}, answer: ${lit(f.answer)} }`).join(",\n") +
    "\n            ]"
  );
}

const wanted = process.argv.slice(2);
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mjs") && (!wanted.length || wanted.includes(f.replace(/\.mjs$/, ""))));
for (const f of files) {
  const c = (await import(pathToFileURL(path.join(contentDir, f)).href)).default;
  const target = path.join(root, c.file);
  let src = fs.readFileSync(target, "utf8");

  const open = '<div className="prose prose-lg max-w-none">';
  const start = src.indexOf(open);
  const faqStart = src.indexOf("<BlogFAQ faqs={[", start);
  if (start < 0 || faqStart < 0) throw new Error(`${c.file}: markers not found`);
  // the prose div closes right before <BlogFAQ
  const closeIdx = src.lastIndexOf("</div>", faqStart);
  // keep the page's own in-article ad slot (if it had one)
  const oldBlock = src.slice(start, closeIdx);
  const adSlot = oldBlock.match(/<BlogArticleAd slot="(\d+)"/)?.[1];
  // Re-running on an already rewritten page keeps its "Related reading" links too.
  const keptLinks = [...extractLinks(oldBlock), ...(c.extraLinks ?? [])].filter(
    (l, i, all) => all.findIndex((x) => x.href === l.href) === i && !(c.dropLinks ?? []).includes(l.href)
  );
  src = src.slice(0, start + open.length) + "\n" + renderBody(c, adSlot, keptLinks) + "\n            " + src.slice(closeIdx);
  if (keptLinks.some((l) => l.internal) && !/import \{[^}]*\bLink\b[^}]*\} from "react-router-dom"/.test(src)) {
    src = 'import { Link } from "react-router-dom";\n' + src;
  }

  // make sure the components the new body uses are imported
  const needs = {
    LinkedText: 'import { LinkedText } from "@/components/blog/LinkedText";',
    QuizCTA: 'import { QuizCTA } from "@/components/blog/QuizCTA";',
    ...(adSlot ? { BlogArticleAd: 'import { BlogArticleAd } from "@/components/blog/BlogArticleAd";' } : {}),
  };
  for (const [name, line] of Object.entries(needs)) {
    if (!new RegExp(`import \\{[^}]*\\b${name}\\b[^}]*\\}`).test(src)) {
      const lastImport = src.lastIndexOf("\nimport ");
      const eol = src.indexOf("\n", lastImport + 1);
      src = src.slice(0, eol + 1) + line + "\n" + src.slice(eol + 1);
    }
  }

  const faqOpen = src.indexOf("<BlogFAQ faqs={[");
  const faqEnd = src.indexOf("]} />", faqOpen);
  src = src.slice(0, faqOpen) + "<BlogFAQ faqs={" + renderFaqs(c.faqs) + "} />" + src.slice(faqEnd + "]} />".length);

  fs.writeFileSync(target, src);
  const words = [c.answer, ...c.sections.flatMap((s) => [s.h2, ...(s.paras ?? []), ...(s.list ?? []), ...(s.after ?? []), s.prayer?.text ?? ""]), ...c.faqs.flatMap((q) => [q.question, q.answer])]
    .join(" ")
    .split(/\s+/).length;
  console.log(`${c.file}: rewritten (${words} words)`);
}
