import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StMichaelChapletPrayer() {
  return (
    <>
      <Helmet>
        <title>St. Michael Chaplet: How to Pray It, Beads and Prayers (Catholic Guide) | Guide Catholic</title>
        <meta name="description" content="Learn how to pray the St. Michael Chaplet step by step — opening prayers, nine salutations, concluding prayers, and when Catholics pray this chaplet for protection." />
        <meta name="keywords" content="st michael chaplet, saint michael chaplet how to pray, st michael chaplet prayers, catholic chaplet st michael, st michael protection prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-michael-chaplet-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="St. Michael Chaplet: How to Pray It, Beads and Prayers (Catholic Guide)"
        description="Learn how to pray the St. Michael Chaplet step by step — opening prayers, nine salutations, concluding prayers, and when Catholics pray this chaplet for protection."
        url="https://guidecatholic.com/blog/st-michael-chaplet-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Michael Chaplet", url: "https://guidecatholic.com/blog/st-michael-chaplet-prayer/" },
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
              <span className="text-text">St. Michael Chaplet</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 13, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                St. Michael Chaplet: How to Pray It, Beads and Prayers (Catholic Guide)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Chaplet of St. Michael honors the nine choirs of angels and asks St. Michael's help against evil. It is a powerful Catholic devotion for spiritual protection.
              </p>
            </header>

            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-slate-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Learn how to pray the St. Michael Chaplet step by step — opening prayers, nine salutations, concluding prayers, and when Catholics pray this chaplet for protection.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What You Need</h2>
              <p className="text-text leading-relaxed mb-6">
                A standard rosary can be used. The chaplet traditionally uses nine groups of nine beads (nine salutations), often separated by an Our Father bead. If your beads differ, you can still pray the nine salutations in order.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Opening (on the crucifix and first beads)</h2>
              <p className="text-text leading-relaxed mb-4">Begin with the Sign of the Cross, then pray:</p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>One Our Father</li>
                <li>Three Hail Marys (honoring St. Michael, St. Gabriel, and St. Raphael)</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Nine Salutations</h2>
              <p className="text-text leading-relaxed mb-4">
                On each Our Father bead (or at the start of each group of nine), pray one Our Father. Then on each of the nine following beads, pray the corresponding salutation for that choir:
              </p>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-4 text-text text-sm leading-relaxed">
                <p><strong>1. Seraphim:</strong> By the intercession of St. Michael and the celestial Choir of Seraphim, may the Lord make us worthy to burn with the fire of perfect charity. Amen.</p>
                <p><strong>2. Cherubim:</strong> By the intercession of St. Michael and the celestial Choir of Cherubim, may the Lord grant us the grace to leave the ways of sin and run in the paths of Christian perfection. Amen.</p>
                <p><strong>3. Thrones:</strong> By the intercession of St. Michael and the celestial Choir of Thrones, may the Lord infuse into our hearts a true and sincere spirit of humility. Amen.</p>
                <p><strong>4. Dominions:</strong> By the intercession of St. Michael and the celestial Choir of Dominions, may the Lord give us grace to govern our senses and overcome our unruly passions. Amen.</p>
                <p><strong>5. Powers:</strong> By the intercession of St. Michael and the celestial Choir of Powers, may the Lord grant us defense against the deceits and corruption of the devil. Amen.</p>
                <p><strong>6. Virtues:</strong> By the intercession of St. Michael and the celestial Choir of Virtues, may the Lord preserve us from evil and from falling into sin. Amen.</p>
                <p><strong>7. Principalities:</strong> By the intercession of St. Michael and the celestial Choir of Principalities, may the Lord grant us grace to resist every conspiracy against holy souls. Amen.</p>
                <p><strong>8. Archangels:</strong> By the intercession of St. Michael and the celestial Choir of Archangels, may the Lord make us faithful in His holy service. Amen.</p>
                <p><strong>9. Angels:</strong> By the intercession of St. Michael and the celestial Choir of Angels, may the Lord grant us to be protected by them in this mortal life and conducted in the next to eternal glory. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-michael-chaplet-prayer">
                This chaplet is distinct from the short Prayer to St. Michael and from the Rosary. It focuses on the hierarchy of angels and asks St. Michael, prince of the heavenly host, to help the Church and each soul in spiritual battle.
              </LinkedText>

              <QuizCTA
                title="Spiritual life check-in"
                description="Take the Catholic life assessment for personalized guidance on prayer and overcoming sin."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Concluding Prayers</h2>
              <p className="text-text leading-relaxed mb-6">
                After the ninth salutation, it is customary to pray one Our Father in honor of each choir (nine Our Fathers), then the concluding prayer to St. Michael (texts vary slightly by booklet). End with the Sign of the Cross.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray the St. Michael Chaplet</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Tuesdays (traditional day for angels and St. Michael).</li>
                <li>In times of temptation, spiritual attack, or anxiety.</li>
                <li>For protection of the Church, priests, and family.</li>
                <li>During September (month of angels) or Michaelmas (Sept. 29).</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the St. Michael Chaplet?", answer: "It is a Catholic chaplet honoring the nine choirs of angels, asking St. Michael's intercession. It uses nine Our Fathers with nine corresponding salutations, plus opening and closing prayers." },
              { question: "Is the St. Michael Chaplet the same as the St. Michael prayer?", answer: "No. The short Prayer to St. Michael ('St. Michael the Archangel, defend us in battle...') is different. The chaplet is a longer structured devotion with nine salutations for the nine choirs of angels." },
              { question: "Can I use a rosary for the St. Michael Chaplet?", answer: "Yes. Many people use a rosary and follow a printed guide to match the Our Fathers and decades to the nine choirs." },
              { question: "When should I pray the St. Michael Chaplet?", answer: "Common times include Tuesdays, the feast of St. Michael (September 29), during September, or whenever you need spiritual protection and strength." },
            ]} />

            <RelatedArticles currentSlug="st-michael-chaplet-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow in courage and prayer</h3>
              <p className="text-text-muted mb-6">Receive a personalized Catholic growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
