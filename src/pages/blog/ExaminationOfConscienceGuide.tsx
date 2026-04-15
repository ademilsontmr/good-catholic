import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, HowToSchema } from "@/components/blog/ArticleSchema";

export default function ExaminationOfConscienceGuide() {
  return (
    <>
      <Helmet>
        <title>How to Make an Examination of Conscience: Complete Catholic Guide | Guide Catholic</title>
        <meta name="description" content="Learn how to make an examination of conscience using the Ignatian Examen and the 10 Commandments. Complete Catholic guide for daily and pre-Confession examination." />
        <meta name="keywords" content="examination of conscience, how to examine conscience, catholic examination of conscience, examen prayer, daily examen" />
        <link rel="canonical" href="https://guidecatholic.com/blog/examination-of-conscience-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="How to Make an Examination of Conscience: Complete Catholic Guide"
          description="Learn how to make an examination of conscience using the Ignatian Examen and the 10 Commandments. Complete Catholic guide for daily and pre-Confession examination."
          url="https://guidecatholic.com/blog/examination-of-conscience-guide/"
        />
        <HowToSchema
          name="How to Make an Examination of Conscience"
          description="Complete Catholic guide to making a daily and pre-Confession examination of conscience."
          url="https://guidecatholic.com/blog/examination-of-conscience-guide/"
          totalTime="PT10M"
          steps={[
            {"name": "Begin with Prayer", "text": "Ask the Holy Spirit to enlighten your mind and help you see your sins clearly."},
          {"name": "Review Your Day", "text": "Go through the events of the day, noticing where you fell short of God's will."},
          {"name": "Examine Against the Commandments", "text": "Review your thoughts, words, and actions against the Ten Commandments and Church precepts."},
          {"name": "Express Sorrow", "text": "Acknowledge your sins with genuine sorrow and ask God for forgiveness."},
          {"name": "Resolve to Amend", "text": "Make a firm resolution to avoid sin and its occasions, and to go to Confession if needed."}
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
              <span className="text-text">Examination of Conscience Guide</span>
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
                  Spirituality
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  April 14, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  11 min read
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                How to Make an Examination of Conscience: Complete Catholic Guide
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The examination of conscience is one of the most powerful spiritual practices in the Catholic tradition. Done daily, it keeps your conscience sensitive, your relationship with God honest, and your soul prepared for the grace of Confession.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-text leading-relaxed mb-6">
                In a culture that rarely encourages honest self-reflection, the Catholic practice of examining one's conscience stands out as countercultural and profoundly liberating. Rather than suppressing guilt or rationalizing sin, the examination of conscience invites us to look honestly at our lives in the light of God's love — not to condemn ourselves, but to receive His mercy and grow in holiness.
              </p>
              <p className="text-text leading-relaxed mb-6">
                There are two main forms of examination of conscience in the Catholic tradition: the Ignatian Examen, a daily prayer practice developed by St. Ignatius of Loyola, and the pre-Confession examination, which uses the Ten Commandments and other moral frameworks to prepare for the Sacrament of Reconciliation. Both are essential tools for the serious Catholic. This guide covers both in detail.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Is the Examination of Conscience?
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The examination of conscience (also called the "examen" or "examination of consciousness") is a prayerful review of one's thoughts, words, actions, and omissions in the presence of God. It is not a psychological exercise in self-analysis but a spiritual practice of standing before God and asking: "Lord, how have I lived this day? Where have I responded to Your grace? Where have I failed?"
              </p>
              <p className="text-text leading-relaxed mb-6">
                The Catechism of the Catholic Church teaches that "the education of the conscience is a lifelong task" (CCC 1784). The examination of conscience is the primary tool for this education. Without regular self-examination, our conscience becomes dull — we stop noticing our sins, we rationalize our failures, and we gradually drift from God without realizing it.
              </p>
              <p className="text-text leading-relaxed mb-6">
                St. Ignatius of Loyola considered the daily Examen so important that he said if a Jesuit could only pray one thing each day, it should be the Examen — not Mass, not the Liturgy of the Hours, but the Examen. This is a remarkable statement from a man who valued prayer above almost everything else.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Ignatian Examen: Five Steps
              </h2>
              <p className="text-text leading-relaxed mb-6">
                St. Ignatius of Loyola (1491–1556), founder of the Jesuits, developed the Examen as a structured daily prayer that reviews the day in God's presence. It takes 10–15 minutes and is typically prayed at the end of the day, though some people pray it at midday as well. Here are the five steps:
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Five Steps of the Ignatian Examen</h3>
                <div className="space-y-4 text-text">
                  <div>
                    <p className="font-semibold">1. Gratitude — Give thanks</p>
                    <p className="text-sm mt-1">Begin by recalling the gifts of the day. What are you grateful for? A conversation, a meal, a moment of beauty, a grace received? Gratitude opens the heart and sets the right tone for honest self-reflection.</p>
                  </div>
                  <div>
                    <p className="font-semibold">2. Petition — Ask for light</p>
                    <p className="text-sm mt-1">Ask the Holy Spirit to illuminate your conscience. You cannot examine yourself accurately without God's help. Pray: "Lord, show me where I have been faithful and where I have fallen short."</p>
                  </div>
                  <div>
                    <p className="font-semibold">3. Review — Walk through the day</p>
                    <p className="text-sm mt-1">Slowly review the day from morning to now. Notice the moments of consolation (when you felt close to God, at peace, loving) and desolation (when you felt distant from God, anxious, selfish). Where did you respond well to grace? Where did you resist it?</p>
                  </div>
                  <div>
                    <p className="font-semibold">4. Contrition — Express sorrow</p>
                    <p className="text-sm mt-1">For the moments of failure, express genuine sorrow. Not self-flagellation, but honest acknowledgment: "Lord, I was impatient with my spouse. I was dishonest in that conversation. I neglected prayer this morning. I am sorry." Ask for forgiveness and the grace to do better.</p>
                  </div>
                  <div>
                    <p className="font-semibold">5. Resolution — Look forward</p>
                    <p className="text-sm mt-1">End by looking to tomorrow. Is there a specific area where you want to grow? A relationship to repair? A virtue to practice? Make a concrete resolution and ask God for the grace to keep it.</p>
                  </div>
                </div>
              </div>

              <QuizCTA
                title="How is your spiritual life?"
                description="Take our quiz and receive a personalized assessment of your Catholic faith journey — including practical steps for growth in prayer and virtue."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Examination Before Confession: Using the Ten Commandments
              </h2>
              <p className="text-text leading-relaxed mb-6">
                Before going to Confession, Catholics are expected to make a thorough examination of conscience — reviewing their sins since their last Confession. The most traditional framework for this is the Ten Commandments, which cover the full range of our obligations to God and neighbor.
              </p>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                Examination by the Ten Commandments
              </h3>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>1st Commandment (No other gods):</strong> Have I put anything before God — money, pleasure, approval, comfort? Have I practiced superstition, consulted horoscopes, or engaged in occult practices?</li>
                <li><strong>2nd Commandment (No taking God's name in vain):</strong> Have I used God's name carelessly or as a curse? Have I made promises in God's name that I didn't keep?</li>
                <li><strong>3rd Commandment (Keep holy the Sabbath):</strong> Have I missed Mass on Sundays or holy days of obligation without a serious reason? Have I treated Sunday as just another day?</li>
                <li><strong>4th Commandment (Honor father and mother):</strong> Have I been disrespectful to parents, teachers, or legitimate authority? Have I neglected my duties to my family?</li>
                <li><strong>5th Commandment (Do not kill):</strong> Have I harmed anyone physically or emotionally? Have I harbored hatred, anger, or resentment? Have I supported abortion or euthanasia?</li>
                <li><strong>6th Commandment (Do not commit adultery):</strong> Have I been faithful to my spouse in thought, word, and deed? Have I viewed pornography? Have I engaged in sexual activity outside of marriage?</li>
                <li><strong>7th Commandment (Do not steal):</strong> Have I taken what doesn't belong to me? Have I been dishonest in business? Have I failed to pay just wages or debts?</li>
                <li><strong>8th Commandment (Do not bear false witness):</strong> Have I lied? Have I gossiped or damaged someone's reputation? Have I failed to keep confidences?</li>
                <li><strong>9th Commandment (Do not covet your neighbor's wife):</strong> Have I entertained lustful thoughts? Have I deliberately sought out occasions of sexual temptation?</li>
                <li><strong>10th Commandment (Do not covet your neighbor's goods):</strong> Have I been envious of others' success, possessions, or relationships? Have I been greedy or materialistic?</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Daily vs. Pre-Confession Examination
              </h2>
              <p className="text-text leading-relaxed mb-6">
                The daily Examen and the pre-Confession examination serve different purposes. The daily Examen is a prayer practice focused on growing in self-awareness and intimacy with God. It is not primarily about cataloguing sins but about noticing the movements of grace and resistance in your soul. It takes 10–15 minutes and is done every day.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The pre-Confession examination is more systematic and thorough. It reviews your sins since your last Confession, using the Ten Commandments or another moral framework to ensure you haven't forgotten anything serious. It is done before going to Confession — ideally the day before, so you have time to reflect without rushing.
              </p>
              <p className="text-text leading-relaxed mb-6">
                The two practices complement each other beautifully. The daily Examen keeps your conscience sensitive throughout the year, so that when you come to Confession, you already have a clear sense of your spiritual state. Catholics who practice the daily Examen consistently report that their Confessions become more honest, more specific, and more fruitful.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Scrupulosity vs. Healthy Conscience
              </h2>
              <p className="text-text leading-relaxed mb-6">
                One important caution: the examination of conscience should lead to freedom, not anxiety. Scrupulosity is a spiritual disorder in which a person is excessively anxious about sin, confessing the same sins repeatedly, doubting whether they were truly forgiven, and living in constant fear of damnation. This is not healthy conscience — it is a distortion of it.
              </p>
              <p className="text-text leading-relaxed mb-6">
                A healthy conscience is sensitive but not paralyzed. It notices sin clearly, brings it to God with genuine sorrow, receives forgiveness with trust, and moves forward without excessive guilt. St. Francis de Sales wrote: "Have patience with all things, but chiefly have patience with yourself. Do not lose courage in considering your own imperfections, but instantly set about remedying them — every day begin the task anew."
              </p>
              <p className="text-text leading-relaxed mb-6">
                If you struggle with scrupulosity, speak with a good confessor or spiritual director. The examination of conscience is meant to be a source of peace and growth, not torment.
              </p>
            </div>

            <RelatedArticles currentSlug="examination-of-conscience-guide" />

            <BlogFAQ faqs={[
              {
                question: "What is the examination of conscience?",
                answer: "The examination of conscience is a prayerful review of one's thoughts, words, actions, and omissions in the presence of God. It is a spiritual practice of honestly assessing how you have lived — where you have responded to God's grace and where you have fallen short — in order to grow in holiness and prepare for the Sacrament of Confession."
              },
              {
                question: "What is the Ignatian Examen?",
                answer: "The Ignatian Examen is a daily prayer practice developed by St. Ignatius of Loyola. It consists of five steps: gratitude (giving thanks for the day's gifts), petition (asking the Holy Spirit for light), review (walking through the day noticing consolations and desolations), contrition (expressing sorrow for failures), and resolution (looking forward with a concrete intention for tomorrow). It takes 10–15 minutes."
              },
              {
                question: "How often should I examine my conscience?",
                answer: "The daily Examen should be done every day, ideally at the end of the day. A more thorough pre-Confession examination should be done before each Confession. St. Ignatius considered the daily Examen so important that he said it was the one prayer a Jesuit should never omit, even if he had to skip everything else."
              },
              {
                question: "What is the difference between the daily Examen and the pre-Confession examination?",
                answer: "The daily Examen is a prayer practice focused on growing in self-awareness and intimacy with God. It notices the movements of grace and resistance throughout the day. The pre-Confession examination is more systematic, reviewing specific sins since your last Confession using the Ten Commandments or another moral framework. Both are valuable and complement each other."
              },
              {
                question: "What is scrupulosity and how is it different from a healthy conscience?",
                answer: "Scrupulosity is a spiritual disorder characterized by excessive anxiety about sin — repeatedly confessing the same sins, doubting forgiveness, and living in constant fear. A healthy conscience is sensitive but not paralyzed: it notices sin clearly, brings it to God with genuine sorrow, receives forgiveness with trust, and moves forward without excessive guilt. If you struggle with scrupulosity, speak with a confessor or spiritual director."
              }
            ]} />

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
