import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Sun, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function GuardianAngelsComplete() {
  return (
    <>
      <Helmet>
        <title>Guardian Angels: Your Divine Protectors and the 9 Choirs | Guide Catholic</title>
        <meta name="description" content="Do you have a Guardian Angel? Discover the Catholic teaching on angels, the nine celestial choirs, and how to build a relationship with your divine protector." />
        <meta name="keywords" content="guardian angels catholic, nine choirs of angels, hierarchy of angels, guardian angel prayer, angel protector catholic, spiritual warfare angels" />
        <link rel="canonical" href="https://guidecatholic.com/blog/guardian-angels-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Guardian Angels: Everything You Need to Know About Your Divine Protector"
        description="Do you have a Guardian Angel? Discover the Catholic teaching on angels, the nine celestial choirs, and how to build a relationship with your divine protector."
        url="https://guidecatholic.com/blog/guardian-angels-guide/"
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
              <span className="text-text">Guardian Angels</span>
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
                  Spiritual Life
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Guardian Angels: Everything You Need to Know About Your Divine Protector
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Angel of God, my guardian dear..." Most of us learned this prayer as children. But as we grow older, we often forget the profound reality that every single human being has a pure spiritual being assigned by God to protect, guide, and pray for them. This is not a fairy tale; it is a Catholic certainty.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <UserCheck className="w-24 h-24 text-sky-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The word "Angel" literally means <strong>messenger</strong>. In the Catholic tradition, angels are not "dead people with wings"; they are pure spirits, created before man, who possess intelligence and will far superior to our own.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Guardian Angel: A Gift for Every Soul
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church (CCC 336) states: <strong>"From its beginning until death, human life is surrounded by [the angels'] watchful care and intercession."</strong>
              </p>
              <p className="text-text leading-relaxed mb-6">
                Unlike popular belief, your Guardian Angel is assigned at the moment of your <strong>conception</strong>. They are with you every second of your life, witnessing every choice, and they will accompany you to your judgment before God. Their primary goal is to help you get to heaven.
              </p>

              <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-600" />
                  What Your Guardian Angel Can (and Cannot) Do:
                </h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>They can prompt your mind:</strong> They can suggest good thoughts or warn you of spiritual danger.</li>
                  <li><strong>They can protect your body:</strong> There are countless stories of angels physically intervening to prevent accidents.</li>
                  <li><strong>They cannot read your mind:</strong> Only God knows your secret thoughts. However, angels are so intelligent they can guess your thoughts with near-perfect accuracy based on your actions.</li>
                  <li><strong>They cannot violate your free will:</strong> They can nudge, but they will never force you to do good.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Hierarchy: The Nine Choirs of Angels
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Catholic tradition, following the writings of Dionysius the Areopagite, recognizes nine "choirs" or levels of angels, each with a specific role in God's plan:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                  <p className="font-bold mb-1">First Hierarchy</p>
                  <p>Seraphim, Cherubim, and Thrones (Focused on worshipping God directly).</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                  <p className="font-bold mb-1">Second Hierarchy</p>
                  <p>Dominions, Virtues, and Powers (Govern the universe and laws of nature).</p>
                </div>
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 text-sm">
                  <p className="font-bold mb-1">Third Hierarchy</p>
                  <p>Principalities, Archangels, and Angels (Interact directly with humanity).</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Error of "Naming" Your Angel
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A common modern practice is for people to "discover" or name their Guardian Angel. The <strong>Directory on Popular Piety and the Liturgy (2001)</strong> explicitly forbids this. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Why? In the Bible, to name someone is to have authority over them. We do not have authority over our angels; they have authority (from God) to guide us. Only three angels are named in Scripture: Michael, Gabriel, and Raphael.
              </p>

              <QuizCTA
                title="Do you talk to your Guardian Angel?"
                description="Take our quiz to reflect on your spiritual life and learn how to build a stronger relationship with your divine protector."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Build a Relationship with Your Angel
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Your angel is your best friend. Here is how to engage with them:
              </p>
              <ul className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>Greet them in the morning:</strong> Ask for their protection for the day ahead.</li>
                <li><strong>Ask for help in temptations:</strong> When you feel tempted to sin, immediately ask your angel to "defend me in battle."</li>
                <li><strong>Send them on "missions":</strong> St. Padre Pio used to tell people to send their angels to him if they couldn't travel to see him. You can ask your angel to comfort a suffering friend or to prepare the way for a difficult meeting.</li>
                <li><strong>Thank them:</strong> Remember to thank God for the gift of such a powerful companion.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Beside each believer stands an angel as protector and shepherd leading him to life." — St. Basil the Great
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="guardian-angels-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do our Guardian Angels stay with us in Purgatory?",
                answer: "Yes. Theologians suggest that our angels accompany us and comfort us in Purgatory, though they no longer need to 'guard' us from sin, as a soul in Purgatory can no longer sin. They rejoice with us when we are finally admitted to the Beatific Vision."
              },
              {
                question: "Can an angel take human form?",
                answer: "Yes. In the Bible and in the lives of the saints, angels have often taken temporary human form to deliver a message or provide physical assistance (see the Book of Tobit). However, they remain spirits; the 'body' is an appearance they use for our benefit."
              },
              {
                question: "Does everyone have a guardian angel, even non-Catholics?",
                answer: "Yes. Most theologians, following the teaching of St. Thomas Aquinas, believe that every human person—regardless of faith—is assigned a guardian angel from the moment of their birth (or conception)."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                You Are Never Truly Alone
              </h3>
              <p className="text-text-muted mb-6">
                Discover the richness of the invisible world and strengthen your faith. Take our quiz to start your journey.
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
