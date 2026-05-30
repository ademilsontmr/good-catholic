import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Church, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function EucharisticAdorationNearMe() {
  return (
    <>
      <Helmet>
        <title>Eucharistic Adoration Near Me: How to Find a Holy Hour | Guide Catholic</title>
        <meta name="description" content="Find Eucharistic Adoration near you. Learn how to locate adoration chapels, parish holy hours, perpetual adoration, and what to do during your first visit." />
        <meta name="keywords" content="eucharistic adoration near me, adoration near me, holy hour near me, perpetual adoration near me, catholic adoration chapel, blessed sacrament adoration" />
        <link rel="canonical" href="https://guidecatholic.com/blog/eucharistic-adoration-near-me/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Eucharistic Adoration Near Me: How to Find a Holy Hour"
        description="Find Eucharistic Adoration near you. Learn how to locate adoration chapels, parish holy hours, perpetual adoration, and what to do during your first visit."
        url="https://guidecatholic.com/blog/eucharistic-adoration-near-me/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Eucharistic Adoration Near Me", url: "https://guidecatholic.com/blog/eucharistic-adoration-near-me/" },
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
              <span className="text-text">Eucharistic Adoration Near Me</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy & Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Eucharistic Adoration Near Me: How to Find a Holy Hour
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Eucharistic Adoration is time spent in the presence of Jesus Christ truly present in the Blessed Sacrament. Here is how to find Adoration near you and what to do when you arrive.
              </p>
            </header>

            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-amber-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Find Eucharistic adoration through parish bulletins, adoration chapels, and websites like MassTimes.org — perpetual adoration parishes maintain 24/7 schedules with hourly sign-ups. Any Catholic parish with an exposed monstrance welcomes adorers.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Find Eucharistic Adoration Near You</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Search "Eucharistic Adoration near me"</strong> in Google Maps and check nearby parish websites.</li>
                <li><strong>Search "perpetual adoration near me"</strong> if you need an early morning, late night, or 24-hour chapel.</li>
                <li><strong>Check your diocesan website</strong> for a parish finder or Eucharistic Adoration directory.</li>
                <li><strong>Call nearby parishes</strong> because Adoration schedules often change during holidays, Lent, and summer.</li>
              </ul>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eucharistic-adoration-near-me">
                Many parishes offer a weekly holy hour, First Friday Adoration, Adoration before Confession, or a perpetual adoration chapel where adorers sign up for regular hours.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-1">Quick tip</p>
                <p className="text-text text-sm">If a chapel uses a door code after hours, call the parish office before your first visit. They can explain access, parking, and chapel etiquette.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is Eucharistic Adoration?</h2>
              <p className="text-text leading-relaxed mb-6">
                Eucharistic Adoration is prayer before the Blessed Sacrament, either reserved in the tabernacle or exposed in a monstrance. Catholics adore Jesus because the Eucharist is not a symbol only. It is Christ himself, Body, Blood, Soul, and Divinity.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A "holy hour" usually means spending one hour with Jesus in prayer, recalling his words in Gethsemane: "Could you not watch one hour with me?" But you can also make a shorter visit if that is what your schedule allows.
              </p>

              <QuizCTA
                title="Want a deeper Eucharistic faith?"
                description="Take the Catholic faith assessment and receive a personalized plan for prayer, Mass, and the sacraments."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What to Do During Adoration</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Begin with reverence. Genuflect if the Blessed Sacrament is exposed.</li>
                <li>Spend a few minutes in silence, becoming aware of Christ's presence.</li>
                <li>Read Scripture, pray the Rosary, journal, or speak to Jesus simply.</li>
                <li>Listen. Adoration is not only talking to God, but resting with him.</li>
                <li>Close with thanksgiving and a concrete resolution for the day.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Can Beginners Go to Adoration?</h2>
              <p className="text-text leading-relaxed mb-6">
                Yes. You do not need to be a spiritual expert. You can sit quietly, read the Gospels, pray familiar prayers, or simply say, "Jesus, I am here." If you feel distracted, gently return your attention to the Lord.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Adoration and Confession</h2>
              <p className="text-text leading-relaxed mb-6">
                Many parishes schedule Confession during Adoration because the two go naturally together. In Adoration, we see Christ's love more clearly. In Confession, we receive his mercy sacramentally.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-text italic">The best Adoration chapel is the one you will actually visit. Start nearby, start small, and return often.</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Do I have to stay a full hour at Eucharistic Adoration?", answer: "No. A holy hour is a beautiful practice, but you may visit for 10, 15, or 30 minutes. The important thing is to pray with reverence and love." },
              { question: "Can non-Catholics attend Eucharistic Adoration?", answer: "Yes. Non-Catholics may quietly attend Adoration and pray. They should follow the chapel's reverent atmosphere and may ask a Catholic friend or parish staff member about customs." },
              { question: "What is perpetual adoration?", answer: "Perpetual adoration means the Blessed Sacrament is adored continuously, often 24 hours a day, with scheduled adorers committed to each hour." },
              { question: "What should I bring to Adoration?", answer: "You can bring a Bible, Rosary, prayer book, journal, or nothing at all. Silence and attention are enough." },
            ]} />

            <RelatedArticles currentSlug="eucharistic-adoration-near-me" />

            <ArticleBottomCTA title="Grow Closer to the Eucharist" description="Receive a personalized Catholic growth plan for prayer, Mass, and sacramental life." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
