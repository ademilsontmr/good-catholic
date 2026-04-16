import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Moon, Calendar, Clock, ArrowLeft, Shield, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

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
                  16 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Three Days of Darkness: Fact or Fiction?
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Across various private revelations from recognized Catholic mystics, a recurring and chilling prophecy appears: the "Three Days of Darkness." While it is not a dogma of the Church, its presence in the writings of holy souls has intrigued and frightened Catholics for nearly two centuries. What is it, and what should we believe?
              </p>
            </header>

            <div className="aspect-video bg-neutral-900 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-neutral-500" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In times of global crisis, many Catholics look toward the "Last Things." Among the most discussed "minor" prophecies is the Three Days of Darkness. The Church classifies this as <strong>private revelation</strong>, meaning Catholics are free to believe it if it helps their faith, but they are not required to do so.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Origin: Anna Maria Taigi and Marie-Julie Jahenny
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most well-known description of this prophecy comes from <strong>Blessed Anna Maria Taigi</strong> (1769–1837), a housewife and mother in Rome who was beatified in 1920. She was known for her "sun-globe" visions through which she saw the state of souls and future events.
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed">
                  "There shall come over the whole earth an intense darkness lasting three days and three nights. Nothing can be seen, and the air will be laden with pestilence... All the enemies of the Church, whether known or unknown, will perish over the whole earth during that universal darkness..."
                </p>
                <p className="text-text-muted text-right mt-2">— Blessed Anna Maria Taigi</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                Later, <strong>Marie-Julie Jahenny</strong> (1850–1941), a French mystic known as the "Breton Stigmatist," expanded on these details, describing the darkness as being supernatural in origin and so thick that even mechanical lighting would fail.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What the Prophecy Describes
              </h2>
              <p className="text-text leading-relaxed mb-6">
                According to these mystics, the Three Days will be characterized by:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Absolute Darkness:</strong> A darkness so profound it cannot be illuminated by electricity or standard lamps.</li>
                <li><strong>Supernatural Origin:</strong> It is described not as an eclipse or a volcanic cloud, but as a direct spiritual event.</li>
                <li><strong>The "Blessed Wax Candle":</strong> Only candles made of 100% pure beeswax and blessed by a priest are said to give light during this time.</li>
                <li><strong>Prayer and Penance:</strong> The faithful are instructed to remain inside, close their windows, pray the Rosary, and not look out.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Biblical Context
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While the specific details come from private revelation, the concept of a "Day of Darkness" has biblical roots. In Exodus 10:21, a "darkness that can be felt" covered Egypt for three days. In the New Testament, Jesus prophesied that "the sun will be darkened, and the moon will not give its light" before His return (Matthew 24:29).
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-4 text-center flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  How to Prepare Spiritually
                </h3>
                <p className="text-text mb-4">
                  The mystics who spoke of these days emphasized that <strong>spiritual preparation</strong> is more important than physical survival.
                </p>
                <ul className="list-decimal list-inside text-text space-y-2">
                  <li><strong>Stay in a State of Grace:</strong> Frequent Confession is the primary preparation.</li>
                  <li><strong>Cultivate Devotion to Mary:</strong> The Rosary is described as the weapon for these times.</li>
                  <li><strong>Practice Charity:</strong> Darkness in the soul is more dangerous than darkness in the world.</li>
                  <li><strong>Trust in God's Mercy:</strong> Fear is not from God. The prophecy is meant to call us to repentance, not to anxiety.</li>
                </ul>
              </div>

              <QuizCTA
                title="Are you prepared for the Last Things?"
                description="Take our quiz to reflect on your faith and discover the depth of Catholic teaching on the end of time."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Does the Church Say?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church remains cautious. While Anna Maria Taigi is a <em>Blessed</em> (meaning the Church has declared she was of heroic virtue and is in heaven), this does not mean every one of her private visions is considered "official" or "infallible."
              </p>
              <p className="text-text leading-relaxed mb-6">
                <strong>Important note:</strong> Beware of "scaremongering" or people selling "survival kits" based on these prophecies. The Church's path to peace is always through the Sacraments and the Word of God, not through sensationalism.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "Look at the future with hope, not with fear. If you live in God's love, the light of the soul will never go out."
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="three-days-of-darkness-prophecy" />

            <BlogFAQ faqs={[
              {
                question: "Is the Three Days of Darkness an official Church dogma?",
                answer: "No. It is a matter of 'private revelation.' This means that while some mystics believed to be holy by the Church have spoken of it, it is not something every Catholic is strictly required to believe in as an article of faith."
              },
              {
                question: "Why do they say only beeswax candles work?",
                answer: "In the visions of Marie-Julie Jahenny, it was specified that only 100% pure wax candles, blessed by a priest, would give light. Symbolically, pure wax represents the pure flesh of Christ, and the light represents His divinity. Whether this is literal or symbolic is a matter of interpretation."
              },
              {
                question: "Has any Pope spoken about this?",
                answer: "No Pope has officially endorsed the Three Days of Darkness as an upcoming historical event. However, Pope John Paul II and Pope Benedict XVI have spoken extensively about the need for spiritual vigilance and the triumph of the Immaculate Heart."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk with Confidence in Your Faith
              </h3>
              <p className="text-text-muted mb-6">
                Faith is about love, not fear. Take our quiz to learn more about how to live a holy lives in the modern world.
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
