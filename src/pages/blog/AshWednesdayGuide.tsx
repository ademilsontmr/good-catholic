import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";

export default function AshWednesdayGuide() {
  return (
    <>
      <Helmet>
        <title>Ash Wednesday: Meaning, Fasting Rules, and Catholic Guide | Guide Catholic</title>
        <meta name="description" content="What is Ash Wednesday? Learn the Catholic fasting and abstinence rules, the meaning of ashes, if it's a Holy Day of Obligation, and how to start Lent." />
        <meta name="keywords" content="ash wednesday rule, catholic fasting rules ash wednesday, meaning of ash wednesday, is ash wednesday a holy day of obligation" />
        <link rel="canonical" href="https://guidecatholic.com/blog/ash-wednesday-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Ash Wednesday: Meaning, Fasting Rules, and Catholic Guide"
        description="What is Ash Wednesday? Learn the Catholic fasting and abstinence rules, the meaning of ashes, if it's a Holy Day of Obligation, and how to start Lent."
        url="https://guidecatholic.com/blog/ash-wednesday-guide/"
        author="Catholic Faith Guide Team"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Ash Wednesday", url: "https://guidecatholic.com/blog/ash-wednesday-guide/" },
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
              <span className="text-text">Ash Wednesday Guide</span>
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
                  Liturgical Year
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 16, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Ash Wednesday: Meaning, Fasting Rules, and Complete Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                It marks the beginning of Lent, a 40-day season of prayer, fasting, and almsgiving. But what exactly are the rules for Ash Wednesday, and why do Catholics put dirt on their foreheads?
              </p>
            </header>

            <div className="aspect-video bg-orange-100 rounded-2xl flex items-center justify-center mb-10">
              <Flame className="w-24 h-24 text-orange-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                If you walk around any major city on Ash Wednesday, you will undoubtedly see people bearing a dark cross on their foreheads. It is one of the most visible signs of Catholic faith in secular society. 
              </p>
              <p className="text-text leading-relaxed mb-6">
                Ash Wednesday marks the solemn start of the Lenten season. It is a day of repentance, fasting, and acknowledging our mortality as we prepare our hearts for the joy of Easter Sunday. In this guide, we'll break down everything you need to know about Ash Wednesday, from the strict fasting rules to the profound spiritual meaning behind the ashes.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What is the Meaning of the Ashes?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The use of ashes as a sign of repentance has deep biblical roots. In the Old Testament, when the Israelites sinned or experienced great sorrow, they would put on sackcloth and cover themselves in ashes (see Daniel 9:3 and Jonah 3:6). It was a visceral, physical demonstration of internal grief and unworthiness.
              </p>
              <p className="text-text leading-relaxed mb-6">
                When a priest or Eucharistic minister traces the cross on your forehead, they will say one of two phrases:
              </p>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><em>"Repent, and believe in the Gospel."</em> (Mark 1:15)</li>
                <li><em>"Remember that you are dust, and to dust you shall return."</em> (Genesis 3:19)</li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                The ashes serve a dual purpose: they remind us of our bodily mortality (we will all die eventually) and our desperate need for God's mercy and salvation. Interestingly, the ashes used are actually the burnt and blessed palm branches from the previous year's Palm Sunday.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8 mt-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">Are we supposed to keep the ashes on all day?</h3>
                <p className="text-text leading-relaxed">
                  While there is no strict rule demanding that you keep the ashes on your face all day, it is a common and encouraged practice. Wearing the ashes publicly acts as a silent witness of faith to the world. However, if your job strictly forbids it (for hygiene or safety reasons), it is perfectly acceptable to wash them off after Mass.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Strict Rules: Fasting and Abstinence
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Ash Wednesday is one of only two days in the entire Liturgical Year (the other being Good Friday) where the Catholic Church strictly enforces both <strong>fasting</strong> and <strong>abstinence</strong>. These are not just suggestions; under normal circumstances, they are obligations under the pain of sin for Catholics who meet the age requirements.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Rule of Fasting (Age 18 to 59)</h3>
              <p className="text-text leading-relaxed mb-6">
                Fasting means severely reducing the amount of food you eat. The Catholic rule allows for <strong>one full, normal meal</strong> during the day. You may also eat two smaller meals that, when combined, do not equal the size of the full meal. Snacking between meals is prohibited. Fluids, including coffee and water, are always permitted.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">The Rule of Abstinence (Age 14 and up)</h3>
              <p className="text-text leading-relaxed mb-6">
                Abstinence means refraining from eating meat. This includes beef, pork, poultry, and game. You are, however, allowed to eat fish and other seafood, as well as eggs, dairy, and animal-derived broths. Because Ash Wednesday falls on a Wednesday, the abstinence rule applies specifically to this day (and every Friday during Lent).
              </p>

              <p className="text-text leading-relaxed mb-6 italic text-text-muted">
                *Note: The sick, pregnant or nursing mothers, and those with severe medical conditions are heavily exempt from both fasting and abstinence.
              </p>

              <QuizCTA
                title="Are you ready for the Lenten journey?"
                description="Test your knowledge of Catholic traditions and prepare your heart for Easter with our short quiz."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                3 Ways to Maximize Ash Wednesday
              </h2>
              <ul className="list-decimal list-inside text-text space-y-4 mb-6">
                <li>
                  <strong>Go to Confession:</strong> There is no better way to start Lent than with a clean soul. Ash Wednesday is the perfect day to make an examination of conscience and receive the Sacrament of Reconciliation.
                </li>
                <li>
                  <strong>Unplug from the Noise:</strong> In addition to fasting from food, consider a "digital fast." Turn off social media, the radio in your car, or streaming services for the day. Use that silence to talk to God.
                </li>
                <li>
                  <strong>Commit to Your Lenten Penance:</strong> Today is the day to firmly establish what you are "giving up" and what you are "taking on" (like extra prayers or almsgiving) for the next 40 days. Don't be vague; make a concrete plan.
                </li>
              </ul>
            </div>

            <BlogFAQ faqs={[
              {
                question: "Is Ash Wednesday a Holy Day of Obligation?",
                answer: "No. Despite being one of the most highly attended Masses of the year, Ash Wednesday is not a designated Holy Day of Obligation. However, Catholics are strongly encouraged to attend Mass and receive ashes."
              },
              {
                question: "Can non-Catholics receive ashes?",
                answer: "Yes! Because the distribution of ashes is a sacramental and a public sign of repentance, anyone—even non-Catholics and those who have not received First Communion—may come forward to receive ashes."
              },
              {
                question: "Do I have to go to Mass to get ashes?",
                answer: "Typically, yes, ashes are distributed during Mass after the homily. However, many parishes offer shorter 'Liturgy of the Word' services throughout the day just to accommodate work schedules and distribute ashes."
              },
              {
                question: "Can I eat chicken on Ash Wednesday?",
                answer: "No. Chicken is meat, and therefore prohibited on Ash Wednesday (and all Fridays of Lent) for Catholics aged 14 and older."
              }
            ]} />

<RelatedArticles currentSlug="ash-wednesday-guide" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">
                Walk the Journey of Faith
              </h3>
              <p className="text-text-muted mb-6">
                If you want to deepen your relationship with God this Lent, start by understanding where you are right now.
              </p>
              <Link to="/quiz-intro">
                <Button size="lg" className="bg-button hover:bg-button-hover text-button-text">
                  Take the Free Quiz
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
