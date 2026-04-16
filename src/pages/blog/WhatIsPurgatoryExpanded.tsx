import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Calendar, Clock, ArrowLeft, Flame, Sparkles, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function WhatIsPurgatoryExpanded() {
  return (
    <>
      <Helmet>
        <title>What Is Purgatory? Complete Guide to the Catholic Teaching | Guide Catholic</title>
        <meta name="description" content="What is Purgatory? Learn the full Catholic teaching on purgatory — biblical evidence, the theology of purification, prayers for the dead, and how Purgatory reveals God's mercy." />
        <meta name="keywords" content="what is purgatory, purgatory catholic, is purgatory in the bible, catholic teaching purgatory, prayers for souls in purgatory, museum of souls purgatory, gregorian masses" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-purgatory-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="What Is Purgatory? Complete Guide to the Catholic Teaching"
        description="What is Purgatory? Learn the full Catholic teaching on purgatory — biblical evidence, the theology of purification, prayers for the dead, and how Purgatory reveals God's mercy."
        url="https://guidecatholic.com/blog/what-is-purgatory-guide/"
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
              <span className="text-text">What Is Purgatory?</span>
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
                  Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                What Is Purgatory? The Expert Guide to the Antechamber of Heaven
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Purgatory is perhaps the most misunderstood "place" in the Catholic universe. Far from being a "mini-hell" or a "second chance," it is the masterpiece of Divine Mercy—the final "cleansing" that ensures every soul entering Heaven is capable of loving God with 100% of its capacity.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Flame className="w-24 h-24 text-orange-400/20 absolute bottom-4 right-4" />
               <Cloud className="w-32 h-32 text-blue-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The word "Purgatory" comes from the Latin <em>purgare</em> (to make clean). The <strong>Catechism (CCC 1030-1032)</strong> is clear: all who die in God's grace but are still "imperfectly purified" undergo a final scrubbing. If you die with a small attachment to a petty sin, you aren't ready for the Infinite Holiness of God, but you certainly don't deserve Hell. Purgatory is the solution.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Theology of the "Holy Fire"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Most people imagine Purgatory as physical flames. However, many great mystics, like <strong>Saint Catherine of Genoa</strong>, describe Purgatory as an <em>interior fire of love</em>. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The greatest suffering in Purgatory is not physical—it is the **"Pain of Loss"** (<em>Poena Damni</em>). Imagine being a split-second away from seeing the most beautiful person you've ever loved, but a door remains shut because you aren't "dressed" yet. That longing, that intense desire for the Beatific Vision, is what purifies the soul.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Ghost className="w-6 h-6 text-blue-600" />
                  The Evidence in Rome: The Museum of Souls
                </h3>
                <p className="text-text mb-4 text-sm">
                  In a small church in Rome (<em>Sacro Cuore di Gesù in Prati</em>), there is a **Museum of the Souls in Purgatory**. It contains artifacts that suggest Purgatory is very real:
                </p>
                <ul className="list-disc list-inside text-text space-y-3 text-sm">
                  <li><strong>Burnt Handprints:</strong> Prayer books and tabletops with the literal burnt outlines of hands, allegedly left by souls in Purgatory appearing to relatives to ask for Masses.</li>
                  <li><strong>The Message:</strong> These "relics" serve as a reminder that the souls cannot help themselves; they rely entirely on <em>us</em>.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Scriptural Foundations: Beyond 2 Maccabees
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While 2 Maccabees 12:46 is the "smoking gun" for praying for the dead, Jesus Himself implies a middle state. In <strong>Matthew 12:32</strong>, He speaks of sins that cannot be forgiven in this age "nor in the age to come." This implies that *some* sins <em>can</em> be forgiven in the next life. If you are in Heaven, you have no sin. If you are in Hell, you cannot be forgiven. Therefore, there must be a third state.
              </p>

              <QuizCTA
                title="Do you know the state of your soul?"
                description="Take our quiz to reflect on your daily habits and see how you can begin your 'purgatory' here on earth through penance and love."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 How to Help: The "Expert" Methods
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church offers three highly effective ways to assist the "Poor Souls":
              </p>
              <ul className="list-decimal list-inside text-text space-y-3 mb-10">
                <li><strong>Gregorian Masses:</strong> A tradition of offering 30 consecutive Masses for a single deceased person. This follows the vision of Pope St. Gregory the Great.</li>
                <li><strong>The Heroic Act of Charity:</strong> A voluntary offering where a person gives to the Blessed Virgin Mary all the "satisfactory" value of their good works and all the suffrages offered for them after death, to be used for the souls in Purgatory.</li>
                <li><strong>Plenary Indulgences:</strong> Specifically those gained during the first eight days of November (All Souls' octave).</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "As we enter Heaven, we will see the souls we helped to release from Purgatory. They will be our greatest friends for all eternity." — St. John Vianney
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="what-is-purgatory-guide" />

            <BlogFAQ faqs={[
              {
                question: "Is Purgatory a physical place like a cave?",
                answer: "Most modern theologians, including Pope Benedict XVI, suggest Purgatory is a 'state' of the soul rather than a geographic location. It is the encounter with the 'fire' of Christ's gaze that purifies us."
              },
              {
                question: "Do souls in Purgatory know we are praying for them?",
                answer: "Yes. St. Thomas Aquinas teaches that while they cannot help themselves (their time of merit is over), they are aware of the Church's prayers and are deeply grateful for them."
              },
              {
                question: "Can souls in Purgatory pray for us?",
                answer: "This is a popular belief, and many saints (like St. Alphonsus Liguori) argue that once we help release a soul, they become powerful intercessors for us at the throne of God."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Prepare for Paradise
              </h3>
              <p className="text-text-muted mb-6">
                Don't wait for the next life to be purified. Take our quiz to learn how to live a life of total surrender today.
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
