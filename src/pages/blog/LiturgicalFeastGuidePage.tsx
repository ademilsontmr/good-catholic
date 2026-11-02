import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, Church, Clock, Cross, Flame, Heart, Star, Sun, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { CopyPrayerButton } from "@/components/blog/DailyPrayerExtras";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";
import { liturgicalFeastGuideBySlug } from "@/data/liturgicalFeastGuides";

const ICONS: Record<string, LucideIcon> = {
  "all-saints-day": Star,
  "immaculate-conception": Heart,
  "our-lady-of-guadalupe": Heart,
  "catholic-christmas": Star,
  "ash-wednesday": Flame,
  "saint-patricks-day": Cross,
  "solemnity-of-saint-joseph": Church,
  "catholic-easter": Sun,
  "pentecost-sunday": Flame,
  "corpus-christi-usa": Cross,
  "catholic-christmas-traditions": TreePine,
  "all-souls-day": Flame,
};

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\]|\{\{[^}]+\}\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        const internal = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
        if (internal) {
          return (
            <Link key={index} to={internal[1]} className={cboLinkClass}>
              {internal[2]}
            </Link>
          );
        }
        const external = part.match(/^\{\{([^|]+)\|([^}]+)\}\}$/);
        if (external) {
          return (
            <a key={index} href={external[1]} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
              {external[2]}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function LiturgicalFeastGuidePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const guide = liturgicalFeastGuideBySlug(slug);
  if (!guide) return null;

  const pageUrl = `https://guidecatholic.com/blog/${guide.slug}/`;
  const Icon = ICONS[guide.slug] ?? Church;
  const published = guide.datePublished ?? "2026-10-31";
  const publishedLabel = new Date(`${published}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <Helmet>
        <title>{guide.title} | Guide Catholic</title>
        <meta name="description" content={guide.description} />
        <meta name="keywords" content={guide.keywords} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        url={pageUrl}
        datePublished={published}
        dateModified={published}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: guide.crumb, url: pageUrl },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-text">{guide.crumb}</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">{guide.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" />{publishedLabel}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" />{guide.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">{guide.h1}</h1>
              <p className="text-xl text-text-muted leading-relaxed">{guide.lede}</p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Icon className="w-24 h-24 text-amber-700" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium"><Rich text={guide.answer} /></p>
            </div>
            <BlogArticleAd slot="1906776249" />

            <nav aria-labelledby="toc-heading" className="mb-10 rounded-xl border border-border bg-background-muted/40 p-6">
              <p id="toc-heading" className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">In this guide</p>
              <ol className="list-decimal pl-5 space-y-1 text-text">
                <li><a href="#key-dates" className={cboLinkClass}>Key dates</a></li>
                {guide.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={cboLinkClass}>{section.heading}</a>
                  </li>
                ))}
                <li><a href="#feast-prayer" className={cboLinkClass}>A prayer for this feast</a></li>
              </ol>
            </nav>

            <dl className="mb-10 grid gap-3 sm:grid-cols-2">
              {guide.facts.map((fact) => (
                <div key={fact.label} className="rounded-xl border border-border p-4">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-text-muted">{fact.label}</dt>
                  <dd className="mt-1 text-text leading-relaxed">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <h2 id="key-dates" className="scroll-mt-24 font-display text-2xl font-bold text-text mt-2 mb-4">Key dates</h2>
            <ol className="mb-10 space-y-4 border-l-2 border-accent/30 pl-5">
              {guide.timeline.map((item) => (
                <li key={`${item.when}-${item.what.slice(0, 24)}`} className="text-text leading-relaxed">
                  <span className="font-semibold text-accent">{item.when}. </span>
                  <Rich text={item.what} />
                </li>
              ))}
            </ol>

            {guide.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id} className="scroll-mt-24 font-display text-2xl font-bold text-text mt-10 mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-text leading-relaxed mb-6">
                    <Rich text={paragraph} />
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-5 space-y-2 text-text leading-relaxed mb-6">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 48)}><Rich text={item} /></li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="mb-6 overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-left text-sm">
                      <caption className="px-4 pt-3 text-left text-sm font-semibold text-text-muted">{section.table.caption}</caption>
                      <thead className="bg-background-muted/60">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col" className="px-4 py-3 font-semibold text-text">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row) => (
                          <tr key={row.join("|")} className="border-t border-border align-top">
                            {row.map((cell, index) => (
                              <td key={`${index}-${cell.slice(0, 16)}`} className="px-4 py-3 text-text leading-relaxed">
                                <Rich text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.callout && (
                  <aside className="mb-6 rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">{section.callout.label}</p>
                    <p className="text-text leading-relaxed"><Rich text={section.callout.text} /></p>
                  </aside>
                )}
              </section>
            ))}

            <h2 id="feast-prayer" className="scroll-mt-24 font-display text-2xl font-bold text-text mt-10 mb-4">A prayer for this feast</h2>
            <p className="text-text leading-relaxed mb-4">
              This prayer was written for this guide. It is not a liturgical text from the Missal, and it does not guarantee any particular outcome.
            </p>
            <div className="mb-8 rounded-xl border border-amber-200/80 bg-amber-50/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Original prayer from Guide Catholic</p>
              <p className="whitespace-pre-line text-text leading-relaxed font-medium">{guide.prayer}</p>
              <CopyPrayerButton text={guide.prayer} />
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Keep reading</h2>
            <ul className="list-disc pl-5 space-y-2 text-text leading-relaxed mb-8">
              {guide.related.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={cboLinkClass}>{item.label}</Link>
                </li>
              ))}
            </ul>

            <QuizCTA />
            <BlogFAQ htmlAnswers faqs={guide.faqs} />
            <RelatedArticles currentSlug={guide.slug} />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
