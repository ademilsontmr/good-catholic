import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flower2, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurLadyOfGuadalupeDecember122026Feast() {
  return (
    <>
      <Helmet>
        <title>{"Our Lady of Guadalupe December 12, 2026 | Guide Catholic"}</title>
        <meta name="description" content={"Our Lady of Guadalupe on December 12, 2026 — apparitions, Mass times, Mañanitas, and how U.S. Catholics celebrate Empress of the Americas."} />
        <meta name="keywords" content={"our lady of guadalupe 2026, december 12 guadalupe, mañanitas guadalupe, guadalupe feast day usa, empress of the americas"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-of-guadalupe-december-12-2026-feast-day-usa/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"Our Lady of Guadalupe 2026 (December 12): Feast Day Guide for the Americas"}
        description={"Our Lady of Guadalupe on December 12, 2026 — apparitions, Mass times, Mañanitas, and how U.S. Catholics celebrate Empress of the Americas."}
        url="https://guidecatholic.com/blog/our-lady-of-guadalupe-december-12-2026-feast-day-usa/"
        datePublished="2026-08-31"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "our lady of guadalupe 2026", url: "https://guidecatholic.com/blog/our-lady-of-guadalupe-december-12-2026-feast-day-usa/" },
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
              <span className="text-text">our lady of guadalupe 2026</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />19 min</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Our Lady of Guadalupe 2026 (December 12): Feast Day Guide for the Americas
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Our lady of guadalupe 2026 drives Mass overflow, Mañanitas at 4 a.m., and mariachi in parish lots. Whether you are Mexican-American or discovering Guadalupe for the first time, this guide explains the feast for the whole Church in the U.S.
              </p>
            </header>

            <div className="aspect-video bg-pink-50 rounded-2xl flex items-center justify-center mb-10">
              <Flower2 className="w-24 h-24 text-pink-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: "The Feast of Our Lady of Guadalupe is <strong>Saturday, December 12, 2026</strong>. She is Patroness of the Americas and Star of the New Evangelization — honored from Mexico City to parishes in every U.S. state." }} />
              </div>

              
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Free resources on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  For prayers, Scripture, and devotionals related to December 12, 2026, visit{" "}
                  <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online — Marian devotion resources</a>
                  {" "}on{" "}
                  <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.
                </p>
                <a
                  href="https://catholicbibleonline.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Open on Catholic Bible Online
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The apparitions in brief</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa">
                In December 1531, Mary appeared to St. Juan Diego on Tepeyac hill near Mexico City. Her image on the tilma converted millions. The message is tender: "Am I not here, I who am your mother?"
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">December 12 in U.S. parishes</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa">
                Expect overnight vigils (Mañanitas), bilingual Masses, Aztec dancers at some celebrations, and roses blessed in Mary's honor. Parking will be difficult — arrive early or carpool.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Guadalupe and evangelization</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa">
                St. John Paul II named her Star of the New Evangelization. In a polarized America, Guadalupe unites indigenous and European, rich and poor, under one mestiza face of mercy.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayers for the feast</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "Pray the Guadalupe novena in the days leading up to December 12. Read Luke 1:46–55 and Revelation 12. Find free Marian prayers on <a href=\"https://catholicbibleonline.com/prayers/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent font-semibold underline underline-offset-2 hover:text-accent/80\">Catholic Bible Online</a>." }} />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Respectful participation for non-Hispanic Catholics</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa">
                Attend, listen, and avoid treating the feast as exotic tourism. Guadalupe belongs to the whole American continent. Bring flowers, pray for immigrants, and learn one line of "La Guadalupana."
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Works of mercy on Guadalupe</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa">
                Support pregnancy centers, migrant shelters, or parish food pantries. Mary asked for a church and comforted the poor — imitation beats slogans.
              </LinkedText>

              <QuizCTA
                title={"How is your liturgical year going?"}
                description={"Take our Catholic life assessment — Mass, prayer, and seasonal fidelity."}
              />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts at a glance</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li>• <strong>Feast / season:</strong> December 12, 2026</li>
                  <li>• <strong>Primary search:</strong> our lady of guadalupe 2026</li>
                  <li>• <strong>Category:</strong> Saints &amp; Feast Days</li>
                  <li>• <strong>More on Guide Catholic:</strong> <Link to="/blog/catholic-feast-days/" className="text-accent underline underline-offset-2">Catholic Feast Days hub</Link></li>
                  <li>• <strong>Prayers &amp; Scripture:</strong> <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Catholic Bible Online</a></li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa"
              faqs={[
                { question: "When is Our Lady of Guadalupe 2026?", answer: "Saturday, December 12, 2026." },
                { question: "What are Mañanitas?", answer: "Early-morning songs and prayers on the feast — often December 12 before dawn." },
                { question: "Is Guadalupe only for Mexican Catholics?", answer: "No — she is Patroness of all the Americas." },
                { question: "Who was Juan Diego?", answer: "St. Juan Diego Cuauhtlatoatzin — indigenous visionary, canonized 2002." }
              ]}
            />
            <RelatedArticles currentSlug="our-lady-of-guadalupe-december-12-2026-feast-day-usa" />
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
