import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LitanyOfHumilityCatholic() {
  return (
    <>
      <Helmet>
        <title>Litany of Humility: Full Text & Why Catholics Pray It Daily | Guide Catholic</title>
        <meta name="description" content="The Litany of Humility with full Catholic text, attributed to Cardinal Merry del Val, meaning of each petition, and why it is popular in U.S. Catholic devotion." />
        <meta name="keywords" content="litany of humility, litany of humility full text, catholic humility prayer, deliver me jesus litany, cardinal merry del val prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/litany-of-humility-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Litany of Humility: Full Text & Why Catholics Pray It Daily" description="The Litany of Humility with full Catholic text, attributed to Cardinal Merry del Val, meaning of each petition, and why it is popular in U.S. Catholic devotion." url="https://guidecatholic.com/blog/litany-of-humility-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Litany of Humility", url: "https://guidecatholic.com/blog/litany-of-humility-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Litany of Humility</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Litany of Humility: Full Text & Why Catholics Pray It Daily</h1>
              <p className="text-xl text-text-muted leading-relaxed">From fear of being humiliated to desire to be forgotten — the Litany of Humility names the hidden pride that blocks holiness. It has spread rapidly among American Catholics seeking authenticity.</p>
            </header>
            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10"><Flower2 className="w-24 h-24 text-violet-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Litany of Humility is a Catholic prayer attributed to Cardinal Rafael Merry del Val that asks Jesus to free the soul from vanity and fear of others&apos; opinions. Catholics pray it privately or in groups, responding &quot;Deliver me, Jesus&quot; or &quot;Grant me the grace to desire it, Jesus&quot; to each petition.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Was Cardinal Merry del Val?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-humility-catholic">Cardinal Rafael Merry del Val (1865–1930) served as Secretary of State under Pope St. Pius X. Known for diplomatic skill and personal austerity, he was remembered for treating everyone — from popes to servants — with equal courtesy. Biographers describe him as fiercely devoted to Christ&apos;s meekness; the Litany of Humility fits that portrait, even though historians cannot prove with certainty that he composed every line. American Catholics encounter his name through this prayer more often than through Vatican history textbooks.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Litany of Humility — Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text text-sm leading-relaxed space-y-2">
                <p className="font-semibold not-italic">O Jesus! meek and humble of heart, Hear me.</p>
                <p><em>From the desire of being esteemed, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being loved, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being extolled, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being honored, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being praised, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being preferred to others, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being consulted, Deliver me, Jesus.</em></p>
                <p><em>From the desire of being approved, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being humiliated, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being despised, Deliver me, Jesus.</em></p>
                <p><em>From the fear of suffering rebukes, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being calumniated, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being forgotten, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being ridiculed, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being wronged, Deliver me, Jesus.</em></p>
                <p><em>From the fear of being suspected, Deliver me, Jesus.</em></p>
                <p className="pt-2 font-semibold not-italic">That others may be loved more than I, Jesus, grant me the grace to desire it.</p>
                <p><em>That others may be esteemed more than I, Jesus, grant me the grace to desire it.</em></p>
                <p><em>That, in the opinion of the world, others may increase and I may decrease, Jesus, grant me the grace to desire it.</em></p>
                <p><em>That others may be chosen and I set aside, Jesus, grant me the grace to desire it.</em></p>
                <p><em>That others may be praised and I unnoticed, Jesus, grant me the grace to desire it.</em></p>
                <p><em>That others may be preferred to me in everything, Jesus, grant me the grace to desire it.</em></p>
                <p><em>That others may become holier than I, provided that I may become as holy as I should, Jesus, grant me the grace to desire it.</em></p>
                <p className="pt-2 font-semibold not-italic">Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Litany of Humility</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li><strong>Begin with the Sign of the Cross.</strong> You may kneel or sit quietly; posture matters less than sincerity.</li>
                <li><strong>Pray the opening invocation aloud:</strong> &quot;O Jesus! meek and humble of heart, Hear me.&quot;</li>
                <li><strong>For each &quot;Deliver me&quot; petition,</strong> pause and respond: &quot;Deliver me, Jesus.&quot; Some Catholics add a Hail Mary between sections during Lent.</li>
                <li><strong>For each &quot;Grant me the grace&quot; petition,</strong> respond: &quot;Jesus, grant me the grace to desire it.&quot;</li>
                <li><strong>End with Amen</strong> and a moment of silence, offering one concrete act of humility for the day — letting someone else speak first, accepting correction without defending yourself, or fasting from social media comparison.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Petitions Mean (Catholic Teaching)</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="litany-of-humility-catholic">The first half names <strong>disordered desires</strong> — wanting praise, honor, and approval as if they were necessities. The Catechism teaches that pride is the root of many sins because it turns the heart away from God toward self (CCC 1866, 2559). The second half asks for <strong>supernatural desires</strong>: not natural self-loathing, but the grace to prefer others and to rejoice when they are honored.</LinkedText>
              <p className="text-text leading-relaxed mb-6">Humility is not pretending you have no gifts. St. Teresa of Ávila called humility &quot;walking in the truth&quot; — acknowledging that every good comes from God. The litany therefore targets <em>attachment</em> to reputation, not legitimate self-respect. A surgeon should know she is skilled; a parent should love his children well. The sin is needing the crowd&apos;s applause to feel worth.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why American Catholics Pray It Today</h2>
              <p className="text-text leading-relaxed mb-6">Parishes from Boston to Los Angeles report young adults praying the Litany of Humility in small groups, before Eucharistic adoration, and during Lenten penance services. The prayer names struggles that older devotional books sometimes skipped: fear of being canceled, overlooked on group chats, or compared on Instagram. It gives language for confession without vague guilt. Many U.S. Catholic bookstores stock wallet cards; the prayer also appears in the <em>Pieta</em> prayer book and various Magnificat companion volumes.</p>

              <QuizCTA title="Grow in virtue and self-knowledge" description="Take the Catholic life assessment for guidance on humility, prayer, and daily holiness." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray It — Practical Suggestions</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Lent and Holy Week</strong> — alongside fasting from vanity and speech.</li>
                <li><strong>Before Confession</strong> — to examine motives for sin honestly.</li>
                <li><strong>After public failure or criticism</strong> — when humiliation tempts bitterness.</li>
                <li><strong>Monthly holy hour</strong> — as a examination of conscience on pride.</li>
                <li><strong>With teenagers preparing for Confirmation</strong> — peer pressure makes these petitions concrete.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Humility vs. Low Self-Esteem</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-humility-catholic">Catholic spirituality rejects both pride and despair. If the litany feels crushing, speak with a priest or Catholic counselor — scrupulosity and clinical anxiety are not the same as humility. The goal is freedom to love God and neighbor, not endless self-accusation. St. Thérèse of Lisieux showed humility through confident trust in God&apos;s mercy, not through hiding her light.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Who wrote the Litany of Humility?", answer: "It is widely attributed to Cardinal Rafael Merry del Val (1865–1930), Secretary of State under Pope Pius X. The attribution is traditional; the prayer spread through Catholic devotional print in the 20th century." },
              { question: "How do you pray the Litany of Humility?", answer: "Pray the opening invocation, then respond 'Deliver me, Jesus' to each petition in the first section and 'Jesus, grant me the grace to desire it' to each petition in the second section. End with Amen." },
              { question: "Is the Litany of Humility approved by the Church?", answer: "It is used widely in private and parish devotion and appears in many Catholic prayer books. It is not part of the official Liturgy of the Hours or the Roman Missal, but its content is fully orthodox." },
              { question: "Why is it popular among young Catholics?", answer: "It honestly names interior struggles with ego, social comparison, and approval-seeking — offering concrete language for repentance and trust in Christ in a digital culture." },
              { question: "How long does the Litany of Humility take?", answer: "Most people pray it in 5–8 minutes at a moderate pace. Some pray one section per day during a nine-day novena." },
              { question: "Can I pray the Litany of Humility in a group?", answer: "Yes. A leader reads each petition and the group responds together. It is common at parish missions, adoration chapels, and Lenten penance services." },
              { question: "Is humility the same as letting people mistreat you?", answer: "No. Catholic humility is truth before God. You may still set boundaries, seek justice, and use your talents — without needing constant praise or fearing every criticism." },
            ]} />
            <RelatedArticles currentSlug="litany-of-humility-catholic" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
