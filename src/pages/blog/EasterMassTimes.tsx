import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function EasterMassTimes() {
  return (
    <>
      <Helmet>
        <title>Easter Mass Times 2026: How to Find Mass Near You for Easter Sunday | Guide Catholic</title>
        <meta name="description" content="How to find Easter Mass times 2026 near you — Easter Sunday is April 5, 2026. Best tools to find Mass, what to expect at Easter Vigil, and how to prepare for Easter." />
        <meta name="keywords" content="easter mass times 2026, easter mass near me, easter sunday mass 2026, easter vigil 2026, catholic easter mass, when is easter 2026" />
        <link rel="canonical" href="https://guidecatholic.com/blog/easter-mass-times-2026/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Easter Mass Times 2026: How to Find Mass Near You for Easter Sunday"
        description="How to find Easter Mass times 2026 near you — Easter Sunday is April 5, 2026. Best tools to find Mass, what to expect at Easter Vigil, and how to prepare for Easter."
        url="https://guidecatholic.com/blog/easter-mass-times-2026/"
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
              <span className="text-text">Easter Mass Times 2026</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgical Year</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />April 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Easter Mass Times 2026: How to Find Mass Near You for Easter Sunday
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Easter Sunday 2026 is <strong>April 5, 2026</strong> — the most important day in the Catholic calendar. Here is how to find Mass times near you, what to expect at the Easter Vigil, and how to prepare your heart for the Resurrection.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">📅 Holy Week & Easter 2026 Dates</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li><strong>Palm Sunday:</strong> March 29, 2026</li>
                  <li><strong>Holy Monday:</strong> March 30, 2026</li>
                  <li><strong>Holy Tuesday:</strong> March 31, 2026</li>
                  <li><strong>Holy Wednesday (Spy Wednesday):</strong> April 1, 2026</li>
                  <li><strong>Holy Thursday (Mass of the Lord's Supper):</strong> April 2, 2026 — typically 7pm</li>
                  <li><strong>Good Friday (Passion of the Lord):</strong> April 3, 2026 — typically 3pm</li>
                  <li><strong>Holy Saturday (Easter Vigil):</strong> April 4, 2026 — typically 8-9pm</li>
                  <li><strong>Easter Sunday:</strong> April 5, 2026</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Find Easter Mass Times 2026 Near You</h2>
              <p className="text-text leading-relaxed mb-6">
                Easter is the most attended Mass of the year — parishes often fill to capacity. Plan ahead and arrive early.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Best Tools to Find Easter Mass Times</h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>MassTimes.org</strong> — the most comprehensive Catholic Mass finder. Search by zip code or city. Most parishes update their Easter schedule in advance.</li>
                <li><strong>Your parish website</strong> — check directly for the most accurate and up-to-date schedule.</li>
                <li><strong>Call your parish office</strong> — the most reliable method. Ask specifically about Easter Vigil, Easter Sunday Mass times, and whether reservations are needed.</li>
                <li><strong>Google "Easter Mass near me 2026"</strong> — many parishes update their Google Business profiles with Easter schedules.</li>
                <li><strong>The Laudate app</strong> — includes a Mass finder that works internationally.</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Typical Easter Sunday Mass Schedule</h3>
              <p className="text-text leading-relaxed mb-6">
                Most parishes offer multiple Easter Sunday Masses to accommodate the large attendance:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Early morning Mass: 6am or 7am (sometimes an outdoor "Sunrise Mass")</li>
                <li>Morning Masses: 8am, 9am, 10am, 11am</li>
                <li>Noon Mass: 12pm</li>
                <li>Afternoon Mass: Some parishes offer a 5pm or 7pm Easter Sunday Mass</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                <strong>Tip:</strong> Arrive at least 20-30 minutes early for Easter Sunday Mass. Parking fills up quickly, and seating is limited. Many parishes require or recommend reservations for Easter — check with your parish.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Easter Vigil: The Most Sacred Night of the Year</h2>
              <p className="text-text leading-relaxed mb-6">
                The Easter Vigil — celebrated on Holy Saturday night (April 4, 2026) — is the most important liturgy of the entire year. It is the night when the Church celebrates the Resurrection of Christ and welcomes new members through Baptism, Confirmation, and First Communion.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Easter Vigil has four parts:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>The Service of Light:</strong> The church is in darkness. The Easter fire is lit outside, and the Paschal Candle is blessed and carried into the church. The Exsultet — the ancient Easter proclamation — is sung.</li>
                <li><strong>The Liturgy of the Word:</strong> Up to nine readings from the Old and New Testaments trace salvation history from creation to the Resurrection. The Gloria is sung for the first time since Ash Wednesday, and the church bells ring.</li>
                <li><strong>The Liturgy of Baptism:</strong> New Catholics receive Baptism, Confirmation, and First Holy Communion. The entire assembly renews their baptismal promises.</li>
                <li><strong>The Liturgy of the Eucharist:</strong> The Mass continues with the Eucharist — the first Easter Communion.</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                The Easter Vigil typically lasts 2-3 hours. It is one of the most beautiful and moving liturgies in the Catholic tradition. If you have never attended, make it a priority this year.
              </p>

              <QuizCTA
                title="How is your Catholic faith this Easter?"
                description="Take our assessment and receive a personalized guide to celebrating Easter more fully."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Holy Week 2026: What Happens Each Day</h2>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Palm Sunday (March 29)</h3>
              <p className="text-text leading-relaxed mb-6">
                Palm Sunday commemorates Jesus's triumphal entry into Jerusalem. Mass begins with the blessing of palms and a procession. The Passion narrative (the account of Jesus's suffering and death) is read in full — the longest Gospel reading of the year.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Holy Thursday (April 2)</h3>
              <p className="text-text leading-relaxed mb-6">
                The Mass of the Lord's Supper commemorates the Last Supper — the institution of the Eucharist and the priesthood. The priest washes the feet of twelve parishioners, imitating Jesus's washing of the apostles' feet. After Mass, the Blessed Sacrament is transferred to an altar of repose, where the faithful keep watch in prayer until midnight.
              </p>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-3">Good Friday (April 3)</h3>
              <p className="text-text leading-relaxed mb-6">
                Good Friday is the only day of the year when Mass is not celebrated. Instead, the Church holds the Celebration of the Lord's Passion — typically at 3pm, the hour of Christ's death. It includes the reading of the Passion, the Veneration of the Cross (kissing or touching the cross), and the distribution of Communion from the reserved Blessed Sacrament.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Good Friday is a day of fasting and abstinence — the most solemn fast day of the year.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Easter Sunday: The Feast of Feasts</h2>
              <p className="text-text leading-relaxed mb-6">
                Easter Sunday is the greatest feast of the Catholic year — the celebration of the Resurrection of Jesus Christ from the dead. The Catechism calls it "the Feast of feasts, the Solemnity of solemnities" (CCC 1169).
              </p>
              <p className="text-text leading-relaxed mb-6">
                At Easter Mass, the Gloria and Alleluia — silenced since Ash Wednesday — ring out again. The church is filled with flowers, candles, and white vestments. The Sequence (Victimae Paschali Laudes) is sung before the Gospel. The homily proclaims the Resurrection.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Easter is not just one day — it is a season. The Easter Season lasts 50 days, from Easter Sunday to Pentecost (May 24, 2026). Every Sunday of the Easter Season is a "little Easter."
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Preparing Your Heart for Easter</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Go to Confession before Easter.</strong> The Church strongly encourages Catholics to receive the Sacrament of Reconciliation during Lent, so they can receive Easter Communion in a state of grace.</li>
                <li><strong>Attend the Easter Triduum.</strong> Holy Thursday, Good Friday, and the Easter Vigil are the three most important liturgies of the year. Attending all three is the fullest way to celebrate Easter.</li>
                <li><strong>Fast on Good Friday.</strong> Good Friday is a day of fasting and abstinence. Entering Easter through the fast of Good Friday makes the joy of Easter more real.</li>
                <li><strong>Pray the Easter Sequence.</strong> The Victimae Paschali Laudes is the ancient Easter hymn sung at Mass. Praying it at home on Easter morning is a beautiful tradition.</li>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8">
                <p className="text-text italic text-center">
                  "Christ is risen! He is truly risen! Alleluia!"
                </p>
                <p className="text-text-muted text-center mt-2">— The Easter proclamation, echoed in every Catholic church on Easter Sunday</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "When is Easter 2026?", answer: "Easter Sunday 2026 is April 5, 2026. Holy Week begins on Palm Sunday, March 29, 2026. The Easter Triduum begins on Holy Thursday evening (April 2) and concludes on Easter Sunday." },
              { question: "How do I find Easter Mass times near me?", answer: "Use MassTimes.org, check your parish website, call your parish office, or search 'Easter Mass near me 2026' on Google. Most parishes offer multiple Easter Sunday Masses. Arrive early — Easter is the most attended Mass of the year." },
              { question: "What is the Easter Vigil?", answer: "The Easter Vigil is the most important liturgy of the year, celebrated on Holy Saturday night (April 4, 2026). It includes the Service of Light (Easter fire and Paschal Candle), the Liturgy of the Word (up to nine readings), the Liturgy of Baptism (new Catholics receive the sacraments), and the Liturgy of the Eucharist. It typically lasts 2-3 hours." },
              { question: "Is Easter Mass different from regular Sunday Mass?", answer: "Yes. Easter Mass is the most solemn and joyful Mass of the year. The Gloria and Alleluia — silenced since Ash Wednesday — ring out again. The church is filled with flowers and white vestments. The Easter Sequence (Victimae Paschali Laudes) is sung before the Gospel. Many parishes have special music and a longer, more festive celebration." },
              { question: "Do I need to reserve a seat for Easter Mass?", answer: "Many parishes require or recommend reservations for Easter Mass due to the large attendance. Check with your parish well in advance. If you are attending a parish for the first time, call ahead to ask about their policy." },
            ]} />

            <RelatedArticles currentSlug="easter-mass-times-2026" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to celebrating Easter and living your Catholic faith more fully.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
