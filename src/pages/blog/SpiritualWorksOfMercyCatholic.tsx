import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SpiritualWorksOfMercyCatholic() {
  return (
    <>
      <Helmet>
        <title>Spiritual Works of Mercy: Full Catholic List & Examples | Guide Catholic</title>
        <meta name="description" content="The seven spiritual works of mercy — counsel, instruct, admonish, comfort, forgive, bear patiently, and pray for the living and dead. Catholic guide with U.S. examples." />
        <meta name="keywords" content="spiritual works of mercy, 7 spiritual works of mercy, works of mercy catholic, instruct the ignorant, comfort the afflicted" />
        <link rel="canonical" href="https://guidecatholic.com/blog/spiritual-works-of-mercy-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Spiritual Works of Mercy: Full Catholic List & Examples" description="The seven spiritual works of mercy — counsel, instruct, admonish, comfort, forgive, bear patiently, and pray for the living and dead. Catholic guide with U.S. examples." url="https://guidecatholic.com/blog/spiritual-works-of-mercy-catholic/" datePublished="2026-05-30" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Spiritual Works of Mercy", url: "https://guidecatholic.com/blog/spiritual-works-of-mercy-catholic/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Spiritual Works of Mercy</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Spiritual Life</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 30, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Spiritual Works of Mercy: Full Catholic List & Examples</h1>
              <p className="text-xl text-text-muted leading-relaxed">Mercy is not only food and clothing. The Church also names seven spiritual works that heal minds, consciences, and souls — often quietly, in family and parish life.</p>
            </header>
            <div className="aspect-video bg-purple-100 rounded-2xl flex items-center justify-center mb-10"><HeartHandshake className="w-24 h-24 text-purple-700" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Spiritual Works of Mercy</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li>Counsel the doubtful</li>
                <li>Instruct the ignorant</li>
                <li>Admonish the sinner</li>
                <li>Comfort the afflicted</li>
                <li>Forgive offenses</li>
                <li>Bear wrongs patiently</li>
                <li>Pray for the living and the dead</li>
              </ol>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="spiritual-works-of-mercy-catholic">RCIA sponsors, religious-education catechists, grief ministers, and parents who teach the faith at home live these works daily. Spiritual mercy requires truth and kindness together — never gossip disguised as correction.</LinkedText>
              <QuizCTA title="Strengthen your Catholic witness" description="Take the Catholic life assessment for guidance on virtue, prayer, and parish involvement." />
            </div>
            <BlogFAQ faqs={[
              { question: "What are the spiritual works of mercy?", answer: "Seven acts that help others in spiritual needs — from teaching the faith to forgiving injuries and praying for souls." },
              { question: "Is admonishing the sinner the same as judging?", answer: "Fraternal correction is done with humility, love, and appropriate discretion — not to humiliate but to help someone return to God." },
              { question: "How do I instruct the ignorant?", answer: "Through catechesis, RCIA, answering sincere questions, sharing Catholic resources, and living the faith credibly." },
              { question: "Do spiritual works replace corporal works?", answer: "No. Catholics are called to both. They are two halves of one mercy." },
            ]} />
            <RelatedArticles currentSlug="spiritual-works-of-mercy-catholic" />
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
