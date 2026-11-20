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
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export default function PreceptsOfTheCatholicChurch() {
  return (
    <>
      <Helmet>
        <title>Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know | Guide Catholic</title>
        <meta name="description" content="The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. S." />
        <meta name="keywords" content="precepts of the catholic church, 5 precepts catholic, catholic church laws, sunday mass obligation, easter duty confession communion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/precepts-of-the-catholic-church/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Precepts of the Catholic Church: The 5 Laws Every Catholic Should Know" description="The five precepts of the Catholic Church explained — Mass on Sundays, Confession, Communion, fasting, and supporting the Church. S." url="https://guidecatholic.com/blog/precepts-of-the-catholic-church/" datePublished="2026-05-30" />
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
              <ArticleByline />
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
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Five Precepts (Catechism 2041–2043)</h2>
              <ol className="list-decimal list-inside text-text space-y-4 mb-8">
                <li><strong>Attend Mass</strong> on Sundays and holy days of obligation and rest from servile labor.</li>
                <li><strong>Confess sins</strong> at least once a year (Easter duty).</li>
                <li><strong>Receive Holy Communion</strong> at least during the Easter season.</li>
                <li><strong>Observe days of fasting and abstinence</strong> established by the Church.</li>
                <li><strong>Provide for the needs of the Church</strong> according to one&apos;s ability.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Where the Precepts Come From</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">Several precepts are older than the list itself. In 1215 the Fourth Lateran Council required every Catholic who had reached the age of discretion to confess at least once a year and to receive Communion at least at Easter, a law still known as the Easter duty. Catechisms of the Counter-Reformation era, including those of St. Peter Canisius and St. Robert Bellarmine, gathered such obligations into numbered lists of commandments of the Church.</LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">The Baltimore Catechism, used in American parishes for generations, listed six precepts. Alongside the five in today&apos;s Catechism it included observing the laws of the Church concerning marriage. The current Catechism lists five and describes them as positive laws meant to guarantee the indispensable minimum in the spirit of prayer and moral effort (CCC 2041). Marriage law remains in force in the Code of Canon Law; it is simply no longer counted among the precepts.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Canon Law Behind Each Precept</h2>

              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Sunday and holy days:</strong> canon 1247 obliges participation in Mass and rest from work that hinders worship; canon 1248 confirms that Mass anywhere in a Catholic rite, on the day or the evening before, satisfies it.</li>
                <li><strong>Annual confession:</strong> canon 989 binds every Catholic past the age of discretion to confess grave sins faithfully at least once a year.</li>
                <li><strong>Easter Communion:</strong> canon 920 sets the yearly Communion obligation and places it in the Easter season, though a just cause allows it to be fulfilled at another point in the year.</li>
                <li><strong>Fasting and abstinence:</strong> canons 1249 to 1253 set the days of penance and allow bishops&apos; conferences to adapt them.</li>
                <li><strong>Supporting the Church:</strong> canon 222 obliges the faithful to provide for the Church&apos;s needs for worship, apostolic and charitable works, and the support of its ministers.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precept 1: Sunday Mass in the United States</h2>
              <LinkedText className="text-text leading-relaxed mb-4" currentSlug="precepts-of-the-catholic-church">The Third Commandment requires keeping the Lord&apos;s Day holy. The Church binds Catholics to Mass every Sunday and on six holy days of obligation in the U.S.: Mary Mother of God (Jan 1), Ascension (observed Thursday or Sunday per diocese), Assumption (Aug 15), All Saints (Nov 1), Immaculate Conception (Dec 8), and Christmas (Dec 25). When they fall on Saturday or Monday, some are transferred or abrogated — check your diocese annually.</LinkedText>
              <p className="text-text leading-relaxed mb-6">Serious intentional absence from Mass without grave reason can be mortal sin. Illness, caring for infants, and lack of access qualify as excuses. Saturday evening Mass fulfills the Sunday obligation (vigil Mass).</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precepts 2 &amp; 3: Easter Duty</h2>
              <p className="text-text leading-relaxed mb-6">Catholics must receive Communion at least once during Easter time (from the First Sunday of Lent through Trinity Sunday) and confess serious sins at least once a year. Many U.S. parishes offer extra Confession times during Lent. If you are aware of mortal sin, you must confess before Communion (CCC 1385). The Easter duty is a minimum — monthly Confession is a strong Catholic tradition.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precept 4: Fasting &amp; Abstinence (U.S. Norms)</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Ash Wednesday and Good Friday</strong> — fasting (one full meal, two smaller) for adults 18–59; abstinence from meat for 14+.</li>
                <li><strong>All Fridays of Lent</strong> — abstinence from meat; outside Lent, the U.S. bishops (1966) allow another form of penance in place of meatless Fridays, though Friday remains a penitential day.</li>
                <li><strong>Fast before Communion</strong> — one hour from food and drink (except water and medicine); not part of the five precepts but universal law.</li>
              </ul>

              <QuizCTA title="How is your Catholic life?" description="Take the Catholic life assessment for a personalized guide to sacraments and spiritual growth." />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precept 5: Supporting the Church</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="precepts-of-the-catholic-church">This means financial stewardship — weekly offering, diocesan appeals, Catholic schools and charities — and gifts of time and talent. The U.S. bishops teach proportional giving; many Catholics aim for tithing or sacrificial offertory. Supporting the Church is not paying for grace but sharing in the community that brings Christ to the world.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Ages, Exemptions, and Dispensations</h2>

              <p className="text-text leading-relaxed mb-6">The precepts do not bind everyone in the same way. The law of abstinence applies from age 14; the law of fasting applies from 18 until the beginning of one&apos;s sixtieth year (canon 1252). People who are sick, pregnant, or doing heavy manual labor are excused from fasting when it would harm their health. The yearly confession obligation concerns grave sins, so someone without mortal sin is not strictly required to confess, though the Church warmly recommends confessing venial sins as well (CCC 1458).</p>

              <p className="text-text leading-relaxed mb-6">A pastor may dispense individual parishioners or families from the obligation of a holy day or a day of penance, or commute it to another pious work, for a just reason (canon 1245). Diocesan bishops can grant broader dispensations, as many did from the Sunday obligation during the COVID-19 pandemic. If a conflict arises, such as a work shift, travel, or illness, the simplest step is to ask your pastor rather than guess.</p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Precepts vs. Commandments vs. Counsels</h2>
              <p className="text-text leading-relaxed mb-6">The Ten Commandments are divine law. The precepts are ecclesiastical law applying them to Catholic life in the Church. Evangelical counsels (poverty, chastity, obedience) are for those called to religious life — not binding on all laity. The precepts are a floor, not a ceiling; saints exceed them through love. In the United States, RCIA and Confirmation programs teach the precepts explicitly so adult converts know the baseline.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "What are the precepts of the Catholic Church?", answer: "They are five minimum practices the Church sets for the faithful: Sunday Mass, annual Confession, Easter Communion, fasting/abstinence, and supporting the Church." },
              { question: "Are precepts the same as the Ten Commandments?", answer: "No. The Commandments are divine law. The precepts are ecclesiastical laws that apply the Commandments to Catholic life in the Church." },
              { question: "What is the Easter duty?", answer: "Catholics should receive Communion at least once during Easter time (from the First Sunday of Lent through Trinity Sunday) and confess serious sins at least once a year." },
              { question: "Do precepts bind under pain of mortal sin?", answer: "Serious violation of the Sunday Mass obligation or intentional neglect of Easter duties can be grave matter; full culpability requires knowledge and consent." },
              { question: "What are the holy days of obligation in the USA?", answer: "Six feasts: Jan 1, Ascension, Aug 15, Nov 1, Dec 8, and Dec 25 — with transfers or exceptions when they fall on certain weekdays; confirm with your diocese." },
              { question: "Do children have to follow all precepts?", answer: "Children are gradually formed. Full obligation applies at the age determined by canon law and diocesan policy — typically around the age of reason for some duties and teens for fasting." },
              { question: "Do I have to go to Confession every year if I have no mortal sins?", answer: "Canon 989 requires annual confession of grave sins. If you are not aware of any mortal sin, the strict obligation does not apply, but the Church strongly recommends regular confession of venial sins (CCC 1458)." },
              { question: "Who can dispense me from a precept?", answer: "Your pastor can dispense individuals or families from a holy day obligation or a day of penance for a just cause, or change it to another good work (canon 1245). Bishops can grant wider dispensations." },
              { question: "Why did the Baltimore Catechism list six precepts?", answer: "It counted observing the Church's marriage laws as a sixth precept. The current Catechism lists five, but those marriage laws still apply through canon law." },
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
