import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Coins, Calendar, Clock, ArrowLeft, Heart, Scale, Landmark, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Catholic View on Wealth", url: "https://guidecatholic.com/blog/catholic-view-on-wealth/" },
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
              <ArticleByline />
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

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Catholic teaching on wealth: private property is legitimate but subordinate to universal destination of goods — the rich must practice stewardship, tithing, and justice to the poor. Wealth without generosity endangers salvation (Luke 18:25).</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">
                The Catholic Social Doctrine is often called the Church's "best-kept secret." At its heart lies a radical balance between the individual's right to property and the community's right to common resources.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                1. The Universal Destination of Goods
              </h2>
              <p className="text-text leading-relaxed mb-6">
                According to the <strong>Catechism (CCC 2402-2406)</strong>, the Earth was given by God to the *whole* human race. This means that while private property is legitimate and necessary for human dignity, it is not an "absolute" right. 
              </p>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">
                St. John Paul II famously wrote that private property is under a "social mortgage" (Sollicitudo Rei Socialis 42). This means that if you own land, a business, or millions of dollars, you have a moral obligation to manage those assets in a way that benefits others. In the Catholic view, you are not an "owner," but a "steward" of God's property.
              </LinkedText>

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

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Scripture Says About Riches</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">The Old Testament treats prosperity as a blessing but builds the poor into the economy. Farmers were told to leave the edges of their fields and the fallen grapes for the poor and the foreigner (Leviticus 19:9–10), debts were to be released every seventh year (Deuteronomy 15), and prophets such as Amos condemned merchants who cheated the needy with false scales (Amos 8:4–6).</LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">Jesus sharpens the warning. The rich young man goes away sad because he has many possessions, and Jesus says it is easier for a camel to pass through the eye of a needle than for a rich person to enter the kingdom, adding that all things are possible for God (Mark 10:17–27). The rich fool builds bigger barns and dies that night (Luke 12:16–21), and the rich man in the parable of Lazarus is condemned not for wealth itself but for ignoring the beggar at his gate (Luke 16:19–31). Yet Zacchaeus keeps his household after giving half his goods to the poor (Luke 19:8), and women of means supported Jesus&apos; ministry from their own resources (Luke 8:3). St. Paul instructs the rich not to be proud or to trust in uncertain riches but to be generous and ready to share (1 Timothy 6:17–18).</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Seventh Commandment in the Catechism (CCC 2402–2449)</h2>

              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Private property is a right (CCC 2403),</strong> but it serves the universal destination of goods, which remains primary.</li>
                <li><strong>Owners are stewards (CCC 2404):</strong> quoting the Second Vatican Council, the Catechism says goods legitimately owned should be regarded as common to others as well, in the sense that they benefit others besides the owner.</li>
                <li><strong>Profit cannot be the only rule (CCC 2424–2425):</strong> the Church rejects the totalitarian ideologies associated with communism and also an economy governed solely by market forces that places capital above human labor.</li>
                <li><strong>A just wage (CCC 2434):</strong> refusing or withholding fair pay is a grave injustice.</li>
                <li><strong>Love for the poor (CCC 2443–2449):</strong> citing St. John Chrysostom, the Catechism teaches that failing to share with the poor is a kind of theft, since what we have is not only ours but theirs; it speaks of the Church&apos;s love of preference for the poor (CCC 2448).</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2. Rerum Novarum: The Catholic Response to Modernity
              </h2>
              <p className="text-text leading-relaxed mb-6">
                In 1891, <strong>Pope Leo XIII</strong> issued <em>Rerum Novarum</em>, arguably the most important document in Catholic economic history. He rejected both unbridled Capitalism (which treated workers as machines) and atheistic Socialism (which denied the right to property and family).
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Church proposes a "Third Way": a market economy that is centered on the <strong>human person</strong>. This includes the right to a "Just Wage," the right to unionize, and the duty of the state to protect the most vulnerable.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Encyclicals That Followed Rerum Novarum</h2>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">Rerum Novarum began a line of papal teaching that later popes often marked on its anniversaries. Pius XI&apos;s Quadragesimo Anno (1931) formulated the principle of subsidiarity. John XXIII&apos;s Mater et Magistra (1961) and Paul VI&apos;s Populorum Progressio (1967) widened the lens to global development, with Paul VI calling development the new name for peace. John Paul II wrote Laborem Exercens (1981) on the priority of labor over capital, Sollicitudo Rei Socialis (1987), where he described property as carrying a social mortgage, and Centesimus Annus (1991), which accepted a market economy bounded by a strong legal framework serving human freedom. Benedict XVI&apos;s Caritas in Veritate (2009) asked for gratuitousness and gift within economic life, and Francis&apos;s Laudato Si&apos; (2015) and Fratelli Tutti (2020) tied wealth to care for creation and social friendship.</LinkedText>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">When Cardinal Robert Prevost was elected in May 2025, he explained that he chose the name Leo XIV partly because Leo XIII had answered the social question of the first industrial revolution, and the Church now faces another upheaval with artificial intelligence and its effects on human dignity, justice, and work.</LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3. Poverty vs. Misery: A Theological Nuance
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">
                In Catholic theology, these are two very different things:
              </LinkedText>
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
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="catholic-view-on-wealth">
                How should a Catholic millionaire or a middle-class worker live? 
              </LinkedText>
              <ul className="list-decimal list-inside text-text space-y-3 mb-10">
                <li><strong>Ethical Investing:</strong> Check if your stocks or funds support industries that violate human life or dignity.</li>
                <li><strong>Proportional Almsgiving:</strong> Don't give "what is left over." Build a budget that puts God and the poor first.</li>
                <li><strong>Just Wage:</strong> If you own a business or hire a contractor, are you paying them fairly according to the local cost of living?</li>
              </ul>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-6 mb-6">
                <p className="text-text italic text-center leading-relaxed font-semibold">
                  "In his use of things man should regard the external goods he legitimately owns not merely as exclusive to himself but common to others also, in the sense that they can benefit others as well as himself." — Catechism of the Catholic Church, 2404
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
              },
              { question: "Is it a sin to be rich?", answer: "No. Scripture and the Catechism treat wealth as morally neutral and private property as legitimate. The danger is attachment, injustice, and indifference to the poor; wealth must be used as a steward for the common good (CCC 2404)." },
              { question: "What does 'preferential option for the poor' mean?", answer: "It expresses the Church's love of preference for the poor (CCC 2448): Christians, and society, should give special attention to those most in need when making personal, business, and political decisions." },
              { question: "Which social encyclicals should I read first?", answer: "Start with Rerum Novarum (1891) and Centesimus Annus (1991), written a century apart. Then read the Catechism on the seventh commandment, CCC 2402 to 2449, for a concise summary." },
            ]} />

<RelatedArticles currentSlug="catholic-view-on-wealth" />

            <ArticleBottomCTA title="Invest in Eternity" description="Your relationship with money says a lot about your relationship with God. Take our quiz to find the perfect balance." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
