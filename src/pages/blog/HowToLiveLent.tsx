import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function HowToLiveLent() {
  return (
    <>
      <Helmet>
        <title>How to Live Lent: A Complete Guide to the Season of Conversion | Guide Catholic</title>
        <meta name="description" content="Discover how to make the most of Lent through prayer, fasting, and almsgiving. Practical tips for a transformative Lenten season that bears lasting spiritual fruit." />
        <meta name="keywords" content="how to live lent, lent catholic, lenten practices, ash wednesday, lent fasting, lent prayer, lent almsgiving, lenten season" />
        <link rel="canonical" href="https://guidecatholic.com/blog/how-to-live-lent/" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <header className="bg-primary text-button-text py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-xl font-bold">Guide Catholic</span>
            </Link>
            <Link to="/quiz-intro"><Button variant="secondary" size="sm">Take the Quiz</Button></Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/page/1/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">How to Live Lent</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/page/1/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 12, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Live Lent: A Season of Conversion and Grace
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Lent is not about giving up chocolate. It is about giving up sin. It is the Church's annual invitation to die to self and rise with Christ — a 40-day school of holiness that can transform your entire year.
              </p>
            </header>

            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-purple-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Every year, the Church offers us the gift of Lent — forty days of grace, penance, and renewal that mirror Jesus's forty days of fasting in the desert. But for many Catholics, Lent passes by as a vague season of minor inconveniences rather than a genuine encounter with the living God. This guide will help you make Lent what it was always meant to be: a time of profound conversion.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What is Lent?</h2>
              <p className="text-text leading-relaxed mb-6">
                Lent is the liturgical season of forty days that prepares the faithful for the celebration of Easter. It begins on Ash Wednesday and concludes on Holy Thursday evening, when the Easter Triduum begins. The forty days recall several biblical periods of forty: Moses's forty days on Mount Sinai, Elijah's forty-day journey to Horeb, and above all, Jesus's forty days of fasting and prayer in the desert before beginning His public ministry.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The word "Lent" comes from the Old English "lencten," meaning spring — the season of lengthening days. It is a season of spiritual spring: a time to clear away the dead wood of sin, to till the soil of the soul, and to plant seeds of virtue that will bear fruit at Easter and throughout the year.
              </p>

              <QuizCTA
                title="Is your Lent bearing spiritual fruit?"
                description="Take our Catholic life assessment and receive personalized guidance for your spiritual journey."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Three Pillars of Lent</h2>
              <p className="text-text leading-relaxed mb-6">
                Jesus Himself outlined the three pillars of Lenten practice in the Sermon on the Mount (Matthew 6:1-18): prayer, fasting, and almsgiving. These three practices work together as a unified program of conversion:
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">1. Prayer: Deepening Your Relationship with God</h3>
              <p className="text-text leading-relaxed mb-6">
                Lent is above all a time of intensified prayer. The Church offers many opportunities: daily Mass, the Stations of the Cross on Fridays, communal penance services, and personal prayer. Consider adding one of these practices to your Lenten routine:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Daily Rosary or a decade of the Rosary</li>
                <li>Lectio Divina with the daily Mass readings</li>
                <li>The Stations of the Cross every Friday</li>
                <li>A weekly holy hour before the Blessed Sacrament</li>
                <li>Morning and evening prayer from the Liturgy of the Hours</li>
                <li>The Divine Mercy Chaplet at 3 PM</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">2. Fasting: Mastering the Body and Expressing Repentance</h3>
              <p className="text-text leading-relaxed mb-6">
                Fasting is one of the most ancient and powerful spiritual practices in Christianity. The Church requires fasting on Ash Wednesday and Good Friday (one full meal and two smaller meals that together don't equal a full meal, for those aged 18-59) and abstinence from meat on all Fridays of Lent (for those aged 14 and older).
              </p>
              <p className="text-text leading-relaxed mb-6">
                But fasting can go beyond food. Consider fasting from: social media, entertainment, alcohol, unnecessary spending, or any habit that has become a distraction from God. The purpose of fasting is not the sacrifice itself but what it opens up — more time for prayer, greater sensitivity to God's voice, and solidarity with the poor.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">3. Almsgiving: Love Made Concrete</h3>
              <p className="text-text leading-relaxed mb-6">
                Almsgiving — giving to the poor — is the third pillar of Lent. It is the outward expression of the interior conversion that prayer and fasting are producing. The money saved by fasting can be given to the poor. Time freed from entertainment can be given in service. The Church's traditional works of mercy — feeding the hungry, clothing the naked, visiting the sick — are all forms of Lenten almsgiving.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Most Important Lenten Practice: Confession</h2>
              <p className="text-text leading-relaxed mb-6">
                Above all else, Lent is the season of the Sacrament of Confession. The Church's ancient tradition of preparing catechumens for Baptism at Easter and reconciling penitents to the Church makes Lent the preeminent time for sacramental reconciliation. The Easter Duty — receiving Communion during the Easter season — presupposes being in a state of grace.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Many parishes offer additional Confession times during Lent, communal penance services, and "24 Hours for the Lord" events. Do not let Lent pass without making a good Confession. It is the most transformative thing you can do during this holy season.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Holy Week: The Heart of Lent</h2>
              <p className="text-text leading-relaxed mb-6">
                Lent culminates in Holy Week — the most sacred week of the liturgical year. Each day of Holy Week has its own profound significance:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Palm Sunday:</strong> Jesus's triumphal entry into Jerusalem and the beginning of His Passion</li>
                <li><strong>Holy Monday, Tuesday, Wednesday:</strong> Days of intensified prayer and preparation</li>
                <li><strong>Holy Thursday:</strong> The institution of the Eucharist and the priesthood; the washing of feet</li>
                <li><strong>Good Friday:</strong> The Passion and Death of Our Lord; the Stations of the Cross; the Veneration of the Cross</li>
                <li><strong>Holy Saturday:</strong> The day of silence; the Easter Vigil in the night</li>
                <li><strong>Easter Sunday:</strong> The Resurrection — the greatest feast of the Christian year</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practical Tips for a Fruitful Lent</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Make a Lenten plan:</strong> Write down your specific commitments for prayer, fasting, and almsgiving before Ash Wednesday.</li>
                <li><strong>Start small and be consistent:</strong> One practice done faithfully every day is worth more than many practices abandoned after a week.</li>
                <li><strong>Don't give up on Sundays:</strong> While Sundays are not technically part of the 40 days, maintaining your Lenten practices on Sundays builds consistency.</li>
                <li><strong>Find a Lenten companion:</strong> Share your Lenten commitments with a friend or family member for mutual accountability.</li>
                <li><strong>Read a spiritual book:</strong> Choose a book that will nourish your faith during Lent — the lives of the saints, a commentary on the Passion, or a classic of Catholic spirituality.</li>
                <li><strong>Attend daily Mass if possible:</strong> Even a few extra weekday Masses during Lent can transform your spiritual life.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "Lent is a favorable time for letting Christ serve us so that we in turn may become more like Him."
                </p>
                <p className="text-text-muted text-center mt-2">— Pope Francis</p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Return to me with all your heart, with fasting, with weeping, and with mourning; and rend your hearts and not your garments."
                </p>
                <p className="text-text-muted text-center mt-2">— Joel 2:12-13</p>
              </div>
            </div>

            <RelatedArticles currentSlug="how-to-live-lent" />

            <BlogFAQ faqs={[
              { question: "What is Lent and when does it begin?", answer: "Lent is a 40-day season of prayer, fasting, and almsgiving that prepares Catholics for Easter. It begins on Ash Wednesday and ends on Holy Thursday evening. The 40 days recall Jesus's 40 days of fasting in the desert (Matthew 4:1-11)." },
              { question: "What are the three pillars of Lent?", answer: "The three pillars are: Prayer (deepening your relationship with God), Fasting (self-denial that strengthens the will and expresses repentance), and Almsgiving (giving to the poor as an act of love). Jesus mentions all three in Matthew 6:1-18." },
              { question: "What should I give up for Lent?", answer: "Choose something that is genuinely sacrificial for you — social media, sweets, alcohol, TV, or a comfort habit. The purpose is not the sacrifice itself but what it opens up: more time for prayer, greater dependence on God, and solidarity with the poor." },
              { question: "Are Sundays during Lent still penitential?", answer: "Sundays are always celebrations of the Resurrection and are not counted among the 40 days of Lent. You are not obligated to fast on Sundays, though many Catholics maintain their Lenten practices. Sundays during Lent are 'in Lent' but not 'of Lent.'" },
              { question: "What is the most important thing to do during Lent?", answer: "Go to Confession. Lent is the Church's primary season for reconciliation. The Easter Duty (receiving Communion during the Easter season) presupposes being in a state of grace. Many parishes offer extra Confession times and communal penance services during Lent." }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Discover How Your Faith Life Is</h3>
              <p className="text-text-muted mb-6">Take our free quiz and receive a personalized assessment of your Catholic journey.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
