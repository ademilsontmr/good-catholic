import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function StJosephNovenaSellingHouse() {
  return (
    <>
      <Helmet>
        <title>St. Joseph Novena for Selling a House: 9-Day Catholic Prayer Guide | Guide Catholic</title>
        <meta name="description" content="St. Joseph Novena for selling a house — 9-day Catholic prayer with full text, how to pray when listing your home, and devotion traditions in the United States." />
        <meta name="keywords" content="st joseph novena selling house, novena to sell a house, st joseph prayer selling home, catholic prayer to sell house" />
        <link rel="canonical" href="https://guidecatholic.com/blog/st-joseph-novena-selling-house/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="St. Joseph Novena for Selling a House: 9-Day Catholic Prayer Guide" description="St. Joseph Novena for selling a house — 9-day Catholic prayer with full text, how to pray when listing your home, and devotion traditions in the United States." url="https://guidecatholic.com/blog/st-joseph-novena-selling-house/" datePublished="2026-06-01" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "St. Joseph Novena — Selling a House", url: "https://guidecatholic.com/blog/st-joseph-novena-selling-house/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">St. Joseph Novena — Selling a House</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayer & Devotion</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />June 1, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />7 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">St. Joseph Novena for Selling a House: 9-Day Catholic Prayer Guide</h1>
              <p className="text-xl text-text-muted leading-relaxed">Many American Catholics pray to Saint Joseph when a home sits on the market too long. This nine-day novena asks his intercession for a fair sale and a smooth transition.</p>
            </header>
            <div className="aspect-video bg-amber-100 rounded-2xl flex items-center justify-center mb-10"><Home className="w-24 h-24 text-amber-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="st-joseph-novena-selling-house">Devotion to Saint Joseph for housing is widespread in the U.S. — including the tradition of burying a St. Joseph statue when buying. For selling, the same trust applies: honest prayer plus good stewardship of the listing.</LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Daily Novena Prayer</h3>
                <p className="text-text italic leading-relaxed text-sm">O Saint Joseph, guardian of the Holy Family, you who provided a home on earth for Jesus and Mary, I ask your powerful intercession to sell this home at a fair price and in good time. Remove obstacles, bring a worthy buyer, and grant peace to all involved. Amen.</p>
              </div>
              <p className="text-text leading-relaxed mb-6">Pray for nine consecutive days when you list the property or when a sale stalls. Some families keep a St. Joseph statue visible during the novena and thank him after closing with a donation to charity or the parish.</p>
              <QuizCTA title="Bless your family's home" description="Take the Catholic life assessment for guidance on family prayer and domestic life." />
            </div>
            <BlogFAQ faqs={[
              { question: "Do I bury St. Joseph when selling a house?", answer: "The burying tradition is most common when buying. For selling, prayer and a visible statue or image is sufficient; focus on the novena and ethical sale practices." },
              { question: "Can I pray this novena while also buying another home?", answer: "Yes. Many pray for both sale and purchase, trusting Joseph to guide the whole transition." },
              { question: "How is this different from the buying-house novena?", answer: "The intention differs — here you ask for a buyer and successful sale; the buying novena asks for finding and affording a new home." },
              { question: "Is this superstition?", answer: "No, when prayed with faith in God. Saint Joseph intercedes; God grants what is good. Prayer should not replace honest real estate steps." },
            ]} />
            <RelatedArticles currentSlug="st-joseph-novena-selling-house" />
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
