import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SubTuumPraesidiumPrayer() {
  return (
    <>
      <Helmet>
        <title>Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin) | Guide Catholic</title>
        <meta name="description" content="Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today." />
        <meta name="keywords" content="sub tuum praesidium prayer, oldest marian prayer, under your protection we fly, sub tuum praesidium latin, catholic marian prayers" />
        <link rel="canonical" href="https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin)"
        description="Sub Tuum Praesidium — the oldest known Marian prayer — with full Catholic text in English and Latin, history from the 3rd century, and when to pray it today."
        url="https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/"
        datePublished="2026-05-30"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Sub Tuum Praesidium", url: "https://guidecatholic.com/blog/sub-tuum-praesidium-prayer/" },
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
              <span className="text-text">Sub Tuum Praesidium</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Sub Tuum Praesidium: Oldest Marian Prayer (Full Text & Latin)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Under your protection we fly, O holy Mother of God — Sub Tuum Praesidium is the earliest Marian prayer preserved in Greek, dating to around the year 250. Catholics still pray it for refuge in danger and trust in Mary's intercession.
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-indigo-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sub Tuum Praesidium (English)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed">
                <p>We fly to thy protection, O holy Mother of God; despise not our petitions in our necessities, but deliver us always from all dangers, O glorious and blessed Virgin. Amen.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Sub Tuum Praesidium (Latin)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm">
                <p>Sub tuum praesidium confugimus, Sancta Dei Genitrix. Nostras deprecationes ne despicias in necessitatibus nostris, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta. Amen.</p>
              </div>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="sub-tuum-praesidium-prayer">
                The prayer does not worship Mary; it asks the Mother of God to shelter the Church as she sheltered the infant Christ. To flee to her protection is to flee to Christ, whom she always leads us toward.
              </LinkedText>

              <QuizCTA
                title="Grow in Marian devotion with confidence"
                description="Take the Catholic life assessment for practical guidance on prayer and Catholic faith."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">History & Use Today</h2>
              <p className="text-text leading-relaxed mb-6">
                A Greek papyrus from Egypt (c. 250 AD) contains this prayer, making it the oldest known text invoking Mary as Theotokos — God-bearer. The Church approved it for liturgical use and includes it in the Roman Ritual. Families pray it in times of war, illness, travel, or spiritual trial.
              </p>
            </div>

            <BlogFAQ faqs={[
              { question: "What does Sub Tuum Praesidium mean?", answer: "It means Under your protection — the opening words of the prayer in Latin: Sub tuum praesidium confugimus (We fly to thy protection)." },
              { question: "Is Sub Tuum Praesidium the oldest Marian prayer?", answer: "The Greek text from c. 250 AD is the earliest known Marian prayer preserved in writing. It shows Christians already turned to Mary as Mother of God within decades of the apostolic age." },
              { question: "When should I pray Sub Tuum Praesidium?", answer: "Whenever you need Mary's intercession — in danger, anxiety, before travel, during persecution, or as a daily act of trust in her maternal care." },
              { question: "Is Sub Tuum Praesidium different from the Memorare?", answer: "Yes. The Memorare is a later prayer emphasizing Mary's never-failing help. Sub Tuum Praesidium is shorter and focuses on taking refuge under her protection." },
            ]} />

            <RelatedArticles currentSlug="sub-tuum-praesidium-prayer" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Deepen your Catholic prayer life</h3>
              <p className="text-text-muted mb-6">Receive a personalized spiritual growth plan.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
