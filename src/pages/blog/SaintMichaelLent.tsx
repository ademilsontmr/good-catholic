import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sword, Calendar, Clock, ArrowLeft, ShieldCheck, Flame } from "lucide-react";
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
        <meta name="keywords" content="st michael lent, how to pray st michael lent, quaresma de sao miguel, st francis of assisi st michael, prayer for spiritual protection, archangel michael devotion" />
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
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Saint Michael's Lent: A 40-Day Journey for Spiritual Victory
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Most Catholics know about the Lent before Easter. But did you know there is a second "Lent" in the Catholic calendar? Popularized by St. Francis of Assisi, Saint Michael’s Lent is a 40-day period of fasting and prayer dedicated to the Prince of the Heavenly Host.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Sword className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Saint Michael’s Lent runs from <strong>August 15</strong> (the Feast of the Assumption) to <strong>September 29</strong> (the Feast of the Archangels). It is a time for the faithful to ask for St. Michael’s special protection over their families, for the breaking of spiritual bondages, and for the triumph of the Church.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Origins: St. Francis of Assisi
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The devotion was a particular favorite of <strong>St. Francis of Assisi</strong>. Every year, Francis would retreat to Mount La Verna to spend forty days in absolute silence, fasting, and intense prayer in honor of St. Michael. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                It was during one of these "Michaelmas Lents" (in 1224) that St. Francis received the <strong>Stigmata</strong>—the physical wounds of Christ on his body—as a sign of his deep union with God.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-4 text-center flex items-center justify-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  How to Pray Saint Michael's Lent:
                </h3>
                <p className="text-text mb-4">You can do this individually or as a family. Here is the standard format:</p>
                <ul className="list-decimal list-inside text-text space-y-3">
                  <li><strong>The Start:</strong> Begin on August 15 (Feast of the Assumption).</li>
                  <li><strong>Small Penance:</strong> Choose a small daily sacrifice (e.g., fasting from sweets, waking up earlier, or limiting social media).</li>
                  <li><strong>Daily Prayer:</strong> Set aside 10-15 minutes for specific prayers:
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>The Saint Michael Prayer.</li>
                      <li>The Chaplet of St. Michael (optional but highly recommended).</li>
                      <li>A prayer for your personal intention.</li>
                    </ul>
                  </li>
                  <li><strong>Small Altar:</strong> If possible, set up a small image or statue of St. Michael with a candle in your home as a visual reminder.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why 40 Days?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In the Bible, the number 40 represents a period of <strong>testing, purification, and preparation</strong>. Noah's rain lasted 40 days; Israel wandered for 40 years; Jesus fasted in the desert for 40 days. By dedicating 40 days to St. Michael, we are asking the Archangel to help us win the spiritual battles in our lives.
              </p>

              <QuizCTA
                title="Are you feeling spiritually attacked?"
                description="Take our quiz to learn more about spiritual warfare and discover the prayers that provide divine protection."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2 text-red-700">
                <Flame className="w-6 h-6" />
                The Power of St. Michael
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic tradition recognizes St. Michael as the defender of the people of God. His name, "Quis ut Deus?" (Who is like God?), was the battle cry that defeated Lucifer. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                By praying this Lent, you are not focused on the devil, but on the <strong>superior power of God</strong> acting through His minister. It is a time to reclaim territory in your life—peace in your mind, harmony in your marriage, or freedom from an old habit.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="st-michael-lent-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to fast like at Easter?",
                answer: "No. Unlike the Lenten season before Easter, there is no mandatory law of fasting for St. Michael's Lent. It is a voluntary devotion. You are encouraged to choose a penance that is meaningful and sustainable for you."
              },
              {
                question: "What if I missed the start date of August 15?",
                answer: "You can start anytime! While the traditional period is 40 days ending on Sept 29, God honors the intent of the heart. You can do a '9-day novena' or simply join in whenever you learn about it."
              },
              {
                question: "Is this only for the 'Charismatic' movements?",
                answer: "No. This is a very ancient Franciscan and traditional Catholic devotion. It has seen a massive resurgence among all types of Catholics today as people feel a greater need for spiritual protection."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Stand Firm in Your Faith
              </h3>
              <p className="text-text-muted mb-6">
                Spiritual victory begins with prayer. Take our quiz to discover the strength of the Catholic tradition.
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
