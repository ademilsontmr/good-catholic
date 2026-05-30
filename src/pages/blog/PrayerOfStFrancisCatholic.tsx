import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PrayerOfStFrancisCatholic() {
  return (
    <>
      <Helmet>
        <title>Prayer of St. Francis (Make Me a Channel): Full Text & Meaning | Guide Catholic</title>
        <meta name="description" content="The Prayer of St. Francis — Make me a channel of your peace — with full text, meaning line by line, and how Catholics pray it for peace, service, and daily life." />
        <meta name="keywords" content="prayer of st francis, make me a channel of your peace, st francis prayer full text, peace prayer catholic, where there is hatred let me sow love" />
        <link rel="canonical" href="https://guidecatholic.com/blog/prayer-of-st-francis-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Prayer of St. Francis (Make Me a Channel): Full Text & Meaning" description="The Prayer of St. Francis — Make me a channel of your peace — with full text, meaning line by line, and how Catholics pray it for peace, service, and daily life." url="https://guidecatholic.com/blog/prayer-of-st-francis-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Prayer of St. Francis", url: "https://guidecatholic.com/blog/prayer-of-st-francis-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Prayer of St. Francis</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Prayer of St. Francis (Make Me a Channel): Full Text & Meaning</h1>
              <p className="text-xl text-text-muted leading-relaxed">Lord, make me an instrument of your peace — this prayer is loved across the United States in parishes, schools, and times of crisis, even though its authorship is debated.</p>
            </header>
            <div className="aspect-video bg-lime-100 rounded-2xl flex items-center justify-center mb-10"><Bird className="w-24 h-24 text-lime-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Prayer of St. Francis (&quot;Lord, make me an instrument of your peace&quot;) asks to sow love, pardon, faith, hope, light, and joy amid conflict. Widely attributed to Francis though likely modern; Catholics pray it for reconciliation, leadership, and peacemaking.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayer of St. Francis (Full Text)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed space-y-3">
                <p>Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy.</p>
                <p>O Divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, in pardoning that we are pardoned, and in dying that we are born to eternal life. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Line-by-Line Meaning for Catholics</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Instrument of your peace</strong> — You ask God to use you, not to glorify yourself. Peace is a fruit of the Holy Spirit (Galatians 5:22).</li>
                <li><strong>Sow love… pardon… faith… hope… light… joy</strong> — Each pair names a wound in the world and the Gospel remedy you bring through action, not slogans.</li>
                <li><strong>Not so much seek to be consoled as to console</strong> — The heart turns outward; this mirrors Christ who came to serve (Mark 10:45).</li>
                <li><strong>In giving that we receive</strong> — Not prosperity theology, but the paradox of the Cross: self-gift opens the soul to grace.</li>
                <li><strong>In dying… born to eternal life</strong> — Baptismal language: dying to sin and living for God (Romans 6:4).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Did St. Francis Write This Prayer?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-of-st-francis-catholic">Historians trace the Peace Prayer to a French Catholic newspaper in 1912; it circulated in Europe and reached the United States by the mid-20th century. St. Francis of Assisi (1181–1226) did write the authentic <em>Canticle of the Sun</em> in Italian — a hymn praising God through creation. The Peace Prayer reflects Franciscan themes — poverty of spirit, reconciliation, love of neighbor — which is why popular devotion attached his name. The Church does not treat authorship as a reason to avoid the prayer; its theology is sound.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Catholics Pray It in the United States</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Opening of parish council meetings, school assemblies, and peace vigils.</li>
                <li>After natural disasters, wars, or national tragedies — often at interfaith services.</li>
                <li>Before difficult conversations in marriage, family, or workplace.</li>
                <li>At Franciscan friary devotions and St. Francis parish feast days (October 4).</li>
                <li>During Eucharistic adoration when praying for unity in a divided community.</li>
              </ul>

              <QuizCTA title="Grow in peace and charity" description="Take the Catholic life assessment for a personalized spiritual growth plan." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Make the Prayer Practical</h2>
              <p className="text-text leading-relaxed mb-4">Praying the text once is easy; living it is the work of a lifetime. Catholics often choose <strong>one line per week</strong> as a focus: if you choose &quot;where there is injury, pardon,&quot; you might reconcile with a estranged relative, forgive a coworker in confession, or refuse to replay old grievances online.</p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="prayer-of-st-francis-catholic">The prayer pairs beautifully with the Corporal and Spiritual Works of Mercy — feeding the hungry is sowing love; bearing wrongs patiently is choosing pardon over retaliation. Franciscan Third Order members and many lay Catholics use it as a morning offering before work.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Peace Prayer vs. Canticle of the Sun</h2>
              <p className="text-text leading-relaxed mb-6">The <em>Canticle of Brother Sun</em> begins &quot;Most High, all-powerful, good Lord…&quot; and praises God through brother Sun, sister Moon, and sister Death. It is one of the first great poems in the Italian language and was composed near the end of Francis&apos;s life. The Peace Prayer is shorter, structured as petition, and oriented toward interpersonal conflict. Both belong in Catholic devotion but serve different moments — praise of creation versus mission in a broken world.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "Did St. Francis of Assisi write this prayer?", answer: "The prayer first appeared in French in the early 20th century. It reflects Franciscan spirituality but was likely written later and attributed to Francis through popular devotion." },
              { question: "Is the Peace Prayer Catholic?", answer: "Yes. Its content is fully orthodox and widely used in Catholic churches, schools, and prayer groups in the U.S. and worldwide." },
              { question: "When should I pray it?", answer: "Any time — especially when facing conflict, before service work, at the start of the day, or when asking for a missionary heart." },
              { question: "Is this the same as the Canticle of the Sun?", answer: "No. The Canticle of Brother Sun is an authentic work of St. Francis in Italian. The Peace Prayer is a separate modern text." },
              { question: "Can non-Catholics pray the Peace Prayer?", answer: "Yes. It is used ecumenically because it focuses on Christlike virtues. Catholics pray it in the name of the Trinity and as disciples of Jesus." },
              { question: "Is the Prayer of St. Francis in the Mass?", answer: "It is not one of the official Mass prayers, but priests and parishes sometimes use it as a post-Communion meditation or closing prayer." },
            ]} />
            <RelatedArticles currentSlug="prayer-of-st-francis-catholic" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
