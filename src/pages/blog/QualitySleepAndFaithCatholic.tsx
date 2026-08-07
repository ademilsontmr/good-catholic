import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

const SLEEP_CALCULATOR_URL = "https://sleepcalculator.bio";

function SleepCalculatorCTA() {
  return (
    <aside
      className="my-12 relative overflow-hidden rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-surface to-violet-50/60 shadow-sm"
      aria-label="Sleep Calculator recommendation"
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="relative p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
            <Moon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl md:text-2xl font-bold text-text mb-2 leading-snug">
              Find your ideal bedtime in 90-second sleep cycles
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 sm:mb-0">
              Waking during deep sleep leaves you groggy for morning prayer and Mass. Use the free{" "}
              <strong>Sleep Calculator</strong> at sleepcalculator.bio to align your alarm with natural sleep cycles — so you rise rested and ready for the day God gives you.
            </p>
          </div>
          <a
            href={SLEEP_CALCULATOR_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 shadow-sm transition-all duration-300 group"
            >
              Try Sleep Calculator
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default function QualitySleepAndFaithCatholic() {
  return (
    <>
      <Helmet>
        <title>How Quality Sleep Strengthens Your Catholic Faith | Guide Catholic</title>
        <meta
          name="description"
          content="Quality sleep helps Catholics pray better, resist sin, and serve others with patience. Learn how rest supports faith — plus a free sleep cycle calculator for your ideal bedtime."
        />
        <meta
          name="keywords"
          content="sleep and faith, Catholic sleep, rest and prayer, sleep cycles bedtime, quality sleep spirituality, morning prayer tired, Catholic mental health sleep"
        />
        <link rel="canonical" href="https://guidecatholic.com/blog/quality-sleep-and-faith-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="How Quality Sleep Strengthens Your Catholic Faith"
        description="Quality sleep helps Catholics pray better, resist sin, and serve others with patience. Learn how rest supports faith — plus a free sleep cycle calculator for your ideal bedtime."
        url="https://guidecatholic.com/blog/quality-sleep-and-faith-catholic/"
        datePublished="2026-08-06"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Quality Sleep and Faith", url: "https://guidecatholic.com/blog/quality-sleep-and-faith-catholic/" },
        ]}
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
              <span className="text-text">Quality Sleep and Faith</span>
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
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Mental Health
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  August 6, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How Quality Sleep Strengthens Your Catholic Faith
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Rest is not laziness — it is stewardship of the body God gave you. When you sleep well, you pray with clarity, love your neighbor with patience, and resist temptation with a stronger will.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">
                  Quality sleep strengthens Catholic faith by restoring the body and mind you need for prayer, Sunday Mass, charity, and moral courage. Chronic sleep deprivation dulls concentration during the Rosary, shortens patience with family, and weakens resistance to sin — while aligned sleep cycles help you wake refreshed for morning offering and daily duties.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why the Church Cares About Rest
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                Catholicism is incarnational: God took a human body, and your body matters for holiness. St. Paul asked, &quot;Do you not know that your body is a temple of the Holy Spirit?&quot; (1 Cor 6:19). Sleep is how that temple is repaired each night. The Catechism teaches that life and physical health are gifts we must steward responsibly (CCC 2288–2290). Burning the candle at both ends is not heroic virtue if it destroys the very instrument through which you serve God and others.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sleep and Prayer: The Morning You Bring to God
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                How many Catholics skip morning prayer not from lack of love, but from brain fog? Sleep deprivation impairs attention, memory, and emotional regulation — exactly what contemplative prayer requires. When Jesus rose &quot;very early, while it was still dark&quot; to pray (Mark 1:35), He modeled intentional rest the night before. A rested mind can hold a decade of the Rosary without wandering; a tired mind reaches for the phone before the crucifix. Protecting sleep is protecting the first fruits of your day for God.
              </LinkedText>

              <h3 className="font-display text-xl font-bold text-text mt-6 mb-3">
                Evening Examen Instead of Endless Scrolling
              </h3>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                St. Ignatius recommended reviewing the day before sleep — gratitude, sorrow, resolution. Blue light and social media after 10 p.m. fight your natural melatonin and fill the mind with noise. Swap thirty minutes of scrolling for five minutes of examen, one Our Father, and entrusting tomorrow to Mary. Your sleep quality and your spiritual peace often rise together.
              </LinkedText>

              <SleepCalculatorCTA />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sleep Cycles: Why Waking at the Wrong Moment Ruins Your Day
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                Sleep science confirms what many faithful notice intuitively: waking mid-cycle feels worse than waking after a full cycle, even with fewer total hours. A typical cycle lasts about 90 minutes. If you need to rise at 6:00 a.m. for Mass or work, going to bed at 10:16 p.m. (five cycles plus time to fall asleep) often feels better than a random 11:30 p.m. bedtime that leaves you in deep sleep when the alarm rings — a state called sleep inertia that steals your morning focus.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                The free tool at{" "}
                <a href={SLEEP_CALCULATOR_URL} target="_blank" rel="noopener noreferrer sponsored" className="text-accent underline underline-offset-2">
                  sleepcalculator.bio
                </a>{" "}
                calculates ideal bedtimes from your wake-up hour using 90-minute cycles and adjustable fall-asleep time — practical wisdom that supports, not replaces, trust in Providence.
              </LinkedText>

              <QuizCTA
                title="How is your spiritual and emotional balance?"
                description="Sleep affects mood, patience, and prayer. Take our Catholic life assessment for personalized guidance on habits that support faith and family life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Virtue Needs a Rested Will
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                Patience is a fruit of the Spirit — and sleep deprivation is a fruit killer. Studies link poor sleep to irritability, impulsive anger, and weakened self-control. The spouse who snaps at children, the driver who honks in rage, the worker who gossips out of exhaustion are not necessarily bad Catholics; they may be tired Catholics. Mortal sin requires full consent; venial sin grows in the soil of fatigue. Guarding sleep is guarding charity.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Jesus Slept; Saints Rested
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                                Christ slept through a storm while the apostles panicked (Mark 4:38) — not because He lacked faith, but because He trusted the Father. Benedictines structured their day around <em>Opus Dei</em>, work, and sleep (<em>lectio</em> and rest). St. Teresa of Ávila, reformer of Carmel, insisted nuns get adequate rest so prayer would not become torture. Rest is woven into Catholic tradition; hustle culture is not.
                            </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Catholic Evening Routine for Better Sleep
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Fixed wake time:</strong> Even on weekends, stability helps circadian rhythm — especially if you attend early Mass.</li>
                <li><strong>Last meal early:</strong> Heavy late dinners disrupt sleep; Friday abstinence already teaches discipline at table.</li>
                <li><strong>Night Prayer:</strong> Compline or a simple Our Father + Hail Mary signals the day is complete.</li>
                <li><strong>Confession when burdened:</strong> Guilt and anxiety steal sleep; mercy restores peace.</li>
                <li><strong>Calculate bedtime:</strong> Use a sleep-cycle calculator so your alarm catches you in lighter sleep.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                When Poor Sleep Needs Medical Help
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="quality-sleep-and-faith-catholic">
                Insomnia, sleep apnea, chronic pain, and anxiety disorders are medical conditions — not failures of faith. If you snore loudly, stop breathing at night, or lie awake for months, see a doctor. Prayer cooperates with medicine; it does not replace treatment. St. Dymphna patrons mental health; modern sleep clinics honor the same truth: the body is good, and healing it serves the soul.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  &quot;Come to me, all you who are weary and burdened, and I will give you rest.&quot;
                </p>
                <p className="text-text-muted text-center mt-2">— Matthew 11:28</p>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="quality-sleep-and-faith-catholic"
              faqs={[
                {
                  question: "Does the Catholic Church teach that sleep is important?",
                  answer: "Yes. The Church teaches stewardship of life and health (CCC 2288–2290). Rest supports prayer, work, and charity. Asceticism that destroys health is not authentic holiness.",
                },
                {
                  question: "Can lack of sleep affect my prayer life?",
                  answer: "Absolutely. Sleep deprivation reduces focus, memory, and emotional stability — all needed for meditation, Rosary, and Scripture reading. Many Catholics struggle with prayer partly because they are exhausted.",
                },
                {
                  question: "What are sleep cycles and why do they matter?",
                  answer: "Sleep occurs in roughly 90-minute cycles. Waking at the end of a cycle (after 4.5, 6, 7.5, or 9 hours) usually feels easier than waking mid-cycle. Tools like sleepcalculator.bio help you plan bedtimes accordingly.",
                },
                {
                  question: "Is using a sleep calculator against trusting God?",
                  answer: "No. Planning bedtime wisely is prudence — the same virtue that leads you to set an alarm for Mass. Trust Providence and use the means God gives through reason and science.",
                },
                {
                  question: "What if I still cannot sleep despite good habits?",
                  answer: "Consult a physician. Sleep apnea, depression, chronic pain, and other conditions require professional care. Combine medical treatment with prayer, Confession, and spiritual direction.",
                },
              ]}
            />
            <RelatedArticles currentSlug="quality-sleep-and-faith-catholic" />
            <ArticleBottomCTA
              title="Ready to deepen your Catholic life?"
              description="Take our free assessment for personalized guidance on prayer, sacraments, and daily habits — including rest that supports holiness."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
