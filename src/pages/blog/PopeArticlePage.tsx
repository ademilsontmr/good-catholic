import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { POPE_ARTICLES_BY_SLUG } from "@/data/popeArticles";
import { CATHOLIC_POPES } from "@/data/catholicPopes";
import { parsePopeArticleSlug, popeOrdinal } from "@/lib/popeSlugs";
import NotFound from "@/pages/NotFound";

export default function PopeArticlePage() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  if (!articleSlug?.startsWith("pope-")) return <NotFound />;

  const popeSlug = parsePopeArticleSlug(articleSlug);
  if (!popeSlug) return <Navigate to="/blog/list-of-all-popes-catholic-complete-guide/" replace />;

  const article = POPE_ARTICLES_BY_SLUG[popeSlug];
  if (!article) return <Navigate to="/blog/list-of-all-popes-catholic-complete-guide/" replace />;

  const pope = CATHOLIC_POPES.find((p) => p.num === article.num);
  const displayName = pope?.name ?? article.title;
  const canonical = `https://guidecatholic.com/blog/pope-${article.slug}/`;

  return (
    <>
      <Helmet>
        <title>{article.title} | Guide Catholic</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={`pope ${displayName}, ${displayName} biography, pope number ${article.num}, catholic pope history, list of popes`} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={article.title} description={article.metaDescription} url={canonical} datePublished="2026-06-03" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted flex-wrap">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <Link to="/blog/list-of-all-popes-catholic-complete-guide/" className="hover:text-accent">All Popes</Link><span>/</span>
              <span className="text-text">{displayName}</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/list-of-all-popes-catholic-complete-guide/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Full list of all popes
            </Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Pope {popeOrdinal(article.num)}</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">Catholic History</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 3, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">{article.title}</h1>
              <p className="text-lg text-text-muted">
                <strong>Pontificate:</strong> {pope?.reign ?? "See historical records"}
              </p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
            </div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Was Pope {displayName.replace(/^St\.\s+/, "")}?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.intro}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Early Life &amp; Background</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.earlyLife}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Historical Context</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.historicalContext}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Pontificate &amp; Key Events</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.pontificate}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Papal Acts &amp; Achievements</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.papalActs}
              </LinkedText>

              <QuizCTA title="Explore Catholic history" description="Take the Catholic life assessment for personalized guidance on doctrine, the papacy, and Church tradition." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Key Highlights</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                {article.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Legacy in the Catholic Church</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.legacy}
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Place in the Line of Succession</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={`pope-${article.slug}`}>
                {article.succession}
              </LinkedText>
            </div>

            <BlogFAQ faqs={article.faqs} linkAnswersSlug={`pope-${article.slug}`} />

            <RelatedArticles currentSlug={`pope-${article.slug}`} />

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
