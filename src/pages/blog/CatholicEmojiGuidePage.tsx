import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Church, Clock, Heart, Sparkles, Sun } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { cboLinkClass } from "@/lib/catholicBibleOnlineLinks";
import { catholicEmojiGuides, emojiGuideBySlug, type Inline } from "@/data/catholicEmojiGuides";

const icons = {
  "catholic-emoji-guide": Sparkles,
  "emojis-for-catholic-parish-posts": Church,
  "emojis-for-catholic-prayer-posts": Heart,
  "christmas-emojis-for-catholic-posts": Sparkles,
  "lent-and-holy-week-emojis": Calendar,
  "easter-emojis-for-catholics": Sun,
  "bible-verse-post-emojis": BookOpen,
} as const;

function RichText({ parts }: { parts: Inline[] }) {
  return (
    <p className="text-text leading-relaxed mb-6">
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
          <a key={index} href={part.href} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
            {part.label}
          </a>
        );
      })}
    </p>
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

  return (
    <>
      <Helmet>
        <title>{guide.title}</title>
        <meta name="description" content={guide.description} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={guide.h1} description={guide.description} url={pageUrl} datePublished="2026-10-04" />
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
            {guide.sections.map((section) => (
              <section key={section.h2}>
                <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{section.h2}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <RichText key={`${section.h2}-${index}`} parts={paragraph} />
                ))}
              </section>
            ))}
            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Emojis to copy</h2>
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
                        <a href={row.href} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
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
    </>
  );
}
