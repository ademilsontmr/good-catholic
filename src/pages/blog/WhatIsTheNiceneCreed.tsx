import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Landmark, Sparkles, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function WhatIsTheNiceneCreed() {
  return (
    <>
      <Helmet>
        <title>Nicene Creed: Full Text, History & Meaning (Catholic) | Guide Catholic</title>
        <meta name="description" content="The Nicene Creed Catholics recite at Mass — full text, Council of Nicaea history, what each line means, and why the Creed still matters in 2026." />
        <meta name="keywords" content="nicene creed, the nicene creed, nicene creed text, council of nicaea 325, homoousios meaning, filioque controversy, history of the creed" />
        <link rel="canonical" href="https://guidecatholic.com/blog/what-is-the-nicene-creed/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Nicene Creed: Full Text, History & Meaning (Catholic)"
        description="The Nicene Creed Catholics recite at Mass — full text, Council of Nicaea history, what each line means, and why the Creed still matters in 2026."
        url="https://guidecatholic.com/blog/what-is-the-nicene-creed/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "What Is the Nicene Creed?", url: "https://guidecatholic.com/blog/what-is-the-nicene-creed/" },
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
              <span className="text-text">What Is the Nicene Creed?</span>
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
                  Formation & Doctrine
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  25 min read
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Nicene Creed: Full Text, History & Meaning (Catholic)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every Sunday, we stand and recite the Creed. But behind these ancient words lies a story of political exile, street riots, and a theological battle over a single "iota" that determined whether we worship Jesus as God or merely as a "super-hero."
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Landmark className="w-24 h-24 text-indigo-400/20 absolute -bottom-4 -right-4" />
               <ScrollText className="w-32 h-32 text-indigo-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The Nicene Creed is the Church&apos;s profession of faith at Mass — formulated at Nicaea (325) and Constantinople (381), defining belief in one God, Trinity, Incarnation, Resurrection, one baptism, and life everlasting. Catholics stand and recite it on Sundays.</p>
              </div>

              <p className="text-text leading-relaxed mb-6">
                The Nicene Creed (properly the <em>Niceno-Constantinopolitan Creed</em>) was born at the <strong>Council of Nicaea in 325 AD</strong>. It wasn't written to be a general prayer, but a "border control" to keep out the heresy of <strong>Arianism</strong>—the belief that Jesus was a created being rather than the eternal God.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The "Iota" that Changed Everything
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In the 4th century, the battle was over a single Greek word: <strong>Homoousios</strong>. It means "of the same substance." The Arians wanted to add one tiny letter, an "i" (iota), to make it <em>Homoiousios</em>, meaning "of *similar* substance." 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">
                One letter would have made the difference between Jesus being the Creator or just the greatest creature. The Church stood firm. By professing "consubstantial with the Father," we declare that the Son is exactly as much God as the Father is.
              </LinkedText>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  Interpreting the Phrases
                </h3>
                <ul className="list-disc list-inside text-text space-y-3 text-sm">
                  <li><strong>"Light from Light":</strong> This is a physical analogy used by the Church Fathers. Just as a beam of sunlight is distinct from the sun but shared the exact same nature and heat, so is the Son distinct from the Father but shared the same divinity.</li>
                  <li><strong>"Begotten, not made":</strong> To "make" is to create something of a different nature (a man makes a table). To "beget" is to produce something of the *same* nature (a man begets a son). Jesus is begotten, not a "made" creature.</li>
                  <li><strong>"Maker of things... invisible":</strong> A direct strike against the Gnostics, who believed the spiritual world was good but the "stinky" physical world was created by an evil second god.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Filioque: The Word that Split East and West
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The most controversial word in the Creed's history is the Latin <strong>Filioque</strong> ("and the Son"). In the section on the Holy Spirit, Catholics say he proceeds from the Father *and the Son*. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Eastern Orthodox Church argues that the Holy Spirit proceeds from the Father *through* the Son. This subtle theological nuance was the main intellectual cause of the <strong>Great Schism of 1054</strong>. For Catholics, the inclusion of the *Filioque* protects the unique relationship between the Son and the Spirit as one unified Godhead.
              </p>

              <QuizCTA
                title="Do you stand for the truth?"
                description="The Creed is a battle cry of the Church. Take our quiz to see if you truly understand the weight of the words you profess every Sunday."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <BookOpen className="w-6 h-6 text-accent" />
                 The "Amem": Looking Toward the Future
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Creed doesn't end with what God did in the past. It ends with an explosive hope: <strong>"I look forward to the resurrection of the dead."</strong> 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="what-is-the-nicene-creed">
                Catholics do not believe in a "disembodied ghost" eternity. We believe our literal bodies will be resurrected, perfected, and rejoined with our souls. The "Life of the world to come" is a physical and spiritual renewal of the entire cosmos.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The Creed is not a collection of abstract ideas, but the map of the Heart of God." — Pope Benedict XVI
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Why do we bow during the Creed?",
                answer: "Catholics bow at the words 'and by the Holy Spirit was incarnate of the Virgin Mary, and became man.' This is to honor the moment the Infinite God became a tiny, vulnerable human being. On the feasts of the Annunciation and Christmas, we genuflect instead of bowing."
              },
              {
                question: "What is the Athanasian Creed?",
                answer: "It is a longer, even more rhythmic creed written later to explain the Trinity in great detail. While not used at Mass, it is a magnificent pillar of Catholic orthodoxy."
              },
              {
                question: "Wait, so is the Creed in the Bible?",
                answer: "The *sentences* of the Creed are all in the Bible. The *structure* was put together by the Church to summarize the Bible. Just as a map summarizes a landscape, the Creed summarizes the Gospel so we don't get lost."
              }
            ]} />

<RelatedArticles currentSlug="what-is-the-nicene-creed" />

            <ArticleBottomCTA title="Strengthen Your Doctrimal Foundation" description="Don't just recite—believe. Take our quiz to receive a personalized guide to growing in your knowledge of Catholic theology." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
