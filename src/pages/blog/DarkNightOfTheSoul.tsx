import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, Calendar, Clock, ArrowLeft, Anchor, Sparkles, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function DarkNightOfTheSoul() {
  return (
    <>
      <Helmet>
        <title>The Dark Night of the Soul: What It Is and How to Navigate It | Guide Catholic</title>
        <meta name="description" content="Learn what the dark night of the soul is in Catholic spirituality. Discover St. John of the Cross's teaching, the two dark nights, how to distinguish it from depression, and how to navigate it." />
        <meta name="keywords" content="dark night of the soul, dark night of the soul catholic, st john of the cross dark night, spiritual desolation, spiritual dryness, Mother Teresa dark night" />
        <link rel="canonical" href="https://guidecatholic.com/blog/dark-night-of-the-soul-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Dark Night of the Soul: What It Is and How to Navigate It"
        description="Learn what the dark night of the soul is in Catholic spirituality. Discover St. John of the Cross's teaching, the two dark nights, how to distinguish it from depression, and how to navigate it."
        url="https://guidecatholic.com/blog/dark-night-of-the-soul-catholic/"
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
              <span className="text-text">Dark Night of the Soul</span>
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
                  Spirituality
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
                The Dark Night of the Soul: An Expert Guide to Mystical Purification
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                If you have ever felt spiritually dry, abandoned by God, or unable to pray as you once did, you may be experiencing what <strong>St. John of the Cross</strong> called the Dark Night of the Soul. Far from being a sign of failure, this "darkness" is a profound theological transition—a necessary passage where God strips the soul of its attachments to prepare it for Divine Union.
              </p>
            </header>

            <div className="aspect-video bg-slate-900 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Moon className="w-24 h-24 text-slate-100/20 absolute" />
               <Cloud className="w-32 h-32 text-slate-100/40 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The term "Dark Night" was coined in the 16th century by a Spanish Carmelite friar and Doctor of the Church, <strong>San Juan de la Cruz</strong>. Written while he was imprisoned in a tiny, lightless cell in Toledo, his poem and commentary describe a process where God "weans" the soul from spiritual "candies" (consolations) to lead it into a mature, naked love of God for His own sake.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Three Stages of the Spiritual Life
              </h2>
              <p className="text-text leading-relaxed mb-6">
                To understand the Dark Night, we must look at the traditional "Three Ways":
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>The Purgative Way:</strong> The stage of beginners where we fight against mortal sins and rely on emotional "good feelings" in prayer.</li>
                <li><strong>The Illuminative Way:</strong> The stage where the Dark Night of the Senses typically occurs. God removes the "sweetness" to purify our intentions.</li>
                <li><strong>The Unitive Way:</strong> The pinnacle where the soul is perfectly transformed in God. This usually follows the more intense Night of the Spirit.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Two Phases: Senses vs. Spirit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">The Night of the Senses</h3>
                  <p className="text-sm">This is the "weaning" process. Prayer becomes dry. Imagination fails. Desires for worldly things vanish, but you feel "stuck" in God. It is common and meant to move you from <em>Meditation</em> (discursive thought) to <em>Contemplation</em> (a simple, loving gaze).</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                  <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">The Night of the Spirit</h3>
                  <p className="text-sm">Much rarer and far more painful. It feels like absolute abandonment. The soul feels "condemned" or invisible to God. It is a participation in Christ's <em>Eli, Eli, lama sabachthani</em> on the Cross. It leads to the Transforming Union (Spirituall Marriage).</p>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Anchor className="w-6 h-6 text-sky-600" />
                  The 3 Expert Criteria: Dark Night or Depression?
                </h3>
                <p className="text-text mb-4">St. John of the Cross gave three signs to know if the dryness is from God:</p>
                <ul className="list-disc list-inside text-text space-y-4">
                  <li><strong>The Lack of Comfort:</strong> The soul finds no pleasure in the things of God, but crucially, it also finds *no pleasure* in the things of the world. (In depression, worldly pleasures may still be sought).</li>
                  <li><strong>The Pained Concern:</strong> The soul is deeply worried that it is not serving God well. It desires Him intensely, even if it cannot feel Him.</li>
                  <li><strong>The Loving Attention:</strong> The mind cannot "meditate" (think through points), but prefers to remain in a "general loving attention" to God in silence.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Case of Mother Teresa: A 50-Year Night
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 2007, the publication of Mother Teresa's private letters, <em>Come Be My Light</em>, shocked the world. It revealed that from 1948 until her death, she lived in a near-constant Dark Night of the Spirit. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                She felt totally unwanted by God, yet she continued to wake at 4:30 AM to pray and serve the dying with a smile. This proves that <strong>holiness is not a feeling</strong>; it is an act of the will. Her darkness allowed her to enter into the "internal poverty" of the poor she served.
              </p>

              <QuizCTA
                title="Are you ready for the ascent?"
                description="The journey to God is not a straight line. Take our quiz to evaluate your current spiritual season and learn how to cooperate with God's work in your soul."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Practical Expert Advice for the Dryness
              </h2>
              <p className="text-text leading-relaxed mb-6">
                If you are in the Night:
              </p>
              <ul className="list-decimal list-inside text-text space-y-3 mb-10">
                <li><strong>Do not force meditation:</strong> If you can no longer "talk" to God with your mind, simply "be" with Him. Silence is the language of the Night.</li>
                <li><strong>Change your prayers:</strong> Switch from long vocal prayers to short "arrow prayers" (ejaculations) like "Jesus, I trust in You."</li>
                <li><strong>Remain faithful to your duties:</strong> Even if prayer feels empty, the duties of your state in life (work, family) are your primary path to sanctity.</li>
                <li><strong>Seek a Director:</strong> St. John warns: "He who has himself for a director, has a fool for a pupil." Find a priest who understands mystical theology.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The light of God is so bright that it blinds the weak eyes of the soul, creating the appearance of darkness. The Night is actually God's light entering the soul." — St. John of the Cross
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "How long does a Dark Night last?",
                answer: "There is no set time. For some, it is a few months; for saints like Mother Teresa, it can be a lifetime. It lasts as long as God needs to complete the purification of the soul's attachments."
              },
              {
                question: "Can sin cause a Dark Night?",
                answer: "Strictly speaking, no. Dryness caused by sin is called 'desolation' or 'spiritual tepidity.' A Dark Night is specifically a movement initiated by God for a soul that is already striving to be faithful. A director can help you distinguish between the two."
              },
              {
                question: "Is the Dark Night dangerous for my faith?",
                answer: "If handled alone, it can lead to despair. However, if handled with guidance and perseverance, it is the safest 'shortcut' to the highest levels of holiness. It is the fire that burns away the dross to reveal the gold."
              }
            ]} />

<RelatedArticles currentSlug="dark-night-of-the-soul-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                The Sun Will Rise
              </h3>
              <p className="text-text-muted mb-6">
                Trust the process of the Master Sculptor. Take our quiz to deepen your understanding of the interior life.
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
