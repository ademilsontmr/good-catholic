import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Cross, Calendar, Clock, Heart, BookOpen, Church, Users, Flame, Sun, MapPin, HeartPulse, Wind, Cloud, Brain, Shield, ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-pray-rosary",
    title: "How to Pray the Holy Rosary: Complete Guide for Beginners",
    excerpt: "Learn step by step how to pray the Holy Rosary and strengthen your Marian devotion with this practical and spiritual guide.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 2,
    slug: "seven-sacraments",
    title: "The 7 Sacraments of the Catholic Church Explained",
    excerpt: "Understand the importance and meaning of each of the seven sacraments instituted by Christ for our salvation.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    slug: "importance-confession",
    title: "The Importance of Confession: Why Confess Regularly?",
    excerpt: "Discover the spiritual benefits of frequent confession and how it transforms our Christian life.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Sacraments",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 4,
    slug: "patron-saints",
    title: "Patron Saints: How to Choose and Honor Yours",
    excerpt: "Learn about the tradition of patron saints and how they can intercede for you on your faith journey.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Devotions",
    icon: Users,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 5,
    slug: "fasting-abstinence",
    title: "Fasting and Abstinence: Practices That Strengthen the Soul",
    excerpt: "Learn about the practices of fasting and abstinence in the Catholic Church and how they bring us closer to God.",
    date: "2026-04-12",
    readTime: "5 min",
    category: "Spirituality",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 6,
    slug: "sunday-mass",
    title: "Sunday Mass: Center of Christian Life",
    excerpt: "Why participation in Sunday Mass is essential for every Catholic and how to make the most of it.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Liturgy",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 7,
    slug: "prayer-life",
    title: "Prayer Life: How to Cultivate Intimacy with God",
    excerpt: "Learn how to transform your dialogue with God into a source of life and peace through consistent prayer.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Prayer",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 8,
    slug: "meaning-mass",
    title: "Understanding the Mass: A Journey Through the Liturgy",
    excerpt: "Discover the deep meaning behind each part of the Mass and how to participate more fully.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Liturgy",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 9,
    slug: "examination-conscience",
    title: "Examination of Conscience: Daily Practice for Spiritual Growth",
    excerpt: "Learn how to examine your conscience daily and grow in holiness through self-reflection.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Spirituality",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 10,
    slug: "virgin-mary",
    title: "The Virgin Mary: Mother of God and Our Mother",
    excerpt: "Explore the role of Mary in salvation history and how she continues to intercede for us today.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Devotions",
    icon: Heart,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 11,
    slug: "gifts-holy-spirit",
    title: "The Seven Gifts of the Holy Spirit",
    excerpt: "Understand the seven gifts the Holy Spirit bestows upon us at Confirmation and how to use them.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Formation",
    icon: Flame,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-400"
  },
  {
    id: 12,
    slug: "lectio-divina",
    title: "Lectio Divina: Praying with Scripture",
    excerpt: "Discover the ancient practice of Lectio Divina and how to pray with the Word of God.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Prayer",
    icon: BookOpen,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 13,
    slug: "chastity-modern-world",
    title: "Chastity in the Modern World: Living Purity Today",
    excerpt: "Practical guidance on living the virtue of chastity in contemporary society.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Christian Life",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 14,
    slug: "social-doctrine",
    title: "Catholic Social Doctrine: Faith in Action",
    excerpt: "Learn about the Church's social teaching and how to apply it in your daily life.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Formation",
    icon: Users,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 15,
    slug: "vocational-discernment",
    title: "Vocational Discernment: Finding God's Call",
    excerpt: "Guidance on discerning your vocation and discovering God's plan for your life.",
    date: "2026-04-12",
    readTime: "13 min",
    category: "Vocation",
    icon: MapPin,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 16,
    slug: "eucharist-real-presence",
    title: "The Eucharist: Understanding the Real Presence",
    excerpt: "Explore the Catholic teaching on the Real Presence of Christ in the Eucharist.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Sacraments",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 17,
    slug: "eucharistic-adoration",
    title: "Eucharistic Adoration: Time with Jesus",
    excerpt: "Discover the beauty and power of spending time in Eucharistic Adoration.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Prayer",
    icon: Sun,
    bgColor: "bg-amber-100",
    iconColor: "text-amber-400"
  },
  {
    id: 18,
    slug: "what-is-purgatory",
    title: "What is Purgatory? Understanding Catholic Teaching",
    excerpt: "Learn about the Catholic doctrine of Purgatory and its role in our salvation.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Doctrine",
    icon: Cloud,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 19,
    slug: "how-to-live-lent",
    title: "How to Live Lent: A Season of Conversion",
    excerpt: "Practical tips for making the most of the Lenten season and growing closer to God.",
    date: "2026-04-12",
    readTime: "11 min",
    category: "Liturgy",
    icon: Wind,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-400"
  },
  {
    id: 20,
    slug: "guardian-angels",
    title: "Guardian Angels: Our Heavenly Companions",
    excerpt: "Learn about the role of guardian angels in our lives and how to develop devotion to them.",
    date: "2026-04-12",
    readTime: "7 min",
    category: "Devotions",
    icon: Shield,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 21,
    slug: "meaning-of-crucifix",
    title: "The History and Meaning of the Crucifix",
    excerpt: "Understand why the crucifix is the central symbol of Catholic faith and its importance in our homes.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Devotions",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 22,
    slug: "jubilee-2025-legacy",
    title: "The Legacy of Jubilee 2025: How to Continue Being a Pilgrim of Hope?",
    excerpt: "The Holy Doors have closed, but the Christian's heart must remain open. Discover how to carry the fruits of the Holy Year into 2026.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Jubilee 2025",
    icon: Sun,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-400"
  },
  {
    id: 23,
    slug: "plenary-indulgence-guide",
    title: "Plenary Indulgence: Complete Guide for the Final Days of the Jubilee",
    excerpt: "The Church opens its treasures of grace in a special way during the Jubilee. Understand how to receive total remission.",
    date: "2026-04-12",
    readTime: "10 min",
    category: "Formation",
    icon: BookOpen,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-400"
  },
  {
    id: 24,
    slug: "church-changes-post-2025",
    title: "What Changes in the Church After the Holy Year of 2025?",
    excerpt: "The closing of the Jubilee is not a period, but a new breath for the mission. Understand the trends and challenges for 2026.",
    date: "2026-04-12",
    readTime: "9 min",
    category: "Current Affairs",
    icon: Church,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-400"
  },
  {
    id: 25,
    slug: "prayers-of-hope-2026",
    title: "Prayers of Hope for Times of Crisis in 2026",
    excerpt: "When strength seems exhausted, prayer is our refuge. Discover powerful prayers to renew your trust in God.",
    date: "2026-04-12",
    readTime: "6 min",
    category: "Prayers",
    icon: Heart,
    bgColor: "bg-rose-100",
    iconColor: "text-rose-400"
  },
  {
    id: 26,
    slug: "local-pilgrimage",
    title: "How to Organize a Local Pilgrimage in Your Diocese",
    excerpt: "You don't need to go to Rome to be a pilgrim. Discover how to organize a journey of faith to shrines in your region.",
    date: "2026-04-12",
    readTime: "8 min",
    category: "Devotions",
    icon: MapPin,
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-400"
  },
  {
    id: 27,
    slug: "faith-mental-health",
    title: "Faith and Mental Health: How Catholic Spirituality Helps Overcome Anxiety?",
    excerpt: "In a hyperconnected and anxious world, the Catholic tradition offers ancient treasures for the balance of mind and soul.",
    date: "2026-04-12",
    readTime: "12 min",
    category: "Mental Health",
    icon: HeartPulse,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-400"
  }
];

