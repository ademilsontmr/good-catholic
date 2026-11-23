import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CalendarCheck, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

const SLUG = "holy-days-of-obligation-2027-usa";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Holy Days of Obligation 2027 in the US";
const DESCRIPTION =
  "Every US holy day of obligation in 2027 with its date and weekday: which ones require Mass, why All Saints doesn't, and the two-Mass Christmas weekend.";
const linkClass = "text-accent underline underline-offset-2 hover:text-accent/80";

/** 2027 calendar for the Latin Church in the United States. Easter 2027 is March 28. */
const HOLY_DAYS: { feast: string; date: string; weekday: string; obligatory: string; note: string }[] = [
  {
    feast: "Mary, Mother of God",
    date: "January 1, 2027",
    weekday: "Friday",
    obligatory: "Yes",
    note: "Vigil Mass on Thursday evening, December 31, 2026 counts. No Friday abstinence on a solemnity.",
  },
  {
    feast: "Ascension of the Lord",
    date: "May 6, 2027 or May 9, 2027",
    weekday: "Thursday or Sunday",
    obligatory: "Yes, on the day your province keeps it",
    note: "Sunday, May 9 in most of the US. Thursday, May 6 in the provinces of Boston, Hartford, New York, Newark, Omaha and Philadelphia.",
  },
  {
    feast: "Assumption of Mary",
    date: "August 15, 2027",
    weekday: "Sunday",
    obligatory: "Yes, as Sunday",
    note: "The solemnity replaces that Sunday’s Mass. One Mass fulfills the obligation.",
  },
  {
    feast: "All Saints",
    date: "November 1, 2027",
    weekday: "Monday",
    obligatory: "No (abrogated)",
    note: "Still a solemnity. Mass is encouraged but not required in the US this year.",
  },
  {
    feast: "Immaculate Conception",
    date: "December 8, 2027",
    weekday: "Wednesday",
    obligatory: "Yes",
    note: "Patronal feast of the United States. Vigil Mass on Tuesday evening, December 7.",
  },
  {
    feast: "Christmas (Nativity of the Lord)",
    date: "December 25, 2027",
    weekday: "Saturday",
    obligatory: "Yes",
    note: "Holy Family Sunday follows on December 26, a separate obligation: two Masses that weekend.",
  },
];

