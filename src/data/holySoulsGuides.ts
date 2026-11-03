import type { LiturgicalFeastGuide } from "./liturgicalFeastGuides";

const CBO = "https://catholicbibleonline.com/bible/";
const HOME = "https://catholicbibleonline.com";
const NOV_HOLY = `${HOME}/novenas/novena-for-the-holy-souls/`;
const BLOG_PRAYERS = `${HOME}/blog/catholic-prayers-for-the-dead/`;
const BLOG_REST = `${HOME}/blog/eternal-rest-prayer/`;
const BLOG_FAITHFUL = `${HOME}/blog/prayer-for-the-faithful-departed/`;
const BLOG_NOVEMBER = `${HOME}/blog/november-month-of-the-holy-souls/`;
const BLOG_FEAST = `${HOME}/blog/all-souls-day-catholic-feast-guide/`;
const BLOG_2026 = `${HOME}/blog/all-souls-day-november-2-guide-2026/`;
const BLOG_PURG = `${HOME}/blog/what-is-purgatory-complete-guide/`;
const BLOG_PURG_PRAY = `${HOME}/blog/prayers-souls-purgatory-complete-guide/`;
const BLOG_HOW = `${HOME}/blog/how-pray-dead/`;
const PRAY_AS = `${HOME}/prayers/all-souls-prayers/`;
const PRAY_DEAD = `${HOME}/prayers/prayer-dead/`;
const PRAY_ROSARY = `${HOME}/prayers/rosary-for-dead/`;
const NOV_LIFE = `${HOME}/novenas/life-situations/`;
const NOV_GRIEF = `${HOME}/novenas/grief-loss/`;
const CAL = `${HOME}/catholic-calendar/`;

