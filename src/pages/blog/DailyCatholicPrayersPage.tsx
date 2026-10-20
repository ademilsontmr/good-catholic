import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { ArticleByline } from "@/components/blog/ArticleByline";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { SharePage } from "@/components/blog/DailyPrayerExtras";
import { cboLinkClass, CBO_BIBLE, CBO_DAILY_VERSES, CBO_HOME } from "@/lib/catholicBibleOnlineLinks";
import {
  DAILY_PRAYER_GUIDES,
  PRAYER_GROUPS,
  prayerGuidesIn,
} from "@/data/dailyCatholicPrayers";

const PAGE = "https://guidecatholic.com/blog/daily-catholic-prayers/";
const TITLE = "Daily Catholic Prayers: A Complete Guide to Praying Every Day";
const DESCRIPTION =
  "A practical guide to daily Catholic prayers: morning and night routines, the Rosary, the Angelus, and what the Church actually requires.";

const TOC = [
  { href: "#why-daily-prayer", label: "Why daily prayer matters" },
  { href: "#essential-prayers", label: "Essential Catholic prayers" },
  { href: "#morning-prayers", label: "Catholic morning prayers" },
  { href: "#through-the-day", label: "Prayers throughout the day" },
  { href: "#night-prayers", label: "Catholic night prayers" },
  { href: "#how-to-pray-the-rosary", label: "How to pray the Rosary" },
  { href: "#routines", label: "Routines for different needs" },
  { href: "#what-the-church-requires", label: "What the Church requires" },
  { href: "#questions", label: "Questions" },
  { href: "#all-prayers", label: "Explore all Catholic prayers" },
  { href: "#next-step", label: "The Hours, Easter, and confession" },
];

