import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StGerardNovenaPregnancy() {
  return (
    <>
      <Helmet>
        <title>St. Gerard Novena for Pregnancy: 9-Day Prayer for Safe Delivery | Guide Catholic</title>
        <meta name="description" content="St. Gerard Novena for pregnancy — 9-day Catholic prayer for mothers, safe delivery, and healthy babies. Full prayer text and step-by-step guide." />
        <meta name="keywords" content="st gerard novena pregnancy, novena for safe delivery, st gerard majella prayer, patron saint of expectant mothers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-gerard-novena-pregnancy/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Gerard Novena for Pregnancy: 9-Day Prayer for Safe Delivery" description="St. Gerard Novena for pregnancy — 9-day Catholic prayer for mothers, safe delivery, and healthy babies. Full prayer text and step-by-step guide." url="https://guidecatholic.com/blog/st-gerard-novena-pregnancy/" datePublished="2026-06-02" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Gerard Novena for Pregnancy</span>
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
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Gerard Novena for Pregnancy: 9-Day Prayer for Safe Delivery</h1>
              <p className="text-xl text-text-muted leading-relaxed">Saint Gerard Majella is the patron of expectant mothers and safe childbirth — a devotion cherished by Catholic families across the United States. This guide explains who he is and how to pray the nine-day novena.</p>
            </header>
            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10"><Baby className="w-24 h-24 text-pink-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Who Is Saint Gerard Majella?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-gerard-novena-pregnancy">
                Saint Gerard Majella (1726–1755) was an Italian Redemptorist brother known for extraordinary holiness, humility, and miracles during his short life. He died at age twenty-nine and was canonized in 1904. He is venerated as the patron saint of expectant mothers, childbirth, and unborn children. His feast day is October 16. Devotion to Saint Gerard is especially strong in the United States, where the National Shrine of Saint Gerard Majella at St. Lucy&apos;s Church in Newark, New Jersey, distributes thousands of holy cards and medals to expectant mothers each year. He is also invoked by couples trying to conceive, though Saint Gerard is most associated with pregnancy and delivery.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Is a Novena?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-gerard-novena-pregnancy">
                A novena is a nine-day prayer rooted in the apostles&apos; nine days of waiting for the Holy Spirit after the Ascension (Acts 1:14). The word comes from the Latin <em>novem</em>, meaning nine. Expectant mothers, husbands, grandparents, and godparents often pray a novena to Saint Gerard during the third trimester, before a scheduled C-section, or when a pregnancy is considered high-risk. It is a way of entrusting both mother and child to God through the intercession of a saint who understood suffering and trust.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why Pray the St. Gerard Novena for Pregnancy?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-gerard-novena-pregnancy">
                Pregnancy brings joy and anxiety in equal measure — especially in a medical system where mothers navigate prenatal appointments, ultrasounds, and birth plans. The St. Gerard novena asks for safe delivery, healthy outcomes, and peace of heart. It does not replace prenatal care or obstetric medicine; the Church teaches that grace works through natural means. But countless American Catholic families testify that Saint Gerard&apos;s intercession brought comfort during difficult pregnancies, complications, or long labors. Husbands and birth partners can pray the novena alongside the expectant mother.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide to growing in your prayer life and devotion to the saints."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray the St. Gerard Novena — Step by Step</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Name your intention on day one.</strong> Specify the mother&apos;s name, due date, or particular concern — high-risk pregnancy, previous loss, or anxiety about delivery.
                </li>
                <li>
                  <strong>Begin on any day, or before October 16.</strong> Many start the novena on October 7 to finish on Saint Gerard&apos;s feast day. You can also begin in the final weeks of pregnancy.
                </li>
                <li>
                  <strong>Pray for nine consecutive days.</strong> Each day, make the Sign of the Cross and pray the novena prayer once. Couples may pray together each evening.
                </li>
                <li>
                  <strong>Combine prayer with prenatal care.</strong> Keep all medical appointments, follow your obstetrician&apos;s guidance, and discuss any concerns with your healthcare team.
                </li>
                <li>
                  <strong>Entrust the outcome to God.</strong> Ask for a safe delivery and healthy baby, but surrender to God&apos;s will. Saint Gerard himself accepted suffering with trust.
                </li>
              </ol>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">The Traditional St. Gerard Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">
                  O great Saint Gerard, beloved servant of Jesus Christ, perfect imitator of your meek and humble Savior, and true child of Mary, I thank you for the privilege of calling upon you at this time.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Saint Gerard, intercede for me and obtain from God the grace I need: that [name] may bear her pregnancy with patience and deliver her child safely. Protect mother and child from every harm. Give wisdom to her doctors and peace to her heart. If it is God&apos;s will, grant a healthy birth and a joyful welcome for this new life.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  I ask this through Jesus Christ, our Lord, who lives and reigns with the Father and the Holy Spirit, one God, forever and ever. Amen.
                </p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-gerard-novena-pregnancy">
                Couples still trying to conceive may also pray a novena for fertility, invoking Saints Joachim and Anne alongside Saint Gerard. After delivery, many families offer a Mass of thanksgiving or share their testimony to encourage other expectant mothers. Saint Gerard, pray for us.
              </LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "Is Saint Gerard only for pregnancy, or also for fertility?", answer: "Saint Gerard is primarily invoked as patron of expectant mothers and safe childbirth. Couples trying to conceive often pray to him as well, but many also use a dedicated fertility novena invoking Saints Joachim and Anne. Both devotions are common in US Catholic parishes." },
              { question: "When should I start the St. Gerard novena during pregnancy?", answer: "You can start at any point — many begin in the third trimester, before a scheduled delivery or C-section, or when complications arise. Some begin nine days before October 16 (Saint Gerard&apos;s feast day). There is no wrong time to start." },
              { question: "Can my husband or family pray the St. Gerard novena for me?", answer: "Yes. Husbands, grandparents, godparents, and friends often pray this novena for an expectant mother. Name her and her intention in the prayer. Intercessory prayer is a hallmark of Catholic family life." },
              { question: "Does the St. Gerard novena replace prenatal medical care?", answer: "No. The Church teaches that prayer and medical care work together. Continue all prenatal appointments, follow your obstetrician&apos;s advice, and treat the novena as spiritual support alongside responsible healthcare." },
              { question: "Where is the National Shrine of Saint Gerard in the United States?", answer: "The National Shrine of Saint Gerard Majella is located at St. Lucy&apos;s Church in Newark, New Jersey. It is a major center of devotion for expectant mothers and distributes holy cards, medals, and prayer resources nationwide." },
            ]} />
            <RelatedArticles currentSlug="st-gerard-novena-pregnancy" />
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
