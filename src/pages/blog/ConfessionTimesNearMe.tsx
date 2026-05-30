import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Church, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

export default function ConfessionTimesNearMe() {
  return (
    <>
      <Helmet>
        <title>Confession Times Near Me: How to Find Catholic Confession | Guide Catholic</title>
        <meta name="description" content="Find Catholic confession times near you. Learn the best parish tools, apps, search tips, what to do if no times are listed, and how to prepare for Confession." />
        <meta name="keywords" content="confession times near me, catholic confession near me, reconciliation near me, catholic confession times, find confession, sacrament of reconciliation near me" />
        <link rel="canonical" href="https://guidecatholic.com/blog/confession-times-near-me/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="Confession Times Near Me: How to Find Catholic Confession"
        description="Find Catholic confession times near you. Learn the best parish tools, apps, search tips, what to do if no times are listed, and how to prepare for Confession."
        url="https://guidecatholic.com/blog/confession-times-near-me/"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Confession Times Near Me", url: "https://guidecatholic.com/blog/confession-times-near-me/" },
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
              <span className="text-text">Confession Times Near Me</span>
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
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Confession Times Near Me: How to Find Catholic Confession
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Looking for Catholic Confession nearby? Here are the fastest ways to find a parish, verify the schedule, prepare well, and receive the Sacrament of Reconciliation with peace.
              </p>
            </header>

            <div className="aspect-video bg-violet-100 rounded-2xl flex items-center justify-center mb-10">
              <Church className="w-24 h-24 text-violet-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">

              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">Catholic confession times vary by parish — check the parish website, bulletin, or door poster; many U.S. parishes offer Saturday afternoon confessions before vigil Mass. You may also schedule an appointment with any priest; all validly ordained Catholic priests can hear confession anywhere.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Fastest Ways to Find Confession Times Near You</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li><strong>Search Google Maps:</strong> try "Catholic confession near me" or "confession times near me" and open nearby parish websites.</li>
                <li><strong>Use MassTimes.org:</strong> many parish listings include Confession schedules alongside Mass times.</li>
                <li><strong>Check the diocesan parish finder:</strong> diocesan websites often list official parish links and phone numbers.</li>
                <li><strong>Call the parish office:</strong> schedules change during Lent, Advent, Holy Week, holidays, and priest travel.</li>
              </ul>

              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="confession-times-near-me">
                The most common Confession time in many U.S. parishes is Saturday afternoon before the Vigil Mass. Some parishes also offer Confession before daily Mass, during Eucharistic Adoration, or by appointment.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-8">
                <p className="text-text font-semibold mb-1">Best search phrase</p>
                <p className="text-text text-sm">Search "Catholic confession times near me" plus your city or ZIP code. Then verify the schedule on the parish website or by phone.</p>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What If No Confession Times Are Listed?</h2>
              <p className="text-text leading-relaxed mb-6">
                Do not assume Confession is unavailable. Many priests hear Confessions by appointment, especially for people returning after a long absence, those preparing for marriage, or anyone carrying a serious burden of conscience.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Call the parish and say simply: "I would like to schedule Confession with a priest." You do not need to explain your sins to the office staff. The priest will guide you once you arrive.
              </p>

              <QuizCTA
                title="Preparing to return to the sacraments?"
                description="Take the faith assessment and receive a personalized guide for your next step in Catholic life."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to Prepare Before You Go</h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Ask the Holy Spirit to show you your sins honestly and without fear.</li>
                <li>Make an examination of conscience, especially since your last Confession.</li>
                <li>Be ready to confess mortal sins in kind and number as best you can.</li>
                <li>Bring or memorize an Act of Contrition.</li>
                <li>Receive the priest's absolution and complete your penance afterward.</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What to Say in Confession</h2>
              <div className="bg-background-muted rounded-xl p-6 mb-6">
                <p className="text-text leading-relaxed mb-3">Begin with:</p>
                <p className="text-text italic leading-relaxed">
                  Bless me, Father, for I have sinned. It has been [amount of time] since my last Confession.
                </p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                Then confess your sins clearly and simply. You do not need long explanations unless the priest asks a question. Confession is not a performance. It is a sacrament of mercy.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When Should Catholics Go to Confession?</h2>
              <p className="text-text leading-relaxed mb-6">
                Catholics must confess mortal sins before receiving Holy Communion and are required to confess serious sins at least once a year. Many Catholics go monthly because regular Confession forms the conscience, strengthens humility, and gives sacramental grace to resist sin.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-6 mb-8 text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-text italic">If you feel nervous, go anyway. The priest has heard Confessions before, and Christ is waiting to forgive.</p>
              </div>
            </div>

            <BlogFAQ faqs={[
              { question: "Can I go to Confession at any Catholic church?", answer: "Yes. A Catholic may usually go to Confession at any Catholic parish where a priest is available. You do not have to be registered at that parish." },
              { question: "What if I forgot the Act of Contrition?", answer: "Tell the priest. He can help you pray one, provide a simple version, or invite you to express sorrow for your sins in your own words." },
              { question: "Do I need an appointment for Confession?", answer: "Not if the parish has scheduled Confession times. If no time works for you, call the parish office and ask for an appointment with a priest." },
              { question: "How long does Confession take?", answer: "A typical Confession can take 3 to 10 minutes. If it has been many years or you need pastoral guidance, schedule an appointment so the priest has enough time." },
            ]} />

            <RelatedArticles currentSlug="confession-times-near-me" />

            <ArticleBottomCTA title="Take the Next Step" description="Build a stronger sacramental life with a personalized Catholic growth plan." />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
