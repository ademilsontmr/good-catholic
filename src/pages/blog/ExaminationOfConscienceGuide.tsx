import { Helmet } from "react-helmet-async";
import { DailyPrayersHubLink } from "@/components/blog/DailyPrayerExtras";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema, HowToSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { TopicSeriesNav } from "@/components/blog/TopicSeriesNav";

export default function ExaminationOfConscienceGuide() {
  return (
    <>
      <Helmet>
        <title>The Daily Examen: St. Ignatius&apos;s 5 Steps and Scrupulosity | Guide Catholic</title>
        <meta name="description" content="How to pray the daily Ignatian Examen in five steps, how it differs from preparing for Confession, and how to keep a healthy conscience free of scrupulosity." />
        <meta name="keywords" content="daily examen, ignatian examen, examen prayer steps, examination of conscience daily, scrupulosity catholic, healthy conscience" />
        <link rel="canonical" href="https://guidecatholic.com/blog/examination-of-conscience-guide/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <ArticleSchema
          title="The Daily Examen: St. Ignatius's 5 Steps and Scrupulosity"
          description="How to pray the daily Ignatian Examen in five steps, how it differs from preparing for Confession, and how to keep a healthy conscience free of scrupulosity."
          url="https://guidecatholic.com/blog/examination-of-conscience-guide/"
          dateModified="2026-11-19"
        />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "The Daily Examen", url: "https://guidecatholic.com/blog/examination-of-conscience-guide/" },
        ]}
      />
        <HowToSchema
          name="How to Pray the Daily Ignatian Examen"
          description="The five steps of St. Ignatius of Loyola's daily Examen, prayed in about ten to fifteen minutes at the end of the day."
          url="https://guidecatholic.com/blog/examination-of-conscience-guide/"
          totalTime="PT15M"
          steps={[
            {"name": "Give thanks", "text": "Recall the concrete gifts of the day and thank God for them."},
          {"name": "Ask for light", "text": "Ask the Holy Spirit for the grace to see the day as God sees it."},
          {"name": "Review the day", "text": "Walk through the day from waking until now, noticing where you responded to grace and where you resisted it."},
          {"name": "Ask forgiveness", "text": "Tell God simply where you fell short and ask for His mercy."},
          {"name": "Resolve for tomorrow", "text": "Choose one concrete change for tomorrow and ask for the grace to keep it, ending with the Our Father."}
          ]}
        />

      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog/" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">The Daily Examen</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
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
                The Daily Examen: St. Ignatius&apos;s 5 Steps and Scrupulosity
              </h1>

              <p className="text-xl text-text-muted leading-relaxed">
                The Examen is a short evening prayer in which you look back over the day with God. Here is how to pray its five steps, how it fits alongside Confession, and how to keep the habit healthy if you tend toward anxiety or scruples.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-violet-400" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">The daily Examen takes about ten to fifteen minutes: give thanks, ask for light, review the day, ask forgiveness, and resolve for tomorrow. It is a prayer, not a sacrament — it builds self-knowledge and gratitude, while grave sin still needs Confession.</p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                Most of us end the day scrolling, not praying. The Examen offers a different last word: a few quiet minutes in which you ask where God was present today, where you cooperated with His grace, and where you turned away. Practiced daily, it becomes less a self-inspection and more a conversation with Someone who already knows the day better than you do.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Where the Examen Comes From
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                St. Ignatius of Loyola (1491–1556), founder of the Society of Jesus, included a "general examination of conscience" in his Spiritual Exercises. He laid it out in five points: thanking God for benefits received, asking for grace to know one&apos;s sins, reviewing the day hour by hour, asking pardon, and resolving to amend with God&apos;s grace, followed by the Our Father. Modern versions of the Examen are adaptations of that outline.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                Ignatius gave this short prayer a central place in Jesuit life, and Jesuits still pray it daily. Its strength is that it is portable: it needs no book, no chapel and no special posture, only honesty and a few minutes. The Catechism reminds us that "the education of the conscience is a lifelong task" (CCC 1784); the Examen is one of the simplest daily tools for that education.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Pray the Examen: Five Steps
              </h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-4">The Five Steps of the Ignatian Examen</h3>
                <div className="space-y-4 text-text">
                  <div>
                    <p className="font-semibold">1. Gratitude — Give thanks</p>
                    <p className="text-sm mt-1">Name three or four specific gifts from today: the coffee with a friend, a child&apos;s laugh, an answered email, the strength to get through a hard meeting. Ignatius put thanksgiving first because gratitude reminds us that the day was God&apos;s gift before it was our project.</p>
                  </div>
                  <div>
                    <p className="font-semibold">2. Petition — Ask for light</p>
                    <p className="text-sm mt-1">Ask the Holy Spirit to let you see the day truthfully, neither excusing yourself nor condemning yourself. A simple line is enough: &quot;Lord, show me today as You saw it.&quot;</p>
                  </div>
                  <div>
                    <p className="font-semibold">3. Review — Walk through the day</p>
                    <p className="text-sm mt-1">Replay the day from waking to now, like watching a film. Pause where something stands out: a moment of peace or love (consolation), or a moment of irritation, fear, or coldness toward God (desolation). Ask what was happening in your heart at those moments.</p>
                  </div>
                  <div>
                    <p className="font-semibold">4. Forgiveness — Ask pardon</p>
                    <p className="text-sm mt-1">Tell God plainly where you fell short: the sharp reply, the lie of convenience, the prayer you skipped. Ask for mercy. Keep it brief; you are speaking to a Father, not filing a report.</p>
                  </div>
                  <div>
                    <p className="font-semibold">5. Resolution — Look to tomorrow</p>
                    <p className="text-sm mt-1">Pick one concrete thing for tomorrow: apologize to a coworker, put the phone in another room at dinner, pray before the commute. Ask for the grace to do it, and close with an Our Father.</p>
                  </div>
                </div>
              </div>

              <QuizCTA
                title="How is your spiritual life?"
                description="Take our quiz and receive a personalized assessment of your Catholic faith journey — including practical steps for growth in prayer and virtue."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Consolation and Desolation: What You Are Noticing
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                Ignatius taught people to pay attention to the movements of the heart. Consolation is any interior movement that draws you toward God, faith, hope, and love, even when it is quiet. Desolation is the opposite: restlessness, discouragement, or a pull away from prayer and charity. The Examen is not only about sins. Noticing where you felt drawn toward God helps you recognize His action in ordinary life and choose more of what leads there.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                Over weeks, patterns appear. You may notice that you are most impatient when you skip lunch, or most peaceful on days you pray before checking messages. Those patterns are often more useful than a list of individual faults, and they make it easier to name your habitual sins when you do go to Confession.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Making the Habit Stick
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Anchor it:</strong> pray it at the same time each night, such as after brushing your teeth or before turning off the light.</li>
                <li><strong>Keep it short:</strong> ten minutes prayed daily is better than forty minutes once a month.</li>
                <li><strong>Try a midday version:</strong> a two-minute pause at lunch to ask &quot;How am I doing so far?&quot; helps you course-correct before evening.</li>
                <li><strong>Write one line:</strong> some people keep a small notebook with a single sentence of gratitude and one resolution.</li>
                <li><strong>Pray it as a couple or family:</strong> ask everyone for one thing they are grateful for and one thing they are sorry for.</li>
                <li><strong>Don&apos;t quit after a missed night:</strong> just pick it up again the next evening.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                The Examen and Confession: Different Jobs
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                The Examen is a spiritual practice; Confession is a sacrament. The Examen helps you know yourself and grow day by day, and the sorrow you express in it is real prayer. But it does not absolve mortal sin. If the Examen brings a serious sin to light, make an Act of Contrition that night and go to Confession soon.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                The two support each other. People who pray the Examen usually find their Confessions become shorter, clearer, and more honest, because they already know the patterns they need to bring. When it is time to prepare for the sacrament itself, use the full examination by the Ten Commandments elsewhere in this series instead of the daily review.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Scrupulosity vs. a Healthy Conscience
              </h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                For some people, any examination of conscience turns into anxiety. Scrupulosity is a persistent, fearful preoccupation with sin: seeing sin where there is none, treating doubtful matters as certainly grave, confessing the same things repeatedly, and never feeling forgiven. It is a real affliction, not a sign of extra holiness, and it is far more common than most people assume.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                You are in good company if you struggle with it. St. Ignatius describes in his autobiography a period at Manresa when scruples tormented him so badly that he was tempted to despair, and his Spiritual Exercises include notes on scruples drawn from that experience. St. Alphonsus Liguori, patron of confessors and moral theologians, also suffered from scruples for much of his life.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                A healthy conscience is sensitive but not paralyzed. It notices sin clearly, brings it to God, accepts forgiveness, and moves on. A lax conscience sees too little; a scrupulous one sees too much and trusts too little. Both need formation, and the Examen can help either, provided it is prayed with trust in God&apos;s mercy rather than fear of punishment.
              </LinkedText>

              <h3 className="font-display text-xl font-semibold text-text mt-8 mb-3">
                If you tend toward scruples
              </h3>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li><strong>Choose one regular confessor</strong> and follow his guidance, even when your feelings protest. Obedience to a wise confessor is the traditional remedy.</li>
                <li><strong>Shorten the Examen:</strong> put the weight on gratitude and resolution; spend only a minute on faults.</li>
                <li><strong>Don&apos;t re-examine confessed sins.</strong> Once absolved, they are forgiven. Going back over them feeds the anxiety.</li>
                <li><strong>Treat doubts as doubts.</strong> Confessors often tell scrupulous penitents that if they are not sure a sin was mortal, they should not treat it as mortal. Ask your own confessor for the rule he wants you to follow.</li>
                <li><strong>Get help.</strong> Scrupulosity can overlap with obsessive-compulsive disorder. A Catholic-friendly therapist and your confessor can work together; seeking treatment is not a lack of faith.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="examination-of-conscience-guide">
                The aim of any examination of conscience is peace with God, not perfect certainty about yourself. If your Examen consistently leaves you more frightened than grateful, that is a sign to adjust it with your confessor or spiritual director, not to try harder.
              </LinkedText>
            </div>

            <DailyPrayersHubLink />
            <TopicSeriesNav currentSlug="examination-of-conscience-guide" />
            <BlogFAQ faqs={[
              {
                question: "What are the five steps of the Ignatian Examen?",
                answer: "Gratitude (thank God for the day's gifts), petition (ask for light to see the day truly), review (walk through the day noticing consolation and desolation), forgiveness (ask pardon for where you fell short), and resolution (choose one concrete step for tomorrow), usually ending with the Our Father."
              },
              {
                question: "Does praying the Examen replace going to Confession?",
                answer: "No. The Examen is a spiritual practice, not a sacrament. It can deepen sorrow for sin and self-knowledge, but mortal sins must still be confessed to a priest. Many people find the daily Examen makes their Confessions clearer and more fruitful."
              },
              {
                question: "What are consolation and desolation in the Examen?",
                answer: "In Ignatian language, consolation is any interior movement that draws you toward God, faith, hope and love. Desolation is a movement away from God, such as discouragement, restlessness or a pull away from prayer. Noticing both helps you see how God is working in ordinary life."
              },
              {
                question: "What should I do if I skip the Examen for several nights?",
                answer: "Simply begin again the next evening. The Examen is a habit of attention, not a quota. Anchoring it to a fixed moment, such as just before turning out the light, makes it easier to keep."
              },
              {
                question: "How do I know if I am scrupulous rather than just conscientious?",
                answer: "Signs of scrupulosity include constant fear of having sinned, treating doubtful matters as certainly grave, confessing the same sins again and again, and never feeling forgiven. If that sounds familiar, talk to one regular confessor, follow his guidance, and consider help from a Catholic-friendly counselor."
              }
            ]} />

<RelatedArticles currentSlug="examination-of-conscience-guide" />

            <ArticleBottomCTA title="Discover How Your Faith Life Is" description="Take our quiz and receive a personalized assessment of your Catholic journey." />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
