import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Coins, Calendar, Clock, ArrowLeft, Heart, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema } from "@/components/blog/ArticleSchema";

export default function CatholicViewOnWealth() {
  return (
    <>
      <Helmet>
        <title>Catholic View on Wealth and Money: Prosperity or Poverty? | Guide Catholic</title>
        <meta name="description" content="What does the Catholic Church teach about money, wealth, and success? Explore the balance between the 'Prosperity Gospel' and the 'Vow of Poverty'." />
        <meta name="keywords" content="catholic view on money, wealth and catholicism, prosperity gospel vs catholicism, catholic social teaching wealth, stewardship catholic" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-view-on-wealth/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Catholic View on Wealth and Money: Prosperity or Poverty?"
        description="What does the Catholic Church teach about money, wealth, and success? Explore the balance between the 'Prosperity Gospel' and the 'Vow of Poverty'."
        url="https://guidecatholic.com/blog/catholic-view-on-wealth/"
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
              <span className="text-text">Catholic View on Wealth</span>
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
                  Social Teaching
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  14 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Catholic View on Wealth and Money: Prosperity or Poverty?
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Is it a sin to be rich? Does God want all Christians to be poor? In a world obsessed with success and a "Prosperity Gospel" that promises wealth for faith, the Catholic Church offers a deeply balanced and challenging middle path: the way of <strong>Stewardship</strong>.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Coins className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic Church does not hate money. In fact, many great saints were wealthy kings, queens, and merchants. However, the Church teaches that money is a <strong>dangerous tool</strong>—it can be used to build the Kingdom of Heaven or it can become a "golden calf" that leads to spiritual destruction.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Concept of Stewardship
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The core of Catholic teaching on wealth is that we do not "own" anything. Everything we have—our talent, our time, and our bank account—is a gift from God. We are merely <strong>stewards</strong> (managers) of His resources.
              </p>
              <p className="text-text leading-relaxed mb-6">
                At the end of our lives, we will have to give an account of how we used what was entrusted to us. Did we use it only for our own comfort, or did we use it to serve others?
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 text-red-700">
                2. The Trap of the "Prosperity Gospel"
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The Church rejects the modern "Prosperity Gospel"—the idea that if you have enough faith or give enough money to a ministry, God will reward you with financial wealth.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Jesus did not promise luxury; He promised a Cross. While God does bless many people with financial success, these blessings are not a metric of holiness. Some of the holiest people in history died in utter poverty.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-text mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-600" />
                  The Two Pillars of Wealth:
                </h3>
                <ul className="list-disc list-inside text-text space-y-2">
                  <li><strong>The Right to Private Property:</strong> The Church supports the right of individuals to own property and build wealth through honest work.</li>
                  <li><strong>The Universal Destination of Goods:</strong> This right is balanced by the fact that the earth and its resources are intended by God for the <strong>whole</strong> human race. Excess wealth is not truly ours; it belongs to those who have nothing.</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. The Virtue of Generosity (Almsgiving)
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In the Catholic view, giving to the poor is not a "nice option"—it is a <strong>demand of justice</strong>. St. John Chrysostom famously said: *"Not to share our own riches with the poor is a robbery of the poor, and a depriving them of their livelihood."*
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church recommends the "Tithe" (10%) as a biblical benchmark, but more than the percentage, it looks at the <strong>sacrifice</strong>. (Recall the widow's mite in Mark 12:41-44).
              </p>

              <QuizCTA
                title="How do you view your possessions?"
                description="Take our quiz to reflect on your relationship with money and discover the freedom of Catholic stewardship."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Vow of Poverty vs. The Spirit of Poverty
              </h2>
              <p className="text-text leading-relaxed mb-6">
                While religious monks and nuns take a literal Vow of Poverty, every lay Catholic is called to the <strong>Spirit of Poverty</strong> (also known as Detachment). This means that even if you have a million dollars, your heart must not be "attached" to it. You must be willing to lose it all for the sake of Christ.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed">
                  "For where your treasure is, there your heart will be also." — Matthew 6:21
                </p>
              </div>
            </div>

            <RelatedArticles currentSlug="catholic-view-on-wealth" />

            <BlogFAQ faqs={[
              {
                question: "Is it a sin to be a millionaire?",
                answer: "No. Wealth itself is neutral. It is the *love of money* (avarice) that is the root of evil. If you earned your wealth honestly and use it generously to support your family, the Church, and the poor, your wealth can be a source of great virtue."
              },
              {
                question: "How much should I give to the Church?",
                answer: "The 'Tithe' (10% of gross income) is a traditional Christian standard, but the Catholic Church does not have a strict mandatory law. You are called to give 'proportionately' to what you have, ensuring you support your local parish and those in need."
              },
              {
                question: "Does the Church believe in Capitalism or Socialism?",
                answer: "Neither perfectly fits. The Church supports the freedom of the market (Capitalism) but rejects its 'wild' form that ignores the poor. It rejects Socialism because it denies the right to private property and religious freedom. The Church proposes its own 'Social Doctrine' centered on the dignity of the person."
              }
            ]} />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Find Your True Wealth
              </h3>
              <p className="text-text-muted mb-6">
                True success is found in following God's will. Take our quiz to start your journey toward spiritual freedom.
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
