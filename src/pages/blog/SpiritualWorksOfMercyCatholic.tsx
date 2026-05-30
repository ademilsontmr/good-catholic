import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SpiritualWorksOfMercyCatholic() {
  return (
    <>
      <Helmet>
        <title>Spiritual Works of Mercy: Full Catholic List & Examples | Guide Catholic</title>
        <meta name="description" content="The seven spiritual works of mercy — counsel, instruct, admonish, comfort, forgive, bear patiently, and pray for the living and dead. Catholic guide with U.S. examples." />
        <meta name="keywords" content="spiritual works of mercy, 7 spiritual works of mercy, works of mercy catholic, instruct the ignorant, comfort the afflicted" />
        <link rel="canonical" href="https://guidecatholic.com/blog/spiritual-works-of-mercy-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Spiritual Works of Mercy: Full Catholic List & Examples" description="The seven spiritual works of mercy — counsel, instruct, admonish, comfort, forgive, bear patiently, and pray for the living and dead. Catholic guide with U.S. examples." url="https://guidecatholic.com/blog/spiritual-works-of-mercy-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Spiritual Works of Mercy", url: "https://guidecatholic.com/blog/spiritual-works-of-mercy-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Spiritual Works of Mercy</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Spiritual Life</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />16 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Spiritual Works of Mercy: Full Catholic List & Examples</h1>
              <p className="text-xl text-text-muted leading-relaxed">Mercy is not only food and clothing. The Church also names seven spiritual works that heal minds, consciences, and souls — often quietly, in family and parish life.</p>
            </header>
            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10"><HeartHandshake className="w-24 h-24 text-purple-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The seven spiritual works of mercy help others in their spiritual needs — counseling the doubtful, instructing the ignorant, comforting the afflicted, forgiving offenses, and praying for the living and dead. They complement the corporal works by healing minds, consciences, and souls.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Spiritual Works of Mercy</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li><strong>Counsel the doubtful</strong></li>
                <li><strong>Instruct the ignorant</strong></li>
                <li><strong>Admonish the sinner</strong></li>
                <li><strong>Comfort the afflicted</strong></li>
                <li><strong>Forgive offenses</strong></li>
                <li><strong>Bear wrongs patiently</strong></li>
                <li><strong>Pray for the living and the dead</strong></li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Each Work in Daily Catholic Life</h2>
              <ul className="list-disc list-inside text-text space-y-4 mb-6">
                <li><strong>Counsel the doubtful</strong> — Answer a friend&apos;s questions about faith with patience; refer serious crises to a priest. RCIA sponsors walk with converts through doubt.</li>
                <li><strong>Instruct the ignorant</strong> — Catechists, Catholic school teachers, and parents teaching the Baltimore Catechism or parish curriculum live this work. Sharing a trustworthy article counts too.</li>
                <li><strong>Admonish the sinner</strong> — Fraternal correction done privately, lovingly, and for the person&apos;s salvation (Matthew 18:15). Not gossip, not public shaming.</li>
                <li><strong>Comfort the afflicted</strong> — Grief ministry, sitting with the bereaved, visiting after miscarriage or job loss. Presence often matters more than speeches.</li>
                <li><strong>Forgive offenses</strong> — Letting go of grudges in marriage, family, and parish life; seeking reconciliation in Confession.</li>
                <li><strong>Bear wrongs patiently</strong> — Enduring injustice without bitterness when correction fails; imitating Christ silent before accusers (1 Peter 2:23).</li>
                <li><strong>Pray for the living and the dead</strong> — Mass intentions, Rosaries for souls in purgatory, intercessory prayer lists in bulletins.</li>
              </ul>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-works-of-mercy-catholic">RCIA sponsors, religious-education catechists, grief ministers, and parents who teach the faith at home live these works daily. Spiritual mercy requires truth and kindness together — never gossip disguised as correction.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Admonishing the Sinner: Catholic Guidelines</h2>
              <p className="text-text leading-relaxed mb-6">The Catechism teaches that fraternal correction is a work of mercy when motivated by love (CCC 2447). Speak to the person alone first; choose the right moment; examine your own faults. In the U.S., &quot;calling out&quot; culture often humiliates — Catholic admonition seeks repentance and communion restored. When sin is public and grave, bishops and priests bear a teaching duty; lay people follow their lead and parish norms.</p>

              <QuizCTA title="Strengthen your Catholic witness" description="Take the Catholic life assessment for guidance on virtue, prayer, and parish involvement." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">U.S. Parish Opportunities</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Become an RCIA sponsor or catechist — formation is provided by most dioceses.</li>
                <li>Join bereavement or Stephen Ministry teams after training.</li>
                <li>Commit to a weekly holy hour for priests, youth, and the suffering.</li>
                <li>Enroll children in parish religious education — instructing begins at home.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Fourteen Works Together</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-works-of-mercy-catholic">Tradition lists seven corporal and seven spiritual works — fourteen total. Lenten parish programs often challenge families to check off one work per week. Pope St. John Paul II and Pope Francis both emphasized that mercy is the name of God and the face the Church must show the world.</LinkedText>
            </div>
            <BlogFAQ faqs={[
              { question: "What are the spiritual works of mercy?", answer: "Seven acts that help others in spiritual needs — from teaching the faith to forgiving injuries and praying for souls." },
              { question: "Is admonishing the sinner the same as judging?", answer: "Fraternal correction is done with humility, love, and appropriate discretion — not to humiliate but to help someone return to God." },
              { question: "How do I instruct the ignorant?", answer: "Through catechesis, RCIA, answering sincere questions, sharing Catholic resources, and living the faith credibly." },
              { question: "Do spiritual works replace corporal works?", answer: "No. Catholics are called to both. They are two halves of one mercy." },
              { question: "What does bear wrongs patiently mean?", answer: "Enduring injustice or insult without revenge when loving correction is not possible — trusting God as judge while remaining charitable." },
              { question: "How do I pray for the dead?", answer: "Offer Mass intentions, pray the Rosary or Eternal Rest for souls in purgatory, and remember deceased family at every Mass you attend." },
            ]} />
            <RelatedArticles currentSlug="spiritual-works-of-mercy-catholic" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
