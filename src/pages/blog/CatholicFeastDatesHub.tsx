import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Star, ArrowRight } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { CATHOLIC_FEAST_DATE_ARTICLES } from "@/data/catholicFeastDateArticles";
import { catholicFeastDatePath } from "@/lib/catholicFeastDateSlugs";

const SEASON_ORDER = ["Advent", "Christmas", "Ordinary Time", "Lent", "Holy Week", "Easter", "Pentecost", "Triduum", "Eastertide"];

function groupBySeason() {
  const groups = new Map<string, typeof CATHOLIC_FEAST_DATE_ARTICLES>();
  for (const feast of CATHOLIC_FEAST_DATE_ARTICLES) {
    const list = groups.get(feast.season) ?? [];
    list.push(feast);
    groups.set(feast.season, list);
  }
  return [...groups.entries()].sort((a, b) => {
    const ai = SEASON_ORDER.indexOf(a[0]);
    const bi = SEASON_ORDER.indexOf(b[0]);
    if (ai === -1 && bi === -1) return a[0].localeCompare(b[0]);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

export default function CatholicFeastDatesHub() {
  const holyDays = CATHOLIC_FEAST_DATE_ARTICLES.filter((a) => a.holyDayUS);

  return (
    <>
      <Helmet>
        <title>Catholic Feast Days Calendar: Complete Guide to Important Church Dates | Guide Catholic</title>
        <meta
          name="description"
          content="Complete guide to Catholic feast days — Christmas, Easter, Ash Wednesday, Assumption, All Saints, Holy Days of Obligation in the USA, and 55 major liturgical dates explained."
        />
        <meta name="keywords" content="catholic feast days, catholic liturgical calendar, holy days of obligation usa, catholic church calendar, when is ash wednesday, catholic holidays" />
        <link rel="canonical" href="https://guidecatholic.com/blog/catholic-feast-days/" />
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
              <span className="text-text">Catholic Feast Days</span>
            </nav>
          </div>
        </div>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <header className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Calendar className="w-4 h-4" />
                55 Major Liturgical Dates
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                Catholic Feast Days Calendar
              </h1>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">
                From Advent to Christ the King — complete guides to the most important dates on the Catholic liturgical calendar. Meaning, Mass, Holy Days of Obligation in the USA, and how to celebrate.
              </p>
            </header>

            <section className="mb-16 p-8 bg-amber-50 rounded-2xl border border-amber-100">
              <h2 className="font-display text-2xl font-bold text-text mb-4">Holy Days of Obligation (United States)</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {holyDays.map((feast) => (
                  <Link
                    key={feast.slug}
                    to={catholicFeastDatePath(feast.slug)}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow group"
                  >
                    <Star className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text group-hover:text-accent transition-colors">{feast.shortName}</p>
                      <p className="text-xs text-text-muted">{feast.dateLabel}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <div className="space-y-10">
              {groupBySeason().map(([season, feasts]) => (
                <section key={season}>
                  <h2 className="font-display text-2xl font-bold text-text mb-6 border-b border-border pb-2">{season}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {feasts.map((feast) => (
                        <Link
                          key={feast.slug}
                          to={catholicFeastDatePath(feast.slug)}
                          className="group p-5 bg-surface rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h3 className="font-semibold text-text group-hover:text-accent transition-colors mb-1">{feast.shortName}</h3>
                              <p className="text-sm text-text-muted mb-2">{feast.dateLabel}</p>
                              <p className="text-sm text-text-muted line-clamp-2">{feast.excerpt}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                          </div>
                          {feast.holyDayUS && (
                            <span className="inline-block mt-3 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Holy Day (USA)</span>
                          )}
                        </Link>
                      ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-16 text-center">
              <p className="text-text-muted mb-4">Looking for daily saints?</p>
              <Link to="/blog/saint-of-the-day/" className="text-accent font-medium hover:text-accent/80 inline-flex items-center gap-2">
                Browse the Saint of the Day calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
