import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function EternalRestPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Eternal Rest Prayer (Requiem Aeternam): Full Catholic Text | Guide Catholic</title>
        <meta name="description" content="The Eternal Rest prayer (Requiem aeternam) with full Catholic text in English and Latin, when to pray it for the dead, and how it fits funeral Mass and November memorials." />
        <meta name="keywords" content="eternal rest prayer, requiem aeternam prayer, catholic prayer for the dead, eternal rest grant unto them, funeral prayer catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/eternal-rest-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Eternal Rest Prayer (Requiem Aeternam): Full Catholic Text"
        description="The Eternal Rest prayer (Requiem aeternam) with full Catholic text in English and Latin, when to pray it for the dead, and how it fits funeral Mass and November memorials."
        url="https://guidecatholic.com/blog/eternal-rest-prayer-catholic/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Eternal Rest Prayer", url: "https://guidecatholic.com/blog/eternal-rest-prayer-catholic/" },
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
              <span className="text-text">Eternal Rest Prayer</span>
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
                Eternal Rest Prayer (Requiem Aeternam): Full Catholic Text
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Eternal rest grant unto them, O Lord — the Requiem aeternam is the Church's daily prayer for the faithful departed, sung at every funeral Mass and whispered at countless gravesides.
              </p>
            </header>

            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10">
              <Moon className="w-24 h-24 text-slate-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Eternal Rest (&quot;Eternal rest grant unto them, O Lord, and let perpetual light shine upon them&quot;) is the classic prayer for the dead — sung at funerals, prayed for souls in purgatory, and included in November All Souls devotions and Rosary for the deceased.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Eternal Rest Prayer (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-lg">
                <p>Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Requiem Aeternam (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed">
                <p>Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Extended Form (Often Used in November)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-3">
                <p>Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May the souls of the faithful departed, through the mercy of God, rest in peace. Amen.</p>
                <p>May their souls and the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">
                Praying for the dead is an act of charity — the Church on earth continues to love those being purified in purgatory. The Eternal Rest prayer is short enough for daily use and solemn enough for a funeral.
              </LinkedText>

              <QuizCTA
                title="Explore Catholic teaching on life, death, and hope"
                description="Take the Catholic life assessment for a personalized guide to doctrine, prayer, and the sacraments."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray Eternal Rest</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>At the end of funeral Mass and burial rites.</li>
                <li>During November, the month the Church dedicates to the holy souls.</li>
                <li>After visiting a cemetery or passing a memorial.</li>
                <li>At the conclusion of the Rosary, often after the Hail Holy Queen.</li>
              </ul>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Means in Catholic Worship</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">The Eternal Rest prayer (Requiem aeternam) with full Catholic text in English and Latin, when to pray it for the dead, and how it fits funeral Mass and November memorials. Catholic prayer is never magic — it unites the heart to Christ through words the Church has tested for centuries. Whether prayed alone at home, with a parish group, or within the liturgy, this devotion opens the soul to grace and keeps doctrine on the lips.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">American Catholics use this prayer at different seasons of life — before Mass, during Eucharistic adoration, in family rosary time, or in moments of fear and hope. The Church encourages regular prayer, but also spontaneous cries from the heart. If you are learning for the first time, start slowly: read the text, then pray aloud until the words become your own.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray With Reverence</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">Begin with the Sign of the Cross. Name your intention clearly — for yourself or someone you love. Speak the prayer at a pace that lets each phrase sink in. End with a moment of silence, listening more than asking. Combine private prayer with the sacraments: Sunday Mass and Confession when needed keep devotional prayer rooted in the life of the Church.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Scripture and the Communion of Saints</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">Catholic prayer always flows from Scripture and toward Christ. Many classic prayers paraphrase or echo biblical passages; others were composed by saints whose wisdom the Church commends. When you pray Eternal Rest Prayer (Requiem Aeternam), you stand in a line of believers stretching from the apostles to your own parish today — one Body, many members, one Lord.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">Readers often search for Eternal Rest Prayer (Requiem Aeternam): Full Catholic Text during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="eternal-rest-prayer-catholic">The Eternal Rest prayer (Requiem aeternam) with full Catholic text in English and Latin, when to pray it for the dead, and how it fits funeral Mass and November memorials. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>

            <BlogFAQ faqs={[
              { question: "What is the Eternal Rest prayer?", answer: "It is the Requiem aeternam — a brief prayer asking God to grant eternal rest and perpetual light to the souls of the faithful departed." },
              { question: "Is Eternal Rest only for funerals?", answer: "No. Catholics pray it whenever they remember the dead — at home, in cemeteries, during November devotions, and after the Rosary." },
              { question: "What does Requiescant in pace mean?", answer: "It means May they rest in peace — the Latin form of the familiar R.I.P., expressing Christian hope in resurrection, not final extinction." },
              { question: "Can I pray Eternal Rest for non-Catholics who have died?", answer: "Yes. The Church encourages prayer for all the dead, entrusting them to God's mercy. We pray with hope that all may come to eternal life." },,
              { question: "Can I pray this if I am not yet Catholic?", answer: "Yes. Many prayers are open to all who seek God; the Church welcomes sincere prayer while inviting seekers toward full communion through baptism and formation." },
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />

            <RelatedArticles currentSlug="eternal-rest-prayer-catholic" />

            <ArticleBottomCTA title="Walk with the Church in prayer" description="Get a personalized Catholic spiritual growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
