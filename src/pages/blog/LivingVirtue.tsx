import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Cross, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LivingVirtue() {
  return (
    <>
      <Helmet>
        <title>Living the Christian Life: A Practical Guide to Catholic Virtue | Guide Catholic</title>
        <meta name="description" content="Discover how to live the Christian life with practical guidance on virtues, daily holiness, and growing closer to Christ in ordinary circumstances." />
        <meta name="keywords" content="Christian life, Catholic virtue, living virtue, daily holiness, practical Christianity" />
        <link rel="canonical" href="https://guidecatholic.com/blog/living-virtue/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Living the Christian Life: A Practical Guide to Catholic Virtue"
          description="Discover how to live the Christian life with practical guidance on virtues, daily holiness, and growing closer to Christ in ordinary circumstances."
          url="https://guidecatholic.com/blog/living-virtue/"
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
              <span className="text-text">Living the Christian Life</span>
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
                  Christian Life
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Living the Christian Life: A Practical Guide to Catholic Virtue
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Christian life is not a set of rules but a relationship with Christ that transforms character. Living virtue in daily circumstances—at work, in family, amid challenges—is the path to holiness accessible to everyone.
              </p>
            </header>

            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Heart className="w-24 h-24 text-rose-400/20 absolute top-4 right-4" />
              <Cross className="w-32 h-32 text-rose-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
                The Christian life is not a set of rules but a relationship with Christ that transforms character. Living virtue in daily circumstances—at work, in family, amid challenges—is the path to holiness accessible to everyone.
              </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Universal Call to Holiness
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Vatican II taught that holiness is not reserved for priests and religious but is the vocation of every baptized person. St. Thérèse of Lisieux showed through her "Little Way" that ordinary life, lived with extraordinary love, becomes the path to sainthood.
            </LinkedText>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              This means your workplace, your kitchen, your commute, your conversations—all become opportunities for grace. The question is not where you are but how you love in that place.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Theological Virtues: Faith, Hope, and Charity
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Faith: Trusting in God's Word
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Faith is not merely intellectual assent but personal trust in God. It means believing His promises even when circumstances suggest otherwise. Daily faith involves trusting God's providence, His forgiveness, and His guidance.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Hope: Confident Expectation of Heaven
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Hope is the virtue that keeps us oriented toward heaven. Unlike optimism, which expects earthly success, hope trusts in eternal salvation. Hope sustains us through suffering, failure, and disappointment, knowing that God works all things for good.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Charity: Love of God and Neighbor
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Charity is the greatest virtue—the love that imitates Christ's self-gift. It seeks the good of others, even when inconvenient or costly. Charity transforms ordinary actions—making dinner, answering email, listening to a friend—into acts of divine love.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Cardinal Virtues: Practical Wisdom
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Prudence: Practical Wisdom
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Prudence is right reason applied to action—the ability to discern the good and choose the right means to achieve it. It requires reflection, counsel, and decisiveness. Prudence prevents both rash action and paralyzing indecision.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Justice: Giving God and Neighbor Their Due
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Justice involves rendering to each what is owed—worship to God, fair treatment to others, honesty in dealings. It underlies ethical business practices, faithful relationships, and civic responsibility. Justice builds community and trust.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Fortitude: Courage in Difficulty
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Fortitude enables perseverance in the face of difficulty. It is not rash bravery but steady endurance—staying faithful when faith costs something. Fortitude sustains marriage through hard years, career through setbacks, and faith through doubt.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Temperance: Moderation and Balance
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Temperance moderates the desire for pleasure—food, drink, comfort, entertainment. It prevents excess and addiction. In a consumer culture, temperance is countercultural, enabling freedom from the tyranny of desire.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Daily Practices for Virtue
            </h2>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Morning Offering
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Begin each day by offering everything to God. This consecrates ordinary activities—making them opportunities for grace. The daily grind becomes spiritual worship when offered with love.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Examination of Conscience
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Briefly review the day: When did I love well? When did I fail? This practice increases self-awareness and prompts daily conversion. It prepares for confession and tracks growth in virtue over time.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              Spiritual Reading
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Reading Scripture and spiritual classics (Imitation of Christ, Introduction to the Devout Life, writings of the saints) feeds the mind with holy thoughts. Even 15 minutes daily transforms perspective.
            </LinkedText>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Practice of Presence
            </h3>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Brother Lawrence taught to practice the presence of God—maintaining awareness of God's nearness throughout the day. This transforms washing dishes, commuting, and working into prayer.
            </LinkedText>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Dealing with Failure
            </h2>
            <LinkedText className="text-text leading-relaxed mb-6" currentSlug="living-virtue">
              Growth in virtue is not linear. Sin, weakness, and failure are part of the journey. The key is not perfection but perseverance—beginning again each day with trust in God's mercy. Confession restores grace; determination keeps us moving forward.
            </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Be perfect as your heavenly Father is perfect." - Matthew 5:48
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "And now these three remain: faith, hope, and love." - 1 Corinthians 13:13
                </p>
              </div>
              
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "I can do all things through Christ who strengthens me." - Philippians 4:13
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "How do I know which virtue to focus on?",
                answer: "Examine your life: Where do you consistently fail? What causes the most conflict? Ask those close to you for honest feedback. The virtue you most resist is often the one you most need. Focus on one at a time rather than trying to perfect all simultaneously."
              },
              {
                question: "Can I grow in virtue if I keep sinning?",
                answer: "Yes. Growth is gradual. Even saints continued sinning (venially) throughout life. The key is sincere effort, prompt confession when you fall, and determination to begin again. Perfection is not possible in this life; faithfulness is."
              },
              {
                question: "What about virtues like patience that seem impossible?",
                answer: "Patience, like all virtues, is a habit developed through practice. Start small: wait five minutes before reacting, take a breath before speaking. Ask God for the grace you lack. Over time, with grace and effort, even deep-seated impatience can yield."
              },
              {
                question: "Is it possible to be too virtuous?",
                answer: "No—one cannot have too much faith, hope, or charity. However, virtue must be balanced: courage without prudence becomes rashness; justice without mercy becomes harshness. The virtues work together, each tempering the others. Seek the whole package, not isolated extremes."
              }
            ]} />

<RelatedArticles currentSlug="living-virtue" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Grow in Virtue Today
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized virtue growth guide.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Start Assessment
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
