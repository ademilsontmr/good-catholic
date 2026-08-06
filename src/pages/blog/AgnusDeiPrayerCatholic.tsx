import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AgnusDeiPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Agnus Dei: Full Text of the Lamb of God Prayer at Mass | Guide Catholic</title>
        <meta name="description" content="The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation." />
        <meta name="keywords" content="agnus dei prayer, lamb of god prayer catholic, agnus dei full text, agnus dei latin mass, catholic mass prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/agnus-dei-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Agnus Dei: Full Text of the Lamb of God Prayer at Mass"
        description="The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation."
        url="https://guidecatholic.com/blog/agnus-dei-prayer-catholic/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Agnus Dei", url: "https://guidecatholic.com/blog/agnus-dei-prayer-catholic/" },
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
              <span className="text-text">Agnus Dei</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Agnus Dei: Full Text of the Lamb of God Prayer at Mass
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                At every Catholic Mass, the congregation kneels and sings or speaks the Agnus Dei — Lamb of God, who takes away the sins of the world. It is the Church's cry for mercy moments before Holy Communion.
              </p>
            </header>

            <div className="aspect-video bg-sky-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-sky-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Agnus Dei (&quot;Lamb of God, who take away the sins of the world, have mercy on us&quot;) is sung at Mass before Communion — three invocations, the third often &quot;grant us peace.&quot; John the Baptist&apos;s words (John 1:29) identify Christ as sacrificial Lamb.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agnus Dei (English — Roman Missal)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-3 text-text leading-relaxed">
                <p className="italic">Lamb of God, you take away the sins of the world, have mercy on us.</p>
                <p className="italic">Lamb of God, you take away the sins of the world, have mercy on us.</p>
                <p className="italic">Lamb of God, you take away the sins of the world, grant us peace.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Agnus Dei (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 space-y-2 text-text italic text-sm">
                <p>Agnus Dei, qui tollis peccata mundi, miserere nobis.</p>
                <p>Agnus Dei, qui tollis peccata mundi, miserere nobis.</p>
                <p>Agnus Dei, qui tollis peccata mundi, dona nobis pacem.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">
                The Agnus Dei echoes John the Baptist pointing to Jesus (John 1:29). At Mass it prepares the faithful to receive the Lamb who was slain — now present in the Eucharist — and to ask for mercy and peace.
              </LinkedText>

              <QuizCTA
                title="Understand the Mass more deeply"
                description="Take the Catholic life assessment for a personalized guide to the sacraments and Sunday worship."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where It Fits in the Mass</h2>
              <p className="text-text leading-relaxed mb-6">
                The Agnus Dei follows the Lord's Prayer and the Sign of Peace, during the fraction rite when the priest breaks the consecrated Host. The third invocation may be repeated until the distribution of Communion is complete in some celebrations.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Agnus Dei, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Readers often search for Agnus Dei: Full Text of the Lamb of God Prayer at Mass during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">The Agnus Dei (Lamb of God) prayer with full text in English and Latin, what Catholics say at Mass before Communion, and the meaning of each invocation. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

              {/* data-expanded-depth-3 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History and Church Approval</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Many Catholic prayers grew from monastic communities, papal encouragement, or popular devotion validated by local bishops. Agnus Dei belongs to this living tradition — not private revelation disconnected from the Magisterium.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying With Your Parish</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="agnus-dei-prayer-catholic">Bring this prayer to parish adoration hours, men&apos;s groups, or family rosary time. Shared prayer strengthens faith and corrects private misunderstandings.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What does Agnus Dei mean?", answer: "Agnus Dei is Latin for Lamb of God. It refers to Jesus Christ, the Passover Lamb whose sacrifice takes away the sins of the world." },
              { question: "Why is Agnus Dei prayed three times?", answer: "The triple invocation expresses urgent trust in Christ's mercy. The first two ask for mercy; the third asks for peace — the fruit of reconciliation with God." },
              { question: "Do Catholics kneel during the Agnus Dei?", answer: "In the Roman Rite, the faithful kneel from the Agnus Dei until they receive Communion, unless local custom or disability requires otherwise." },
              { question: "Is the Agnus Dei the same as the Agnus Dei sacramental?", answer: "No. The prayer at Mass is a liturgical text. Agnus Dei sacramentals are wax discs blessed by the Pope, a different devotion." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="agnus-dei-prayer-catholic" />

            <ArticleBottomCTA title="Live the Mass with greater devotion" description="Receive a personalized Catholic spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
