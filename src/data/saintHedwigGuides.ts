import type { LiturgicalFeastGuide } from "./liturgicalFeastGuides";

const CBO = "https://catholicbibleonline.com/bible/";
/** Same path on Guide Catholic and Catholic Bible Online — publish the CBO twin with this URL. */
const CBO_HEDWIG = "https://catholicbibleonline.com/blog/saint-hedwig/";
const CBO_PRAYER = "https://catholicbibleonline.com/blog/saint-hedwig-prayer/";
const CBO_NOVENA = "https://catholicbibleonline.com/blog/saint-hedwig-novena/";
const CBO_FINANCE = "https://catholicbibleonline.com/blog/saint-hedwig-financial-help/";

export const SAINT_HEDWIG_GUIDES: LiturgicalFeastGuide[] = [
  {
    slug: "saint-hedwig",
    title: "Saint Hedwig of Silesia: Life, Feast Day & Mother of the Poor",
    h1: "Saint Hedwig of Silesia: Duchess, Widow, and Friend of the Poor",
    description: "Saint Hedwig of Silesia (October 16): her life, Trebnitz Abbey, charity to the poor, feast day, and how Catholics ask her intercession without treating prayer as a bargain.",
    keywords: "saint hedwig, st hedwig, saint hedwig of silesia, santa edwiges, hedwig feast day, october 16 saint, mother of the poor, hedwig of andechs",
    readTime: "14 min",
    datePublished: "2026-11-05",
    crumb: "Saint Hedwig",
    category: "Saints & Intercession",
    lede: "Saint Hedwig was a duchess who spent her wealth on the poor and died in a Cistercian house she had helped found. The Church keeps her memorial on October 16. Popular devotion — especially as Santa Edwiges — also asks her help in debt and need. That ask is allowed. A guaranteed payday is not.",
    answer: "Saint Hedwig of Silesia (c. 1174–1243) was Duchess of Lower Silesia, wife of Henry I the Bearded, foundress of the Cistercian convent of Trebnitz (Trzebnica), and a widow who kept her revenues free for charity rather than taking solemn vows. Canonized by Pope Clement IV in 1267, she is honored on October 16 as a mother of the poor. For the prayer texts, the nine-day novena, and a careful guide to financial need, see " + `{{${CBO_PRAYER}|Saint Hedwig prayer}}` + ", " + `{{${CBO_NOVENA}|Saint Hedwig novena}}` + ", and " + `{{${CBO_FINANCE}|Saint Hedwig financial help}}` + " — the same URLs on Catholic Bible Online as on this site. The Scripture of alms and trust begins in " + `{{${CBO}matthew/25/|Matthew 25}}` + " and " + `{{${CBO}matthew/6/|Matthew 6}}` + ".",
    facts: [
      { label: "Who", value: "Hedwig of Andechs, Duchess of Lower Silesia" },
      { label: "Lived", value: "c. 1174 – 15 October 1243, Trebnitz" },
      { label: "Canonized", value: "26 March 1267, Pope Clement IV" },
      { label: "Feast", value: "October 16 (optional memorial)" },
      { label: "Also known as", value: "Santa Edwiges (Portuguese); Jadwiga Śląska (Polish)" },
      { label: "Not the same as", value: "Saint Hedwig (Jadwiga), Queen of Poland" },
    ],
    timeline: [
      { when: "c. 1174", what: "Born at Andechs Castle (Bavaria) to Berthold IV of Andechs. Educated among Benedictines at Kitzingen." },
      { when: "c. 1186", what: "Married young to Henry, later Duke of Lower Silesia. They had several children; few reached adulthood." },
      { when: "1202–1203", what: "With Henry, founds and endows the Cistercian convent of Trebnitz — the first house of religious women in Silesia." },
      { when: "1210s–1230s", what: "Supports monasteries, hospitals, and leper care; softens sentences; lives simply amid ducal rank." },
      { when: "1238", what: "Henry dies. Hedwig takes the grey habit as a lay sister at Trebnitz but does not profess vows, so she can still spend her income on the poor." },
      { when: "15 October 1243", what: "Dies at Trebnitz. Buried in the abbey church." },
      { when: "26 March 1267", what: "Canonized by Clement IV. Feast observed on October 16." },
      { when: "Each October 16", what: "Optional memorial. A natural day to begin or end a [[/blog/saint-hedwig-novena/|novena]]." },
    ],
    sections: [
      {
        id: "who-she-was",
        heading: "Who Saint Hedwig was",
        paragraphs: [
          "Hedwig was German by birth and Polish by marriage and language. Vatican accounts remember her learning the tongue of her people and refusing the display her rank allowed: used clothing, old shoes, the claim that the poor are \"our masters.\" She was not a romantic escape from politics. She helped govern with Henry, founded and endowed religious houses, and tended leper women at Neumarkt. When Henry was captured after a battle, she went to him; the story of his release belongs to her reputation for courage and loyalty, not to a fairy tale.",
          "Grief marked the marriage. Several children died. She bore that with the same faith that later sent her into Trebnitz as a widow. After Henry's death she wore the Cistercian habit of a lay sister. She did not take religious vows — not because she feared the rule, but so that she could keep legal control of her revenues and pour them into charity. That detail is the hinge of her popular title among the indebted: she used money for people, not for a court wardrobe.",
        ],
        callout: {
          label: "Two saints named Hedwig",
          text: "Do not confuse her with Saint Hedwig (Jadwiga), Queen of Poland (c. 1373–1399), a different woman and a different feast. This guide is the duchess of Silesia, October 16.",
        },
      },
      {
        id: "trebnitz-and-the-poor",
        heading: "Trebnitz, hospitals, and the poor",
        paragraphs: [
          "Trebnitz (Trzebnica) was not a hobby. It was the first convent of women in Silesia, stocked with nuns from Bamberg and later led by Hedwig's daughter Gertrude as abbess. Henry and Hedwig also backed other houses — Cistercians, Premonstratensians, Augustinians, Dominicans, Franciscans — and hospitals, including care for lepers. The National Shrine's summary of her life calls her \"Mother of the Poor\": the people followed her as if she were their mother. That is history's verdict, not a marketing line.",
          "Scripture already told her what to do with wealth. \"Whatever you did for one of these least brothers of mine, you did for me\" (" + `{{${CBO}matthew/25/|Matthew 25:40}}` + "). \"Do not store up for yourselves treasures on earth\" (" + `{{${CBO}matthew/6/|Matthew 6:19–21}}` + "). Almsgiving is worship when it is love, not a tip to buy a miracle (" + `{{${CBO}2-corinthians/9/|2 Corinthians 9}}` + "; " + `{{${CBO}tobit/4/|Tobit 4}}` + ").",
        ],
        table: {
          caption: "What Hedwig practiced — and what prayer may ask",
          headers: ["In her life", "In Catholic prayer today"],
          rows: [
            ["Spent ducal income on the poor and sick", "Ask her to intercede in real need — rent, debt, a hospital bill"],
            ["Refused display so as not to outshine the poor", "Ask for simplicity and honesty, not for a lifestyle upgrade"],
            ["Kept freedom to give rather than take vows", "Give what you can while you ask; charity is not cancelled by need"],
            ["Prayed, fasted, read Scripture at table", "Pair petition with Mass, confession, and the next concrete duty"],
          ],
        },
      },
      {
        id: "feast-and-devotion",
        heading: "Feast day, patronage, and popular devotion",
        paragraphs: [
          "The Roman Calendar keeps Saint Hedwig, Religious, as an optional memorial on October 16 (shared in many places with Saint Margaret Mary Alacoque). The Missal's collect asks that, following her example, we leave the world's empty pomp for the way of the Cross. That is the Church's own reading of her life: not a finance app with a halo.",
          "In Portuguese-speaking Catholic culture she is Santa Edwiges, widely invoked as helper of the poor and of those in debt. That title is popular devotion rooted in her charity and in stories of prisoners and the destitute. It is not a separate papal decree that turns her into a bank. Catholics may ask her intercession for money troubles. They may not treat a novena as a loan contract with heaven. See [[/blog/saint-hedwig-financial-help/|Saint Hedwig and financial help]] and the twin page on " + `{{${CBO_FINANCE}|Catholic Bible Online}}` + ".",
        ],
        list: [
          "[[/blog/saint-hedwig-prayer/|Saint Hedwig prayer]] — short petitions and how to pray them: " + `{{${CBO_PRAYER}|same URL on Catholic Bible Online}}` + ".",
          "[[/blog/saint-hedwig-novena/|Saint Hedwig novena]] — nine days with Scripture: " + `{{${CBO_NOVENA}|same URL on Catholic Bible Online}}` + ".",
          "[[/blog/saint-hedwig-financial-help/|Financial help]] — debts, rent, and Providence without the prosperity gospel: " + `{{${CBO_FINANCE}|same URL on Catholic Bible Online}}` + ".",
          "Pillar life of the saint (this page): " + `{{${CBO_HEDWIG}|catholicbibleonline.com/blog/saint-hedwig/}}` + ".",
        ],
      },
      {
        id: "how-to-honor-her",
        heading: "How to honor Saint Hedwig this year",
        paragraphs: [
          "You do not need a Slavic surname. You need a concrete intention, a willingness to do the next honest duty, and — if you can — one act of mercy toward someone poorer than you. Hedwig's intercession is asked most truthfully by people who still open their hands.",
        ],
        list: [
          "On or near October 16, hear Mass if you can. Mention her in the intercessions or privately after Communion.",
          "Read " + `{{${CBO}matthew/25/|Matthew 25}}` + " or " + `{{${CBO}luke/12/|Luke 12:13–34}}` + " aloud once.",
          "Begin the [[/blog/saint-hedwig-novena/|novena]] so day nine falls on the feast (start October 8), or begin any day of need.",
          "Put one gift that leaves the house: a pantry, a parish fund, a named family. She spent first.",
          "If the wound is unemployment rather than debt alone, pair this devotion with the [[/blog/novena-for-finding-employment/|novena for finding employment]].",
        ],
      },
    ],
    prayer: "Saint Hedwig, you left a court for the Cross and kept your purse open for the poor.\nTeach us your simplicity. Intercede for those who cannot see a way through their bills, and for those who have enough yet will not share.\nObtain for us honesty in what we owe, courage for the next duty, and the grace that outlasts every account: salvation in Christ. Amen.",
    prayerHeading: "A prayer to Saint Hedwig",
    related: [
      { href: "/blog/saint-hedwig-prayer/", label: "Saint Hedwig prayer" },
      { href: "/blog/saint-hedwig-novena/", label: "Saint Hedwig novena" },
      { href: "/blog/saint-hedwig-financial-help/", label: "Saint Hedwig and financial help" },
      { href: "/blog/novena-for-finding-employment/", label: "Novena for finding employment" },
      { href: "/blog/catholic-tithing-guide/", label: "Catholic giving and tithing" },
      { href: "/blog/novena-of-abandonment/", label: "Novena of abandonment" },
    ],
    faqs: [
      { question: "Who is Saint Hedwig?", answer: "Hedwig of Silesia (c. 1174–1243), a duchess who founded Trebnitz Abbey, served the poor and sick, lived as a Cistercian lay sister after her husband's death, and was canonized in 1267. Feast: October 16." },
      { question: "Is Saint Hedwig the same as Santa Edwiges?", answer: "Yes. Santa Edwiges is the Portuguese name for Saint Hedwig of Silesia. She is not Queen Jadwiga of Poland." },
      { question: "When is Saint Hedwig's feast day?", answer: "October 16. It is an optional memorial in the General Roman Calendar." },
      { question: "Is she the patron saint of finances or debt?", answer: "Popular devotion, especially in Brazil and Portugal, invokes her for debts and financial need because of her charity. That is pious custom, not a standalone Holy See title that replaces the Gospel on money." },
      { question: "Where can I find a Saint Hedwig prayer and novena?", answer: "On this site: /blog/saint-hedwig-prayer/ and /blog/saint-hedwig-novena/. Catholic Bible Online uses the same paths under catholicbibleonline.com/blog/." },
      { question: "Did Saint Hedwig take religious vows?", answer: "As a widow she wore the Cistercian habit as a lay sister but did not profess vows, so she could keep spending her income on charity." },
      { question: "Where is she buried?", answer: "In the abbey church at Trebnitz (Trzebnica). Remains associated with her sanctuary were identified again in modern times; the cultus is ancient." },
      { question: "How do I start praying to her?", answer: "Name the need, ask her intercession, read a short Gospel, and do one concrete act of justice or mercy the same day. Use the prayer and novena guides linked above." },
    ],
  },
  {
    slug: "saint-hedwig-prayer",
    title: "Saint Hedwig Prayer: Catholic Petitions for Need and Charity",
    h1: "Saint Hedwig Prayer: How to Ask Her Intercession Without a Bargain",
    description: "Catholic prayers to Saint Hedwig of Silesia: short petitions for need, gratitude, and charity, with Scripture — not a guaranteed debt miracle.",
    keywords: "saint hedwig prayer, st hedwig prayer, santa edwiges prayer, prayer to saint hedwig, hedwig prayer for debt, hedwig prayer for money",
    readTime: "11 min",
    datePublished: "2026-11-05",
    crumb: "Saint Hedwig Prayer",
    category: "Prayers & Devotions",
    lede: "A prayer to Saint Hedwig is an act of intercession: you ask a friend of God to pray with you. It is not a spell that clears a credit card. The best Hedwig prayers sound like her life — honest need, open hands, and love of the poor.",
    answer: "Catholics pray to Saint Hedwig by asking her to intercede before God for a named need — often poverty, debt, or the grace to live simply. Keep the prayer short, add an Our Father and Hail Mary if you wish, and couple it with duty and alms. Full texts and the same URL live on " + `{{${CBO_PRAYER}|Catholic Bible Online's Saint Hedwig prayer page}}` + ". Her life is told in " + `{{${CBO_HEDWIG}|the Saint Hedwig guide}}` + "; nine days are in " + `{{${CBO_NOVENA}|the novena}}` + "; money questions in " + `{{${CBO_FINANCE}|financial help}}` + ". Begin with " + `{{${CBO}matthew/6/|Matthew 6}}` + ".",
    facts: [
      { label: "Kind of prayer", value: "Intercession — she prays with you; God alone grants" },
      { label: "Best length", value: "One clear intention, two or three minutes" },
      { label: "When", value: "Any day; feast October 16" },
      { label: "Same URL on CBO", value: "catholicbibleonline.com/blog/saint-hedwig-prayer/" },
    ],
    timeline: [
      { when: "Any morning of need", what: "Name the bill, the landlord, the debt. Pray the short petition below." },
      { when: "After Mass", what: "Thank God first. Then ask Hedwig to join your petition." },
      { when: "When money arrives", what: "Pray the thanksgiving. Give a portion away if you can." },
      { when: "October 16", what: "Feast day — a natural day for the collect spirit: leave empty pomp for the Cross." },
    ],
    sections: [
      {
        id: "how-intercession-works",
        heading: "How prayer to a saint works",
        paragraphs: [
          "The Church teaches that the saints in heaven can pray for us (CCC 956, 2683). You do not worship Hedwig. You ask a sister who already sees God to speak for you. Christ alone saves; the saints accompany the Church with their prayers.",
          "Petition for daily bread is in the Our Father itself. Anxiety about money is named and answered in " + `{{${CBO}matthew/6/|Matthew 6:25–34}}` + ": seek first the kingdom. Paul can ask God for needs and still work (" + `{{${CBO}philippians/4/|Philippians 4:6–19}}` + "; " + `{{${CBO}2-corinthians/8/|2 Corinthians 8}}` + "). On wealth and contentment, read " + `{{${CBO}1-timothy/6/|1 Timothy 6}}` + ". Hedwig's prayer belongs in that company: ask, work, share.",
        ],
        callout: {
          label: "No guaranteed outcome",
          text: "If a card or video promises that nine days will erase every debt, close it. That is not Catholic. See [[/blog/saint-hedwig-financial-help/|financial help]] and " + `{{${CBO_FINANCE}|the same guide on Catholic Bible Online}}` + ".",
        },
      },
      {
        id: "short-prayers",
        heading: "Short prayers to Saint Hedwig",
        paragraphs: [
          "Use one. Repeat it daily if you are in a crisis. These are original texts for Guide Catholic — devotion, not Missal texts. Copy them with the button below the prayer section, or pray from " + `{{${CBO_PRAYER}|Catholic Bible Online}}` + ".",
        ],
        table: {
          caption: "Which prayer for which moment",
          headers: ["Situation", "What to ask"],
          rows: [
            ["Urgent bill or rent", "Intercession for help, honesty with creditors, next right step"],
            ["Chronic debt", "Courage to face numbers, amend habits, accept help"],
            ["Enough money, tight heart", "Simplicity like Hedwig; open hands to the poor"],
            ["After a gift received", "Thanksgiving; do not skip the poor who still wait"],
          ],
        },
        list: [
          "In need: \"Saint Hedwig, mother of the poor, you spent what you had on those who had less. Ask God for the help I need in (name it), and for a heart that stays honest and generous. Amen.\"",
          "For simplicity: \"Saint Hedwig, you wore the clothes of the poor while you held a duchess's purse for charity. Teach me to want less and to love more. Amen.\"",
          "In thanksgiving: \"God of Providence, through Saint Hedwig's prayers I give you thanks for (name it). Keep me from forgetting the poor. Amen.\"",
        ],
      },
      {
        id: "how-to-pray",
        heading: "A simple way to pray",
        paragraphs: [
          "Keep a pattern you can finish on a bad day. Link it to the [[/blog/saint-hedwig-novena/|novena]] when you need nine days of structure.",
        ],
        list: [
          "Sign of the Cross.",
          "One sentence naming the intention (write it once).",
          "The short prayer of need above — or the longer prayer at the end of this page.",
          "Our Father. Hail Mary. Glory Be.",
          "One verse: " + `{{${CBO}matthew/6/|Matthew 6:33}}` + " or " + `{{${CBO}matthew/25/|Matthew 25:40}}` + ".",
          "One duty the same day: call the creditor, open the spreadsheet, apply for help, or give a small alms.",
        ],
      },
      {
        id: "with-the-poor",
        heading: "Pray with open hands",
        paragraphs: [
          "Hedwig's intercession sits oddly with a prayer that never gives. Even a person in debt can offer time, a kind word, or a small share (" + `{{${CBO}luke/6/|Luke 6:38}}` + "; " + `{{${CBO}james/2/|James 2}}` + "). If you have received help, the [[/blog/catholic-tithing-guide/|Catholic guide to giving]] explains stewardship without treating God as a vendor.",
        ],
      },
    ],
    prayer: "O Saint Hedwig, you were the refuge of the poor and the friend of those in need.\nIn heaven you enjoy the reward of the charity you practiced on earth.\nBe my advocate before God, that I may receive the help I urgently need: (name the intention).\nObtain also for me the grace of a just and generous heart, and the supreme grace of eternal salvation.\nSaint Hedwig, pray for us. Amen.",
    prayerHeading: "A prayer to Saint Hedwig in need",
    related: [
      { href: "/blog/saint-hedwig/", label: "Saint Hedwig of Silesia" },
      { href: "/blog/saint-hedwig-novena/", label: "Saint Hedwig novena" },
      { href: "/blog/saint-hedwig-financial-help/", label: "Financial help" },
      { href: "/blog/novena-of-abandonment/", label: "Novena of abandonment" },
      { href: "/blog/catholic-tithing-guide/", label: "Catholic tithing" },
    ],
    faqs: [
      { question: "What is the Saint Hedwig prayer?", answer: "Any sincere petition asking her intercession. A common pattern thanks God for her charity, names a need, and asks for salvation as well as help." },
      { question: "Can I pray to Saint Hedwig for money?", answer: "Yes, as petition for legitimate need. No, as a demand that God owe you wealth. Pair prayer with honest work and justice toward creditors." },
      { question: "Is there an official Church prayer I must use?", answer: "The Mass of her memorial has official texts. Popular prayers are devotion. The texts on this page are original aids, not Missal propers." },
      { question: "How often should I pray it?", answer: "Daily in a crisis is fine. A novena gives nine consecutive days. Frequency does not purchase an outcome." },
      { question: "Where is the same guide on Catholic Bible Online?", answer: "https://catholicbibleonline.com/blog/saint-hedwig-prayer/ — the same path as this page." },
      { question: "Should I light a candle?", answer: "You may. A candle is a sacramental sign, not a fee. Prayer without superstition is enough." },
      { question: "What if nothing changes?", answer: "Keep praying, keep acting, consider confession and counsel. God's answer may be strength, a new path, or help through other people." },
      { question: "Can children pray this?", answer: "Yes. Teach them to name a real need and to share something small with someone else." },
    ],
  },
  {
    slug: "saint-hedwig-novena",
    title: "Saint Hedwig Novena: 9 Days of Prayer for Need and Trust",
    h1: "Saint Hedwig Novena: Nine Days with the Mother of the Poor",
    description: "A Catholic Saint Hedwig novena: nine days of Scripture and petition for need, debt, and trust in Providence — without promising a financial miracle.",
    keywords: "saint hedwig novena, st hedwig novena, santa edwiges novena, hedwig novena for debt, novena to saint hedwig, nine days hedwig",
    readTime: "13 min",
    datePublished: "2026-11-05",
    crumb: "Saint Hedwig Novena",
    category: "Prayers & Devotions",
    lede: "A Saint Hedwig novena is nine consecutive days of asking her intercession while you face a real need. It is structured trust — not a countdown that forces God's hand. Start any day, or begin October 8 so day nine is her feast.",
    answer: "Pray the Saint Hedwig novena for nine days: each day a short Scripture, the daily petition, and the [[/blog/saint-hedwig-prayer/|Saint Hedwig prayer]]. Name one intention. Do not skip justice toward those you owe. The day-by-day companion with the same URL is on " + `{{${CBO_NOVENA}|Catholic Bible Online's Saint Hedwig novena}}` + ". Her life: " + `{{${CBO_HEDWIG}|Saint Hedwig}}` + ". Money and debt: " + `{{${CBO_FINANCE}|financial help}}` + ".",
    facts: [
      { label: "Length", value: "Nine consecutive days" },
      { label: "Feast alignment", value: "Start October 8 for day nine on October 16" },
      { label: "Core intention", value: "One sentence — debt, rent, provision, a generous heart" },
      { label: "Same URL on CBO", value: "catholicbibleonline.com/blog/saint-hedwig-novena/" },
    ],
    timeline: [
      { when: "Day 1", what: "Trust, not panic — " + `{{${CBO}matthew/6/|Matthew 6:25–34}}` + "." },
      { when: "Day 2", what: "Christ in the poor — " + `{{${CBO}matthew/25/|Matthew 25:31–40}}` + "." },
      { when: "Day 3", what: "Treasure in heaven — " + `{{${CBO}luke/12/|Luke 12:13–34}}` + "." },
      { when: "Day 4", what: "Cheerful giving — " + `{{${CBO}2-corinthians/9/|2 Corinthians 9}}` + "." },
      { when: "Day 5", what: "Godliness with contentment — " + `{{${CBO}1-timothy/6/|1 Timothy 6:6–10}}` + "." },
      { when: "Day 6", what: "Owe no one anything except love — " + `{{${CBO}romans/13/|Romans 13:7–8}}` + "." },
      { when: "Day 7", what: "Faith and works — " + `{{${CBO}james/2/|James 2:14–17}}` + "." },
      { when: "Day 8", what: "Persevere in prayer — " + `{{${CBO}luke/18/|Luke 18:1–8}}` + "." },
      { when: "Day 9", what: "Providence that works for good — " + `{{${CBO}romans/8/|Romans 8:28}}` + "; feast if October 16." },
    ],
    sections: [
      {
        id: "what-this-novena-is",
        heading: "What this novena is — and is not",
        paragraphs: [
          "A novena is a Catholic custom of nine days of prayer. It is devotion, not a sacrament and not a rubric of the Missal. Popular \"debt novenas\" to Santa Edwiges are modern compositions built on Hedwig's charity. They can be holy. They become superstition when someone claims the wording itself forces payment (CCC 2111).",
          "This guide gives an original nine-day frame: Scripture from Catholic Bible Online, one repeated petition, and a daily duty. The twin page for the same path is " + `{{${CBO_NOVENA}|catholicbibleonline.com/blog/saint-hedwig-novena/}}` + ".",
        ],
        callout: {
          label: "Miss a day?",
          text: "Continue. A novena is not a machine that breaks. God is not watching for a technical foul.",
        },
      },
      {
        id: "how-to-pray-each-day",
        heading: "How to pray each day",
        paragraphs: [
          "Same shape every day. Change only the reading and, if you wish, a one-line focus from the table below.",
        ],
        list: [
          "Sign of the Cross.",
          "Name the intention in one sentence (same all nine days).",
          "Read that day's passage on Catholic Bible Online (links in the timeline above).",
          "Pray the daily petition (below) and the longer [[/blog/saint-hedwig-prayer/|Saint Hedwig prayer]].",
          "Our Father, Hail Mary, Glory Be.",
          "One concrete act: contact a creditor, track spending, apply for work, or give a small alms.",
        ],
        table: {
          caption: "Nine days — focus for the heart",
          headers: ["Day", "Focus", "Act"],
          rows: [
            ["1", "Seek the kingdom first", "Write the full amount you owe or need"],
            ["2", "See Christ in the poor", "Help someone with less than you"],
            ["3", "Loosen grip on stuff", "Cancel one needless expense"],
            ["4", "Give without drama", "Set aside a gift for parish or pantry"],
            ["5", "Contentment", "List three provisions you already have"],
            ["6", "Justice in debts", "Make or keep a payment plan"],
            ["7", "Faith that works", "Do the hard phone call you avoided"],
            ["8", "Perseverance", "Pray even if you feel nothing"],
            ["9", "Surrender the fruit", "Thanksgiving Mass if you can; trust the outcome to God"],
          ],
        },
      },
      {
        id: "daily-petition",
        heading: "Daily petition",
        paragraphs: [
          "Pray this each day after the reading. It is an original English devotion for this guide — not a translation of a copyrighted card.",
          "\"Saint Hedwig, you aided the poor and those in distress. Be my advocate, that God may grant the help I need: (intention). Obtain for me honesty, courage, and a heart open to the poor. Saint Hedwig, pray for us.\"",
          "On day nine, add thanksgiving whether or not the ledger has moved. Pair with [[/blog/saint-hedwig-financial-help/|financial help]] if the crisis is money, or [[/blog/novena-of-abandonment/|abandonment]] if the crisis is control.",
        ],
      },
      {
        id: "when-to-start",
        heading: "When to start",
        paragraphs: [
          "Any day. To end on the feast, begin October 8. In 2027, October 16 falls on a Saturday — still a good day for Mass and alms. If you need work more than a debt plan, begin also the [[/blog/novena-for-finding-employment/|employment novena]].",
        ],
      },
    ],
    prayer: "God our Father, you taught Saint Hedwig to leave the empty show of the world for the way of the Cross.\nThrough her prayers, give us strength for these nine days: to ask without bargaining, to work without despair, and to share without fear.\nWe ask this through Christ our Lord. Amen.",
    prayerHeading: "A prayer to begin the novena",
    related: [
      { href: "/blog/saint-hedwig/", label: "Saint Hedwig of Silesia" },
      { href: "/blog/saint-hedwig-prayer/", label: "Saint Hedwig prayer" },
      { href: "/blog/saint-hedwig-financial-help/", label: "Financial help" },
      { href: "/blog/novena-for-finding-employment/", label: "Novena for finding employment" },
      { href: "/blog/novena-of-abandonment/", label: "Novena of abandonment" },
    ],
    faqs: [
      { question: "How do I pray the Saint Hedwig novena?", answer: "Nine consecutive days: Scripture, the daily petition, the Saint Hedwig prayer, and one concrete duty. Details and the same URL are on Catholic Bible Online." },
      { question: "When should I start so I finish on October 16?", answer: "Begin October 8. You may also start any day of need." },
      { question: "Is this the official Church novena?", answer: "No. It is a popular devotion framed for Catholics. The only required liturgical texts are those of her Mass, if celebrated." },
      { question: "Can I pray it only for debts?", answer: "You may name debt as the intention. Also ask for conversion of habits and love of the poor — that matches her life." },
      { question: "What if I get the money on day three?", answer: "Finish the nine days in thanksgiving. Give something away. Do not treat the novena as finished business with God." },
      { question: "Where is the Catholic Bible Online version?", answer: "https://catholicbibleonline.com/blog/saint-hedwig-novena/ — same path as this page." },
      { question: "Can I pray with my family?", answer: "Yes. Keep the reading short. Let children name one person to help." },
      { question: "Does missing a day ruin it?", answer: "No. Continue. God is not a technician of novenas." },
    ],
  },
  {
    slug: "saint-hedwig-financial-help",
    title: "Saint Hedwig Financial Help: Debt, Need & Catholic Trust",
    h1: "Saint Hedwig and Financial Help: What Catholics May Ask — and What They Must Do",
    description: "Saint Hedwig and financial help: why the indebted ask her intercession, what Scripture says about debt and alms, and how to pray without the prosperity gospel.",
    keywords: "saint hedwig financial help, santa edwiges debts, st hedwig money, hedwig prayer for debt, catholic prayer for financial help, patron saint of debt",
    readTime: "12 min",
    datePublished: "2026-11-05",
    crumb: "Saint Hedwig Financial Help",
    category: "Prayers & Devotions",
    lede: "Catholics in debt ask Saint Hedwig for help because she spent a fortune on people who had none. That instinct is Christian. Turning her into a guarantee of cash is not. This page holds both truths: you may ask, and you must still act.",
    answer: "Saint Hedwig is invoked for financial help as popular devotion — especially as Santa Edwiges among Portuguese speakers — because her life was charity to the poor and distressed. Ask her intercession for rent, debt, and daily bread; then practice justice, work, and almsgiving. Scripture: " + `{{${CBO}matthew/6/|Matthew 6}}` + ", " + `{{${CBO}romans/13/|Romans 13:7–8}}` + ", " + `{{${CBO}1-timothy/6/|1 Timothy 6}}` + ". Same URL on " + `{{${CBO_FINANCE}|Catholic Bible Online}}` + ". Pray with " + `{{${CBO_PRAYER}|the prayer}}` + " and " + `{{${CBO_NOVENA}|the novena}}` + "; know her story in " + `{{${CBO_HEDWIG}|Saint Hedwig}}` + ".",
    facts: [
      { label: "Why people ask her", value: "She used wealth for the poor; tradition remembers aid to the distressed" },
      { label: "Official title?", value: "Popular devotion — not a substitute for the Gospel on money" },
      { label: "Catholic duty", value: "Pray, work, pay what you can, avoid new unjust debt" },
      { label: "Same URL on CBO", value: "catholicbibleonline.com/blog/saint-hedwig-financial-help/" },
    ],
    timeline: [
      { when: "In her lifetime", what: "Hospitals, lepers, monasteries, soft sentences, a purse kept free for charity." },
      { when: "After canonization", what: "Cultus as mother of the poor in Silesia and beyond." },
      { when: "In Portuguese devotion", what: "Santa Edwiges widely asked by those in debt — piety, not a Vatican banking title." },
      { when: "Today", what: "Petition + budget + confession of greed or despair + alms if possible." },
    ],
    sections: [
      {
        id: "why-hedwig-and-money",
        heading: "Why Saint Hedwig and money belong in the same sentence",
        paragraphs: [
          "Hedwig did not write a finance blog. She liquidated prestige. She kept legal freedom over her income as a widow precisely so the poor would still eat. Popular memory — including stories of prisoners and the destitute — made her a natural intercessor when money fails. That is analogy from her life, which is how many patronages begin.",
          "Say it cleanly for SEO and for conscience: many Catholics search \"Saint Hedwig financial help\" because they are afraid. Fear is allowed in the Psalms. " + `{{${CBO}philippians/4/|Philippians 4:6}}` + " says do not be anxious, but in everything by prayer and petition make your requests known. The request may be financial. The error is to treat Hedwig as a lender of last resort who must be paid in candles.",
        ],
        callout: {
          label: "Not the prosperity gospel",
          text: "Faithfulness is not measured by a raised credit score. God is not a supplier. See [[/blog/catholic-tithing-guide/|Catholic giving]] and [[/blog/novena-of-abandonment/|holy abandonment]].",
        },
      },
      {
        id: "what-scripture-says",
        heading: "What Scripture says about need and debt",
        paragraphs: [
          "Jesus forbids anxiety's throne, not the grocery list (" + `{{${CBO}matthew/6/|Matthew 6:25–34}}` + "). He identifies with the hungry and the stranger (" + `{{${CBO}matthew/25/|Matthew 25}}` + "). Paul tells believers to pay what is owed and to owe nothing except love (" + `{{${CBO}romans/13/|Romans 13:7–8}}` + "). The love of money — not money itself — is a root of evils (" + `{{${CBO}1-timothy/6/|1 Timothy 6:6–10}}` + "). Alms unlock a different economy (" + `{{${CBO}2-corinthians/9/|2 Corinthians 9}}` + "; " + `{{${CBO}tobit/4/|Tobit 4}}` + "; " + `{{${CBO}sirach/4/|Sirach 4}}` + ").",
        ],
        table: {
          caption: "Catholic response to a money crisis",
          headers: ["Temptation", "Catholic response"],
          rows: [
            ["\"If I pray hard enough, the debt vanishes.\"", "Pray and call the creditor. Providence uses means."],
            ["\"God wants me rich.\"", "God wants you holy. Wealth can be a tool or a trap."],
            ["\"I am too poor to give.\"", "Give something small, or give time. Hedwig's spirit is open hands."],
            ["\"I will hide and ignore the bills.\"", "Justice requires facing numbers. Shame is not a plan."],
            ["\"A novena replaces a budget.\"", "Use both. See the [[/blog/saint-hedwig-novena/|novena]]."],
          ],
        },
      },
      {
        id: "how-to-ask",
        heading: "How to ask Saint Hedwig for financial help",
        paragraphs: [
          "Be specific. \"Help with the October rent\" is better than \"make me prosperous.\" Use the [[/blog/saint-hedwig-prayer/|prayer]] daily and the [[/blog/saint-hedwig-novena/|novena]] when you need a container. The same paths on Catholic Bible Online are " + `{{${CBO_PRAYER}|saint-hedwig-prayer}}` + " and " + `{{${CBO_NOVENA}|saint-hedwig-novena}}` + ".",
        ],
        list: [
          "Write the intention and the amount. Pray with the number in view.",
          "Examine conscience: unjust spending, hidden debt, despair, refusal to work or to ask for help.",
          "Make a plan: payment order, nonprofit credit counsel, parish St. Vincent de Paul, family honesty.",
          "If the need is a job, add the [[/blog/novena-for-finding-employment/|novena for finding employment]].",
          "When relief comes, thank God and Hedwig — and help the next person.",
        ],
      },
      {
        id: "parish-and-works",
        heading: "Parish help and works of mercy",
        paragraphs: [
          "Hedwig built hospitals and houses. Your diocese may have Catholic Charities, a St. Vincent de Paul conference, or a parish benevolence fund. Asking the Church for help is not a failure of prayer; it is often how prayer is answered. " + `{{${CBO}acts/20/|Acts 20:35}}` + " still stands: it is more blessed to give than to receive — and sometimes you are the one who must receive first.",
        ],
      },
    ],
    prayer: "Saint Hedwig, you knew what a full purse was for: the hungry, the sick, the forgotten.\nI ask your intercession in my financial need: (name it).\nObtain from God the help that is truly good for my soul — work, relief, wise friends, a converted heart — and keep me from loving money more than mercy.\nMother of the poor, pray for us. Amen.",
    prayerHeading: "A prayer for financial help",
    related: [
      { href: "/blog/saint-hedwig/", label: "Saint Hedwig of Silesia" },
      { href: "/blog/saint-hedwig-prayer/", label: "Saint Hedwig prayer" },
      { href: "/blog/saint-hedwig-novena/", label: "Saint Hedwig novena" },
      { href: "/blog/novena-for-finding-employment/", label: "Novena for finding employment" },
      { href: "/blog/catholic-tithing-guide/", label: "Catholic tithing and stewardship" },
      { href: "/blog/novena-of-abandonment/", label: "Novena of abandonment" },
    ],
    faqs: [
      { question: "Is Saint Hedwig the patron saint of financial help?", answer: "She is widely invoked for debts and need in popular devotion because of her charity. Treat that as pious custom rooted in her life, not as a promise of wealth." },
      { question: "Can Catholics pray for money?", answer: "Yes, for legitimate needs. The Our Father asks for daily bread. Greed and superstition are the dangers, not the petition itself." },
      { question: "Will a Saint Hedwig novena pay my debts?", answer: "No novena guarantees payment. Pray, act justly, seek help. God may answer through a job, a gift, a restructured plan, or strength to endure." },
      { question: "What is the difference between this page and the novena?", answer: "This page explains financial need and Catholic ethics. The novena is the nine-day method. Use both." },
      { question: "Where is the same article on Catholic Bible Online?", answer: "https://catholicbibleonline.com/blog/saint-hedwig-financial-help/ — identical path." },
      { question: "Should I stop giving to the poor until I am stable?", answer: "Give in proportion. Even a small alms keeps the heart from closing. Hedwig gave from what she had while she had it." },
      { question: "What about predatory \"prayer for money\" content online?", answer: "Ignore promises, paid \"guaranteed\" rituals, and fear tactics. Stick to Scripture, the sacraments, and honest work." },
      { question: "Who else can I ask?", answer: "Saint Joseph the Worker for employment, and holy abandonment when you cannot steer the outcome. Links are in related reading." },
    ],
  },
];

export function saintHedwigGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return SAINT_HEDWIG_GUIDES.find((guide) => guide.slug === slug);
}
