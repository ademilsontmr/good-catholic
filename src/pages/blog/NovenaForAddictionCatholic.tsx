import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function NovenaForAddictionCatholic() {
  return (
    <>
      <Helmet>
        <title>Novena for Addiction: 9-Day Catholic Prayer for Sobriety | Guide Catholic</title>
        <meta name="description" content="Novena for addiction — 9-day Catholic prayer for sobriety, freedom from drugs or alcohol, and healing. Full prayer text and step-by-step guide." />
        <meta name="keywords" content="novena for addiction, catholic prayer sobriety, novena alcohol drug recovery, prayer for addict catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/novena-for-addiction-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Novena for Addiction: 9-Day Catholic Prayer for Sobriety" description="Novena for addiction — 9-day Catholic prayer for sobriety, freedom from drugs or alcohol, and healing. Full prayer text and step-by-step guide." url="https://guidecatholic.com/blog/novena-for-addiction-catholic/" datePublished="2026-06-02" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Novena for Addiction", url: "https://guidecatholic.com/blog/novena-for-addiction-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Novena for Addiction</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer &amp; Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 2, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Novena for Addiction: 9-Day Catholic Prayer for Sobriety</h1>
              <p className="text-xl text-text-muted leading-relaxed">Addiction binds body and soul, but grace and professional help can set captives free. This nine-day novena unites sustained prayer with the recovery journey — for yourself or someone you love.</p>
            </header>
            <div className="aspect-video bg-slate-100 rounded-2xl flex items-center justify-center mb-10"><ShieldAlert className="w-24 h-24 text-slate-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Do Catholics Pray To for Addiction?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-addiction-catholic">
                Catholics facing addiction turn first to Christ, who proclaimed liberty to captives (Luke 4:18). Saint Monica prayed for decades for her son Augustine&apos;s conversion from a dissolute life — she is the patroness of those who pray for wayward children and loved ones trapped in destructive habits. Saint Maximilian Kolbe, who offered his life at Auschwitz, intercedes for those who feel powerless. Many parishes in the United States also connect the addicted with Catholic Charities, AA groups that meet in church basements, and recovery ministries. This novena invokes Christ and these saints together.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-addiction-catholic">
                A novena is a nine-day prayer modeled on the apostles&apos; nine days of waiting for the Holy Spirit (Acts 1:14). Recovery from addiction is often described as &quot;one day at a time&quot; — a novena adds nine days of intentional surrender to God&apos;s grace. It is not a substitute for detox, counseling, inpatient treatment, or twelve-step programs. The Catechism teaches that human freedom can be wounded by sin and healed by grace working through both prayer and human support (CCC 1730–1735).
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray a Novena for Addiction?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-addiction-catholic">
                The opioid crisis, alcohol dependence, and substance abuse affect millions of American families — including many in the pews every Sunday. Parents pray for addicted children; spouses pray for partners; the addicted pray for strength to stay sober one more day. A novena creates structure when willpower alone fails. It invites God into the daily battle, surrounds the person with intercession, and gives family members something concrete to do when they feel helpless. Saint Monica&apos;s decades of prayer remind us that perseverance matters.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and supporting loved ones through difficult seasons."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the Novena for Addiction — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Name your intention on day one.</strong> Specify whether you pray for yourself or for someone else — alcohol, opioids, gambling, or another compulsive behavior.
                </li>
                <li>
                  <strong>Pray at the same time each day.</strong> Morning offers strength for the day ahead; evening allows reflection on victories and temptations faced.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Make the Sign of the Cross, pray the novena prayer, and end with a Glory Be. If relapse occurs, begin again without shame.
                </li>
                <li>
                  <strong>Combine prayer with recovery resources.</strong> Attend AA, NA, or Catholic recovery groups; seek counseling; use medical treatment when needed. Grace works through these means.
                </li>
                <li>
                  <strong>Receive the Sacraments.</strong> Confession removes the weight of guilt; the Eucharist strengthens the soul. Many recovering Catholics find a monthly Confession essential.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer for Addiction</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Lord Jesus, you came to set captives free. You know the chains that bind [name or &quot;me&quot;] — the cravings, the shame, the cycles of relapse and regret. I ask your mercy and your strength for one more day of sobriety, one more day of hope.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Send your Holy Spirit to heal what is wounded, surround us with people who support recovery, and give courage to seek the help we need. Break the power of addiction and restore dignity to this life you created.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Saint Monica, who never stopped praying for your son, intercede for us. Saint Maximilian Kolbe, who offered your life for another, pray that we may choose life over death. Mary, Mother of Mercy, hold us close. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="novena-for-addiction-catholic">
                If addiction has led to legal trouble, consider pairing this novena with a novena for legal cases. When the situation feels impossible, Saint Jude is another powerful intercessor. Recovery is a lifelong journey — return to this prayer whenever you or a loved one needs nine days of sustained grace.
              </LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "Can prayer alone cure addiction?", answer: "No. The Church teaches that addiction involves physical, psychological, and spiritual dimensions. Prayer is essential but must be combined with professional treatment, counseling, support groups, and sometimes medical intervention. A novena supports recovery; it does not replace it." },
              { question: "Can I pray this novena for a family member who is addicted?", answer: "Yes. Saint Monica prayed for her son Augustine for years before his conversion. Name the person and the specific addiction in your intention. Many parents and spouses find this novena gives them hope when they feel powerless." },
              { question: "Should someone in recovery go to Confession during the novena?", answer: "Yes, when ready. The Sacrament of Reconciliation removes sin and restores grace. Many recovering Catholics confess regularly — monthly or whenever they fall — as part of their spiritual recovery alongside the novena." },
              { question: "Are there Catholic recovery groups in the United States?", answer: "Yes. Many parishes host AA or NA meetings, and organizations like Catholic in Recovery offer faith-based support. Catholic Charities also provides addiction services in many dioceses. Ask your parish priest for local resources." },
              { question: "What if the person relapses during the nine days?", answer: "Do not stop praying. Relapse is part of many recovery journeys. Continue the novena, encourage the person to return to treatment, and begin again without condemnation. God&apos;s mercy is greater than any fall." },
            ]} />
            <RelatedArticles currentSlug="novena-for-addiction-catholic" />
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
