import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function MagnificatPrayerCatholic() {
  return (
    <>
      <Helmet>
        <title>Magnificat Prayer: Full Text (Mary's Song) & When to Pray It | Guide Catholic</title>
        <meta name="description" content="The Magnificat (Luke 1:46–55) with full Catholic text in English and Latin, Mary's song of praise, and when Catholics pray it at Vespers and in daily devotion." />
        <meta name="keywords" content="magnificat prayer, magnificat full text, mary's song catholic, magnificat latin, my soul magnifies the lord" />
        <link rel="canonical" href="https://guidecatholic.com/blog/magnificat-prayer-catholic/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema title="Magnificat Prayer: Full Text (Mary's Song) & When to Pray It" description="The Magnificat (Luke 1:46–55) with full Catholic text in English and Latin, Mary's song of praise, and when Catholics pray it at Vespers and in daily devotion." url="https://guidecatholic.com/blog/magnificat-prayer-catholic/" datePublished="2026-05-31" />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link><span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link><span>/</span>
              <span className="text-text">Magnificat</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"><ArrowLeft className="w-4 h-4" />Back to Blog</Link>
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 31, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">Magnificat Prayer: Full Text (Mary's Song) & When to Pray It</h1>
              <p className="text-xl text-text-muted leading-relaxed">My soul magnifies the Lord — the Magnificat is Mary's canticle from the Visitation, prayed every evening in the Liturgy of the Hours and beloved in American parish life.</p>
            </header>
            <div className="aspect-video bg-pink-100 rounded-2xl flex items-center justify-center mb-10"><Music className="w-24 h-24 text-pink-600" strokeWidth={1.5} /></div>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Magnificat (English — Luke 1:46–55)</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6 text-text italic leading-relaxed text-sm space-y-3">
                <p>My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked with favor on his lowly servant. From this day all generations will call me blessed: the Almighty has done great things for me, and holy is his Name.</p>
                <p>He has mercy on those who fear him in every generation. He has shown the strength of his arm, and has scattered the proud in their conceit. He has cast down the mighty from their thrones, and has lifted up the lowly. He has filled the hungry with good things, and the rich he has sent away empty.</p>
                <p>He has come to the help of his servant Israel, for he has remembered his promise of mercy, the promise he made to our fathers, to Abraham and his children forever.</p>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="magnificat-prayer-catholic">Mary's Magnificat is Scripture itself — a hymn of justice, humility, and hope. Many U.S. Catholics pray it through the Magnificat monthly missal or at Evening Prayer.</LinkedText>
              <QuizCTA title="Deepen Marian devotion" description="Take the Catholic life assessment for practical guidance on prayer and the liturgical year." />
            </div>
            <BlogFAQ faqs={[
              { question: "What is the Magnificat?", answer: "It is Mary's song of praise in Luke 1:46–55 when she visits Elizabeth. The Church prays it daily at Vespers (Evening Prayer)." },
              { question: "Is the Magnificat the same as the Hail Mary?", answer: "No. The Hail Mary uses words from the Annunciation and Visitation greetings. The Magnificat is Mary's longer prophetic canticle." },
              { question: "What does Magnificat mean?", answer: "It is the first word in the Latin Vulgate: Magnificat anima mea Dominum — My soul magnifies the Lord." },
              { question: "Can lay people pray the Magnificat at home?", answer: "Yes. It is a central part of Evening Prayer and can be prayed alone or with family." },
            ]} />
            <RelatedArticles currentSlug="magnificat-prayer-catholic" />
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
