/**
 * Generate 40 unique Bible Verses pages (no look-alike templates).
 * Requires: bible-verses-topics-data.json + bible-verses-unique.json
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const topics = JSON.parse(fs.readFileSync(path.join(__dirname, "bible-verses-topics-data.json"), "utf8"));
const unique = JSON.parse(fs.readFileSync(path.join(__dirname, "bible-verses-unique.json"), "utf8"));
const OUT = path.join(__dirname, "../src/pages/blog");
const START_ID = 1346;

const SAFE_ICONS = new Set([
  "Brain", "Shield", "Heart", "Sun", "HeartPulse", "BookOpen", "Wind", "Cloud", "Flame", "Home",
  "Users", "HandHeart", "Search", "Moon", "Star", "Cross", "Church", "Sparkles", "Compass", "Mountain",
  "Flower2", "Crown", "Scale", "Bird", "TreePine", "Hand", "Baby", "GraduationCap", "Briefcase", "Link2",
  "Music", "Droplets", "Globe", "Layers", "CircleDot", "Sword", "HelpCircle", "Coins", "MapPin", "Zap",
  "HeartCrack", "ShieldAlert", "UserCheck",
]);

function safeIcon(name, i) {
  if (SAFE_ICONS.has(name)) return name;
  const fallback = ["BookOpen", "Heart", "Shield", "Sun", "Cross", "Church", "Star", "Flame"];
  return fallback[i % fallback.length];
}

function esc(s) {
  return JSON.stringify(s ?? "");
}

function xml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function verseCards(verses, withNote) {
  return verses
    .map((v, idx) => {
      const note =
        withNote && idx === 0
          ? `\n                    <p className="text-text-muted text-xs mt-2 leading-relaxed">${xml(withNote)}</p>`
          : "";
      return `                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <p className="text-accent font-semibold text-sm mb-1">${xml(v.ref)}</p>
                    <p className="text-text italic text-sm leading-relaxed">&quot;${xml(v.text)}&quot;</p>${note}
                  </div>`;
    })
    .join("\n");
}

function renderExtra(extra) {
  if (!extra) return "";
  if (extra.type === "when" || extra.type === "mistake") {
    return `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(extra.title)}</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
${extra.items.map((it) => `                <li>${xml(it)}</li>`).join("\n")}
              </ul>`;
  }
  if (extra.type === "saint" || extra.type === "prayer") {
    return `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(extra.title)}</h2>
              <div className="bg-background-muted/50 border border-border rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">${xml(extra.body)}</p>
              </div>`;
  }
  if (extra.type === "links") {
    return `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(extra.title)}</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="PLACEHOLDER_SLUG">
                ${xml(extra.body)}
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
${extra.links
  .map(
    (l) =>
      `                <li><Link to="${l.href}" className="text-accent underline underline-offset-2">${xml(l.label)}</Link></li>`
  )
  .join("\n")}
              </ul>`;
  }
  return "";
}

function generate(t, u, index) {
  const icon = safeIcon(u.icon, index);
  const breadcrumb = t.keyword.length > 42 ? t.keyword.slice(0, 39) + "..." : t.keyword;
  const firstNote = u.firstNote || null;

  const sectionBlocks = t.sections
    .map((s, si) => {
      const quiz =
        si === 0
          ? `
              <QuizCTA
                title={${esc(u.quizTitle)}}
                description={${esc(u.quizDesc)}}
              />`
          : "";
      const mid =
        si === 0
          ? `
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${t.slug}">
                ${xml(u.mid)}
              </LinkedText>`
          : "";
      return `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(s.title)}</h2>
              <div className="space-y-4 mb-8">
${verseCards(s.verses, si === 0 ? firstNote : null)}
              </div>${mid}${quiz}`;
    })
    .join("\n");

  // Vary where QuizCTA lands: after first section (default) already; some pages add CTA later only via mid structure
  let extraHtml = renderExtra(u.extraSection).replace(/PLACEHOLDER_SLUG/g, t.slug);

  // Layout variants by index
  const variant = index % 5;
  let afterVerses = "";
  if (variant === 0) {
    afterVerses = `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.practiceTitle)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${t.slug}">
                ${xml(u.practiceBody)}
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.habitTitle)}</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
${u.habitSteps.map((h) => `                <li>${xml(h)}</li>`).join("\n")}
              </ol>
${extraHtml}`;
  } else if (variant === 1) {
    afterVerses = `
${extraHtml}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.habitTitle)}</h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
${u.habitSteps.map((h) => `                <li>${xml(h)}</li>`).join("\n")}
              </ul>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.practiceTitle)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${t.slug}">
                ${xml(u.practiceBody)}
              </LinkedText>`;
  } else if (variant === 2) {
    afterVerses = `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.practiceTitle)}</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed">${xml(u.practiceBody)}</p>
              </div>
${extraHtml}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.habitTitle)}</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="${t.slug}">
                ${xml(u.habitIntro || "Choose one habit for seven days, then add another.")}
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
${u.habitSteps.map((h) => `                <li>${xml(h)}</li>`).join("\n")}
              </ol>`;
  } else if (variant === 3) {
    const lectioTitle = u.lectioTitle || `Lectio with Verses on ${t.keyword}`;
    afterVerses = `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(lectioTitle)}</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li><strong>Silence</strong> — one slow breath before reading.</li>
                <li><strong>Listen</strong> — read the verse you marked as most needed.</li>
                <li><strong>Respond</strong> — one sentence of honest prayer about this theme.</li>
                <li><strong>Act</strong> — one concrete charity before bedtime.</li>
              </ol>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.practiceTitle)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${t.slug}">
                ${xml(u.practiceBody)}
              </LinkedText>
${extraHtml}`;
  } else {
    afterVerses = `
${extraHtml}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.practiceTitle)}</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${t.slug}">
                ${xml(u.practiceBody)}
              </LinkedText>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(u.habitTitle)}</h2>
              <div className="grid gap-3 mb-6">
${u.habitSteps
  .map(
    (h, hi) =>
      `                <div className="border border-border rounded-lg p-4 text-text text-sm"><span className="font-semibold text-accent">Step ${hi + 1}.</span> ${xml(h)}</div>`
  )
  .join("\n")}
              </div>`;
  }

  const faqs = (u.faqs || []).map(([q, a]) => `                { question: ${esc(q)}, answer: ${esc(a)} }`).join(",\n");

  return `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ${icon}, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ${t.component}() {
  return (
    <>
      <Helmet>
        <title>{${esc(t.h1 + " | Guide Catholic")}}</title>
        <meta name="description" content={${esc(t.desc)}} />
        <meta name="keywords" content={${esc(t.keywords)}} />
        <link rel="canonical" href="https://guidecatholic.com/blog/${t.slug}/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={${esc(t.h1)}}
        description={${esc(t.desc)}}
        url="https://guidecatholic.com/blog/${t.slug}/"
        datePublished="2026-08-11"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: ${esc(breadcrumb)}, url: "https://guidecatholic.com/blog/${t.slug}/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">${xml(breadcrumb)}</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">${xml(u.badge || "Bible & Faith")}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />${u.readMinutes || 10 + (index % 5)} min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                ${xml(t.h1)}
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                ${xml(u.subtitle)}
              </p>
            </header>

            <div className="aspect-video ${u.bg} rounded-2xl flex items-center justify-center mb-10">
              <${icon} className="w-24 h-24 ${u.iconColor}" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="${u.calloutClass || "mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl"}">
                <p className="text-lg text-text leading-relaxed font-medium">${xml(t.answer)}</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${t.slug}">
                ${xml(u.bridge)}
              </LinkedText>
${sectionBlocks}
${afterVerses}

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;${xml(u.closingQuote)}&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— ${xml(u.closingSource)}</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="${t.slug}"
              faqs={[
${faqs}
              ]}
            />
            <RelatedArticles currentSlug="${t.slug}" />
            <ArticleBottomCTA
              title={${esc(u.ctaTitle || "Let Scripture shape your next step")}}
              description={${esc(u.quizDesc)}}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
`;
}

const blog = [];
const lazy = [];
const routes = [];
const links = [];
const neededIcons = new Set(["BookOpen"]);

for (let i = 0; i < topics.length; i++) {
  const t = topics[i];
  const u = unique[t.slug];
  if (!u) {
    console.error("Missing unique overlay for", t.slug);
    process.exit(1);
  }
  const icon = safeIcon(u.icon, i);
  neededIcons.add(icon);
  fs.writeFileSync(path.join(OUT, `${t.component}.tsx`), generate(t, u, i));

  const id = START_ID + i;
  const excerpt = t.desc.length > 140 ? t.desc.slice(0, 137) + "..." : t.desc;
  blog.push(`  {
    id: ${id},
    slug: "${t.slug}",
    title: ${esc(t.keyword)},
    excerpt: ${esc(excerpt)},
    date: "2026-08-11",
    readTime: "${u.readMinutes || 10 + (i % 5)} min",
    category: ${esc(u.badge || "Bible & Faith")},
    icon: ${icon},
    bgColor: "${u.bg}",
    iconColor: "${u.iconColor}"
  }`);
  lazy.push(`const ${t.component} = lazy(() => import("./pages/blog/${t.component}"));`);
  routes.push(`            <Route path="/blog/${t.slug}/" element={<${t.component} />} />`);
  links.push(`  ${esc(t.keyword)}: "/blog/${t.slug}/",`);
  console.log("unique", t.slug, "variant", i % 5, icon);
}

fs.writeFileSync(path.join(__dirname, "bible-verses-blog-entries.txt"), blog.join(",\n") + ",\n");
fs.writeFileSync(path.join(__dirname, "bible-verses-lazy-imports.txt"), lazy.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "bible-verses-routes.txt"), routes.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "bible-verses-interlinks.txt"), links.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "bible-verses-needed-icons.txt"), [...neededIcons].join(",") + "\n");
console.log("Done:", topics.length);