export default function HolyDaysOfObligation2027Usa() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="holy days of obligation 2027, holy days of obligation 2027 usa, catholic holy days 2027, is all saints day a holy day of obligation 2027, christmas 2027 mass obligation, ascension 2027, assumption 2027, immaculate conception 2027"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-20" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Holy Days of Obligation 2027", url: PAGE_URL },
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
              <span className="text-text">Holy Days of Obligation 2027</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Liturgy &amp; Worship</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />November 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Holy Days of Obligation 2027 in the United States: Dates, Weekdays and What Changes
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                The six US holy days land in an unusual pattern in 2027. One falls on a Sunday, one on a Monday that lifts the obligation, and Christmas falls on a Saturday right before Holy Family Sunday. Here is the full calendar, which days you actually need to put on your schedule, and how to plan the weekends that ask for two Masses.
              </p>
            </header>

            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <CalendarCheck className="w-24 h-24 text-sky-700" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  In 2027, Catholics of the Latin Church in the United States must attend Mass on every Sunday and on these holy days: Mary, Mother of God (Friday, January 1), the Immaculate Conception (Wednesday, December 8) and Christmas (Saturday, December 25). The Ascension is kept on Sunday, May 9 in most dioceses, or on Thursday, May 6 in six provinces. The Assumption falls on Sunday, August 15. All Saints falls on Monday, November 1, so the Mass obligation is lifted that day.
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The 2027 Calendar at a Glance</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The United States keeps six holy days of obligation beyond the Sundays of the year. The list never changes, but the weekday each one falls on does, and in this country the weekday decides whether three of them carry an obligation at all. The table below gives the 2027 date for each solemnity, the day of the week, and whether you are bound to attend Mass.
              </LinkedText>
              <div className="not-prose mb-8 overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm text-left">
                  <thead className="bg-background-muted text-text">
                    <tr>
                      <th className="p-3 font-semibold">Feast</th>
                      <th className="p-3 font-semibold">Date 2027</th>
                      <th className="p-3 font-semibold">Weekday</th>
                      <th className="p-3 font-semibold">Obligatory in US?</th>
                      <th className="p-3 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HOLY_DAYS.map((day) => (
                      <tr key={day.feast} className="border-t border-border align-top">
                        <td className="p-3 font-medium text-text">{day.feast}</td>
                        <td className="p-3 text-text">{day.date}</td>
                        <td className="p-3 text-text-muted">{day.weekday}</td>
                        <td className="p-3 text-text">{day.obligatory}</td>
                        <td className="p-3 text-text-muted">{day.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Put another way: if you live in a diocese that moves the Ascension to Sunday, 2027 asks you to be at Mass on three days that are not Sundays. They are New Year’s Day, December 8 and Christmas Day. If you live in one of the six provinces that keep the Ascension on Thursday, add Thursday, May 6 for a total of four. That is one of the lighter years on the calendar, mostly because the Assumption sits on a Sunday and All Saints on a Monday.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For how the 2026 dates fell, see our{" "}
                <Link to="/blog/holy-days-of-obligation-2026-usa/" className={linkClass}>holy days of obligation 2026 guide</Link>
                {", and for the background on each solemnity, the "}
                <Link to="/blog/catholic-holy-days-of-obligation-usa/" className={linkClass}>complete guide to US holy days of obligation</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Why the Weekday Matters in the United States</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Canon 1247 of the Code of Canon Law binds Catholics to take part in Mass on Sundays and on holy days of obligation. The universal law lists ten such days, but it lets each conference of bishops reduce that list with the approval of the Holy See. The US bishops did so, keeping six. In a 1991 decree they added one more adjustment: when Mary, Mother of God (January 1), the Assumption (August 15) or All Saints (November 1) falls on a Saturday or a Monday, the obligation to attend Mass is abrogated.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The rule exists to avoid back-to-back obligations, a real strain for families and for priests who already cover several parishes on a weekend. It applies only to those three feasts. Christmas and the Immaculate Conception are obligatory whatever day of the week they fall on, and 2027 shows both sides of the rule: All Saints on a Monday loses its obligation, while Christmas on a Saturday keeps its own.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">January 1, 2027: A Friday Solemnity</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The year opens with the Solemnity of Mary, the Holy Mother of God on a Friday. Since that is neither a Saturday nor a Monday, the obligation holds. Most parishes schedule a vigil Mass on New Year’s Eve, Thursday, December 31, 2026, and that evening Mass satisfies the obligation, which helps anyone who expects a late night or an early drive on the first.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                There is a second consequence of the Friday date. Canon 1251 sets Friday as a day of penance, but it makes an exception for any Friday that is a solemnity. On January 1, 2027, Catholics are not bound to Friday abstinence, so a New Year’s dinner with meat is no problem.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Read more in our guide to the{" "}
                <Link to="/blog/mary-mother-of-god-prayer-feast-guide/" className={linkClass}>Solemnity of Mary, Mother of God</Link>
                {" and in "}
                <Link to="/blog/can-catholics-eat-meat-on-fridays/" className={linkClass}>can Catholics eat meat on Fridays?</Link>
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Ascension: May 6 or May 9, Depending on Where You Live</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Easter falls on March 28 in 2027, which puts the fortieth day, Ascension Thursday, on May 6. Most US dioceses transfer the solemnity to the following Sunday, May 9, which then replaces the Seventh Sunday of Easter. In those places the Sunday Mass you would attend anyway is the Ascension Mass, and nothing extra is required.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In recent years the ecclesiastical provinces of Boston, Hartford, New York, Newark, Omaha and Philadelphia have kept the Ascension on Thursday. A province includes every diocese under that archdiocese, not just the see city, so a Catholic in Connecticut, New Jersey, Pennsylvania, Nebraska, upstate New York or much of New England may be in one of them. Because the bishops of each province decide this and can revise it, check your diocesan website or parish bulletin in the spring. If yours keeps Thursday, plan for Mass on May 6 or at a vigil Mass on the evening of Wednesday, May 5.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The Assumption Falls on a Sunday</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                August 15, 2027 is a Sunday. The Assumption ranks above an ordinary Sunday in Ordinary Time, so it takes that Sunday’s place in the liturgy, and parishes celebrate the Assumption Mass instead of the Twentieth Sunday’s readings. For you, the result is simple: one Mass that weekend covers everything. A Saturday evening Mass on August 14 or any Mass on Sunday fulfills the obligation. You do not need to attend twice.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the doctrine and prayers of the feast, see our{" "}
                <Link to="/blog/assumption-of-mary-catholic-guide/" className={linkClass}>Assumption of Mary guide</Link>.
              </p>

              <QuizCTA
                title="Is Mass the anchor of your week?"
                description="Take our free Catholic life assessment and get practical guidance on Sunday Mass, holy days, Confession and prayer."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">All Saints on a Monday: Celebrated, Not Required</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                November 1, 2027 is a Monday, so the 1991 norm applies and the obligation to attend Mass is lifted in the United States. All Saints remains a solemnity. Parishes will still offer Masses, often with the same schedule as other years, and going is a good way to honor the saints in heaven, including the unnamed ones among our own families. It is simply not a sin to miss it this year.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                All Souls Day follows on Tuesday, November 2. It has never been a holy day of obligation, but many Catholics attend Mass to pray for the dead, and November as a whole is set aside for that intention.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">December 8: The Immaculate Conception on a Wednesday</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Mary under the title of her Immaculate Conception is the patroness of the United States, and the US bishops keep this day obligatory even on a Saturday or a Monday. In 2027 there is no complication: December 8 is a Wednesday in the second week of Advent, and Mass is required. A vigil Mass on Tuesday evening, December 7 also counts. Remember that the feast celebrates Mary being preserved from original sin from the moment of her own conception, not the conception of Jesus, a point that often confuses people.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Our{" "}
                <Link to="/blog/immaculate-conception-guide/" className={linkClass}>Immaculate Conception guide</Link>
                {" covers the dogma, its history and prayers for the day."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Christmas 2027: A Saturday, Then Holy Family Sunday</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                This is the date that needs the most planning. Christmas falls on Saturday, December 25, and the next day, Sunday, December 26, is the Feast of the Holy Family. Each day carries its own obligation. Canon 1248 allows a Mass on the evening before a Sunday or holy day to satisfy that day’s obligation, but a single Mass can satisfy only one obligation. A Saturday evening Mass on Christmas night cannot count for both Christmas and Sunday.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                In practice you need two Masses that weekend. The common ways to do it are:
              </LinkedText>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Christmas Eve plus Christmas evening.</strong> Attend a vigil or Midnight Mass on Friday, December 24 for Christmas, then a Saturday evening Mass on December 25 for Sunday.
                </li>
                <li>
                  <strong>Christmas Day plus Sunday.</strong> Attend any Christmas Mass on Saturday, then Mass on Sunday, December 26.
                </li>
                <li>
                  <strong>Christmas Eve plus Sunday.</strong> Go on Friday evening or at midnight for Christmas, then keep your usual Sunday Mass.
                </li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Parish schedules are often reduced on Christmas evening, so if you plan to use a Saturday night Mass for Sunday, confirm in advance that your parish offers one. Families traveling for the holidays should look up a parish near their destination before they leave.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Our{" "}
                <Link to="/blog/christmas-mass-near-me/" className={linkClass}>Christmas Mass near me guide</Link>
                {" explains how to find Mass times when you are away from home."}
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Days People Often Mistake for Holy Days of Obligation</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Several important days in 2027 are not holy days of obligation in the United States, even though many Catholics go to church on them:
              </LinkedText>
              <ul className="list-disc pl-6 text-text space-y-3 mb-6">
                <li>
                  <strong>Ash Wednesday, February 10, 2027.</strong> A day of fasting and abstinence, but there is no obligation to attend Mass or receive ashes.
                </li>
                <li>
                  <strong>Good Friday, March 26, 2027.</strong> A day of fasting and abstinence. No Mass is celebrated that day at all; the afternoon liturgy is encouraged but not obligatory.
                </li>
                <li>
                  <strong>Epiphany.</strong> Transferred in the US to Sunday, January 3, 2027, so it is covered by the ordinary Sunday obligation.
                </li>
                <li>
                  <strong>Corpus Christi.</strong> Kept on Sunday, May 30, 2027 in the US, again within the Sunday obligation.
                </li>
                <li>
                  <strong>Our Lady of Guadalupe.</strong> December 12, 2027 is a Sunday. The Third Sunday of Advent takes precedence, so the feast gives way in the Sunday liturgy that year. It is not a holy day of obligation in any year.
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">When You Cannot Get to Mass</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                The obligation is serious, and the Catechism teaches that deliberately missing Mass on a day of obligation without a grave reason is a grave sin (CCC 2181). The same paragraph recognizes that a serious reason excuses: illness, caring for infants or the sick, or a real impossibility such as having no Mass within reach or being required to work with no way around it. In those cases there is no sin, and praying at home, reading the day’s readings or following a broadcast Mass is a good way to keep the day holy, though it does not replace attendance when you are able to go.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Canon 1245 also lets a pastor, for a just cause, dispense individuals or families in his parish from a particular obligation or commute it into another pious work. If you know in advance that a work schedule, travel or caregiving will make December 8 or the Christmas weekend impossible, it is reasonable to ask your pastor.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For a fuller answer on culpability and Confession, read{" "}
                <Link to="/blog/is-it-a-sin-to-miss-mass/" className={linkClass}>is it a sin to miss Mass?</Link>
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A Note for Eastern Catholics</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Everything above applies to the Latin Church. Ukrainian, Byzantine, Maronite, Melkite and other Eastern Catholic Churches in the US follow their own calendars and their own lists of obligatory feasts. If you belong to one of these Churches, your eparchy’s calendar is the one to follow.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Looking Ahead to 2028</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG} scripture>
                Because Christmas 2027 is a Saturday, New Year’s Day 2028 is also a Saturday. Under the same US norm that lifts All Saints in 2027, the obligation for Mary, Mother of God is abrogated on January 1, 2028. The solemnity is still celebrated, and the Sunday that follows, January 2, carries the normal Sunday obligation.
              </LinkedText>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Quick checklist for 2027</h3>
                <ul className="list-disc pl-6 text-text space-y-2 mb-0">
                  <li>Friday, January 1: Mass required (vigil Thursday evening counts).</li>
                  <li>Ascension: Sunday, May 9 in most dioceses; Thursday, May 6 in six provinces. Check yours.</li>
                  <li>Sunday, August 15: one Mass covers the Assumption and Sunday.</li>
                  <li>Monday, November 1: All Saints celebrated, no obligation in the US.</li>
                  <li>Wednesday, December 8: Mass required.</li>
                  <li>Saturday, December 25 and Sunday, December 26: two separate Masses.</li>
                </ul>
              </div>
            </div>

            <p className="text-text leading-relaxed mb-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
              To prepare for the December 8 holy day, pray the{" "}
              <a href="https://catholicbibleonline.com/novenas/immaculate-conception/" target="_blank" rel="noopener" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Immaculate Conception Novena</a>{" "}
              on Catholic Bible Online, which begins November 29.
            </p>

            <BlogFAQ
              faqs={[
                {
                  question: "What are the holy days of obligation in 2027 in the United States?",
                  answer: "Mary, Mother of God (Friday, January 1), the Ascension (Sunday, May 9 in most dioceses, or Thursday, May 6 in six provinces), the Assumption (Sunday, August 15), the Immaculate Conception (Wednesday, December 8) and Christmas (Saturday, December 25). All Saints falls on Monday, November 1, so its obligation is abrogated in 2027.",
                },
                {
                  question: "Is All Saints Day a holy day of obligation in 2027?",
                  answer: "Not in the United States. November 1, 2027 is a Monday, and under the US bishops’ 1991 norm the Mass obligation for All Saints is lifted when it falls on a Saturday or a Monday. It remains a solemnity, and attending Mass is encouraged.",
                },
                {
                  question: "Do I have to go to Mass twice on Christmas weekend 2027?",
                  answer: "Yes. Christmas is Saturday, December 25 and Holy Family Sunday is December 26, and each has its own obligation. One Mass can fulfill only one obligation, so a single Saturday evening Mass cannot count for both. Attend a Christmas Mass (including Christmas Eve) and a separate Mass for Sunday.",
                },
                {
                  question: "When is Ascension Thursday in 2027?",
                  answer: "Thursday, May 6, 2027, forty days after Easter on March 28. Most US dioceses transfer it to Sunday, May 9. The provinces of Boston, Hartford, New York, Newark, Omaha and Philadelphia have kept it on Thursday in recent years, so confirm with your diocese.",
                },
                {
                  question: "Is January 1, 2027 a holy day of obligation?",
                  answer: "Yes. January 1, 2027 is a Friday, so the Solemnity of Mary, Mother of God is obligatory in the US. A vigil Mass on the evening of Thursday, December 31, 2026 fulfills it, and Friday abstinence does not apply on a solemnity.",
                },
                {
                  question: "Is Ash Wednesday 2027 a holy day of obligation?",
                  answer: "No. Ash Wednesday, February 10, 2027, is a day of fasting and abstinence for Catholics, but there is no obligation to attend Mass or to receive ashes.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Plan your year around the altar"
              description="Mark the 2027 holy days on your calendar now, and build the rest of your prayer life around Sunday Mass."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
