import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PrayerBeforeCrucifixCatholic() {
  return (
    <>
      <Helmet>
        <title>Prayer Before a Crucifix: Full Text & Meaning for Catholics | Guide Catholic</title>
        <meta name="description" content="Prayer before a Crucifix with full Catholic text — the indulgenced prayer of St. Francis and when to pray it." />
        <meta name="keywords" content="prayer before crucifix, catholic prayer crucifix full text, st francis crucifix prayer" />
        <link rel="canonical" href="https://guidecatholic.com/blog/prayer-before-crucifix-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Prayer Before a Crucifix: Full Text & Meaning for Catholics" description="Prayer before a Crucifix with full Catholic text — the indulgenced prayer of St. Francis and when to pray it." url="https://guidecatholic.com/blog/prayer-before-crucifix-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Prayer Before a Crucifix", url: "https://guidecatholic.com/blog/prayer-before-crucifix-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Prayer Before a Crucifix</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Prayer Before a Crucifix: Full Text & Meaning for Catholics</h1>
              <p className="text-xl text-text-muted leading-relaxed">Kneeling before a crucifix, Catholics pray with St. Francis of Assisi for faith, hope, charity, and repentance — a prayer enriched with a partial indulgence in the Church&apos;s tradition.</p>
            </header>
            <div className="aspect-video bg-red-100 rounded-2xl flex items-center justify-center mb-10"><Cross className="w-24 h-24 text-red-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-before-crucifix-catholic">The crucifix is not decoration only. It is a sacramental — a sacred sign that focuses faith on Christ crucified. The Prayer Before a Crucifix, associated with St. Francis of Assisi, is among the most common devotions in American Catholic homes, schools, and hospitals.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer Before a Crucifix: Full Text</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Behold, O kind and most sweet Jesus, I cast myself upon my knees in your sight, and with the most fervent desire of my soul I pray and beseech you that you would impress upon my heart lively sentiments of faith, hope, and charity, with true repentance for my sins and a firm resolve of amendment; while with deep affection and grief of soul I ponder within myself and mentally contemplate your five most precious wounds, having before my eyes that which David spoke in prophecy of you, O good Jesus: &quot;They have pierced my hands and my feet; they have numbered all my bones.&quot; Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What This Prayer Asks For</h2>
              <p className="text-text leading-relaxed mb-6">The prayer requests the theological virtues — faith, hope, and charity — and the disposition needed for Confession: sorrow for sin and purpose of amendment. It directs attention to Christ&apos;s five wounds, a classic meditation in Franciscan spirituality and in the Stations of the Cross.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-before-crucifix-catholic">St. Francis received the stigmata — the wounds of Christ — at La Verna in 1224. His devotion to the crucified Lord shaped centuries of Catholic piety, including this prayer printed in many U.S. missals and penance pamphlets.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Partial Indulgence</h2>
              <p className="text-text leading-relaxed mb-6">The Church grants a partial indulgence to the faithful who pray devoutly before a crucifix this prayer or other approved prayers (see the Enchiridion of Indulgences). An indulgence remits temporal punishment due to sin, applying the merits of Christ and the saints. To gain it, one must be baptized, not excommunicated, in a state of grace, have at least a general intention for indulgences, and pray with devotion.</p>

              <QuizCTA title="Do you want a stronger prayer routine?" description="Take the Catholic life assessment and receive practical next steps for daily prayer and spiritual growth." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray Before a Crucifix</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Friday afternoons, remembering Christ&apos;s death on Good Friday.</li>
                <li>Before Confession, to stir contrition.</li>
                <li>During Lent and Holy Week devotions.</li>
                <li>At bedtime, especially in family prayer with children.</li>
                <li>When suffering, offering pain in union with Christ&apos;s Passion.</li>
                <li>Before the crucifix carried in Good Friday liturgies.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray It in Your Home</h2>
              <p className="text-text leading-relaxed mb-6">Place a crucifix in a central room — many Catholic families hang one above a door or in the bedroom. Kneel if you are able. Sign yourself with the cross. Read the prayer slowly, pausing at &quot;five most precious wounds.&quot; You may follow with an Our Father and Hail Mary.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-before-crucifix-catholic">The crucifix differs from a plain cross: it bears the corpus — the body of Christ — reminding us that salvation came through sacrifice. Protestant crosses and Catholic crucifixes reflect different emphases; Catholic worship keeps both cross and suffering Lord in view.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Connecting to the Mass and Sacraments</h2>
              <p className="text-text leading-relaxed mb-6">Every Mass re-presents the one sacrifice of Calvary. Praying before a crucifix at home extends Eucharistic faith into daily life. After Confession, pray it in thanksgiving. When unable to attend Mass, unite this devotion with a Spiritual Communion. The crucifix keeps the center of Catholic faith always in sight.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "Did St. Francis of Assisi write this prayer?", answer: "Tradition associates this prayer with St. Francis and Franciscan spirituality. It appears in Catholic prayer books as the Prayer Before a Crucifix and reflects his devotion to Christ&apos;s Passion." },
              { question: "Is there an indulgence for praying before a crucifix?", answer: "Yes. The Church grants a partial indulgence for devoutly praying approved prayers before a crucifix, including this one, under the usual conditions for gaining indulgences." },
              { question: "What is the difference between a cross and a crucifix?", answer: "A crucifix includes the figure of Christ crucified (the corpus). Catholics use crucifixes to recall the historical sacrifice of Jesus, not only the symbol of resurrection." },
              { question: "When is the best time to pray before a crucifix?", answer: "Fridays, before Confession, during Lent, and at bedtime are traditional times. Any moment of sorrow, gratitude, or need for repentance is appropriate." },
            ]} />
            <RelatedArticles currentSlug="prayer-before-crucifix-catholic" />
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
