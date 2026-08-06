import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SubTuumPraesidiumPrayer() {
  return (
    <>
      <Helmet>
        <title>Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin) | Guide Catholic</title>
        <meta name="description" content="Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today." />
        <meta name="keywords" content="sub tuum praesidium prayer, oldest marian prayer, under your protection we fly, sub tuum praesidium latin, catholic marian prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin)"
        description="Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today."
        url="https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sub Tuum Praesidium", url: "https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/" },
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
              <span className="text-text">Sub Tuum Praesidium</span>
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
                Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Under your protection we fly, O holy Mother of God — Sub Tuum Praesidium is the earliest Marian prayer preserved in Greek, dating to around the year 250. Catholics still pray it for refuge in danger and trust in Mary's intercession.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-indigo-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Sub Tuum Praesidium is among the oldest Marian prayers — &quot;We fly to thy patronage, O holy Mother of God&quot; — from at least the 3rd century. Catholics pray it for protection in danger; it appears in Compline traditions and papal processions.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sub Tuum Praesidium (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed">
                <p>We fly to thy protection, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sub Tuum Praesidium (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm">
                <p>Sub tuum praesidium confugimus, Sancta Dei Genitrix. Nostras deprecationes ne despicias in necessitatibus nostris, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                The prayer does not worship Mary; it asks the Mother of God to shelter the Church as she sheltered the infant Christ. To flee to her protection is to flee to Christ, whom she always leads us toward.
              </LinkedText>

              <QuizCTA
                title="Grow in Marian devotion with confidence"
                description="Take the Catholic life assessment for practical guidance on prayer and Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History & Use Today</h2>
              <p className="text-text leading-relaxed mb-6">
                A Greek papyrus from Egypt (c. 250 AD) contains this prayer, making it the oldest known text invoking Mary as Theotokos — God-bearer. The Church approved it for liturgical use and includes it in the Roman Ritual. Families pray it in times of war, illness, travel, or spiritual trial.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Sub Tuum Praesidium, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Readers often search for Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin) during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

              {/* data-expanded-depth-3 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History and Church Approval</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Many Catholic prayers grew from monastic communities, papal encouragement, or popular devotion validated by local bishops. Sub Tuum Praesidium belongs to this living tradition — not private revelation disconnected from the Magisterium.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying With Your Parish</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">Bring this prayer to parish adoration hours, men&apos;s groups, or family rosary time. Shared prayer strengthens faith and corrects private misunderstandings.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What does Sub Tuum Praesidium mean?", answer: "It means Under your protection — the opening words of the prayer in Latin: Sub tuum praesidium confugimus (We fly to thy protection)." },
              { question: "Is Sub Tuum Praesidium the oldest Marian prayer?", answer: "The Greek text from c. 250 AD is the earliest known Marian prayer preserved in writing. It shows Christians already turned to Mary as Mother of God within decades of the apostolic age." },
              { question: "When should I pray Sub Tuum Praesidium?", answer: "Whenever you need Mary's intercession — in danger, anxiety, before travel, during persecution, or as a daily act of trust in her maternal care." },
              { question: "Is Sub Tuum Praesidium different from the Memorare?", answer: "Yes. The Memorare is a later prayer emphasizing Mary's never-failing help. Sub Tuum Praesidium is shorter and focuses on taking refuge under her protection." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="sub-tuum-praesidium-prayer" />

            <ArticleBottomCTA title="Deepen your Catholic prayer life" description="Receive a personalized spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
