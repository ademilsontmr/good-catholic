import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, BookOpen, Sword, Landmark, Sparkles } from "lucide-react";
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
        <meta name="keywords" content="the crusades catholic perspective, why did the crusades happen, myths about the crusades, christian defense of pilgrims, historical context crusades, pope urban II clermont" />
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
                  25 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Crusades: An Expert Historical and Theological Defense
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Mention "The Crusades" today, and you are likely to hear a narrative of unprovoked aggression, religious fanaticism, and gold-hungry knights. This is the "Black Legend" of the Crusades. Modern historians, however, have begun to restore the true context: the Crusades were a desperate, defensive response to 400 years of conquest and the systematic persecution of Christian pilgrims.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10">
              <Landmark className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                History is not a simple game of "good guys vs. bad guys." To understand the Crusades, one must step out of the 21st century and into the 11th. At that time, the Christian world was under siege. From Spain to Jerusalem, formerly Christian lands had been conquered, and the Byzantine Empire was on the verge of collapse.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Context: A World Under Siege
              </h2>
              <p className="text-text leading-relaxed mb-6">
                For over four centuries, the Christian East—Asia Minor, Egypt, Palestine, and North Africa—had been systematically absorbed. Pilgrims to the Holy Sepulchre were being taxed, harassed, and in many cases, slaughtered. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                In 1095, the <strong>Council of Clermont</strong> was called after the Byzantine Emperor Alexius I sent a plea to <strong>Pope Urban II</strong>. The message was clear: if the West did not act, the Christian East would be completely extinguished.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                  Myth-Busting the Financial Narrative
                </h3>
                <p className="text-text mb-4">
                  Did knights go on Crusade to "get rich"? The data says the opposite.
                </p>
                <ul className="list-disc list-inside text-text space-y-3">
                  <li><strong>Astronomical Costs:</strong> Equipping a single knight, his squires, and his horses for a two-year journey cost roughly <strong>five times his annual income</strong>.</li>
                  <li><strong>Land Loss:</strong> Many knights had to mortgage or sell their ancestral lands to fund the trip. They were not "expanding" their wealth; they were sacrificing it.</li>
                  <li><strong>Survival Rates:</strong> Death from disease, starvation, and battle was common. Most crusaders returned home in poverty, if they returned at all.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The "Just War" Theory in Action
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Crusades were framed within the **Just War** criteria established by St. Augustine and later refined by St. Thomas Aquinas. For a war to be just, it required:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>Just Cause:</strong> Recovery of stolen lands and protection of the innocent (pilgrims).</li>
                <li><strong>Right Authority:</strong> Declared by the Pope as the head of Christendom.</li>
                <li><strong>Right Intention:</strong> The restoration of peace and the freedom of religion for Christians.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Truth About the Sacks and Massacres
              </h2>
              <p className="text-text leading-relaxed mb-6">
                It is a historical fact that when Jerusalem was taken in 1099, a massacre occurred. This was a tragedy and a sin, condemned by the Church then and now. However, it was also the standard, brutal military custom of the day across all cultures (both East and West).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The **Fourth Crusade** is the most misunderstood. The army ended up sacking the Christian city of Constantinople, not by order of the Pope, but in direct <strong>disobedience</strong> to him. Pope Innocent III excommunicated the crusaders for this act. Critics often blame "The Church" for the Fourth Crusade, when in reality, the Church was its most vocal opponent.
              </p>

              <QuizCTA
                title="Can you defend the Church's history?"
                description="Take our quiz to identify the common myths about the Crusades and learn how to explain the true historical context to skeptics."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Cultural and Scientific Exchange
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Crusades were not just about war. They reopened the gates of the East, allowing the West to rediscover Greek philosophy, advanced mathematics, and medical techniques that had been preserved in Byzantium and the Islamic world. This "Great Exchange" helped spark the cultural renewal of the late Middle Ages and the Renaissance.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Crusades were an act of love—love for the neighbor who was being oppressed, and love for God whose holy places were being desecrated."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="the-crusades-fact-vs-fiction" />

            <BlogFAQ faqs={[
              {
                question: "Did the Crusaders force Muslims to become Catholic?",
                answer: "No. The goal was political and defensive: to liberate territory. Forced baptism was strictly forbidden by Canon Law. While there were individual instances of forced conversions, these were recognized as grave sins and violations of Church order."
              },
              {
                question: "What was the 'People's Crusade'?",
                answer: "The People's Crusade was an unauthorized mob of peasants and low-level knights who set off before the official crusading armies. They were responsible for many of the worst atrocities, including pogroms against Jews. The Church and the noble crusaders largely condemned them."
              },
              {
                question: "Did the Church ever apologize for the Crusades?",
                answer: "In the Jubilee Year 2000, St. John Paul II asked for forgiveness for the 'errors' and 'sins' committed by members of the Church during the Crusades. He apologized for the *conduct* of individuals, while the Church maintains that the original intent—defending pilgrims and the East—was a work of charity."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Be an Informed Catholic
              </h3>
              <p className="text-text-muted mb-6">
                A shallow knowledge of history is the root of many attacks on the Church. Take our quiz to deepen your understanding.
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
