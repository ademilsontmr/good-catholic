import { createContext, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Church, Clock, Heart, MessageCircle, Sparkles, Star, Sun } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";
import { CopyPrayerButton } from "@/components/blog/DailyPrayerExtras";
import { catholicEmojiGuides, emojiGuideBySlug, type EmojiGuide, type Inline } from "@/data/catholicEmojiGuides";

const icons = {
  "catholic-emoji-guide": Sparkles,
  "emojis-for-catholic-parish-posts": Church,
  "emojis-for-catholic-prayer-posts": Heart,
  "christmas-emojis-for-catholic-posts": Sparkles,
  "lent-and-holy-week-emojis": Calendar,
  "easter-emojis-for-catholics": Sun,
  "bible-verse-post-emojis": BookOpen,
  "emojis-for-talking-about-god": MessageCircle,
  "nativity-emojis": Star,
} as const;

const ALLEMOJIPEDIA = "https://allemojipedia.com/";
const MAX_FOLLOWED_DEEP_LINKS = 3;

const FollowedLinks = createContext<Set<string>>(new Set());

/** Editorial links to Allemojipedia stay followed only for the homepage and the first few pages cited in the body. */
function followedAllemojipediaLinks(guide: EmojiGuide) {
  const hrefs: string[] = [];
  for (const section of guide.sections) {
    const groups = [
      ...section.paragraphs,
      ...(section.list ?? []),
      ...(section.table?.rows.flat() ?? []),
      ...(section.callout ? [section.callout.parts] : []),
    ];
    for (const part of groups.flat()) {
      if (part.t === "ext" && part.href.startsWith(ALLEMOJIPEDIA)) hrefs.push(part.href);
    }
  }
  const followed = new Set<string>();
  if (hrefs.includes(ALLEMOJIPEDIA)) followed.add(ALLEMOJIPEDIA);
  for (const href of hrefs) {
    if (followed.size >= MAX_FOLLOWED_DEEP_LINKS + 1) break;
    if (href !== ALLEMOJIPEDIA) followed.add(href);
  }
  return followed;
}

function externalRel(href: string, followed: Set<string>) {
  if (href.startsWith(ALLEMOJIPEDIA) && !followed.has(href)) return "nofollow noopener noreferrer";
  return "noopener noreferrer";
}

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function RichText({ parts }: { parts: Inline[] }) {
  return (
    <p className="text-text leading-relaxed mb-6">
      <InlineParts parts={parts} />
    </p>
  );
}

function InlineParts({ parts }: { parts: Inline[] }) {
  const followed = useContext(FollowedLinks);
  return (
    <>
      {parts.map((part, index) => {
        if (part.t === "text") return <span key={index}>{part.v}</span>;
        if (part.t === "in") {
          return (
            <Link key={index} to={part.href} className={cboLinkClass}>
              {part.label}
            </Link>
          );
        }
        return (
          <a key={index} href={part.href} target="_blank" rel={externalRel(part.href, followed)} className={cboLinkClass}>
            {part.label}
          </a>
        );
      })}
    </>
  );
}

