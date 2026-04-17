import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Calendar, Clock, ArrowLeft, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function PropheciesOfFatima() {
  return (
    <>
      <Helmet>
        <title>Prophecies of Fatima: The Three Secrets and Their Fulfillment | Guide Catholic</title>
        <meta name="description" content="Discover the three secrets of Fatima, their prophetic messages, and how they relate to Catholic prophecy, Russia, and the conversion of nations." />
        <meta name="keywords" content="Fatima prophecies, three secrets of Fatima, Catholic prophecy, Our Lady of Fatima, end times prophecy" />
        <link rel="canonical" href="https://guidecatholic.com/blog/prophecies-of-fatima/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="Prophecies of Fatima: The Three Secrets and Their Fulfillment"
          description="Discover the three secrets of Fatima, their prophetic messages, and how they relate to Catholic prophecy, Russia, and the conversion of nations."
          url="https://guidecatholic.com/blog/prophecies-of-fatima/"
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
              <span className="text-text">Prophecies of Fatima</span>
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
                  Prophecy & Mysticism
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  16 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Prophecies of Fatima: The Three Secrets and Their Fulfillment
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                When Our Lady appeared to Lucia, Francisco, and Jacinta between May and October 1917, Europe was engulfed in the Great War. The children were simple shepherds from a poor peasant family, yet they were chosen to receive one of the most significant prophetic messages of the 20th century.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
              <Moon className="w-24 h-24 text-indigo-400/20 absolute top-4 right-4" />
              <Moon className="w-32 h-32 text-indigo-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                When Our Lady appeared to Lucia, Francisco, and Jacinta between May and October 1917, Europe was engulfed in the Great War. The children were simple shepherds from a poor peasant family, yet they were chosen to receive one of the most significant prophetic messages of the 20th century.
              </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Three Secrets Revealed
            </h2>
            <p className="text-text leading-relaxed mb-6">
              On July 13, 1917, Our Lady revealed three secrets to the children. Lucia, the only surviving seer after Francisco and Jacinta died in the 1919 flu pandemic, wrote down the secrets in 1941 at the request of her bishop.
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The First Secret: A Vision of Hell
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The children saw a terrifying vision of hell—a sea of fire with demons and souls in human form, shrieking in agony. This vision was so horrifying that the children dedicated their lives to prayer and penance to save sinners from this fate.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Jacinta, the youngest seer, became particularly devoted to praying for sinners. Before her death at age 9, she told Lucia: "I am going to heaven, but you must stay here to make known what God wishes."
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Second Secret: The Devotion to the Immaculate Heart
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The second secret included a prophecy of World War II and a call for the consecration of Russia to the Immaculate Heart of Mary. Our Lady warned that if her requests were not heeded, Russia would spread her errors throughout the world, causing wars and persecutions.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The promise attached to this secret: "In the end, my Immaculate Heart will triumph. The Holy Father will consecrate Russia to me, and she will be converted, and a period of peace will be granted to the world."
            </p>

            <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
              The Third Secret: The Bishop in White
            </h3>
            <p className="text-text leading-relaxed mb-6">
              The third secret, revealed by the Vatican in 2000, described an angel with a flaming sword calling for penance, followed by a vision of a "bishop in white" climbing a steep mountain toward a cross, surrounded by soldiers and martyrs.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The official interpretation, confirmed by Pope John Paul II, identified this as the assassination attempt on May 13, 1981—the feast of Our Lady of Fatima. The Pope credited Our Lady of Fatima for saving his life and placed the bullet that wounded him in her crown at the Fatima shrine.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Consecration of Russia
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The request for the consecration of Russia became one of the most debated aspects of Fatima. Pope Pius XII consecrated the world in 1942 and Russia specifically in 1952. Pope John Paul II consecrated the world again in 1982 and 1984. Pope Francis consecrated Russia and Ukraine in 2022 during the Russian invasion.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Whether these consecrations fully satisfied Our Lady's request remains debated among Fatima scholars. The promised "conversion of Russia" and "period of peace" have not yet fully materialized.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Miracle of the Sun
            </h2>
            <p className="text-text leading-relaxed mb-6">
              On October 13, 1917, the final apparition, approximately 70,000 people witnessed the "Miracle of the Sun." Witnesses described the sun dancing, spinning, and seeming to fall toward the earth. The phenomenon lasted about ten minutes and was reported by believers and skeptics alike.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              The Message for Today
            </h2>
            <p className="text-text leading-relaxed mb-6">
              The core message of Fatima transcends the specific secrets: prayer (especially the Rosary), penance, devotion to the Immaculate Heart, and amendment of life. These practices are as urgently needed today as in 1917.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Sister Lucia, who became a Carmelite nun and died in 2005, emphasized that Fatima's message is not primarily about prophecy but about salvation—calling sinners to repentance and helping them avoid hell.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Fatima and the End Times
            </h2>
            <p className="text-text leading-relaxed mb-6">
              While Fatima addresses prophetic elements, it should not be reduced to "end times speculation." The Church has consistently warned against private interpretations of Fatima prophecies. The message is ultimately one of hope—the triumph of Mary's Immaculate Heart and the eventual conversion of the world.
            </p>

            <QuizCTA />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
              Frequently Asked Questions
            </h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-10">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Behold, I am the handmaid of the Lord." - Luke 1:38
                </p>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "My Immaculate Heart will triumph." - Our Lady of Fatima
                </p>
              </div>
              
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mt-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Pray the Rosary every day." - Our Lady of Fatima
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="prophecies-of-fatima" />

            <BlogFAQ faqs={[
              {
                question: "Are the Fatima secrets fully revealed?",
                answer: "The Vatican published the text of the three secrets in 2000, along with an official commentary. However, some Fatima devotees believe elements remain unfulfilled or that additional private revelations were given to Sister Lucia. The Church has approved the public revelations but urges caution regarding private interpretations."
              },
              {
                question: "Did the consecration of Russia happen as requested?",
                answer: "Multiple popes have consecrated Russia, most recently Pope Francis in 2022. Whether these satisfy Our Lady's specific request (that all bishops participate together) remains debated. The promised 'conversion of Russia' has not yet occurred, suggesting the fulfillment may still be in the future."
              },
              {
                question: "Can I visit Fatima today?",
                answer: "Yes. Fatima in Portugal is one of the most visited Marian shrines in the world. The Basilica of Our Lady of the Rosary houses the tombs of the three seers. Pilgrims can participate in daily Mass, the Rosary, and candlelight processions. The shrine remains a powerful place of prayer and conversion."
              },
              {
                question: "What is the First Saturday devotion?",
                answer: "Our Lady requested reparation for sins through the First Saturday devotion: receiving Communion, praying the Rosary, meditating on the mysteries, and spending 15 minutes with Mary on the first Saturday of five consecutive months. This devotion is closely connected to the Fatima message."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Begin Your Journey of Faith
              </h3>
              <p className="text-text-muted mb-6">
                Take our assessment and receive a personalized spiritual growth plan.
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
