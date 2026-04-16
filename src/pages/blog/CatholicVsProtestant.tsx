import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft, Scale, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicVsProtestant() {
  return (
    <>
      <Helmet>
        <title>Catholic vs Protestant: The Expert Theological Comparison | Guide Catholic</title>
        <meta name="description" content="What are the real differences between Catholic and Protestant faiths? Explore Sola Scriptura, the Canon of the Bible, Purgatory, and the Papacy." />
        <meta name="keywords" content="catholic vs protestant, sola scriptura catholic response, sola fide james 2, why 73 books in catholic bible, purgatory biblical basis" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-vs-protestant-differences/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic vs Protestant: Key Differences Explained"
        description="What are the key differences between Catholic and Protestant Christianity? Learn about Scripture and Tradition, the sacraments, the papacy, purgatory, and how to have respectful dialogue."
        url="https://guidecatholic.com/blog/catholic-vs-protestant-differences/"
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
              <span className="text-text">Catholic vs Protestant</span>
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
                  Formation
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  26 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic vs. Protestant: A Deep Theological Analysis
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                For 1,500 years, there was effectively one Church in the West. Then came 1517. Today, the landscape is divided between "The Authority of the Church" and "The Authority of the Individual." Here is the expert breakdown of why we are different and where we still meet.
              </p>
            </header>

            <div className="aspect-video bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 overflow-hidden relative">
               <Scale className="w-24 h-24 text-indigo-400/20 absolute -bottom-4 -left-4" />
               <BookOpen className="w-32 h-32 text-indigo-400 relative z-10" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Protestant Reformation wasn't just a political split; it was a revolution in <strong>Epistemology</strong> (how we know what is true). While Protestants and Catholics share 90% of the Creed—including the Trinity and the Resurrection—the 10% we disagree on changes how we live our daily lives.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Authority Crisis: Sola Scriptura
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Protestants hold to <em>Sola Scriptura</em> (The Bible Alone). Catholics respond with a simple historical fact: <strong>The Church preceded the Bible</strong>. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                For the first 350 years of Christianity, there was no final list of New Testament books. It was the Catholic Church, at the <strong>Councils of Hippo (393) and Carthage (397)</strong>, that determined which books were inspired. Without the infallible authority of the Church, we wouldn't even know which books belong in the Bible.
              </p>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                  The "Missing" 7 Books
                </h3>
                <p className="text-sm text-text-muted mb-4 text-center">Why does the Catholic Bible have 73 books and the Protestant 66?</p>
                <div className="text-sm leading-relaxed space-y-4">
                  <p>During the Reformation, many leaders removed 7 books (Judith, Tobit, 1 & 2 Maccabees, Wisdom, Sirach, Baruch) because they were written in Greek and contained "too many" Catholic doctrines, like praying for the dead.</p>
                  <p><strong>Catholic Position:</strong> These books (the Deuterocanon) were part of the Septuagint—the Bible used by Jesus and the Apostles themselves. We are not adding books; others are taking them away.</p>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Sola Fide vs. Faith Working through Love
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Protestants often say we are saved by "Faith Alone." Interestingly, the only place in the entire Bible where the words "faith alone" appear together is <strong>James 2:24</strong>, which states: "You see that a man is justified by works and <em>not by faith alone</em>."
              </p>
              <p className="text-text leading-relaxed mb-6">
                Catholics do not believe we "earn" Heaven. Salvation is 100% a gift of God's grace. However, we believe that grace must transform us. Good works are not "extra credit"; they are the fruit that proves the tree is alive.
              </p>

              <QuizCTA
                title="Do you know why you believe what you believe?"
                description="Take our quiz to analyze your understanding of the pillars of the faith and learn how to defend the 2,000-year-old Tradition of the Church."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Heart className="w-6 h-6 text-accent" />
                 Ecumenism: The Prayer for Unity
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Despite our serious differences, Jesus prayed "that they may all be one" (John 17:21). Catholics are called to engage in <strong>Ecumenism</strong>—not by compromising the truth, but by searching for common ground and praying for the day when we can all share the same Eucharistic Table.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "The things that we have in common are greater than the things that divide us." — Pope St. John XXIII
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-vs-protestant-differences" />

            <BlogFAQ faqs={[
              {
                question: "Do Catholics worship Mary?",
                answer: "No. This is the most common Protestant misunderstanding. We honor (dulia) Mary as a queen and a mother, but we worship (latria) God alone. Asking Mary to pray for us is no different than asking a friend on earth to pray for us—except Mary is even closer to Jesus."
              },
              {
                question: "Why do Catholics have a Pope while Protestants don't?",
                answer: "Catholics believe that the Church is a family, and a family needs a 'father' figure (Papa) to maintain unity. Without a central authority, Protestantism has fragmented into tens of thousands of groups, each interpreting the Bible differently."
              },
              {
                question: "Wait, so is a Protestant saved?",
                answer: "The Church recognizes all validly baptized Christians as our 'separated brothers.' While they lack the fullness of the means of salvation (the 7 sacraments), they are united to Christ through their baptism and faith."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Equip Your Soul for Dialogue
              </h3>
              <p className="text-text-muted mb-6">
                Charity begins with understanding. Take our quiz to receive a personalized learning path about the history of the Church.
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
