import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Flame, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function AllSoulsDayNovember22026Guide() {
  return (
    <>
      <Helmet>
        <title>{"All Souls Day November 2, 2026: Catholic Guide | Guide Catholic"}</title>
        <meta name="description" content={"All Souls' Day November 2, 2026 — pray for the holy souls in purgatory, Mass times, indulgences, and November memorial traditions in the USA."} />
        <meta name="keywords" content={"all souls day 2026, all souls day mass times, november 2 catholic, pray for the dead catholic, all souls indulgence"} />
        <link rel="canonical" href="https://guidecatholic.com/blog/all-souls-day-november-2-2026-prayers-mass-times/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={"All Souls' Day 2026 (November 2): Prayers, Mass & Indulgences Guide"}
        description={"All Souls' Day November 2, 2026 — pray for the holy souls in purgatory, Mass times, indulgences, and November memorial traditions in the USA."}
        url="https://guidecatholic.com/blog/all-souls-day-november-2-2026-prayers-mass-times/"
        datePublished="2026-08-31"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "all souls day 2026", url: "https://guidecatholic.com/blog/all-souls-day-november-2-2026-prayers-mass-times/" },
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
              <span className="text-text">all souls day 2026</span>
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
                All Souls&apos; Day 2026 (November 2): Prayers, Mass &amp; Indulgences Guide
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                All souls day 2026 matters to every American Catholic who has buried someone they love. This page explains doctrine without coldness and gives practical November steps.
              </p>
            </header>

            <div className="aspect-video bg-stone-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-stone-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: "All Souls' Day is <strong>Monday, November 2, 2026</strong>. Catholics pray for the holy souls in purgatory — especially at Mass, in November indulgences, and through cemetery visits." }} />
              </div>

              
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Free resources on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  For prayers, Scripture, and devotionals related to November 2, 2026, visit{" "}
                  <a href="https://catholicbibleonline.com/prayers/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Prayers for the faithful departed on Catholic Bible Online</a>
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

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What is All Souls&apos; Day?</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-souls-day-november-2-2026-prayers-mass-times">
                The Commemoration of All the Faithful Departed (November 2) extends All Saints: we intercede for souls being purified before heaven. 2 Maccabees 12:45–46 and the Church's prayer tradition support offering sacrifice for the dead.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Mass on November 2, 2026</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-souls-day-november-2-2026-prayers-mass-times">
                Monday Masses will include violet vestments and readings of hope (John 6, Wisdom 3). Many U.S. parishes schedule an extra evening Mass or a cemetery service. Arrive with names written on paper — read them silently during the prayer of the faithful.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">November indulgences (summary)</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-souls-day-november-2-2026-prayers-mass-times">
                The Church grants plenary indulgences applicable to the dead when you visit a cemetery (Nov 1–8) and pray for the departed, or visit a church on All Souls Day — under usual conditions (Confession, Communion, prayer for the Pope, detachment from sin). Confirm details in the current Enchiridion or your diocese.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Prayers to use</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: "Eternal Rest grant unto them, O Lord… Requiem aeternam. Rosary for the dead. Office of the Dead from the Liturgy of the Hours. Find free prayer texts at <a href=\"https://catholicbibleonline.com/prayers/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-accent font-semibold underline underline-offset-2 hover:text-accent/80\">Catholic Bible Online</a>." }} />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Hispanic and Filipino November customs in the U.S.</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="all-souls-day-november-2-2026-prayers-mass-times">
                Día de los Muertos overlaps culturally but is distinct liturgically — catechists should honor family altars while teaching purgatory and Mass as the heart of remembrance. Simbang Gabi preparation often begins later in Advent, but November lists of the dead cross many cultures.
              </LinkedText>

              <QuizCTA
                title={"How is your liturgical year going?"}
                description={"Take our Catholic life assessment — Mass, prayer, and seasonal fidelity."}
              />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts at a glance</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li>• <strong>Feast / season:</strong> November 2, 2026</li>
                  <li>• <strong>Primary search:</strong> all souls day 2026</li>
                  <li>• <strong>Category:</strong> Saints &amp; Feast Days</li>
                  <li>• <strong>More on Guide Catholic:</strong> <Link to="/blog/catholic-feast-days/" className="text-accent underline underline-offset-2">Catholic Feast Days hub</Link></li>
                  <li>• <strong>Prayers &amp; Scripture:</strong> <a href="https://catholicbibleonline.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Catholic Bible Online</a></li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="all-souls-day-november-2-2026-prayers-mass-times"
              faqs={[
                { question: "When is All Souls Day 2026?", answer: "Monday, November 2, 2026." },
                { question: "Is All Souls a Holy Day of Obligation?", answer: "Not in the United States — but Mass is strongly encouraged." },
                { question: "What is a plenary indulgence for the dead?", answer: "A full remission of temporal punishment applied to souls in purgatory under Church conditions." },
                { question: "Can I pray for non-Catholics who died?", answer: "Yes — God's mercy is not limited by our categories." }
              ]}
            />
            <RelatedArticles currentSlug="all-souls-day-november-2-2026-prayers-mass-times" />
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
