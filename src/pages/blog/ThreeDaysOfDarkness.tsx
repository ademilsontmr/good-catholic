import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Calendar, Clock, ArrowLeft, Shield, Flame, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ThreeDaysOfDarkness() {
  return (
    <>
      <Helmet>
        <title>The Three Days of Darkness: Catholic Prophecy Explained | Guide Catholic</title>
        <meta name="description" content="What is the Three Days of Darkness? Explore the private revelations of Blessed Anna Maria Taigi and Marie-Julie Jahenny, the conditions, and how to prepare spiritually." />
        <meta name="keywords" content="three days of darkness, catholic prophecy, anna maria taigi prophecy, marie-julie jahenny, blesses candles three days of darkness" />
        <link rel="canonical" href="https://guidecatholic.com/blog/three-days-of-darkness-prophecy/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="The Three Days of Darkness: Catholic Prophecy Explained"
        description="What is the Three Days of Darkness? Explore the private revelations of Blessed Anna Maria Taigi and Marie-Julie Jahenny, the conditions, and how to prepare spiritually."
        url="https://guidecatholic.com/blog/three-days-of-darkness-prophecy/"
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
              <span className="text-text">Three Days of Darkness</span>
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
                  22 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Three Days of Darkness: A Deep Theological and Prophetic Analysis
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Across sensory history, recognized Catholic mystics have spoken of a recurring and chilling event: the "Three Days of Darkness." While not a required dogma, its presence in the warnings of Blessed Anna Maria Taigi and Marie-Julie Jahenny serves as a profound call to spiritual vigilance.
              </p>
            </header>

            <div className="aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-neutral-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In times of global uncertainty, the human heart naturally turns toward the "Last Things." The Three Days of Darkness is classified by the Church as <strong>private revelation</strong>. This means that while it is not part of the "Deposit of Faith" (like the Trinity or the Resurrection), the Church allows the faithful to follow it as a way to grow in holiness and repentance.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Primary Sources: Taigi and Jahenny
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="three-days-of-darkness-prophecy">
                The core of this prophecy rests on the shoulders of two holy women recognized by the Church for their extraordinary virtue.
              </LinkedText>
              
              <h3 className="font-display text-xl font-bold text-text mt-8 mb-4">
                Blessed Anna Maria Taigi (1769–1837)
              </h3>
              <p className="text-text leading-relaxed mb-6">
                A simple housewife and mother in Rome, Anna Maria Taigi was beatified in 1920. For 47 years, she was accompanied by a "mystic sun"—a golden light in which she could see the state of the world and of souls. She described the Three Days as a <strong>purification</strong> of the Earth.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed">
                  "There shall come over the whole earth an intense darkness lasting three days and three nights... All the enemies of the Church, whether known or unknown, will perish over the whole earth during that universal darkness, with the exception of a few whom God will soon after convert."
                </p>
                <p className="text-text-muted text-right mt-2">— Blessed Anna Maria Taigi</p>
              </div>

              <h3 className="font-display text-xl font-bold text-text mt-8 mb-4">
                Marie-Julie Jahenny: The Breton Stigmatist
              </h3>
              <p className="text-text leading-relaxed mb-6">
                Marie-Julie Jahenny (1850–1941) was perhaps the most detailed chronicler of the coming chastisement. She bore the stigmata for most of her life and lived for years on nothing but the Holy Eucharist. She warned that the darkness would be so thick that <strong>"nothing would be visible"</strong> and that the "roaring of the wind" would be unlike anything in natural history.
              </p>
              <p className="text-text leading-relaxed mb-6">
                She spoke of a specific <strong>"Red Cloud"</strong> that would signal the beginning, and a supernatural heat that would accompany the darkness. Her revelations emphasize that the event is intended to end the "reign of sin" on Earth.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Biblical Foundations: From Egypt to the Apocalypse
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="three-days-of-darkness-prophecy">
                The concept of three days of terrifying darkness is not an invention of the 19th century. It is a recurring pattern in Salvation History:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>The Ninth Plague of Egypt:</strong> Exodus 10:21 describes a "darkness that could be felt" for three days. While Egypt was in terror, "all the Israelites had light in their dwellings."</li>
                <li><strong>The Crucifixion:</strong> The Gospels record that from the sixth to the ninth hour, "darkness was over all the land" (Matthew 27:45).</li>
                <li><strong>The Fifth Bowl of Wrath:</strong> In Revelation 16:10, the kingdom of the beast is plunged into darkness, causing men to "gnaw their tongues in agony."</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Mystery of the Blessed Wax Candle
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A unique element in both Taigi and Jahenny's visions is that only <strong>100% pure beeswax candles</strong>, blessed by a priest, will burn during the darkness. 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="three-days-of-darkness-prophecy">
                Theologically, this has deep meaning. In the Church's ancient Liturgy, the beeswax (the fruit of the virgin bee) symbolises the **Precious Flesh** of Christ; the wick symbolises His **Soul**; and the flame His **Divinity**. To have a blessed candle burning is to physically manifest the light of Christ in a world that has turned its back on Him.
              </LinkedText>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Shield className="w-6 h-6 text-amber-600" />
                  Expert Spiritual Preparation Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-text mb-3 flex items-center gap-2">
                       <Flame className="w-4 h-4 text-orange-500" />
                       External & Physical
                    </h4>
                    <ul className="list-disc list-inside text-text text-sm space-y-2">
                      <li><strong>Pure Beeswax Candles:</strong> At least one or two, blessed by a priest.</li>
                      <li><strong>Holy Water & Salt:</strong> Use them to bless the thresholds of your home.</li>
                      <li><strong>Home Protection:</strong> An image of the Sacred Heart or the Immaculate Heart near the entrance.</li>
                      <li><strong>Blessed Oil:</strong> (Optional) Common in many private revelations for healing and protection.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-3 flex items-center gap-2">
                       <Sparkles className="w-4 h-4 text-blue-500" />
                       Internal & Sacramental
                    </h4>
                    <ul className="list-disc list-inside text-text text-sm space-y-2">
                      <li><strong>Monthly Confession:</strong> The ultimate shield is a soul in a state of grace.</li>
                      <li><strong>Mental Prayer:</strong> At least 15 minutes of daily conversation with God.</li>
                      <li><strong>The Holy Rosary:</strong> Your "lifeline" to heaven during times of trial.</li>
                      <li><strong>Consecration:</strong> Total entrustment of your family to Mary (St. Louis de Montfort style).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <QuizCTA
                title="Are you spiritually resilient?"
                description="Take our quiz to analyze your prayer habits and discover areas where you can strengthen your spiritual life for the future."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                A Call to Vigilance, Not Fear
              </h2>
              <p className="text-text leading-relaxed mb-6">
                It is easy to become obsessed with the "survival" aspect of prophecy. However, the mystics teach that the true darkness is <strong>sin</strong>. If we are at peace with God, the three days of darkness should have no terror for us. As St. Paul says, "If God is for us, who can be against us?"
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="three-days-of-darkness-prophecy">
                The Church's official stance, as reflected in the **Catechism (CCC 67)**, reminds us that while these revelations are not required belief, they can be "light in our path" as long as they never distract us from the Gospel and the Sacraments.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Fear is the tool of the enemy. Hope is the virtue of the children of God. Stay in the Light, and the darkness will never overcome you."
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Should I be afraid of this prophecy?",
                answer: "No. The purpose of prophecy in the Church is always the same: conversion of heart. If the prophecy leads you to pray more, go to Confession, and love your neighbor, then it has served its purpose. Fear is never from God."
              },
              {
                question: "Can I use any blessed candle?",
                answer: "According to the visions of Marie-Julie Jahenny, 100% pure beeswax is required. Historically, all candles used in the Catholic Liturgy were required to be beeswax because of the beautiful symbolism of the bee (virginity) and the pure wax (Christ's flesh). Using 'cheap' paraffin is discouraged in this specific tradition."
              },
              {
                question: "What is the 'Illumination of Conscience'?",
                answer: "Many mystics link the Three Days with a prior event called the 'Warning' or 'Illumination of Conscience,' where every person on Earth will see their soul as God sees it. Expansion of this topic can be found in our articles on Divine Mercy."
              }
            ]} />

<RelatedArticles currentSlug="three-days-of-darkness-prophecy" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk with Confidence in Your Faith
              </h3>
              <p className="text-text-muted mb-6">
                Ready to take the next step in your spiritual journey? Take our quiz to find the best devotion for your current needs.
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
