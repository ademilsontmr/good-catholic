import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { SAINT_OF_DAY_BY_DATE } from "@/data/saintOfDayArticles";
import { parseDateSlug, saintOfDayArticlePath } from "@/lib/saintOfDaySlugs";
import NotFound from "@/pages/NotFound";

export default function SaintOfDayArticlePage() {
  const { dateSlug } = useParams<{ dateSlug: string }>();
  const parsed = parseDateSlug(dateSlug);
  if (!parsed) return <NotFound />;

  const article = dateSlug ? SAINT_OF_DAY_BY_DATE[dateSlug] : undefined;
  if (!article) return <Navigate to="/blog/saint-of-the-day/" replace />;

  const canonical = `https://guidecatholic.com${saintOfDayArticlePath(article.dateSlug)}`;
  const blogSlug = `saint-of-the-day/${article.dateSlug}`;

  const allSorted = Object.values(SAINT_OF_DAY_BY_DATE).sort((a, b) => a.dayOfYear - b.dayOfYear);
  const idx = allSorted.findIndex((a) => a.dateSlug === article.dateSlug);
  const prevArticle = idx > 0 ? allSorted[idx - 1] : null;
  const nextArticle = idx < allSorted.length - 1 ? allSorted[idx + 1] : null;
  const liturgical = article.contentType === "liturgical";

  return (
    <>
      <Helmet>
        <title>{article.title} | Guide Catholic</title>
        <meta name="description" content={article.metaDescription} />
        <meta
          name="keywords"
          content={`saint of the day ${article.feastDateLabel}, ${article.name}, catholic saint ${article.feastDateLabel}, patron saint ${article.patronOf[0]}, catholic feast day`}
        />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={article.title} description={article.metaDescription} url={canonical} datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Saint of the Day", url: "https://guidecatholic.com/blog/saint-of-the-day/" },
          { name: article.feastDateLabel, url: canonical },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted flex-wrap">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <Link to="/blog/saint-of-the-day/" className="hover:text-accent">Saint of the Day</Link><span>/</span>
              <span className="text-text">{article.feastDateLabel}</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/saint-of-the-day/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Full Saint of the Day calendar
            </Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-medium">Saint of the Day</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium capitalize">{article.category}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.feastDateLabel}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">{article.title}</h1>
              <p className="text-lg text-text-muted">
                <strong>Patron of:</strong> {article.patronOf.join(", ")}
              </p>
            </header>
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                {liturgical ? `What the Church Celebrates on ${article.feastDateLabel}` : `Who Is ${article.name}?`}
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.intro}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                {liturgical ? "Sacred History &amp; Calendar" : "Early Life &amp; Background"}
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.earlyLife}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                {liturgical ? "Theological Meaning" : "Vocation &amp; Ministry"}
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.vocationAndMinistry}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                {liturgical ? "Mass &amp; Liturgy" : "Historical Context"}
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.historicalContext}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                {liturgical ? "Traditions &amp; Devotions" : "Miracles, Devotion &amp; Popular Piety"}
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.miraclesAndDevotion}
              </LinkedText>

              <QuizCTA title="Grow in Catholic devotion" description="Take the Catholic life assessment for personalized guidance on prayer, saints, and spiritual growth." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                {liturgical ? "Prayer &amp; Family Observance" : "Patronages &amp; How to Pray"}
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.patronages}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Honor This Feast Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.howToHonorToday}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                {article.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Legacy in the Catholic Church</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={blogSlug}>
                {article.legacy}
              </LinkedText>
            </div>

            {(prevArticle || nextArticle) && (
              <nav className="flex flex-col sm:flex-row gap-4 justify-between mt-10 p-6 bg-surface rounded-xl border border-border/50">
                {prevArticle ? (
                  <Link to={saintOfDayArticlePath(prevArticle.dateSlug)} className="group flex-1">
                    <span className="text-xs text-text-muted uppercase tracking-wide">Previous day</span>
                    <p className="font-medium text-text group-hover:text-accent transition-colors">{prevArticle.name}</p>
                    <span className="text-sm text-text-muted">{prevArticle.feastDateLabel}</span>
                  </Link>
                ) : <div className="flex-1" />}
                {nextArticle ? (
                  <Link to={saintOfDayArticlePath(nextArticle.dateSlug)} className="group flex-1 text-right">
                    <span className="text-xs text-text-muted uppercase tracking-wide">Next day</span>
                    <p className="font-medium text-text group-hover:text-accent transition-colors">{nextArticle.name}</p>
                    <span className="text-sm text-text-muted">{nextArticle.feastDateLabel}</span>
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
