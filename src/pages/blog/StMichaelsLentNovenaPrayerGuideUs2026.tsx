import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Shield,
  Calendar,
  Clock,
  ArrowLeft,
  Sword,
  Flame,
  ExternalLink,
  BookOpen,
  Heart,
} from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";
import { StMichaelCboCTA, StMichaelCboLink } from "@/components/blog/StMichaelCboCTA";
import { CBO_ST_MICHAELS_LENT_GUIDE } from "@/lib/catholicBibleOnlineLinks";

export default function StMichaelsLentNovenaPrayerGuideUs2026() {
  return (
    <>
      <Helmet>
        <title>St. Michael&apos;s Lent Novena 2026: 40-Day Catholic Prayer Guide (USA) | Guide Catholic</title>
        <meta
          name="description"
          content="St. Michael's Lent 2026 runs August 15–September 29. Complete U.S. Catholic guide to the 40-day novena, fasting, spiritual warfare, calendar, and daily prayer — with links to the full novena text."
        />
        <meta
          name="keywords"
          content="st michael's lent, st michael lent novena, st michael 40 day novena, prayer to st michael archangel, michaelmas 2026, assumption to september 29, spiritual warfare catholic usa"
        />
        <link
          rel="canonical"
          href="https://guidecatholic.com/blog/st-michaels-lent-novena-prayer-guide-us-2026/"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title="St. Michael's Lent Novena: 40-Day Catholic Prayer Guide (US 2026)"
        description="St. Michael's Lent 2026 runs August 15–September 29. Complete U.S. Catholic guide to the 40-day novena, fasting, spiritual warfare, calendar, and daily prayer."
        url="https://guidecatholic.com/blog/st-michaels-lent-novena-prayer-guide-us-2026/"
        datePublished="2026-08-06"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          {
            name: "St. Michael's Lent Novena 2026",
            url: "https://guidecatholic.com/blog/st-michaels-lent-novena-prayer-guide-us-2026/",
          },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">
                Blog
              </Link>
              <span>/</span>
              <span className="text-text">St. Michael&apos;s Lent Novena 2026</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                  Prayers &amp; Devotions
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  August 6, 2026
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20 min read
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                St. Michael&apos;s Lent Novena: 40-Day Catholic Prayer Guide (US 2026)
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Every August, American Catholics search for St. Michael&apos;s Lent — a season of prayer,
                fasting, and penance from the Assumption (August 15) to Michaelmas (September 29). This
                guide explains the devotion, how to live it in 2026, and where to pray the complete daily
                novena online.
              </p>
            </header>

            <div className="aspect-video bg-orange-50 rounded-2xl flex items-center justify-center mb-10 relative overflow-hidden">
              <Shield className="w-28 h-28 text-orange-600 relative z-10" strokeWidth={1.2} />
              <Sword className="w-40 h-40 text-orange-300/40 absolute -bottom-6 -right-6" strokeWidth={1} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">
                  <strong>St. Michael&apos;s Lent</strong> is a 40-day Catholic devotion of prayer and penance
                  honoring St. Michael the Archangel, traditionally from <strong>August 15</strong> (Assumption)
                  to <strong>September 29</strong> (Feast of the Archangels). In 2026, U.S. Catholics pray
                  daily, choose one sustainable penance, and ask Michael to defend souls, families, and the
                  Church. For the full 46-day novena text with daily pages, see the{" "}
                  <a
                    href={CBO_ST_MICHAELS_LENT_GUIDE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80"
                  >
                    St. Michael&apos;s Lent novena guide on Catholic Bible Online
                  </a>
                  .
                </p>
              </div>

              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Pray the Full 46-Day Novena (Free Online)
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  Guide Catholic explains the theology and discipline of St. Michael&apos;s Lent. For the
                  complete daily prayer text — Sign of the Cross, St. Michael Prayer, litany, consecration,
                  and angelic invocations for every calendar day from August 15 through September 29 — use
                  Catholic Bible Online&apos;s dedicated novena series:
                </p>
                <a
                  href={CBO_ST_MICHAELS_LENT_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Open St. Michael&apos;s Lent Novena Guide
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                What Is St. Michael&apos;s Lent?
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                St. Michael&apos;s Lent is a period of intensified prayer, fasting, and almsgiving in honor
                of St. Michael the Archangel. It is a <em>pious custom</em> rooted in Franciscan tradition,
                not a universal liturgical season like Lent before Easter. Still, popes, saints, and parishes
                across the United States treat it as a serious time of spiritual combat — asking heaven&apos;s
                prince to defend the faithful against evil, anxiety, addiction, and division.
              </LinkedText>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                The season traditionally opens on the{" "}
                <strong>Feast of the Assumption of the Blessed Virgin Mary</strong> (August 15) and closes on
                the <strong>Feast of Saints Michael, Gabriel, and Raphael</strong> (September 29), often
                called Michaelmas in English-speaking countries. St. Francis of Assisi observed this period
                with particular fervor; tradition holds that toward the end of one St. Michael&apos;s Lent he
                received the stigmata on Mount La Verna — linking penance, angels, and the Cross in one of
                the Church&apos;s most dramatic mystic events.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                Franciscan Origins: La Verna and the Stigmata
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                In 1224, St. Francis withdrew to Mount La Verna for forty days of prayer and fasting in
                honor of St. Michael, whom he revered as a mediator between God and humanity after the
                Blessed Virgin. Francis had a deep devotion to the angels and saw Michael as the defender of
                the Church and guide of souls toward Christ crucified. It was during this Lent that Francis
                received the sacred stigmata — the wounds of Christ in his hands, feet, and side.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Franciscan communities and many lay Catholics in the U.S. still return to this devotion each
                summer. The lesson is not that every penitent will receive extraordinary signs, but that
                honoring the angels through sustained prayer opens the soul to deeper conformity with
                Christ&apos;s passion — the only true victory in spiritual warfare.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Why St. Michael Searches Spike in the United States
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                St. Michael the Archangel ranks among the most searched saints in American Catholic life —
                especially in states with strong devotional culture. After 2018, many pastors renewed the St.
                Michael Prayer after Mass during crises in the Church. Pope Francis also encouraged reciting
                it during October rosary intentions. By late summer, that devotion widens into a whole
                season: spiritual warfare, family protection, parish renewal, and digital prayer apps that
                popularized St. Michael&apos;s Lent for English-speaking Catholics.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>
                  <strong>Spiritual warfare</strong> — Catholics ask Michael to defend against evil, anxiety,
                  and addiction
                </li>
                <li>
                  <strong>Family protection</strong> — parents consecrate children and homes before the
                  school year
                </li>
                <li>
                  <strong>Parish renewal</strong> — men&apos;s groups, youth ministries, and RCIA cohorts
                  adopt 40-day challenges
                </li>
                <li>
                  <strong>Seasonal rhythm</strong> — Assumption to Michaelmas frames late summer as a
                  &quot;mini-Lent&quot; before autumn feasts
                </li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                St. Michael&apos;s Lent vs. the 9-Day St. Michael Novena
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                Do not confuse the two devotions. <strong>St. Michael&apos;s Lent</strong> is roughly 40 days
                of penance (August 15–September 29), often with the same daily prayer repeated each day to
                form one sustained campaign. The <strong>9-day St. Michael novena</strong> is a classic
                novena with different themes each day — humility, protection, courage — and can be prayed
                anytime, not only in summer.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                For the seasonal lenten devotion with a daily page for every calendar day, use the{" "}
                <a
                  href={CBO_ST_MICHAELS_LENT_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium underline underline-offset-2 hover:text-accent/80"
                >
                  46-day St. Michael&apos;s Lent novena on Catholic Bible Online
                </a>
                . For a shorter focused novena any time of year, see our{" "}
                <Link
                  to="/blog/st-michael-novena-protection/"
                  className="text-accent font-medium underline underline-offset-2 hover:text-accent/80"
                >
                  9-day St. Michael novena for protection
                </Link>
                .
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                How to Pray the St. Michael&apos;s Lent Novena (Daily Structure)
              </h2>
              <p className="text-text leading-relaxed mb-4">
                The full St. Michael&apos;s Lent novena on Catholic Bible Online includes, each day:
              </p>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Sign of the Cross</li>
                <li>
                  <strong>Prayer to St. Michael the Archangel</strong> (&quot;defend us in battle…&quot;)
                </li>
                <li>Act of trust in the Sacred Heart of Jesus</li>
                <li>
                  Kyrie and litany invocations to St. Michael — wisdom, humility, victor over Satan,
                  protector of the Church
                </li>
                <li>Lamb of God</li>
                <li>Closing collect through St. Michael&apos;s intercession</li>
                <li>
                  Four Our Fathers — for St. Michael, St. Gabriel, St. Raphael, and your Guardian Angel
                </li>
                <li>Consecration to St. Michael for protection at the hour of death</li>
              </ol>
              <p className="text-text leading-relaxed mb-6">
                Each day repeats this powerful text so the 40 days form one sustained campaign — not a
                one-time recitation. The complete guide with milestone days (Day 1, Day 7, Day 32, Day 46)
                is on{" "}
                <a
                  href={CBO_ST_MICHAELS_LENT_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium underline underline-offset-2 hover:text-accent/80"
                >
                  Catholic Bible Online
                </a>
                .
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 mb-10">
                <h3 className="font-bold text-text mb-4 text-center text-lg flex items-center justify-center gap-2">
                  <Flame className="w-5 h-5 text-orange-600" />
                  The Three Pillars of St. Michael&apos;s Lent
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-orange-800 text-sm mb-2 uppercase tracking-wide">Prayer</h4>
                    <p className="text-sm text-text-muted">
                      Daily novena + St. Michael Prayer. Optional: Chaplet of St. Michael or Rosary.
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-orange-800 text-sm mb-2 uppercase tracking-wide">Penance</h4>
                    <p className="text-sm text-text-muted">
                      One sustainable fast — media, sweets, or idle talk — not extreme bodily mortification.
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-orange-800 text-sm mb-2 uppercase tracking-wide">Charity</h4>
                    <p className="text-sm text-text-muted">
                      Weekly work of mercy so prayer turns outward — almsgiving, visitation, or service.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                2026 Calendar: August 15 to September 29
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                American Catholics often count calendar days from Assumption to Michaelmas. The Catholic Bible
                Online novena follows that rhythm across <strong>46 calendar days</strong>. Some traditions
                exclude Sundays from fasting counts; prayer can still be offered daily. Note: in 2026 the
                Assumption (August 15) falls on Saturday — the U.S. Mass obligation for that solemnity is
                abrogated, but Catholics are still encouraged to attend Mass and begin the novena that day.
              </LinkedText>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-accent/10">
                      <th className="border border-border p-3 text-left text-text">Milestone</th>
                      <th className="border border-border p-3 text-left text-text">Date (2026)</th>
                      <th className="border border-border p-3 text-left text-text">Novena day</th>
                    </tr>
                  </thead>
                  <tbody className="text-text">
                    <tr>
                      <td className="border border-border p-3">Assumption of Mary — novena begins</td>
                      <td className="border border-border p-3">August 15 (Saturday)</td>
                      <td className="border border-border p-3">Day 1</td>
                    </tr>
                    <tr className="bg-background-muted/30">
                      <td className="border border-border p-3">Queenship of Mary</td>
                      <td className="border border-border p-3">August 22</td>
                      <td className="border border-border p-3">Day 8</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">St. Monica / St. Augustine</td>
                      <td className="border border-border p-3">August 27–28</td>
                      <td className="border border-border p-3">Days 13–14</td>
                    </tr>
                    <tr className="bg-background-muted/30">
                      <td className="border border-border p-3">St. Michael&apos;s Lent midpoint</td>
                      <td className="border border-border p-3">~September 1</td>
                      <td className="border border-border p-3">Day 18</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Birth of Mary</td>
                      <td className="border border-border p-3">September 8</td>
                      <td className="border border-border p-3">Day 25</td>
                    </tr>
                    <tr className="bg-background-muted/30">
                      <td className="border border-border p-3">Exaltation of the Holy Cross</td>
                      <td className="border border-border p-3">September 14</td>
                      <td className="border border-border p-3">Day 31</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Our Lady of Sorrows</td>
                      <td className="border border-border p-3">September 15</td>
                      <td className="border border-border p-3">Day 32</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="border border-border p-3 font-medium">
                        Feast of St. Michael, Gabriel &amp; Raphael
                      </td>
                      <td className="border border-border p-3 font-medium">September 29 (Tuesday)</td>
                      <td className="border border-border p-3 font-medium">Day 46</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <QuizCTA
                title="Are you under spiritual attack?"
                description="Take our free Catholic assessment for personalized guidance on prayer, spiritual warfare, and building a daily routine that lasts."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Penance &amp; Fasting: A Practical U.S. Plan
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                St. Michael&apos;s Lent is &quot;mini-Lent.&quot; American lay Catholics commonly choose{" "}
                <em>one</em> penance for the whole season rather than copying monastic rigor. Ash Wednesday
                fasting rules do not automatically apply; the goal is sustained discipline aligned with your
                state of life.
              </LinkedText>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>
                  <strong>Fasting</strong> — bread and sweets on Wednesdays or Fridays, or one meal skipped
                  weekly
                </li>
                <li>
                  <strong>Media fast</strong> — limit social media (high impact for teens and adults)
                </li>
                <li>
                  <strong>Almsgiving</strong> — support pregnancy centers, food pantries, or parish St.
                  Vincent de Paul
                </li>
                <li>
                  <strong>Sacraments</strong> — monthly Confession minimum; weekly Mass if possible
                </li>
                <li>
                  <strong>Angel prayers</strong> — daily novena from{" "}
                  <a
                    href={CBO_ST_MICHAELS_LENT_GUIDE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    Catholic Bible Online
                  </a>{" "}
                  plus the short St. Michael Prayer
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                Pair penance with mercy: one work of charity each week so prayer does not turn inward. The
                Church teaches that fasting without love is empty; St. Michael&apos;s Lent should make you
                bolder in service, not merely stricter in rules.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Sword className="w-6 h-6 text-accent" />
                Spiritual Warfare: Why Americans Pray St. Michael Now
              </h2>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                Scripture presents Michael as the great prince who protects God&apos;s people (Daniel 12) and
                the leader of heaven&apos;s armies against the dragon (Revelation 12). His name —{" "}
                <em>Quis ut Deus?</em> / &quot;Who is like God?&quot; — is the antidote to pride. U.S.
                Catholics invoke Michael for protection of children and schools, healing after trauma or
                addiction, peace in divided families, defense of religious freedom, and comfort at the hour
                of death.
              </LinkedText>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">
                  Prayer to St. Michael the Archangel
                </h3>
                <p className="text-text italic leading-relaxed text-sm">
                  Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness
                  and snares of the devil. May God rebuke him, we humbly pray; and do Thou, O Prince of the
                  Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl
                  about the world seeking the ruin of souls. Amen.
                </p>
              </div>
              <LinkedText
                className="text-text leading-relaxed mb-6"
                currentSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              >
                Pope Leo XIII composed this prayer after a vision of spiritual battle; many U.S. parishes
                still recite it after Mass. St. Michael does not win by his own power but by the Blood of the
                Lamb — he helps the faithful remain at the foot of the Cross. For deeper background, see our
                guides to the Feast of the Archangels and the Chaplet of St. Michael.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-accent" />
                Who Should Pray This Novena?
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-6">
                <li>
                  <strong>Parents</strong> consecrating the home before the school year
                </li>
                <li>
                  <strong>Police, military, firefighters</strong> — St. Michael is patron of protectors
                </li>
                <li>
                  <strong>Anyone in RCIA</strong> or returning to the Church seeking structure
                </li>
                <li>
                  <strong>Parishes</strong> running a 40-day &quot;spiritual combat&quot; group
                </li>
                <li>
                  <strong>Catholics who missed Lent</strong> and want a second chance at sustained penance
                </li>
              </ul>
              <p className="text-text leading-relaxed mb-6">
                You may join late — start on today&apos;s novena day and continue through September 29.
                Consistency matters more than perfection. If you begin after August 15, open the current day
                on{" "}
                <a
                  href={CBO_ST_MICHAELS_LENT_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium underline underline-offset-2 hover:text-accent/80"
                >
                  Catholic Bible Online
                </a>{" "}
                and keep going.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Sample Daily Routine (15–20 Minutes)
              </h2>
              <ol className="list-decimal list-inside text-text space-y-3 mb-8">
                <li>Sign of the Cross + one minute of silence</li>
                <li>
                  Read today&apos;s St. Michael&apos;s Lent novena page slowly (
                  <a
                    href={CBO_ST_MICHAELS_LENT_GUIDE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-accent/80"
                  >
                    Catholic Bible Online
                  </a>
                  )
                </li>
                <li>State one intention (family, nation, Church, personal struggle)</li>
                <li>One Our Father, Hail Mary, Glory Be for the holy angels</li>
                <li>Optional: decade of the Rosary (Our Lady, Queen of Angels)</li>
                <li>Sign of the Cross</li>
              </ol>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">
                Scripture for St. Michael&apos;s Lent
              </h2>
              <ul className="list-disc list-inside text-text space-y-2 mb-8">
                <li>
                  <strong>Daniel 10</strong> — Michael as heavenly helper
                </li>
                <li>
                  <strong>Daniel 12</strong> — Michael, the great prince
                </li>
                <li>
                  <strong>Jude 1:9</strong> — Michael contends with the devil
                </li>
                <li>
                  <strong>Revelation 12:7–9</strong> — war in heaven
                </li>
                <li>
                  <strong>Ephesians 6:10–18</strong> — armor of God
                </li>
                <li>
                  <strong>Luke 1:26–38</strong> — Gabriel announces Christ (honor all archangels)
                </li>
              </ul>

              <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8 mb-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 mt-0">
                  Begin St. Michael&apos;s Lent Today
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  American search interest in St. Michael&apos;s Lent rises every year from Assumption through
                  Michaelmas. Do not wait for the perfect discipline — pray the novena today, choose one
                  penance, and ask the Prince of the Heavenly Host to defend you and those you love.
                </p>
                <a
                  href={CBO_ST_MICHAELS_LENT_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Start the 46-Day Novena on Catholic Bible Online
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="st-michaels-lent-novena-prayer-guide-us-2026"
              faqs={[
                {
                  question: "When does St. Michael's Lent start and end in 2026?",
                  answer: "It traditionally begins August 15 (Assumption) and ends September 29 (Feast of the Archangels). The Catholic Bible Online novena covers every calendar day in between — 46 days total.",
                },
                {
                  question: "Is St. Michael's Lent official in the Catholic Church?",
                  answer: "It is an approved pious devotion rooted in Franciscan tradition, not a universal liturgical season like Easter Lent. Bishops and pastors may encourage it locally without imposing it as law.",
                },
                {
                  question: "How long is the St. Michael's Lent novena?",
                  answer: "46 daily prayers on Catholic Bible Online — one for each calendar day from August 15 through September 29. The underlying penance is often described as 40 days.",
                },
                {
                  question: "Can I start the novena if I missed August 15?",
                  answer: "Yes. Begin on the current day and finish on September 29, or start at Day 1 and extend past the feast — consistency matters more than perfection.",
                },
                {
                  question: "What is the difference between the St. Michael prayer and the full novena?",
                  answer: "The short Prayer to St. Michael takes under a minute. The full St. Michael's Lent novena adds litany, consecration, and angelic intercession — about 15 minutes per day.",
                },
                {
                  question: "Is the Assumption a holy day of obligation in 2026?",
                  answer: "In U.S. Latin Rite dioceses, no — August 15 falls on Saturday and the Mass precept is abrogated. Catholics are still encouraged to attend Mass and begin St. Michael's Lent that day.",
                },
              ]}
            />

            <RelatedArticles currentSlug="st-michaels-lent-novena-prayer-guide-us-2026" />

            <ArticleBottomCTA
              title="Enlist the Prince of the Heavenly Host"
              description="Victory in spiritual combat begins with daily prayer. Take our free quiz for a personalized plan to grow in faith this St. Michael's Lent."
            />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