export default function BlogPage() {
  const { page } = useParams<{ page?: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const currentPage = parseInt(page || "1", 10);
  const postsPerPage = 9;
  
  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Sort posts by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const filteredPosts = selectedCategory === "All" 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === selectedCategory);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);
  
  // Redirect to page 1 if no page specified or invalid page
  useEffect(() => {
    if (!page) {
      navigate('/blog/page/1/', { replace: true });
    } else if (currentPage < 1 || currentPage > totalPages) {
      navigate('/blog/page/1/', { replace: true });
    }
  }, [page, currentPage, totalPages, navigate]);
  
  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    navigate('/blog/page/1/');
  };
  
  const handlePageChange = (page: number) => {
    navigate(`/blog/page/${page}/`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Guide Catholic</title>
        <meta name="description" content="Explore articles about Catholic faith, spirituality, sacraments, and Christian living." />
        <link rel="canonical" href={`https://guidecatholic.com/blog/page/${currentPage}/`} />
      </Helmet>

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
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4">
                Guide Catholic Blog
              </h1>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Articles, reflections and teachings to strengthen your faith and deepen your knowledge of Catholic doctrine.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-button-text"
                      : "bg-background-muted text-text-muted hover:bg-accent/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}/`}
                    className="group bg-surface rounded-3xl overflow-hidden border border-border hover:border-accent transition-all hover:shadow-xl"
                  >
                    <div className={`${post.bgColor} p-16 flex items-center justify-center`}>
                      <Icon className={`w-20 h-20 ${post.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                        <span className="text-accent font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === 1
                      ? "border-border text-text-muted cursor-not-allowed opacity-50"
                      : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg border font-medium transition-colors ${
                        currentPage === page
                          ? "bg-accent text-button-text border-accent"
                          : "border-border text-text hover:bg-accent/10 hover:border-accent"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition-colors ${
                    currentPage === totalPages
                      ? "border-border text-text-muted cursor-not-allowed opacity-50"
                      : "border-border text-text hover:bg-accent hover:text-button-text hover:border-accent"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
