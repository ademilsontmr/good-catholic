import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StAnthonyNovenaLostThings() {
  return (
    <>
      <Helmet>
        <title>St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text) | Guide Catholic</title>
        <meta name="description" content="St. Anthony Novena for lost things — 9-day Catholic prayer with full text to find missing items, keys, wallets, and documents." />
        <meta name="keywords" content="st anthony novena lost things, novena to find lost item, st anthony prayer 9 days, patron saint of lost things" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-anthony-novena-lost-things/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text)" description="St. Anthony Novena for lost things — 9-day Catholic prayer with full text to find missing items, keys, wallets, and documents." url="https://guidecatholic.com/blog/st-anthony-novena-lost-things/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Anthony Novena for Lost Things", url: "https://guidecatholic.com/blog/st-anthony-novena-lost-things/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Anthony Novena for Lost Things</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Anthony Novena for Lost Things: 9-Day Prayer (Full Text)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Saint Anthony of Padua is the saint Catholics invoke when something important goes missing — keys, wallets, documents, or even peace of mind. This guide explains who he is and how to pray the nine-day novena step by step.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Search className="w-24 h-24 text-amber-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Is Saint Anthony of Padua?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">
                Saint Anthony of Padua (1195–1231) was a Franciscan friar, gifted preacher, and Doctor of the Church. Born in Lisbon, Portugal, he joined the Franciscans and preached across Italy and France with remarkable eloquence. He is venerated as the patron saint of lost things — a title that arose from a story in which a novice stole his psalter and Saint Anthony prayed for its return. His feast day is June 13, one of the most popular saint days in the United States. Devotion to Saint Anthony for lost items is so widespread that even non-Catholics know the phrase &quot;Saint Anthony, Saint Anthony, please come around — something is lost and must be found.&quot;
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">
                A novena is a nine-day prayer, traditionally prayed in preparation for a feast day or in petition for a specific intention. The word comes from the Latin <em>novem</em> (nine), recalling the nine days the apostles and Mary spent in prayer between the Ascension and Pentecost (Acts 1:14). While many Catholics pray a quick &quot;St. Anthony, help me find this&quot; when something goes missing, the nine-day novena is a more sustained form of intercessory prayer — especially when the lost item is valuable or the search has been long.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray the St. Anthony Novena for Lost Things?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">
                Catholics pray to Saint Anthony not because he has magical power, but because he intercedes before God on our behalf. Lost keys before a morning commute, a missing wedding ring, a passport before international travel — these moments of panic are familiar to millions of American households. The novena turns frantic searching into prayerful trust. Many Catholics report finding the lost item during or shortly after the novena, while others receive the grace of peace even if the item is never recovered. Saint Anthony also helps restore what matters most: inner calm when material loss has disturbed your peace.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the St. Anthony Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Identify what is lost.</strong> Name the item specifically — car keys, phone, Social Security card, jewelry — and write it down on day one.
                </li>
                <li>
                  <strong>Begin on any day, or before June 13.</strong> Many Catholics start the novena nine days before Saint Anthony&apos;s feast day (June 13), but you can begin whenever something is lost.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Each day, make the Sign of the Cross and pray the novena prayer once. Consistency matters.
                </li>
                <li>
                  <strong>Search responsibly while you pray.</strong> Retrace your steps, check common spots, and ask others if they have seen the item. Prayer and practical action go together.
                </li>
                <li>
                  <strong>Offer thanks when the item is found.</strong> Many Catholics make a small donation to the poor or tell others about Saint Anthony&apos;s intercession — a tradition of gratitude that spreads devotion.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Traditional St. Anthony Prayer for Lost Things</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  &quot;St. Anthony, St. Anthony, please come around; something is lost and must be found.&quot;
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  St. Anthony, perfect imitator of Jesus, who received from God the special power of restoring lost things, grant that I may find [what is lost] that has been lost. At least restore to me peace of mind, the loss of which has afflicted me far more than the material loss. I ask this through Jesus Christ, our Lord. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-anthony-novena-lost-things">
                Saint Anthony is one of the most beloved saints in American Catholic parishes. If your lost item is tied to a deeper crisis — a legal document for a court case or medical records — combine this novena with appropriate professional help. When the situation feels impossible, many Catholics also turn to Saint Jude. St. Anthony, pray for us.
              </LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "Why is Saint Anthony the patron of lost things?", answer: "Tradition holds that a novice stole Saint Anthony&apos;s psalter (prayer book) and left the Franciscan community. Anthony prayed for its return, the novice restored it and returned to religious life, and devotion to Anthony for lost items spread from that story. The Church has not officially defined this title, but it is universally recognized among Catholics." },
              { question: "Does the St. Anthony novena have to be nine days?", answer: "The classic form is nine consecutive days. Many Catholics also pray a single St. Anthony prayer when something is lost and find it quickly. The nine-day novena is recommended when the item is valuable, the search has been lengthy, or you want sustained intercession." },
              { question: "Can I pray the St. Anthony novena for someone else?", answer: "Yes. Pray the novena for a family member who lost something important — a child&apos;s backpack, a spouse&apos;s wallet, or an elderly parent&apos;s hearing aids. Name the person and the item in your intention." },
              { question: "When is Saint Anthony&apos;s feast day?", answer: "June 13. Many Catholics begin the novena on June 4 to finish on his feast day. Parishes across the United States often bless bread (St. Anthony&apos;s Bread) and hold special Masses on this day." },
              { question: "What if I never find the lost item?", answer: "The prayer asks Saint Anthony to restore peace of mind even if the material item is not recovered. Many Catholics find that the novena brings acceptance and calm, which is itself a grace. Offer thanks for whatever peace you receive." },
            ]} />
            <RelatedArticles currentSlug="st-anthony-novena-lost-things" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">How Deep Is Your Catholic Faith?</h3>
              <p className="text-text-muted mb-6">Take our assessment and receive a personalized guide to growing in your knowledge of Catholic prayer and devotion.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
