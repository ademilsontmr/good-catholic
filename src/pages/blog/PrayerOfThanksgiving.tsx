import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const PAGE = "https://guidecatholic.com/blog/prayer-of-thanksgiving/";
const TITLE = "Catholic Prayer of Thanksgiving: How to Thank God Each Day";
const DESCRIPTION =
  "A Catholic prayer of thanksgiving for meals and ordinary days, with the traditional grace after meals and guidance that does not treat thanks as a bargain.";

const ORIGINAL = `Lord God, I thank you for this day and for the life you have given me.
Thank you for the people I love, for the work in my hands, and for the mercy that met me when I failed.
Teach me to receive your gifts without taking them for granted, and to share them with those who have less.
I praise you, Father, Son, and Holy Spirit, now and for ever. Amen.`;

const GRACE = `We give you thanks, almighty God, for all your benefits,
who live and reign for ever and ever. Amen.`;

export default function PrayerOfThanksgiving() {
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
          { name: "Prayer of Thanksgiving", url: PAGE },
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
              <span className="text-text">Prayer of Thanksgiving</span>
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
                A Catholic prayer of thanksgiving for ordinary days
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Thanks is not a second request dressed up as praise. It is the moment you name a gift that is already in your hands.
              </p>
            </header>
            <div className="aspect-video bg-rose-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-rose-700" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                There is no single official “Prayer of Thanksgiving” that every Catholic must memorize. The Church already thanks God in the Mass, whose central prayer is the Eucharistic Prayer. At home, Catholics use grace after meals, the Glory Be, and the Te Deum.
              </p>
            </div>
            <BlogArticleAd slot="1906776249" />
            <SharePage title={TITLE} url={PAGE} />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What thanksgiving means</h2>
            <p className="text-text leading-relaxed mb-6">
              The word Eucharist means thanksgiving. At Mass the Church thanks the Father for the death and resurrection of Christ and asks that the gifts on the altar become his Body and Blood. Private thanksgiving is smaller and more local. It notices the meal, the person who called, the work that got finished, the mercy that met a failure. It does not claim that every event was pleasant. St. Paul’s line in the Douay-Rheims translation of 1 Thessalonians 5:18 is “In all things give thanks.” That is thanks inside circumstances, not a verdict that the circumstances were good.
            </p>
            <p className="text-text leading-relaxed mb-6">
              You can read the psalms of praise, which taught Israel how to thank God in public, in the{" "}
              <a href={`${CBO_BIBLE}psalms/`} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>book of Psalms at Catholic Bible Online</a>.
              Psalm 136 repeats “for his mercy endureth for ever” after each gift of creation and of the exodus. That pattern still works: name one gift, then say why it is mercy and not wages.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A traditional grace after meals</h2>
            <p className="text-text leading-relaxed mb-4">
              This short English form is the common Catholic grace after meals. Longer versions add a prayer for the dead. Families also use their own wording. The{" "}
              <Link to="/blog/grace-after-meals-catholic/" className="text-accent font-semibold underline underline-offset-2">guide to grace after meals</Link>{" "}
              sets the longer custom next to this short one.
            </p>
            <div className="mb-6 rounded-xl border border-border bg-background-muted/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Traditional prayer</p>
              <p className="whitespace-pre-line text-text leading-relaxed font-medium">{GRACE}</p>
              <CopyPrayerButton text={GRACE} />
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">An original prayer for the end of the day</h2>
            <p className="text-text leading-relaxed mb-4">
              The prayer below was written for this guide. It is not a liturgical text and not an official prayer of the Church. Use it when you want words for a whole day rather than for a meal. For the Church’s solemn hymn of thanks, pray the{" "}
              <Link to="/blog/te-deum-prayer-catholic/" className="text-accent font-semibold underline underline-offset-2">Te Deum</Link>.
              The{" "}
              <Link to="/blog/glory-be-prayer/" className="text-accent font-semibold underline underline-offset-2">Glory Be</Link>{" "}
              is the shortest doxology if you only have a breath.
            </p>
            <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Original prayer from Guide Catholic</p>
              <p className="whitespace-pre-line text-text leading-relaxed font-medium">{ORIGINAL}</p>
              <CopyPrayerButton text={ORIGINAL} />
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When and how to pray it</h2>
            <p className="text-text leading-relaxed mb-6">
              Pray the short grace as soon as the meal ends, before anyone stands up. Pray the longer thanksgiving at night, after you have named one concrete gift out loud or on paper. If the day was cruel, thank God for one thing that was still given: breath, a friend, the fact that you can still pray. Do not force a cheerful tone you do not have. Thanks can be quiet.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Beginners often skip thanksgiving because petition feels more urgent. Try a week in which the first sentence of night prayer is thanks and the requests come second. Pair it with the{" "}
              <Link to="/blog/prayer-before-meals-catholic/" className="text-accent font-semibold underline underline-offset-2">prayer before meals</Link>{" "}
              so the table has a beginning and an end.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Thanksgiving does not purchase the next favor. A prayer of thanks after a recovery is praise, not a contract that the illness cannot return. Share what you have been given. That is how thanks stays honest.
            </p>

            <DailyPrayersHubLink />
            <QuizCTA />
            <BlogFAQ
              htmlAnswers
              faqs={[
                {
                  question: "Is there one official Catholic prayer of thanksgiving?",
                  answer: "The Church’s great prayer of thanksgiving is the Eucharistic Prayer at Mass. At home, Catholics use grace after meals, the Glory Be, the Te Deum, and prayers in their own words. There is not one extra formula that every Catholic is required to memorize.",
                },
                {
                  question: "What is the traditional grace after meals?",
                  answer: "A common short English form is: “We give you thanks, almighty God, for all your benefits, who live and reign for ever and ever. Amen.” Longer family versions add a prayer for the faithful departed.",
                },
                {
                  question: "Can I thank God on a day that went badly?",
                  answer: "Yes. Thanking God in hard circumstances is not a claim that the suffering was good. It is a way of refusing to let the hardship be the only thing you say to him.",
                },
                {
                  question: "Does a prayer of thanks guarantee more blessings?",
                  answer: "No. Thanksgiving acknowledges a gift. It is not a method for securing health, money, or a particular outcome.",
                },
              ]}
            />
            <RelatedArticles currentSlug="prayer-of-thanksgiving" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
