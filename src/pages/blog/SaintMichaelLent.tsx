import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sword, Calendar, Clock, ArrowLeft, ShieldCheck, Flame, Sparkles, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SaintMichaelLent() {
  return (
    <>
      <Helmet>
        <title>Saint Michael's Lent: The Expert Guide to Spiritual Warfare | Guide Catholic</title>
        <meta name="description" content="Learn how to pray Saint Michael's Lent. Discover the origins with St. Francis of Assisi, the 9 Choirs of Angels, and the power of 40 days of fasting." />
        <meta name="keywords" content="st michael lent, quaresma de sao miguel, st francis stigmata, spiritual warfare catholic, chaplet of st michael, archangel michael protection" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-michael-lent-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Saint Michael's Lent: A 40-Day Spiritual Journey for Protection"
        description="Discover the origins of Saint Michael's Lent, why St. Francis of Assisi loved this devotion, and a complete guide on how to pray it."
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
                  August 15 – Sept 29
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Lent of St. Michael: 40 Days to Breaking Spiritual Chains
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Who is like unto God?" This was the battle cry of the Archangel Michael during the Great War in Heaven. Today, that same power is available to us through a devotion popularized by St. Francis of Assisi. If you are facing a spiritual wall, this 40-day "Lent" is your battering ram.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <ShieldCheck className="w-24 h-24 text-orange-400/20 absolute -bottom-4 -right-4" />
               <Sword className="w-32 h-32 text-orange-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Most Catholics know the Lent before Easter, but fewer know the <strong>Lent of St. Michael</strong>. Running from the Feast of the Assumption (Aug 15) to Michaelmas (Sept 29), this is not just a prayer—it is a training camp for the soul.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Franciscan Origins: Mount La Verna
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1224, <strong>Saint Francis of Assisi</strong> retreated to a wild mountain called La Verna. He had a profound love for St. Michael, whom he saw as the mediator between God and man after the Virgin Mary. He decided to fast for 40 days to honor the Archangel.
              </p>
              <p className="text-text leading-relaxed mb-6">
                It was during this specific Lent that Francis received the <strong>Stigmata</strong>—the physical wounds of Christ. This teaches us a crucial lesson: When we honor the angels, they lead us directly to the Heart of the Crucified King.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <ShieldAlert className="w-6 h-6 text-orange-600" />
                  The Tripod of Victory
                </h3>
                <p className="text-sm text-text-muted mb-6 text-center italic">To live the 40 days effectively, you need three pillars</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-orange-800 text-sm mb-2 uppercase">Prayer</h4>
                    <p className="text-xs">Daily Chaplet of St. Michael and 40 days of the St. Michael Prayer.</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-orange-800 text-sm mb-2 uppercase">Penance</h4>
                    <p className="text-xs">A specific fast (from social media, secular music, or sweets).</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-orange-800 text-sm mb-2 uppercase">Charity</h4>
                    <p className="text-xs">A commitment to a daily act of service or almsgiving.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. The 9 Choirs and the Chaplet
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Central to this Lent is the <strong>Chaplet of St. Michael</strong>. Revealed to a Portuguese mystic, Antonia de Astonac, it involves nine salutations to the nine choirs of angels. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. Michael promised that anyone who prays this before Communion will be escorted by those nine angels. For a Catholic, this isn't just "imagination"—it is the reality of the <strong>Communion of Saints</strong>. Whether you are praying against addiction, family division, or spiritual dryness, you are enlisting an army.
              </p>

              <QuizCTA
                title="Are you under spiritual attack?"
                description="The first step to victory is awareness. Take our quiz to evaluate your spiritual hygiene and learn how the Archangels can protect your peace."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Flame className="w-6 h-6 text-accent" />
                 Why St. Michael is the Prince
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In <strong>Revelation 12:7-9</strong>, we see the cosmic battle. Michael doesn't win by his own power, but by the "Blood of the Lamb." This is the key to the devotion: St. Michael is the one who helps us stay faithful to the cross. He is the guardian of the Eucharist and the defender of the Church.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "St. Michael is the first of all the angels. He is the standard-bearer of the Holy Trinity." — St. Thomas Aquinas
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Do I have to fast from food for 40 days?",
                answer: "No. You should choose a penance that is challenging but sustainable for your state of life. For most, this means fasting from a specific habit (like constant notifications or idle talk) rather than strict bread and water."
              },
              {
                question: "Can I start the Lent late?",
                answer: "Yes! If you find out about it after August 15, you can still start and finish the 40 days. The dates are traditional, but the 40-day intensive is what transforms the heart."
              },
              {
                question: "What is the difference between an Archangel and a Guardian Angel?",
                answer: "Archangels (Michael, Gabriel, Raphael) have cosmic missions for the whole Church. Your Guardian Angel is specifically assigned to *you* for your protection and guidance. In St. Michael's Lent, we honor both."
              }
            ]} />

<RelatedArticles currentSlug="st-michael-lent-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Enlist the General of the Heavenly Host
              </h3>
              <p className="text-text-muted mb-6">
                Victory is not a wish; it is a promise. Take our quiz to receive a custom plan for your spiritual Lent.
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
