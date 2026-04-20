import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/pages/BlogPage";

// Pick 3 random articles on each render (seeded by day so it changes daily)
function getDailyArticles(count = 3) {
  const seed = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // changes daily
  const shuffled = [...blogPosts].sort((a, b) => {
    const ha = Math.sin(seed * a.id) * 10000;
    const hb = Math.sin(seed * b.id) * 10000;
    return (ha - Math.floor(ha)) - (hb - Math.floor(hb));
  });
  return shuffled.slice(0, count);
}

export function FeaturedArticles() {
  const articles = getDailyArticles(3);

  return (
    <section className="py-20 bg-background-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            From the Blog
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-3">
            Deepen Your Catholic Faith
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Explore our articles on prayer, sacraments, saints, and Catholic living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {articles.map((post) => {
            const Icon = post.icon;
            return (
              <Link
                key={post.id}
                to={`/blog/${post.slug}/`}
                className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-lg"
              >
                <div className={`${post.bgColor} py-8 flex items-center justify-center`}>
                  <Icon className={`w-12 h-12 ${post.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent">{post.category}</span>
                  <h3 className="font-display text-sm font-bold text-text mt-1 mb-2 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-xs line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent font-medium mt-3">
                    Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/blog/page/1/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
