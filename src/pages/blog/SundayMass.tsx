import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cross, Calendar, Clock, ArrowLeft, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";

export default function SundayMass() {
  return (
    <>
      <Helmet>
        <title>Sunday Mass: The Center of Christian Life | Guide Catholic</title>
        <meta name="description" content="Discover why participation in Sunday Mass is essential for every Catholic. Learn how to make the most of Holy Mass and grow in faith." />
        <meta name="keywords" content="sunday mass obligatory, why go to mass, catholic holy mass, sunday precept, not going to mass is sin, sunday eucharist" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sunday-mass/" />
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
            <Link to="/quiz">
              <Button variant="secondary" size="sm">
                Take the Quiz
              </Button>
            </Link>
          </div>
        </header>

        <div className="bg-background-muted/50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Sunday Mass</span>
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
                  Liturgy
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  November 15, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  9 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Sunday Mass: The Center of Christian Life
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Holy Mass is the most precious treasure of the Catholic Church, where Christ's sacrifice
                becomes present and we are nourished by the Bread of Life.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                Sunday Mass is the beating heart of Catholic life, the most important meeting of the week, the moment when Heaven touches earth. Since the early times of the Church, Christians gathered on the "Lord's Day" – Sunday, the day of the Resurrection – to celebrate the Eucharist, even at risk of persecution and death. The martyrs of Abitina, in the 4th century, declared before the Roman tribunal: "Without Sunday we cannot live."
              </p>
              <p className="text-text leading-relaxed mb-6">
                This apostolic tradition remains as a commandment of the Church: every Catholic must participate in Mass on Sundays and holy days of obligation, unless legitimately prevented. But Mass is infinitely more than an obligation – it is an invaluable privilege, an inexhaustible source of graces, the greatest treasure we possess on this earth. If we truly knew the value of a single Mass, we would die of joy, as Saint Padre Pio said.
              </p>

              <QuizCTA
                title="Is Mass the center of your week?"
                description="Participating in the Eucharist is the greatest privilege of a Catholic. Take our quiz and discover how to live Holy Mass more deeply, receiving all the graces of the altar."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Happens at Holy Mass?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Mass is not a simple remembrance of the Last Supper or a theatrical representation of Calvary. It is the unbloody renewal of Christ's one Sacrifice on the Cross. The same Christ who offered Himself once and for all on Calvary continues offering Himself to the Father through the hands of the priest. The sacrifice is the same, the victim is the same, the principal priest is the same (Christ); only the manner of offering is different: on Calvary it was bloody (with shedding of blood), at Mass it is unbloody (without shedding of blood).
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Structure of Holy Mass
              </h2>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Introductory Rites
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Mass begins with the entrance procession, greeting, penitential act, Gloria (on Sundays and feasts), and collect prayer. These rites prepare our soul for the encounter with God, helping us leave behind worldly concerns and enter the sacred mystery.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Liturgy of the Word
              </h3>
              <p className="text-text leading-relaxed mb-6">
                In the Liturgy of the Word, God speaks to us through Sacred Scripture. We hear readings from the Old and New Testaments, sing the Responsorial Psalm, and the Gospel is solemnly proclaimed. The priest's homily applies God's Word to our life. This part culminates with the Profession of Faith (Creed) and the Prayer of the Faithful.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Liturgy of the Eucharist
              </h3>
              <p className="text-text leading-relaxed mb-6">
                The heart of Mass is the Liturgy of the Eucharist. It begins with the presentation of the gifts (bread and wine), followed by the Eucharistic Prayer, when the consecration happens. At the moment the priest pronounces Christ's words – "This is my Body... This is my Blood" – the bread and wine truly become Christ. Then we pray the Our Father, exchange the sign of peace, and receive Holy Communion.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Is Sunday Mass Obligatory?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The third commandment orders: "Keep holy the Lord's Day." The Church determines that Catholics fulfill this commandment by participating in Mass on Sundays and holy days of obligation. This obligation is not an arbitrary burden, but an expression of the minimum we owe God for all He gives us. If someone truly loves God, they do not consider Mass an obligation, but a privilege.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Fruits of Participation in Mass
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>Intimate union with Christ through Communion</li>
                <li>Forgiveness of venial sins</li>
                <li>Preservation against mortal sins</li>
                <li>Increase of sanctifying grace</li>
                <li>Participation in Christ's merits</li>
                <li>Communion with the universal Church</li>
                <li>Suffrage for the souls in Purgatory</li>
                <li>Temporal and spiritual blessings</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center">
                  "If we knew the value of Holy Mass, we would die of joy."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Saint Padre Pio of Pietrelcina
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center">
                  "Mass is the most sacred thing that exists. In it, God gives us everything He has: His own Son."
                </p>
                <p className="text-text-muted text-center mt-2">
                  — Saint John Vianney
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="sunday-mass" />

            <BlogFAQ faqs={[
              {
                question: "Is missing Sunday Mass a mortal sin?",
                answer: "Yes, deliberately missing Sunday Mass without a serious reason (illness, caring for a sick person, no access to a church) is considered a mortal sin in Catholic teaching. The Third Commandment obliges us to keep holy the Lord's Day."
              },
              {
                question: "What counts as fulfilling the Sunday Mass obligation?",
                answer: "You fulfill the obligation by attending any valid Catholic Mass on Sunday or on Saturday evening (the vigil Mass). The Mass must be celebrated by a validly ordained priest. Watching Mass on TV does not fulfill the obligation unless you are homebound."
              },
              {
                question: "Can I receive Communion at every Mass?",
                answer: "You may receive Communion up to twice per day, provided you are in a state of grace, have observed the one-hour Eucharistic fast, and are a baptized Catholic. You must not be under any canonical penalty such as excommunication."
              },
              {
                question: "Why do Catholics go to Mass every Sunday?",
                answer: "Sunday Mass is the center of Catholic life because it re-presents Christ's sacrifice on Calvary, nourishes us with His Body and Blood, unites us as the Body of Christ, and fulfills our duty of worship to God. It is the highest form of prayer."
              },
              {
                question: "What should I do if I cannot attend Mass on Sunday?",
                answer: "If you have a serious reason (illness, travel with no church nearby, caring for someone), you are dispensed from the obligation. You should still pray, read Scripture, and observe Sunday as a day of rest and family. Seek a dispensation from your pastor if needed."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is Going
              </h3>
              <p className="text-text-muted mb-6">
                Take our free quiz and receive a personalized diagnosis of your Catholic journey.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
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
