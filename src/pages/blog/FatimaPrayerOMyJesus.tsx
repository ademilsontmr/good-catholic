import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function FatimaPrayerOMyJesus() {
  return (
    <>
      <Helmet>
        <title>Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It | Guide Catholic</title>
        <meta name="description" content="The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade." />
        <meta name="keywords" content="fatima prayer, o my jesus prayer, fatima rosary prayer, our lady of fatima prayer, pray after each decade fatima" />
        <link rel="canonical" href="https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It"
        description="The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade."
        url="https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Fatima Prayer", url: "https://guidecatholic.com/blog/fatima-prayer-o-my-jesus/" },
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
              <span className="text-text">Fatima Prayer</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our Lady of Fatima asked the shepherd children to add this short prayer to the Rosary. Millions of Catholics still pray it today.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Star className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Fatima Prayer (&quot;O my Jesus, forgive us our sins...&quot;) was revealed at Fatima in 1917 — prayed after each Rosary decade for reparation and conversion of sinners. Our Lady asked for its spread; it is central to Fatima devotion and First Saturday communions.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Fatima Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">
                The prayer is sometimes called the Decade Prayer because Our Lady requested that it be recited after each decade of the Rosary. It asks for mercy, conversion, and the salvation of souls — especially souls in greatest spiritual danger.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does the Fatima Prayer Mean?</h2>
              <p className="text-text leading-relaxed mb-6">
                Each line has a clear intention: repentance ("forgive us our sins"), rescue from eternal loss ("save us from the fires of hell"), universal mission ("lead all souls to Heaven"), and special mercy for the weakest ("especially those most in need of Thy mercy").
              </p>

              <QuizCTA
                title="Deepen your Rosary and Marian devotion"
                description="Take the Catholic life assessment for a personalized plan for prayer and growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray the Fatima Prayer</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>After each decade of the Rosary (after the Glory Be), as Our Lady requested.</li>
                <li>During Fatima novenas or the months of May and October.</li>
                <li>When interceding for sinners, the dying, or loved ones far from God.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Is the Fatima Prayer Required?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church encourages the Rosary and the Fatima devotions, but private revelation never replaces the Gospel or the liturgy. The Fatima Prayer is a beautiful ecclesial custom that unites millions of Catholics to Our Lady's call for penance, prayer, and reparation for sinners.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Fatima Prayer (O My Jesus), you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">Readers often search for Fatima Prayer (O My Jesus): Full Text, Meaning and When to Pray It during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="fatima-prayer-o-my-jesus">The Fatima Prayer (O My Jesus) with full text, meaning, when Our Lady asked for it in the Rosary, and how Catholics pray it after each decade. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What is the O My Jesus prayer?", answer: "It is the prayer Our Lady of Fatima asked to be added after each decade of the Rosary: O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen." },
              { question: "When did Our Lady teach the Fatima Prayer?", answer: "According to the memoirs of Sister Lúcia, Our Lady taught this prayer during the Fatima apparitions in 1917 and asked that it be prayed after each decade of the Rosary." },
              { question: "Do you pray the Fatima prayer before or after the Glory Be?", answer: "The common Catholic practice is to pray the Glory Be at the end of each decade, then pray the Fatima Prayer (O My Jesus) before moving to the next decade." },
              { question: "Is the Fatima Prayer the same as the Divine Mercy Chaplet?", answer: "No. They are different devotions. The Fatima Prayer is a single short prayer after Rosary decades. The Divine Mercy Chaplet uses different prayers on different beads." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="fatima-prayer-o-my-jesus" />

            <ArticleBottomCTA title="Grow in Catholic prayer" description="Receive a personalized spiritual growth guide." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
