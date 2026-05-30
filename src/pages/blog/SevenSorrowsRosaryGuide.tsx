import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function SevenSorrowsRosaryGuide() {
  return (
    <>
      <Helmet>
        <title>Seven Sorrows Rosary: How to Pray It, Mysteries and Promises | Guide Catholic</title>
        <meta name="description" content="Complete Catholic guide to the Seven Sorrows Rosary (Servite Rosary): the seven sorrows of Mary, how to pray each group of seven Hail Marys, and the devotion's graces." />
        <meta name="keywords" content="seven sorrows rosary, how to pray seven sorrows rosary, servite rosary, dolors of mary, our lady of sorrows devotion" />
        <link rel="canonical" href="https://guidecatholic.com/blog/seven-sorrows-rosary-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Seven Sorrows Rosary: How to Pray It, Mysteries and Promises"
        description="Complete Catholic guide to the Seven Sorrows Rosary (Servite Rosary): the seven sorrows of Mary, how to pray each group of seven Hail Marys, and the devotion's graces."
        url="https://guidecatholic.com/blog/seven-sorrows-rosary-guide/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Seven Sorrows Rosary", url: "https://guidecatholic.com/blog/seven-sorrows-rosary-guide/" },
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
              <span className="text-text">Seven Sorrows Rosary</span>
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
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 13, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Seven Sorrows Rosary: How to Pray It, Mysteries and Promises
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The Seven Sorrows Rosary — also called the Servite Rosary — walks with Our Lady through her seven chief sufferings. It is one of the most moving Marian devotions in the Catholic Church.
              </p>
            </header>

            <div className="aspect-video bg-rose-100 rounded-2xl flex items-center justify-center mb-10">
              <Layers className="w-24 h-24 text-rose-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Seven Sorrows Rosary (Servite Rosary) meditates on seven sorrows of Mary — from Simeon&apos;s prophecy to the burial of Christ. Each sorrow has seven Hail Marys; the devotion was promoted by the Servite order and grants special graces for compassion toward Mary and her Son.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seven Sorrows of Mary</h2>
              <ol className="list-decimal list-inside text-text space-y-2 mb-6">
                <li>The prophecy of Simeon (Luke 2:34-35)</li>
                <li>The flight into Egypt (Matthew 2:13-21)</li>
                <li>The loss of the Child Jesus for three days (Luke 2:41-50)</li>
                <li>Mary meets Jesus carrying the cross</li>
                <li>The crucifixion and death of Jesus (John 19:25-30)</li>
                <li>Mary receives the body of Jesus</li>
                <li>The burial of Jesus</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How the Chaplet Is Structured</h2>
              <p className="text-text leading-relaxed mb-6">
                The Seven Sorrows Rosary uses seven groups of seven beads (seven Hail Marys per sorrow). Between each group, you meditate on the next sorrow and often pray an Our Father. Many chaplets sold for this devotion arrange the beads in seven sets of seven.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Pray It (Simple Outline)</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Begin with the Sign of the Cross.</li>
                <li>Optional introductory prayers (some guides begin with an Act of Contrition or Creed).</li>
                <li>For each of the seven sorrows: announce the sorrow, pray one Our Father, then seven Hail Marys while meditating on that sorrow.</li>
                <li>After the seventh group, pray three Hail Marys in honor of Our Lady's tears, and conclude with the Sign of the Cross or a closing prayer from your booklet.</li>
              </ol>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="seven-sorrows-rosary-guide">
                This devotion is approved and encouraged in the Church. It deepens compassion for Christ's Passion and love for Mary, who stood faithfully at the foot of the cross.
              </LinkedText>

              <QuizCTA
                title="Want a stronger Marian life?"
                description="Take the Catholic life assessment for practical steps on prayer, the Rosary, and devotions."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When to Pray the Seven Sorrows</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>September 15 — Memorial of Our Lady of Sorrows.</li>
                <li>Fridays in Lent or any Friday you want to unite with Christ's Passion.</li>
                <li>When consoling someone in grief or walking through your own suffering.</li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              { question: "What is the Seven Sorrows Rosary?", answer: "It is a Marian chaplet with seven sets of seven Hail Marys, each set meditating on one of the seven sorrows of the Blessed Virgin Mary. It is also called the Servite Rosary." },
              { question: "Is the Seven Sorrows Rosary the same as the regular Rosary?", answer: "No. The Dominican Rosary has five decades and Joyful, Sorrowful, Glorious, and Luminous mysteries. The Seven Sorrows Rosary has seven groups of seven Hail Marys focused only on Mary's sorrows." },
              { question: "Do I need a special chaplet?", answer: "A dedicated Seven Sorrows chaplet makes counting easier, but you can also use a printed guide with any rosary by tracking seven groups of seven." },
              { question: "What are Mary's seven sorrows?", answer: "The traditional list includes the prophecy of Simeon, the flight into Egypt, the loss of Jesus in the Temple, Mary meeting Jesus on the way to Calvary, the crucifixion, Mary receiving Jesus' body, and his burial." },
            ]} />

            <RelatedArticles currentSlug="seven-sorrows-rosary-guide" />

            <ArticleBottomCTA title="Deepen your Catholic devotion" description="Get a personalized guide for prayer and spiritual growth." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
