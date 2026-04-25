import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Heart, Calendar, Clock, ArrowLeft, Hand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function OurLadyUndoerOfKnots() {
  return (
    <>
      <Helmet>
        <title>Our Lady Undoer of Knots: History and Novena | Guide Catholic</title>
        <meta name="description" content="Discover the history of Our Lady Undoer of Knots, why Pope Francis loves this devotion, and how to pray the novena to untie the difficult knots in your life." />
        <meta name="keywords" content="our lady undoer of knots, mary undoer of knots novena, history of undoer of knots, pope francis devotion mary, how to pray undoer of knots" />
        <link rel="canonical" href="https://guidecatholic.com/blog/our-lady-undoer-of-knots/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Our Lady Undoer of Knots: History and complete Novena Guide"
        description="Discover the history of Our Lady Undoer of Knots, why Pope Francis loves this devotion, and how to pray the novena to untie the difficult knots in your life."
        url="https://guidecatholic.com/blog/our-lady-undoer-of-knots/"
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
              <span className="text-text">Our Lady Undoer of Knots</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Devotions
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  13 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Our Lady Undoer of Knots: The History and The Novena
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                We all have "knots" in our lives—problems that seem hopelessly tangled, relationships that are broken, or habits we cannot overcome. This 300-year-old devotion, popularized worldwide by Pope Francis, reminds us that no knot is too tight for the Mother of God to untie.
              </p>
            </header>

            <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center mb-10">
              <Hand className="w-24 h-24 text-blue-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The image of <em>Maria Knotenlöserin</em> (Mary, Undoer of Knots) is more than a beautiful painting; it is a theological statement. It is based on a meditation by Saint Irenaeus of Lyons in the 2nd century, who wrote: <strong>"The knot of Eve's disobedience was untied by Mary's obedience."</strong>
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The History: A Marriage Saved
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The devotion originated in Germany in the early 1700s. A couple, Wolfgang Langenmantel and Sophie Imhoff, were on the verge of divorce. Wolfgang visited a Jesuit priest, Father Jakob Rem, for advice. During their final meeting, Father Rem took the couple's wedding ribbon (used in the ceremony to bind their hands as a sign of union) and lifted it up before an image of the Blessed Virgin. 
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                As he smoothed the ribbon, it miraculously turned snow-white, and the knots that had been tied in it (representing their conflicts) disappeared. The marriage was saved. Decades later, their grandson commissioned a painting of Mary "Untying the Knots" to commemorate this miracle.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Pope Francis and the Worldwide Spread
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                For centuries, the devotion was mostly local to Bavaria. In the 1980s, a young priest from Argentina named **Jorge Mario Bergoglio** (the future Pope Francis) saw the painting in Augsburg, Germany. He was so moved by it that he brought postcards back to Argentina and began promoting the devotion.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                As Archbishop of Buenos Aires and later as Pope, he has continued to spread this prayer, seeing it as the perfect remedy for the "tangled" lives of modern people.
              </LinkedText>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-4 text-center">How to Pray the Novena</h3>
                <p className="text-text mb-4">
                  The Novena to Our Lady Undoer of Knots is typically prayed over nine days. It is often combined with the Rosary.
                </p>
                <div className="space-y-4">
                  <p className="text-text italic">
                    "Holy Mary, Mother of God and our Mother, you who with a mother's face untie the knots that make us stumble in life, I place into your hands the ribbon of my life. You know the knot that paralyzes me [mention your request]. I entrust it to your mercy. Through your intercession and by the power of your Son, my Liberator, may I see this knot untied for the glory of God. Amen."
                  </p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What are the "Knots" in your life?
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The "knots" we face can be many things:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-8">
                <li><strong>Family Knots:</strong> Resentment, lack of communication, or broken marriages.</li>
                <li><strong>Internal Knots:</strong> Guilt, anxiety, addiction, or deep-seated fears.</li>
                <li><strong>External Knots:</strong> Financial struggles, unemployment, or legal issues.</li>
              </ul>

              <QuizCTA
                title="Do you feel stuck in your spiritual journey?"
                description="Take our quiz to find the devotions and prayers that can help you move forward with peace."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                Understanding the Painting's Symbols
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="our-lady-undoer-of-knots">
                The famous painting contains specific details that help us meditate:
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>The Angels:</strong> One angel hands Mary the tangled ribbon of our lives; the other receives the smoothed, untied ribbon on the other side.</li>
                <li><strong>The Holy Spirit:</strong> A dove is positioned above Mary's head, showing that she acts by the power of the Spirit.</li>
                <li><strong>The Serpent:</strong> Mary is shown crushing the head of the serpent, proving that the ultimate "knot" of sin has been defeated by Christ through her.</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "Mary, who unties the knots, pray for us."
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Can I pray this novena for someone else?",
                answer: "Yes. Many people pray this novena for children who have left the faith, for friends in debt, or for family members struggling with addiction. Mary's maternal care extends to all her children."
              },
              {
                question: "Do I have to pray it for 9 days in a row?",
                answer: "The tradition of a novena is nine days, representing the nine days the Apostles prayed in the Upper Room before Pentecost. If you miss a day, simply continue where you left off. The most important thing is the horizontal of your heart, not the legalism of the calendar."
              },
              {
                question: "Why does Pope Francis love this devotion so much?",
                answer: "Pope Francis often speaks about 'mercy' and 'closeness.' He sees Mary not as a distant queen, but as a mother who is willing to get her hands into the messy, tangled realities of our lives to help fix what we cannot fix ourselves."
              }
            ]} />

<RelatedArticles currentSlug="our-lady-undoer-of-knots" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover Your Path to Peace
              </h3>
              <p className="text-text-muted mb-6">
                Whatever knots are tying up your life, God's grace is greater. Take our quiz to find encouragement.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Faith Quiz
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
