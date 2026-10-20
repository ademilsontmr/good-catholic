import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Sun, Calendar, Clock, ArrowLeft } from "lucide-react";
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

const PAGE = "https://guidecatholic.com/blog/prayer-for-peace/";
const TITLE = "Catholic Prayer for Peace: For the Heart, the Home, and the World";
const DESCRIPTION =
  "A Catholic prayer for peace in personal conflict and in war, with Christ’s words in John 14 and a clear line between devotion and a promise that violence will end.";

const ORIGINAL = `God of peace, quiet the fear in me and the anger I carry toward others.
Where I have hurt someone, give me the courage to make peace.
Where I have been hurt, keep me from returning evil for evil.
Guard the people who live with violence, and guide those who hold authority toward justice.
I ask this through Jesus Christ, the Prince of Peace. Amen.`;

export default function PrayerForPeace() {
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
          { name: "Prayer for Peace", url: PAGE },
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
              <span className="text-text">Prayer for Peace</span>
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
                A Catholic prayer for peace
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Peace in the Gospel is more than a pause in an argument. It is the gift Christ leaves with his disciples, and the work he then asks them to do.
              </p>
            </header>
            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-amber-700" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                Pray for peace in your own temper, in your household, and for people who are living through war. A prayer does not end a conflict by itself. It asks God for the grace to stop feeding it.
              </p>
            </div>
            <BlogArticleAd slot="1906776249" />
            <SharePage title={TITLE} url={PAGE} />

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The peace Jesus gives</h2>
            <p className="text-text leading-relaxed mb-6">
              On the night before he died, Jesus said, in the Douay-Rheims translation of John 14:27, “Peace I leave with you, my peace I give unto you: not as the world giveth, do I give unto you.” The world’s peace is often the silence after someone has been forced to give in. The peace he gives is his own presence, and it does not depend on the room being calm. You can read the chapter at{" "}
              <a href={`${CBO_BIBLE}john/14/`} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>John 14 on Catholic Bible Online</a>.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Catholic teaching on peace is larger than a single devotion. It includes the defense of human life, the duty to seek justice, and the refusal to treat hatred as a Christian virtue. The{" "}
              <Link to="/blog/catholic-teaching-on-peace/" className="text-accent font-semibold underline underline-offset-2">guide to Catholic teaching on peace</Link>{" "}
              sets that out. This page is the prayer that goes with it.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A familiar prayer, and who did not write it</h2>
            <p className="text-text leading-relaxed mb-6">
              “Lord, make me an instrument of your peace” is prayed throughout the Catholic world. It is often called the Prayer of St. Francis. The text does not appear in the writings of Francis of Assisi. It was published in French in the early twentieth century, centuries after his death, and later attributed to him. The sentiment fits his life. The authorship does not. Pray it as a Christian prayer, and read the careful version on the{" "}
              <Link to="/blog/prayer-of-st-francis-catholic/" className="text-accent font-semibold underline underline-offset-2">Peace Prayer page</Link>,
              without telling someone that Francis composed those lines.
            </p>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">An original prayer for this moment</h2>
            <p className="text-text leading-relaxed mb-4">
              The following prayer was written for this guide. It is not an official liturgical text. It asks for peace in the person praying, in a damaged relationship, and for people under violence. It does not promise that a war will stop, that a court will rule a certain way, or that an abuser will change because a prayer was said.
            </p>
            <div className="mb-6 rounded-xl border border-amber-200/80 bg-amber-50/50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Original prayer from Guide Catholic</p>
              <p className="whitespace-pre-line text-text leading-relaxed font-medium">{ORIGINAL}</p>
              <CopyPrayerButton text={ORIGINAL} />
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to pray it without hiding from the conflict</h2>
            <p className="text-text leading-relaxed mb-6">
              Begin with the Sign of the Cross. Read John 14:27 once. Then pray the original prayer slowly, and stop on the line that accuses you. If you are the one who lied, the prayer is not finished until you plan the apology. If you are the one who was harmed, peace does not mean pretending the harm was small. It means refusing revenge. Safety, including distance from someone who is dangerous, can be part of that refusal.
            </p>
            <p className="text-text leading-relaxed mb-6">
              At home, pray it once after the news or at the end of a tense day, together with the{" "}
              <Link to="/blog/how-to-pray-as-a-family/" className="text-accent font-semibold underline underline-offset-2">family prayer</Link>{" "}
              if others will join you. Add the Our Father. The line “forgive us our trespasses, as we forgive those who trespass against us” is already a prayer for peace. For the fear underneath the anger, the{" "}
              <Link to="/blog/prayer-of-trust-in-god/" className="text-accent font-semibold underline underline-offset-2">prayer of trust in God</Link>{" "}
              is the next step, not a rival one.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Beginners should keep it short. One minute is enough. What grows peace is repetition and a changed next action, not a longer speech.
            </p>

            <DailyPrayersHubLink />
            <QuizCTA />
            <BlogFAQ
              htmlAnswers
              faqs={[
                {
                  question: "Did St. Francis write the peace prayer?",
                  answer: "The familiar “Lord, make me an instrument of your peace” was not found in Francis of Assisi’s own writings. It appeared in French in the early twentieth century and was later linked to his name. Catholics may pray it. They should not claim he authored it.",
                },
                {
                  question: "Will this prayer stop a war or a family fight?",
                  answer: "No prayer on this page guarantees that a conflict will end. It asks God for peace and for the courage to act justly. Outcomes remain in God’s hands and in the free choices of the people involved.",
                },
                {
                  question: "Where should I start if I have never prayed for peace?",
                  answer: "Read John 14:27, make the Sign of the Cross, and pray one honest sentence about the conflict in front of you. The Our Father’s petition for forgiveness is already a peace prayer.",
                },
                {
                  question: "Is praying for peace the same as ignoring injustice?",
                  answer: "No. The peace Christ gives does not ask you to call evil good. Catholic teaching holds peace and justice together. A prayer that skips repentance, truth, or the safety of the vulnerable is not yet Christian peace.",
                },
              ]}
            />
            <RelatedArticles currentSlug="prayer-for-peace" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
