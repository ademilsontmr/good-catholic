import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { CATHOLIC_FEAST_DATE_BY_SLUG } from "@/data/catholicFeastDateArticles";
import { catholicFeastDateBlogSlug, catholicFeastDatePath } from "@/lib/catholicFeastDateSlugs";

export default function CatholicFeastDateArticlePage() {
  const { feastSlug } = useParams<{ feastSlug: string }>();
  const article = feastSlug ? CATHOLIC_FEAST_DATE_BY_SLUG[feastSlug] : undefined;
  if (!article) return <Navigate to="/blog/catholic-feast-days/" replace />;

  const canonical = `https://guidecatholic.com${catholicFeastDatePath(article.slug)}`;
  const blogSlug = catholicFeastDateBlogSlug(article.slug);

  const sorted = [...Object.values(CATHOLIC_FEAST_DATE_BY_SLUG)].sort((a, b) => a.sortOrder - b.sortOrder);
  const idx = sorted.findIndex((a) => a.slug === article.slug);
  const prevArticle = idx > 0 ? sorted[idx - 1] : null;
  const nextArticle = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <>
      <Helmet>
        <title>{article.title} | Guide Catholic</title>
        <meta name="description" content={article.metaDescription} />
        <meta
          name="keywords"
          content={`${article.shortName} catholic feast day, ${article.season} catholic calendar, ${article.name}, holy day catholic, catholic liturgical calendar`}
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={article.title} description={article.metaDescription} url={canonical} datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholic Feast Days", url: "https://guidecatholic.com/blog/catholic-feast-days/" },
          { name: article.shortName, url: canonical },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted flex-wrap">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <Link to="/blog/catholic-feast-days/" className="hover:text-accent">Catholic Feast Days</Link><span>/</span>
              <span className="text-text">{article.shortName}</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/catholic-feast-days/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Full Catholic feast days calendar
            </Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium">Catholic Feast Days</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium capitalize">{article.season}</span>
                {article.holyDayUS && (
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">Holy Day (USA)</span>
                )}
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.dateLabel}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">{article.title}</h1>
              <p className="text-lg text-text-muted">
                <strong>Liturgical color:</strong> {article.liturgicalColor}
                {article.isMoveable ? " · Moveable feast" : " · Fixed date"}
              </p>
            </header>
            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-violet-500" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">{article.directAnswer}</p>
              </div>
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is {article.name}?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.intro}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture &amp; Tradition</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.scriptureAndTradition}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Biblical &amp; Historical Roots</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.biblicalRoots}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Theological Meaning</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.theologicalMeaning}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Liturgical Celebration &amp; Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.liturgicalCelebration}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Traditions &amp; Devotions</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.traditionsAndDevotions}
              </LinkedText>

              <QuizCTA title="Deepen your Catholic faith" description="Take the Catholic life assessment for personalized guidance on the liturgical year, sacraments, and prayer." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Celebrate as a Catholic (USA)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.howToCelebrate}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Holy Day &amp; Mass Obligation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.holyDayAndMassObligation}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                {article.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why This Feast Still Matters</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.whyItMatters}
              </LinkedText>
            </div>

            {(prevArticle || nextArticle) && (
              <nav className="flex flex-col sm:flex-row gap-4 justify-between mt-10 p-6 bg-surface rounded-xl border border-border/50">
                {prevArticle ? (
                  <Link to={catholicFeastDatePath(prevArticle.slug)} className="group flex-1">
                    <span className="text-xs text-text-muted uppercase tracking-wide">Previous in liturgical year</span>
                    <p className="font-medium text-text group-hover:text-accent transition-colors">{prevArticle.shortName}</p>
                  </Link>
                ) : <div className="flex-1" />}
                {nextArticle ? (
                  <Link to={catholicFeastDatePath(nextArticle.slug)} className="group flex-1 text-right">
                    <span className="text-xs text-text-muted uppercase tracking-wide">Next in liturgical year</span>
                    <p className="font-medium text-text group-hover:text-accent transition-colors">{nextArticle.shortName}</p>
                  </Link>
                ) : <div className="flex-1" />}
              </nav>
            )}

            <BlogFAQ faqs={article.faqs} linkAnswersSlug={blogSlug} />
            <RelatedArticles currentSlug={blogSlug} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