export default function CatholicEmojiGuidePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const guide = emojiGuideBySlug(slug);
  if (!guide) return null;

  const pageUrl = `https://guidecatholic.com/blog/${guide.slug}/`;
  const Icon = icons[guide.slug as keyof typeof icons] ?? Sparkles;
  const others = catholicEmojiGuides.filter((item) => item.slug !== guide.slug);
  const followed = followedAllemojipediaLinks(guide);

  return (
    <FollowedLinks.Provider value={followed}>
      <Helmet>
        <title>{guide.title}</title>
        <meta name="description" content={guide.description} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={guide.h1} description={guide.description} url={pageUrl} datePublished={guide.datePublished ?? "2026-10-04"} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: guide.h1, url: pageUrl },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Catholic emojis</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">{guide.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{guide.dateLabel}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{guide.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">{guide.h1}</h1>
              <p className="text-xl text-text-muted leading-relaxed">{guide.excerpt}</p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Icon className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">{guide.answer}</p>
            </div>
            <BlogArticleAd slot="1906776249" />
            {guide.sections.length >= 4 && (
              <nav aria-labelledby="toc-heading" className="mb-10 p-6 bg-background-muted/60 border border-border rounded-xl">
                <h2 id="toc-heading" className="font-display text-lg font-bold text-text mb-3">In this guide</h2>
                <ol className="list-decimal list-inside space-y-1.5 text-text">
                  {guide.sections.map((section) => (
                    <li key={section.h2}>
                      <a href={`#${sectionId(section.h2)}`} className={cboLinkClass}>{section.h2}</a>
                    </li>
                  ))}
                  {guide.combos && (
                    <li><a href="#copy-ready-messages" className={cboLinkClass}>Copy-ready emoji messages</a></li>
                  )}
                  <li><a href="#emojis-to-copy" className={cboLinkClass}>Emojis to copy</a></li>
                </ol>
              </nav>
            )}
            {guide.sections.map((section) => (
              <section key={section.h2} id={sectionId(section.h2)} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{section.h2}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <RichText key={`${section.h2}-${index}`} parts={paragraph} />
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 text-text space-y-3 mb-6 leading-relaxed">
                    {section.list.map((item, index) => (
                      <li key={index}><InlineParts parts={item} /></li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left text-sm border border-border rounded-xl overflow-hidden">
                      <caption className="text-left text-sm text-text-muted mb-2">{section.table.caption}</caption>
                      <thead className="bg-background-muted/60">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} scope="col" className="p-3 font-semibold text-text">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-t border-border align-top">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="p-3 text-text">
                                <InlineParts parts={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.callout && (
                  <aside className="mb-6 border-l-4 border-amber-400 bg-amber-50/70 rounded-r-xl p-5">
                    <p className="font-semibold text-text mb-2">{section.callout.label}</p>
                    <p className="text-text leading-relaxed"><InlineParts parts={section.callout.parts} /></p>
                  </aside>
                )}
              </section>
            ))}
            {guide.combos && (
              <section id="copy-ready-messages" className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Copy-ready emoji messages</h2>
                <p className="text-text leading-relaxed mb-4">
                  Tap copy, paste into your chat, and change the details to fit the person.
                </p>
                <ul className="space-y-4 mb-8">
                  {guide.combos.map((item) => (
                    <li key={item.label} className="p-4 border border-border rounded-xl bg-background">
                      <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                        <span className="font-semibold text-text">{item.label}</span>
                        <span className="text-2xl" aria-hidden="true">{item.combo}</span>
                      </div>
                      <p className="text-text leading-relaxed">{item.message}</p>
                      <CopyPrayerButton text={item.message} label="Copy message" />
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <h2 id="emojis-to-copy" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Emojis to copy</h2>
            <p className="text-text leading-relaxed mb-4">
              Each name links to the character on Allemojipedia so you can confirm the meaning and copy it.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left text-sm border border-border rounded-xl overflow-hidden">
                <thead className="bg-background-muted/60">
                  <tr>
                    <th className="p-3 font-semibold text-text">Emoji</th>
                    <th className="p-3 font-semibold text-text">Name</th>
                    <th className="p-3 font-semibold text-text">Use it for</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.rows.map((row) => (
                    <tr key={row.name} className="border-t border-border">
                      <td className="p-3 text-2xl">{row.emoji}</td>
                      <td className="p-3">
                        <a href={row.href} target="_blank" rel={externalRel(row.href, new Set())} className={cboLinkClass}>
                          {row.name}
                        </a>
                      </td>
                      <td className="p-3 text-text">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <QuizCTA
              title="How is your Catholic life actually growing?"
              description="A short look at prayer, the Eucharist, and daily practice — useful after you decide what your next post should say."
            />
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The other guides in this series</h2>
            <ul className="list-disc list-inside text-text space-y-2 mb-8">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link to={`/blog/${item.slug}/`} className={cboLinkClass}>{item.h1}</Link>
                </li>
              ))}
            </ul>
            <BlogFAQ htmlAnswers title="Questions about these emojis" faqs={guide.faqs} />
            <RelatedArticles currentSlug={guide.slug} />
            <ArticleBottomCTA
              title="Want a guide for the habit, not only the caption?"
              description="Take the free Catholic life assessment and see the next step in prayer and the sacraments."
            />
          </div>
        </article>
        <Footer />
      </div>
    </FollowedLinks.Provider>
  );
}
