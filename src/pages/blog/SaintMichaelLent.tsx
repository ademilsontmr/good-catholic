import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sword, Calendar, Clock, ArrowLeft, ShieldCheck, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function SaintMichaelLent() {
  return (
    <>
      <Helmet>
        <title>Saint Michael's Lent: How to Pray the 40-Day Devotion | Guide Catholic</title>
        <meta name="description" content="Discover the origins of Saint Michael's Lent, why St. Francis of Assisi loved this devotion, and a complete day-by-day guide on how to pray it." />
        <meta name="keywords" content="st michael lent, how to pray st michael lent, quaresma de sao miguel, st francis of assisi st michael, prayer for spiritual protection, archangel michael devotion, Chaplet of st michael" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-michael-lent-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Michael's Lent: A 40-Day Spiritual Journey for Protection"
        description="Discover the origins of Saint Michael's Lent, why St. Francis of Assisi loved this devotion, and a complete day-by-day guide on how to pray it."
        url="https://guidecatholic.com/blog/st-michael-lent-guide/"
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">St. Michael's Lent</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Spiritual Warfare
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  22 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Michael's Lent: The Ultimate Guide to Spiritual Victory
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Most Catholics are familiar with the 40 days of Lent before Easter. However, there is a second "Lent" hidden in the heart of the Church's liturgical year. Popularized by the Great St. Francis of Assisi, Saint Michael’s Lent is a powerful 40-day intensive of fasting and prayer dedicated to the Prince of the Heavenly Host.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Sword className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint Michael’s Lent runs from <strong>August 15</strong> (the Feast of the Assumption) to <strong>September 29</strong> (the Feast of the Archangels). While it is a private devotion and not a mandatory law of the Church, it has become a "manual for spiritual warfare" for thousands of faithful seeking divine protection over their families and the world.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Origins: Mt. La Verna and the Stigmata
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The devotion reached its peak through <strong>St. Francis of Assisi</strong>. Every year, Francis would retreat to Mount La Verna to spend forty days in absolute silence and rigorous fasting in honor of St. Michael, whom he loved dearly as the defender of God's honor.
              </p>
              <p className="text-text leading-relaxed mb-6">
                It was during this exact "Michaelmas Lent" in September 1224 that Francis received the most profound grace of his life: the <strong>Stigmata</strong>. After weeks of prayer, a Seraph (often identified with St. Michael or a vision of Christ) appeared to him, and the physical wounds of the Crucifixion were impressed upon his hands, feet, and side. The Lent of St. Michael is thus forever linked to the highest possible union with the suffering of Christ.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <ShieldCheck className="w-6 h-6 text-orange-600" />
                  Practical Requirements for the Devotion
                </h3>
                <p className="text-text mb-4">You do not need to be a monk to pray this Lent. Here is the modern layout:</p>
                <ol className="list-decimal list-inside text-text space-y-3">
                  <li><strong>Duration:</strong> 40 days (August 15 – September 29). Sundays are feast days and not counted as fast days, just like the Great Lent.</li>
                  <li><strong>Penance:</strong> Choose <em>one</em> physical penance (fasting from sweets, cold showers, or extra silence) and <em>one</em> spiritual work of mercy.</li>
                  <li><strong>The Altar:</strong> If possible, place an image of St. Michael in a central place in your home with a candle to be lit during prayer.</li>
                  <li><strong>The Chaplet of St. Michael:</strong> The core prayer of the devotion.</li>
                </ol>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Chaplet of Saint Michael: The Nine Salutations
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1751, St. Michael appeared to the Portuguese servant of God, **Antonia de Astonac**. He promised that whoever prayed this Chaplet in his honor would have an <strong>escort of nine angels</strong> (one from each of the 9 choirs) when they go to Holy Communion. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Chaplet consists of an Our Father and three Hail Marys for each of the nine angelic choirs: 
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-text font-medium mb-8">
                <li>1. Seraphim</li>
                <li>2. Cherubim</li>
                <li>3. Thrones</li>
                <li>4. Dominations</li>
                <li>5. Virtues</li>
                <li>6. Powers</li>
                <li>7. Principalities</li>
                <li>8. Archangels</li>
                <li>9. Angels</li>
              </ul>

              <QuizCTA
                title="Is your spiritual armor ready?"
                description="Take our quiz to analyze your knowledge of the angelic hierarchy and discover how to enlist their help in your daily life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2 text-red-700">
                <Flame className="w-6 h-6" />
                Spiritual Battle Tactics
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Prince of the Heavenly Host is the "Supreme Commander" of the Angels. When we pray this Lent, we are engaging in **Active Defense**. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Exorcists and spiritual directors often recommend St. Michael's Lent for those facing:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-8">
                <li><strong>Ancestral Bondages:</strong> Breaking cycles of sin in the family line.</li>
                <li><strong>Mental Oppression:</strong> Finding peace against anxiety, despair, or persistent temptation.</li>
                <li><strong>Protection of Children:</strong> Creating a "spiritual perimeter" around the home.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-4 text-center flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  The St. Michael Promise
                </h3>
                <p className="text-text italic text-center leading-relaxed">
                  "Whoever prays this devotion will have my special protection during life and my help at the hour of death, as well as the assistance of a holy angel during the reception of the Sacraments."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="st-michael-lent-guide" />

            <BlogFAQ faqs={[
              {
                question: "Can I pray St. Michael's Lent at other times of the year?",
                answer: "Absolutely. While the traditional period is August 15 to Sept 29, many people pray it whenever they feel a particular need for protection or before a major spiritual decision. The structure of 40 days is the most important part."
              },
              {
                question: "Do I have to do all 9 choirs every day?",
                answer: "The Chaplet of St. Michael (which covers the 9 choirs) is the standard daily prayer. It takes about 10-12 minutes to recite. If you are very busy, even the short 'St. Michael Prayer' is better than nothing, but the Chaplet holds the specific promise of the angelic escort."
              },
              {
                question: "What is the difference between this and the regular Lent?",
                answer: "The Great Lent (before Easter) is a Liturgical Season of the Church with mandatory laws (fasting on Ash Wednesday, etc.). St. Michael's Lent is a 'Sacramental of Time'—a voluntary devotion of the heart that follows the example of the saints."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Enlist the Heavenly Host
              </h3>
              <p className="text-text-muted mb-6">
                Victory is promised to those who remain in Christ. Take our quiz to strengthen your resolve and deepen your faith.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Faith Quiz
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
