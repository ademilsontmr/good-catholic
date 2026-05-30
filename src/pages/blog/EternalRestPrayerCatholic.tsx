import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
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
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Eternal Rest prayer?", answer: "It is the Requiem aeternam — a brief prayer asking God to grant eternal rest and perpetual light to the souls of the faithful departed." },
              { question: "Is Eternal Rest only for funerals?", answer: "No. Catholics pray it whenever they remember the dead — at home, in cemeteries, during November devotions, and after the Rosary." },
              { question: "What does Requiescant in pace mean?", answer: "It means May they rest in peace — the Latin form of the familiar R.I.P., expressing Christian hope in resurrection, not final extinction." },
              { question: "Can I pray Eternal Rest for non-Catholics who have died?", answer: "Yes. The Church encourages prayer for all the dead, entrusting them to God's mercy. We pray with hope that all may come to eternal life." },
            ]} />

            <RelatedArticles currentSlug="eternal-rest-prayer-catholic" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Walk with the Church in prayer</h3>
              <p className="text-text-muted mb-6">Get a personalized Catholic spiritual growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
