import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { CopyPrayerButton, DailyPrayersHubLink, SharePage } from "@/components/blog/DailyPrayerExtras";
import { cboLinkClass, CBO_BIBLE } from "@/lib/catholicBibleOnlineLinks";

const PAGE = "https://guidecatholic.com/blog/prayer-of-trust-in-god/";
const TITLE = "Catholic Prayer of Trust in God for Anxious Days";
const DESCRIPTION =
  "A Catholic prayer of trust for days you cannot control, with Psalm 23, the Divine Mercy aspiration, and no promise of a particular outcome.";

const ORIGINAL = `Father, I do not see the whole of this day.
I place in your hands the work I cannot finish, the people I cannot protect, and the future I cannot control.
I trust you not because I feel strong, but because you are faithful.
Jesus, I trust in you. Amen.`;

export default function PrayerOfTrustInGod() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE} datePublished="2026-10-20" dateModified="2026-10-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Daily Catholic Prayers", url: "https://guidecatholic.com/blog/daily-catholic-prayers/" },
          { name: "Prayer of Trust in God", url: PAGE },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/daily-catholic-prayers/" className="hover:text-accent">Daily Catholic Prayers</Link>
              <span aria-hidden="true">/</span>
              <span className="text-text">Prayer of Trust in God</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" />October 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                A Catholic prayer of trust in God
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Trust is what you pray when the outcome is not yours to arrange. It is not a feeling you have to manufacture before God will listen.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-sky-800" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                This page is for the morning you cannot see through, the diagnosis you cannot reverse, and the work you cannot finish. Trust asks God to be God. It does not inform him of the result you have already chosen.
              </p>
            </div>
            <BlogArticleAd slot="1906776249" />
            <SharePage title={TITLE} url={PAGE} />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church means by trust</h2>
            <p className="text-text leading-relaxed mb-6">
              Christian trust is faith that God is faithful, including when his answer is not the one you wrote. It is not denial. You still make the doctor’s appointment, tell the truth at work, and protect the child in your care. Those actions are part of trust, not a lack of it. What trust refuses is the illusion that worry is a form of control.
            </p>
            <p className="text-text leading-relaxed mb-6">
              The shepherd psalm has carried this prayer for centuries. In the numbering most English Bibles use, it is Psalm 23. In the Douay-Rheims it is Psalm 22, and the opening reads “The Lord ruleth me: and I shall want nothing.” The familiar line “The Lord is my shepherd” is the same verse in later translations. Read the psalms in the{" "}
              <a href={`${CBO_BIBLE}psalms/`} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Psalms at Catholic Bible Online</a>{" "}
              and stay with one image: a path, a table, a dark valley. You do not need to finish a commentary.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Two traditional ways of saying it</h2>
            <p className="text-text leading-relaxed mb-6">
              Charles de Foucauld’s{" "}
              <Link to="/blog/prayer-of-abandonment-catholic/" className="text-accent font-semibold underline underline-offset-2">Prayer of Abandonment</Link>{" "}
              (“Father, I abandon myself into your hands”) is a classic of this kind of trust. He was killed in 1916. The prayer belongs to the Church’s devotional life. It is not a magic formula.
            </p>
            <p className="text-text leading-relaxed mb-6">
              “Jesus, I trust in You” is the prayer painted on the Divine Mercy image that{" "}
              <Link to="/blog/saint-faustina-kowalska/" className="text-accent font-semibold underline underline-offset-2">Saint Faustina Kowalska</Link>{" "}
              was asked to spread. The Polish line is <em>Jezu, ufam Tobie</em>. It is an aspiration, a sentence you can repeat. It belongs to that devotion. It does not replace the sacraments, and it does not guarantee healing, safety, or a change in fortune. The{" "}
              <Link to="/blog/divine-mercy-chaplet/" className="text-accent font-semibold underline underline-offset-2">Divine Mercy Chaplet</Link>{" "}
              is the longer prayer of the same devotion, if you want more than one sentence.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">An original prayer for a day you cannot steer</h2>
            <p className="text-text leading-relaxed mb-4">
              The prayer below was written for this guide. The last line uses the Divine Mercy aspiration. The sentences before it are editorial, not an official text and not a quotation from Faustina’s diary.
            </p>
            <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Original prayer from Guide Catholic</p>
              <p className="whitespace-pre-line text-text leading-relaxed font-medium">{ORIGINAL}</p>
              <CopyPrayerButton text={ORIGINAL} />
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A beginner’s way to pray it</h2>
            <p className="text-text leading-relaxed mb-6">
              In the morning, after the{" "}
              <Link to="/blog/morning-offering-prayer/" className="text-accent font-semibold underline underline-offset-2">Morning Offering</Link>,
              name the one thing you are trying to control. Say the prayer once. Then do the next honest task. If anxiety returns at noon, repeat only “Jesus, I trust in You.” You do not need a new speech.
            </p>
            <p className="text-text leading-relaxed mb-6">
              At night, if the thing you feared did not happen, thank God without turning the relief into a rule. If it did happen, trust is still available. It will sound different. It may sound like the{" "}
              <Link to="/blog/night-prayer-catholic/" className="text-accent font-semibold underline underline-offset-2">night prayer</Link>{" "}
              and an Act of Contrition if the day also included your own sin. Fear and guilt are not the same problem. Do not treat them as one.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Trust is not a substitute for help you need from a physician, a counselor, or a friend. Pray, and also make the appointment. God is not honored by neglect dressed up as faith.
            </p>

            <DailyPrayersHubLink />
            <QuizCTA />
            <BlogFAQ
              htmlAnswers
              faqs={[
                {
                  question: "What is a Catholic prayer of trust in God?",
                  answer: "It is a prayer that places a person, a task, or a future you cannot control into God’s hands. Traditional examples include the shepherd psalm (Psalm 23 in most English Bibles), Charles de Foucauld’s Prayer of Abandonment, and the aspiration “Jesus, I trust in You.”",
                },
                {
                  question: "Does trusting God mean I will get what I asked for?",
                  answer: "No. Trust is confidence in God’s faithfulness, not a guarantee of health, money, safety, or a chosen result. You still take the ordinary means that love and prudence require.",
                },
                {
                  question: "What if I do not feel trusting?",
                  answer: "Pray the words anyway, and tell God that the feeling is missing. Trust is an act, not a mood you must produce before you are allowed to speak.",
                },
                {
                  question: "How is this different from the Morning Offering?",
                  answer: "The Morning Offering gives God the day you are about to live. A prayer of trust is what you say when a particular fear or limit shows itself inside that day. Many people pray both.",
                },
              ]}
            />
            <RelatedArticles currentSlug="prayer-of-trust-in-god" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
