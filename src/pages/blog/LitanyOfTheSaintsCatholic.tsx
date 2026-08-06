import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ListOrdered } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LitanyOfTheSaintsCatholic() {
  return (
    <>
      <Helmet>
        <title>Litany of the Saints: How to Pray It, When It Is Used & Meaning | Guide Catholic</title>
        <meta name="description" content="Catholic guide to the Litany of the Saints — how the responses work, when the Church prays it (Easter Vigil, ordinations, confirmations), and why we invoke the saints together." />
        <meta name="keywords" content="litany of the saints, how to pray litany of saints, catholic litany of saints, easter vigil litany, ordination litany" />
        <link rel="canonical" href="https://guidecatholic.com/blog/litany-of-the-saints-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Litany of the Saints: How to Pray It, When It Is Used & Meaning"
        description="Catholic guide to the Litany of the Saints — how the responses work, when the Church prays it (Easter Vigil, ordinations, confirmations), and why we invoke the saints together."
        url="https://guidecatholic.com/blog/litany-of-the-saints-catholic/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Litany of the Saints", url: "https://guidecatholic.com/blog/litany-of-the-saints-catholic/" },
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
              <span className="text-text">Litany of the Saints</span>
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
                Litany of the Saints: How to Pray It, When It Is Used & Meaning
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Litany of the Saints is one of the Church's great public prayers — a procession of names calling heaven to help earth.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <ListOrdered className="w-24 h-24 text-violet-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Litany of the Saints invokes holy men and women — &quot;St. N., pray for us&quot; — used at baptisms, ordinations, Rogation days, and All Saints. One of the Church&apos;s approved litanies; the Easter Vigil sings it during the procession to the font.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Litany Works</h2>
              <p className="text-text leading-relaxed mb-6">
                A leader names Christ, the Blessed Virgin Mary, angels, and many saints. After each invocation, everyone answers: <em>Pray for us</em> (or <em>Have mercy on us</em> for the Kyrie-style invocations at the beginning). The rhythm is simple: petition, response — over and over — building a cloud of intercessors.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Opening Pattern (Example)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text text-sm leading-relaxed space-y-2">
                <p>Lord, have mercy. <em>R. Lord, have mercy.</em></p>
                <p>Christ, have mercy. <em>R. Christ, have mercy.</em></p>
                <p>Lord, have mercy. <em>R. Lord, have mercy.</em></p>
                <p className="pt-2">Holy Mary, Mother of God. <em>R. Pray for us.</em></p>
                <p>Holy Mother of God. <em>R. Pray for us.</em></p>
                <p className="text-text-muted text-xs pt-2">The full litany continues with apostles, martyrs, pastors, virgins, and other categories of saints, concluding with liturgical collects.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">
                Catholics do not worship saints. We ask them to pray with us, as we might ask a friend on earth — except the saints in heaven are perfectly alive in Christ and closer to God than we are.
              </LinkedText>

              <QuizCTA
                title="Want stronger Catholic foundations?"
                description="Take the Catholic life assessment for a personalized guide to doctrine, prayer, and the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When the Church Prays the Litany of the Saints</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Easter Vigil — before the blessing of the baptismal water.</li>
                <li>Ordinations of bishops, priests, and deacons.</li>
                <li>Many confirmations and dedications of churches.</li>
                <li>Rogation processions and some pilgrimages.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Praying It at Home</h2>
              <p className="text-text leading-relaxed mb-6">
                Families can pray a shorter form or use a printed litany from a trusted Catholic prayer book. The goal is the same: to unite our needs with the whole communion of saints and to ask God's mercy through their intercession.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Catholic guide to the Litany of the Saints — how the responses work, when the Church prays it (Easter Vigil, ordinations, confirmations), and why we invoke the saints together. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Litany of the Saints, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Readers often search for Litany of the Saints: How to Pray It, When It Is Used & Meaning during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-the-saints-catholic">Catholic guide to the Litany of the Saints — how the responses work, when the Church prays it (Easter Vigil, ordinations, confirmations), and why we invoke the saints together. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What is the Litany of the Saints?", answer: "It is a litany in which the Church invokes many saints by name, responding Pray for us after each title, asking for their heavenly intercession." },
              { question: "Why does the Easter Vigil include the Litany of the Saints?", answer: "It expresses the communion of saints and asks the whole company of heaven to support those about to be baptized or received into full communion." },
              { question: "Do I need a priest to lead the litany?", answer: "The full litany in the liturgy is led by ministers in official rites. At home, lay people may pray from an approved prayer book for private or family devotion." },
              { question: "Is the Litany of the Saints the same as the Litany of Loreto?", answer: "No. The Litany of Loreto (Litany of the Blessed Virgin Mary) honors titles of Mary. The Litany of the Saints invokes many saints across the history of the Church." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="litany-of-the-saints-catholic" />

            <ArticleBottomCTA title="Walk with the saints" description="Receive a personalized Catholic growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
