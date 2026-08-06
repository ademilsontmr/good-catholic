import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaBeforeSurgeryCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace | Guide Catholic</title>
        <meta name="description" content="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." />
        <meta name="keywords" content="novena before surgery, catholic prayer before surgery, 9 day novena healing surgery, prayer for operation catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-before-surgery-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace" description="Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States." url="https://guidecatholic.com/blog/novena-before-surgery-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Novena Before Surgery", url: "https://guidecatholic.com/blog/novena-before-surgery-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena Before Surgery</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace</h1>
              <p className="text-xl text-text-muted leading-relaxed">Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States.</p>
            </header>
            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10"><HeartPulse className="w-24 h-24 text-rose-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">A novena before surgery is nine days of Catholic prayer for the patient, medical team, and successful recovery. Start nine days before the operation if possible; receive Anointing of the Sick and Confession for serious procedures.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Catholics invoke Christ the Divine Physician, Mary Health of the Sick, Saint Luke the evangelist-physician, Saint Peregrine (patron of cancer patients), and Saint Padre Pio for healing. Hospital chaplains across the U.S. offer sacraments before major operations.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">A novena is a nine-day prayer rooted in the time the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Unlike a single spontaneous prayer, a novena builds sustained trust over consecutive days.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray This Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Surgery brings fear of pain, complications, or death. Nine days unite family prayer with medical expertise. The Church blesses anesthesia and surgery as good when used to heal — prayer sanctifies the wait before going under.</LinkedText>

              <QuizCTA title="How deep is your Catholic faith?" description="Take our assessment and receive a personalized guide to growing in prayer and devotion." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>Start nine days before surgery when the date is known.</li>
                <li><strong>Ask the parish for Anointing of the Sick</strong> — not only for the dying.</li>
                <li>Family prays daily even if the patient is weak.</li>
                <li>Follow all pre-op medical instructions.</li>
                <li>Continue prayer through recovery.</li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer Before Surgery</h3>
                <p className="text-text italic leading-relaxed text-sm">Lord Jesus, Divine Physician, I entrust this surgery and recovery to you. Guide the hands of the medical team, calm my anxiety, and grant healing according to your holy will. Mary, Health of the Sick, Saint Luke, Saint Padre Pio, and Saint Peregrine, intercede for [name] and a successful operation. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Family members often pray this novena at the bedside. Combine with St. Padre Pio novena for healing. Offer Mass intentions for the patient&apos;s recovery.</LinkedText>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Novena Before Surgery, you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Readers often search for Novena Before Surgery: 9-Day Catholic Prayer for Healing & Peace during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-before-surgery-catholic">Novena before surgery — 9-day Catholic prayer for healing, peace, and successful operation. Full prayer text for patients and families in the United States. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "When should I start?", answer: "Nine days before surgery; if sooner, pray daily until and after the procedure." },
              { question: "Can family pray for the patient?", answer: "Yes — one of the most common intercessory novenas." },
              { question: "Should I receive Anointing?", answer: "Yes for serious surgery or illness — it is for the seriously ill, not only the dying." },
              { question: "Which saints for surgery?", answer: "Saint Luke, Saint Peregrine, Saint Padre Pio, and Mary Health of the Sick." },
              { question: "Does prayer replace medical care?", answer: "No — follow doctors&apos; orders; prayer complements medicine." },
              { question: "Can I pray after surgery too?", answer: "Yes — extend prayer through rehabilitation." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />
            <RelatedArticles currentSlug="novena-before-surgery-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to Catholic prayer and devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
