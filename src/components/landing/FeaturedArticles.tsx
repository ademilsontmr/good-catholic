import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Church, CircleDot, Droplets, HeartHandshake, ScrollText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeaturedPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

// The complete guide of each topic series. A fixed list keeps the prerendered HTML identical to what
// the browser renders (no hydration re-render or layout shift) and keeps the full blog dataset out of
// the homepage bundle.
const FEATURED: FeaturedPost[] = [
  {
    slug: "complete-guide-to-the-catholic-mass",
    title: "Every Part of the Catholic Mass Explained, Step by Step",
    excerpt: "Each part of the Mass in order, with the people’s responses and when to stand, sit, and kneel.",
    category: "Mass & Sacraments",
    icon: Church,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    slug: "complete-rosary-guide",
    title: "The Complete Rosary Guide: Prayers, Mysteries and History",
    excerpt: "Every prayer of the Rosary, all twenty mysteries, its history, and how to meditate as you pray.",
    category: "Prayers & Devotions",
    icon: CircleDot,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    slug: "complete-guide-to-catholic-confession",
    title: "Catholic Confession: The Complete Guide to the Sacrament",
    excerpt: "What Confession is, the steps of a good confession, common fears, and how often to go.",
    category: "Mass & Sacraments",
    icon: HeartHandshake,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    slug: "examination-of-conscience-before-confession",
    title: "Examination of Conscience by the Ten Commandments for Adults",
    excerpt: "A thorough examination of conscience for adults, commandment by commandment, before Confession.",
    category: "Mass & Sacraments",
    icon: ScrollText,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    slug: "catholic-baptism-explained",
    title: "Catholic Baptism Explained: What It Is and What It Does",
    excerpt: "The theology of Baptism, its effects, the indelible character, and the signs of the rite.",
    category: "Mass & Sacraments",
    icon: Droplets,
    bgColor: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    slug: "st-jude-novena-guide",
    title: "St. Jude Novena Guide: How to Pray the 9-Day Prayer for Impossible Cases",
    excerpt: "Who St. Jude was, why Catholics turn to him in desperate cases, and how to pray his novena.",
    category: "Prayers & Devotions",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export function FeaturedArticles() {
  const articles = FEATURED;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {articles.map((post) => {
            const Icon = post.icon;
            return (
              <Link
                key={post.slug}
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
            to="/blog/"
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
