import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurLadyOfSorrowsSeptember152026Feast() {
  return (
    <>
      <Helmet>
        <title>{"Our Lady of Sorrows September 15, 2026: Feast Guide | Guide Catholic"}</title>
        <meta name="description" content={"Our Lady of Sorrows on September 15, 2026 — the Seven Sorrows of Mary, devotions, Mass, and comfort for grieving U.S. Catholics."} />
        <meta name="keywords" content={"our lady of sorrows 2026, seven sorrows of mary, september 15 feast day, mater dolorosa, our lady of sorrows feast"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-sorrows-september-15-2026-feast-day/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Our Lady of Sorrows (September 15, 2026): Seven Sorrows & Feast Day Guide"}
        description={"Our Lady of Sorrows on September 15, 2026 — the Seven Sorrows of Mary, devotions, Mass, and comfort for grieving U.S. Catholics."}
        url="https://guidecatholic.com/blog/our-lady-of-sorrows-september-15-2026-feast-day/"
        datePublished="2026-08-31"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "our lady of sorrows 2026", url: "https://guidecatholic.com/blog/our-lady-of-sorrows-september-15-2026-feast-day/" },
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
              <span className="text-text">our lady of sorrows 2026</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Saints &amp; Feast Days</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />August 31, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Our Lady of Sorrows (September 15, 2026): Seven Sorrows &amp; Feast Day Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Grief-heavy headlines make our lady of sorrows 2026 one of the most searched Marian feasts each September. This page explains the Seven Sorrows with pastoral clarity for American parishes and families.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <Heart className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: "Our Lady of Sorrows is celebrated on <strong>Monday, September 15, 2026</strong>, the day after the Exaltation of the Holy Cross. Catholics meditate on Mary's Seven Sorrows — from Simeon's prophecy to the burial of Jesus." }} />
              </div>

              
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Free resources on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  For prayers, Scripture, and devotionals related to September 15, 2026, visit{" "}
                  <a href="https://catholicbibleonline.com/blog/our-lady-of-sorrows-september-15-catholic-feast-day-guide-2026/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Our Lady of Sorrows 2026 guide on Catholic Bible Online</a>
                  {" "}on{" "}
                  <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.
                </p>
                <a
                  href="https://catholicbibleonline.com/blog/our-lady-of-sorrows-september-15-catholic-feast-day-guide-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Open on Catholic Bible Online
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Sorrows (Septem Dolorum)</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "<ol class=\"list-decimal list-inside text-text space-y-2 mb-6\"><li>Prophecy of Simeon (Luke 2:34–35)</li><li>Flight into Egypt (Matthew 2:13–15)</li><li>Loss of the Child Jesus for three days (Luke 2:41–50)</li><li>Meeting Jesus on the way to Calvary</li><li>Crucifixion and Death of Our Lord</li><li>Receiving Jesus' body (Pieta)</li><li>Burial of Jesus</li></ol> Pray one sorrow per day the week before September 15 if you are new to the devotion." }} />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the feast follows the Holy Cross</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-sorrows-september-15-2026-feast-day">
                Liturgically, September 15 sits beside the Cross because Mary stood beneath it. John 19:25–27 is the heart of the day: the Beloved Disciple receives Mary as mother. American Catholics who feel orphaned — by divorce, death, or distance — find a mother who stayed when others fled.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Devotions U.S. Catholics actually use</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "The <strong>Servite Rosary of the Seven Sorrows</strong> (seven groups of seven Hail Marys) is the classic devotion. Simpler options: one Our Father and seven Hail Marys for the seven sorrows, or the Stabat Mater hymn after dinner. Full texts live on <a href=\"https://catholicbibleonline.com/prayers/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent font-semibold underline underline-offset-2 hover:text-accent/80\">Catholic Bible Online</a>." }} />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Pastoral word for the grieving</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-sorrows-september-15-2026-feast-day">
                This feast does not romanticize pain. Mary validates sorrow while pointing to resurrection. If you are mourning, bring the name of the deceased to Mass on September 15, light a candle, and ask Mary to stand with you as she stood at the tomb.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Parish and school ideas</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-sorrows-september-15-2026-feast-day">
                Blue or sorrowful-Marian hymns, exposition of the Blessed Sacrament for intentions of the suffering, and service projects for bereaved families. Schools can teach the Seven Sorrows with one image per sorrow — children remember stories.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Deeper reading on Catholic Bible Online</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "For a full September 15, 2026 article with prayers and traditions, open the <a href=\"https://catholicbibleonline.com/blog/our-lady-of-sorrows-september-15-catholic-feast-day-guide-2026/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent font-semibold underline underline-offset-2 hover:text-accent/80\">Our Lady of Sorrows feast guide</a>. Pair it with daily Scripture on <a href=\"https://catholicbibleonline.com/daily-verses/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent font-semibold underline underline-offset-2 hover:text-accent/80\">Catholic Bible Online's daily verses</a>." }} />

              <QuizCTA
                title={"How is your liturgical year going?"}
                description={"Take our Catholic life assessment — Mass, prayer, and seasonal fidelity."}
              />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts at a glance</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li>• <strong>Feast / season:</strong> September 15, 2026</li>
                  <li>• <strong>Primary search:</strong> our lady of sorrows 2026</li>
                  <li>• <strong>Category:</strong> Saints &amp; Feast Days</li>
                  <li>• <strong>More on Guide Catholic:</strong> <Link to="/blog/catholic-feast-days/" className="text-accent underline underline-offset-2">Catholic Feast Days hub</Link></li>
                  <li>• <strong>Prayers &amp; Scripture:</strong> <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Catholic Bible Online</a></li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="our-lady-of-sorrows-september-15-2026-feast-day"
              faqs={[
                { question: "When is Our Lady of Sorrows 2026?", answer: "Monday, September 15, 2026." },
                { question: "What are the Seven Sorrows?", answer: "Seven key sufferings of Mary from prophecy to burial — see list above." },
                { question: "Is there a special rosary?", answer: "Yes — the Servite Seven Sorrows Rosary (seven sets of seven Hail Marys)." },
                { question: "What color is used liturgically?", answer: "White or Marian blue in devotions; liturgical color is white for the feast." },
                { question: "Where can I read more?", answer: "Catholic Bible Online's Our Lady of Sorrows September 15, 2026 guide." }
              ]}
            />
            <RelatedArticles currentSlug="our-lady-of-sorrows-september-15-2026-feast-day" />
            <ArticleBottomCTA
              title={"Live the feasts — not only read about them"}
              description={"Build Catholic habits that last through Advent, Christmas, and the whole liturgical year."}
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
