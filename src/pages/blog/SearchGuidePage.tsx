import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, BookOpen, Briefcase, Calendar, Clock, Heart, HeartPulse, Home, Shield, Sparkles } from "lucide-react";
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
import { searchGuideBySlug, type Inline } from "@/data/searchGuides";

const icons = {
  "how-to-read-the-catholic-bible-online": BookOpen,
  "how-to-pray-st-joseph-novena-buying-house": Home,
  "st-michaels-lent-novena-how-to-pray": Shield,
  "st-michaels-lent-46-day-novena": Shield,
  "catholic-bible-verse-generator": Sparkles,
  "catholic-novena-for-work-and-business": Briefcase,
  "st-joseph-house-novena-2026": Home,
  "novena-for-protection-of-children": Heart,
  "our-lady-of-the-rosary-october-7-how-to-pray": Sparkles,
  "catholic-prayer-before-surgery": HeartPulse,
  "catholic-prayer-to-buy-a-house": Home,
  "novena-to-st-joseph-to-buy-a-house": Home,
} as const;

function RichText({ parts }: { parts: Inline[] }) {
  return (
    <p className="text-text leading-relaxed mb-6">
      {parts.map((part, index) => {
        if (part.t === "text") return <span key={index}>{part.v}</span>;
        if (part.t === "in") {
          return <Link key={index} to={part.href} className={cboLinkClass}>{part.label}</Link>;
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

export default function SearchGuidePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
  const guide = searchGuideBySlug(slug);
  if (!guide) return null;

  const pageUrl = `https://guidecatholic.com/blog/${guide.slug}/`;
  const Icon = icons[guide.slug as keyof typeof icons] ?? BookOpen;

  return (
    <>
      <Helmet>
        <title>{guide.title}</title>
        <meta name="description" content={guide.description} />
        <meta name="keywords" content={guide.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={pageUrl} />
      </Helmet>
      <ArticleSchema title={guide.h1} description={guide.description} url={pageUrl} datePublished={guide.dateIso ?? "2026-10-12"} />
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
              <span className="text-text">{guide.crumb}</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{guide.dateLabel ?? "October 12, 2026"}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{guide.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">{guide.h1}</h1>
              <p className="text-xl text-text-muted leading-relaxed">{guide.excerpt}</p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Icon className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">{guide.answer}</p>
            </div>
            <BlogArticleAd slot="1906776249" />
            {guide.sections.map((section) => (
              <section key={section.h2}>
                <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">{section.h2}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <RichText key={`${section.h2}-${index}`} parts={paragraph} />
                ))}
              </section>
            ))}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
              <h2 className="font-display text-xl font-bold text-text mb-3">Read it on Catholic Bible Online</h2>
              <p className="text-text leading-relaxed mb-3">{guide.cboNote}</p>
              <a href={guide.cboUrl} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                {guide.cboLabel}
              </a>
            </div>
            <QuizCTA
              title="How is your Catholic life actually growing?"
              description="A short look at prayer, the Eucharist, and daily practice."
            />
            <BlogFAQ htmlAnswers title={guide.faqTitle} faqs={guide.faqs} />
            <RelatedArticles currentSlug={guide.slug} />
            <ArticleBottomCTA
              title="Bring the prayer into the week you already have"
              description="See the next step in prayer, the sacraments, and the duty in front of you."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
