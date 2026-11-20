import { useState, useEffect, useMemo } from "react";
import { BlogCategoryFilter } from "@/components/blog/BlogCategoryFilter";
import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { getCanonicalCategory } from "@/lib/blogCategories";
import { blogPosts } from "@/data/blogPosts";
import { CollectionPageSchema } from "@/components/blog/CollectionPageSchema";

const trimMetaDescription = (description: string) => {
  if (description.length <= 155) return description;
  return `${description.slice(0, 152).replace(/\s+\S*$/, "")}...`;
};

export default function BlogPage() {
  const { page } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const parsedPage = parseInt(page || "1", 10);
  const currentPage = Number.isNaN(parsedPage) ? 1 : parsedPage;
  const postsPerPage = 9;
  
  const categoryItems = useMemo(() => {
    const counts = new Map<string, number>();
    blogPosts.forEach((post) => {
      const category = getCanonicalCategory(post.category);
      counts.set(category, (counts.get(category) ?? 0) + 1);
    });
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }, []);
  
  // Sort posts by date (most recent first), then by id descending as tiebreaker
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateDiff !== 0) return dateDiff;
    return b.id - a.id; // higher id = more recent
  });
  
  const filteredPosts = selectedCategory === "All" 
    ? sortedPosts 
    : sortedPosts.filter(post => getCanonicalCategory(post.category) === selectedCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  const pageCategories = Array.from(new Set(currentPosts.map(post => getCanonicalCategory(post.category)))).slice(0, 3);
  const pageTopics = currentPosts
    .slice(0, 3)
    .map(post => post.title.split(":")[0].split(" — ")[0].trim());
  
  const getBlogPagePath = (pageNumber: number) => pageNumber === 1 ? "/blog/" : `/blog/page/${pageNumber}/`;
  const canonicalPath = getBlogPagePath(currentPage);
  const canonicalUrl = `https://guidecatholic.com${canonicalPath}`;
  const pageTitle = currentPage === 1 ? "Blog - Guide Catholic" : `Blog Page ${currentPage} - Guide Catholic`;
  const pageDescription = trimMetaDescription(
    currentPosts.length > 0
      ? `Read ${pageCategories.join(", ")} articles including ${pageTopics.join("; ")}. Catholic guides for faith, prayer, sacraments and spiritual growth.`
      : "Explore Guide Catholic articles about Catholic faith, prayer, sacraments, saints, doctrine and Christian living."
  );

  // Keep the canonical first page at /blog/ and redirect invalid archive pages.
  useEffect(() => {
    if (page === "1") {
      navigate('/blog/', { replace: true });
    } else if (page && (currentPage < 1 || currentPage > totalPages)) {
      navigate('/blog/', { replace: true });
    }
  }, [page, currentPage, totalPages, navigate]);
  
  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    navigate('/blog/');
  };
  

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {currentPage > 1 && <link rel="prev" href={`https://guidecatholic.com${getBlogPagePath(currentPage - 1)}`} />}
        {currentPage < totalPages && <link rel="next" href={`https://guidecatholic.com${getBlogPagePath(currentPage + 1)}`} />}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://guidecatholic.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://guidecatholic.com/og-image.png" />
      </Helmet>
      <CollectionPageSchema
        name={pageTitle}
        description={pageDescription}
        path={canonicalPath}
        breadcrumbName={currentPage > 1 ? `Page ${currentPage}` : undefined}
        items={currentPosts.map((post) => ({ name: post.title, path: `/blog/${post.slug}/` }))}
        order="descending"
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <span className="text-text">Blog</span>
            </nav>
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-text mb-3">
                Guide Catholic Blog{currentPage > 1 && ` — Page ${currentPage}`}
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Articles, reflections and teachings to strengthen your faith and deepen your knowledge of Catholic doctrine.
              </p>
            </div>

            <BlogCategoryFilter
              categories={categoryItems}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              filteredCount={filteredPosts.length}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {currentPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}/`}
                    className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg"
                  >
                    <div className={`${post.bgColor} py-10 flex items-center justify-center`}>
                      <Icon className={`w-14 h-14 ${post.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted mb-3">
                        <span className="text-accent font-medium truncate max-w-[120px]">
                          {getCanonicalCategory(post.category)}
                        </span>
                        <span className="flex items-center gap-1 shrink-0">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-text mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination: real links so search engines can reach every archive page */}
            {totalPages > 1 && (
              <nav aria-label="Blog pages">
                <div className="flex items-center justify-center gap-1.5">
                  {currentPage > 1 ? (
                    <Link
                      to={getBlogPagePath(currentPage - 1)}
                      rel="prev"
                      aria-label="Previous page"
                      className="p-2 rounded-lg border border-border text-text transition-colors hover:bg-accent hover:text-button-text hover:border-accent"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Link>
                  ) : (
                    <span aria-hidden="true" className="p-2 rounded-lg border border-border text-text-muted opacity-40">
                      <ChevronLeft className="w-5 h-5" />
                    </span>
                  )}

                  {(() => {
                    const pages: (number | "...")[] = [];
                    if (totalPages <= 7) {
                      for (let i = 1; i <= totalPages; i++) pages.push(i);
                    } else {
                      pages.push(1);
                      if (currentPage > 3) pages.push("...");
                      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                        pages.push(i);
                      }
                      if (currentPage < totalPages - 2) pages.push("...");
                      pages.push(totalPages);
                    }
                    return pages.map((p, idx) =>
                      p === "..." ? (
                        <span key={`ellipsis-${idx}`} className="w-9 h-9 flex items-center justify-center text-text-muted text-sm">
                          …
                        </span>
                      ) : (
                        <Link
                          key={p}
                          to={getBlogPagePath(p)}
                          aria-current={currentPage === p ? "page" : undefined}
                          className={`w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
                            currentPage === p
                              ? "bg-accent text-button-text border-accent"
                              : "border-border text-text hover:bg-accent/10 hover:border-accent"
                          }`}
                        >
                          {p}
                        </Link>
                      )
                    );
                  })()}

                  {currentPage < totalPages ? (
                    <Link
                      to={getBlogPagePath(currentPage + 1)}
                      rel="next"
                      aria-label="Next page"
                      className="p-2 rounded-lg border border-border text-text transition-colors hover:bg-accent hover:text-button-text hover:border-accent"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  ) : (
                    <span aria-hidden="true" className="p-2 rounded-lg border border-border text-text-muted opacity-40">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  )}
                </div>

                {/* Every archive page in one list, so no article is more than a couple of clicks from /blog/ */}
                {totalPages > 7 && (
                  <details className="mt-6 text-center">
                    <summary className="cursor-pointer text-sm font-medium text-accent">Browse all {totalPages} pages</summary>
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-3xl mx-auto">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <Link
                          key={p}
                          to={getBlogPagePath(p)}
                          aria-current={currentPage === p ? "page" : undefined}
                          className={`min-w-8 h-8 px-2 flex items-center justify-center rounded-md border text-xs transition-colors ${
                            currentPage === p
                              ? "bg-accent text-button-text border-accent"
                              : "border-border text-text-muted hover:border-accent hover:text-text"
                          }`}
                        >
                          {p}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </nav>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
