import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CorpusChristiFeastGuideCatholic() {
  return (
    <>
      <Helmet>
        <title>Corpus Christi: Catholic Feast Day Guide (Meaning, Mass & Processions) | Guide Catholic</title>
        <meta name="description" content="Corpus Christi feast day guide — Real Presence, Mass, Eucharistic processions, and how U.S. Catholics celebrate." />
        <meta name="keywords" content="corpus christi catholic, corpus christi feast day, eucharistic procession" />
        <link rel="canonical" href="https://guidecatholic.com/blog/corpus-christi-feast-guide-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Corpus Christi: Catholic Feast Day Guide (Meaning, Mass & Processions)" description="Corpus Christi feast day guide — Real Presence, Mass, Eucharistic processions, and how U.S. Catholics celebrate." url="https://guidecatholic.com/blog/corpus-christi-feast-guide-catholic/" datePublished="2026-06-02" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Corpus Christi", url: "https://guidecatholic.com/blog/corpus-christi-feast-guide-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Corpus Christi</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy &amp; Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Corpus Christi: Catholic Feast Day Guide (Meaning, Mass & Processions)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Corpus Christi — the Body of Christ — is the solemnity that crowns the Easter season by celebrating the Real Presence of Jesus in the Eucharist, often with public processions through American streets.</p>
            </header>
            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10"><Sun className="w-24 h-24 text-yellow-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corpus-christi-feast-guide-catholic">Corpus Christi falls on the Thursday after Trinity Sunday (or the following Sunday in many countries). In the United States, the bishops transfer the solemnity to Sunday so more faithful can participate. In 2026, Corpus Christi Sunday is June 7.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Corpus Christi Celebrates</h2>
              <p className="text-text leading-relaxed mb-6">Unlike Christmas or Easter, Corpus Christi is not primarily about a past event. It honors a present mystery: Jesus Christ is truly, really, and substantially present in the consecrated Host. The Catechism teaches that the whole Christ is contained in the Eucharist (CCC 1374).</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corpus-christi-feast-guide-catholic">Pope Urban IV instituted the universal feast in 1264, after the Miracle of Bolsena strengthened belief in the Real Presence. St. Thomas Aquinas composed the liturgical texts, including the hymns Pange Lingua and Lauda Sion still sung in U.S. parishes.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Happens at Corpus Christi Mass</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>White vestments symbolizing joy and glory.</li>
                <li>Reading from John 6 — the Bread of Life discourse.</li>
                <li>The sequence Lauda Sion before the Gospel (where the rubrics provide for it).</li>
                <li>Renewed profession of faith in the Real Presence through homily and hymns.</li>
                <li>Many parishes expose the Blessed Sacrament after Mass for adoration.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg text-center">
                  &quot;O sacred banquet, in which Christ is received, the memory of his Passion is renewed, the mind is filled with grace, and a pledge of future glory is given to us.&quot;
                </p>
                <p className="text-text-muted text-center mt-2 text-sm">— Antiphon of Corpus Christi, St. Thomas Aquinas</p>
              </div>

              <QuizCTA title="Prepare for the Eucharist" description="Take the Catholic life assessment for guidance on Mass, adoration, and parish life." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Eucharistic Processions in the USA</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corpus-christi-feast-guide-catholic">The Eucharistic procession is Corpus Christi&apos;s most visible custom. The priest carries the Blessed Sacrament in a monstrance under a canopy; the faithful follow singing hymns. Cities with strong Catholic heritage — Chicago, New Orleans, Philadelphia, Los Angeles — often hold outdoor processions. The National Eucharistic Revival has renewed this practice in many dioceses.</LinkedText>
              <p className="text-text leading-relaxed mb-6">Processions may stop at outdoor altars for benediction. Kneel when the Host passes. Dress modestly. Processions are public witness: Catholics proclaim that Christ is not a symbol but truly present.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Is Corpus Christi a Holy Day of Obligation?</h2>
              <p className="text-text leading-relaxed mb-6">In the United States, Corpus Christi is celebrated on Sunday and is not a separate weekday Holy Day of Obligation. Catholics fulfill their Sunday duty by attending Mass that weekend. In some other countries, the Thursday observance remains a day of obligation.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Celebrate at Home and Parish</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Attend Corpus Christi Sunday Mass and receive Communion in a state of grace.</li>
                <li>Join the procession if your parish offers one.</li>
                <li>Make a Holy Hour of Eucharistic adoration.</li>
                <li>Pray the Tantum Ergo or an Act of Spiritual Communion if homebound.</li>
                <li>Read John 6 and Catechism paragraphs 1322–1419 with your family.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Corpus Christi and the Eucharistic Revival</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="corpus-christi-feast-guide-catholic">Surveys show many U.S. Catholics do not believe in the Real Presence. Corpus Christi is the Church&apos;s annual answer: Christ is here, now, in every tabernacle. The feast invites renewed catechesis, adoration, and reverence at Communion — genuflecting, fasting one hour, and receiving on the tongue or hand with devotion.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "When is Corpus Christi 2026 in the United States?", answer: "In 2026, Corpus Christi is celebrated on Sunday, June 7, in the U.S. (transferred from the Thursday after Trinity Sunday, which would be June 4)." },
              { question: "Is Corpus Christi a Holy Day of Obligation in the USA?", answer: "No separate weekday obligation applies. Because the U.S. celebrates Corpus Christi on Sunday, Catholics attend Mass as on any Sunday." },
              { question: "What is a Corpus Christi procession?", answer: "A public procession in which the Blessed Sacrament is carried in a monstrance under a canopy while the faithful sing and pray — a witness to belief in the Real Presence." },
              { question: "What should I do if my parish has no procession?", answer: "Attend Mass, spend time in adoration if offered, pray the Tantum Ergo at home, and consider visiting a nearby parish that holds a procession." },
            ]} />
            <RelatedArticles currentSlug="corpus-christi-feast-guide-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Eucharistic faith</h3>
              <p className="text-text-muted mb-6">Get a personalized guide for Mass, prayer, and spiritual growth.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