export default function DailyCatholicPrayersPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="daily Catholic prayers, Catholic prayers for everyday life, prayers every Catholic should know, morning Catholic prayers, Catholic prayers before bed, daily prayer routine for Catholics, traditional Catholic prayers"
        />
        <link rel="canonical" href={PAGE} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        url={PAGE}
        datePublished="2026-10-20"
        dateModified="2026-10-20"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Daily Catholic Prayers", url: PAGE },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/blog/" className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Blog</Link>
              <span aria-hidden="true">/</span>
              <span className="text-text">Daily Catholic Prayers</span>
            </nav>
          </div>
        </div>
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />Back to Blog
            </Link>
            <header className="mb-8">
              <ArticleByline />
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers & Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" aria-hidden="true" />October 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" aria-hidden="true" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Daily Catholic Prayers: A Complete Guide for Every Day
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                What to pray, when to pray it, and how to keep a routine that a real week can hold. The full text of each prayer lives on its own guide.
              </p>
            </header>
            <div className="aspect-video bg-sky-50 rounded-2xl flex items-center justify-center mb-10">
              <BookOpen className="w-24 h-24 text-sky-700" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
              <p className="text-lg text-text leading-relaxed font-medium">
                Catholics are not required to recite one fixed list of prayers every day. The Church does ask for Sunday Mass, confession of grave sin, Easter Communion, and the days of fast and abstinence. Daily prayer is how a disciple stays in conversation with God between those moments.
              </p>
            </div>
            <BlogArticleAd slot="1906776249" />
            <SharePage title={TITLE} url={PAGE} />

            <nav aria-label="On this page" className="mb-10 rounded-xl border border-border bg-background-muted/40 p-5">
              <h2 className="font-display text-lg font-bold text-text mb-3">On this page</h2>
              <ol className="list-decimal pl-5 space-y-1 text-text">
                {TOC.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-accent underline underline-offset-2 hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="why-daily-prayer" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Why daily prayer matters</h2>
            <p className="text-text leading-relaxed mb-6">
              The Catechism of the Catholic Church, quoting St. John Damascene, calls prayer the raising of the mind and heart to God (CCC 2559). It is not a technique for forcing an outcome. It is a relationship. God speaks first, in creation, in Scripture, and in the sacraments. Prayer is the answer a person makes with attention, words, and silence.
            </p>
            <p className="text-text leading-relaxed mb-6">
              A routine matters because good intentions fade when the morning is rushed. Five faithful minutes, kept, will do more for a life of faith than a plan that only works on retreat. The prayers on this page are the ones Catholics have used for centuries to give those minutes a shape: the Sign of the Cross, the Our Father, the Hail Mary, a morning offering, an evening look at the day.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Personal devotion and the Church’s law are not the same thing. No one should be told that skipping the Rosary on a tired Tuesday is a sin in the way that missing Sunday Mass without a serious reason is. Devotions train love. The precepts mark the minimum of life in the Church. Both belong in a Catholic life. They should not be confused.
            </p>

            <h2 id="essential-prayers" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Essential Catholic prayers to know</h2>
            <p className="text-text leading-relaxed mb-6">
              These are the prayers a Catholic home can actually use. Each guide has the traditional English text, a note on legitimate variations, and a way to pray it without turning it into a performance. Scripture for the Our Father is in{" "}
              <a href={`${CBO_BIBLE}matthew/6/`} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Matthew 6 at Catholic Bible Online</a>
              . The Hail Mary begins from the scenes in{" "}
              <a href={`${CBO_BIBLE}luke/1/`} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Luke 1</a>.
            </p>
            <ol className="space-y-6 mb-8">
              {DAILY_PRAYER_GUIDES.map((guide, index) => (
                <li key={guide.href} className="rounded-xl border border-border p-5">
                  <h3 className="font-display text-xl font-bold text-text mb-2">
                    {index + 1}. {guide.title}
                  </h3>
                  <p className="text-text leading-relaxed mb-2">{guide.meaning}</p>
                  <p className="text-text-muted leading-relaxed mb-2"><span className="font-semibold text-text">Purpose. </span>{guide.purpose}</p>
                  <p className="text-text-muted leading-relaxed mb-3"><span className="font-semibold text-text">When. </span>{guide.when}</p>
                  <Link to={guide.href} className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                    {guide.linkText}
                  </Link>
                </li>
              ))}
            </ol>

            <h2 id="morning-prayers" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Catholic morning prayers</h2>
            <p className="text-text leading-relaxed mb-6">
              Morning prayer is the moment you hand over the day before the day takes over. Work, a difficult conversation, a child who needs you, a decision you would rather postpone: these are not interruptions of prayer. They are what the offering is for.
            </p>
            <p className="text-text leading-relaxed mb-6">
              A workable pattern of five to ten minutes looks like this. Make the{" "}
              <Link to="/blog/sign-of-the-cross-catholic/" className="text-accent font-semibold underline underline-offset-2">Sign of the Cross</Link>.
              Pray the{" "}
              <Link to="/blog/morning-offering-prayer/" className="text-accent font-semibold underline underline-offset-2">Morning Offering</Link>,
              naming one concrete thing you will do today. Say the{" "}
              <Link to="/blog/our-father-prayer/" className="text-accent font-semibold underline underline-offset-2">Our Father</Link>{" "}
              and the{" "}
              <Link to="/blog/hail-mary-prayer/" className="text-accent font-semibold underline underline-offset-2">Hail Mary</Link>.
              Close with the{" "}
              <Link to="/blog/guardian-angel-prayer/" className="text-accent font-semibold underline underline-offset-2">Guardian Angel Prayer</Link>.
              If you want a slightly longer form, use the{" "}
              <Link to="/blog/morning-prayer-catholic/" className="text-accent font-semibold underline underline-offset-2">Catholic morning prayer</Link>{" "}
              guide and stop while you are still attentive.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Stand or sit. Keep the phone in another room if that is what it takes. If you miss the morning, pray the same short set at the first quiet moment. Do not try to “catch up” by stacking three offices you will not finish.
            </p>

            <h2 id="through-the-day" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Prayers throughout the day</h2>
            <p className="text-text leading-relaxed mb-6">
              The day already has hinges: a meal, a commute, the hour after lunch, the moment bad news arrives. Prayer can use those hinges. It does not require a chapel, and it does not require you to observe every traditional hour.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-text leading-relaxed mb-6">
              <li>
                The{" "}
                <Link to="/blog/how-to-pray-the-angelus/" className="text-accent font-semibold underline underline-offset-2">Angelus</Link>{" "}
                recalls the Incarnation. Many Catholics pray it at morning, noon, and evening. That schedule is a devotion. It is not a duty binding every lay person. From Easter Sunday through Pentecost, the{" "}
                <Link to="/blog/regina-caeli-prayer/" className="text-accent font-semibold underline underline-offset-2">Regina Caeli</Link>{" "}
                takes its place.
              </li>
              <li>
                A short{" "}
                <Link to="/blog/prayer-of-trust-in-god/" className="text-accent font-semibold underline underline-offset-2">prayer of trust in God</Link>{" "}
                fits between tasks: one sentence that puts the next hour back in God’s hands.
              </li>
              <li>
                The{" "}
                <Link to="/blog/gospel-reading-today-catholic/" className="text-accent font-semibold underline underline-offset-2">Gospel of the day</Link>{" "}
                can be read once in the morning and remembered at lunch. Read it on{" "}
                <a href={CBO_DAILY_VERSES} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Catholic Bible Online</a>{" "}
                or in the missal your parish uses. Stay with one verse. Ask what it asks of you today. That is meditation, not a second homily you have to write.
              </li>
              <li>
                <Link to="/blog/prayer-of-thanksgiving/" className="text-accent font-semibold underline underline-offset-2">Thanksgiving</Link>{" "}
                belongs in the middle of the day as well as at the end. A finished task, a kind word, a meal: name it.
              </li>
              <li>
                The{" "}
                <Link to="/blog/prayer-before-meals-catholic/" className="text-accent font-semibold underline underline-offset-2">prayer before meals</Link>{" "}
                takes less than half a minute. It is one of the easiest ways to keep prayer attached to ordinary life.
              </li>
            </ul>
            <p className="text-text leading-relaxed mb-6">
              The Liturgy of the Hours is the Church’s public prayer through the day. Priests are bound to it. Lay people may pray part of it. The{" "}
              <Link to="/blog/divine-office-laity/" className="text-accent font-semibold underline underline-offset-2">guide to the Divine Office for lay people</Link>{" "}
              explains Morning Prayer, Evening Prayer, and Night Prayer without turning them into a new law. You do not have to pray every hour to be a faithful Catholic. Start with one hinge you will actually keep.
            </p>

            <h2 id="night-prayers" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Catholic night prayers</h2>
            <p className="text-text leading-relaxed mb-6">
              Night prayer is gratitude, repentance, forgiveness, and trust, in that order if you can manage it. Thank God for one real thing. Look at where you were sharp, dishonest, or absent. Forgive the person you are still rehearsing an argument with, at least by asking God for the willingness. Then go to sleep as someone who is kept, not as someone who must solve the day overnight.
            </p>
            <p className="text-text leading-relaxed mb-6">
              A practical evening, about ten minutes: the{" "}
              <Link to="/blog/night-prayer-catholic/" className="text-accent font-semibold underline underline-offset-2">Catholic night prayer</Link>,
              a short{" "}
              <Link to="/blog/examination-of-conscience-guide/" className="text-accent font-semibold underline underline-offset-2">Examination of Conscience</Link>,
              an{" "}
              <Link to="/blog/act-of-contrition/" className="text-accent font-semibold underline underline-offset-2">Act of Contrition</Link>,
              and the Our Father. Add the{" "}
              <Link to="/blog/how-to-pray-the-rosary-complete-guide/" className="text-accent font-semibold underline underline-offset-2">Rosary</Link>{" "}
              when the house is quiet and you are not already falling asleep in the first decade. End with a{" "}
              <Link to="/blog/prayer-of-thanksgiving/" className="text-accent font-semibold underline underline-offset-2">prayer of thanksgiving</Link>{" "}
              even on a hard day. Thanks in difficulty is not a claim that the difficulty was good. It is a refusal to let the difficulty be the only word.
            </p>

            <h2 id="how-to-pray-the-rosary" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">How to pray the Catholic Rosary</h2>
            <p className="text-text leading-relaxed mb-6">
              The Rosary is a meditation on the life of Christ, prayed with Mary. The beads keep count so the mind can stay with the mystery. The full pattern, including closing prayers that vary by custom, is in the{" "}
              <Link to="/blog/how-to-pray-the-rosary-complete-guide/" className="text-accent font-semibold underline underline-offset-2">complete guide to praying the Rosary</Link>.
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-text leading-relaxed mb-6">
              <li>Make the <Link to="/blog/sign-of-the-cross-catholic/" className="text-accent font-semibold underline underline-offset-2">Sign of the Cross</Link>.</li>
              <li>Pray the <Link to="/blog/apostles-creed-prayer/" className="text-accent font-semibold underline underline-offset-2">Apostles' Creed</Link>.</li>
              <li>Pray the <Link to="/blog/our-father-prayer/" className="text-accent font-semibold underline underline-offset-2">Our Father</Link>.</li>
              <li>Pray three Hail Marys, for faith, hope, and charity.</li>
              <li>Pray the <Link to="/blog/glory-be-prayer/" className="text-accent font-semibold underline underline-offset-2">Glory Be</Link>.</li>
              <li>Announce the first mystery and, if you wish, read a line of Scripture about it. Then pray one Our Father, ten Hail Marys, and one Glory Be. Do that for each of the five mysteries.</li>
              <li>After the five decades, pray the <Link to="/blog/hail-holy-queen-prayer/" className="text-accent font-semibold underline underline-offset-2">Hail, Holy Queen</Link>.</li>
              <li>Where it is customary, add the closing verse and response and the prayer to God for the fruits of the mysteries. Some people also add a prayer for the pope’s intentions. Those closings are custom, not a second set of beads.</li>
            </ol>
            <p className="text-text leading-relaxed mb-4">
              Since St. John Paul II proposed the Luminous Mysteries in the apostolic letter <em>Rosarium Virginis Mariae</em> (2002), a widespread weekday custom has been:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text leading-relaxed mb-6">
              <li><span className="font-semibold">Joyful Mysteries</span> on Monday and Saturday: the annunciation, the visitation, the Nativity, the presentation, and the finding in the Temple.</li>
              <li><span className="font-semibold">Sorrowful Mysteries</span> on Tuesday and Friday: the agony, the scourging, the crowning with thorns, the carrying of the cross, and the crucifixion.</li>
              <li><span className="font-semibold">Glorious Mysteries</span> on Wednesday and Sunday: the resurrection, the ascension, the coming of the Holy Spirit, the assumption, and the coronation of Mary.</li>
              <li><span className="font-semibold">Luminous Mysteries</span> on Thursday: the baptism of the Lord, the wedding at Cana, the proclamation of the Kingdom, the Transfiguration, and the Eucharist.</li>
            </ul>
            <p className="text-text leading-relaxed mb-6">
              Parishes and religious families sometimes keep an older calendar that uses the Joyful, Sorrowful, and Glorious Mysteries only. Lent and particular feast days also shift what a community prays. Follow the custom of your parish when you are praying with others. On your own, consistency matters more than winning an argument about Thursday.
            </p>

            <h2 id="routines" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Daily prayer routines for different needs</h2>
            <p className="text-text leading-relaxed mb-6">
              These are suggestions for people with different amounts of time. They are not ranks of holiness, and they are not obligations. Pick the one you can keep on a Wednesday in an ordinary week.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mb-8">
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">Five minutes</h3>
                <ul className="list-disc pl-5 space-y-1 text-text leading-relaxed">
                  <li><Link to="/blog/morning-offering-prayer/" className="text-accent underline underline-offset-2">Morning Offering</Link></li>
                  <li><Link to="/blog/our-father-prayer/" className="text-accent underline underline-offset-2">Our Father</Link></li>
                  <li><Link to="/blog/hail-mary-prayer/" className="text-accent underline underline-offset-2">Hail Mary</Link></li>
                  <li><Link to="/blog/prayer-of-thanksgiving/" className="text-accent underline underline-offset-2">A short thanksgiving</Link></li>
                </ul>
              </div>
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">Fifteen minutes</h3>
                <ul className="list-disc pl-5 space-y-1 text-text leading-relaxed">
                  <li><Link to="/blog/morning-prayer-catholic/" className="text-accent underline underline-offset-2">Morning prayer</Link></li>
                  <li><Link to="/blog/gospel-reading-today-catholic/" className="text-accent underline underline-offset-2">The day’s Gospel</Link></li>
                  <li>A few minutes of silence with one verse</li>
                  <li>Our Father and Hail Mary</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">Thirty minutes</h3>
                <ul className="list-disc pl-5 space-y-1 text-text leading-relaxed">
                  <li>Morning prayer</li>
                  <li>Scripture and a short meditation</li>
                  <li><Link to="/blog/how-to-pray-the-rosary-complete-guide/" className="text-accent underline underline-offset-2">The Rosary</Link></li>
                  <li>In the evening, an <Link to="/blog/examination-of-conscience-guide/" className="text-accent underline underline-offset-2">examination of conscience</Link></li>
                </ul>
              </div>
            </div>

            <h2 id="what-the-church-requires" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">What does the Catholic Church require?</h2>
            <p className="text-text leading-relaxed mb-6">
              The Catechism sets out the precepts of the Church in paragraphs 2041–2043. They name a minimum, not the whole of discipleship. In ordinary language they are these:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-text leading-relaxed mb-6">
              <li>
                Attend{" "}
                <Link to="/blog/sunday-mass/" className="text-accent font-semibold underline underline-offset-2">Mass on Sundays</Link>{" "}
                and on{" "}
                <Link to="/blog/holy-days-of-obligation-2026-usa/" className="text-accent font-semibold underline underline-offset-2">holy days of obligation</Link>,
                and rest from work that gets in the way of worship. A serious reason, such as illness or the care of an infant, can excuse. Convenience does not.
              </li>
              <li>
                Confess grave sins at least once a year. Anyone conscious of mortal sin should seek the{" "}
                <Link to="/blog/how-to-go-to-confession/" className="text-accent font-semibold underline underline-offset-2">sacrament of Reconciliation</Link>{" "}
                before receiving Holy Communion. The yearly precept is a floor, not a suggestion to wait twelve months.
              </li>
              <li>
                Receive Holy Communion at least once a year, during the Easter season, and in a state of grace. The Church’s law, not a private timetable, sets that duty.
              </li>
              <li>
                Observe the{" "}
                <Link to="/blog/catholic-fasting-rules/" className="text-accent font-semibold underline underline-offset-2">days of fasting and abstinence</Link>{" "}
                the Church appoints. In the United States, Ash Wednesday and Good Friday are days of fast for adults from 18 to 59, and the Fridays of Lent are days of abstinence from meat from age 14, unless a person is excused. A bishop can publish further pastoral norms.
              </li>
              <li>
                Help provide for the material needs of the Church, according to your ability.
              </li>
            </ul>
            <p className="text-text leading-relaxed mb-6">
              The Ten Commandments and the{" "}
              <Link to="/blog/precepts-of-the-catholic-church/" className="text-accent font-semibold underline underline-offset-2">precepts of the Church</Link>{" "}
              are the frame. The daily Rosary, the Angelus, the Divine Mercy Chaplet, and a particular morning formula are traditional devotions. They are worth praying. They are not, by themselves, universal daily obligations for every Catholic. A confessor or a bishop can ask an individual for a specific practice. That is spiritual direction or a particular law, not a rule you can impose on every household from a website.
            </p>

            <h2 id="all-prayers" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">Explore all Catholic prayers</h2>
            <p className="text-text leading-relaxed mb-6">
              The same guides, gathered by the moment of the day they serve. A prayer can belong to more than one group. You can also read the biblical texts that stand behind them at{" "}
              <a href={CBO_HOME} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>Catholic Bible Online</a>.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              {PRAYER_GROUPS.map((group) => (
                <section key={group.id} aria-labelledby={`group-${group.id}`} className="rounded-xl border border-border p-5">
                  <h3 id={`group-${group.id}`} className="font-display text-lg font-bold text-text mb-1">{group.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-3">{group.description}</p>
                  <ul className="space-y-2">
                    {prayerGuidesIn(group.id).map((guide) => (
                      <li key={`${group.id}-${guide.href}`}>
                        <Link to={guide.href} className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                          {guide.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <h2 id="next-step" className="font-display text-2xl font-bold text-text mt-10 mb-4 scroll-mt-24">The Hours, Easter, and confession</h2>
            <p className="text-text leading-relaxed mb-6">
              The twenty-two guides above are enough to pray through an ordinary day. Three further pages belong next to them, because they answer questions the short prayers raise: how the Church herself prays the hours, what replaces the Angelus at Easter, and how an examination becomes a confession.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mb-10">
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">The Divine Office</h3>
                <p className="text-text-muted leading-relaxed mb-3">Morning and Evening Prayer for lay people, and why the Office is liturgy rather than a private devotion.</p>
                <Link to="/blog/divine-office-laity/" className="font-semibold text-accent underline underline-offset-2">Pray the Liturgy of the Hours</Link>
              </div>
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">The Regina Caeli</h3>
                <p className="text-text-muted leading-relaxed mb-3">The Easter antiphon that stands in for the Angelus from Easter Sunday through Pentecost.</p>
                <Link to="/blog/regina-caeli-prayer/" className="font-semibold text-accent underline underline-offset-2">Pray the Regina Caeli</Link>
              </div>
              <div className="rounded-xl border border-border p-5">
                <h3 className="font-display text-lg font-bold text-text mb-2">Before confession</h3>
                <p className="text-text-muted leading-relaxed mb-3">An examination by the commandments, then the steps that carry it into the sacrament.</p>
                <Link to="/blog/examination-of-conscience-before-confession/" className="font-semibold text-accent underline underline-offset-2">Prepare for confession</Link>
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Begin with a routine you can keep</h2>
            <p className="text-text leading-relaxed mb-6">
              Choose one time, one place, and a handful of prayers. Stay with them long enough that they become familiar. Go to Mass on Sunday. Confess when you need to. Then let prayer spill into how you speak to the people in your house and how you treat the person who cannot repay you. Charity is where a prayer routine either becomes Christian life or stays a private hobby.
            </p>
            <p className="text-text leading-relaxed mb-6">
              If you are starting from nothing, open the{" "}
              <Link to="/blog/morning-offering-prayer/" className="text-accent font-semibold underline underline-offset-2">Morning Offering</Link>,
              the{" "}
              <Link to="/blog/our-father-prayer/" className="text-accent font-semibold underline underline-offset-2">Our Father</Link>,
              and the{" "}
              <Link to="/blog/night-prayer-catholic/" className="text-accent font-semibold underline underline-offset-2">night prayer</Link>.
              The rest of the directory can wait until those three are honest.
            </p>

            <QuizCTA />
            <div id="questions" className="scroll-mt-24">
            <BlogFAQ
              htmlAnswers
              faqs={[
                {
                  question: "What prayers should Catholics say every day?",
                  answer: "The Church does not impose one fixed list on every Catholic. A sustainable pattern is the Sign of the Cross, the Our Father, a short morning offering, and an evening examination with an Act of Contrition. The Rosary and the Angelus are excellent traditional devotions. They are not universal daily obligations.",
                },
                {
                  question: "What is the best Catholic morning prayer?",
                  answer: "The Morning Offering is a strong place to begin, because it places the whole day in God’s hands. Many people add the Our Father and the Hail Mary. The best morning prayer is the one you can pray with attention, not the longest text.",
                },
                {
                  question: "What prayer should I say before going to bed?",
                  answer: "A night prayer, a brief examination of conscience, and an Act of Contrition form a sound evening. Some people add the Our Father or the Rosary. End in gratitude and trust, even when the day went badly.",
                },
                {
                  question: "Is it mandatory to pray the Rosary every day?",
                  answer: "No. The Rosary is a traditional devotion the Church warmly recommends. She does not bind every Catholic to pray it every day. Missing it is not the same thing as missing Sunday Mass.",
                },
                {
                  question: "How often should Catholics pray the Our Father?",
                  answer: "Jesus gave it as the pattern of Christian prayer. There is no canon-law quota for private recitation. It is prayed at Mass, in the Rosary, and in the Liturgy of the Hours. Praying it daily is a wise and ancient habit.",
                },
                {
                  question: "Can Catholics pray in their own words?",
                  answer: "Yes. The Catechism treats vocal prayer, meditation, and contemplation as real prayer. Traditional texts give you the Church’s language. Honest words of your own are also prayer. The two belong together.",
                },
                {
                  question: "How can beginners establish a prayer routine?",
                  answer: "Choose one short time you can keep, such as five minutes after waking. Use the same few prayers for a month before you add anything. If you miss a day, begin again the next morning. Do not treat a missed day as a reason to quit.",
                },
                {
                  question: "Do Catholics need to pray at specific times?",
                  answer: "The Church’s public liturgy has hours, and many people pray in the morning and at night. Private prayer is not tied to one clock time for every lay person. The Angelus is traditionally associated with morning, noon, and evening as a devotion, not as a law for every Catholic.",
                },
                {
                  question: "What is the difference between prayer, devotion, and liturgy?",
                  answer: "Prayer is the raising of the mind and heart to God. A devotion, such as the Rosary, is a particular way of praying that the Church approves and does not impose on everyone. The liturgy, above all the Mass and the sacraments, is the public worship of the whole Church.",
                },
                {
                  question: "What should I do when I struggle to pray consistently?",
                  answer: "Shorten the routine until you can keep it. Tell God the truth about the distraction. Keep Sunday Mass. Dryness is common and is not proof that God has left. A priest or a wise companion can help you sort fatigue from avoidance.",
                },
              ]}
            />
            </div>
            <RelatedArticles currentSlug="daily-catholic-prayers" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
