import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PrayerOfAbandonmentCatholic() {
  return (
    <>
      <Helmet>
        <title>Prayer of Abandonment: Full Text & Meaning (Charles de Foucauld) | Guide Catholic</title>
        <meta name="description" content="The Prayer of Abandonment with full Catholic text, meaning, and how to pray Charles de Foucauld's surrender to God." />
        <meta name="keywords" content="prayer of abandonment, charles de foucauld prayer, catholic surrender prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/prayer-of-abandonment-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Prayer of Abandonment: Full Text & Meaning (Charles de Foucauld)" description="The Prayer of Abandonment with full Catholic text, meaning, and how to pray Charles de Foucauld's surrender to God." url="https://guidecatholic.com/blog/prayer-of-abandonment-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Prayer of Abandonment", url: "https://guidecatholic.com/blog/prayer-of-abandonment-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Prayer of Abandonment</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Prayer of Abandonment: Full Text & Meaning (Charles de Foucauld)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Blessed Charles de Foucauld&apos;s Prayer of Abandonment is a masterpiece of trust — handing every outcome to God with gratitude, whether the day brings joy or suffering.</p>
            </header>
            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10"><HandHeart className="w-24 h-24 text-violet-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Prayer of Abandonment is a Catholic prayer attributed to Blessed Charles de Foucauld that entrusts one&apos;s entire life to God the Father with gratitude and trust, echoing Christ&apos;s words on the cross: Into your hands I commend my spirit.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Prayer of Abandonment: Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Father, I abandon myself into your hands; do with me what you will. Whatever you may do, I thank you: I am ready for all, I accept all. Let only your will be done in me, and in all your creatures — I wish no more than this, O Lord.<br /><br />
                  Into your hands I commend my spirit; I offer it to you with all the love of my heart, for I love you, Lord, and so need to give myself, to surrender myself into your hands without reserve, and with boundless confidence, for you are my Father.
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-of-abandonment-catholic">This prayer is attributed to Blessed Charles de Foucauld (1858–1916), a French hermit and missionary whose life of hidden service in the Sahara embodied radical trust in Providence. Pope Francis beatified him in 2022.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Does Abandonment to God Mean?</h2>
              <p className="text-text leading-relaxed mb-6">Abandonment is not passivity or fatalism. It is the act of entrusting yourself to God&apos;s loving will while still doing your duty. Charles de Foucauld worked tirelessly for the poor; his prayer expresses inner freedom, not laziness.</p>
              <p className="text-text leading-relaxed mb-6">The phrase &quot;Whatever you may do, I thank you&quot; is especially challenging. Catholics pray it when facing illness, job loss, broken relationships, or uncertainty — not because suffering is good, but because God can bring good from what we cannot control.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Biblical Roots of This Prayer</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-of-abandonment-catholic">The closing line echoes Christ on the cross: &quot;Father, into your hands I commend my spirit&quot; (Luke 23:46). Mary&apos;s fiat — &quot;Let it be done to me according to your word&quot; (Luke 1:38) — is another model of abandonment. The prayer unites the believer with both Christ&apos;s Passion and Mary&apos;s surrender.</LinkedText>
              <p className="text-text leading-relaxed mb-6">Psalm 31 also prays, &quot;Into your hands I commit my spirit.&quot; For centuries, Catholics have prayed these words at Compline (night prayer) in the Liturgy of the Hours, making the Prayer of Abandonment a natural extension of Scripture-based devotion.</p>

              <QuizCTA title="Do you want a stronger prayer routine?" description="Take the Catholic life assessment and receive practical next steps for daily prayer and spiritual growth." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray the Prayer of Abandonment</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>At night, before sleep, as a commending of the soul to God.</li>
                <li>When facing a decision whose outcome you cannot predict.</li>
                <li>During illness, grief, or any season when control slips away.</li>
                <li>Before surgery, travel, or major life changes.</li>
                <li>During Eucharistic adoration, when the heart learns stillness.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray It Without Pretending</h2>
              <p className="text-text leading-relaxed mb-6">Honesty matters. If you cannot yet say &quot;I thank you&quot; for a painful situation, begin with the first line only: &quot;I abandon myself into your hands.&quot; Ask God to grow your trust over time. Spiritual maturity is gradual, and the saints themselves struggled.</p>
              <p className="text-text leading-relaxed mb-6">Pray slowly. Kneel if you can. After the prayer, sit in silence for a minute. Abandonment is less about words than about releasing the grip of anxiety — a daily practice, not a one-time achievement.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Charles de Foucauld and American Catholics Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-of-abandonment-catholic">Charles de Foucauld&apos;s spirituality of Nazareth — hidden, humble presence among ordinary people — resonates with lay Catholics balancing work, family, and faith. His Prayer of Abandonment appears in prayer books, retreat materials, and apps used across U.S. parishes. It complements the Jesuit tradition of discernment by adding surrender after honest seeking.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Who wrote the Prayer of Abandonment?", answer: "It is attributed to Blessed Charles de Foucauld, a French priest, hermit, and missionary beatified by Pope Francis in 2022. He prayed it as an expression of total trust in God the Father." },
              { question: "Is the Prayer of Abandonment the same as giving up?", answer: "No. Abandonment means entrusting outcomes to God while still fulfilling your responsibilities. Charles de Foucauld worked actively for the poor even as he prayed this surrender." },
              { question: "Can I pray this if I am angry or afraid?", answer: "Yes. Start with what you can honestly say. Even praying the first line — offering yourself to God — is a valid step. Trust grows through repeated prayer, not perfect feelings." },
              { question: "When is the best time to pray the Prayer of Abandonment?", answer: "Many Catholics pray it at night before sleep, echoing Christ&apos;s words on the cross. It is also fitting before major decisions, during illness, or in Eucharistic adoration." },
              { question: "Is Charles de Foucauld a saint?", answer: "He was beatified by Pope Francis in 2022; the Church recognizes his heroic virtue and spirituality of Nazareth." },
              { question: "Can beginners pray the Prayer of Abandonment?", answer: "Yes. Start with the first line if the full prayer feels difficult; trust grows through repetition." }
            ]} />
            <RelatedArticles currentSlug="prayer-of-abandonment-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Grow in Catholic Prayer</h3>
              <p className="text-text-muted mb-6">Receive a personalized guide for building a deeper daily prayer life.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
