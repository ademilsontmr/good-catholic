import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Church, Clock, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function DailyMassNearMe() {
  return (
    <>
      <Helmet>
        <title>Daily Mass Near Me: Find Catholic Mass Today | Guide Catholic</title>
        <meta name="description" content="Find Daily Mass near you today. Learn how to locate weekday Catholic Mass times, noon Mass, early morning Mass, readings, and parish schedules." />
        <meta name="keywords" content="daily mass near me, catholic mass today, weekday mass near me, noon mass near me, catholic daily mass, find daily mass, mass today near me" />
        <link rel="canonical" href="https://guidecatholic.com/blog/daily-mass-near-me/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Daily Mass Near Me: Find Catholic Mass Today"
        description="Find Daily Mass near you today. Learn how to locate weekday Catholic Mass times, noon Mass, early morning Mass, readings, and parish schedules."
        url="https://guidecatholic.com/blog/daily-mass-near-me/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Daily Mass Near Me", url: "https://guidecatholic.com/blog/daily-mass-near-me/" },
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
              <span className="text-text">Daily Mass Near Me</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Mass & Sacraments</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />May 11, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Daily Mass Near Me: Find Catholic Mass Today
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Daily Mass is one of the simplest ways to anchor your day in Christ. Here is how to find weekday Mass near you, verify the schedule, and prepare well.
              </p>
            </header>

            <div className="aspect-video bg-yellow-100 rounded-2xl flex items-center justify-center mb-10">
              <Sun className="w-24 h-24 text-yellow-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Find Daily Mass Today</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Search "Daily Mass near me"</strong> or "Catholic Mass today near me" with your city or ZIP code.</li>
                <li><strong>Use MassTimes.org</strong> and filter by weekday or time of day.</li>
                <li><strong>Check nearby parish websites</strong> for a weekly bulletin or liturgy schedule.</li>
                <li><strong>Look for cathedrals, shrines, and downtown parishes</strong> if you need early morning, noon, or evening Mass.</li>
              </ul>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="daily-mass-near-me">
                Daily Mass schedules are usually lighter than Sunday schedules. Many parishes offer weekday Mass at 7 AM, 8 AM, 12 PM, or 5:30 PM, depending on the priest's schedule and local needs.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-1">Verify before you go</p>
                <p className="text-text text-sm">Weekday Mass can change because of funerals, school liturgies, priest retreats, holidays, or weather. Check the parish bulletin or call the office.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Is Daily Mass Required?</h2>
              <p className="text-text leading-relaxed mb-6">
                Daily Mass is not required for most Catholics. The Sunday obligation and Holy Days of Obligation are required, but weekday Mass is a powerful devotion that helps Catholics receive the Eucharist more frequently and live the liturgical year more deeply.
              </p>

              <QuizCTA
                title="Want to build a stronger Catholic routine?"
                description="Take the faith assessment and receive practical next steps for prayer, Mass, and spiritual growth."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What to Expect at Weekday Mass</h2>
              <p className="text-text leading-relaxed mb-6">
                Weekday Mass is usually shorter than Sunday Mass, often around 25 to 35 minutes. There may be fewer hymns, a shorter homily, and a smaller congregation. The structure is still the Mass: Liturgy of the Word and Liturgy of the Eucharist.
              </p>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Arrive a few minutes early for quiet prayer.</li>
                <li>Check whether Confession is offered before or after Mass.</li>
                <li>Follow the readings of the day in a missal, app, or parish worship aid.</li>
                <li>Stay after Mass for a short thanksgiving if your schedule allows.</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Best Places to Find Noon or Early Morning Mass</h2>
              <p className="text-text leading-relaxed mb-6">
                If your local parish does not offer Daily Mass at a convenient time, search nearby cathedrals, university chapels, hospitals, retreat centers, shrines, and downtown parishes. These locations often serve workers, students, travelers, and people with nontraditional schedules.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Daily Mass and the Readings</h2>
              <p className="text-text leading-relaxed mb-6">
                The Church provides Scripture readings for every Mass of the year. Reading them before Mass helps you listen more attentively and carry the Word into the rest of the day.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8 text-center">
                <Church className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-text italic">Even one weekday Mass a week can reshape your spiritual life over time.</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "How long is Daily Mass?", answer: "Most weekday Masses last about 25 to 35 minutes, though this varies by parish, feast day, music, and homily length." },
              { question: "Can I receive Communion at Daily Mass?", answer: "Yes, if you are Catholic, properly disposed, and not conscious of unconfessed mortal sin. If you need Confession, go before receiving Communion." },
              { question: "Does Daily Mass fulfill the Sunday obligation?", answer: "No. A weekday Daily Mass does not fulfill the Sunday obligation. A Saturday evening Vigil Mass does fulfill the Sunday obligation." },
              { question: "Where can I find today's Catholic Mass readings?", answer: "You can find the daily readings through the USCCB website, Catholic apps, missals, and parish worship aids." },
            ]} />

            <RelatedArticles currentSlug="daily-mass-near-me" />

            <div className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-4">Make Faith Part of Every Day</h3>
              <p className="text-text-muted mb-6">Get a personalized Catholic growth plan for prayer, Mass, and spiritual habits.</p>
              <Link to="/quiz-intro"><Button size="lg" className="bg-button hover:bg-button-hover text-button-text">Take the Quiz Now</Button></Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
