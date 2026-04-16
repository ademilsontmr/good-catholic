import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, Sun, UserCheck, Sparkles } from "lucide-react";
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
        <meta name="keywords" content="guardian angels catholic, nine choirs of angels, hierarchy of angels, guardian angel prayer, angel protector catholic, spiritual warfare angels, Padre Pio angels" />
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
                  24 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Guardian Angels: An Expert Analysis of Your Divine Companions
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                "Angel of God, my guardian dear..." Most of us learned this prayer as children. But as we mature in faith, the reality of the angelic world becomes not a childhood comfort, but a profound theological certainty. This is the manual for understanding the high intelligence, the diverse hierarchies, and the active protection of the spirits God has placed by your side.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <UserCheck className="w-24 h-24 text-sky-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The term "Angel" refers to their office, not their nature. By nature, they are <strong>Pure Spirits</strong>; by office, they are messengers (<em>Angelus</em>). They are the "celestial court" that mediates between the Infinite God and finite humanity.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Assigned Protector: Conception to Judgment
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church (CCC 336) provides the anchor for this devotion: <strong>"From its beginning until death, human life is surrounded by their watchful care."</strong> 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Catholic theologians, such as St. Thomas Aquinas, clarify that this guardianship begins at the moment of <strong>conception</strong>. Your angel has been with you through every heartbeat, every joy, and every secret suffering. They have three specific "offices" or roles in your life:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Enlightening:</strong> Suggesting holy thoughts and clarifying the truth to your intellect.</li>
                <li><strong>Protecting:</strong> Shielding you from physical harm and spiritual attacks (wickedness and snares of the devil).</li>
                <li><strong>Conducting:</strong> Leading you toward the right path and, ultimately, to the presence of God.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The 9 Choirs: The Celestial Hierarchy
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Based on Scripture and the writings of Dionysius, the Church recognizes nine "choirs" or gradients of angelic light:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-10">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Top Tier (Adoring God)</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Seraphim:</strong> Burning with love; they are the closest to the Throne of God.</li>
                    <li><strong>Cherubim:</strong> Full of knowledge; they contemplate God's providence.</li>
                    <li><strong>Thrones:</strong> Representing God's judicial power and stability.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Middle Tier (Governing the World)</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Dominations:</strong> Direct the duties of low-ranking angels.</li>
                    <li><strong>Virtues:</strong> The "angels of miracles"; they manage the physical laws of nature.</li>
                    <li><strong>Powers:</strong> The "spiritual police"; they restrict the power of demons.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h4 className="font-bold text-slate-800 mb-4 border-b pb-2">Bottom Tier (Serving Humanity)</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Principalities:</strong> Watch over nations, provinces, and the Church.</li>
                    <li><strong>Archangels:</strong> Deliver messages of high importance (e.g., Gabriel at the Annunciation).</li>
                    <li><strong>Angels:</strong> The most numerous; this is the choir from which our Guardian Angels are usually drawn.</li>
                  </ul>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Prohibition: Why We Don't Name Our Angels
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church explicitly forbids the practice of "naming" one's guardian angel. The **Directory on Popular Piety and the Liturgy (2001, n. 217)** states: *"The practice of assigning names to the Holy Angels should be discouraged, except in the cases of Gabriel, Raphael, and Michael whose names are contained in Holy Scripture."*
              </p>
              <p className="text-text leading-relaxed mb-6">
                Theologically, to name something is to exercise <strong>authority</strong> or ownership over it. We do not own our angels; they are God's ministers who exercise a benevolent authority over us. By refraining from naming them, we maintain a humble and respectful relationship with our superior spirit.
              </p>

              <QuizCTA
                title="How well do you know your protectors?"
                description="Take our quiz to identify the roles of the 9 choirs and see how you can cooperate more effectively with your Guardian Angel."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Padre Pio and the "Angel Express"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Few saints had a relationship with angels like <strong>Saint Padre Pio</strong>. He used to tell his spiritual children who lived far away: *"If you are in trouble and cannot come to me, send me your Guardian Angel."* He reported that his own angel would "translate" letters written in languages he didn't know and would often wake him up to pray for specific people in desperate need.
              </p>

              <div className="bg-sky-50 border border-sky-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-4 text-center">Summary of Angelic Laws</h3>
                <ul className="list-disc list-inside text-text text-sm space-y-2">
                  <li><strong>Angels are not ghosts:</strong> They never lived as humans. They were created directly by God.</li>
                  <li><strong>Perfect Memory:</strong> An angel never forgets a single detail of your life.</li>
                  <li><strong>Instant Communication:</strong> Angels communicate with each other "through the will," meaning the transfer of information is instantaneous across all distances.</li>
                </ul>
              </div>
            </div>

            <RelatedArticles currentSlug="guardian-angels-guide" />

            <BlogFAQ faqs={[
              {
                question: "Do our angels leave us when we sin?",
                answer: "No. While they are saddened by our sins, they never abandon their post. However, when we are in a state of mortal sin, we are 'deaf' to their promptings, making it much harder for them to protect and guide us."
              },
              {
                question: "Can an angel take physical control of my body?",
                answer: "No. Unlike demons (who can attempt possession), holy angels respect human dignity and free will. They will never 'override' your motor functions, though they can physically push or move you to save you from an immediate danger (like a car accident)."
              },
              {
                question: "Do nations have guardian angels?",
                answer: "Catholic tradition and the visions of Fatima suggest that countries and territories have 'Principalities' assigned to them. At Fatima, the 'Angel of Portugal' (or Angel of Peace) appeared to the children before the Virgin Mary did."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk in Good Company
              </h3>
              <p className="text-text-muted mb-6">
                The invisible world is more real than the one we see. Take our quiz to deepen your Catholic worldview.
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
