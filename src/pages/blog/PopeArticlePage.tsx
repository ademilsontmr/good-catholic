import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Crown } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { POPE_ARTICLES_BY_SLUG } from "@/data/popeArticles";
import { CATHOLIC_POPES } from "@/data/catholicPopes";
import { parsePopeArticleSlug, popeOrdinal } from "@/lib/popeSlugs";
import { POPE_TABLE_ROWS } from "@/lib/popeTableData";
import NotFound from "@/pages/NotFound";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { popeProfileComponent } from "@/components/blog/PopeProfileBody";
import { Suspense } from "react";

export default function PopeArticlePage() {
  const { articleSlug } = useParams<{ articleSlug: string }>();
  if (!articleSlug?.startsWith("pope-")) return <NotFound />;

  const popeSlug = parsePopeArticleSlug(articleSlug);
  if (!popeSlug) return <Navigate to="/blog/list-of-all-popes-catholic-complete-guide/" replace />;

  const article = POPE_ARTICLES_BY_SLUG[popeSlug];
  if (!article) return <Navigate to="/blog/list-of-all-popes-catholic-complete-guide/" replace />;

  const pope = CATHOLIC_POPES.find((p) => p.num === article.num);
  const tableRow = POPE_TABLE_ROWS.find((p) => p.num === article.num);
  const displayName = pope?.name ?? article.title;
  const portraitSrc = tableRow?.image
    ? tableRow.image.replace("width=80", "width=640")
    : "";
  const canonical = `https://guidecatholic.com/blog/pope-${article.slug}/`;
  // A written profile replaces the generated template sections when one exists for this pope.
  const Profile = popeProfileComponent(article.slug);

  return (
    <>
      <Helmet>
        <title>{article.title} | Guide Catholic</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={`pope ${displayName}, ${displayName} biography, pope number ${article.num}, catholic pope history, list of popes`} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={article.title} description={article.metaDescription} url={canonical} datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "List of Popes", url: "https://guidecatholic.com/blog/list-of-all-popes-catholic-complete-guide/" },
          { name: displayName, url: canonical },
        ]}
      />

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
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Pope {popeOrdinal(article.num)}</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">Catholic History</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime} read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">{article.title}</h1>
              <p className="text-lg text-text-muted">
                <strong>Pontificate:</strong> {pope?.reign ?? "See historical records"}
                {tableRow?.birthPlace ? (
                  <>
                    {" "}
                    · <strong>Origin:</strong> {tableRow.birthPlace}
                  </>
                ) : null}
                {tableRow?.personalName ? (
                  <>
                    {" "}
                    · <strong>Latin name:</strong> {tableRow.personalName}
                  </>
                ) : null}
              </p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              {portraitSrc ? (
                <img
                  src={portraitSrc}
                  alt={`Portrait of Pope ${displayName}`}
                  className="w-full h-full object-contain bg-amber-50"
                  loading="lazy"
                  width={640}
                  height={360}
                />
              ) : (
                <Crown className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
              )}
            </div>
            {Profile ? (
              <Suspense fallback={null}>
                <Profile linkSlug={`pope-${article.slug}`} />
              </Suspense>
            ) : (
              <p className="text-lg text-text leading-relaxed mb-8">{article.excerpt}</p>
            )}
            {article.relatedPopes?.length > 0 && (
              <div className="mb-10 p-6 rounded-xl border border-amber-200/70 bg-amber-50/50">
                <h3 className="font-display text-xl font-bold text-text mb-4">Related pontiffs</h3>
                <ul className="space-y-2">
                  {article.relatedPopes.map((rel) => (
                    <li key={`${rel.relation}-${rel.num}`}>
                      <Link
                        to={`/blog/pope-${rel.slug}/`}
                        className="text-primary font-semibold hover:underline"
                      >
                        {rel.relation}: Pope {rel.name} ({popeOrdinal(rel.num)})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <RelatedArticles currentSlug={`pope-${article.slug}`} />

            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