export const HOLY_SOULS_GUIDES: LiturgicalFeastGuide[] = [
  {
    slug: "november-month-of-the-holy-souls",
    title: "November: Catholic Month of the Holy Souls",
    h1: "November, Month of the Holy Souls: A Catholic Guide to the Whole Month",
    description: "Why Catholics keep November for the Holy Souls: All Souls' Day, the Nov. 1–8 cemetery indulgence, daily prayers, and a month-long plan for 2026.",
    keywords: "november month of the holy souls, month of the holy souls, november catholic dead, all souls november, cemetery indulgence november 1-8, prayers for the holy souls november",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "Month of the Holy Souls",
    category: "Prayers & Devotions",
    lede: "All Souls' Day is one date. November is a whole month the Church gives to the dead. After the feast, the work of suffrage continues: Masses, the cemetery indulgence through November 8, and daily prayer for people who have no one left to remember them.",
    answer: "Catholics keep November as the month of the Holy Souls because the Commemoration of All the Faithful Departed falls on November 2 and the Church grants a plenary indulgence, applicable only to the souls in purgatory, for a cemetery visit each day from November 1 to 8. The month is not a second Halloween. It is a school of the communion of saints: Mass, the Eternal Rest, almsgiving, and a novena. All Souls' Day 2026 was Monday, November 2; the cemetery indulgence still runs through Sunday, November 8, 2026.",
    facts: [
      { label: "Dedication", value: "November: month of the Holy Souls" },
      { label: "All Souls' Day 2026", value: "Monday, November 2" },
      { label: "Cemetery indulgence", value: "Plenary, November 1–8, for the souls in purgatory" },
      { label: "Color", value: "Violet or black at Masses for the Dead" },
      { label: "Obligation on Nov 2", value: "Not a Holy Day of Obligation" },
    ],
    timeline: [
      { when: "Sunday, November 1, 2026", what: "All Saints' Day. Holy Day of Obligation. Cemetery visits for the plenary indulgence may begin. See [[/blog/all-saints-day/|All Saints' Day]]." },
      { when: "Monday, November 2, 2026", what: "All Souls' Day. See [[/blog/all-souls-day/|All Souls' Day]] and " + `{{${BLOG_2026}|Catholic Bible Online's 2026 All Souls' guide}}.` },
      { when: "November 1–8", what: "One plenary indulgence a day for visiting a cemetery and praying for the dead, under the usual conditions." },
      { when: "Through November 30", what: "Parish Books of the Dead remain on the altar; Masses for the departed continue." },
      { when: "Tuesday, November 2, 2027", what: "Next All Souls' Day." },
    ],
    sections: [
      {
        id: "why-november",
        heading: "Why the Church gives November to the dead",
        paragraphs: [
          "The Roman calendar places the saints in glory on November 1 and the souls still being purified on November 2. Popular Catholic usage then took the rest of the month for the same work. That monthly dedication is a devotion, not a separate liturgical season like Advent. Ordinary Time continues. What changes is the Church's public memory: Books of the Dead, extra Masses for the departed, and the cemetery indulgence in the first eight days.",
          "The doctrine underneath does not belong to November alone. \"It is a holy and wholesome thought to pray for the dead, that they might be loosed from their sins\" is the Church's long reading of " + `{{${CBO}2-maccabees/12/|2 Maccabees 12}}` + ". The Catechism teaches that those who die in God's grace but are still imperfectly purified undergo purgation, and that our prayers help them (CCC 1030–1032). For the feast itself, start with the [[/blog/all-souls-day/|All Souls' Day guide]] and with " + `{{${BLOG_FEAST}|Catholic Bible Online's All Souls' feast guide}}.`,
        ],
        callout: {
          label: "November is not a season of the Missal",
          text: "You will not find \"Month of the Holy Souls\" as a season in the General Roman Calendar. The season in early November is Ordinary Time, interrupted by All Saints and All Souls. The month-long focus is a Catholic custom the Church blesses with indulgences and Masses. For the shape of the year, see " + `{{${CAL}|the Catholic liturgical calendar on Catholic Bible Online}}.`,
        },
      },
      {
        id: "the-eight-days",
        heading: "The eight days that matter most: November 1–8",
        paragraphs: [
          "The Enchiridion of Indulgences grants a plenary indulgence, applicable only to the souls in purgatory, to the faithful who devoutly visit a cemetery and pray, even mentally, for the dead, each day from November 1 to 8. A second plenary indulgence, also only for the departed, is granted on All Souls' Day itself (or, with the bishop's consent, the Sunday before or after, or All Saints' Day) for visiting a church or oratory and praying the Our Father and the Creed.",
          "Only one plenary indulgence can be gained a day, except at the hour of death. Confession can cover several days; Communion and prayer for the Pope's intentions belong to each plenary indulgence; freedom from attachment to even venial sin is required, or the gift becomes partial. Details are in the [[/blog/plenary-indulgence-guide/|plenary indulgence guide]].",
        ],
        table: {
          caption: "November 2026 at a glance",
          headers: ["Date", "What the Church keeps", "What you can do"],
          rows: [
            ["Nov 1, Sunday", "All Saints, Holy Day of Obligation", "Mass of obligation; first cemetery visit of the octave"],
            ["Nov 2, Monday", "All Souls' Day", "Mass for the dead; church visit for the All Souls indulgence"],
            ["Nov 3–8", "Ordinary Time, cemetery grant still open", "One cemetery visit a day; name a different soul, or the most forgotten"],
            ["Nov 9–30", "No special plenary grant for cemeteries", "Mass intentions, Eternal Rest, alms, the Office of the Dead"],
          ],
        },
      },
      {
        id: "a-month-long-plan",
        heading: "A month-long plan, not only one crowded Monday",
        paragraphs: [
          "If you missed Mass on November 2, the month is not over. The dead are not honored only on their feast. " + `{{${BLOG_NOVEMBER}|Catholic Bible Online's November guide for the Holy Souls}}` + " lays out the month; this is a plan you can still keep in the days that remain.",
        ],
        list: [
          "Have at least one Mass offered this month for a person by name, and one for \"the souls most forgotten.\"",
          "Pray the Eternal Rest at grace after meals through November. The text and its history are on " + `{{${BLOG_REST}|the Eternal Rest page at Catholic Bible Online}}` + " and in our [[/blog/eternal-rest-prayer-catholic/|Eternal Rest prayer guide]].",
          "Use a printed or parish Book of the Dead. Write the names. Bring the list to Mass.",
          "Give alms in someone's memory. Suffrage is prayer, the Eucharist, almsgiving, and works of penance (CCC 1032).",
          "Start or finish a nine-day novena. The day-by-day text is on " + `{{${NOV_HOLY}|the Novena for the Holy Souls at Catholic Bible Online}}.`,
          "Keep a candle or a photograph near the crucifix at home — a reminder, not a séance. Catholics pray for the dead; they do not attempt to summon them.",
        ],
        callout: {
          label: "If you are also grieving",
          text: "Praying for the dead is not the same as healing from a death. You may need both. For the living who mourn, " + `{{${NOV_GRIEF}|the novena for healing after loss on Catholic Bible Online}}` + " is directed to your grief. See also the [[/blog/catholic-guide-to-grief-and-loss/|Catholic guide to grief and loss]].",
        },
      },
      {
        id: "scripture-for-the-month",
        heading: "Scripture to read in November",
        paragraphs: [
          "A month of prayer for the dead should include the chapters the liturgy itself uses, not only a caption on a candle.",
        ],
        list: [
          `{{${CBO}2-maccabees/12/|2 Maccabees 12}} — sacrifice offered for the fallen.`,
          `{{${CBO}wisdom/3/|Wisdom 3}} — \"The souls of the just are in the hand of God.\"`,
          `{{${CBO}psalms/130/|Psalm 130}} — the De Profundis.`,
          `{{${CBO}1-corinthians/3/|1 Corinthians 3}} — saved \"as through fire.\"`,
          `{{${CBO}john/11/|John 11}} — \"I am the resurrection and the life.\"`,
          `{{${CBO}1-thessalonians/4/|1 Thessalonians 4}} — do not grieve as those who have no hope.`,
        ],
      },
    ],
    prayer: "Lord of the living and the dead, we offer you this November: our Masses, our visits to the graves, our poor prayers for people we loved and for people no one names. Purify them in your mercy. Teach us to die in your friendship, and to live this month as members of one Body that death does not tear apart. Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. Amen.",
    related: [
      { href: "/blog/all-souls-day/", label: "All Souls' Day: meaning, Mass, and indulgences" },
      { href: "/blog/how-to-pray-for-the-dead/", label: "How to pray for the dead" },
      { href: "/blog/catholic-prayers-for-the-dead/", label: "Catholic prayers for the dead" },
      { href: "/blog/novena-for-holy-souls/", label: "Novena for the Holy Souls" },
      { href: "/blog/plenary-indulgence-guide/", label: "How to gain a plenary indulgence" },
    ],
    faqs: [
      { question: "Why is November the month of the Holy Souls?", answer: "Because All Souls' Day falls on November 2, and the Church grants special indulgences for the dead in early November. The rest of the month is a Catholic custom of keeping that commemoration going." },
      { question: "Is the month of the Holy Souls a liturgical season?", answer: "No. Early November is Ordinary Time, with All Saints and All Souls inserted. The monthly dedication is a devotion supported by indulgences and Masses for the dead." },
      { question: "Until when can I gain the cemetery indulgence in 2026?", answer: "Through Sunday, November 8, 2026. One plenary indulgence a day, applicable only to the souls in purgatory, with the usual conditions." },
      { question: "What if I missed All Souls' Day Mass?", answer: "Have a Mass offered, pray the Eternal Rest, visit a cemetery while the November 1–8 grant lasts, and keep the rest of the month. The dead are not limited to one Monday." },
      { question: "Do I have to visit a Catholic cemetery?", answer: "The grant says \"a cemetery,\" not only a Catholic one. Pray for the dead wherever they are buried." },
      { question: "Can I apply the indulgence to a living person?", answer: "These November plenary indulgences are granted only for the souls in purgatory, by way of suffrage." },
      { question: "What is the best daily prayer for November?", answer: "The Eternal Rest, Psalm 130, and the offering of the day's work for the dead. Add Mass whenever you can." },
      { question: "When is All Souls' Day in 2027?", answer: "Tuesday, November 2, 2027." },
    ],
  },
  {
    slug: "how-to-pray-for-the-dead",
    title: "How to Pray for the Dead: A Catholic Step-by-Step Guide",
    h1: "How to Pray for the Dead: What Catholics Actually Do",
    description: "How to pray for the dead as a Catholic: Mass, Eternal Rest, cemetery visits, almsgiving, and a simple order to follow after a death or in November.",
    keywords: "how to pray for the dead, praying for the dead catholic, how catholics pray for deceased, suffrage for the dead, prayers after a death catholic",
    readTime: "10 min",
    datePublished: "2026-11-03",
    crumb: "How to Pray for the Dead",
    category: "Prayers & Devotions",
    lede: "After a funeral, or in November, many Catholics want to help and do not know what counts. The Church is specific: the Mass first, then prayer, almsgiving, indulgences, and works of penance. Here is that order in plain steps.",
    answer: "To pray for the dead as a Catholic, start with the Eucharist: go to Mass and, if you can, have a Mass offered by name. Then pray the Eternal Rest, visit the grave, give alms, and, in early November, seek the cemetery indulgence. Prayer for the dead is called suffrage. It does not tell you the state of a particular soul, and it does not replace grief. A short walkthrough is also on " + `{{${BLOG_HOW}|Catholic Bible Online's guide to how to pray for the dead}}.`,
    facts: [
      { label: "First help", value: "The Mass (CCC 1032)" },
      { label: "Daily prayer", value: "Eternal Rest (Requiem aeternam)" },
      { label: "November extra", value: "Cemetery indulgence, November 1–8" },
      { label: "Not the same as", value: "A séance, a guarantee, or a canonization" },
    ],
    timeline: [
      { when: "In the hours after a death", what: "Pray the Eternal Rest. Call a priest for the dead if the person is dying or has just died. See [[/blog/catholic-funeral-rites-explained/|Catholic funeral rites]]." },
      { when: "At the funeral", what: "The Funeral Mass is the Church's great prayer for that person." },
      { when: "The nine days after", what: "In many families, a novena. " + `{{${NOV_HOLY}|Novena for the Holy Souls on Catholic Bible Online}}.` },
      { when: "The month's mind and the anniversary", what: "Have Mass offered again. Visit the grave." },
      { when: "Every November", what: "Return to the same names, and add the forgotten. [[/blog/november-month-of-the-holy-souls/|November, month of the Holy Souls]]." },
    ],
    sections: [
      {
        id: "the-order-of-help",
        heading: "The Church's order of help",
        paragraphs: [
          "The Catechism is brief and ranked: \"The Church also commends almsgiving, indulgences, and works of penance undertaken on behalf of the dead\" after she has named the Eucharistic sacrifice (CCC 1032). You do not have to invent a method. " + `{{${BLOG_HOW}|How to pray for the dead on Catholic Bible Online}}` + " walks the same path. What follows is that path with the reasons attached.",
        ],
        table: {
          caption: "What to do, in the order the Church gives",
          headers: ["Rank", "Action", "Why it comes first"],
          rows: [
            ["1", "Mass, offered by name if possible", "The Eucharist is the sacrifice of Christ, the greatest suffrage."],
            ["2", "The Eternal Rest and the Office of the Dead", "The Church's own words, usable at a grave or at the table."],
            ["3", "Almsgiving in the person's memory", "Charity offered for the dead is an ancient Christian custom."],
            ["4", "Indulgences applied to the departed", "The Church opens her treasury by way of suffrage, especially November 1–8."],
            ["5", "Fasting or a small penance", "Works of penance are named with the rest in CCC 1032."],
          ],
        },
      },
      {
        id: "words-to-say",
        heading: "Words you can say today",
        paragraphs: [
          "If you need one prayer, use this, in English or Latin. Full notes on the text are in our [[/blog/eternal-rest-prayer-catholic/|Eternal Rest guide]] and on " + `{{${BLOG_REST}|Catholic Bible Online's Eternal Rest page}}.`,
        ],
        list: [
          "\"Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.\"",
          "\"May the souls of all the faithful departed, through the mercy of God, rest in peace.\"",
          "Psalm 130, the De Profundis: " + `{{${CBO}psalms/130/|Psalm 130 on Catholic Bible Online}}.`,
          "A decade of the Rosary, ending the decade with the Eternal Rest. See [[/blog/rosary-for-the-dead/|the Rosary for the dead]].",
        ],
        callout: {
          label: "Name them",
          text: "Say the person's name. The Church prays for \"N.\" at the funeral. God does not need the reminder. You do. Collections of short texts are on " + `{{${PRAY_DEAD}|Prayer for the Dead}}` + " and " + `{{${PRAY_AS}|All Souls' prayers}}` + " at Catholic Bible Online.",
        },
      },
      {
        id: "after-a-death",
        heading: "After a death in the family",
        paragraphs: [
          "The first duties are bodily and liturgical: the body, the priest, the funeral. Prayer runs beside those duties, not instead of them. If you are arranging a funeral, start with [[/blog/catholic-funeral-mass-what-to-expect/|what to expect at a Catholic funeral Mass]].",
          "Friends often ask, \"What can I do?\" The honest Catholic answer is: have a Mass offered, pray the Eternal Rest, sit with the family, and bring food. Do not tell the mourners that their dead \"is an angel now.\" Catholic teaching is that the dead are judged, and that those who die in grace are either with God or being purified. Angels are a different creation. For the grief of the living, " + `{{${NOV_GRIEF}|Catholic Bible Online's novena after loss}}` + " and other " + `{{${NOV_LIFE}|novenas for life situations}}` + " are aimed at the people still here.",
        ],
      },
      {
        id: "what-prayer-does-not-do",
        heading: "What prayer for the dead does not do",
        paragraphs: [
          "It does not force God. It does not tell you, by a feeling or a number, that a soul has \"gotten out.\" It does not baptize someone who refused God. The Church prays in hope, because God's mercy is real and because we do not know the inner story of a death. For the doctrine of the purification, read [[/blog/what-is-purgatory-explained/|what purgatory is]] and " + `{{${BLOG_PURG}|Catholic Bible Online's complete guide to purgatory}}.`,
        ],
        list: [
          "Do not use a ouija board, a medium, or \"signs\" demanded from the dead. The Catechism forbids divination and necromancy (CCC 2116–2117).",
          "Do not turn the Saint Gertrude prayer into a promise that a fixed number of souls are released. It is a good prayer. The number is not Church teaching.",
          "Do not skip the funeral and \"celebrate a life\" as if prayer for the dead were optional extra.",
        ],
      },
    ],
    prayer: "Lord Jesus, you wept at the tomb of Lazarus and then called him out. Receive the dead we name and the dead we have forgotten. Take our Mass, our alms, and this poor prayer, and use them as you will. Give us a sober hope, and teach us to pray as people who will be prayed for in our turn. Eternal rest grant unto them, O Lord. Amen.",
    related: [
      { href: "/blog/catholic-prayers-for-the-dead/", label: "Catholic prayers for the dead" },
      { href: "/blog/eternal-rest-prayer-catholic/", label: "The Eternal Rest prayer" },
      { href: "/blog/novena-for-holy-souls/", label: "Novena for the Holy Souls" },
      { href: "/blog/all-souls-day/", label: "All Souls' Day" },
      { href: "/blog/catholic-funeral-rites-explained/", label: "Catholic funeral rites" },
    ],
    faqs: [
      { question: "How do Catholics pray for the dead?", answer: "First the Mass, then prayers such as the Eternal Rest, then almsgiving, indulgences, and small penances, offered for the person by name and for all the faithful departed." },
      { question: "What is the best prayer for someone who has died?", answer: "The Mass. If you need words at the grave, the Eternal Rest. If you want nine days, a novena for the Holy Souls." },
      { question: "Can I pray for someone who was not Catholic?", answer: "You may always commend a person to God's mercy. Funeral rites for the unbaptized follow particular law; private prayer for mercy is never forbidden." },
      { question: "How soon after death should I have a Mass offered?", answer: "As soon as the parish can schedule it. Many families also keep the month's mind (about thirty days) and the anniversary." },
      { question: "Does praying for the dead help me too?", answer: "Yes. Suffrage is an act of charity; it also trains you to remember your own death. It is not a substitute for mourning." },
      { question: "May I pray for the dead every day, not only in November?", answer: "Yes. November is concentrated, not exclusive. The Eternal Rest belongs to the whole year." },
      { question: "What if I never learned the Eternal Rest?", answer: "The English is one sentence. Learn it this week. The Latin is Requiem aeternam dona eis, Domine." },
      { question: "Where can I find more prayers?", answer: "Catholic Bible Online collects them in its prayers for the dead and All Souls' prayers pages, and in its article on Catholic prayers for the dead." },
    ],
  },
  {
    slug: "catholic-prayers-for-the-dead",
    title: "Catholic Prayers for the Dead: Texts, When to Use Them",
    h1: "Catholic Prayers for the Dead: The Texts the Church Actually Uses",
    description: "Catholic prayers for the dead: Eternal Rest, Fidelium animae, De Profundis, All Souls' texts, and when to use each — with links to the full collections.",
    keywords: "catholic prayers for the dead, prayers for the deceased catholic, requiem aeternam, fidelium animae, all souls prayers, prayer for souls in purgatory",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "Prayers for the Dead",
    category: "Prayers & Devotions",
    lede: "Catholics do not have to search the internet for a new \"beautiful prayer for Grandpa.\" The Church already has a small, strong set of texts. Learn those first. Use newer words only after the old ones are in your mouth.",
    answer: "The core Catholic prayers for the dead are the Eternal Rest (Requiem aeternam), the versicle \"May the souls of the faithful departed…\" (Fidelium animae), Psalm 130, and the Funeral Mass. All Souls' Day and November add indulgenced cemetery prayers. Full collections live on " + `{{${BLOG_PRAYERS}|Catholic Bible Online's Catholic prayers for the dead}}` + ", " + `{{${PRAY_DEAD}|Prayer for the Dead}}` + ", and " + `{{${PRAY_AS}|All Souls' prayers}}.`,
    facts: [
      { label: "Shortest daily prayer", value: "Eternal Rest" },
      { label: "Psalm of the dead", value: "Psalm 130 (De Profundis)" },
      { label: "Greatest prayer", value: "The Mass" },
      { label: "November collection", value: "All Souls' prayers and cemetery visits" },
    ],
    timeline: [
      { when: "At a deathbed", what: "The Commendation of the Dying, if a priest or the family ritual is available; otherwise the Eternal Rest." },
      { when: "At the vigil and funeral", what: "The Church's funeral rites. See [[/blog/catholic-funeral-rites-explained/|funeral rites explained]]." },
      { when: "At the grave, any day", what: "Eternal Rest, a decade, holy water." },
      { when: "November 2", what: "Mass of All Souls. " + `{{${BLOG_FEAST}|All Souls' feast guide on Catholic Bible Online}}.` },
    ],
    sections: [
      {
        id: "the-core-set",
        heading: "The core set, with the words",
        paragraphs: [
          "These are public, traditional texts. You may copy them. You may pray them in the car. You do not need permission.",
        ],
        table: {
          caption: "The prayers every Catholic should know for the dead",
          headers: ["Prayer", "English (short)", "When"],
          rows: [
            ["Eternal Rest", "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.", "After a death, at grace, at a grave, after a decade"],
            ["Fidelium animae", "May the souls of all the faithful departed, through the mercy of God, rest in peace.", "The end of the Rosary, the end of a meal, the end of night prayer"],
            ["De Profundis", "Psalm 130: \"Out of the depths I cry to you, O Lord.\"", "Vigils, November, any Saturday"],
            ["Our Father, Hail Mary, Glory Be", "The usual prayers, offered for N.", "When you have no book"],
          ],
        },
        callout: {
          label: "Latin of the Eternal Rest",
          text: "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis. Requiescant in pace. Amen. Line-by-line notes: " + `{{${BLOG_REST}|Eternal Rest on Catholic Bible Online}}` + " and [[/blog/eternal-rest-prayer-catholic/|our Eternal Rest guide]].",
        },
      },
      {
        id: "all-souls-and-purgatory-texts",
        heading: "All Souls' texts and prayers for the Holy Souls",
        paragraphs: [
          "On November 2 the Missal provides three Masses. At home, families often add a litany of names and the Eternal Rest after each. " + `{{${PRAY_AS}|All Souls' prayers on Catholic Bible Online}}` + " gathers those short texts. For prayers aimed specifically at the purification of the Holy Souls, see " + `{{${BLOG_PURG_PRAY}|prayers for the souls in purgatory}}` + " and " + `{{${PRAY_DEAD}|the Prayer for the Dead collection}}.`,
          "\"Faithful departed\" is the Church's name for the baptized who have died in Christ. It is not a private verdict that a given person is in purgatory. We pray in hope. A fuller explanation is in [[/blog/prayer-for-the-faithful-departed/|Prayer for the faithful departed]] and on " + `{{${BLOG_FAITHFUL}|Catholic Bible Online's faithful-departed page}}.`,
        ],
      },
      {
        id: "scripture-that-is-already-prayer",
        heading: "Scripture that is already a prayer for the dead",
        paragraphs: [
          "Before you look for a modern poem, pray the chapters the funeral lectionary already chose.",
        ],
        list: [
          `{{${CBO}wisdom/3/|Wisdom 3:1–9}} — the souls of the just.`,
          `{{${CBO}job/19/|Job 19}} — \"I know that my Redeemer lives.\"`,
          `{{${CBO}psalms/23/|Psalm 23}} — the valley of the shadow of death.`,
          `{{${CBO}psalms/130/|Psalm 130}} — De Profundis.`,
          `{{${CBO}john/11/|John 11}} — Lazarus, and \"I am the resurrection.\"`,
          `{{${CBO}2-timothy/1/|2 Timothy 1}} — Paul prays for Onesiphorus, a prayer the tradition has long read as intercession for the dead.`,
        ],
      },
      {
        id: "what-not-to-substitute",
        heading: "What not to substitute for these prayers",
        paragraphs: [
          "A lyric on a funeral card can be a comfort. It is not the Requiem. Do not let a generic \"in the stars\" verse replace the Name of Jesus or the prayer of the Church. And do not pile up unverified promises: a prayer is not a vending machine. " + `{{${BLOG_PRAYERS}|Catholic Bible Online's traditional collection}}` + " is the better shelf to take books down from.",
        ],
      },
    ],
    prayer: "Merciful Father, we bring you the names we carry and the names we never learned. Through the sacrifice of your Son, give them rest. Make these old words new in our mouths this November, and keep us faithful until someone prays them for us. Eternal rest grant unto them, O Lord. Amen.",
    related: [
      { href: "/blog/eternal-rest-prayer-catholic/", label: "Eternal Rest (Requiem aeternam)" },
      { href: "/blog/prayer-for-the-faithful-departed/", label: "Prayer for the faithful departed" },
      { href: "/blog/rosary-for-the-dead/", label: "Rosary for the dead" },
      { href: "/blog/how-to-pray-for-the-dead/", label: "How to pray for the dead" },
      { href: "/blog/november-month-of-the-holy-souls/", label: "November, month of the Holy Souls" },
    ],
    faqs: [
      { question: "What is the Catholic prayer for the dead?", answer: "The short daily prayer is the Eternal Rest. The greatest prayer is the Mass. Psalm 130 and \"May the souls of the faithful departed…\" belong with them." },
      { question: "What does \"eternal rest grant unto them\" mean?", answer: "It asks God to give the dead the rest of heaven — not sleep as an end, but the rest of those who see God." },
      { question: "Is there a prayer specifically for All Souls' Day?", answer: "The Mass of the day is the prayer. At home, the Eternal Rest after a list of names, and the cemetery prayers of November 1–8." },
      { question: "Can I write my own prayer for someone who died?", answer: "Yes, after you have used the Church's texts. Keep it asking for mercy, not announcing that the person is already a saint." },
      { question: "Should I pray in Latin?", answer: "You may. English is fully Catholic. Latin is the Church's heritage, not a requirement for the prayer to \"work.\"" },
      { question: "Where are more texts collected?", answer: "Catholic Bible Online keeps a traditional article, an All Souls' prayer page, and a Prayer for the Dead page." },
      { question: "May children pray these?", answer: "Yes. Teach them the Eternal Rest the way you teach the Hail Mary. Keep explanations simple: we ask God to take care of people who have died." },
      { question: "Do I pray for canonized saints?", answer: "No. We ask the saints to pray for us. We pray for the dead who have not been canonized." },
    ],
  },
  {
    slug: "rosary-for-the-dead",
    title: "Rosary for the Dead: How Catholics Offer the Rosary for Souls",
    h1: "Rosary for the Dead: How to Offer the Rosary for the Holy Souls",
    description: "How to pray a Rosary for the dead: Eternal Rest after the decades, intentions for the Holy Souls, funeral vigils, and what is custom versus the ordinary Rosary.",
    keywords: "rosary for the dead, rosary for souls in purgatory, rosary at a funeral catholic, eternal rest instead of glory be, how to pray rosary for deceased",
    readTime: "10 min",
    datePublished: "2026-11-03",
    crumb: "Rosary for the Dead",
    category: "Prayers & Devotions",
    lede: "There is no second, secret Rosary. There is the ordinary Dominican Rosary, offered for the dead, sometimes with the Eternal Rest in place of the Glory Be. That custom is allowed. It is not required. The power is the same prayer the Church already loves, applied as suffrage.",
    answer: "To pray a Rosary for the dead, pray the Rosary as usual and name your intention: a person, a family, or the Holy Souls. Some Catholics replace the Glory Be at the end of each decade with the Eternal Rest. That is a pious custom, not a rule of the Missal. A dedicated walkthrough is on " + `{{${PRAY_ROSARY}|Catholic Bible Online's Rosary for the Dead}}` + ". If you are still learning the beads, start with [[/blog/how-to-pray-the-rosary-step-by-step/|how to pray the Rosary]].",
    facts: [
      { label: "Form", value: "Ordinary five-decade Rosary, offered for the dead" },
      { label: "Common custom", value: "Eternal Rest after each decade, instead of or after the Glory Be" },
      { label: "Not a separate rite", value: "No extra approval needed; it is the Rosary as suffrage" },
      { label: "Best setting", value: "Vigil, grave, November evenings" },
    ],
    timeline: [
      { when: "At the vigil (wake)", what: "A public Rosary before or after the Vigil for the Deceased is common in U.S. parishes." },
      { when: "After burial", what: "A decade at the grave, with holy water if you have it." },
      { when: "November", what: "A Rosary one evening a week for the names in the Book of the Dead." },
      { when: "The anniversary", what: "Five decades for that person, then a Mass if you can." },
    ],
    sections: [
      {
        id: "how-to-pray-it",
        heading: "How to pray it, step by step",
        paragraphs: [
          "Use ordinary beads. Offer the Rosary before you begin: \"For N., and for all the faithful departed.\" Then pray as you always do. " + `{{${PRAY_ROSARY}|The Rosary for the Dead page on Catholic Bible Online}}` + " gives a complete sequence with intentions.",
        ],
        list: [
          "Sign of the Cross. Apostles' Creed on the crucifix.",
          "Our Father, three Hail Marys, Glory Be — or Glory Be plus Eternal Rest — on the first beads.",
          "Name the mystery. Our Father, ten Hail Marys.",
          "At the end of the decade: Glory Be, then \"Eternal rest grant unto them, O Lord…\" Some groups omit the Glory Be and say only the Eternal Rest. Either is a custom. Neither is a sin to skip.",
          "Fatima prayer if that is your habit. Next mystery.",
          "Close with Hail, Holy Queen, and Fidelium animae: \"May the souls of all the faithful departed…\"",
        ],
        callout: {
          label: "Do not confuse this with the Seven Sorrows Rosary",
          text: "The [[/blog/seven-sorrows-rosary-guide/|Seven Sorrows Rosary]] is a different chaplet. A Rosary for the dead is the ordinary Rosary, offered for the departed. For more short texts to add, see " + `{{${PRAY_AS}|All Souls' prayers}}` + " and " + `{{${BLOG_PRAYERS}|Catholic prayers for the dead}}.`,
        },
      },
      {
        id: "which-mysteries",
        heading: "Which mysteries for the dead?",
        paragraphs: [
          "Any set. The Sorrowful Mysteries fit a vigil. The Glorious Mysteries fit a cemetery on a Sunday, because the point of praying for the dead is the resurrection, not the grave as a last word. " + `{{${CBO}john/11/|John 11}}` + " and " + `{{${CBO}1-corinthians/15/|1 Corinthians 15}}` + " are the chapters to keep in mind while the beads move.",
          "You may assign a decade to a name: first decade for a parent, second for a friend, fifth for the souls with no one to pray for them. That is a method of attention, not a contract.",
        ],
      },
      {
        id: "when-to-use",
        heading: "When a Rosary for the dead belongs",
        paragraphs: [
          "The beads are not a substitute for the altar. They are what a family can do at 9 p.m. in a funeral home, or on a Tuesday in November when no Mass for the dead is scheduled. Pair the Rosary with a Mass intention whenever you can. " + `{{${PRAY_ROSARY}|Catholic Bible Online's Rosary for the Dead}}` + " is written for that home use; " + `{{${BLOG_HOW}|how to pray for the dead}}` + " places it in the larger order of suffrage.",
        ],
        table: {
          caption: "Where the Rosary for the dead fits",
          headers: ["Setting", "What to pray", "What not to skip"],
          rows: [
            ["Vigil / wake", "Five decades, Sorrowful or Glorious", "The Vigil for the Deceased, if the parish is celebrating it"],
            ["Cemetery", "A decade, Eternal Rest, holy water", "The November 1–8 indulgence, if you are in those days"],
            ["November evening at home", "Five decades for the Book of the Dead", "Sunday Mass; a Mass intention for a name on the list"],
            ["Anniversary", "Five decades and the person's name", "A Mass offered that week"],
          ],
        },
      },
      {
        id: "vigil-etiquette",
        heading: "At a wake: keep it the Church's prayer",
        paragraphs: [
          "If you lead a funeral Rosary, announce the intention, pray at a steady pace, and leave room for silence. Do not turn the mysteries into a eulogy. The Vigil for the Deceased in the Order of Christian Funerals is the liturgical service; the Rosary is a popular devotion that often accompanies it. Both can happen. Neither should drown the other.",
        ],
      },
    ],
    prayer: "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death, and pray for those whose hour has already come. We offer you this Rosary for the dead we love and for the dead who are not loved. Lead them to your Son, the firstborn from the dead. Eternal rest grant unto them, O Lord. Amen.",
    related: [
      { href: "/blog/how-to-pray-the-rosary-step-by-step/", label: "How to pray the Rosary" },
      { href: "/blog/catholic-prayers-for-the-dead/", label: "Catholic prayers for the dead" },
      { href: "/blog/how-to-pray-for-the-dead/", label: "How to pray for the dead" },
      { href: "/blog/eternal-rest-prayer-catholic/", label: "Eternal Rest prayer" },
      { href: "/blog/all-souls-day/", label: "All Souls' Day" },
    ],
    faqs: [
      { question: "Is there an official \"Rosary of the Dead\"?", answer: "No separate liturgical text. Catholics offer the ordinary Rosary for the departed, sometimes with the Eternal Rest at the end of each decade." },
      { question: "Do I replace the Glory Be with the Eternal Rest?", answer: "Some groups do. It is a custom. You may add the Eternal Rest after the Glory Be and avoid the dilemma." },
      { question: "Can I pray the Rosary at a grave?", answer: "Yes. A decade is enough if the weather or the time is short." },
      { question: "Which mysteries on All Souls' Day?", answer: "Any. Glorious or Sorrowful are the most common. The calendar of mysteries by weekday is a help, not a law, on a funeral day." },
      { question: "May we pray a Rosary instead of a Funeral Mass?", answer: "No. The Mass is the Church's funeral. The Rosary is in addition." },
      { question: "Is a recorded Rosary enough?", answer: "Praying along can help someone who is exhausted. It does not replace a Mass intention." },
      { question: "Can children take a decade?", answer: "Yes. Give them one Hail Mary if a decade is too much. Teach the Eternal Rest as well." },
      { question: "Where is a full written sequence?", answer: "Catholic Bible Online's Rosary for the Dead page is written for that use." },
    ],
  },
  {
    slug: "prayer-for-the-faithful-departed",
    title: "Prayer for the Faithful Departed: What the Phrase Means",
    h1: "Prayer for the Faithful Departed: What Catholics Mean by Those Words",
    description: "What “faithful departed” means in the Mass, the Memento of the Dead, and how Catholics pray in hope — without claiming to know a soul's state.",
    keywords: "prayer for the faithful departed, faithful departed meaning, memento of the dead, catholic intercession for deceased, may the souls of the faithful departed",
    readTime: "10 min",
    datePublished: "2026-11-03",
    crumb: "Faithful Departed",
    category: "Prayers & Devotions",
    lede: "\"Faithful departed\" is not Victorian decoration. It is the Church's name, in the Roman Canon and in countless epitaphs, for those who have died marked with faith. Prayer for them is intercession, not a verdict, and not a séance.",
    answer: "The faithful departed are the baptized who have died in Christ, whom the Church commends to God's mercy. We pray for them in the Memento of the Dead at Mass, with the Eternal Rest, and all through November. We do not claim to know, except in a canonization, that a particular person is already in heaven or still being purified. " + `{{${BLOG_FAITHFUL}|Catholic Bible Online's prayer for the faithful departed}}` + " sets the same ground.",
    facts: [
      { label: "In the Mass", value: "Memento of the Dead, Roman Canon and all Eucharistic Prayers" },
      { label: "Short versicle", value: "\"May the souls of the faithful departed…\"" },
      { label: "Feast", value: "All Souls' Day, November 2" },
      { label: "Doctrine", value: "Communion of saints, CCC 954–958, 1030–1032" },
    ],
    timeline: [
      { when: "Every Mass", what: "The Church remembers the dead after the consecration." },
      { when: "Every funeral", what: "The name is spoken; the body is honored; the sacrifice is offered." },
      { when: "November 2", what: "The commemoration of all of them together. " + `{{${BLOG_2026}|All Souls' Day 2026 on Catholic Bible Online}}.` },
    ],
    sections: [
      {
        id: "what-the-words-mean",
        heading: "What \"faithful departed\" means",
        paragraphs: [
          "Departed means they have died. Faithful, in this phrase, means they belonged to the household of the faith — marked by baptism, not proven sinless. The Church does not use the title as a private revelation about anyone's particular judgment. She uses it as her way of praying in hope for her own. " + `{{${BLOG_FAITHFUL}|The faithful-departed guide on Catholic Bible Online}}` + " is the companion piece to this one.",
          "The communion of saints holds together three states: the Church on earth, the saints in heaven, and those being purified (CCC 954). Love does not stop at death. \"Our prayer for them is capable not only of helping them, but also of making their intercession for us effective\" (CCC 958). That is why a Catholic grave is not a wall.",
        ],
        callout: {
          label: "Purgatory is not a second chance for the unrepentant",
          text: "The Catechism is clear: this purification is for those who die in God's grace and friendship (CCC 1030). It is not reincarnation, not a waiting room for atheists who refused God, and not the hell of the damned (CCC 1031). See [[/blog/what-is-purgatory-explained/|what purgatory is]] and " + `{{${BLOG_PURG}|Catholic Bible Online's complete purgatory guide}}.`,
        },
      },
      {
        id: "in-the-mass",
        heading: "Where the prayer sits in the Mass",
        paragraphs: [
          "In the Roman Canon the priest remembers \"your servants who have gone before us with the sign of faith and rest in the sleep of peace,\" and he is allowed to name them. The other Eucharistic Prayers do the same work in fewer words. Sunday by Sunday, whether or not a funeral is happening, the Catholic Mass already prays for the faithful departed. All Souls' Day is that prayer raised to a feast. See [[/blog/all-souls-day/|All Souls' Day]] and " + `{{${BLOG_FEAST}|the feast guide on Catholic Bible Online}}.`,
        ],
      },
      {
        id: "the-versicle",
        heading: "The versicle you already know",
        paragraphs: [
          "\"May the souls of all the faithful departed, through the mercy of God, rest in peace. Amen.\" Latin: Fidelium animae per misericordiam Dei requiescant in pace. It is the natural end of a Rosary, a meal, or a cemetery visit. Pair it with the Eternal Rest. Both texts, with context, are on " + `{{${BLOG_REST}|the Eternal Rest page}}` + " and in " + `{{${BLOG_PRAYERS}|Catholic prayers for the dead}}.`,
        ],
      },
      {
        id: "scripture",
        heading: "Scripture behind the practice",
        paragraphs: [
          "Judas Maccabeus has sacrifice offered for fallen soldiers (" + `{{${CBO}2-maccabees/12/|2 Maccabees 12}}` + "). Paul can speak of a man saved \"as through fire\" (" + `{{${CBO}1-corinthians/3/|1 Corinthians 3:15}}` + "). Jesus mentions forgiveness \"in the age to come\" (" + `{{${CBO}matthew/12/|Matthew 12:32}}` + "), a line the tradition has long read as leaving room for a purification after death. None of these verses is a schematic map of purgatory. Together they are why the Church never treated prayer for the dead as a medieval invention.",
        ],
      },
    ],
    prayer: "Father of mercies, remember your servants who have gone before us with the sign of faith. Forgive what was still imperfect in them. Give them the rest of your presence, and give us who remain a faith that prays for the dead without pretending to be their judge. Through Christ our Lord. Amen.",
    related: [
      { href: "/blog/all-souls-day/", label: "All Souls' Day" },
      { href: "/blog/what-is-purgatory-explained/", label: "What is purgatory?" },
      { href: "/blog/catholic-prayers-for-the-dead/", label: "Catholic prayers for the dead" },
      { href: "/blog/how-to-pray-for-the-dead/", label: "How to pray for the dead" },
      { href: "/blog/eternal-rest-prayer-catholic/", label: "Eternal Rest prayer" },
    ],
    faqs: [
      { question: "What does \"faithful departed\" mean?", answer: "It is the Church's name for those who have died in the faith of Christ, whom she commends to God's mercy. It is not a private revelation about a particular soul." },
      { question: "Is the prayer for the faithful departed the same as the Eternal Rest?", answer: "They are companions. The Eternal Rest asks rest and light for \"them.\" Fidelium animae names \"all the faithful departed.\" Pray both." },
      { question: "Do we pray for people in hell?", answer: "The Church does not assign living names to hell. She prays in hope. She does not teach that prayer changes the particular judgment of someone who died in final unrepentance." },
      { question: "Do we pray for canonized saints?", answer: "No. We ask their intercession. All Souls' Day is not All Saints' Day." },
      { question: "Where does this prayer appear at Mass?", answer: "In the Memento of the Dead, after the consecration, in the Eucharistic Prayer." },
      { question: "Can I add a name at Mass?", answer: "Yes, silently, and by arranging a Mass intention with the parish." },
      { question: "Is this only a November devotion?", answer: "No. Every Mass remembers the dead. November concentrates the practice." },
      { question: "Where can I read more?", answer: "Catholic Bible Online's page on the prayer for the faithful departed, and its complete guide to purgatory." },
    ],
  },
  {
    slug: "novena-for-holy-souls",
    title: "Novena for the Holy Souls: Nine Days of Prayer for the Dead",
    h1: "Novena for the Holy Souls in Purgatory: How to Pray Nine Days for the Dead",
    description: "How to pray a novena for the Holy Souls: nine days, when to start, Mass and indulgences beside it, and where to find the daily Catholic text.",
    keywords: "novena for the holy souls, holy souls novena, novena for souls in purgatory, nine days prayer for the dead, all souls novena",
    readTime: "10 min",
    datePublished: "2026-11-03",
    crumb: "Novena for the Holy Souls",
    category: "Prayers & Devotions",
    lede: "A novena is nine days of one intention. For the Holy Souls, those nine days are not a charm. They are a Catholic way of not quitting after the funeral lunch. The daily text can be prayed at home; the Mass still outranks it.",
    answer: "A novena for the Holy Souls is nine consecutive days of prayer offered for the faithful departed. You may start on October 24 to end on All Saints, on October 25 to end on All Souls, or any day of the year after a death. Use a fixed daily text, name your intention, and add Mass if you can. The day-by-day prayers are on " + `{{${NOV_HOLY}|Catholic Bible Online's Novena for the Holy Souls}}` + ". This guide is how and why to pray it, not a substitute for that text.",
    facts: [
      { label: "Length", value: "Nine consecutive days" },
      { label: "Intention", value: "The Holy Souls, and any person you name" },
      { label: "Best companion", value: "A Mass offered during the nine days" },
      { label: "Not required", value: "A devotion; missing a day is not a sin" },
    ],
    timeline: [
      { when: "October 24–November 1", what: "A common start, ending on All Saints." },
      { when: "October 25–November 2", what: "Ends on All Souls' Day." },
      { when: "November 2–10", what: "Begins on the feast and runs into the month of the Holy Souls." },
      { when: "The nine days after a funeral", what: "The older \"novena of mourning\" in many Catholic cultures." },
    ],
    sections: [
      {
        id: "what-a-novena-is",
        heading: "What a novena is — and is not",
        paragraphs: [
          "Nine days recall the nine days between the Ascension and Pentecost, when the apostles and Mary remained in prayer (" + `{{${CBO}acts/1/|Acts 1}}` + "). A novena is persevering prayer. It is not a fee God collects before he will be merciful. If you miss a day, you continue; you do not start a superstition of \"broken\" novenas. For the daily Holy Souls text itself, go to " + `{{${NOV_HOLY}|the Novena for the Holy Souls on Catholic Bible Online}}` + " rather than mixing random pages from the internet.",
          "This novena is distinct from " + `{{${NOV_GRIEF}|a novena for healing after loss}}` + ", which is for the living who mourn, and from the many " + `{{${NOV_LIFE}|novenas for life situations}}` + " aimed at work, illness, or a house. Suffrage for the dead can run beside those. It should not be confused with them. A simpler, generic walkthrough also exists on this site as the [[/blog/novena-for-the-dead-catholic/|novena for the dead]].",
        ],
      },
      {
        id: "how-to-pray-nine-days",
        heading: "How to pray the nine days",
        paragraphs: [
          "Keep it small enough that you will finish.",
        ],
        list: [
          "Choose a time you already inhabit — after breakfast, after the evening news.",
          "Sign of the Cross. Name the person, or \"the Holy Souls, especially those most forgotten.\"",
          "Pray that day's text from " + `{{${NOV_HOLY}|Catholic Bible Online}}.`,
          "Add an Our Father, Hail Mary, Glory Be, and the Eternal Rest. See " + `{{${BLOG_REST}|the Eternal Rest}}.`,
          "If you can, go to Mass once during the nine days, or have one offered.",
          "On the last day, do one corporal work of mercy in the person's memory — a meal, a visit, a gift to the poor.",
        ],
        callout: {
          label: "The novena does not replace the cemetery indulgence",
          text: "From November 1 to 8 you may also visit a cemetery and gain a plenary indulgence for the souls in purgatory, under the usual conditions. The novena and the indulgence are different gifts. See [[/blog/november-month-of-the-holy-souls/|November, month of the Holy Souls]] and [[/blog/plenary-indulgence-guide/|the indulgence guide]].",
        },
      },
      {
        id: "scripture-for-nine-days",
        heading: "Nine short readings if you want Scripture beside the text",
        paragraphs: [
          "These are not official \"novena readings.\" They are nine chapters you can pair, one a day, with the prayers.",
        ],
        table: {
          caption: "Optional Scripture beside the Holy Souls novena",
          headers: ["Day", "Chapter", "Why"],
          rows: [
            ["1", `{{${CBO}2-maccabees/12/|2 Maccabees 12}}`, "Prayer and sacrifice for the dead"],
            ["2", `{{${CBO}wisdom/3/|Wisdom 3}}`, "The souls of the just"],
            ["3", `{{${CBO}psalms/130/|Psalm 130}}`, "De Profundis"],
            ["4", `{{${CBO}job/19/|Job 19}}`, "My Redeemer lives"],
            ["5", `{{${CBO}1-corinthians/3/|1 Corinthians 3}}`, "Saved as through fire"],
            ["6", `{{${CBO}john/11/|John 11}}`, "The resurrection and the life"],
            ["7", `{{${CBO}1-thessalonians/4/|1 Thessalonians 4}}`, "Hope, not despair"],
            ["8", `{{${CBO}1-corinthians/15/|1 Corinthians 15}}`, "The resurrection of the body"],
            ["9", `{{${CBO}revelation/21/|Revelation 21}}`, "God will wipe away every tear"],
          ],
        },
      },
      {
        id: "after-the-ninth-day",
        heading: "After the ninth day",
        paragraphs: [
          "You can stop. You can begin again for another name. You can keep only the Eternal Rest at meals. The Holy Souls are not a project you complete. They are family. " + `{{${BLOG_PURG_PRAY}|Prayers for the souls in purgatory on Catholic Bible Online}}` + " and " + `{{${BLOG_HOW}|how to pray for the dead}}` + " are the pages to keep open when the nine days end and ordinary time — in both senses — returns.",
        ],
      },
    ],
    prayer: "Lord, you told us to ask, to seek, and to knock. For nine days we ask rest for the dead, we seek your mercy for them, and we knock with the poor prayers we have. Take the whole novena as one act of charity. Do with it what you know is best. Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. Amen.",
    related: [
      { href: "/blog/novena-for-the-dead-catholic/", label: "Novena for the dead (simple guide)" },
      { href: "/blog/holy-souls-novena-all-souls-2026/", label: "Holy Souls novena around All Souls 2026" },
      { href: "/blog/how-to-pray-for-the-dead/", label: "How to pray for the dead" },
      { href: "/blog/november-month-of-the-holy-souls/", label: "November, month of the Holy Souls" },
      { href: "/blog/all-souls-day/", label: "All Souls' Day" },
    ],
    faqs: [
      { question: "When should I start a novena for the Holy Souls?", answer: "Any day. Popular starts are October 24 or 25, so the ninth day lands on All Saints or All Souls, or the day of a funeral." },
      { question: "What if I miss a day?", answer: "Pray the missed day when you remember, then continue. A novena is devotion, not a spell that breaks." },
      { question: "Do I have to use a particular text?", answer: "You should use a Catholic text, not a random poem. Catholic Bible Online's Novena for the Holy Souls is written for this." },
      { question: "Can I pray for more than one person?", answer: "Yes. Name them. Add \"and the souls most forgotten.\"" },
      { question: "Is a novena better than a Mass?", answer: "No. The Mass is the highest suffrage. A novena is a way of remaining in prayer when you cannot be at the altar every day." },
      { question: "May I pray the novena for someone who died years ago?", answer: "Yes. The Church has never put an expiration date on suffrage." },
      { question: "Is this the same as the Saint Gertrude prayer said nine times?", answer: "No. That is a different, shorter devotion. Do not attach a promised body-count of souls to either." },
      { question: "Where do I find the nine daily prayers?", answer: "On Catholic Bible Online, at the Novena for the Holy Souls in Purgatory." },
    ],
  },
];

export function holySoulsGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return HOLY_SOULS_GUIDES.find((guide) => guide.slug === slug);
}
