import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Coins, Calendar, Clock, ArrowLeft, Heart, Scale, Landmark, Sparkles } from "lucide-react";
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
        <meta name="keywords" content="catholic view on money, wealth and catholicism, prosperity gospel vs catholicism, catholic social teaching wealth, stewardship catholic, rerum novarum, universal destination of goods" />
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
                  22 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Gold, God, and the Gospel: A Catholic Masterclass on Wealth
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                Is wealth a blessing or a curse? In an age of stark inequality and the loud promises of the "Prosperity Gospel," the Catholic Church offers a nuanced, 2,000-year-old wisdom. It neither condemns wealth nor ignores the poor, but introduces a revolutionary concept: <strong>The Social Mortgage</strong>.
              </p>
            </header>

            <div className="aspect-video bg-emerald-50 rounded-2xl flex items-center justify-center mb-10">
              <Coins className="w-24 h-24 text-emerald-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                The Catholic Social Doctrine is often called the Church's "best-kept secret." At its heart lies a radical balance between the individual's right to property and the community's right to common resources.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Universal Destination of Goods
              </h2>
              <p className="text-text leading-relaxed mb-6">
                According to the <strong>Catechism (CCC 2402-2406)</strong>, the Earth was given by God to the *whole* human race. This means that while private property is legitimate and necessary for human dignity, it is not an "absolute" right. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. John Paul II famously wrote that **private property has a "social mortgage."** This means that if you own land, a business, or millions of dollars, you have a moral obligation to manage those assets in a way that benefits others. In the Catholic view, you are not an "owner," but a "steward" of God's property.
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-6 text-center flex items-center justify-center gap-2 text-xl">
                  <Scale className="w-6 h-6 text-emerald-600" />
                  The Two Pillars of Social Balance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-emerald-800 mb-2">Solidarity</h4>
                    <p className="text-sm">The firm determination to commit oneself to the common good. We are our brother's keeper.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-800 mb-2">Subsidiarity</h4>
                    <p className="text-sm">The principle that higher authorities (like the State) should not interfere with local or family initiatives unless necessary.</p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Rerum Novarum: The Catholic Response to Modernity
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1891, <strong>pope Leo XIII</strong> issued <em>Rerum Novarum</em>, arguably the most important document in Catholic economic history. He rejected both unbridled Capitalism (which treated workers as machines) and atheistic Socialism (which denied the right to property and family).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church proposes a "Third Way": a market economy that is centered on the <strong>human person</strong>. This includes the right to a "Just Wage," the right to unionize, and the duty of the state to protect the most vulnerable.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. Poverty vs. Misery: A Theological Nuance
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In Catholic theology, these are two very different things:
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-8">
                <li><strong>Poverty (Virtue):</strong> Being "poor in spirit." A detachment from material things so that God is your primary treasure. This is a virtue for all Catholics, rich or poor.</li>
                <li><strong>Misery (Evil):</strong> The systemic lack of basic needs (food, water, shelter, dignity). The Church views misery as an evil that must be actively fought through charity and justice.</li>
              </ul>

              <QuizCTA
                title="Are you a faithful steward?"
                description="Take our quiz to reflect on your financial priorities through the lens of Catholic Social Teaching."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                 <Sparkles className="w-6 h-6 text-accent" />
                 Practical Expert Advice for Laypeople
              </h2>
              <p className="text-text leading-relaxed mb-6">
                How should a Catholic millionaire or a middle-class worker live? 
              </p>
              <ul className="list-decimal list-inside text-text space-y-3 mb-10">
                <li><strong>Ethical Investing:</strong> Check if your stocks or funds support industries that violate human life or dignity.</li>
                <li><strong>Proportional Almsgiving:</strong> Don't give "what is left over." Build a budget that puts God and the poor first.</li>
                <li><strong>Just Wage:</strong> If you own a business or hire a contractor, are you paying them fairly according to the local cost of living?</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "It is much more difficult to be rich and holy than to be poor and holy. But the rich man who uses his wealth for God is an apostle of the first order." — St. Josemaría Escrivá
                </p>
              </div>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Wait, so is Capitalism 'Catholic'?",
                answer: "The Church supports the freedom of initiative and the market (often called 'Capitalism' or 'Free Economy'), but only if it is bounded by a strong legal and ethical framework that protects the common good. A market without ethics is, in the eyes of the Church, a 'deadly economy'."
              },
              {
                question: "What did St. Thomas Aquinas say about private property?",
                answer: "He taught that private property is necessary for civil order and efficiency, but that regarding the *use* of things, a man should consider them not just as his own, but as common—meaning he should be ready to share them in times of another's need."
              },
              {
                question: "Does the Church require tithing exactly 10%?",
                answer: "The 10% tithe is a biblical benchmark from the Old Testament. While the New Testament and the Code of Canon Law (Can. 222) require that we support the needs of the Church and the poor, they don't specify a fixed percentage. We are called to give 'as much as our heart and means allow'."
              }
            ]} />

<RelatedArticles currentSlug="catholic-view-on-wealth" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Invest in Eternity
              </h3>
              <p className="text-text-muted mb-6">
                Your relationship with money says a lot about your relationship with God. Take our quiz to find the perfect balance.
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
