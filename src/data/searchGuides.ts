export type Inline =
  | { t: "text"; v: string }
  | { t: "in"; href: string; label: string }
  | { t: "out"; href: string; label: string };

export type SearchGuide = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  excerpt: string;
  crumb: string;
  category: string;
  readTime: string;
  answer: string;
  cboUrl: string;
  cboLabel: string;
  cboNote: string;
  faqTitle: string;
  sections: { h2: string; paragraphs: Inline[][] }[];
  faqs: { question: string; answer: string }[];
};

const t = (v: string): Inline => ({ t: "text", v });
const inn = (href: string, label: string): Inline => ({ t: "in", href, label });
const out = (href: string, label: string): Inline => ({ t: "out", href, label });

export const searchGuides: SearchGuide[] = [
  {
    slug: "how-to-read-the-catholic-bible-online",
    h1: "How to Read the Catholic Bible Online",
    title: "How to Read the Catholic Bible Online (73 Books) | Guide Catholic",
    description: "Where to start the Catholic Bible online: the 73 books, the Gospels first, the Psalms, and a daily habit that lasts longer than a download.",
    keywords: "catholic bible online, read the catholic bible online, catholic bible free, 73 books of the bible, catholic bible reading plan, where to start reading the catholic bible",
    excerpt: "A Catholic Bible has 73 books. The useful question is not which app to install. It is which page to open tomorrow morning.",
    crumb: "Catholic Bible online",
    category: "Scripture Guide",
    readTime: "11 min",
    answer: "Start in the Gospel of Luke or John, read one chapter a day, and keep the Psalms beside it. A Catholic Bible includes the seven deuterocanonical books that a Protestant Bible leaves out. Read the whole chapter, not a clipped verse.",
    cboUrl: "https://catholicbibleonline.com/",
    cboLabel: "Read the Catholic Bible on Catholic Bible Online",
    cboNote: "The full Catholic Bible, the daily verse, and the prayers sit on one site. Open the book there, then come back here for how to keep the habit.",
    faqTitle: "Questions about reading the Catholic Bible online",
    sections: [
      {
        h2: "What a Catholic Bible contains",
        paragraphs: [
          [t("The canon the Church received has 46 books in the Old Testament and 27 in the New: 73 in all. Tobit, Judith, Wisdom, Sirach, Baruch, and 1 and 2 Maccabees belong in that list, along with the longer Greek form of Esther and Daniel. A site or app that stops at 66 books is not giving you the Catholic Bible, even when the translation is readable.")],
          [t("Online reading is legitimate. The Church does not require a paper volume before the Word counts. What it does require is the text the Church actually uses: the full canon, read as the Church reads it, in the liturgy and in private prayer. If you want the books in one place, start at "), out("https://catholicbibleonline.com/", "Catholic Bible Online"), t(".")],
        ],
      },
      {
        h2: "Where to begin if you have never finished a Gospel",
        paragraphs: [
          [t("Begin with Luke. It is written for someone who was not in the room: orderly, concrete, and full of the prayers the Church still says. The first chapter is the Annunciation and the Visitation. Read it as a chapter, then stop. One chapter is enough for a weekday."), out("https://catholicbibleonline.com/bible/luke/1/", " Luke 1")],
          [t("If Luke feels long, begin with John and stay with the signs: water into wine, the man born blind, Lazarus, the supper, the cross, the empty tomb. John is slower. That is the point. You are not collecting verses for a caption. You are meeting a person.")],
          [t("After a Gospel, read Acts, then one letter of Paul, then Genesis. Leave Revelation until you have lived with the Gospels for a while. It is not a codebook. It is a vision of the Lamb who was slain, and it assumes you already know who he is.")],
        ],
      },
      {
        h2: "How to keep a page open for more than a week",
        paragraphs: [
          [t("Pick a time you already have: the kettle, the train, the ten minutes before the children wake. Read the same amount every day. When you miss a day, start again at the next chapter. Do not try to catch up. The goal is a life with Scripture, not a streak.")],
          [t("Keep three questions in a notebook. What does this passage say happened? What does it say about Christ? What will I actually do before tonight? If you cannot answer the third, you have not finished the reading. The "), inn("/daily-verses/", "verse of the day"), t(" is a short companion, not a replacement for the chapter.")],
          [t("The Psalms are the Church's prayer book. Catholic numbering does not always match a Protestant app. When you look up a psalm online, open the book of Psalms and find the number in that Catholic text, rather than trusting a link built for another canon."), out("https://catholicbibleonline.com/bible/psalms/", " The Psalms")],
        ],
      },
      {
        h2: "What online reading cannot replace",
        paragraphs: [
          [t("A screen will not get you to Mass. The same Scriptures are proclaimed there, and the Church hears them as one body before she receives the Eucharist. Private reading prepares you to recognize the passage when it is read aloud. It does not stand in for Sunday.")],
          [t("If a verse frightens you or seems to contradict what you were taught, do not build a private doctrine out of it. Ask a priest, or read the passage again inside the chapter. The Church reads Scripture with the creeds, the councils, and the saints. A single highlighted line is not the whole faith.")],
        ],
      },
    ],
    faqs: [
      { question: "Is it allowed to read the Bible on a phone?", answer: "Yes. The Church asks Catholics to know the Scriptures. A phone, a printed Bible, and the readings at Mass are three ways of meeting the same Word. What matters is the full Catholic canon and a habit you can keep." },
      { question: "How many books are in the Catholic Bible?", answer: "Seventy-three: 46 in the Old Testament and 27 in the New Testament. The extra Old Testament books, compared with most Protestant Bibles, are the deuterocanonical books the Church received from the Greek Scriptures." },
      { question: "Which Gospel should a beginner read first?", answer: "Luke or John. Luke is the clearest narrative for a new reader. John stays longer with who Jesus is. Matthew is the Gospel of the Church's teaching, and it is a good second book." },
      { question: "Should I follow a one-year Bible plan?", answer: "A plan helps if you will actually open it. If a plan makes you quit in February, drop the plan and read one Gospel chapter a day. Finishing Luke is better than abandoning a schedule." },
      { question: "Where can I read the Catholic Bible free online?", answer: "Catholic Bible Online publishes the books, a daily verse, and Catholic prayers in one place. Use it for the text, and use a parish or a priest when a passage needs the Church's reading." },
    ],
  },
  {
    slug: "how-to-pray-st-joseph-novena-buying-house",
    h1: "St. Joseph Novena for Buying a House",
    title: "St. Joseph Novena for Buying a House | Guide Catholic",
    description: "How to pray the St. Joseph novena when you are buying a house: nine days, what to ask, the statue custom, and what the Church does not promise.",
    keywords: "st joseph novena for buying a house, novena to saint joseph for a house, prayer to st joseph to sell a house, st joseph house novena, saint joseph home prayer",
    excerpt: "Catholics ask St. Joseph for a home because he kept the Holy Family under a roof. The novena is nine days of petition. It is not a method for forcing a closing.",
    crumb: "St. Joseph house novena",
    category: "Prayers & Devotions",
    readTime: "12 min",
    answer: "Pray for nine days, once a day, asking St. Joseph for a home that is honest, safe, and within what you can pay. Tell him the address, the fear, and the budget. Then do the ordinary work: inspection, contract, counsel. God is not obliged to hand you the house you circled in an app.",
    cboUrl: "https://catholicbibleonline.com/blog/novena-saint-joseph-buying-house/",
    cboLabel: "St. Joseph novena for buying a house on Catholic Bible Online",
    cboNote: "The nine-day devotion, with the prayers set out for each day, is published on Catholic Bible Online. What follows here is how a Catholic should pray it without turning Joseph into a charm.",
    faqTitle: "Questions about the St. Joseph house novena",
    sections: [
      {
        h2: "Why Catholics ask Joseph for a house",
        paragraphs: [
          [t("Joseph was told to take Mary and the child and go. He found them a place in Bethlehem, then in Egypt, then in Nazareth. He is the patron of the universal Church and of a happy death, and in the devotion of the faithful he is also the man you ask when a family needs a roof. "), out("https://catholicbibleonline.com/bible/matthew/2/", "Matthew 2"), t(" is the chapter: the dream, the flight, the return.")],
          [t("A novena is nine days of the same petition. You may use the traditional prayers to St. Joseph, an Our Father, a Hail Mary, and a Glory Be, and then say in your own words what you need. The "), inn("/blog/prayer-to-st-joseph/", "older prayer to St. Joseph"), t(" is a good spine for the nine days. Add the house. Do not replace the prayer with a wish list.")],
        ],
      },
      {
        h2: "How to pray the nine days",
        paragraphs: [
          [t("Choose an hour you will keep: morning before email, or night after the children are in bed. Begin with the sign of the cross. Read a few lines of Matthew 1, where Joseph obeys the angel and takes Mary into his home. Then pray the Our Father, the Hail Mary, and the Glory Be. Name the need in one sentence. End with: St. Joseph, foster father of Jesus, pray for us.")],
          [t("Write down the facts you are not hiding from God. The price you can pay. The city. The people who will live there. A parent you may have to move. A debt you already carry. Joseph was a just man. A just prayer does not ask him to help you sign what you cannot afford.")],
          [t("If you miss a day, pray it when you remember and continue. You do not restart as a penalty. You also do not stack nine prayers on the last night and call it fidelity. The form teaches perseverance. The "), inn("/blog/st-joseph-novena-buying-house-guide/", "longer house guide"), t(" walks through the statue custom and the blessing of a home after you have the keys.")],
        ],
      },
      {
        h2: "The buried statue is a custom, not a sacrament",
        paragraphs: [
          [t("Some Catholics bury a small statue of St. Joseph upside down in the yard of a house they hope to sell, and dig it up when the sale closes. It is a folk custom. It is not in the liturgy. It does not bind God. If you use it, treat it as a reminder to pray, not as a lever. Do not bury someone else's property. Do not skip the inspection because a statue is in the dirt.")],
          [t("What the Church does give you, once you own the house, is a blessing. Ask the priest. Holy water, a short rite, and a family that knows the rooms have been put under God's care: that is the Catholic act. The novena leads toward that day. It does not replace it.")],
        ],
      },
      {
        h2: "What you may not ask Joseph to do",
        paragraphs: [
          [t("Do not ask him to hide a defect from a buyer, to push another family out of a bid, or to make a lender ignore the truth. A house obtained by fraud is not a gift from the foster father of Jesus. Pray for a just price, for patience if this house is not the one, and for the people who will be disappointed if you are.")],
          [t("If the nine days end and the offer fails, pray a second novena if you still need to. Or stop and sit with the no. Providence is not a failed transaction. Joseph himself was sent to Egypt with no listing and no closing date. Obedience was the miracle.")],
        ],
      },
    ],
    faqs: [
      { question: "How many days is the St. Joseph house novena?", answer: "Nine days. Pray once a day, at the same hour if you can. If you miss a day, continue the next day. You are asking a saint to pray with you, not completing a contract." },
      { question: "Do I have to bury a statue of St. Joseph?", answer: "No. Burying a statue is a popular custom, not a teaching of the Church. The novena itself is the prayer. A blessing of the home, after you have it, is the liturgical act." },
      { question: "Can I pray this while selling, not buying?", answer: "Yes. Joseph is asked for a just sale as well as a just purchase. Tell the truth in the listing. Ask for a buyer who can actually live there, and for the wisdom not to cling to a price that is fantasy." },
      { question: "Which Gospel should I read during the novena?", answer: "Matthew 1 and Matthew 2. They show Joseph hearing the angel and acting at once: taking Mary home, fleeing to Egypt, returning to Nazareth." },
      { question: "Will St. Joseph get me the house?", answer: "He will pray with you. God may give the house, delay it, or give a different one. The novena is trust, not a guarantee of a particular address." },
    ],
  },
  {
    slug: "st-michaels-lent-novena-how-to-pray",
    h1: "How to Pray the St. Michael's Lent Novena",
    title: "St. Michael's Lent Novena Prayer Guide | Guide Catholic",
    description: "What St. Michael's Lent is, how the novena is prayed in the United States, and what a Catholic should fast, say, and not promise.",
    keywords: "st michael's lent novena, st michaels lent prayer guide, michaelmas lent, st michael lent 2026, prayer to st michael the archangel",
    excerpt: "St. Michael's Lent is an old Franciscan custom from the Assumption to Michaelmas. The novena that goes with it is prayer and a chosen fast. It is not a second Lent imposed by the Church.",
    crumb: "St. Michael's Lent novena",
    category: "Prayers & Devotions",
    readTime: "12 min",
    answer: "St. Michael's Lent runs from August 15 to September 29. In 2026 that season has already ended. The next one begins on August 15, 2027. You pray the St. Michael prayer, keep a fast you have actually chosen, and ask the archangel to defend you in the fight you are really in.",
    cboUrl: "https://catholicbibleonline.com/blog/st-michaels-lent-novena-prayer-guide-us-2026/",
    cboLabel: "St. Michael's Lent novena prayer guide on Catholic Bible Online",
    cboNote: "Catholic Bible Online keeps a prayer guide for Catholics in the United States who want the season in plain steps. This page is the judgment underneath those steps: what the custom is, and what it is not.",
    faqTitle: "Questions about the St. Michael's Lent novena",
    sections: [
      {
        h2: "What the season actually is",
        paragraphs: [
          [t("From at least the time of St. Francis, some Franciscans kept a fast from the feast of the Assumption, August 15, to the feast of St. Michael, September 29. Francis himself is said to have kept it at La Verna before he received the stigmata. The Church has never made this fast a universal law. Ash Wednesday and Good Friday remain the days of fast that bind Latin Catholics who are obliged.")],
          [t("People still search for it because the forty-six days have a shape: a beginning on a Marian feast, an end on the angel who casts down the accuser, and a prayer in the middle that Pope Leo XIII asked the Church to say. If you want the United States dates and the way parishes talk about it, the "), inn("/blog/st-michaels-lent-novena-prayer-guide-us-2026/", "2026 prayer guide"), t(" is already on this site. The text of the daily prayers lives on Catholic Bible Online.")],
        ],
      },
      {
        h2: "What to pray",
        paragraphs: [
          [t("Each day, pray the prayer to St. Michael the Archangel. It is short. It asks him to defend us in battle and to be our safeguard against the wickedness and snares of the devil. Add an Our Father, a Hail Mary, and a Glory Be. Read "), out("https://catholicbibleonline.com/bible/revelation/12/", "Revelation 12"), t(": the woman, the dragon, and Michael and his angels fighting.")],
          [t("If you want a longer devotion, pray one decade of the Rosary for the Church and one for your own house. Do not invent a new war. Name the actual fight: a habit you will not drop, a person you keep attacking in your mind, a fear that runs the evening. Michael is not a mascot for online anger.")],
        ],
      },
      {
        h2: "What to fast, and who should not",
        paragraphs: [
          [t("Choose one real thing: a meal, meat on certain days, the hour you usually give to a screen, or the drink you use to end the day. Tell your confessor if the fast is severe. Children, pregnant women, the sick, and the elderly are not the audience for a heroic fast. St. Michael's Lent observed badly becomes irritability with the people you live with. That is not victory over the dragon.")],
          [t("In 2026 the season ran from August 15 through September 29. If you are reading this after Michaelmas, do not pretend the fast is still on. Keep the prayer. Prepare for August 15, 2027, which falls on a Sunday. The next Michaelmas is Wednesday, September 29, 2027.")],
        ],
      },
      {
        h2: "How this differs from the day-by-day novena",
        paragraphs: [
          [t("A prayer guide tells you what the season is for. The 46-day novena gives you a page for each date. Both are useful. Neither is required. If you only have ten minutes, pray the St. Michael prayer and keep the one fast. If you want every day written out, use the novena index rather than trying to hold forty-six intentions in your head."), inn("/blog/st-michaels-lent-46-day-novena/", " The 46-day novena")],
        ],
      },
    ],
    faqs: [
      { question: "Is St. Michael's Lent obligatory?", answer: "No. It is a devotional custom, strong among Franciscans and popular again in the United States. The required fast days in the Latin Church are Ash Wednesday and Good Friday, for those who are bound by the law." },
      { question: "When is St. Michael's Lent?", answer: "From August 15, the Assumption, through September 29, the feast of the Archangels. In 2026 those dates have passed. The next season begins August 15, 2027." },
      { question: "What prayer do I say each day?", answer: "The prayer to St. Michael the Archangel, with an Our Father, a Hail Mary, and a Glory Be. Read Revelation 12 if you want the Scripture that names Michael's battle." },
      { question: "Can I start late?", answer: "Yes. Begin on the day you remember, keep the fast you chose, and finish on September 29. Missing the first week does not cancel the rest." },
      { question: "Where are the daily prayers written out?", answer: "Catholic Bible Online publishes the St. Michael's Lent novena prayer guide for the United States and a separate page for each day of the 46." },
    ],
  },
  {
    slug: "st-michaels-lent-46-day-novena",
    h1: "The 46-Day St. Michael's Lent Novena",
    title: "46-Day St. Michael's Lent Novena | Guide Catholic",
    description: "How the 46 days from August 15 to September 29 are counted, what to do if you miss a day, and where each day's prayer is written.",
    keywords: "st michael's lent novena, 46 day novena, st michaels lent day 1, michaelmas novena, st michael lent calendar",
    excerpt: "Count August 15 through September 29 and you get forty-six days. That is the whole length of St. Michael's Lent, prayed as one novena with a page for each morning.",
    crumb: "46-day novena",
    category: "Prayers & Devotions",
    readTime: "10 min",
    answer: "Day 1 is August 15. Day 46 is September 29. Each day has the same bones: the St. Michael prayer, a short reading, and one intention. Missing a day does not make you start over. In 2026 the forty-six days are finished. Use the map now so 2027 is not a scramble on the eve of the Assumption.",
    cboUrl: "https://catholicbibleonline.com/novenas/st-michaels-lent-novena/",
    cboLabel: "All 46 days of the St. Michael's Lent novena",
    cboNote: "The day-by-day novena, from the Assumption to Michaelmas, is laid out on Catholic Bible Online. Open that index when you want the prayer for a numbered day. This page explains how the count works.",
    faqTitle: "Questions about the 46 days",
    sections: [
      {
        h2: "How the forty-six days are counted",
        paragraphs: [
          [t("August has 31 days. From the 15th through the 31st is 17 days. September 1 through September 29 is 29 days. Seventeen plus twenty-nine is forty-six. Both feasts are included: you begin on Our Lady's day and you close on St. Michael's day. Skip either endpoint and the popular count no longer matches the novena people are searching for.")],
          [t("This is longer than a nine-day novena and shorter than a vague 'season of prayer.' The length is the devotion. It asks you to still be praying in the third week of September, when the first fervor has cooled. That is why the days are numbered instead of left as a mood.")],
        ],
      },
      {
        h2: "What stays the same every morning",
        paragraphs: [
          [t("Make the sign of the cross. Say the prayer to St. Michael. Add the Our Father, the Hail Mary, and the Glory Be. Read the few lines appointed for that day if you are following a written novena. Name one intention and do not add ten more. Then go to work. A novena that takes an hour will die before day 12 unless you are a monk.")],
          [t("The Scripture to keep in front of you is the war in heaven and the prayers for the Church on earth. "), out("https://catholicbibleonline.com/bible/revelation/12/", "Revelation 12"), t(" names Michael. The "), inn("/blog/saint-michael-archangel/", "guide to the archangel"), t(" explains who he is in Catholic devotion, so the novena is not just a calendar.")],
        ],
      },
      {
        h2: "If you miss a day, or miss the first week",
        paragraphs: [
          [t("Pray the day you are actually on. Do not go back to reconstruct a perfect record. God is not grading attendance. If you begin on August 20, that morning is day 6, not a private day 1. The feast at the end is fixed. Your start is not.")],
          [t("In 2026 the last day was September 29. The next day 1 is August 15, 2027. Between now and then, pray the St. Michael prayer on ordinary Tuesdays, or on the 29th of the month, and decide the one fast you will keep when the season returns. The "), inn("/blog/st-michaels-lent-novena-how-to-pray/", "prayer guide"), t(" is the place for that decision. The numbered pages are the place for the words.")],
        ],
      },
      {
        h2: "What the novena will not do",
        paragraphs: [
          [t("It will not make you immune to temptation, win a culture war, or replace confession. Michael defends. He does not excuse. If the forty-six days become a performance you describe to other people and a temper you inflict on your house, stop and go to the sacrament. The dragon in Revelation accuses. A novena that turns you into an accuser has switched sides.")],
        ],
      },
    ],
    faqs: [
      { question: "Why is St. Michael's Lent 46 days?", answer: "Because the devotion runs from August 15 to September 29 inclusive. That span is 17 days in August and 29 days in September." },
      { question: "Is day 1 always August 15?", answer: "Yes, in this novena. Day 46 is September 29. If you join late, use the calendar date, not a restarted count." },
      { question: "Where do I read each day's prayer?", answer: "Catholic Bible Online has the full index of the St. Michael's Lent novena, with a page for every day." },
      { question: "Did I miss it in 2026?", answer: "Yes, if you are reading after September 29, 2026. Keep the St. Michael prayer now. Begin the 46 days again on August 15, 2027." },
      { question: "Is this the same as a nine-day novena to St. Michael?", answer: "No. A nine-day novena can be prayed any time. These 46 days are tied to the dates between the Assumption and Michaelmas." },
    ],
  },
  {
    slug: "catholic-bible-verse-generator",
    h1: "Catholic Bible Verse Generator",
    title: "Catholic Bible Verse Generator | Guide Catholic",
    description: "How to use a Catholic Bible verse generator without turning Scripture into a fortune, and where to open a random verse right now.",
    keywords: "bible verse generator, catholic bible verse generator, random bible verse, random scripture generator, verse generator catholic",
    excerpt: "A verse generator gives you one passage when you do not know where to open the book. It is a door. It is not a voice that settles your decision.",
    crumb: "Verse generator",
    category: "Scripture Guide",
    readTime: "9 min",
    answer: "Use a Catholic verse generator when you want a real verse from the Catholic Bible, then read the whole chapter it came from. Do not pull the verse to bless a choice you have already made. For a verse that waits on the page until you click, open the generator. For one verse chosen for the date, use the verse of the day.",
    cboUrl: "https://catholicbibleonline.com/verse-generator/",
    cboLabel: "Open the Bible verse generator on Catholic Bible Online",
    cboNote: "The generator on Catholic Bible Online draws a verse from the Catholic Scriptures. Use it when you want a passage now, then stay with the chapter long enough to know what you were given.",
    faqTitle: "Questions about a Bible verse generator",
    sections: [
      {
        h2: "What the generator is for",
        paragraphs: [
          [t("You open it, you receive a reference and a verse, and you stop pretending you will 'get to the Bible later.' That is a good use. Students use it to find a line to copy into a notebook. Someone on a lunch break uses it to have one true sentence in the middle of a loud day. The "), inn("/random-bible-verse/", "random Bible verse"), t(" on this site works the same way: one passage, then the chapter.")],
          [t("A Catholic generator should draw on the Catholic canon, not a 66-book list with Protestant psalm numbers quietly assumed. If the verse is from Wisdom, Sirach, or Tobit, you are in the right book. If every result sounds like a poster, you are being served a mood, not a Bible.")],
        ],
      },
      {
        h2: "How to read the verse you are given",
        paragraphs: [
          [t("Read it twice. Then open the chapter. A line about courage may sit in a warning. A line about peace may sit in a passion narrative. The verse you were handed is a door into that chapter, which you can read free on "), out("https://catholicbibleonline.com/", "Catholic Bible Online"), t(". The Psalms, especially, should be opened from the Catholic book of Psalms, not from a link that assumes another numbering."), out("https://catholicbibleonline.com/bible/psalms/", " The Psalms")],
          [t("Write one sentence: what this verse asks of me before tonight. If the honest answer is 'nothing, I wanted a feeling,' say so, and read the chapter anyway. Scripture survives that honesty. It does not survive being used as a costume.")],
        ],
      },
      {
        h2: "What a random verse must not decide",
        paragraphs: [
          [t("Do not use it to choose a spouse, a surgery, a job, or a fight. That is bibliomancy: treating the book as a lot you cast. The Church reads Scripture in the liturgy, with the creeds, over years. A click is not that. If you are trying to hear God about a grave choice, pray, go to Mass, and talk to a priest. Let the generator be a beginning of reading, not an oracle.")],
          [t("The "), inn("/daily-verses/", "verse of the day"), t(" is different again. It is tied to the date, so a household can share one passage. The generator is for the moment you ask. Neither one replaces the Sunday Gospel.")],
        ],
      },
    ],
    faqs: [
      { question: "Is a random Bible verse a message from God?", answer: "It is a verse from Scripture, and Scripture is God's Word. The random draw is not a private revelation about your afternoon. Read it as the Church reads it: inside the chapter, inside the faith." },
      { question: "What is the difference between a verse generator and the verse of the day?", answer: "The generator gives you a verse when you ask. The verse of the day gives everyone the same passage for that date. Both should lead you into the chapter." },
      { question: "Can I use a generator for lectio divina?", answer: "You can use the verse as the start of lectio: read, think, pray, sit still. If you keep clicking until you like the verse, you have left lectio and started shopping." },
      { question: "Where is a Catholic verse generator?", answer: "Catholic Bible Online has one. Guide Catholic also has a random Bible verse page. Use either, then open the full chapter." },
      { question: "Should I post the verse I generate?", answer: "A short quotation, with the reference, is fine. Do not paste a long copyrighted translation. And do not post a verse as if it settled someone else's life." },
    ],
  },
  {
    slug: "catholic-novena-for-work-and-business",
    h1: "Catholic Novena for Work and Business",
    title: "Catholic Novena for Business and Work | Guide Catholic",
    description: "A Catholic novena for work, a business, or a job: what to ask St. Joseph, what honest success means, and what prayer will not fix.",
    keywords: "novena for business success, catholic prayer for business, novena for work, prayer for a job catholic, st joseph worker novena",
    excerpt: "Catholics may ask God for work that feeds a household. The novena is for honest labor, just pay, and the wisdom not to lie. It is not a spell for revenue.",
    crumb: "Novena for work",
    category: "Prayers & Devotions",
    readTime: "11 min",
    answer: "Pray nine days for the work in front of you: a job you need, a shop you are trying to keep open, payroll you are afraid of missing. Ask for bread, for justice, and for a clean conscience. Do not ask God to make a dishonest deal succeed.",
    cboUrl: "https://catholicbibleonline.com/novenas/business-success/",
    cboLabel: "Novena for business success on Catholic Bible Online",
    cboNote: "The business novena, prayed as a Catholic devotion and not as a prosperity technique, is on Catholic Bible Online. Here is how to pray it without confusing profit with blessing.",
    faqTitle: "Questions about a novena for work",
    sections: [
      {
        h2: "What a Catholic means by success",
        paragraphs: [
          [t("Success, in the Gospel, is not a balance sheet. It is a life that can stand in front of Christ. Still, households need wages. St. Joseph worked with his hands. The Church has always prayed for daily bread, which includes the work that buys it. A novena for a business is allowed. A novena that treats God as an investor is not.")],
          [t("Pray for customers who are told the truth, for employees who are paid on time, for the humility to close what should close, and for a job if you do not have one. "), out("https://catholicbibleonline.com/bible/matthew/6/", "Matthew 6"), t(" is the chapter to read on the first day: you cannot serve God and money, and your Father knows what you need.")],
        ],
      },
      {
        h2: "How to pray the nine days",
        paragraphs: [
          [t("Morning is better than the anxious hour after midnight. Sign of the cross. Our Father, Hail Mary, Glory Be. A short prayer to St. Joseph the Worker. Then one sentence that states the real problem: the invoice, the interview, the partner, the rent. Stop. Go do the next competent thing. Prayer is not a substitute for a bid, a résumé, or a hard conversation.")],
          [t("On day 3, pray for the people you employ or the person who employs you. On day 6, pray for the customer you are tempted to cheat. On day 9, pray for the grace to hear a no. If you only pray for increase, you are not yet praying as a Christian. The nine days are written out in the "), out("https://catholicbibleonline.com/novenas/business-success/", "novena for business success"), t(".")],
        ],
      },
      {
        h2: "What you still have to do",
        paragraphs: [
          [t("Keep books that a stranger could audit. Pay what you owe. Do not ask St. Joseph to bless a wage you know is unjust, or a product you would not sell to your own mother. If the business is failing because of your laziness, the novena should make that obvious, not hide it. Confession is part of the devotion when the failure is moral.")],
          [t("If you need work, apply. Tell one person the truth about your situation. Show up. The "), inn("/blog/how-to-pray-st-joseph-novena-buying-house/", "house novena"), t(" is a different petition. Do not fold the mortgage, the job, and the miracle you want into one vague demand. Name the work.")],
        ],
      },
      {
        h2: "When the novena ends in a loss",
        paragraphs: [
          [t("Some shops close. Some interviews end in silence. That is not proof that you prayed badly. It is a fact you bring back to prayer the next morning. Ask for the next piece of bread, and for the strength not to become bitter toward people whose businesses survived. Joseph took the child to Egypt. The workshop in Nazareth was not a promise that every workshop stands.")],
        ],
      },
    ],
    faqs: [
      { question: "Is a novena for business success Catholic?", answer: "Yes, if you are asking for honest work, daily bread, and justice. It is not Catholic if you are trying to purchase a profit from God." },
      { question: "Whom should I ask to pray with me?", answer: "St. Joseph the Worker is the ordinary patron. You may also ask your guardian angel and the saint whose name you carry. The petition is still addressed to God." },
      { question: "How long is the novena?", answer: "Nine days, once a day. The prayers are published on Catholic Bible Online under the business success novena." },
      { question: "Can I pray this if I am unemployed?", answer: "Yes. Ask for work you can do, for the humility to take a smaller job, and for the people who depend on your wage. Then apply for the job." },
      { question: "Does God want my business to grow?", answer: "God wants you to be faithful. Growth that is honest can be a blessing. Growth that costs your soul, your family, or someone else's wage is not the success the novena is for." },
    ],
  },
  {
    slug: "st-joseph-house-novena-2026",
    h1: "St. Joseph Novena for Buying a House in 2026",
    title: "St. Joseph Novena for Buying a House (2026) | Guide Catholic",
    description: "The 2026 St. Joseph novena if you are trying to buy a house this year: when to start the nine days, what to pray before an inspection, and what not to promise God.",
    keywords: "st joseph novena for buying a house 2026, st joseph house prayer 2026, novena to buy a house this year, saint joseph home buyer prayer",
    excerpt: "It is still 2026. If you are trying to buy before the year ends, the novena has a date attached to it: nine days that include the inspection, the offer, or the night you almost panic.",
    crumb: "House novena 2026",
    category: "Prayers & Devotions",
    readTime: "11 min",
    answer: "Today is in the last quarter of 2026. Start the nine days on a morning you can keep, not on the night the offer expires. Ask St. Joseph for a house you can pay for in this market, and for the freedom to walk away from one you cannot. The year on the calendar does not put God in your debt.",
    cboUrl: "https://catholicbibleonline.com/blog/st-joseph-novena-for-buying-a-house-2026/",
    cboLabel: "St. Joseph novena for buying a house in 2026",
    cboNote: "Catholic Bible Online has the 2026 form of the St. Joseph house novena. Use that for the daily prayers. Use this page to decide when, in what is left of 2026, those nine days should fall.",
    faqTitle: "Questions about the 2026 house novena",
    sections: [
      {
        h2: "Why 2026 still changes the prayer",
        paragraphs: [
          [t("The prayer to St. Joseph is old. The market you are walking into is not. In October 2026 you are not praying in the abstract. You are praying with a rate you have been quoted, a lease that ends, a school year already underway, or parents who cannot climb the stairs in the house they have. Put those facts in the petition. A generic 'bless our home search' wastes the year you were given.")],
          [t("The nine-day shape is the same one explained in the "), inn("/blog/how-to-pray-st-joseph-novena-buying-house/", "evergreen house novena"), t(". What changes in 2026 is the timing. Count backward from the decision. If the inspection is on a Thursday, let that Thursday be day 6 or day 7, not an afterthought.")],
        ],
      },
      {
        h2: "A nine-day plan for what is left of the year",
        paragraphs: [
          [t("Day 1: name the budget out loud, the real one. Day 2: pray for the seller and for any family you are bidding against. Day 3: read "), out("https://catholicbibleonline.com/bible/matthew/1/", "Matthew 1"), t(", Joseph taking Mary into his home. Day 4: pray about the commute, the parish, and the people who will live in the rooms. Day 5: ask for an honest inspector and the courage to believe the report. Day 6: the offer or the walk-away. Day 7: the people you love who disagree with you. Day 8: the debt you will carry. Day 9: gratitude, whether you have keys or a no.")],
          [t("If you are selling in order to buy, do not run two superstitions at once. One novena, one intention, one household. The daily prayers for this year are on Catholic Bible Online. Do not collect three versions and pray all of them out of fear.")],
        ],
      },
      {
        h2: "What to do the week you almost sign",
        paragraphs: [
          [t("Go to Mass on Sunday before you sign, if you can. Go to confession if the process has made you sharp with your spouse or willing to hide a fact. Ask a calm person, not the most excited person you know, to read the numbers. St. Joseph was a just man. Justice in 2026 includes the monthly payment in the month you also pay for heat.")],
          [t("After a closing, have the house blessed. Before a closing, do not bury a statue in a yard you do not own. The custom is discussed in the longer guide. In a tight year it becomes frantic. Pray with a statue on a table in your current home. That is enough.")],
        ],
      },
      {
        h2: "If 2026 ends without the house",
        paragraphs: [
          [t("You may pray the novena again in January. You may also be being told to stay. Both are possible. Do not spend Advent punishing God for a closing that did not happen. Keep Joseph's feast in mind for next March 19, and keep paying the rent you have. Fidelity through a winter in the wrong apartment is also a way of living with the foster father of Jesus.")],
        ],
      },
    ],
    faqs: [
      { question: "Is there a special St. Joseph novena for 2026?", answer: "The prayers are the traditional ones. The 2026 guide simply sets them inside this year's search: the dates, the budget, and the decision you are actually facing." },
      { question: "When should I start the nine days?", answer: "Start so that the hardest day, often the inspection or the offer, falls inside the nine days, not the night after. Any morning you can repeat is a valid day 1." },
      { question: "We are renting. Can we still pray this in 2026?", answer: "Yes. A first rental, a safer rental, or a lease that lets a family stay put is a just thing to ask. Say so plainly. Joseph looked for a room in Bethlehem before he had a house in Nazareth." },
      { question: "Where are the 2026 daily prayers?", answer: "On Catholic Bible Online, in the St. Joseph novena for buying a house in 2026. Pray those words. Do the work on this page." },
      { question: "What if we close and then feel guilty?", answer: "Thank God. Bless the house. Be generous to someone who is still searching. Guilt is not required. Waste and boasting are." },
    ],
  },
  {
    slug: "novena-for-protection-of-children",
    h1: "Novena for the Protection of Children",
    title: "Catholic Novena for the Protection of Children | Guide Catholic",
    description: "A traditional Catholic novena for the protection of children: guardian angel, Our Lady, what to pray at night, and what prayer does not replace.",
    keywords: "novena for protection of children, prayer to protect children, catholic prayer for my child, guardian angel prayer for kids, traditional novena children",
    excerpt: "Parents have always asked God to keep a child through the night, the school day, and the years they cannot supervise. The novena is that ask, made nine times, without panic.",
    crumb: "Protection of children",
    category: "Prayers & Devotions",
    readTime: "11 min",
    answer: "For nine days, ask God to guard your children in body and soul. Pray to their guardian angels. Ask Our Lady. Then do the ordinary things that actually keep a child safe. A novena is not a lock on the door, and it is not a reason to live afraid.",
    cboUrl: "https://catholicbibleonline.com/blog/traditional-novena-children-protection/",
    cboLabel: "Traditional novena for the protection of children",
    cboNote: "The traditional novena for the protection of children is published on Catholic Bible Online. What follows is how a parent prays it in a Catholic house: angels, Mary, bedtime, and the duties prayer does not cancel.",
    faqTitle: "Questions about a novena for children",
    sections: [
      {
        h2: "Whom the Church tells you to ask",
        paragraphs: [
          [t("Every person has a guardian angel. That is Catholic doctrine, not a decoration for a nursery wall. You may speak to your child's angel and ask him to watch, to prompt, and to pray. You ask God, who gave the angel. You ask Mary, because the Holy Family had a child to carry out of danger. "), out("https://catholicbibleonline.com/bible/matthew/18/", "Matthew 18"), t(" is the word of Jesus: their angels always behold the face of the Father.")],
          [t("A traditional novena gathers those asks into nine days. It is old because the fear is old. You are not inventing a new anxiety. You are putting an ancient one in front of God. The words of that novena are on Catholic Bible Online. Use them instead of a paragraph you wrote at 1 a.m.")],
        ],
      },
      {
        h2: "How to pray it in a real house",
        paragraphs: [
          [t("Night is the natural hour: after the last story, before you pick up your own screen. Sign of the cross on the child's forehead if the child welcomes it. Our Father, Hail Mary, Glory Be. The guardian angel prayer: Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Then the child's name, and one specific fear you refuse to rehearse ten times.")],
          [t("If the child is old enough, pray it with them once, not as a speech about the world's dangers. Children learn courage from a parent who prays and then turns the light out calmly. They learn fear from a parent who prays and then checks the lock four times while explaining why.")],
        ],
      },
      {
        h2: "What you are asking God to guard",
        paragraphs: [
          [t("Body: illness, accident, cruelty, anyone who would harm them. Soul: the slow training of a conscience, the friends they keep, the things they see, the faith you hope they still have at twenty. Both belong in the novena. A prayer that only asks for physical safety and never for holiness is too small for a baptized child.")],
          [t("Include children who are not yours. A parish, a classroom, a foster child, the unborn, the child you lost. The traditional novena is not a private fence around one family. Matthew 18 is about the little ones, plural. If your fear has made other children invisible, widen the prayer on day 5.")],
        ],
      },
      {
        h2: "What the novena does not replace",
        paragraphs: [
          [t("Car seats, medicine, a school that tells you the truth, a phone you are willing to take out of a bedroom, a report you make when a child is in danger. God works through those duties. Skipping them because you 'covered it in prayer' is not faith. If a child is being harmed now, call the people who can stop it today, and pray on the way.")],
          [t("If anxiety is running the novena, pray it once a day and then stop researching. Nine days of trust are healthier than ninety nights of searching for new threats. When the nine days end, keep the short angel prayer at bedtime. That is the lifelong form. The novena is the concentrated one.")],
        ],
      },
    ],
    faqs: [
      { question: "How do I pray a novena for my child's protection?", answer: "Once a day for nine days. Use the traditional prayers, the guardian angel prayer, and your child's name. Pray at bedtime if that is when you are actually with them." },
      { question: "Do Catholics believe in guardian angels?", answer: "Yes. The Church teaches that the angels are real and that each person has a guardian. You may pray to your child's angel. You still lock the door." },
      { question: "Which Gospel should I read?", answer: "Matthew 18, where Jesus speaks of the little ones and their angels. Read the chapter, not only the verse that fits a card." },
      { question: "Can I pray this for a child who is not mine?", answer: "Yes. Godparents, teachers, grandparents, and neighbors should. The novena is for the protection of children, not for one household's exclusive claim." },
      { question: "Where is the traditional novena written out?", answer: "Catholic Bible Online has the traditional novena for the protection of children. Pray those words. Keep the duties this page names." },
    ],
  },
  {
    slug: "our-lady-of-the-rosary-october-7-how-to-pray",
    h1: "How to Pray on Our Lady of the Rosary, October 7",
    title: "Our Lady of the Rosary, October 7: How to Pray | Guide Catholic",
    description: "What to do on October 7, Our Lady of the Rosary: one Rosary, the story of Lepanto, and how to keep the feast if the day is already gone.",
    keywords: "our lady of the rosary october 7, feast of our lady of the rosary, october 7 catholic, rosary feast day, our lady of victory",
    excerpt: "October 7 is the feast of Our Lady of the Rosary. The way to keep it is to pray the Rosary, not to collect facts about 1571 and then leave the beads in a drawer.",
    crumb: "October 7 Rosary",
    category: "Prayers & Devotions",
    readTime: "11 min",
    answer: "On October 7, pray a Rosary. If you can, pray it with other people. The feast recalls the Battle of Lepanto in 1571 and the title Our Lady of Victory. In 2026 the day fell on a Wednesday and has passed. You can still pray the Rosary tonight. October is the month of the Rosary either way.",
    cboUrl: "https://catholicbibleonline.com/blog/our-lady-of-the-rosary-october-7-guide-2026/",
    cboLabel: "Our Lady of the Rosary, October 7 guide",
    cboNote: "Catholic Bible Online has a 2026 guide to the feast. This page is the hour-by-hour practice: what to pray, what Lepanto is doing in the feast, and what to do if you missed the date.",
    faqTitle: "Questions about October 7",
    sections: [
      {
        h2: "What the feast is asking you to do",
        paragraphs: [
          [t("Pope Pius V asked the Church to pray the Rosary during the crisis of 1571, when a fleet gathered at Lepanto. After the battle he ordered a feast of Our Lady of Victory. Later it became Our Lady of the Rosary, fixed on October 7. The memory is not an excuse to romanticize war. It is a memory that the Church prayed, and told the truth about that prayer afterward.")],
          [t("So the feast fails if you only read about it. Fifteen decades, or five, prayed today, are the observance. If you do not know the mysteries, use the "), inn("/blog/complete-rosary-guide/", "complete Rosary guide"), t(" and stay with one set. The history of the day is on the "), inn("/blog/our-lady-of-the-rosary-october-7-2026-feast-day/", "October 7 feast page"), t(". The 2026 guide, with the year's framing, is on Catholic Bible Online.")],
        ],
      },
      {
        h2: "A way to keep the day when you have a job",
        paragraphs: [
          [t("Morning: one set of mysteries on the way to work, or in the parish if a door is open. Name an intention for the Church and one for your house. Do not announce it. Noon: the Angelus if you remember, because October 7 sits in a Marian month and the Angelus is the short form of the same faith. Evening: the rest of the Rosary with whoever will sit still. Children can lead a decade. A tired spouse can sit in the room without performing.")],
          [t("Read "), out("https://catholicbibleonline.com/bible/luke/1/", "Luke 1"), t(" if you want Scripture instead of a second article. The Annunciation and the Visitation are the reason the Hail Mary sounds the way it does. The feast without that chapter becomes a history lecture.")],
        ],
      },
      {
        h2: "If October 7 has already passed",
        paragraphs: [
          [t("In 2026, October 7 was a Wednesday. If you are reading after that, you did not ruin the month. Pray a Rosary today and keep one on Sundays until November 1. The liturgical feast is a day. The devotion is a life. People search for the guide because they want to know whether they are late. You are late for the Mass of the day. You are not late for the Rosary.")],
          [t("Parishes sometimes move a communal Rosary to the nearest Sunday. Go if yours does. If it does not, invite one person. Two people and a set of beads in a kitchen count. You do not need a program.")],
        ],
      },
      {
        h2: "What not to turn the feast into",
        paragraphs: [
          [t("Do not use Lepanto as a permission slip for contempt of people who are not Catholic. The Rosary is a prayer of the Incarnation: Christ in the mysteries, Mary beside them. A feast kept as an insult is a different religion. Pray for the Church's enemies the way Pius V asked people to pray in a real crisis: on your knees, for victory over sin first.")],
        ],
      },
    ],
    faqs: [
      { question: "What is October 7 in the Catholic Church?", answer: "It is the memorial of Our Lady of the Rosary, once called Our Lady of Victory, linked with the Christian fleet at Lepanto in 1571 and with the Rosary Pius V asked the Church to pray." },
      { question: "Do I have to pray all 15 decades?", answer: "No. Five decades, one set of mysteries, is a full daily Rosary. On the feast, pray more if you can. Pray five if that is what you will actually finish." },
      { question: "I missed October 7. Now what?", answer: "Pray the Rosary today. October remains the month of the Rosary. In 2026 the feast fell on Wednesday, October 7, and the month continues." },
      { question: "Which Gospel goes with the feast?", answer: "Luke 1. The Hail Mary takes its first half from the Annunciation and the Visitation in that chapter." },
      { question: "Where is the October 7 guide for this year?", answer: "Catholic Bible Online has the 2026 guide to Our Lady of the Rosary. Guide Catholic has the feast-day page and this page on how to pray the day." },
    ],
  },
  {
    slug: "catholic-prayer-before-surgery",
    h1: "Catholic Prayer Before Surgery",
    title: "Catholic Prayer Before Surgery | Guide Catholic",
    description: "What to pray the night before surgery, when to ask for the Anointing of the Sick, and how a Catholic waits without pretending the outcome is guaranteed.",
    keywords: "catholic prayer before surgery, prayer before operation, anointing of the sick before surgery, prayer for someone having surgery, catholic prayer for healing",
    excerpt: "The night before surgery, a Catholic prays, asks for the sacraments if the surgery is serious, and tells God the truth about being afraid. Prayer is not a second opinion that replaces the surgeon.",
    crumb: "Prayer before surgery",
    category: "Prayers & Devotions",
    readTime: "12 min",
    answer: "Pray for the surgeon, the nurses, the anesthetist, and for yourself. If the operation is serious, ask a priest for confession and for the Anointing of the Sick beforehand, not as a last rite of despair but as the Church's sacrament for the sick. God may heal through the operation. He does not owe you a result.",
    cboUrl: "https://catholicbibleonline.com/blog/catholic-prayer-before-surgery/",
    cboLabel: "Catholic prayer before surgery on Catholic Bible Online",
    cboNote: "A Catholic prayer to say before surgery is published on Catholic Bible Online. This page is the order of the day around that prayer: sacraments, the people in the room, and the family in the waiting room.",
    faqTitle: "Questions about prayer before surgery",
    sections: [
      {
        h2: "What to pray, in the order that matters",
        paragraphs: [
          [t("Begin with the sign of the cross. Pray an Our Father slowly enough to hear 'thy will be done,' which is the sentence you may not want. Ask forgiveness for anything you would not want to carry into an operating room. Then name the people who will touch you: surgeon, nurses, whoever watches the monitors. Ask that they be skilled, rested, and honest. Ask for your own courage. Stop before the prayer becomes a script you are using to control the morning.")],
          [t("A written prayer helps when fear makes your own words circular. Use the "), out("https://catholicbibleonline.com/blog/catholic-prayer-before-surgery/", "Catholic prayer before surgery"), t(" and mean the words. Read "), out("https://catholicbibleonline.com/bible/matthew/6/", "Matthew 6"), t(" if you need Christ's own warning against anxious repetition. One sincere prayer is more than ten panicked ones.")],
        ],
      },
      {
        h2: "Confession and the Anointing of the Sick",
        paragraphs: [
          [t("If the surgery is serious, or if you are elderly, or if you are simply afraid you are not ready to die, call a priest before you are nil by mouth and hard to find. Confession restores you to grace if you need it. The Anointing of the Sick is the sacrament for those who are seriously ill. It is not only for the hour of death. It can be received before an operation that puts you in real danger. Ask. Do not wait for someone else to decide you are 'sick enough.'")],
          [t("Viaticum, Communion as food for the passage, belongs to the danger of death. Many operations are not that. Let the priest judge. Your job is to ask in time, not from a gurney in a hallway if you could have asked on Tuesday. Bring a spouse or friend into the room if you want them there. The sacrament is not a private embarrassment.")],
        ],
      },
      {
        h2: "The night before and the waiting room",
        paragraphs: [
          [t("Eat and drink what the hospital told you to eat and drink, and then stop when they told you to stop. Prayer does not cancel those instructions. Sleep if you can. If you cannot, pray a Rosary decade for the person who will be frightened in the waiting room. Leave them a practical note: the priest's number, the medication list, what you want if you cannot speak. Love looks like that note.")],
          [t("People who love you may send verses and vague promises that 'God never gives you more than you can handle.' You do not have to entertain that sentence. God gives people more than they can handle every day. He also stays. Ask your family for the Rosary, not for speeches. If they do not know it, the "), inn("/blog/complete-rosary-guide/", "Rosary guide"), t(" is enough to get five decades started in a plastic chair.")],
        ],
      },
      {
        h2: "If you are praying for someone else",
        paragraphs: [
          [t("Pray their name. Pray the surgeon's hands. Do not announce a healing God has not given, and do not scold the sick person for 'not having enough faith' if the news is bad. Go to Mass and offer that Mass for them. Visit if visiting helps, and leave if it tires them. A "), inn("/blog/novena-for-protection-of-children/", "novena for a child"), t(" is the right form if the patient is a child. For an adult, nine days of the same honest prayer is enough. You are not their doctor and you are not their priest unless you are.")],
        ],
      },
    ],
    faqs: [
      { question: "What is a Catholic prayer before surgery?", answer: "A short prayer that asks God for healing, for a holy will, for the skill of the medical staff, and for the grace to be ready. You can pray in your own words or use the prayer published on Catholic Bible Online." },
      { question: "Should I receive Anointing of the Sick before an operation?", answer: "If the surgery is serious, yes, ask a priest. The sacrament is for the seriously ill, not only for the dying. Call before the day of the operation if you can." },
      { question: "Does prayer replace medical care?", answer: "No. Follow the hospital's instructions. Take the medicines. Ask the questions. Prayer asks God to work, including through the people trained to cut and to sew." },
      { question: "What if I am praying and still terrified?", answer: "Say that. Fear is not a failure of faith. Ask someone to sit with you, pray one Our Father, and let the rest of the night be as ordinary as the nurses will allow." },
      { question: "What should my family do during the operation?", answer: "Pray a Rosary, call the priest if he has not come, and stay reachable. They should not promise the waiting room a miracle. They should love you in practical details." },
    ],
  },
];

const bySlug = new Map(searchGuides.map((guide) => [guide.slug, guide]));

export function searchGuideBySlug(slug: string): SearchGuide | undefined {
  return bySlug.get(slug);
}
