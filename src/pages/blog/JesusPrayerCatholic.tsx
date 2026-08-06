import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function JesusPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart) | Guide Catholic</title>
        <meta name="description" content="The Jesus Prayer (Lord Jesus Christ, Son of God, have mercy on me, a sinner) with full text, meaning, and how Catholics may use it alongside the Rosary and lectio divina." />
        <meta name="keywords" content="jesus prayer catholic, lord jesus christ son of god have mercy, jesus prayer meaning, catholic repetitive prayer, hesychasm" />
        <link rel="canonical" href="https://guidecatholic.com/blog/jesus-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart)"
        description="The Jesus Prayer (Lord Jesus Christ, Son of God, have mercy on me, a sinner) with full text, meaning, and how Catholics may use it alongside the Rosary and lectio divina."
        url="https://guidecatholic.com/blog/jesus-prayer-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Jesus Prayer", url: "https://guidecatholic.com/blog/jesus-prayer-catholic/" },
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
              <span className="text-text">Jesus Prayer</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 14, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Jesus Prayer is ancient and simple: it repeats the holy name of Jesus with a plea for mercy. Catholics encounter it through Eastern Christian friends and growing interest in contemplative prayer.
              </p>
            </header>

            <div className="aspect-video bg-teal-100 rounded-2xl flex items-center justify-center mb-10">
              <CircleDot className="w-24 h-24 text-teal-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Jesus Prayer — &quot;Lord Jesus Christ, Son of God, have mercy on me, a sinner&quot; — comes from Eastern Christianity; Catholics may use it in contemplative prayer alongside the Rosary and lectio divina when practiced with Church teaching on grace and sacraments.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Jesus Prayer (Common English Form)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic text-xl leading-relaxed">
                  Lord Jesus Christ, Son of God, have mercy on me, a sinner.
                </p>
              </div>

              <p className="text-text leading-relaxed mb-6">
                Some traditions shorten to <em>Lord Jesus Christ, have mercy on me</em> or expand slightly; the heart of the prayer is Jesus' lordship, divine sonship, and merciful love toward sinners.
              </p>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">
                The Catholic Church teaches that vocal prayer can become interior when faith and love are active. The Jesus Prayer is not magic repetition; it is calling on the Person of Christ with humility, like the blind man by the road or the tax collector in the temple.
              </LinkedText>

              <QuizCTA
                title="Find your prayer rhythm"
                description="Take the Catholic life assessment for practical guidance on daily prayer and spiritual growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How Catholics Often Use It</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Short intervals of silence after Scripture or before the Rosary.</li>
                <li>Walking commute or household chores as a breath of the heart.</li>
                <li>Alongside the divine office or personal thanksgiving after Communion.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Guidance from the Tradition</h2>
              <p className="text-text leading-relaxed mb-6">
                If you feel dryness, distraction, or unease, speak with a trusted priest or spiritual director. Any method of prayer should lead toward deeper faith, hope, and charity — not away from the sacraments, the Church's teaching, or ordinary duties of state in life.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">The Jesus Prayer (Lord Jesus Christ, Son of God, have mercy on me, a sinner) with full text, meaning, and how Catholics may use it alongside the Rosary and lectio divina. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Jesus Prayer, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">Readers often search for Jesus Prayer: Text, Meaning & Catholic Use (Breath of the Heart) during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="jesus-prayer-catholic">The Jesus Prayer (Lord Jesus Christ, Son of God, have mercy on me, a sinner) with full text, meaning, and how Catholics may use it alongside the Rosary and lectio divina. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "Is the Jesus Prayer Catholic?", answer: "The words are fully orthodox: they proclaim Christ as Lord and Son of God and ask for mercy. Eastern Catholics pray it regularly; Latin Catholics may use it as a private devotion within the Church's faith." },
              { question: "Is the Jesus Prayer the same as centering prayer?", answer: "No. The Jesus Prayer explicitly names Jesus Christ and asks for mercy. It should not be confused with techniques that avoid Christian content." },
              { question: "How many times should I repeat it?", answer: "There is no magic number. Some use a prayer rope or gentle rhythm with breathing; what matters is humble attention to Christ, not mechanical counting." },
              { question: "Can it replace the Rosary?", answer: "They serve different purposes. The Rosary is a Marian meditation on the mysteries of Christ. The Jesus Prayer is a compact Christ-centered cry for mercy. Many Catholics use both at different times." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="jesus-prayer-catholic" />

            <ArticleBottomCTA title="Strengthen your spiritual life" description="Receive a personalized Catholic growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
