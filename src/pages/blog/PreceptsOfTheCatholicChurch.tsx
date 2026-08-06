import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PreceptsOfTheCatholicChurch() {
  return (
    <>
      <Helmet>
        <title>Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know | Guide Catholic</title>
        <meta name="description" content="The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. U.S. Catholic guide for adults and teens." />
        <meta name="keywords" content="precepts of the catholic church, 5 precepts catholic, catholic church laws, sunday mass obligation, easter duty confession communion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/precepts-of-the-catholic-church/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know" description="The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. U.S. Catholic guide for adults and teens." url="https://guidecatholic.com/blog/precepts-of-the-catholic-church/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Precepts of the Church", url: "https://guidecatholic.com/blog/precepts-of-the-catholic-church/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Precepts of the Church</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Doctrine</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know</h1>
              <p className="text-xl text-text-muted leading-relaxed">The precepts are the Church's minimum blueprint for a Catholic life — binding practices that keep believers connected to worship, sacraments, and the community of faith.</p>
            </header>
            <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center mb-10"><Scale className="w-24 h-24 text-blue-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The five precepts of the Catholic Church are minimum practices for the faithful: attend Mass on Sundays and holy days, confess sins at least once a year, receive Communion during Easter season, observe days of fasting and abstinence, and support the Church according to your means (CCC 2041–2043).</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Five Precepts (Catechism 2041–2043)</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-8">
                <li><strong>Attend Mass</strong> on Sundays and holy days of obligation and rest from servile labor.</li>
                <li><strong>Confess sins</strong> at least once a year (Easter duty).</li>
                <li><strong>Receive Holy Communion</strong> at least during the Easter season.</li>
                <li><strong>Observe days of fasting and abstinence</strong> established by the Church.</li>
                <li><strong>Provide for the needs of the Church</strong> according to one&apos;s ability.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precept 1: Sunday Mass in the United States</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="precepts-of-the-catholic-church">The Third Commandment requires keeping the Lord&apos;s Day holy. The Church binds Catholics to Mass every Sunday and on six holy days of obligation in the U.S.: Mary Mother of God (Jan 1), Ascension (observed Thursday or Sunday per diocese), Assumption (Aug 15), All Saints (Nov 1), Immaculate Conception (Dec 8), and Christmas (Dec 25). When they fall on Saturday or Monday, some are transferred or abrogated — check your diocese annually.</LinkedText>
              <p className="text-text leading-relaxed mb-6">Serious intentional absence from Mass without grave reason can be mortal sin. Illness, caring for infants, and lack of access qualify as excuses. Saturday evening Mass fulfills the Sunday obligation (vigil Mass).</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precepts 2 &amp; 3: Easter Duty</h2>
              <p className="text-text leading-relaxed mb-6">Catholics must receive Communion at least once during Easter time (from the First Sunday of Lent through Trinity Sunday) and confess serious sins at least once a year. Many U.S. parishes offer extra Confession times during Lent. If you are aware of mortal sin, you must confess before Communion (CCC 1385). The Easter duty is a minimum — monthly Confession is a strong Catholic tradition.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precept 4: Fasting &amp; Abstinence (U.S. Norms)</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Ash Wednesday and Good Friday</strong> — fasting (one full meal, two smaller) for adults 18–59; abstinence from meat for 14+.</li>
                <li><strong>All Fridays of Lent</strong> — abstinence from meat; some dioceses permit substitute penance on other Fridays of the year.</li>
                <li><strong>Fast before Communion</strong> — one hour from food and drink (except water and medicine); not part of the five precepts but universal law.</li>
              </ul>

              <QuizCTA title="How is your Catholic life?" description="Take the Catholic life assessment for a personalized guide to sacraments and spiritual growth." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precept 5: Supporting the Church</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">This means financial stewardship — weekly offering, diocesan appeals, Catholic schools and charities — and gifts of time and talent. The U.S. bishops teach proportional giving; many Catholics aim for tithing or sacrificial offertory. Supporting the Church is not paying for grace but sharing in the community that brings Christ to the world.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precepts vs. Commandments vs. Counsels</h2>
              <p className="text-text leading-relaxed mb-6">The Ten Commandments are divine law. The precepts are ecclesiastical law applying them to Catholic life in the Church. Evangelical counsels (poverty, chastity, obedience) are for those called to religious life — not binding on all laity. The precepts are a floor, not a ceiling; saints exceed them through love. In the United States, RCIA and Confirmation programs teach the precepts explicitly so adult converts know the baseline.</p>
              {/* data-expanded-depth */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What You Need to Know First</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. U.S. Catholic guide for adults and teens. American Catholics navigate civil law, diocesan policies, and parish practice — three layers that do not always say the same thing in the same words. When in doubt, your pastor and diocesan website are authoritative for sacramental questions.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Step-by-Step for U.S. Catholics</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Start with Sunday Mass and an honest examination of conscience. Gather required documents or information early if the guide involves sacraments, marriage, or RCIA. Call the parish office with specific questions rather than relying only on internet forums.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Requires vs. Encourages</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Canon law and liturgical law bind in some matters; pious customs encourage in others. Confusion often comes from treating optional devotions as obligations, or vice versa. This guide distinguishes what you must do from what helps you grow.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Talk to Your Pastor</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Complex cases — irregular marriage, mixed religion, health crises, or moral dilemmas — deserve personal pastoral counsel. Priests hear similar questions weekly. You will not surprise them; you will receive the mercy and clarity the Church exists to give.</LinkedText>

              {/* data-expanded-depth-2 */}
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Questions Catholics Ask Today</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Readers often search for Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know during major life transitions — marriage, illness, conversion, or parenting. The Church&apos;s answer is meant to bring peace and clarity, not anxiety. Bring specific questions to Confession or a parish appointment when your situation has unusual details.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Teaching Children and Grandchildren</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Passing on the faith in the United States means competing with screens, sports schedules, and secular assumptions. Explain this topic in simple language over the dinner table, connect it to Sunday Mass, and let children see you pray — example teaches more than lectures alone.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Related Devotions and Next Steps</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Use the related articles at the bottom of this page to continue learning. Pair reading with action: one prayer this week, one conversation with a Catholic friend, or one visit to a parish you have been avoiding. Knowledge without practice remains incomplete.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Trust and Perseverance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. U.S. Catholic guide for adults and teens. — the Christian life is a marathon. Some days faith feels bright; other days dry. Persevere in small habits: Sign of the Cross, Our Father, attendance at Mass. Grace builds on faithfulness, not perfection.</LinkedText>

            </div>
            <BlogFAQ faqs={[
              { question: "What are the precepts of the Catholic Church?", answer: "They are five minimum practices the Church sets for the faithful: Sunday Mass, annual Confession, Easter Communion, fasting/abstinence, and supporting the Church." },
              { question: "Are precepts the same as the Ten Commandments?", answer: "No. The Commandments are divine law. The precepts are ecclesiastical laws that apply the Commandments to Catholic life in the Church." },
              { question: "What is the Easter duty?", answer: "Catholics should receive Communion at least once during Easter time (from the First Sunday of Lent through Trinity Sunday) and confess serious sins at least once a year." },
              { question: "Do precepts bind under pain of mortal sin?", answer: "Serious violation of the Sunday Mass obligation or intentional neglect of Easter duties can be grave matter; full culpability requires knowledge and consent." },
              { question: "What are the holy days of obligation in the USA?", answer: "Six feasts: Jan 1, Ascension, Aug 15, Nov 1, Dec 8, and Dec 25 — with transfers or exceptions when they fall on certain weekdays; confirm with your diocese." },
              { question: "Do children have to follow all precepts?", answer: "Children are gradually formed. Full obligation applies at the age determined by canon law and diocesan policy — typically around the age of reason for some duties and teens for fasting." },,
              { question: "Is this article official Church teaching?", answer: "Guide Catholic explains Catholic faith in accessible language. For binding doctrinal or sacramental questions, consult the Catechism, your bishop, or parish priest." },
              { question: "How can I go deeper after reading this?", answer: "Attend Sunday Mass, pray daily, read Scripture, and explore related articles linked below. Consider spiritual direction or parish formation programs for ongoing growth." }
            ]} />
            <RelatedArticles currentSlug="precepts-of-the-catholic-church" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
