import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function PalmSundayCatholicGuide() {
  return (
    <>
      <Helmet>
        <title>Palm Sunday Catholic Guide: Mass, Palms & Holy Week Start (USA) | Guide Catholic</title>
        <meta name="description" content="Palm Sunday explained for Catholics in the U.S. — blessing of palms, procession, Mass readings, what to do with palms at home, and how Holy Week begins." />
        <meta name="keywords" content="palm sunday catholic, palm sunday mass, blessing of palms, holy week starts, palm sunday 2026, what to do with palm branches" />
        <link rel="canonical" href="https://guidecatholic.com/blog/palm-sunday-catholic-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Palm Sunday Catholic Guide: Mass, Palms & Holy Week Start (USA)" description="Palm Sunday explained for Catholics in the U.S. — blessing of palms, procession, Mass readings, what to do with palms at home, and how Holy Week begins." url="https://guidecatholic.com/blog/palm-sunday-catholic-guide/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Palm Sunday", url: "https://guidecatholic.com/blog/palm-sunday-catholic-guide/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Palm Sunday</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy & Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />11 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Palm Sunday Catholic Guide: Mass, Palms & Holy Week Start (USA)</h1>
              <p className="text-xl text-text-muted leading-relaxed">Palm Sunday opens Holy Week with joy and solemnity — crowds welcome Christ the King, then the Passion is proclaimed. Here is what American Catholics experience at Mass and at home.</p>
            </header>
            <div className="aspect-video bg-green-100 rounded-2xl flex items-center justify-center mb-10"><TreePine className="w-24 h-24 text-green-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Happens at Palm Sunday Mass</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Blessing of palms (or other branches) outside or at the church entrance.</li>
                <li>Procession commemorating Christ's entry into Jerusalem.</li>
                <li>Reading of the Passion narrative — often with parts for the congregation.</li>
                <li>Sunday Mass with red vestments symbolizing the Lord's Passion.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="palm-sunday-catholic-guide">Palm Sunday is a Holy Day of Obligation in the sense that it is a Sunday — Catholics in the United States are bound to attend Mass as on every Lord's Day.</LinkedText>
              <QuizCTA title="Prepare for Holy Week" description="Take the Catholic life assessment for guidance on Lent, Easter, and parish life." />
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What to Do with Blessed Palms at Home</h2>
              <p className="text-text leading-relaxed mb-6">Place palms behind a crucifix or sacred image, tuck them in a Bible, or weave simple crosses as many Catholic families do. Old palms should be returned to the parish for burning before Ash Wednesday — never throw blessed palms in the trash.</p>
            </div>
            <BlogFAQ faqs={[
              { question: "Is Palm Sunday a Holy Day of Obligation?", answer: "Every Sunday is a day of obligation. Palm Sunday is the Sunday before Easter and requires Mass attendance like any other Sunday." },
              { question: "Why do we use palms?", answer: "Palms recall the crowds who spread branches before Jesus entering Jerusalem, hailing him as Messiah and King." },
              { question: "Can I keep palms from year to year?", answer: "You may keep them as a sacramental in the home. When replacing them, return old palms to the church for respectful burning." },
              { question: "When is Palm Sunday 2026?", answer: "In 2026, Palm Sunday falls on March 29. The date moves each year because it depends on the date of Easter." },
            ]} />
            <RelatedArticles currentSlug="palm-sunday-catholic-guide" />
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
