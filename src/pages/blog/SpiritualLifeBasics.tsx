import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Wind, Calendar, Clock, ArrowLeft, Heart, BookOpen, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SpiritualLifeBasics() {
  return (
    <>
      <Helmet>
        <title>Spiritual Life Basics: Essential Practices for Daily Catholic Living | Guide Catholic</title>
        <meta name="description" content="Discover the foundations of Catholic spiritual life. Learn essential daily practices, prayer routines, and spiritual disciplines for growing closer to God." />
        <meta name="keywords" content="spiritual life, catholic spirituality, daily prayer, spiritual practices, catholic devotional life, prayer routine" />
        <link rel="canonical" href="https://guidecatholic.com/blog/spiritual-life-basics/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Spiritual Life Basics: Essential Practices for Daily Catholic Living"
          description="Discover the foundations of Catholic spiritual life. Learn essential daily practices, prayer routines, and spiritual disciplines for growing closer to God."
          url="https://guidecatholic.com/blog/spiritual-life-basics/"
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-6 text-text-muted">
            <Link to="/" className="hover:text-text transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog/" className="hover:text-text transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Spiritual Life Basics</span>
          </nav>

          {/* Back Button */}
          <Link to="/blog/">
            <Button variant="outline" className="mb-6 border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-3">
              <Wind className="w-4 h-4" />
              <span>Spiritual Life</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text mb-4 leading-tight">
              Spiritual Life Basics: Essential Practices for Daily Catholic Living
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>April 16, 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-text">
            <p className="text-xl leading-relaxed mb-8 text-text/90">
              The spiritual life is the foundation of Catholic faith. Discover the essential daily practices, prayer routines, and spiritual disciplines that help Catholics grow closer to God and live out their faith in everyday life.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              What Is the Catholic Spiritual Life?
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The Catholic spiritual life is the lived relationship between the believer and God. It encompasses all the ways we grow in union with Christ through prayer, sacraments, virtue, and daily Christian living. As St. Paul tells us, "It is no longer I who live, but Christ who lives in me" (Galatians 2:20).
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Three Pillars of Spiritual Life
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Catholic tradition identifies three essential pillars that support the spiritual life:
            </p>
            
            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prayer (Life with God)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Prayer is the raising of the mind and heart to God. The Catechism teaches that prayer is a "vital and personal relationship with the living and true God" (CCC 2558). Essential forms include:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Daily Personal Prayer:</strong> Quiet time with God each day</li>
              <li><strong>The Liturgy of the Hours:</strong> The Church's official daily prayer</li>
              <li><strong>The Holy Mass:</strong> The source and summit of Christian life</li>
              <li><strong>The Rosary:</strong> Meditative prayer on the mysteries of Christ</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Sacraments (Grace of God)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The sacraments are the primary channels of grace in the spiritual life. Regular participation in the sacraments, especially the Eucharist and Confession, nourishes and heals the soul.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Works of Mercy (Love of Neighbor)
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Authentic spirituality flows into action. The corporal and spiritual works of mercy allow us to encounter Christ in our neighbor and live out the commandment to love one another.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Building a Daily Prayer Routine
            </h2>
            <p className="text-text leading-relaxed mb-6">
              A consistent daily prayer routine forms the backbone of the spiritual life. Here is a framework for structuring your day around prayer:
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Morning: Offering the Day
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Begin each day by consecrating it to God. The Morning Offering prayer unites all the day's works, joys, and sufferings with Christ's sacrifice on the cross.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Throughout the Day: The Angelus and Awareness
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Pray the Angelus at 6am, noon, and 6pm to sanctify time. Practice the presence of God by maintaining awareness of His presence in all activities.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Evening: Examination and Thanksgiving
            </h3>
            <p className="text-text leading-relaxed mb-6">
              End the day with an examination of conscience and Night Prayer. Review the day with gratitude, seek forgiveness for failures, and entrust yourself to God's protection during sleep.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Role of Spiritual Reading
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Spiritual reading (lectio spiritualis) nourishes the mind and soul. St. Jerome said, "Ignorance of Scripture is ignorance of Christ." Recommended reading includes:
            </p>
            <ul className="list-disc list-inside text-text space-y-3 mb-6">
              <li><strong>Holy Scripture:</strong> Daily reading from the Old and New Testaments</li>
              <li><strong>The Catechism:</strong> Systematic study of Catholic teaching</li>
              <li><strong>Lives of the Saints:</strong> Inspiration from holy men and women</li>
              <li><strong>Spiritual Classics:</strong> Works like Imitation of Christ, Introduction to the Devout Life</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Overcoming Spiritual Dryness
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Every Catholic experiences periods of spiritual dryness. These are opportunities for growth through faithfulness. St. Teresa of Calcutta endured decades of spiritual darkness while serving the poorest of the poor.
            </p>
            <p className="text-text leading-relaxed mb-6">
              When prayer feels empty, continue anyway. Trust in God's hidden presence. St. John of the Cross teaches that the "dark night" often precedes deeper union with God.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Goal: Union with God
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The ultimate goal of the spiritual life is union with God — what the mystics call "contemplative union" and what the Church calls sanctity. This is not reserved for the few but is the vocation of every baptized Christian.
            </p>
            <p className="text-text leading-relaxed mb-6">
              As St. Thérèse of Lisieux showed through her "Little Way," holiness is accessible to everyone through small acts of love done with great love. The spiritual life is the path that leads there.
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <BlogFAQ
              faqs={[
                {
                  question: "How long should I pray each day?",
                  answer: "The Church recommends at least 15-20 minutes of personal prayer daily, plus participation in Mass when possible. Quality matters more than quantity — a sincere 10 minutes is better than distracted hour. Start where you are and grow gradually."
                },
                {
                  question: "What if I don't feel anything when I pray?",
                  answer: "Feelings are not the measure of prayer. Faithfulness to prayer during dryness is often more meritorious than prayer in consolation. Continue your routine, trust in God's hidden presence, and remember that love is shown by fidelity, not emotions."
                },
                {
                  question: "Can laypeople have a deep spiritual life?",
                  answer: "Absolutely! Sanctity is not reserved for priests and religious. The lay vocation is to sanctify everyday life — work, family, civic duties. Many lay saints, like St. Gianna Beretta Molla and Blessed Carlo Acutis, show that deep union with God is possible in ordinary life."
                },
                {
                  question: "Should I have a spiritual director?",
                  answer: "Spiritual direction is highly recommended for serious growth. A director helps discern God's will, navigate difficulties, and stay accountable. If you cannot find a priest director, mature lay Catholics can also provide guidance."
                }
              ]}
            />

            <RelatedArticles currentSlug="spiritual-life-basics" />
          </div>

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link to="/blog/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
