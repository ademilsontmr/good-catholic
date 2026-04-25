import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/pages/BlogPage";

function getRelatedPosts(currentSlug: string, count = 3) {
  const current = blogPosts.find(p => p.slug === currentSlug);
  const currentKeywords = currentSlug.split("-");
  const currentTitleWords = current?.title.toLowerCase().split(/\s+/) ?? [];

  const scored = blogPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => {
      let score = 0;
      // Same category: +10
      if (current && p.category === current.category) score += 10;
      // Matching slug keywords: +3 each
      const pKeywords = p.slug.split("-");
      currentKeywords.forEach(kw => {
        if (kw.length > 3 && pKeywords.includes(kw)) score += 3;
      });
      // Matching title words: +1 each
      const pTitleWords = p.title.toLowerCase().split(/\s+/);
      currentTitleWords.forEach(w => {
        if (w.length > 4 && pTitleWords.includes(w)) score += 1;
      });
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score || b.post.id - a.post.id)
    .slice(0, count)
    .map(s => s.post);

  return scored;
}

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const selectedPosts = getRelatedPosts(currentSlug);

  if (selectedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border">
      <h3 className="font-display text-2xl font-bold text-text mb-8">
        Continue Reading
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedPosts.map((post) => (
          <Link to={`/blog/${post.slug}/`} key={post.id} className="group">
            <article className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-border/50">
              <div className={`aspect-video flex items-center justify-center ${post.bgColor}`}>
                <post.icon
                  className={`w-10 h-10 ${post.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  strokeWidth={1.5}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                  <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <h4 className="font-display text-base font-semibold text-text mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h4>
                <span className="inline-flex items-center text-xs text-accent font-medium">
                  Read article <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
