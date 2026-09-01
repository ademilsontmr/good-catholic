import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Crown, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AllSaintsDayNovember12026HolyDay() {
  return (
    <>
      <Helmet>
        <title>{"All Saints Day November 1, 2026: Holy Day Guide | Guide Catholic"}</title>
        <meta name="description" content={"All Saints' Day November 1, 2026 — Holy Day of Obligation in the USA, Mass times, meaning, and how Catholics honor the saints in heaven."} />
        <meta name="keywords" content={"all saints day 2026, all saints day holy day of obligation, november 1 mass times, all saints day catholic usa"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/all-saints-day-november-1-2026-holy-day-obligation/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"All Saints' Day 2026 (November 1): Holy Day of Obligation & Mass Times"}
        description={"All Saints' Day November 1, 2026 — Holy Day of Obligation in the USA, Mass times, meaning, and how Catholics honor the saints in heaven."}
        url="https://guidecatholic.com/blog/all-saints-day-november-1-2026-holy-day-obligation/"
        datePublished="2026-08-31"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "all saints day 2026", url: "https://guidecatholic.com/blog/all-saints-day-november-1-2026-holy-day-obligation/" },
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
              <span className="text-text">all saints day 2026</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />17 min</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                All Saints&apos; Day 2026 (November 1): Holy Day of Obligation &amp; Mass Times
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                All saints day 2026 searches explode every late October when parish bulletins list vigil Masses. This guide clarifies obligation, vigil rules, and how to teach the communion of saints.
              </p>
            </header>

            <div className="aspect-video bg-amber-50 rounded-2xl flex items-center justify-center mb-10">
              <Crown className="w-24 h-24 text-amber-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: "All Saints' Day is <strong>Sunday, November 1, 2026</strong>. In the United States it is a Holy Day of Obligation — Catholics should attend Mass to honor every saint in heaven, known and unknown." }} />
              </div>

              
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Free resources on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  For prayers, Scripture, and devotionals related to November 1, 2026, visit{" "}
                  <a href="https://catholicbibleonline.com/prayers/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic prayers on Catholic Bible Online</a>
                  {" "}on{" "}
                  <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.
                </p>
                <a
                  href="https://catholicbibleonline.com/prayers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Open on Catholic Bible Online
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Holy Day of Obligation in the USA</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-saints-day-november-1-2026-holy-day-obligation">
                All Saints' Day (November 1) remains on the U.S. Holy Day list. When it falls on Sunday (as in 2026), Sunday Mass fulfills the obligation for that day. Still treat November as a season to invoke patron saints by name.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Theology: one Church, three states</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-saints-day-november-1-2026-holy-day-obligation">
                The Church Militant (on earth), Suffering (purgatory), and Triumphant (heaven) form one Body in Christ. Revelation 7:9–17 paints the multitude no one can count — the biblical icon of All Saints.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Practices for November 1</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "<ul class=\"list-disc list-inside text-text space-y-2 mb-6\"><li>Display images of patron saints in your home.</li><li>Pray the Litany of the Saints — full text on <a href=\"https://catholicbibleonline.com/prayers/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent font-semibold underline underline-offset-2 hover:text-accent/80\">Catholic Bible Online</a>.</li><li>Name one virtue from your confirmation saint to imitate this month.</li><li>Visit a cemetery (especially before All Souls).</li></ul>" }} />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">All Saints vs Halloween</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-saints-day-november-1-2026-holy-day-obligation">
                Halloween ("All Hallows' Eve") precedes the feast. Catholics can reclaim the triduum: Eve vigil, All Saints victory, All Souls prayer. Avoid only criticizing secular costumes — offer a richer story.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mass times and vigil expectations</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-saints-day-november-1-2026-holy-day-obligation">
                Check your parish website by October 25. Saturday evening vigil counts for some holy days; for All Saints on Sunday 2026, plan Sunday Mass with special hymns to the saints.
              </LinkedText>

              <QuizCTA
                title={"How is your liturgical year going?"}
                description={"Take our Catholic life assessment — Mass, prayer, and seasonal fidelity."}
              />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts at a glance</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li>• <strong>Feast / season:</strong> November 1, 2026</li>
                  <li>• <strong>Primary search:</strong> all saints day 2026</li>
                  <li>• <strong>Category:</strong> Saints &amp; Feast Days</li>
                  <li>• <strong>More on Guide Catholic:</strong> <Link to="/blog/catholic-feast-days/" className="text-accent underline underline-offset-2">Catholic Feast Days hub</Link></li>
                  <li>• <strong>Prayers &amp; Scripture:</strong> <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Catholic Bible Online</a></li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="all-saints-day-november-1-2026-holy-day-obligation"
              faqs={[
                { question: "Is All Saints Day 2026 a Holy Day of Obligation?", answer: "Yes in the USA; in 2026 it falls on Sunday, so Sunday Mass fulfills it." },
                { question: "When is All Saints Day 2026?", answer: "Sunday, November 1, 2026." },
                { question: "What is the difference between All Saints and All Souls?", answer: "All Saints honors those in heaven; All Souls (Nov 2) prays for the holy souls in purgatory." },
                { question: "What prayer honors all saints?", answer: "The Litany of the Saints is the classic — available free online." }
              ]}
            />
            <RelatedArticles currentSlug="all-saints-day-november-1-2026-holy-day-obligation" />
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
