import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function CatholicCremationRulesUsa() {
  return (
    <>
      <Helmet>
        <title>Catholic Cremation Rules in the USA: What the Church Allows | Guide Catholic</title>
        <meta name="description" content="Catholic teaching on cremation in the United States — what is allowed, funeral Mass with cremated remains, burial requirements, and what the Church forbids." />
        <meta name="keywords" content="catholic cremation rules, can catholics be cremated, cremation catholic church usa, catholic funeral cremation, bury cremated remains catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-cremation-rules-usa/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Catholic Cremation Rules in the USA: What the Church Allows" description="Catholic teaching on cremation in the United States — what is allowed, funeral Mass with cremated remains, burial requirements, and what the Church forbids." url="https://guidecatholic.com/blog/catholic-cremation-rules-usa/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholic Cremation", url: "https://guidecatholic.com/blog/catholic-cremation-rules-usa/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Catholic Cremation</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Catholic Living</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />12 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Catholic Cremation Rules in the USA: What the Church Allows</h1>
              <p className="text-xl text-text-muted leading-relaxed">Cremation is permitted for Catholics in the United States, but not on the same terms as secular culture. The Church insists on respect for the body, prayer for the dead, and burial — not scattering ashes.</p>
            </header>
            <div className="aspect-video bg-stone-100 rounded-2xl flex items-center justify-center mb-10"><Flame className="w-24 h-24 text-stone-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What the Church Teaches (Summary)</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Cremation is allowed when not chosen to deny faith in the resurrection of the body.</li>
                <li>Funeral Mass may be celebrated with cremated remains present (per diocesan norms).</li>
                <li>Ashes must be buried in a cemetery or sacred place — not scattered, divided, or kept at home indefinitely.</li>
                <li>Burial reflects Christian hope and honors the body God will raise.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-cremation-rules-usa">U.S. bishops and parish priests field cremation questions constantly. Planning ahead with your parish avoids decisions made in grief that conflict with Catholic faith.</LinkedText>
              <QuizCTA title="Understand Catholic end-of-life teaching" description="Take the Catholic life assessment for guidance on sacraments, doctrine, and spiritual preparation." />
            </div>
            <BlogFAQ faqs={[
              { question: "Can Catholics be cremated in the United States?", answer: "Yes, since 1963 the Church permits cremation, provided it is not chosen to reject resurrection or Catholic funeral rites." },
              { question: "Can you have a Catholic funeral Mass with cremation?", answer: "Yes, when the cremated remains are present in a worthy vessel and diocesan guidelines are followed. Many parishes prefer the body present when possible." },
              { question: "Can Catholics scatter ashes?", answer: "No. The Church teaches that cremated remains should be buried in a cemetery or entombed in a sacred place, not scattered or kept as mementos." },
              { question: "Why does the Church care about burial?", answer: "Burial witnesses to human dignity and resurrection hope. The body belonged to a person loved by God and is not disposable matter." },
            ]} />
            <RelatedArticles currentSlug="catholic-cremation-rules-usa" />
            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
