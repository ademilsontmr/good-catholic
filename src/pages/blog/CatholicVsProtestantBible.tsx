import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicVsProtestantBible() {
  return (
    <>
      <Helmet>
        <title>Catholic vs Protestant Bible: The 7 Missing Books Explained | Guide Catholic</title>
        <meta name="description" content="Why does the Catholic Bible have 73 books and the Protestant Bible 66? Understand the history of the canon, the Deuterocanonical books, and Martin Luther's changes." />
        <meta name="keywords" content="catholic vs protestant bible, 7 missing books bible, deuterocanonical books, apocrypha, catholic canon of scripture" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-vs-protestant-bible/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic vs Protestant Bible: The 7 Missing Books Explained"
        description="Why does the Catholic Bible have 73 books and the Protestant Bible 66? Understand the history of the canon, the Deuterocanonical books, and Martin Luther's changes."
        url="https://guidecatholic.com/blog/catholic-vs-protestant-bible/"
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
              <span className="text-text">Catholic vs Protestant Bible</span>
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
                  Formation & Scriptures
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic vs Protestant Bible: The 7 Missing Books Explained
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                A common point of confusion between Catholics and Protestants is the Bible itself. The Catholic Bible has 73 books, while the Protestant Bible has 66. Where did the missing 7 books go?
              </p>
            </header>

            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-indigo-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                If you walk into a bookstore and pick up a Catholic Bible and a Protestant Bible, you'll quickly notice a difference in the table of contents. While both Bibles share the same 27 books in the New Testament, they differ significantly in the Old Testament. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catholic Old Testament contains 46 books, while the Protestant Old Testament contains only 39. These 7 specific books are known by Catholics as the <strong>Deuterocanonicals</strong> (meaning "second canon"), and by Protestants as the <strong>Apocrypha</strong>. Understanding why this difference exists requires a dive into the early centuries of the Church and the Protestant Reformation of the 1500s.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Are the 7 Missing Books?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The seven books found in Catholic Bibles but removed from Protestant Bibles are:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Tobit</strong></li>
                <li><strong>Judith</strong></li>
                <li><strong>1 Maccabees</strong></li>
                <li><strong>2 Maccabees</strong></li>
                <li><strong>Wisdom</strong></li>
                <li><strong>Sirach (Ecclesiasticus)</strong></li>
                <li><strong>Baruch</strong></li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Additionally, Catholic Bibles include sections of <strong>Daniel</strong> and <strong>Esther</strong> that are missing from the Protestant versions.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8 mt-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Septuagint and the Early Church</h3>
                <p className="text-text leading-relaxed">
                  During the time of Jesus and the Apostles, Greek was the common language of the Roman Empire. Most Jews living outside of Palestine read the Old Testament in a Greek translation called the <em>Septuagint</em>. <strong>The Septuagint included all 46 books of the Catholic Old Testament.</strong> 
                </p>
                <p className="text-text leading-relaxed mt-4">
                  When the Apostles quoted the Old Testament in their New Testament writings, they quoted from the Septuagint about 80% of the time, effectively endorsing these 7 books as inspired Scripture.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How Was the Bible Compiled?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Bible didn't fall from the sky bound in leather. It had to be compiled and defined by the Church. At the Councils of Hippo (393 AD) and Carthage (397 AD), Catholic bishops, heavily influenced by St. Augustine, formally defined the canon of Scripture — securing the 73 books that Catholics read today.
              </p>
              <p className="text-text leading-relaxed mb-6">
                For over a thousand years following these councils, ALL Christians recognized the same 73-book Bible.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why Did Martin Luther Remove Them?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The split happened during the Protestant Reformation in the 16th century. Martin Luther decided to match the Jewish canon of the Old Testament that had been finalized by Rabbinic Jews later on (long after the resurrection of Christ). Those Jewish leaders rejected the Greek Septuagint and firmly established a 39-book Hebrew canon because the Deuterocanonical books were either written in Greek or their Hebrew originals were lost.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Furthermore, Luther took issue with theological concepts found in these books. For example, <strong>2 Maccabees 12:46</strong> says, <em>"It is therefore a holy and wholesome thought to pray for the dead, that they may be loosed from sins."</em> This verse strongly supports the Catholic doctrine of Purgatory. Since Luther rejected Purgatory, he relegated 1 and 2 Maccabees, along with the other 5 books, to an appendix. Later Protestant publishers eventually removed them completely to save printing costs.
              </p>

              <QuizCTA
                title="How well do you know Catholic Scripture?"
                description="Take our faith quiz to see where you can grow deeper in your understanding of Catholic teachings and the Bible."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Did the Council of Trent "Add" These Books?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                A common misconception is that the Catholic Church "added" these 7 books at the Council of Trent in 1546 in response to the Reformation. This is historically inaccurate. The Council of Trent simply reaffirmed the canon that had already been established in 393 AD at the Council of Hippo, dogmatically declaring it binding because the Protestants had begun removing books.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Conclusion: A Complete Bible
              </h2>
              <p className="text-text leading-relaxed mb-6">
                When you read a Catholic Bible, you are reading the Scriptures as they were understood and used by Christ, the Apostles, and the earliest Christians. The Deuterocanonical books offer rich wisdom, historical bridges between the Old and New Testaments, and prophetic insights that enrich our faith immensely. 
              </p>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Can Catholics read a Protestant Bible?",
                answer: "Catholics can read Protestant Bibles for personal study or comparison, but Protestant Bibles are objectively incomplete since they lack 7 inspired books of the Old Testament. For daily reading and prayer, Catholics should use a Catholic edition (like the RSV-CE or NABRE)."
              },
              {
                question: "Did Jesus quote the 7 missing books?",
                answer: "While Jesus did not directly quote them word-for-word, He undeniably drew from their themes. Additionally, the Apostles made numerous allusions to them. For example, Hebrews 11 references the specific martyrdoms detailed in 2 Maccabees."
              },
              {
                question: "What does 'Apocrypha' mean?",
                answer: "It means 'hidden.' Protestants use this term for the 7 books, implying they are not divinely inspired. Catholics refer to these 7 books as 'Deuterocanonical,' meaning they belong to the second canon compiled alongside the primary Hebrew texts."
              },
              {
                question: "Did the original King James Version have the 7 books?",
                answer: "Yes! The original 1611 King James Version contained the Apocrypha in a separate section between the Old and New Testaments. It wasn't until the 1800s that Protestant Bible societies started printing Bibles completely without them."
              }
            ]} />

<RelatedArticles currentSlug="catholic-vs-protestant-bible" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Discover How Your Faith Life Is
              </h3>
              <p className="text-text-muted mb-6">
                Take our quiz and receive a personalized assessment of your Catholic journey.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Quiz Now
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
