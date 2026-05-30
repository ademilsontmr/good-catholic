import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function LitanyOfLoretoCatholic() {
  return (
    <>
      <Helmet>
        <title>Litany of Loreto: Full Text & Meaning for Catholics | Guide Catholic</title>
        <meta name="description" content="The Litany of Loreto with full Catholic text, titles of Mary explained, and when to pray this Marian devotion." />
        <meta name="keywords" content="litany of loreto, litany of loreto full text, marian litany catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/litany-of-loreto-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Litany of Loreto: Full Text & Meaning for Catholics" description="The Litany of Loreto with full Catholic text, titles of Mary explained, and when to pray this Marian devotion." url="https://guidecatholic.com/blog/litany-of-loreto-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Litany of Loreto", url: "https://guidecatholic.com/blog/litany-of-loreto-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Litany of Loreto</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Litany of Loreto: Full Text & Meaning for Catholics</h1>
              <p className="text-xl text-text-muted leading-relaxed">The Litany of Loreto is the Church&apos;s most widely approved Marian litany — a cascade of titles that honor Mary and ask her intercession, prayed at shrines, in parishes, and in countless American homes.</p>
            </header>
            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10"><Star className="w-24 h-24 text-blue-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Litany of Loreto is an approved Catholic Marian litany invoking Mary under titles such as Mother of God, Virgin of virgins, and Help of Christians. The leader names each title and the people respond pray for us or have mercy on us.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-loreto-catholic">The Litany of Loreto is one of the Church&apos;s most beloved Marian prayers. A litany is a responsive prayer: the leader names an invocation and the people answer with a fixed refrain — here, &quot;pray for us&quot; or &quot;have mercy on us.&quot; This litany invokes the Blessed Virgin Mary under dozens of titles drawn from Scripture, tradition, and the faith of the saints.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Opening Invocations and Kyrie</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Lord, have mercy. <em>Christ, have mercy. Lord, have mercy.</em><br />
                  Christ, hear us. <em>Christ, graciously hear us.</em><br />
                  God the Father of heaven, <em>have mercy on us.</em><br />
                  God the Son, Redeemer of the world, <em>have mercy on us.</em><br />
                  God the Holy Spirit, <em>have mercy on us.</em><br />
                  Holy Trinity, one God, <em>have mercy on us.</em>
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">The litany begins by addressing the Holy Trinity, then turns to Mary. Each title is a meditation: you are not merely listing names but entering deeper into who Mary is in God&apos;s plan of salvation.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Marian Titles: Mother and Virgin</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Holy Mary, <em>pray for us.</em><br />
                  Holy Mother of God, <em>pray for us.</em><br />
                  Holy Virgin of virgins, <em>pray for us.</em><br />
                  Mother of Christ, <em>pray for us.</em><br />
                  Mother of divine grace, <em>pray for us.</em><br />
                  Mother of the Church, <em>pray for us.</em><br />
                  Mother of mercy, <em>pray for us.</em><br />
                  Mother of hope, <em>pray for us.</em><br />
                  Mother most pure, <em>pray for us.</em><br />
                  Mother most chaste, <em>pray for us.</em><br />
                  Mother inviolate, <em>pray for us.</em><br />
                  Mother undefiled, <em>pray for us.</em><br />
                  Mother most amiable, <em>pray for us.</em><br />
                  Mother most admirable, <em>pray for us.</em><br />
                  Mother of good counsel, <em>pray for us.</em><br />
                  Mother of our Creator, <em>pray for us.</em><br />
                  Mother of our Savior, <em>pray for us.</em><br />
                  Virgin most prudent, <em>pray for us.</em><br />
                  Virgin most venerable, <em>pray for us.</em><br />
                  Virgin most renowned, <em>pray for us.</em><br />
                  Virgin most powerful, <em>pray for us.</em><br />
                  Virgin most merciful, <em>pray for us.</em><br />
                  Virgin most faithful, <em>pray for us.</em>
                </p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-loreto-catholic">Titles such as &quot;Mother of good counsel&quot; and &quot;Mother of the Church&quot; reflect centuries of Catholic devotion. &quot;Mother of the Church&quot; was added by Pope Francis in 2020, underscoring Mary&apos;s maternal role toward all the baptized.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Marian Titles: Symbols and Intercession</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Mirror of justice, <em>pray for us.</em><br />
                  Seat of wisdom, <em>pray for us.</em><br />
                  Cause of our joy, <em>pray for us.</em><br />
                  Spiritual vessel, <em>pray for us.</em><br />
                  Vessel of honor, <em>pray for us.</em><br />
                  Singular vessel of devotion, <em>pray for us.</em><br />
                  Mystical rose, <em>pray for us.</em><br />
                  Tower of David, <em>pray for us.</em><br />
                  Tower of ivory, <em>pray for us.</em><br />
                  House of gold, <em>pray for us.</em><br />
                  Ark of the covenant, <em>pray for us.</em><br />
                  Gate of heaven, <em>pray for us.</em><br />
                  Morning star, <em>pray for us.</em><br />
                  Health of the sick, <em>pray for us.</em><br />
                  Refuge of sinners, <em>pray for us.</em><br />
                  Comforter of the afflicted, <em>pray for us.</em><br />
                  Help of Christians, <em>pray for us.</em>
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">Many of these titles come from the Litany of the Blessed Virgin Mary approved for the universal Church. &quot;Ark of the covenant&quot; recalls how Mary carried Christ within her as the Old Testament ark carried God&apos;s presence. &quot;Help of Christians&quot; is especially associated with Our Lady of Help and the Battle of Lepanto.</p>

              <QuizCTA title="Want a stronger Marian life?" description="Take the Catholic life assessment for practical steps on prayer, the Rosary, and Marian devotions." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Queen of Heaven: The Closing Titles</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Queen of Angels, <em>pray for us.</em><br />
                  Queen of Patriarchs, <em>pray for us.</em><br />
                  Queen of Prophets, <em>pray for us.</em><br />
                  Queen of Apostles, <em>pray for us.</em><br />
                  Queen of Martyrs, <em>pray for us.</em><br />
                  Queen of Confessors, <em>pray for us.</em><br />
                  Queen of Virgins, <em>pray for us.</em><br />
                  Queen of all Saints, <em>pray for us.</em><br />
                  Queen conceived without original sin, <em>pray for us.</em><br />
                  Queen assumed into heaven, <em>pray for us.</em><br />
                  Queen of the most holy Rosary, <em>pray for us.</em><br />
                  Queen of peace, <em>pray for us.</em>
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-lg">
                  Lamb of God, who take away the sins of the world, <em>spare us, O Lord.</em><br />
                  Lamb of God, who take away the sins of the world, <em>graciously hear us, O Lord.</em><br />
                  Lamb of God, who take away the sins of the world, <em>have mercy on us.</em><br /><br />
                  Pray for us, O holy Mother of God, <em>that we may be made worthy of the promises of Christ.</em><br /><br />
                  Let us pray: Grant, we beseech thee, O Lord God, that we thy servants may enjoy perpetual health of mind and body, and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ our Lord. Amen.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History and Approval of the Litany</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-loreto-catholic">The Litany of Loreto takes its name from the Shrine of the Holy House in Loreto, Italy, where devotion to Our Lady has flourished for centuries. Pope Sixtus V approved it for public use in 1587. It remains the only Marian litany approved for general recitation in the Roman Rite and is included in the Roman Ritual.</LinkedText>
              <p className="text-text leading-relaxed mb-6">American Catholics encounter it at May crownings, Marian processions, Forty Hours devotions, and before Benediction. Because it is long, parishes often sing it or pray it in two voices — one side leading, the other responding.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When and How to Pray the Litany of Loreto</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>During May and October, traditional months of Mary.</li>
                <li>Before or after the Rosary, especially on Marian feast days.</li>
                <li>At Eucharistic adoration, funerals, or times of public prayer for the Church.</li>
                <li>In family prayer when seeking Mary&apos;s intercession for a specific need.</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">Pray slowly. Pause on titles that speak to your situation — &quot;Refuge of sinners&quot; in confession, &quot;Health of the sick&quot; at a bedside, &quot;Queen of peace&quot; in conflict. The litany teaches that Mary&apos;s motherhood extends to every circumstance of Christian life.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Do Catholics Worship Mary in This Prayer?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="litany-of-loreto-catholic">No. Every invocation ends with &quot;pray for us&quot; — a request for intercession, not adoration. Worship belongs to God alone. The litany opens and closes with prayers to the Trinity and to Christ the Lamb of God, keeping Marian honor within proper Catholic bounds.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "Is the Litany of Loreto an official Catholic prayer?", answer: "Yes. Pope Sixtus V approved the Litany of Loreto for public use in 1587. It is the only Marian litany approved for general recitation in the Roman Rite and appears in the Roman Ritual." },
              { question: "Why is it called the Litany of Loreto?", answer: "It is named after the Shrine of the Holy House in Loreto, Italy, a major Marian pilgrimage site where this litany has been prayed for centuries." },
              { question: "How long does the Litany of Loreto take to pray?", answer: "Recited at a moderate pace, the full litany takes about ten to fifteen minutes. Parishes sometimes sing it or pray selected sections." },
              { question: "Can I pray the Litany of Loreto alone?", answer: "Yes. Although it is designed as a responsive prayer, you can pray both parts yourself or use a recording or app that leads the invocations." },
              { question: "Is the Litany of Loreto approved by the Church?", answer: "Yes. It is one of the litanies approved for public and private devotion and is widely used in parishes, shrines, and May processions." },
              { question: "How long does the Litany of Loreto take?", answer: "About ten to fifteen minutes when prayed at a moderate pace with all titles." }
            ]} />
            <RelatedArticles currentSlug="litany-of-loreto-catholic" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Catholic devotion</h3>
              <p className="text-text-muted mb-6">Get a personalized guide for prayer and spiritual growth.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
