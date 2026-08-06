import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurFatherPrayer() {
  return (
    <>
      <Helmet>
        <title>Our Father Prayer: Full Text & Meaning (Lord's Prayer) | Guide Catholic</title>
        <meta name="description" content="Pray the Our Father with full Catholic text, the seven petitions explained, and how Jesus taught the Lord's Prayer — simple guide for daily devotion." />
        <meta name="keywords" content="our father prayer, lord's prayer, our father full text, catholic our father, how to pray the our father, our father meaning" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-father-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Father Prayer: Full Text & Meaning (Lord's Prayer)"
        description="Pray the Our Father with full Catholic text, the seven petitions explained, and how Jesus taught the Lord's Prayer — simple guide for daily devotion."
        url="https://guidecatholic.com/blog/our-father-prayer/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Our Father Prayer", url: "https://guidecatholic.com/blog/our-father-prayer/" },
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
              <span className="text-text">Our Father Prayer</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Father Prayer: Full Text & Meaning (Lord's Prayer)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Our Father, also called the Lord's Prayer, is the prayer Jesus himself taught. It is the model of every Christian prayer and the heart of Catholic worship.
              </p>
            </header>

            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Our Father (Lord&apos;s Prayer) is the prayer Christ taught his disciples in Matthew 6 — the model for all Christian prayer. Catholics pray it at every Mass, in the Rosary, and daily; each petition (hallowed be thy name, thy kingdom come, forgive us, lead us not into temptation) shapes Catholic spirituality.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Our Father Prayer Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">
                Catholics pray the Our Father at every Mass, in the Rosary, in the Liturgy of the Hours, and in daily personal prayer. It is called "the Lord's Prayer" because the Lord Jesus gave it to his disciples.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where Is the Our Father in the Bible?</h2>
              <p className="text-text leading-relaxed mb-6">
                The Our Father appears in Matthew 6:9-13 and Luke 11:2-4. In Matthew, Jesus teaches it during the Sermon on the Mount. In Luke, the disciples ask him, "Lord, teach us to pray."
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prayer is both simple and inexhaustible. It teaches us to approach God as Father, seek his glory, desire his kingdom, trust him for daily needs, forgive others, and ask for protection from sin and evil.
              </p>

              <QuizCTA
                title="Want to pray with more confidence?"
                description="Take the Catholic faith assessment and receive personalized next steps for your prayer life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Petitions of the Our Father</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Hallowed be thy name:</strong> may God's name be honored as holy.</li>
                <li><strong>Thy kingdom come:</strong> may God's reign grow in us and in the world.</li>
                <li><strong>Thy will be done:</strong> may we obey God with trust.</li>
                <li><strong>Give us this day our daily bread:</strong> provide what we need, above all the Eucharist.</li>
                <li><strong>Forgive us our trespasses:</strong> pardon our sins.</li>
                <li><strong>As we forgive:</strong> make us merciful toward others.</li>
                <li><strong>Deliver us from evil:</strong> protect us from sin, temptation, and the evil one.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Catholics Say "Trespasses"</h2>
              <p className="text-text leading-relaxed mb-6">
                Different Christian traditions use "trespasses," "debts," or "sins." Catholics commonly use "trespasses" in liturgical and devotional English. The meaning is the same: we ask God to forgive our offenses and help us forgive those who have wronged us.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Our Father Slowly</h2>
              <p className="text-text leading-relaxed mb-6">
                Try praying one line at a time. Pause after "Our Father" and remember that God is not distant. Pause after "thy will be done" and surrender a concrete concern. Pause after "forgive us" and name where you need mercy.
              </p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Pray the Our Father with full Catholic text, the seven petitions explained, and how Jesus taught the Lord&apos;s Prayer — simple guide for daily devotion. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Our Father Prayer, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Readers often search for Our Father Prayer: Full Text & Meaning (Lord&apos;s Prayer) during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-father-prayer">Pray the Our Father with full Catholic text, the seven petitions explained, and how Jesus taught the Lord&apos;s Prayer — simple guide for daily devotion. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "Who wrote the Our Father?", answer: "Jesus himself taught the Our Father to his disciples, which is why it is also called the Lord's Prayer." },
              { question: "Is the Our Father Catholic?", answer: "The Our Father belongs to all Christians, but it has a central place in Catholic Mass, the Rosary, the Liturgy of the Hours, and sacramental prayer." },
              { question: "Why is the Our Father prayed at Mass?", answer: "It prepares the faithful for Communion by asking for daily bread, forgiveness, unity, and deliverance from evil." },
              { question: "Can I pray the Our Father every day?", answer: "Yes. Catholics are encouraged to pray it daily, slowly and with attention, because it is the model prayer given by Christ." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="our-father-prayer" />

            <ArticleBottomCTA title="Build a Life of Prayer" description="Get a personalized plan for growing in Catholic prayer and discipleship." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
