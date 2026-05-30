import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Heart, ArrowRight } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { SAINT_OF_DAY_ARTICLES } from "@/data/saintOfDayArticles";
import { getTodayDateSlug, saintOfDayArticlePath } from "@/lib/saintOfDaySlugs";

const MONTHS = [
  { name: "January", slug: "january", days: 31 },
  { name: "February", slug: "february", days: 28 },
  { name: "March", slug: "march", days: 31 },
  { name: "April", slug: "april", days: 30 },
  { name: "May", slug: "may", days: 31 },
  { name: "June", slug: "june", days: 30 },
  { name: "July", slug: "july", days: 31 },
  { name: "August", slug: "august", days: 31 },
  { name: "September", slug: "september", days: 30 },
  { name: "October", slug: "october", days: 31 },
  { name: "November", slug: "november", days: 30 },
  { name: "December", slug: "december", days: 31 },
];

function getSaintForDay(month: number, day: number) {
  return SAINT_OF_DAY_ARTICLES.find((a) => a.month === month && a.day === day);
}

export default function SaintOfDayHub() {
  const todaySlug = getTodayDateSlug();
  const todaySaint = SAINT_OF_DAY_ARTICLES.find((a) => a.dateSlug === todaySlug);

  return (
    <>
      <Helmet>
        <title>Saint of the Day: 365 Famous Catholic Saints Calendar | Guide Catholic</title>
        <meta
          name="description"
          content="Discover today's Catholic saint of the day — 365 famous saints with complete biographies, feast days, patronages, and devotion guides. Updated daily for every date on the calendar."
        />
        <meta name="keywords" content="saint of the day, catholic saint calendar, today's saint, feast day, patron saint, daily saint biography" />
        <link rel="canonical" href="https://guidecatholic.com/blog/saint-of-the-day/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">Saint of the Day</span>
            </nav>
          </div>
        </div>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <header className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4" />
                365 Famous Catholic Saints
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Saint of the Day Calendar
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                Every day of the year, Catholics honor a saint whose life illuminates the Gospel. Browse the full calendar — complete biographies, patronages, feast days, and devotion guides in English.
              </p>
            </header>

            {todaySaint && (
              <section className="mb-16 p-8 bg-gradient-to-br from-rose-50 to-accent/5 rounded-2xl border border-rose-100">
                <div className="flex items-center gap-2 text-sm text-rose-600 font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  Today's Saint
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-text mb-2">{todaySaint.name}</h2>
                <p className="text-text-muted mb-4">{todaySaint.excerpt}</p>
                <Link
                  to={saintOfDayArticlePath(todaySaint.dateSlug)}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80"
                >
                  Read full biography <ArrowRight className="w-4 h-4" />
                </Link>
              </section>
            )}

            <div className="space-y-12">
              {MONTHS.map((month, monthIndex) => (
                <section key={month.slug}>
                  <h2 className="font-display text-2xl font-bold text-text mb-6 border-b border-border pb-2">
                    {month.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {Array.from({ length: month.days }, (_, i) => {
                      const day = i + 1;
                      const saint = getSaintForDay(monthIndex + 1, day);
                      if (!saint) return null;
                      return (
                        <Link
                          key={day}
                          to={saintOfDayArticlePath(saint.dateSlug)}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-surface border border-transparent hover:border-border/50 transition-colors"
                        >
                          <span className="text-sm font-semibold text-accent min-w-[2.5rem]">{day}</span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-text group-hover:text-accent transition-colors line-clamp-2">
                              {saint.name}
                            </p>
                            <p className="text-xs text-text-muted line-clamp-1">{saint.patronOf[0]}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
