import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Sun } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { CopyPrayerButton, DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
import { cboLinkClass, CBO_BIBLE } from "@/lib/catholicBibleOnlineLinks";

const ENGLISH = `Queen of Heaven, rejoice, alleluia.
For He whom you did merit to bear, alleluia.
Has risen, as he said, alleluia.
Pray for us to God, alleluia.

V. Rejoice and be glad, O Virgin Mary, alleluia.
R. For the Lord has truly risen, alleluia.

Let us pray.
O God, who through the resurrection of your Son, our Lord Jesus Christ, did give joy to the world, grant, we pray, that through his Mother, the Virgin Mary, we may obtain the joys of everlasting life. Through the same Christ our Lord. Amen.`;

export default function ReginaCaeliPrayer() {
  return (
    <>
      <Helmet>
        <title>Regina Caeli Prayer: Full Text, When to Pray It (Easter Marian) | Guide Catholic</title>
        <meta name="description" content="The Regina Caeli prayer with full English and Latin text, when Catholics pray it instead of the Angelus during Easter, and what this Marian antiphon means." />
        <meta name="keywords" content="regina caeli prayer, queen of heaven rejoice, regina caeli latin, easter angelus replacement, marian antiphon eastertide" />
        <link rel="canonical" href="https://guidecatholic.com/blog/regina-caeli-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Regina Caeli Prayer: Full Text, When to Pray It (Easter Marian)"
        description="The Regina Caeli prayer with full English and Latin text, when Catholics pray it instead of the Angelus during Easter, and what this Marian antiphon means."
        url="https://guidecatholic.com/blog/regina-caeli-prayer/"
        datePublished="2026-05-14"
        dateModified="2026-10-20"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Regina Caeli", url: "https://guidecatholic.com/blog/regina-caeli-prayer/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Regina Caeli</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 14, 2026</span>
                <span>Updated October 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />14 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Regina Caeli Prayer: Full Text, When to Pray It (Easter Marian)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                From Easter through Pentecost, many Catholics replace the Angelus with the Regina Caeli — a joyful greeting to the Mother of the Risen Christ.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Regina Caeli (Queen of Heaven, rejoice!) replaces the Angelus during Easter season — from Easter Sunday through Pentecost. Catholics pray it at noon commemorating Mary&apos;s joy at the Resurrection; Latin and English forms are common in parishes and homes.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Regina Caeli (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Traditional prayer</p>
                <p className="whitespace-pre-line text-text leading-relaxed font-medium">{ENGLISH}</p>
                <CopyPrayerButton text={ENGLISH} />
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Regina Caeli (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm">
                  Regina caeli, laetare, alleluia; quia quem meruisti portare, alleluia, resurrexit, sicut dixit, alleluia. Ora pro nobis Deum, alleluia. Gaude et laetare, Virgo Maria, alleluia. Quia surrexit Dominus vere, alleluia.
                </p>
                <p className="text-text italic leading-relaxed text-sm mt-4">
                  Oremus. Deus, qui per resurrectionem Filii tui, Domini nostri Iesu Christi, mundum laetificare dignatus es: praesta, quaesumus; ut per eius Genetricem Virginem Mariam perpetuae capiamus gaudia vitae. Per Christum Dominum nostrum. Amen.
                </p>
              </div>

              <p className="text-text leading-relaxed mb-6">
                The Regina Caeli uses the same three times as the{" "}
                <Link to="/blog/how-to-pray-the-angelus/" className="text-accent font-semibold underline underline-offset-2">Angelus</Link>:
                morning, noon, and evening. It is a devotion. A lay person who misses noon has not broken a law of the Church.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Eastertide runs</h2>
              <p className="text-text leading-relaxed mb-6">
                Pray it from Easter Sunday through Pentecost Sunday. Eastertide is fifty days. Pentecost is the fiftieth. On the Monday after Pentecost, the Angelus returns at those three hours. The Church is not asking you to calculate the date in your head: the parish bulletin, the Roman calendar, and the breviary already mark it.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The prayer is also the Marian antiphon at the end of Night Prayer during this season. That is a different moment from the noon devotion, even though the words overlap. Outside Easter, Compline uses another antiphon. The{" "}
                <Link to="/blog/hail-holy-queen-prayer/" className="text-accent font-semibold underline underline-offset-2">Hail, Holy Queen</Link>{" "}
                is the one many people know from the Rosary. It is not the Easter antiphon.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to pray it</h2>
              <ol className="list-decimal pl-5 space-y-2 text-text leading-relaxed mb-6">
                <li>Make the Sign of the Cross.</li>
                <li>Say the four lines, each ending with alleluia. If two people are present, one may lead and the other answer.</li>
                <li>Pray the verse and response: “Rejoice and be glad, O Virgin Mary, alleluia. For the Lord has truly risen, alleluia.”</li>
                <li>Pray the collect. The final “Amen” is the end. Add a Glory Be only if your household already does. It is not required for the prayer to be complete.</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                The words rest on the resurrection narratives. Read{" "}
                <a href={`${CBO_BIBLE}luke/24/`} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Luke 24 at Catholic Bible Online</a>{" "}
                once during the season and let one sentence stay with the alleluia. The prayer does not promise a feeling of joy. It states that Christ is risen, including on an Easter Monday that feels ordinary.
              </p>
              <p className="text-text leading-relaxed mb-6">
                With children, use only the first four lines for a week. Stand up for it, the way many parishes stand for the Angelus. Then sit down and eat. The{" "}
                <Link to="/blog/divine-office-laity/" className="text-accent font-semibold underline underline-offset-2">Divine Office for lay people</Link>{" "}
                is the longer way to mark the same season, if one hour of the Office is already in the house.
              </p>

            </div>

            <DailyPrayersHubLink />
            <QuizCTA />
            <BlogFAQ htmlAnswers faqs={[
              { question: "When do you pray the Regina Caeli instead of the Angelus?", answer: "From Easter Sunday through Pentecost Sunday, at morning, noon, and evening. On the Monday after Pentecost, the Angelus returns. It is a devotion, not a daily obligation for lay people." },
              { question: "What does Regina Caeli mean?", answer: "Queen of Heaven. The prayer greets Mary with the news that the Son she bore has risen, as he said." },
              { question: "Is the Regina Caeli the same as the Hail, Holy Queen?", answer: "No. The Hail, Holy Queen is another Marian antiphon, often used at the end of the Rosary and at Night Prayer outside Easter. The Regina Caeli belongs to Eastertide." },
              { question: "Do I have to pray it three times a day?", answer: "No. Parishes and households that already pause for the Angelus use the Regina Caeli in its place during Easter. Once a day, or only on Sundays, is a real beginning." },
              { question: "Where does the prayer come from?", answer: "The authorship is uncertain. It was in use as an Easter antiphon by the twelfth century and later took the Angelus hours during Eastertide. Treat it as a traditional prayer of the Church, not as a text whose author we can name with confidence." }
            ]} />

            <RelatedArticles currentSlug="regina-caeli-prayer" />

            <ArticleBottomCTA title="Grow in Catholic devotion" description="Get a personalized guide for prayer and the liturgical year." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
