import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, BookOpen, Sword } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function TheCrusadesHistory() {
  return (
    <>
      <Helmet>
        <title>The Crusades: Separating Catholic Fact from Fiction | Guide Catholic</title>
        <meta name="description" content="Were the Crusades unprovoked wars of aggression? Explore the historical context, the defense of pilgrims, and the Catholic perspective on this controversial time." />
        <meta name="keywords" content="the crusades catholic perspective, why did the crusades happen, myths about the crusades, christian defense of pilgrims, historical context crusades" />
        <link rel="canonical" href="https://guidecatholic.com/blog/the-crusades-fact-vs-fiction/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Crusades: Separating Catholic Fact from Fiction"
        description="Were the Crusades unprovoked wars of aggression? Explore the historical context, the defense of pilgrims, and the Catholic perspective on this controversial time."
        url="https://guidecatholic.com/blog/the-crusades-fact-vs-fiction/"
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
              <span className="text-text">The Crusades</span>
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
                  History & Apologetics
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Crusades: Separating Catholic Fact from Fiction
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Mention "The Crusades" today, and most people think of religious fanaticism, gold-hungry knights, and unprovoked aggression. But what does the historical record actually show? While there were certainly grave sins committed by individuals, the Crusades were fundamentally a defensive response to centuries of expansion and the persecution of Christians.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Sword className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                To understand the Crusades, we must look at the world of the 11th century. For over 400 years, Islamic forces had been conquering formerly Christian lands—including Egypt, Palestine, Syria, and Spain. By 1095, the Byzantine Emperor Alexius I sent a plea to the West for help against the Seljuk Turks.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Myth #1: The Crusades were "Unprovoked Aggression"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reality:</strong> The First Crusade was called only after Christians in the East had been slaughtered and the road for pilgrims to the Holy Sepulchre had been closed or made deadly. It was seen by the people of the time as an act of <strong>Charity</strong>—liberating fellow Christians from oppression.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Myth #2: Knights went to "Get Rich"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                <strong>Reality:</strong> Going on a Crusade was astronomically expensive. Knights often had to mortgage their lands and spend several years of their total income just to equip themselves and their men. Most crusaders returned home in poverty, if they returned at all. It was seen as a grueling pilgrimage of penance, not a treasure hunt.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  The Concept of the "Just War"
                </h3>
                <p className="text-text">
                  Catholic theology (rooted in St. Augustine) developed the "Just War" theory. For a war to be just, it must be declared by a legitimate authority, have a just cause (like defense), and be fought with a right intention. The Crusades were framed as a defense of the Holy Land against those who had taken it by force.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Mistakes and Tragedy: The Fourth Crusade
              </h2>
              <p className="text-text leading-relaxed mb-6">
                We must be honest about our history. Not every Crusade was motivated by holiness. The most tragic example is the <strong>Fourth Crusade</strong>, where the army, burdened by debt to Venetian merchants, ended up sacking the Christian city of Constantinople. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                It is important to note that <strong>Pope Innocent III excommunicated</strong> the crusaders for this act. The Church did not authorize the massacre of fellow Christians; it was a betrayal of the original mission by men who had lost their way.
              </p>

              <QuizCTA
                title="How well do you know Church history?"
                description="Take our quiz to challenge your knowledge and discover the truth about the Catholic journey through the centuries."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Does It Matter Today?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Understanding the truth about the Crusades helps us face the "black legends" that are often used to attack the faith. While we apologize for the sins of individual Catholics (as Pope John Paul II did in the year 2000), we also recognize the heroic sacrifice of those who died defending the Holy Places.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "The Crusades were a response to a desperate cry for help... a pilgrimage made at great personal cost to protect what was sacred." — Thomas Madden, Historian
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="the-crusades-fact-vs-fiction" />

            <BlogFAQ faqs={[
              {
                question: "Did the Church force people to convert during the Crusades?",
                answer: "No. The official goal was the 'liberation of the Holy Places,' not the forced conversion of Muslims. In fact, Canon Law at the time explicitly forbade forced conversions. While there were individual instances of forced baptisms by rogue groups, these were condemned by the Church."
              },
              {
                question: "Did the Pope promise 'Instant Salvation' for Crusaders?",
                answer: "This is a common misunderstanding of 'Indulgences.' The Pope offered a Plenary Indulgence, which is the remission of the *temporal punishment* for sins already confessed and forgiven. It was not a 'ticket to heaven' regardless of one's heart, but a spiritual aid for those making a difficult pilgrimage."
              },
              {
                question: "How long did the Crusades last?",
                answer: "The period of the major Crusades to the Holy Land lasted roughly from 1095 (Council of Clermont) to 1291 (Fall of Acre). There were smaller crusades and defensive wars in Europe (like the Reconquista in Spain) for several centuries more."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Defend the Truth of the Faith
              </h3>
              <p className="text-text-muted mb-6">
                Knowing our past is essential for building our future. Take our quiz to learn more.
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
