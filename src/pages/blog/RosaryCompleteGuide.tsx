import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Shield, Sparkles, Sword } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function RosaryCompleteGuide() {
  return (
    <>
      <Helmet>
        <title>The Holy Rosary: Complete Guide and 15 Promises | Guide Catholic</title>
        <meta name="description" content="Complete guide to the Holy Rosary with all 20 mysteries, step-by-step instructions, the 15 promises of Mary, and the history of the Battle of Lepanto." />
        <meta name="keywords" content="rosary complete guide, how to pray rosary, rosary mysteries, 15 promises of the rosary, battle of lepanto rosary, st louis de montfort rosary" />
        <link rel="canonical" href="https://guidecatholic.com/blog/rosary-complete-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Holy Rosary: Complete Guide with All 20 Mysteries"
        description="Complete guide to the Holy Rosary with all 20 mysteries, step-by-step instructions, all prayers, spiritual benefits, and tips for praying with devotion."
        url="https://guidecatholic.com/blog/rosary-complete-guide/"
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
              <span className="text-text">Rosary Complete Guide</span>
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
                  Prayers
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  26 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Holy Rosary: The Spiritual Weapon of the Saints
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "The Rosary is the weapon for these times." These words of <strong>Saint Padre Pio</strong> summarize a 1,000-year-old conviction: that 59 beads and 20 mysteries are enough to change the course of history. This is the master guide to the "School of Mary."
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 relative overflow-hidden">
               <Shield className="w-24 h-24 text-rose-400/20 absolute -bottom-4 -left-4" />
               <Sword className="w-24 h-24 text-rose-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Most people see the Rosary as a set of repetitive prayers. But to the expert, the Rosary is a <strong>Scriptural Journey</strong>. It is the life of Jesus through the eyes of the one who knew Him best: His Mother.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Battle that Saved Christendom: Lepanto (1571)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Rosary isn't just a "private" prayer; it has saved empires. In 1571, the Christian West was on the verge of Islamic invasion. Pope St. Pius V asked all Christians to pray the Rosary for the success of the Holy League at the <strong>Battle of Lepanto</strong>. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Despite being outnumbered, the Christian fleet won a miraculous victory. The Pope, who was miles away, was granted a vision of the victory at the exact moment it happened. He established the feast of <strong>Our Lady of the Rosary</strong> (October 7) to commemorate this victory.
              </p>

              <div className="bg-rose-50 border border-rose-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-rose-600" />
                  The 15 Promises of the Rosary
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Given to St. Dominic and Blessed Alan de la Roche</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Signal graces for faithful recitation.</li>
                    <li>Special protection and great graces.</li>
                    <li>Power against Hell; it will destroy vice.</li>
                    <li>The soul will flourish; virtues will sprout.</li>
                    <li>The soul shall not perish.</li>
                    <li>Deliverance from sudden death.</li>
                    <li>Those truly devoted shall not die without the Sacraments.</li>
                    <li>Divine light and fullness of grace in life and death.</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Deliverance from Purgatory.</li>
                    <li>Great glory in Heaven.</li>
                    <li>You shall obtain all you ask of me.</li>
                    <li>Assistance in every necessity.</li>
                    <li>Propagation of the Rosary rewards.</li>
                    <li>You shall be my brothers and sisters.</li>
                    <li>A great sign of predestination.</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Expert Meditation: The "Secret" of St. Louis de Montfort
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In his book <em>The Secret of the Rosary</em>, St. Louis de Montfort warns that the greatest mistake is to pray with the lips but not with the mind. He proposes a method of "Visual Contemplation":
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>The Clause Method:</strong> Adding a small descriptive phrase after the name of "Jesus" in the Hail Mary (e.g., "...and blessed is the fruit of thy womb, Jesus, *who was crowned with thorns*").</li>
                <li><strong>The Scriptural Pause:</strong> Reading a single verse of the Bible before each decade to set the "scene" for the imagination.</li>
              </ul>

              <QuizCTA
                title="Is your Rosary a chore or a conversation?"
                description="Take our quiz to analyze your prayer habits and discover new methods to make your Rosary a deep encounter with Christ."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Heart className="w-6 h-6 text-accent" />
                 Fatima and the "Daily Duty"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In every single apparition at Fatima in 1917, Our Lady specifically asked: <strong>"Pray the Rosary every day."</strong> Sister Lucia, the longest-living visionary, stated that "there is no problem, I tell you, no matter how difficult it is, that we cannot resolve by the prayer of the Holy Rosary."
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Rosary is the chain that links us to God. It is the ladder to climb into the heart of Mary and find Jesus there." — St. John Paul II
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="rosary-complete-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do I have to pray all 15 or 20 decades every day?",
                answer: "The daily duty asked by Our Lady of Fatima is usually understood as five decades (one set of mysteries). However, many people find peace in praying the full 20 mysteries throughout the day."
              },
              {
                question: "What if my mind wanders while I pray?",
                answer: "This happens at every level of the spiritual life. St. Therese of Lisieux even admitted to falling asleep during her prayers. The value of the Rosary is in the *will* to pray. Gently bring your mind back to the mystery and continue."
              },
              {
                question: "I don't have a physical Rosary, can I still pray it?",
                answer: "Absolutely. You can use your fingers (God gave us 10 for a reason!) or a phone app. The 'sacramental' beads are a beautiful tool, but the prayer is an interior act of the mind and heart."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Arm Yourself for the Day
              </h3>
              <p className="text-text-muted mb-6">
                The Rosary is the perfect discipline for a busy world. Take our quiz to start your journey toward a consistent prayer life.
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
