import type { LiturgicalFeastGuide } from "./liturgicalFeastGuides";

const CBO = "https://catholicbibleonline.com/bible/";
const ABANDON = "https://catholicbibleonline.com/blog/novena-of-abandonment-catholic-prayer-guide/";
const KNOTS = "https://catholicbibleonline.com/blog/novena-our-lady-undoer-knots/";
const TREZENA = "https://catholicbibleonline.com/blog/st-anthony-trezena-prayer-guide-catholic/";
const JOB = "https://catholicbibleonline.com/blog/novena-finding-employment-catholic-prayer-guide/";
const MAGI = "https://catholicbibleonline.com/blog/three-wise-men-magi-star-of-bethlehem-guide/";

export const DEVOTION_COMPANION_GUIDES: LiturgicalFeastGuide[] = [
  {
    slug: "novena-of-abandonment",
    title: "Novena of Abandonment: 9 Days of Trust in Providence",
    h1: "Novena of Abandonment: How Catholics Entrust a Plan, a Sorrow, or a Future to God",
    description: "A Catholic novena of abandonment: what holy trust is, how it differs from passivity, and how to pray nine days without treating surrender as magic.",
    keywords: "novena of abandonment, holy abandonment, prayer of abandonment novena, charles de foucauld novena, trust in divine providence catholic, surrender to god novena",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "Novena of Abandonment",
    category: "Prayers & Devotions",
    lede: "Holy abandonment is not giving up. It is the Catholic act of putting a concrete fear — a diagnosis, a child, a job, a vocation — into the Father's hands while you still do the next right duty. A nine-day novena gives that act a beginning and an end.",
    answer: "A Novena of Abandonment is nine consecutive days of prayer in which you name what you cannot control and entrust it to Divine Providence. It is built on the same trust as Saint Charles de Foucauld's Prayer of Abandonment, and on Christ's words from the cross in " + `{{${CBO}luke/23/|Luke 23}}` + ". It is not quietism: you pray, and you still work, decide, and ask for help. The day-by-day text is on " + `{{${ABANDON}|Catholic Bible Online's Novena of Abandonment}}` + ".",
    facts: [
      { label: "Length", value: "Nine consecutive days" },
      { label: "Heart of the devotion", value: "Trust in Providence, not a guaranteed outcome" },
      { label: "Related prayer", value: "Prayer of Abandonment (St. Charles de Foucauld)" },
      { label: "Saint's feast", value: "Charles de Foucauld, December 1" },
    ],
    timeline: [
      { when: "1858–1916", what: "Charles de Foucauld, viscount, soldier, Trappist, then hermit among the Tuareg in Algeria." },
      { when: "November 13, 2005", what: "Beatified by Benedict XVI." },
      { when: "May 15, 2022", what: "Canonized by Francis. He is a saint, not only a spiritual writer." },
      { when: "December 1", what: "His memorial. A natural day to begin or end a novena of trust." },
    ],
    sections: [
      {
        id: "what-abandonment-is",
        heading: "What holy abandonment is — and what it is not",
        paragraphs: [
          "The Catechism calls Providence God's governance of creation, in which he cares for all things and can bring good even out of evil (CCC 302–314, 324). Abandonment is the interior response: \"You are my Father; I will not run the universe from my kitchen table.\" Jesus names the same trust: do not be anxious about tomorrow (" + `{{${CBO}matthew/6/|Matthew 6:25–34}}` + "). Mary says it in one line: \"Let it be to me according to your word\" (" + `{{${CBO}luke/1/|Luke 1:38}}` + ").",
          "It is not passivity. Quietism — the error that the soul should stop acting and stop willing — was condemned by the Church. Charles de Foucauld studied, learned languages, served the poor, and remained at his post. Saint Paul can write, \"we know that in everything God works for good with those who love him\" (" + `{{${CBO}romans/8/|Romans 8:28}}` + ") and still collect money, make tents, and argue with churches. You abandon the fruit. You do not abandon the work.",
        ],
        table: {
          caption: "Holy abandonment versus counterfeits",
          headers: ["Looks like trust", "What it actually is"],
          rows: [
            ["\"God will sort it out; I will not look for work.\"", "Presumption. Providence is not an excuse to skip duty."],
            ["\"If I pray this novena perfectly, God owes me the outcome.\"", "A bargain. Prayer is not a contract."],
            ["\"I will not decide; I am waiting for a sign.\"", "Often fear. The Church expects prudence as well as prayer."],
            ["\"Father, I will do today's duty and leave the harvest to you.\"", "Abandonment: work plus trust."],
          ],
        },
        callout: {
          label: "The cross, not a mood",
          text: "The pattern is " + `{{${CBO}luke/23/|Luke 23:46}}` + ": \"Father, into your hands I commit my spirit.\" Abandonment can be prayed in peace. It can also be prayed with clenched teeth. Both count.",
        },
      },
      {
        id: "how-to-pray-the-nine-days",
        heading: "How to pray the nine days",
        paragraphs: [
          "Keep the novena small enough to finish. Name one intention. Use a Catholic text, not a social-media \"surrender spell.\" " + `{{${ABANDON}|The Novena of Abandonment on Catholic Bible Online}}` + " is written for that: theology, a daily structure, and no promise that God will rearrange the year to your plan.",
        ],
        list: [
          "On day one, write the intention in a sentence: the job, the illness, the child, the decision.",
          "Pray at a time you already keep — after the Morning Offering, after the children are in bed.",
          "Each day: Sign of the Cross, that day's text from Catholic Bible Online, an Our Father, and a Glory Be.",
          "Add the [[/blog/prayer-of-abandonment-catholic/|Prayer of Abandonment]] once a day if you know it. It is the short form of the same act.",
          "Do the next concrete duty the same day: the phone call, the appointment, the apology, the application.",
          "If you miss a day, continue. A novena is devotion, not a machine that breaks.",
        ],
      },
      {
        id: "when-to-begin",
        heading: "When to begin",
        paragraphs: [
          "Any day. There is no required start date. Some Catholics begin on November 22 so the ninth day is December 1, the memorial of Saint Charles. Others begin the day a diagnosis or a letter arrives. The point is consecutive prayer, not a lucky calendar.",
          "If the wound is grief rather than a plan you cannot steer, you may need a different novena beside this one — for example the [[/blog/novena-for-holy-souls/|novena for the Holy Souls]] if you are praying for the dead. Abandonment is for the living who still have to walk.",
        ],
      },
      {
        id: "scripture-to-keep-open",
        heading: "Scripture to keep open during the novena",
        paragraphs: [
          "These chapters will not \"unlock\" an answer. They teach the same trust the novena is asking of you.",
        ],
        list: [
          `{{${CBO}matthew/6/|Matthew 6}} — daily bread, and the birds of the air.`,
          `{{${CBO}luke/12/|Luke 12}} — the rich fool, and \"your Father knows.\"`,
          `{{${CBO}psalms/37/|Psalm 37}} — \"Commit your way to the Lord.\"`,
          `{{${CBO}proverbs/3/|Proverbs 3}} — trust in the Lord with all your heart.`,
          `{{${CBO}1-peter/5/|1 Peter 5}} — \"cast all your anxieties on him.\"`,
          `{{${CBO}philippians/4/|Philippians 4}} — prayer with thanksgiving, then the peace of God.`,
        ],
      },
    ],
    prayer: "Father, I place in your hands what I keep taking back: this plan, this fear, this person I cannot save. I will do today's duty. I will not pretend to be you. Into your hands I commend my spirit, through Jesus Christ our Lord. Amen.",
    prayerHeading: "A prayer of abandonment",
    related: [
      { href: "/blog/prayer-of-abandonment-catholic/", label: "The Prayer of Abandonment (full text)" },
      { href: "/blog/prayer-of-trust-in-god/", label: "A prayer of trust in God" },
      { href: "/blog/morning-offering-prayer/", label: "The Morning Offering" },
      { href: "/blog/novena-for-finding-employment/", label: "Novena for finding employment" },
      { href: "/blog/how-to-pray-a-novena-guide/", label: "How to pray a novena" },
    ],
    faqs: [
      { question: "What is a Novena of Abandonment?", answer: "Nine days of prayer in which you name a situation you cannot control and entrust it to God the Father, while still doing your duty. It is a devotion of trust, not a guarantee." },
      { question: "Is abandonment the same as giving up?", answer: "No. The Church rejects quietism. Holy abandonment leaves the fruit to God and keeps the work. Charles de Foucauld prayed this way and remained at his post." },
      { question: "Who was Charles de Foucauld?", answer: "A French priest and hermit (1858–1916), beatified in 2005 and canonized on May 15, 2022. His Prayer of Abandonment is the short form of this spirituality." },
      { question: "Do I have to start on a certain date?", answer: "No. Consecutive days matter more than the calendar. Some people time the ninth day to December 1, his memorial." },
      { question: "What if I want a specific outcome?", answer: "You may ask for it. Then you add: \"not my will, but yours.\" A novena does not corner God." },
      { question: "Can I pray this for someone else?", answer: "Yes. Name them. You cannot force their freedom; you can entrust them." },
      { question: "Where is the nine-day text?", answer: "On Catholic Bible Online's Novena of Abandonment guide. This page is the theology and the method; that page is the daily prayer." },
      { question: "Is this superstition?", answer: "Not if you pray as a child of the Father and keep your duty. It becomes superstition if you treat the nine days as a spell that fails if you miss a word." },
    ],
  },
  {
    slug: "novena-our-lady-undoer-of-knots",
    title: "Our Lady Undoer of Knots Novena: History and How to Pray",
    h1: "Our Lady Undoer of Knots Novena: Mary, Irenaeus, and the Knots You Cannot Untie",
    description: "Our Lady Undoer of Knots: Irenaeus on Mary loosing Eve's knot, the Augsburg painting, Pope Francis, and how to pray the novena without superstition.",
    keywords: "our lady undoer of knots novena, mary undoer of knots, maria knotenloserin, undoer of knots history, pope francis undoer of knots, novena knots catholic",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "Undoer of Knots",
    category: "Prayers & Devotions",
    lede: "Catholics bring tangled marriages, legal snarls, and family fights to Mary under a German title: Undoer of Knots. The image is older than the Baroque painting. Saint Irenaeus already said that the knot of Eve's disobedience was loosed by Mary's obedience. A novena is how many people stay with that plea for nine days.",
    answer: "Our Lady Undoer of Knots is a Marian devotion: we ask Mary to take a concrete \"knot\" to her Son. The theology is Irenaeus, not magic. The famous painting is in Augsburg. Pope Francis helped the title travel the world. For nine days of prayer, use " + `{{${KNOTS}|Catholic Bible Online's Undoer of Knots novena}}` + ". Do not treat a ribbon or a printed knot as a charm.",
    facts: [
      { label: "Title", value: "Our Lady Undoer of Knots (Maria Knotenlöserin)" },
      { label: "Theological root", value: "St. Irenaeus: Mary looses the knot of Eve" },
      { label: "Image", value: "Baroque painting, St. Peter am Perlach, Augsburg" },
      { label: "Length of novena", value: "Nine days" },
    ],
    timeline: [
      { when: "Late 2nd century", what: "St. Irenaeus of Lyons writes that the knot of Eve's disobedience was loosed by the obedience of Mary (Against Heresies III, 22)." },
      { when: "c. 1700", what: "A Baroque painting in Augsburg shows Mary untying a long ribbon of knots, with angels." },
      { when: "1980s", what: "Jorge Bergoglio, later Pope Francis, encounters the image in Germany and promotes the devotion in Argentina." },
      { when: "As Pope", what: "Francis has spoken of Mary who unties knots in the lives of the faithful. The title remains a devotion, not a new dogma." },
    ],
    sections: [
      {
        id: "ireneus-and-the-knot",
        heading: "The knot is Eve's. The loosening is Mary's.",
        paragraphs: [
          "Before there was a German painting, there was a bishop. Irenaeus taught that Mary is the new Eve: as Eve's no helped undo the human race, Mary's yes (" + `{{${CBO}luke/1/|Luke 1:38}}` + ") helps restore it. He used the image of a knot. That is doctrine about the Incarnation and obedience, not a promise that every civil mess will be administratively cleared in nine days.",
          "Genesis still names the first disobedience (" + `{{${CBO}genesis/3/|Genesis 3}}` + "). The novena does not rewrite that chapter. It asks the woman who said yes to bring a particular tangle — a marriage, a will, a silence between siblings — to Christ.",
        ],
        callout: {
          label: "Mary always leads to Christ",
          text: "Catholics do not ask Mary to replace her Son. We ask her intercession. If a novena to the Undoer of Knots never mentions Jesus, it has already gone wrong. See [[/blog/do-catholics-worship-mary/|why Catholics do not worship Mary]] if that question is still in the room.",
        },
      },
      {
        id: "the-painting",
        heading: "The Augsburg painting, and what Pope Francis did",
        paragraphs: [
          "The image most people know hangs in the church of St. Peter am Perlach in Augsburg, Germany: Mary, in the glory of heaven, untying knots in a long white ribbon, with angels. It is Baroque catechesis in oil — the Irenaeus knot made visible. Stories about a particular seventeenth-century marriage attached to the canvas circulate in popular retellings. Treat those as pious history unless you have a historian in the room; the painting and the Irenaeus text are the solid ground.",
          "What is not in dispute is the modern spread. As a Jesuit in Argentina, Jorge Mario Bergoglio encountered the German image and encouraged the devotion at home. As Pope Francis he returned to the title in preaching. That is why so many parish novenas in the United States now use this name. It is still optional. It is not on the universal calendar as a feast that binds the whole Church.",
        ],
      },
      {
        id: "how-to-pray",
        heading: "How to pray the novena without superstition",
        paragraphs: [
          "Name the knot. Be specific: \"the silence between my brother and me,\" not \"my whole life.\" Pray nine consecutive days. " + `{{${KNOTS}|Catholic Bible Online's guide to the Undoer of Knots novena}}` + " gives the daily structure. This site's older [[/blog/undoer-of-knots-novena-guide/|Undoer of Knots novena guide]] is another how-to if you want a second walkthrough. You do not need both at once.",
        ],
        list: [
          "Begin with the Sign of the Cross and an act of sorrow for your own share in the tangle.",
          "Pray that day's novena text. Add a decade of the Rosary if you can. See [[/blog/how-to-pray-the-rosary-step-by-step/|how to pray the Rosary]].",
          "Ask Mary to take the knot to Jesus. Then do the human untying you have been avoiding: the phone call, the counselor, the apology, the lawyer if the knot is legal.",
          "Do not bury a paper knot in the yard, burn a list as a spell, or pay someone to \"cut\" a curse. That is not this devotion. The Catechism forbids superstition (CCC 2111).",
        ],
        table: {
          caption: "Knots this novena is for — and knots it is not",
          headers: ["Bring this", "Do not use the novena as"],
          rows: [
            ["A marriage in real trouble, while also seeking counsel", "A replacement for honesty or for the sacrament of marriage"],
            ["A family feud you are willing to take a first step in", "A way to force the other person"],
            ["A legal or financial snarl, while calling the people who can actually file the papers", "A charm so you can ignore the paperwork"],
            ["Your own repeated sin, with confession", "A shortcut around conversion"],
          ],
        },
      },
    ],
    prayer: "Holy Mary, Undoer of Knots, you loosed Eve's disobedience by your obedience. Take this knot I name before you — and my fear of untying it — to your Son. Teach me to say yes where I have delayed, and to leave with him what I cannot fix. Amen.",
    prayerHeading: "A prayer to Our Lady Undoer of Knots",
    related: [
      { href: "/blog/undoer-of-knots-novena-guide/", label: "Undoer of Knots novena: how to pray" },
      { href: "/blog/our-lady-undoer-of-knots/", label: "Our Lady Undoer of Knots" },
      { href: "/blog/how-to-pray-a-novena-guide/", label: "How to pray a novena" },
      { href: "/blog/do-catholics-worship-mary/", label: "Do Catholics worship Mary?" },
      { href: "/blog/how-to-pray-the-rosary-step-by-step/", label: "How to pray the Rosary" },
    ],
    faqs: [
      { question: "Who is Our Lady Undoer of Knots?", answer: "A title of the Virgin Mary, rooted in St. Irenaeus's image of Mary loosing Eve's knot, and pictured in a Baroque painting in Augsburg. Catholics ask her intercession for tangled situations." },
      { question: "Did Pope Francis invent this devotion?", answer: "No. He encountered the German image and helped it spread. The theology is patristic; the painting is Baroque; the worldwide novena is recent." },
      { question: "Is there an official feast day?", answer: "There is no universal feast of this title on the General Roman Calendar. People pray the novena when a knot appears, or in a parish series." },
      { question: "Does the novena guarantee the knot will untie?", answer: "No. Mary prays. God is not a locksmith on a timer. Sometimes the grace is the courage to make the call you have been avoiding." },
      { question: "Can I pray it for a marriage?", answer: "Yes, together with whatever the Church and honest work require: counseling, confession, patience. A novena is not a substitute for those." },
      { question: "Is it superstition to use a ribbon?", answer: "A ribbon as a reminder is harmless. A ribbon as a magic object is superstition (CCC 2111). The prayer is the point." },
      { question: "Where is the nine-day text?", answer: "Catholic Bible Online's Our Lady Undoer of Knots novena guide. Use one text and finish it." },
      { question: "Do I pray to Mary or to Jesus?", answer: "You ask Mary to pray with you and for you. The one who looses the knot in power is her Son." },
    ],
  },
  {
    slug: "st-anthony-trezena",
    title: "St. Anthony Trezena: The 13-Day Prayer before June 13",
    h1: "St. Anthony's Trezena: Thirteen Days of Prayer, Not a Lost-and-Found Charm",
    description: "The St. Anthony trezena is thirteen days of Catholic prayer before June 13: who Anthony was, why thirteen days, the poor, and how it differs from a nine-day novena.",
    keywords: "st anthony trezena, trezena santo antonio, 13 days st anthony, st anthony of padua novena 13 days, trezena prayer, saint anthony june 13",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "St. Anthony Trezena",
    category: "Prayers & Devotions",
    lede: "In Portuguese-speaking Catholicism, Anthony of Padua is not only the saint of lost keys. He is Santo Antônio of the poor, of marriages, of the Gospel preached in a hurry — and of the trezena: thirteen days of prayer ending on June 13. English-speaking parishes are learning the custom. It is older and larger than a Facebook plea for missing earbuds.",
    answer: "A trezena is thirteen consecutive days of prayer to Saint Anthony of Padua, usually ending on his feast, June 13. It is a Lusophone Catholic custom, not a second sacrament. You pray, you give to the poor, you look for what you lost — including faith. The daily English guide is on " + `{{${TREZENA}|Catholic Bible Online's St. Anthony Trezena}}` + ". A nine-day novena for lost things, if that is all you need, is the [[/blog/st-anthony-novena-lost-things/|St. Anthony novena for lost things]].",
    facts: [
      { label: "Feast", value: "June 13 (in 2027, a Sunday)" },
      { label: "Trezena window 2027", value: "June 1–13, if you end on the feast" },
      { label: "Who", value: "St. Anthony of Padua (1195–1231), Franciscan priest, Doctor of the Church" },
      { label: "Length", value: "Thirteen days, not nine" },
    ],
    timeline: [
      { when: "1195", what: "Born in Lisbon, Fernando Martins. He takes the name Anthony as a Franciscan." },
      { when: "June 13, 1231", what: "Dies near Padua. Canonized the next year — one of the fastest canonizations in the calendar." },
      { when: "1946", what: "Pius XII names him a Doctor of the Church (Doctor Evangelicus)." },
      { when: "Each June 1–13", what: "Portuguese and Brazilian churches keep the trezena: thirteen days of sermons, prayer, and bread for the poor." },
    ],
    sections: [
      {
        id: "why-thirteen",
        heading: "Why thirteen days, not nine?",
        paragraphs: [
          "A novena is nine days, from the Latin novem, echoing the nine days of prayer before Pentecost (" + `{{${CBO}acts/1/|Acts 1}}` + "). A trezena is simply thirteen — treze in Portuguese — because the feast is June 13. The custom grew in Portugal and Brazil as a parish mission before the feast: a day of preaching for each date on the approach to the 13th. It is popular piety the Church has long blessed. It is not a number with secret power. Thirteen is the date, not a code. For the biblical sense of numbers, see [[/blog/biblical-numbers-meanings/|biblical numbers and their meanings]].",
          "If you cannot pray thirteen days, pray a novena. If you cannot pray nine, pray one Memorare and give bread to someone hungry. Anthony would recognize the third option at once.",
        ],
        callout: {
          label: "Lost things are the least of it",
          text: "Anthony is invoked for lost objects because popular memory attached miracles of recovery to him. The Church honors him first as a preacher of the Gospel and a friend of the poor. A trezena that never mentions the poor is off-center. See [[/blog/saint-anthony-of-padua/|Saint Anthony of Padua]].",
        },
      },
      {
        id: "how-to-pray-a-trezena",
        heading: "How to pray a trezena",
        paragraphs: [
          "Fix thirteen consecutive days. The usual English pattern in 2027 is June 1 through June 13. " + `{{${TREZENA}|Catholic Bible Online's trezena guide}}` + " gives daily themes so you are not repeating one hurried sentence thirteen times. At home, keep it this small:",
        ],
        list: [
          "Light nothing you cannot blow out. A candle is a reminder, not a requirement.",
          "Name the intention: a person, a vice, a lost faith, a lost relative, a lost object.",
          "Pray that day's text. Add an Our Father, Hail Mary, and Glory Be.",
          "On at least one of the thirteen days, give alms. Anthony's bread is a real custom: bread blessed and given to the poor on or around the feast.",
          "If the intention is a missing item, look for it. Grace is not opposed to opening the closet.",
        ],
        table: {
          caption: "Trezena, novena, and a single prayer",
          headers: ["Form", "Length", "Use it when"],
          rows: [
            ["Trezena", "13 days, often June 1–13", "You want the Lusophone custom, or a longer watch before the feast"],
            ["Novena", "9 days, any time", "Lost things, or a shorter stretch. [[/blog/st-anthony-novena-lost-things/|Lost-things novena]]"],
            ["One prayer", "A minute", "You found the keys or you are on a bus. [[/blog/st-anthony-prayer/|St. Anthony prayer]]"],
          ],
        },
      },
      {
        id: "scripture-anthony-preached",
        heading: "The Gospel Anthony actually preached",
        paragraphs: [
          "Keep a chapter open that sounds like him: the sending of the Twelve (" + `{{${CBO}matthew/10/|Matthew 10}}` + "), the lilies and the sparrows (" + `{{${CBO}luke/12/|Luke 12}}` + "), work and daily bread (" + `{{${CBO}matthew/6/|Matthew 6}}` + "). Anthony became a Doctor of the Church for Scripture, not for finding glasses. If you only ask him for objects, you have not yet met him.",
        ],
      },
    ],
    prayer: "Saint Anthony, preacher of the Gospel and friend of the poor, I begin these thirteen days with empty hands. Teach me to look for what is lost in me, not only in the house. Lead me to your poor, and to the Child you hold. Pray for the intention I name, and for the grace to accept the answer. Amen.",
    prayerHeading: "A prayer to begin the trezena",
    related: [
      { href: "/blog/saint-anthony-of-padua/", label: "Saint Anthony of Padua" },
      { href: "/blog/st-anthony-novena-lost-things/", label: "Novena to St. Anthony for lost things" },
      { href: "/blog/st-anthony-prayer/", label: "The St. Anthony prayer" },
      { href: "/blog/how-to-pray-a-novena-guide/", label: "How to pray a novena" },
      { href: "/blog/biblical-numbers-meanings/", label: "Biblical numbers and their meanings" },
    ],
    faqs: [
      { question: "What is a trezena to St. Anthony?", answer: "Thirteen consecutive days of prayer, usually ending on his feast, June 13. It is a Catholic custom from Portugal and Brazil, now prayed in English as well." },
      { question: "Why thirteen days?", answer: "Because the feast is the 13th of June. The number is the date, not a mystical code." },
      { question: "Is a trezena more powerful than a novena?", answer: "No. Length is not voltage. The Mass is still the highest prayer. Thirteen days is a way of staying." },
      { question: "When do I start in 2027?", answer: "If you want to end on the feast, start Tuesday, June 1, 2027, and finish Sunday, June 13." },
      { question: "Can I pray a trezena for lost objects?", answer: "Yes, and then look. Anthony is also invoked for lost people, lost faith, and the poor. Do not shrink him to a keychain." },
      { question: "Do I have to be Portuguese or Brazilian?", answer: "No. The custom is theirs to share. Pray it as a Catholic, not as a tourist of folklore." },
      { question: "Where is the thirteen-day text in English?", answer: "Catholic Bible Online's St. Anthony Trezena guide." },
      { question: "Is June 13 a Holy Day of Obligation?", answer: "No. It is a memorial, unless it falls on a Sunday, as it does in 2027, when Sunday takes liturgical precedence and the feast is still remembered in popular devotion." },
    ],
  },
  {
    slug: "novena-for-finding-employment",
    title: "Novena for Finding Employment: A Catholic Job-Search Prayer",
    h1: "Novena for Finding Employment: Pray, Then Send the Application",
    description: "A Catholic novena for finding employment: providence, St. Joseph the Worker, nine days of prayer, and why looking for work is part of the prayer, not a lack of faith.",
    keywords: "novena for finding employment, catholic novena for a job, prayer to find work, st joseph employment novena, catholic job search prayer, unemployed catholic prayer",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "Novena for Employment",
    category: "Prayers & Devotions",
    lede: "Unemployment is not only a budget problem. It can feel like a verdict on your worth. The Church does not answer it with a slogan. She answers with Providence, with St. Joseph the Worker, with the duty to seek work, and with nine days of prayer that do not replace the résumé.",
    answer: "A Novena for Finding Employment is nine days of Catholic prayer for work, joined to the actual search: applications, calls, skill, and asking for help. It is not a prosperity bargain. God commands work as a duty and a dignity (CCC 2427–2436). " + `{{${JOB}|Catholic Bible Online's Novena for Finding Employment}}` + " is written for that double path. If you want a Joseph-specific nine days, use also the [[/blog/st-joseph-novena-for-employment/|St. Joseph novena for employment]].",
    facts: [
      { label: "Length", value: "Nine consecutive days, any time of year" },
      { label: "Patron to invoke", value: "St. Joseph the Worker (May 1)" },
      { label: "What God does not owe", value: "A particular salary, title, or city" },
      { label: "What you still owe", value: "The search, honesty, and care for your family" },
    ],
    timeline: [
      { when: "Any Monday you are empty-handed", what: "Begin. Do not wait for May 1." },
      { when: "May 1", what: "Memorial of St. Joseph the Worker — a good ninth day if you start April 23." },
      { when: "March 19", what: "Solemnity of St. Joseph. See [[/blog/solemnity-of-saint-joseph/|St. Joseph's Day]]." },
    ],
    sections: [
      {
        id: "work-is-not-optional",
        heading: "Work is a duty. Prayer does not cancel it.",
        paragraphs: [
          "The Catechism treats work as a duty and a right, a way of joining the Creator, not a hobby for the enthusiastic (CCC 2427–2436). Saint Paul is blunt: \"If anyone will not work, let him not eat\" (" + `{{${CBO}2-thessalonians/3/|2 Thessalonians 3:10}}` + ") — aimed at the unwilling, not at the person who has been sending applications into silence. Psalm 127 still stands: unless the Lord builds the house, the builders labor in vain (" + `{{${CBO}psalms/127/|Psalm 127}}` + "). Both are true. You labor. You ask.",
          "Jesus tells you to ask for daily bread (" + `{{${CBO}matthew/6/|Matthew 6:11}}` + "), not for a brand. A novena that treats God as a recruiter who owes you a title has left the Gospel. " + `{{${JOB}|The employment novena on Catholic Bible Online}}` + " keeps Scripture, St. Joseph, and concrete job-search steps on the same page for that reason.",
        ],
        table: {
          caption: "Pray, and do the human work",
          headers: ["Day of the novena", "Prayer", "Duty the same day"],
          rows: [
            ["1", "Name the need: rent, dignity, a schedule, a family", "Update the résumé. Ask one person who already has work."],
            ["2–3", "Ask St. Joseph for skill and patience", "Send two applications. Tell the parish you are looking."],
            ["4–6", "Pray for the people who will interview you", "Practice the truth about your gaps. Do not lie."],
            ["7–9", "Abandon the fruit: this job or another", "Follow up. If a door closed, knock on the next."],
          ],
        },
        callout: {
          label: "This is not the prosperity gospel",
          text: "Catholics may ask for work. They may not claim that faith is measured by a paycheck. See [[/blog/catholic-new-year/|what a Catholic year of \"prosperity\" actually means]] and [[/blog/catholic-tithing-guide/|tithing]] — giving from what you have, not bargaining for more.",
        },
      },
      {
        id: "st-joseph",
        heading: "St. Joseph, not a career mascot",
        paragraphs: [
          "Joseph worked with his hands in Nazareth. The Church keeps him on May 1 as Patron of Workers. Invoke him as a man who knew delayed plans, night warnings, and the duty to feed Mary and the Child — not as a mascot for promotions. A fuller picture is in the [[/blog/saint-joseph-complete-guide/|complete guide to Saint Joseph]] and the [[/blog/st-joseph-novena-for-employment/|employment novena to St. Joseph]].",
          "If anxiety is eating the search, the [[/blog/novena-of-abandonment/|Novena of Abandonment]] can sit beside this one: one for the job, one for the fear. They are not rivals.",
        ],
      },
      {
        id: "how-to-pray-it",
        heading: "How to pray the nine days",
        paragraphs: [
          "Use one text and finish it. " + `{{${JOB}|Catholic Bible Online's Novena for Finding Employment}}` + " is the daily guide this article is paired with. At home:",
        ],
        list: [
          "Same time each day. Five minutes is enough if they are honest minutes.",
          "Name the family members who depend on this work.",
          "Pray that day's novena. Add an Our Father and the Prayer to St. Joseph if you know it ([[/blog/prayer-to-st-joseph/|prayer to St. Joseph]]).",
          "Write one job-search action in the same notebook. If the page is empty, the prayer is incomplete.",
          "On Sunday, go to Mass. Offer the search with the bread and wine. Do not skip the Eucharist because you are embarrassed to be unemployed. The parish has seen this before.",
        ],
      },
      {
        id: "scripture",
        heading: "Scripture for a job search that has gone long",
        paragraphs: [
          "These are not lucky chapters. They are the Church's ordinary food.",
        ],
        list: [
          `{{${CBO}matthew/6/|Matthew 6}} — daily bread, and the Father who knows you need it.`,
          `{{${CBO}psalms/127/|Psalm 127}} — the Lord who builds the house.`,
          `{{${CBO}colossians/3/|Colossians 3}} — work as for the Lord.`,
          `{{${CBO}james/4/|James 4}} — \"If the Lord wills, we shall live and we shall do this or that.\"`,
          `{{${CBO}philippians/4/|Philippians 4}} — prayer, thanksgiving, and the peace that does not wait for the offer letter.`,
        ],
      },
    ],
    prayer: "Lord, you worked with human hands in Nazareth. Give me work I can do with honesty, bread I can share, and patience while I wait. St. Joseph, patron of workers, pray for this search. I will knock on doors. I leave the hiring to God. Amen.",
    prayerHeading: "A prayer for work",
    related: [
      { href: "/blog/st-joseph-novena-for-employment/", label: "St. Joseph novena for employment" },
      { href: "/blog/catholic-prayer-for-job-and-work/", label: "Catholic prayers for job and work" },
      { href: "/blog/saint-joseph-complete-guide/", label: "Saint Joseph: complete guide" },
      { href: "/blog/novena-of-abandonment/", label: "Novena of Abandonment" },
      { href: "/blog/prayer-to-st-joseph/", label: "Prayer to St. Joseph" },
    ],
    faqs: [
      { question: "Is there a Catholic novena to find a job?", answer: "Yes. A nine-day novena for employment, often with St. Joseph, joined to the actual search. Catholic Bible Online has a full daily guide." },
      { question: "Will the novena get me hired?", answer: "It may obtain grace for the search. It does not obligate God to a title or a salary. Ask, work, and say \"if the Lord wills.\"" },
      { question: "Should I pray instead of applying?", answer: "No. That is not trust. That is skipping the duty the Catechism names as work." },
      { question: "When should I start?", answer: "As soon as the need is real. You do not have to wait for May 1." },
      { question: "What if I am underemployed, not unemployed?", answer: "You may still pray for fitting work, without despising the work you have." },
      { question: "Can a family pray this together?", answer: "Yes. Keep the children's lines short. Let them hear you ask God for bread without panic." },
      { question: "How is this different from the St. Joseph employment novena on this site?", answer: "That guide is Joseph-centered. This one is the job search as a whole, paired with Catholic Bible Online's nine-day employment novena. You can pray either, or both in different months." },
      { question: "What if the answer is a smaller job than I wanted?", answer: "Daily bread still counts. Gratitude is not a denial of ambition; it is a refusal of contempt for ordinary work." },
    ],
  },
  {
    slug: "three-wise-men",
    title: "Three Wise Men and the Star of Bethlehem: A Catholic Guide",
    h1: "The Magi, the Star, and the Gifts: What Catholics Can Say for Sure",
    description: "Who the Magi were, what Matthew 2 actually says, gold, frankincense and myrrh, the names Caspar, Melchior and Balthasar, and the Star of Bethlehem.",
    keywords: "three wise men, magi, star of bethlehem, caspar melchior balthasar, gold frankincense myrrh, epiphany magi, three kings catholic",
    readTime: "12 min",
    datePublished: "2026-11-03",
    crumb: "The Magi",
    category: "Scripture & Tradition",
    lede: "Matthew never calls them kings, never says there were three, and never names them. He says magi came from the East, following a star, and offered gold, frankincense, and myrrh. Everything else — crowns, camels, Caspar, Melchior, Balthasar — is later Christian memory. A Catholic can love the memory and still tell the difference.",
    answer: "The Magi are Gentile seekers in " + `{{${CBO}matthew/2/|Matthew 2}}` + " who find the Child, worship him, and go home another way. The Church reads them as the nations coming to Christ, which is why they belong to Epiphany. Three gifts suggested three visitors; Psalm 72 and Isaiah 60 suggested kings. The traditional names are legend. " + `{{${MAGI}|Catholic Bible Online's guide to the wise men and the Star of Bethlehem}}` + " is the companion chapter-level walkthrough.",
    facts: [
      { label: "Biblical source", value: "Matthew 2 only (not Luke)" },
      { label: "What the text says", value: "Magi, a star, Herod, Bethlehem, three gifts" },
      { label: "What the text does not say", value: "Three men, kings, names, camels, a date" },
      { label: "Liturgical home", value: "Epiphany (in the U.S., Sunday, January 3, 2027)" },
    ],
    timeline: [
      { when: "Matthew 2", what: "The only canonical narrative of the Magi." },
      { when: "Psalm 72 and Isaiah 60", what: "Read by the Church as the nations and kings bringing gifts — the soil of the \"three kings\" title." },
      { when: "Early centuries", what: "Christian art and preaching settle on three visitors because there are three gifts." },
      { when: "Later Western tradition", what: "The names Caspar, Melchior, and Balthasar. Legend, not Scripture." },
      { when: "Sunday, January 3, 2027", what: "Epiphany in most U.S. dioceses. See [[/blog/catholic-christmas-traditions/|Catholic Christmas traditions]]." },
    ],
    sections: [
      {
        id: "what-matthew-says",
        heading: "What Matthew actually says",
        paragraphs: [
          "Read the chapter, not a nativity play. " + `{{${CBO}matthew/2/|Matthew 2 on Catholic Bible Online}}` + " is short. Magi from the East see a star at its rising, come to Jerusalem, trouble Herod, learn from Micah that the Messiah is born in Bethlehem, find the Child with Mary, fall down and worship, offer gifts, and depart another way after a warning in a dream. Joseph then flees to Egypt. That is the Gospel. " + `{{${MAGI}|The Magi and Star guide on Catholic Bible Online}}` + " stays inside that chapter before it talks about later custom.",
          "Luke has shepherds, not magi (" + `{{${CBO}luke/2/|Luke 2}}` + "). A Catholic crib puts both on the table because both Gospels are Scripture, not because they describe the same night in the same room. Shepherds are Israel close by. Magi are the nations from far away.",
        ],
        table: {
          caption: "Scripture, tradition, and legend",
          headers: ["Detail", "Status", "Source"],
          rows: [
            ["Magi from the East, a star, Herod, gifts", "Scripture", `{{${CBO}matthew/2/|Matthew 2}}`],
            ["Three gifts: gold, frankincense, myrrh", "Scripture", "Matthew 2:11"],
            ["They are kings", "Tradition of reading", `{{${CBO}psalms/72/|Psalm 72}}; {{${CBO}isaiah/60/|Isaiah 60}}`],
            ["There were three visitors", "Inference from three gifts", "Early Christian art and preaching"],
            ["Caspar, Melchior, Balthasar", "Legend", "Later Western naming"],
            ["Camels", "Tradition of reading", `{{${CBO}isaiah/60/|Isaiah 60:6}}`],
          ],
        },
      },
      {
        id: "the-gifts",
        heading: "Gold, frankincense, and myrrh",
        paragraphs: [
          "The Church has long preached the three gifts as a confession of who the Child is: gold for a king, frankincense for God, myrrh for one who will be buried. That is homily, and it is good homily. It is not a fourth Gospel. The Magi themselves may have brought the gifts as courtly tribute. God can mean more by a gift than the giver knows.",
          "Frankincense belongs to worship. Myrrh belongs to burial and to healing. Already in Matthew the shadow of Good Friday falls on Epiphany. If your crib has three pretty boxes and no cross anywhere in the house, the gifts have been domesticated.",
        ],
      },
      {
        id: "the-star",
        heading: "The Star of Bethlehem",
        paragraphs: [
          "Matthew says there was a star, that it led them, and that it came to rest over the place where the Child was. He does not give an astronomy lesson. Christians have proposed a conjunction of planets, a comet, a miracle with no leftover in the sky. The Church has never defined the mechanism. A Catholic may find the scholarship interesting. A Catholic may also say: Matthew is telling you that creation points to Christ, and that Gentiles can read the signs well enough to walk.",
          "Balaam's oracle — \"a star shall come forth out of Jacob\" (" + `{{${CBO}numbers/24/|Numbers 24:17}}` + ") — was later read as pointing this way. That is a Christian reading of Israel's Scripture, not a footnote Matthew inserts. Do not turn the star into a horoscope. The Magi leave astrology behind when they kneel.",
        ],
        callout: {
          label: "Epiphany is the point",
          text: "The feast is not \"Star Day.\" It is the manifestation of Christ to the nations. In the United States in 2027 that Sunday is January 3. Chalk the door. Read Matthew 2. See [[/blog/catholic-christmas/|Catholic Christmas]] and [[/blog/nativity-emojis/|Nativity emojis]] if you are writing a greeting and want the Child ahead of the shopping icons.",
        },
      },
      {
        id: "how-to-keep-them",
        heading: "How to keep the Magi without inflating them",
        paragraphs: [
          "Put the figures far from the crib and move them closer through the Twelve Days. Add them on Epiphany. Read " + `{{${CBO}matthew/2/|Matthew 2}}` + " aloud. If you chalk 20 + C + M + B + 27 on the door, tell the family that C, M, and B are both the traditional names and Christus mansionem benedicat — \"May Christ bless this house.\" The blessing is the doctrine; the names are the custom.",
        ],
      },
    ],
    prayer: "Lord Jesus, the Magi saw your star and came. Give us enough light to walk, enough humility to ask directions, and enough joy to kneel. Receive the gifts we actually have — not gold we pretend to own — and send us home another way. Amen.",
    prayerHeading: "A prayer with the Magi",
    related: [
      { href: "/blog/catholic-christmas-traditions/", label: "Catholic Christmas traditions" },
      { href: "/blog/catholic-christmas/", label: "Catholic Christmas: Mass and the octave" },
      { href: "/blog/nativity-emojis/", label: "Nativity emojis" },
      { href: "/blog/biblical-numbers-meanings/", label: "Biblical numbers and their meanings" },
      { href: "/blog/mary-mother-of-god-catholic-dogma/", label: "Mary, Mother of God" },
    ],
    faqs: [
      { question: "Were the three wise men kings?", answer: "Matthew calls them magi, not kings. The Church later read Psalm 72 and Isaiah 60 as kings bringing gifts. The crown is tradition, not the verse." },
      { question: "Were there three of them?", answer: "Matthew lists three gifts. Christian art took that as three visitors. It is a reasonable custom, not a head count from the text." },
      { question: "What were their names?", answer: "Caspar, Melchior, and Balthasar are later Western names. They are not in the Bible. You may use them as legend." },
      { question: "What was the Star of Bethlehem?", answer: "Matthew does not say. The Church has not defined whether it was a miracle, a conjunction, or another sign. The point is that it led Gentiles to Christ." },
      { question: "Do Catholics have to believe the Magi story as history?", answer: "Matthew presents it as an event in Jesus' infancy. Catholics receive the Gospel as true. How the star worked is not defined." },
      { question: "When do we celebrate the Magi?", answer: "At Epiphany. In most of the United States in 2027, that is Sunday, January 3." },
      { question: "Why gold, frankincense, and myrrh?", answer: "Tribute from the East in the story; in preaching, kingship, divinity, and burial. Read Matthew 2:11 first." },
      { question: "Where should I read more?", answer: "Matthew 2 on Catholic Bible Online, and that site's guide to the wise men and the Star of Bethlehem." },
    ],
  },
];

export function devotionCompanionGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return DEVOTION_COMPANION_GUIDES.find((guide) => guide.slug === slug);
}
