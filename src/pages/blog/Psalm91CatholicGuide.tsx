import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Calendar, Clock, ArrowLeft, ExternalLink, BookOpen } from "lucide-react";
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
import { CBO_HOME, CBO_PSALM_91_GUIDE, cboLinkClass } from "@/lib/catholicBibleOnlineLinks";

const SLUG = "psalm-91-catholic-protection-prayer-guide";
const PAGE_URL = `https://guidecatholic.com/blog/${SLUG}/`;
const TITLE = "Psalm 91: Catholic Meaning, Protection Prayer & How to Pray It";
const DESCRIPTION =
  "A deep Catholic guide to Psalm 91: the Most High, angels, the noonday devil, Jesus in the desert, Compline, and how to pray it without superstition.";

export default function Psalm91CatholicGuide() {
  return (
    <>
      <Helmet>
        <title>{TITLE} | Guide Catholic</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="psalm 91, psalm 91 catholic, psalm 91 meaning, psalm 91 prayer, psalm of protection, qui habitat, psalm 91 angels, how to pray psalm 91, psalm 91 vs psalm 90"
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Helmet>
      <ArticleSchema title={TITLE} description={DESCRIPTION} url={PAGE_URL} datePublished="2026-11-16" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: "Psalm 91 Catholic Guide", url: PAGE_URL },
        ]}
      />
      <HowToSchema
        name="How to Pray Psalm 91 as a Catholic"
        description="A simple Catholic way to pray Psalm 91 at home with trust, not presumption."
        url={PAGE_URL}
        totalTime="PT15M"
        steps={[
          { name: "Make the Sign of the Cross", text: "Begin by naming one fear honestly before God." },
          { name: "Read the full psalm slowly", text: "Use the full text and meaning guide on Catholic Bible Online, or a Catholic Bible at home." },
          { name: "Pause on one verse", text: "Stay with the line that matches your night, illness, travel, or spiritual unrest." },
          { name: "Answer with verse 2", text: "Say in your own words: You are my refuge and my fortress." },
          { name: "Ask for angelic help", text: "Invoke your guardian angel and, if you wish, Saint Michael — without replacing Christ." },
          { name: "Close with the Our Father", text: "End as the Lord taught: deliver us from evil." },
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
              <span className="text-text">Psalm 91</span>
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
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">Prayers &amp; Devotions</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />November 16, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />18 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                Psalm 91: The Catholic Prayer of Refuge — Meaning, Angels, and How to Pray It
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                Psalm 91 is the Church&apos;s great song of trust under pressure: night terror, pestilence, snares, and the quiet war of the heart. Catholics pray it at Compline, over sickbeds, before travel, and in spiritual combat — not as a charm, but as confession that the Most High is a dwelling, not a spare tire.
              </p>
            </header>

            <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center mb-10">
              <Shield className="w-24 h-24 text-slate-600" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium mb-0">
                  Psalm 91 teaches that the one who <em>dwells</em> in the shelter of the Most High finds refuge, angelic guard, and God&apos;s answer in tribulation. It does not promise a life without the Cross. For the full Douay-Rheims text, verse-by-verse notes, and a home prayer plan, use the{" "}
                  <a href={CBO_PSALM_91_GUIDE} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                    Psalm 91 full text and Catholic protection guide on Catholic Bible Online
                  </a>
                  .
                </p>
              </div>
              <BlogArticleAd slot="1906776249" />

              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Read Psalm 91 in full on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  The twin guide prints all sixteen verses, explains Psalm 91 / Psalm 90 numbering, and pairs the chapter with protection prayers and the sacraments. Open it when you want the text in front of you, not a paraphrase.
                </p>
                <a
                  href={CBO_PSALM_91_GUIDE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Open the Psalm 91 guide
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Psalm 91 is — and why Catholics keep returning to it</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Psalm 91 is a wisdom psalm of trust. Its Latin opening, Qui habitat — “He who dwells” — has given the Church a title for the whole prayer. The poem places the believer under God’s wings, behind a shield of faithfulness, and in the charge of angels. The dangers named are concrete: hunters’ snares, pestilence, terror by night, the arrow by day, the “noonday devil,” and powers imaged as asp, lion, and dragon.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                People search this psalm when fear is not abstract — a diagnosis, a deployment, a dark house after midnight, a temptation that feels smarter than they are. The Church answers with Scripture, not slogans. The Catechism teaches that providence watches over creation and persons; faith does not cancel freedom, medicine, or prudence, but rests in the Father who knows our days (CCC 302–314, 321). Hope is the theological virtue that expects the kingdom, not control of every outcome (CCC 1817–1821).
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                If you need a cluster of protection texts beyond this chapter, see{" "}
                <Link to="/blog/bible-verses-about-protection/" className={cboLinkClass}>Bible verses about protection</Link>
                {" "}and the wider set of{" "}
                <Link to="/blog/catholic-prayer-for-protection/" className={cboLinkClass}>Catholic prayers for protection</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">“He who dwells”: the first word that changes everything</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm mb-0">
                  “He who dwells in the shelter of the Most High, who abides in the shadow of the Almighty, will say to the Lord, ‘My refuge and my fortress; my God, in whom I trust.’”
                </p>
                <p className="text-text-muted text-sm mt-2 mb-0">— Psalm 91:1–2</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                The Hebrew idea behind “dwell” is settled life, not a tourist stop at religion. The psalm does not open with “he who panics and googles a verse.” It opens with habitation: baptismal identity lived as Mass, Scripture, charity, and confession when the conscience is dirty. Verse 2 is not positive thinking. It is a creed spoken under pressure: <em>You</em> are my refuge. Trust is covenant loyalty.
              </p>
              <p className="text-text leading-relaxed mb-6">
                That is why the Fathers and the liturgy treat this psalm as formation, not insurance. A Christian who never darkens the church door but prints Psalm 91 on a phone case has misread the verbs. Dwelling is a life. Abiding is a relationship. The full text and Catholic reading are laid out in the{" "}
                <a href={CBO_PSALM_91_GUIDE} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                  Psalm 91 protection guide on Catholic Bible Online
                </a>
                .
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Wings, shield, and the God who covers</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Verses 3–4 move from confession to promise: deliverance from the snare, covering under wings, truth as a shield. Temple imagery and maternal tenderness meet here. The Church later hears Marian shelter in that tenderness without replacing Christ (CCC 971). The “snare of the hunters” is deceit — addiction, gossip chains, occult curiosity, patterns of sin that feel inescapable until grace cuts the cord.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                God’s covering is not a bubble that removes the world. It is a Presence that refuses to abandon the one who stays. Saints still die. Martyrs still bleed. The promise is that evil does not get the last word over the soul that clings to the Name.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Terror by night, arrow by day, and the noonday devil</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Verses 5–7 name three climates of fear. Night is when imagination runs the house. Day is when sudden violence or news can land without warning. Midday — the “noonday devil” of older translations — is acedia: the burnout, boredom, and spiritual flatness that hit when the sun is high and the soul feels empty. Desert monks knew that demon well. Modern Catholics meet it as doomscrolling, cynicism after lunch, or the quiet refusal to pray because “nothing happens.”
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                “A thousand shall fall at your side” is not a guarantee that believers never die in plagues or wars. It is confidence that the faithful are not owned by the disaster. Read it with Job, with Paul’s thorn, with the martyrs. Then read it again with Romans 8:38–39: nothing can separate us from the love of God in Christ Jesus.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">“No evil shall befall you”: how Catholics refuse the prosperity distortion</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Verse 10 — “no evil… near your dwelling” — is the line most often ripped from the Cross. Christ Himself suffered. The apostles were beaten. The Church’s calendar is thick with people who prayed the Psalms and died for the faith. Catholic preaching must say this plainly: God protects eternally even when He permits temporal trial for salvation. The psalm’s climax is not a safer commute. It is “I will show him my salvation” (v. 16) — eschatological, not only a longer retirement.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                Treating Psalm 91 as a force field is how superstition smuggles itself into devotion. Print it if it helps you remember. Do not hang it as a talisman that replaces Mass, confession, medicine, seat belts, or moral responsibility. For a sane map of protection prayer beside this psalm, stay with the{" "}
                <Link to="/blog/catholic-prayer-for-protection/" className={cboLinkClass}>Catholic prayer for protection guide</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Angels given charge — devotion without magic</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-6">
                <p className="text-text italic leading-relaxed text-sm mb-0">
                  “For he will give his angels charge of you to guard you in all your ways. On their hands they will bear you up, lest you dash your foot against a stone.”
                </p>
                <p className="text-text-muted text-sm mt-2 mb-0">— Psalm 91:11–12</p>
              </div>
              <p className="text-text leading-relaxed mb-6">
                These verses ground Catholic devotion to guardian angels (CCC 336). Angels guard and guide. They do not replace parents, doctors, therapists, or the sacraments. Honor them. Do not treat them as servants you command. The classic{" "}
                <Link to="/blog/guardian-angel-prayer/" className={cboLinkClass}>Guardian Angel prayer</Link>
                {" "}asks light, guard, rule, and guide — four verbs of discipleship, not of spectacle.
              </p>
              <p className="text-text leading-relaxed mb-6">
                Pair the psalm with the{" "}
                <Link to="/blog/saint-michael-prayer/" className={cboLinkClass}>Prayer to Saint Michael</Link>
                {" "}when spiritual combat is the honest name for what you face. Angels serve the King. They do not freelance for charms.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">The verse the devil quoted — and why Jesus refused</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                In the desert, Satan quoted Psalm 91:11–12 to urge Jesus to throw Himself from the Temple (Matthew 4:5–7). The misuse was precise: turn trust into a test. Demand a miracle as proof. Skip the Cross. Jesus answered with Deuteronomy: you shall not put the Lord your God to the test.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                That exchange is the Catholic key to the whole psalm. Trust in providence is not presumption. It is not recklessness. It is not refusing ordinary means. Memorizing Psalm 91 without the Gospel distorts it into the very temptation Christ rejected. When you pray “He will give his angels charge,” remember the One who refused to make angels a stunt.
              </LinkedText>

              <QuizCTA
                title="How deep is your Catholic faith?"
                description="Take our assessment and receive a personalized guide for prayer, sacraments, and spiritual protection that lasts longer than a scared night."
              />

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Asp, basilisk, lion, dragon: christological victory</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Verse 13’s beasts are symbolic victory over the powers of evil. The Fathers read them christologically: the serpent crushed, the dragon underfoot, the lion’s roar answered by the Lamb. You do not “claim” this verse as a martial-arts pose. You receive it as participation in Christ’s triumph — already won, still contested in history — until He comes.
              </LinkedText>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Verses 14–16 shift to divine speech. God answers the one who knows His name — relationship, not formula. “He will call upon me, and I will answer him; I will be with him in trouble.” Notice the order: presence in tribulation before deliverance and glory. Length of days includes eternal life. Salvation is shown, not staged for Instagram.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Psalm 91 in the Liturgy of the Hours</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                The Psalter orders the Church’s day. Psalm 91’s themes suit night — when anxiety is loudest and the house is quiet enough to hear it. In many traditions this psalm belongs to Compline, Night Prayer: entrusting darkness to God before sleep. Praying it with the Church binds personal fear to centuries of believers who also lay awake.
              </LinkedText>
              <p className="text-text leading-relaxed mb-6">
                If you are rebuilding a bedtime habit, start with the{" "}
                <Link to="/blog/night-prayer-catholic/" className={cboLinkClass}>Catholic night prayer guide</Link>
                {" "}and let Psalm 91 be the Scripture inside it. For the wider rhythm of the Hours, see the{" "}
                <Link to="/blog/liturgy-of-the-hours-guide/" className={cboLinkClass}>Liturgy of the Hours guide</Link>
                {" "}and{" "}
                <Link to="/blog/divine-office-laity/" className={cboLinkClass}>Divine Office for the laity</Link>.
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Psalm 91 and Psalm 90: why the numbers confuse people</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                In the Greek and Latin Psalters, the numbering of this stretch of the book differs by one from many modern English Bibles. The protection psalm that English readers call Psalm 91 is often Psalm 90 in Douay-Rheims chapter indexes and the traditional Vulgate (Qui habitat in adjutorio Altissimi). Meanwhile, “Psalm 91” on some Douay lists is a different Sabbath canticle. Always check the first line when you share a link.
              </LinkedText>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="p-2 text-left">Edition</th>
                      <th className="p-2 text-left">Number</th>
                      <th className="p-2 text-left">First sense</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-t">NABRE, RSV-CE, most pew Bibles</td>
                      <td className="p-2 border-t">Psalm 91</td>
                      <td className="p-2 border-t">He who dwells in the shelter of the Most High…</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t">Vulgate / traditional Douay index</td>
                      <td className="p-2 border-t">Psalm 90</td>
                      <td className="p-2 border-t">Qui habitat… — same inspired poem</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t">Catholic Bible Online guide</td>
                      <td className="p-2 border-t">Psalm 91 (common English name)</td>
                      <td className="p-2 border-t">Full Douay text of the protection psalm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-text leading-relaxed mb-6">
                The numbering chart and the complete verses are easiest to follow in the{" "}
                <a href={CBO_PSALM_91_GUIDE} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                  Catholic Bible Online Psalm 91 guide
                </a>
                .
              </p>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">How to pray Psalm 91 at home</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Keep the rite small enough to finish on a tired night. Sacraments first when the wound is sin or the need is Eucharist. Then Scripture.
              </LinkedText>
              <ol className="list-decimal list-inside text-text space-y-3 mb-6">
                <li>Sign of the Cross. Name one fear honestly — no performance for God who already knows.</li>
                <li>
                  Read the full psalm slowly from the{" "}
                  <a href={CBO_PSALM_91_GUIDE} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                    full text on Catholic Bible Online
                  </a>
                  {" "}or from your Catholic Bible.
                </li>
                <li>Pause on one verse: night → vv. 5–6; children → vv. 11–12; illness → vv. 3, 15; spiritual attack → vv. 13–15.</li>
                <li>Answer with verse 2 in your own words: “You are my refuge…”</li>
                <li>Ask your guardian angel — and Saint Michael if needed — for intercession, not replacement of Christ.</li>
                <li>One Our Father: “deliver us from evil,” as the Lord taught (Matthew 6).</li>
              </ol>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" />
                  A seven-day Psalm 91 plan
                </h3>
                <ul className="text-text space-y-2 text-sm mb-0">
                  <li>• Days 1–2: verses 1–4 — dwell, trust, wings</li>
                  <li>• Days 3–4: verses 5–10 — night, arrow, noonday, “no evil”</li>
                  <li>• Day 5: verses 11–12 — angels; refuse the desert temptation</li>
                  <li>• Day 6: verses 13–14 — victory in Christ, knowing the Name</li>
                  <li>• Day 7: verses 15–16 — presence in trouble, salvation shown</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">What Psalm 91 does not promise</h2>
              <ul className="list-disc list-inside text-text space-y-3 mb-6">
                <li>Automatic immunity from disease, accident, or persecution — martyrs prayed Psalms too.</li>
                <li>Permission to ignore medicine, mental health care, or moral duty.</li>
                <li>A verse to print as a talisman without faith and sacramental life.</li>
                <li>The devil’s reading in the desert: trust turned into a dare against God.</li>
              </ul>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                The psalm teaches hope. Hope waits for God. Superstition tries to manage God. Keep the difference sharp, and the prayer stays clean.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">Psalms that belong beside Psalm 91</h2>
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug={SLUG}>
                Cluster reading deepens prayer. Psalm 23 walks the valley. Psalm 27 asks whom shall I fear. Psalm 121 names the keeper who does not slumber. Psalm 130 rises from the depths. Protection is a choir, not a solo. Return to Catholic Bible Online for the chapter text, and to Guide Catholic for living the virtues those chapters demand.
              </LinkedText>

              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">A prayer rooted in Psalm 91</h2>
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-text italic leading-relaxed text-sm mb-0">
                  Lord God Most High, You are my refuge and my fortress. Teach me to dwell in Your aid by faith and baptism, not to visit You only when I am afraid. Deliver me from snares I see and sins I hide. Cover me under Your wings; make Your faithfulness my shield. Send Your holy angels to guard my ways — and teach me, with Christ in the desert, to trust You without testing You. Be with me in tribulation. Show me Your salvation. Shelter this house, those I love, and all who fear this night. Through Christ our Lord. Amen.
                </p>
                <p className="text-text-muted text-xs mt-3 mb-0">Original prayer from Guide Catholic — devotion, not a liturgical text of the Missal.</p>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts at a glance</h3>
                <ul className="text-text space-y-2 text-sm mb-0">
                  <li>• <strong>Genre:</strong> Wisdom trust psalm — Qui habitat</li>
                  <li>• <strong>Central claim:</strong> God is refuge for those who dwell in Him</li>
                  <li>• <strong>Liturgy:</strong> Suited to Compline / night prayer</li>
                  <li>• <strong>Key warning:</strong> Jesus rejected Satan’s misuse of vv. 11–12</li>
                  <li>• <strong>Full text:</strong>{" "}
                    <a href={CBO_PSALM_91_GUIDE} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                      Catholic Bible Online Psalm 91 guide
                    </a>
                  </li>
                  <li>• <strong>More on Guide Catholic:</strong>{" "}
                    <Link to="/blog/catholic-prayer-for-protection/" className={cboLinkClass}>prayers for protection</Link>
                  </li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug={SLUG}
              faqs={[
                {
                  question: "What is Psalm 91 about?",
                  answer:
                    "Psalm 91 is a prayer of trust in God as refuge and protector amid hidden and open dangers. It culminates in God’s promise to hear, deliver, and grant salvation to those who cling to Him — not a promise of a painless life.",
                },
                {
                  question: "Where can I read the full text of Psalm 91?",
                  answer:
                    "Read all sixteen verses with Catholic notes in the Psalm 91 full text and protection guide on Catholic Bible Online.",
                },
                {
                  question: "Is Psalm 91 a Catholic prayer?",
                  answer:
                    "It is inspired Scripture in the Old Testament, prayed by Jews and Christians. The Catholic Church canonizes it in the Bible and prays it in the Liturgy of the Hours and popular devotion, fulfilled in Christ’s trust in the Father.",
                },
                {
                  question: "Which verse of Psalm 91 is best at night?",
                  answer:
                    "Verses 5–6 name terror by night; verses 11–12 name angelic guard. Many Catholics pray the whole psalm at Compline or before sleep with the Sign of the Cross.",
                },
                {
                  question: "Why do some Catholic Bibles call it Psalm 90?",
                  answer:
                    "Greek and Latin Psalter numbering differs by one in this section. The inspired poem English readers call Psalm 91 is often Psalm 90 in the Vulgate and Douay indexes. Check the first line when sharing links.",
                },
                {
                  question: "Did Jesus quote Psalm 91?",
                  answer:
                    "The devil quoted verses 11–12 against Him in the desert; Jesus refused to test God. The Church reads the psalm in light of the Cross and Resurrection, not as a dare for miracles.",
                },
                {
                  question: "Can I pray Psalm 91 for my family and home?",
                  answer:
                    "Yes — as intercessory Scripture prayer, together with ordinary prudence and, when needed, Confession and the Eucharist. Pair it with Catholic prayers for protection and the Guardian Angel prayer.",
                },
                {
                  question: "Does Psalm 91 mean nothing bad will happen to me?",
                  answer:
                    "No. Saints and martyrs prayed the Psalms and still suffered. The promise is God’s presence, angelic help, and final salvation — not immunity from every temporal trial.",
                },
              ]}
            />

            <RelatedArticles currentSlug={SLUG} />
            <ArticleBottomCTA
              title="Live the refuge — do not only quote it"
              description="Build Catholic habits of prayer, Confession, and night trust that outlast a single scared evening."
            />
            <p className="text-text-muted text-sm text-center mt-8">
              Full Psalm 91 text and study:{" "}
              <a href={CBO_PSALM_91_GUIDE} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                catholicbibleonline.com
              </a>
              {" · "}
              <a href={CBO_HOME} target="_blank" rel="noopener noreferrer" className={cboLinkClass}>
                Catholic Bible Online
              </a>
            </p>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
