import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function MagnificatPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Magnificat Prayer: Full Text (Mary's Song) & When to Pray It | Guide Catholic</title>
        <meta name="description" content="The Magnificat (Luke 1:46–55) with full Catholic text in English and Latin, Mary's song of praise, and when Catholics pray it at Vespers and in daily devotion." />
        <meta name="keywords" content="magnificat prayer, magnificat full text, mary's song catholic, magnificat latin, my soul magnifies the lord" />
        <link rel="canonical" href="https://guidecatholic.com/blog/magnificat-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Magnificat Prayer: Full Text (Mary's Song) & When to Pray It" description="The Magnificat (Luke 1:46–55) with full Catholic text in English and Latin, Mary's song of praise, and when Catholics pray it at Vespers and in daily devotion." url="https://guidecatholic.com/blog/magnificat-prayer-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Magnificat", url: "https://guidecatholic.com/blog/magnificat-prayer-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Magnificat</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Magnificat Prayer: Full Text (Mary's Song) & When to Pray It</h1>
              <p className="text-xl text-text-muted leading-relaxed">My soul magnifies the Lord — the Magnificat is Mary's canticle from the Visitation, prayed every evening in the Liturgy of the Hours and beloved in American parish life.</p>
            </header>
            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10"><Music className="w-24 h-24 text-pink-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Magnificat is Mary&apos;s song of praise from Luke 1:46–55, prayed every evening in the Liturgy of the Hours. Catholics call it the Magnificat because the Latin Vulgate begins Magnificat anima mea Dominum — &quot;My soul magnifies the Lord.&quot;</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Magnificat (English — Luke 1:46–55)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-3">
                <p>My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked with favor on his lowly servant. From this day all generations will call me blessed: the Almighty has done great things for me, and holy is his Name.</p>
                <p>He has mercy on those who fear him in every generation. He has shown the strength of his arm, and has scattered the proud in their conceit. He has cast down the mighty from their thrones, and has lifted up the lowly. He has filled the hungry with good things, and the rich he has sent away empty.</p>
                <p>He has come to the help of his servant Israel, for he has remembered his promise of mercy, the promise he made to our fathers, to Abraham and his children forever.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Magnificat (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-2">
                <p>Magnificat anima mea Dominum, et exsultavit spiritus meus in Deo salvatore meo, quia respexit humilitatem ancillae suae. Ecce enim ex hoc beatam me dicent omnes generationes, quia fecit mihi magna, qui potens est, et sanctum nomen eius.</p>
                <p>Et misericordia eius a progenie in progenies timentibus eum. Fecit potentiam in brachio suo, dispersit superbos mente cordis sui; deposuit potentes de sede et exaltavit humiles; esurientes implevit bonis et divites dimisit inanes.</p>
                <p>Suscepit Israel puerum suum, recordatus misericordiae suae, sicut locutus est ad patres nostros, Abraham et semini eius in saecula.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Biblical Context: The Visitation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="magnificat-prayer-catholic">After the Annunciation, Mary traveled to visit her cousin Elizabeth, who was pregnant with John the Baptist. Elizabeth greeted Mary as &quot;mother of my Lord,&quot; and Mary responded with this canticle (Luke 1:39–56). The Church has prayed Mary&apos;s words ever since because they are inspired Scripture — not a human composition added later. The Magnificat echoes Hannah&apos;s song in 1 Samuel 2, showing how God reverses human expectations: the humble are lifted, the hungry fed, the proud scattered.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray the Magnificat</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Every day at Vespers (Evening Prayer)</strong> in the Liturgy of the Hours — priests, deacons, religious, and many lay people with the <em>Christian Prayer</em> book.</li>
                <li><strong>May and October</strong> — Marian months when parishes add Marian hymns after the Magnificat at public Vespers.</li>
                <li><strong>Feast of the Visitation</strong> (May 31) — the canticle is central to the Mass readings.</li>
                <li><strong>Family prayer at sunset</strong> — some U.S. Catholic families pray a simplified Evening Prayer including the Magnificat.</li>
                <li><strong>Through the Magnificat monthly missal</strong> — millions of American subscribers pray with the Church&apos;s daily readings.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Themes Catholics Meditate On</h2>
              <p className="text-text leading-relaxed mb-4"><strong>Humility:</strong> Mary calls herself God&apos;s &quot;lowly servant.&quot; Her greatness comes from grace, not self-promotion (Luke 1:48).</p>
              <p className="text-text leading-relaxed mb-4"><strong>Justice:</strong> God casts down the mighty and lifts the lowly — a prophetic word for every culture that ignores the poor.</p>
              <p className="text-text leading-relaxed mb-6"><strong>Fidelity:</strong> God remembers his promise to Abraham — salvation history is trustworthy. The Catechism cites the Magnificat in teaching Marian devotion and prayer (CCC 2617).</p>

              <QuizCTA title="Deepen Marian devotion" description="Take the Catholic life assessment for practical guidance on prayer and the liturgical year." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Magnificat at Home</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Sign of the Cross and a short silence.</li>
                <li>Optional: read the daily Gospel from USCCB or a missal.</li>
                <li>Pray the Magnificat slowly, pausing on one verse that strikes you.</li>
                <li>Add the Glory Be and a Hail Mary or intercessions for your family and parish.</li>
                <li>Close with the Sign of the Cross. Five to ten minutes is enough for beginners.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Magnificat vs. Hail Mary</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="magnificat-prayer-catholic">The Hail Mary combines the angel Gabriel&apos;s greeting and Elizabeth&apos;s words (&quot;Blessed are you among women&quot;) with a petition for Mary&apos;s intercession. The Magnificat is Mary&apos;s own extended prophecy — Scripture in her voice. Both honor the Mother of God; the Magnificat is sung praise, the Hail Mary is conversational prayer.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "What is the Magnificat?", answer: "It is Mary's song of praise in Luke 1:46–55 when she visits Elizabeth. The Church prays it daily at Vespers (Evening Prayer)." },
              { question: "Is the Magnificat the same as the Hail Mary?", answer: "No. The Hail Mary uses words from the Annunciation and Visitation greetings. The Magnificat is Mary's longer prophetic canticle from Scripture." },
              { question: "What does Magnificat mean?", answer: "It is the first word in the Latin Vulgate: Magnificat anima mea Dominum — My soul magnifies the Lord." },
              { question: "Can lay people pray the Magnificat at home?", answer: "Yes. It is a central part of Evening Prayer and can be prayed alone or with family without a priest." },
              { question: "Is the Magnificat sung or spoken?", answer: "Both. At solemn Vespers it is often chanted; in private devotion Catholics read it aloud or silently." },
              { question: "What is the Magnificat magazine?", answer: "Magnificat is a popular U.S. monthly missal containing Mass readings, Morning and Evening Prayer, and meditations — named after this canticle." },
            ]} />
            <RelatedArticles currentSlug="magnificat-prayer-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
