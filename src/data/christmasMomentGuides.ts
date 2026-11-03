import type { LiturgicalFeastGuide } from "./liturgicalFeastGuides";

const CBO = "https://catholicbibleonline.com/bible/";
const CBO_NATIVITY = "https://catholicbibleonline.com/blog/christmas-nativity-catholic-feast-guide/";
const CBO_DEC25 = "https://catholicbibleonline.com/calendar/december/25/";
const CBO_NATIVITY_2026 = "https://catholicbibleonline.com/blog/christmas-nativity-december-25-guide-2026/";
const USCCB_TREE = "https://www.usccb.org/prayers/blessing-christmas-tree";

export const CHRISTMAS_MOMENT_GUIDES: LiturgicalFeastGuide[] = [
  {
    slug: "christmas-tree",
    title: "Christmas Tree: Catholic Meaning, History & How to Bless It",
    h1: "The Christmas Tree: What the Evergreen Means for Catholics",
    description: "The Catholic meaning of the Christmas tree: paradise plays, the tree of the Cross, when to put it up, the Book of Blessings rite, and what is legend.",
    keywords: "christmas tree, christmas tree catholic, blessing of a christmas tree, christmas tree meaning, when to put up christmas tree catholic, christmas tree pagan, evergreen christmas",
    readTime: "12 min",
    datePublished: "2026-11-03",
    crumb: "Christmas Tree",
    category: "Catholic Living",
    lede: "A fir in the living room is not in the Missal. It is in the Book of Blessings. The Church received a German Christian custom, read it as the tree of paradise and the tree of the Cross, and taught families to light it after a prayer — not before the First Sunday of Advent as if Christmas had already come.",
    answer: "The Christmas tree is a relatively modern Christian custom. The Book of Blessings traces it to medieval mystery plays of the tree of paradise and to the Christmas candle that stood for Christ, the Light of the world. According to that rite, the tree is set up just before Christmas and may remain until Epiphany; its lights are turned on after the blessing. A parent may bless it at home. The order is on the " + `{{${USCCB_TREE}|USCCB page for blessing a Christmas tree}}` + ". For the feast the tree is pointing to, see " + `{{${CBO_NATIVITY}|Catholic Bible Online's Nativity guide}}` + ".",
    facts: [
      { label: "What it is", value: "A devotion, not a sacrament and not a required decoration" },
      { label: "Church's own reading", value: "Paradise tree and Christmas light — Book of Blessings 979" },
      { label: "When to set it up", value: "Custom: just before Christmas, not in October" },
      { label: "When to take it down", value: "Epiphany, or keep the crib until Candlemas (Feb 2)" },
      { label: "Who may bless it", value: "A priest, deacon, or a parent at home" },
    ],
    timeline: [
      { when: "Medieval West", what: "Paradise plays showed Adam, Eve, and a tree hung with fruit. In some places December 24 remembered Adam and Eve." },
      { when: "16th century", what: "Decorated evergreens appear in German homes and guild halls. Strasbourg descriptions date to around 1600." },
      { when: "19th century", what: "The custom travels with German Christians into Britain and the United States." },
      { when: "1982", what: "A Christmas tree is raised in St. Peter's Square — a late, visible sign that the custom had a home in Rome." },
      { when: "Book of Blessings", what: "The Church gives an official order for blessing the tree. Lights after the prayer, not before." },
      { when: "Christmas 2026", what: "Friday, December 25. Bless the tree on the Vigil or on the day. See [[/blog/christmas-day/|Christmas Day]]." },
    ],
    sections: [
      {
        id: "what-the-tree-means",
        heading: "What the tree means — paradise, Cross, and light",
        paragraphs: [
          "Genesis plants two trees in the garden: the tree of life and the tree of the knowledge of good and evil (" + `{{${CBO}genesis/2/|Genesis 2}}` + ", " + `{{${CBO}genesis/3/|Genesis 3}}` + "). Humanity reaches for the second and loses the first. The Church has long preached the Cross as the tree of life restored: the wood on which the new Adam hangs. The Book of Blessings says it in one line of intercession — that this tree of lights may remind us of the tree of glory on which Christ accomplished our salvation.",
          "That is why a Catholic Christmas tree is not a victory over winter, and not a pagan leftover you have to apologize for. It is an evergreen — life when the world looks dead — hung with light because the Light of the world has come (" + `{{${CBO}john/1/|John 1}}` + "). Apples or round ornaments can still hint at the paradise fruit. A star or an angel at the top can hint at Bethlehem. None of that is required. The blessing is enough.",
        ],
        callout: {
          label: "Boniface and Luther are later stories",
          text: "That Saint Boniface chopped down Thor's oak and left a fir, or that Martin Luther invented candles on a tree after a walk in the woods, are pious later tales. Tell them as stories. The documented ground is German Christian homes, medieval paradise plays, and the rite in the Book of Blessings. See also [[/blog/catholic-christmas-traditions/|Catholic Christmas traditions]].",
        },
      },
      {
        id: "when-to-put-it-up",
        heading: "When Catholics put the tree up — and when they take it down",
        paragraphs: [
          "The Book of Blessings is modest: the tree is set up just before Christmas and may remain until the Solemnity of Epiphany. In 2027 that Sunday in the United States is January 3. An older household custom keeps the crib until Candlemas, February 2. Either is Catholic. Putting the tree up in early November, while the Church is still in Ordinary Time and then in Advent, teaches the house that Christmas is a product launch.",
        ],
        table: {
          caption: "A Catholic timetable for the tree, 2026–27",
          headers: ["When", "What the house looks like", "Why"],
          rows: [
            ["Advent (from November 29)", "Wreath first. The tree can wait, or stand dark.", "Advent is waiting. See [[/blog/advent/|Advent 2026]]."],
            ["Vigil of Christmas, December 24", "Bless the tree. Then light it. Place the Child in the crib.", "The Book of Blessings prefers the Vigil meal or Christmas Day."],
            ["Christmas Day through the octave", "Lights on. The feast has begun.", "[[/blog/christmas-day/|Christmas Day]] is a solemnity, not a morning."],
            ["Epiphany, January 3, 2027 (U.S.)", "A natural day to take the tree down.", "The rite names Epiphany as the usual end."],
            ["Candlemas, February 2, 2027", "Crib may remain until this day.", "Forty days after Christmas; Simeon calls Christ a light."],
          ],
        },
      },
      {
        id: "how-to-bless-the-tree",
        heading: "How to bless a Christmas tree at home",
        paragraphs: [
          "You do not need a priest in the living room. The rite may be led by a parent or another member of the family. Gather at the tree. Make the Sign of the Cross. Read a short Gospel — " + `{{${CBO}luke/2/|Luke 2:1–14}}` + " or " + `{{${CBO}john/1/|John 1:1–14}}` + ". Ask God to bless those who will sit under this tree. Then turn the lights on. The order of the lights after the prayer is part of the rite: the tree does not bless itself by glowing.",
          "The full text used in the United States is on the " + `{{${USCCB_TREE}|USCCB Blessing of a Christmas Tree}}` + " page. Do not treat a printed card as magic. Holy water is a sacramental, a help, not a spell — see [[/blog/holy-water-sacramental/|holy water]] and the [[/blog/catholic-sacramentals-guide/|guide to sacramentals]].",
        ],
        list: [
          "Place the tree where it will not block a fire exit and will not dry against a heater.",
          "If you use a real tree, water it. Devotion is not an excuse for a house fire.",
          "Keep the crib near the tree if you can: wood of the manger, wood of the Cross, wood of the fir.",
          "A plastic tree can be blessed. The Church blesses people and signs, not forestry.",
        ],
      },
      {
        id: "in-church",
        heading: "A tree in church",
        paragraphs: [
          "The Book of Blessings allows a tree in church if it does not interfere with the altar, the ambo, or the liturgical space, and if the decoration is fitting. A tree that outshines the crib, or that turns the sanctuary into a shop window, has already lost. The primary place for the Christmas tree is the home.",
        ],
      },
    ],
    prayer: "Lord our God, we praise you for the light of creation, for the light of Israel, and for Jesus Christ your Son, Emmanuel.\nBless this tree in our house. Let its green in winter speak of life you do not take back, and its lights speak of the Light no darkness can overcome.\nMake this wood a reminder of the tree of the Cross, and of the Child who had no bed but a manger. Amen.",
    prayerHeading: "A prayer at the Christmas tree",
    related: [
      { href: "/blog/christmas-lights/", label: "Christmas lights: Catholic meaning" },
      { href: "/blog/christmas-day/", label: "Christmas Day" },
      { href: "/blog/advent/", label: "Advent 2026" },
      { href: "/blog/catholic-christmas-traditions/", label: "Catholic Christmas traditions" },
      { href: "/blog/holy-water-sacramental/", label: "Holy water" },
    ],
    faqs: [
      { question: "Is the Christmas tree Catholic or pagan?", answer: "The tree Catholics bless is a Christian custom from German lands, read by the Church as the paradise tree and the light of Christ. Claims that it is simply a recycled pagan rite skip the actual history and the Book of Blessings." },
      { question: "When should Catholics put up the Christmas tree?", answer: "The rite says just before Christmas. Many families wait for the Vigil. Putting it up in Advent is a custom some keep with the lights still off. Putting it up in October is the shop's calendar, not the Church's." },
      { question: "When should the tree come down?", answer: "The Book of Blessings names Epiphany. In the U.S. in 2027 that is Sunday, January 3. Keeping the crib until Candlemas, February 2, is an older custom." },
      { question: "Can a layperson bless the Christmas tree?", answer: "Yes. In the home a parent or another family member may lead the blessing, especially at the Vigil meal or on Christmas Day." },
      { question: "Do the lights go on before or after the blessing?", answer: "After. The rite is explicit: the lights of the tree are illuminated after the prayer of blessing." },
      { question: "Did Saint Boniface invent the Christmas tree?", answer: "That story is later legend. Boniface is a real missionary. The fir-for-oak tale is not how the custom is documented." },
      { question: "Can I have a tree and a crib?", answer: "Yes. The crib is the older and more directly biblical sign. The tree is a later companion. Keep the Child where the eye can find him." },
      { question: "Is an artificial tree less Catholic?", answer: "No. The blessing is of the sign and of the household, not of the species of pine." },
    ],
  },
  {
    slug: "christmas-lights",
    title: "Christmas Lights: Catholic Meaning of Light in the Darkness",
    h1: "Christmas Lights: Why Catholics Put Light in the Dark at the Nativity",
    description: "The Catholic meaning of Christmas lights: Christ the Light of the world, Isaiah 9, the tree candle, electric lights, the parol, and how to light the house without skipping Mass.",
    keywords: "christmas lights, christmas lights meaning, catholic christmas lights, light of the world christmas, christmas tree lights, candle in the window christmas, parol",
    readTime: "11 min",
    datePublished: "2026-11-03",
    crumb: "Christmas Lights",
    category: "Catholic Living",
    lede: "Christmas lights are easy to buy and easy to misunderstand. The Church does not bless a wattage. She blesses a claim: the people who walked in darkness have seen a great light, and that Light has a face.",
    answer: "Christmas lights, at home and on the tree, are a late custom with an old meaning. The Book of Blessings ties the Christmas candle to Christ, the Light of the world. Scripture says the same without electricity: " + `{{${CBO}isaiah/9/|Isaiah 9}}` + ", " + `{{${CBO}john/1/|John 1}}` + ", " + `{{${CBO}john/8/|John 8:12}}` + ". Light the house after you have named the Child. The four Masses of Christmas move from night to dawn to day for the same reason — see " + `{{${CBO_DEC25}|December 25 on Catholic Bible Online}}` + ".",
    facts: [
      { label: "The claim", value: "Christ is the Light of the world (John 8:12; John 1:9)" },
      { label: "On the tree", value: "Lights are lit after the blessing, not before" },
      { label: "Older form", value: "A candle — on the tree, in the window, in the wreath" },
      { label: "Christmas 2026", value: "The Night Mass still begins in the dark: Friday, December 25, after the Vigil of the 24th" },
    ],
    timeline: [
      { when: "Isaiah", what: "\"The people who walked in darkness have seen a great light\" (" + `{{${CBO}isaiah/9/|Isaiah 9}}` + ") — the Night Mass of Christmas." },
      { when: "John", what: "The Word is the true light; the light shines in the darkness (" + `{{${CBO}john/1/|John 1}}` + "). Gospel of the Mass during the Day." },
      { when: "Medieval / early modern Germany", what: "Candles on evergreens. Beautiful, and a fire hazard." },
      { when: "1882", what: "Edward H. Johnson, a colleague of Edison, hangs electric lights on a tree in New York. A technical history, not a feast." },
      { when: "Book of Blessings", what: "The Christmas light or candle symbolized Christ. Tree lights go on after the prayer." },
    ],
    sections: [
      {
        id: "light-of-the-world",
        heading: "The Light is a Person, not a display",
        paragraphs: [
          "Jesus says, \"I am the light of the world\" (" + `{{${CBO}john/8/|John 8:12}}` + "). John's Prologue says the light shines in the darkness, and the darkness has not overcome it (" + `{{${CBO}john/1/|John 1:5}}` + "). Christmas lights are allowed to be pretty. They are not allowed to be the point. If the house is bright and no one can name why, the custom has been secularized without anyone meaning to.",
          "The liturgy already stages this. The Vigil still sounds like waiting: tomorrow you will see his glory. The Mass during the Night prays that this most sacred night may be radiant with true light, and reads Isaiah 9. The Mass at Dawn begins, \"Today a light will shine upon us.\" The Mass during the Day is full day: the Word became flesh. Four Masses, one rising of the sun. Details are in the [[/blog/christmas-day/|Christmas Day guide]] and in " + `{{${CBO_NATIVITY}|the Nativity feast guide on Catholic Bible Online}}` + ".",
        ],
        callout: {
          label: "Advent wreath first",
          text: "The first Catholic lights of the season are the four candles of Advent, one more each Sunday, rose on Gaudete. Outdoor displays in November that skip the wreath have jumped the season. See [[/blog/advent/|Advent 2026]].",
        },
      },
      {
        id: "candles-windows-parol",
        heading: "Candles, windows, and the parol",
        paragraphs: [
          "Before strings of LEDs there was a flame. A candle in an Irish window is a custom of welcome: if Mary and Joseph were still looking for a room, this house would not be shut. It is hospitality, not folklore as magic. Water the idea with a real act — a spare seat, a plate sent next door, a name on a parish giving tree.",
          "In the Philippines the parol, a star lantern, hangs in windows through Simbang Gabi and Christmas. It is the star of " + `{{${CBO}matthew/2/|Matthew 2}}` + " made of bamboo and light. A Catholic in Cleveland does not have to buy one. A Catholic anywhere can learn what it is for: the star that leads to a Child, not to a mall. See [[/blog/three-wise-men/|the Magi and the Star of Bethlehem]].",
        ],
        table: {
          caption: "Lights Catholics actually mean",
          headers: ["Light", "What it is", "What it is not"],
          rows: [
            ["Advent wreath", "Four candles of waiting, rose on Gaudete", "A countdown gadget"],
            ["Tree lights", "Lit after the blessing of the [[/blog/christmas-tree/|Christmas tree]]", "A substitute for the crib"],
            ["Window candle", "A sign that there is room", "A charm against winter"],
            ["Parol / star", "The Magi's star, especially in Filipino homes", "A generic holiday shape"],
            ["Church candles at the Night Mass", "The night made radiant, as the Collect says", "Stage lighting for a concert"],
          ],
        },
      },
      {
        id: "how-to-light-the-house",
        heading: "How to light a Catholic house",
        paragraphs: [
          "Keep it small enough to mean something. One window that is actually for the Holy Family is better than a roof that looks like an airport. Bless the tree. Put the Child in the crib. Then switch the lights on. If you walk the neighborhood, you can enjoy other people's displays without needing them to be a creed. If you hang your own, let a passerby be able to find a crib or a star, not only icicles.",
        ],
        list: [
          "Do not leave candles unattended. The Light of the world does not require you to burn the house down.",
          "Outdoor lights on a timer are fine. They are not a substitute for being at Mass.",
          "If the display is for the street, add one sign the street can read: a crib, a star, a \"Glory to God.\"",
          "Take lights down with the tree, or at Epiphany, unless you are keeping the crib to Candlemas. A house still blazing in March is no longer talking about Christmas.",
        ],
      },
    ],
    prayer: "Christ our Light, the night of your birth was not empty. Angels sang, shepherds walked, and a star was enough for men who were paying attention.\nLight this house. Disperse what we will not name. Make our windows a welcome, our tree a sign, and our eyes able to see you in the poor who still have no room. Amen.",
    prayerHeading: "A prayer when the lights go on",
    related: [
      { href: "/blog/christmas-tree/", label: "The Christmas tree" },
      { href: "/blog/christmas-day/", label: "Christmas Day" },
      { href: "/blog/three-wise-men/", label: "The Magi and the Star" },
      { href: "/blog/advent/", label: "Advent 2026" },
      { href: "/blog/catholic-christmas/", label: "Catholic Christmas 2026" },
    ],
    faqs: [
      { question: "What do Christmas lights mean for Catholics?", answer: "They are a sign of Christ, the Light of the world. The custom is later than the feast. The meaning is as old as Isaiah 9 and John 1." },
      { question: "Should the tree lights be on during Advent?", answer: "The rite lights them after the Christmas blessing. An unlit tree in late Advent is a form of waiting. A fully lit tree in November is the shop's season." },
      { question: "Is a candle in the window Catholic?", answer: "It is a Christian custom of welcome, strong in Irish homes: room for the Holy Family. Pair it with actual hospitality." },
      { question: "What is a parol?", answer: "A Filipino star lantern hung for Christmas, recalling the star of Bethlehem. It is popular piety, not a requirement of the Roman Missal." },
      { question: "Did Catholics invent electric Christmas lights?", answer: "No. Edward Johnson hung electric lights on a tree in 1882. Catholics may use them. The invention is not a feast." },
      { question: "Are outdoor light displays too worldly?", answer: "They can be. They can also be a quiet witness if the Child is findable. Wattage is not holiness." },
      { question: "Which Christmas Mass is about light?", answer: "All of them, in sequence: Night (Isaiah 9), Dawn (\"a light will shine upon us\"), Day (John 1). The Vigil still sounds like tomorrow." },
      { question: "When do the lights come down?", answer: "With the tree, usually by Epiphany. The liturgical season lasts until the Baptism of the Lord, January 10, 2027." },
    ],
  },
  {
    slug: "christmas-gifts",
    title: "Christmas Gifts: Catholic Meaning of Giving at the Nativity",
    h1: "Christmas Gifts: Magi, Saint Nicholas, and the Gift Who Is Christ",
    description: "The Catholic meaning of Christmas gifts: the Magi's gold, frankincense and myrrh, Saint Nicholas, alms for the poor, and how to give without turning the feast into a store.",
    keywords: "christmas gifts, christmas gifts catholic, meaning of christmas gifts, magi gifts, gold frankincense myrrh, st nicholas gifts, catholic gift giving christmas",
    readTime: "12 min",
    datePublished: "2026-11-03",
    crumb: "Christmas Gifts",
    category: "Catholic Living",
    lede: "Catholics give gifts at Christmas because God gave first. The Child is the Gift. The Magi brought gold, frankincense, and myrrh. Nicholas of Myra gave in secret. The poor still have no room at the inn. A pile of boxes that never reaches any of those three has missed the feast.",
    answer: "Christmas gifts, for Catholics, are a response to the Incarnation, not a bargain with Santa. The Magi offer gifts in " + `{{${CBO}matthew/2/|Matthew 2}}` + ". Christ himself is the Gift the Father sends (" + `{{${CBO}john/1/|John 1}}` + "). Saint Nicholas, a bishop, is the historical seed of later gift customs. Almsgiving is not optional decoration: " + `{{${CBO}matthew/25/|Matthew 25}}` + " still judges the feast. " + `{{${CBO_NATIVITY}|Catholic Bible Online's Nativity guide}}` + " keeps the Child ahead of the wrapping.",
    facts: [
      { label: "The first Gift", value: "The Son, born of Mary — not a product" },
      { label: "Biblical gifts", value: "Gold, frankincense, myrrh (Matthew 2:11)" },
      { label: "A real bishop", value: "Saint Nicholas of Myra, feast December 6" },
      { label: "The test", value: "Did the poor eat? Did anyone hear Luke 2?" },
    ],
    timeline: [
      { when: "Bethlehem", what: "The Magi open their treasures (" + `{{${CBO}matthew/2/|Matthew 2:11}}` + "). Three gifts, not yet three named kings. See [[/blog/three-wise-men/|the Magi]]." },
      { when: "Fourth century", what: "Nicholas, bishop of Myra, remembered for secret charity. Feast: December 6. See [[/blog/saint-nicholas/|Saint Nicholas]]." },
      { when: "Later Europe", what: "Gifts attach to Nicholas, then to Christmas Day, then in some countries to Epiphany (January 6)." },
      { when: "United States", what: "December 25 morning becomes the main gift hour. The Church never made that a rubric." },
      { when: "Christmas 2026", what: "Friday, December 25. Mass first. Gifts after the Child has been named. See [[/blog/christmas-day/|Christmas Day]]." },
    ],
    sections: [
      {
        id: "god-gave-first",
        heading: "God gave first",
        paragraphs: [
          "\"The Word became flesh and dwelt among us\" (" + `{{${CBO}john/1/|John 1:14}}` + "). Christmas gifts make sense only after that sentence. The Father does not send a voucher. He sends the Son, who \"emptied himself, taking the form of a servant\" (" + `{{${CBO}philippians/2/|Philippians 2}}` + "). Every wrapped box in the house is either a small echo of that emptying or a contradiction of it.",
          "Paul's line about a cheerful giver (" + `{{${CBO}2-corinthians/9/|2 Corinthians 9:7}}` + ") is about alms, not about outspending last year. The Catechism treats love of the poor as a demand of the Gospel, not a December mood (CCC 2443–2449). A Catholic Christmas gift list that has no poor person on it is unfinished.",
        ],
        callout: {
          label: "This is not the prosperity gospel",
          text: "Giving does not purchase a better year. God is not a supplier. See [[/blog/catholic-tithing-guide/|what Catholics actually teach about giving]] and [[/blog/catholic-new-year/|a Catholic new year]].",
        },
      },
      {
        id: "three-gifts",
        heading: "Gold, frankincense, and myrrh",
        paragraphs: [
          "Matthew lists three gifts, not three moods. Later preaching read them as kingship, worship, and burial: gold for a king, incense for God, myrrh for one who will die. That is good homily. It is not a fourth Gospel. The Magi paid tribute. God can mean more by a gift than the giver knows. A Catholic who only buys gold-colored paper has not understood myrrh: this Child is born to be handed over.",
          "If your family opens gifts on December 25, read " + `{{${CBO}matthew/2/|Matthew 2}}` + " or " + `{{${CBO}luke/2/|Luke 2}}` + " first. If your family keeps gifts for Epiphany, you are in company with much of the Catholic world. Neither date is a dogma. The Magi belong to the feast of the manifestation, not to a shipping deadline.",
        ],
        table: {
          caption: "Gift, meaning, and a Catholic use",
          headers: ["Gift", "In the story", "In the house this year"],
          rows: [
            ["Gold", "Tribute to a king", "One gift that costs you something, not only surplus"],
            ["Frankincense", "Worship", "A gift that helps someone pray: a Bible, a crib, time at Mass"],
            ["Myrrh", "Burial and healing", "A gift that faces suffering: a visit, a meal, a bill paid for someone ill"],
            ["The Child", "God with us", "Place him in the crib before the paper hits the floor"],
          ],
        },
      },
      {
        id: "nicholas-and-santa",
        heading: "Nicholas, Santa, and the poor",
        paragraphs: [
          "Saint Nicholas is a bishop. Santa Claus is what happens when a bishop travels through Dutch and American folklore. You may tell children about a man in red. You may not let him replace the altar. Nicholas's oldest memory is secret help for people who would have been ashamed to ask. That is still the pattern: " + `{{${CBO}matthew/25/|Matthew 25}}` + " — I was hungry, I was a stranger, I was in prison.",
        ],
        list: [
          "Put one gift under the tree that will leave the house: a parish giving tree, a shelter, a named family.",
          "If children write lists, have them write a second list: who needs something they will never see unwrapped.",
          "On December 6, tell the bishop's story before the candy. [[/blog/saint-nicholas/|Saint Nicholas]] is not a warm-up act for Amazon.",
          "A homemade gift, a letter, a cancelled debt, an hour with someone lonely — these count. They count more than a gadget you cannot name in a year.",
        ],
      },
      {
        id: "how-to-give",
        heading: "How to give on Christmas 2026 without losing the day",
        paragraphs: [
          "Mass first. Then the crib. Then breakfast. Then gifts. The order teaches. If gifts come before the Gospel, the Gospel will sound like an interruption. " + `{{${CBO_NATIVITY_2026}|Catholic Bible Online's Christmas 2026 guide}}` + " puts Mass, Luke 2, the manger, and the poor in that sequence for a reason.",
        ],
      },
    ],
    prayer: "Father, you gave us your Son, poor in a manger and rich in mercy.\nTeach us to give as people who have already received: without display, without keeping score, and without forgetting those who will open nothing.\nSaint Nicholas, pray for us. Holy Magi, pray for us. Child of Bethlehem, be the Gift we cannot wrap. Amen.",
    prayerHeading: "A prayer before the gifts are opened",
    related: [
      { href: "/blog/three-wise-men/", label: "The Magi and the Star of Bethlehem" },
      { href: "/blog/saint-nicholas/", label: "Saint Nicholas" },
      { href: "/blog/christmas-day/", label: "Christmas Day" },
      { href: "/blog/christmas-ideas/", label: "Catholic Christmas ideas" },
      { href: "/blog/catholic-tithing-guide/", label: "Catholic giving" },
    ],
    faqs: [
      { question: "Why do Catholics give Christmas gifts?", answer: "Because God gave his Son. The Magi brought gifts. Christians have imitated that offering, and the charity of Saint Nicholas. The custom is not a commandment; the love of the poor is." },
      { question: "What do gold, frankincense, and myrrh mean?", answer: "They are the gifts in Matthew 2:11. Preaching often reads king, God, and burial. Read the verse first." },
      { question: "Should gifts be opened on December 25 or Epiphany?", answer: "Either. Much of the Catholic world gives on January 6. American custom is often Christmas morning. The date is not the dogma." },
      { question: "Is Santa Claus Catholic?", answer: "Santa is folklore descended from Saint Nicholas, a real bishop. Keep the bishop in the story. Do not let the folklore outrank the Mass." },
      { question: "Do I have to spend a lot?", answer: "No. A cheerful giver is not a lavish one. Paul is talking about alms. Children will remember who was at the table." },
      { question: "What if someone in the family cannot afford gifts?", answer: "Say so without shame. Presence, a letter, a shared meal, and Mass are already the feast. Shame is not a Catholic wrapping paper." },
      { question: "Should children get everything they ask for?", answer: "No. Unanswered lists are part of growing up. So is watching parents give to people who asked for nothing." },
      { question: "How do gifts relate to the Magi?", answer: "The Magi worship first, then offer. A Catholic house can copy the order: kneel, then give. See the Magi guide on this site." },
    ],
  },
  {
    slug: "christmas-ideas",
    title: "Christmas Ideas for Catholics: Mass, Home, Poor & the Twelve Days",
    h1: "Christmas Ideas: A Catholic List That Is Not a Shopping List",
    description: "Catholic Christmas ideas for 2026: Mass, crib, wreath, gifts that mean something, ideas for the poor, the octave, Epiphany chalk, and what to do after December 25.",
    keywords: "christmas ideas, christmas ideas catholic, catholic christmas ideas, christmas ideas for families, christmas day ideas, christmas eve ideas, twelve days of christmas ideas",
    readTime: "13 min",
    datePublished: "2026-11-03",
    crumb: "Christmas Ideas",
    category: "Catholic Living",
    lede: "Search \"christmas ideas\" and the internet hands you crafts, menus, and a budget. Those can be good. They are not first. A Catholic list starts with an altar, a manger, a poor person with a name, and twelve days the shops have already ended.",
    answer: "Catholic Christmas ideas are not a Pinterest board with a cross sticker. They are concrete acts ordered to the Nativity: go to Mass, bless the tree, put the Child in the crib, read " + `{{${CBO}luke/2/|Luke 2}}` + ", give to someone who cannot repay you, and keep the feast past the 26th. Dates for 2026 are in " + `{{${CBO_NATIVITY_2026}|Catholic Bible Online's Christmas 2026 guide}}` + ". The season itself is laid out on " + `{{${CBO_DEC25}|December 25 in the Catholic calendar}}` + ".",
    facts: [
      { label: "The one required idea", value: "Mass of Christmas — Vigil of Dec 24 or any Mass of the 25th" },
      { label: "Christmas 2026", value: "Friday, December 25; Friday abstinence is lifted" },
      { label: "Season", value: "Through the Baptism of the Lord, January 10, 2027" },
      { label: "A good test", value: "Would this idea still make sense if no one posted it?" },
    ],
    timeline: [
      { when: "Now, early November", what: "Mark Mass times. Choose one work of mercy. Do not buy the whole internet. See [[/blog/advent/|Advent]]." },
      { when: "December 24 evening", what: "Vigil Mass or Night Mass. Bless the [[/blog/christmas-tree/|tree]]. Place the Child. Read Luke 2." },
      { when: "December 25", what: "Mass if you have not been. Meal. [[/blog/christmas-gifts/|Gifts]] after the Gospel. See [[/blog/christmas-day/|Christmas Day]]." },
      { when: "December 26–January 1", what: "Octave: Stephen, Holy Family, Holy Innocents, Mother of God." },
      { when: "January 3, 2027", what: "Epiphany in most U.S. dioceses. Chalk the door. Magi arrive." },
    ],
    sections: [
      {
        id: "ideas-for-the-liturgy",
        heading: "Ideas that belong at the altar first",
        paragraphs: [
          "If you only do one thing on the list, do this block. Everything else is extra. Extra is allowed. Extra is not Mass.",
        ],
        list: [
          "Find the Mass now: [[/blog/christmas-mass-near-me/|Christmas Mass near you]]. In 2026 the day is a Friday. The Vigil on Thursday evening counts.",
          "Arrive early for the Night Mass if your parish sings the Christmas Proclamation from the Martyrology.",
          "Kneel at the words of the Incarnation in the Creed. GIRM 137 asks it on Christmas and the Annunciation.",
          "Go to confession in Advent so Christmas morning is not a scramble of unread sins. [[/blog/advent/|Advent 2026]] has the weeks.",
          "If you cannot get to midnight, you have not failed. The Vigil is a Mass of Christmas. Midnight is a custom.",
        ],
        callout: {
          label: "Friday meat",
          text: "Christmas 2026 is a Friday solemnity. Canon 1251 lifts abstinence. A roast is fine. Skipping Mass for the roast is not. See [[/blog/catholic-christmas/|Catholic Christmas 2026]].",
        },
      },
      {
        id: "ideas-for-the-house",
        heading: "Ideas for the house",
        paragraphs: [
          "The house is supposed to look like waiting, then like a birth, then like a season — not like a catalogue that peaked on December 23.",
        ],
        table: {
          caption: "Household ideas, in Church order",
          headers: ["Idea", "When", "Meaning"],
          rows: [
            ["Advent wreath at dinner", "Four Sundays from November 29", "Waiting. Rose on Gaudete, December 13."],
            ["Empty crib, then the Child", "Child on the Vigil or Christmas morning", "He was not there, and then he was."],
            ["Bless the tree, then light it", "Vigil or Christmas Day", "[[/blog/christmas-tree/|Tree]] and [[/blog/christmas-lights/|lights]] after prayer."],
            ["Luke 2 aloud", "Before gifts or before leaving for Mass", `{{${CBO}luke/2/|Luke 2}}`],
            ["One window candle or a star", "Night of the 24th onward", "Room at this inn. See lights."],
            ["Chalk the door", "Epiphany, January 3, 2027 in the U.S.", "20 + C + M + B + 27"],
          ],
        },
      },
      {
        id: "ideas-for-the-poor-and-the-table",
        heading: "Ideas for the poor, the table, and the children",
        paragraphs: [
          "A Catholic Christmas idea that never leaves the postcode of the comfortable is only half an idea. The Child had no room (" + `{{${CBO}luke/2/|Luke 2:7}}` + "). Matthew still reads the hungry, the stranger, and the prisoner as Christ (" + `{{${CBO}matthew/25/|Matthew 25}}` + ").",
        ],
        list: [
          "Name one person or one pantry before you name one gadget. Put that gift in the car on December 23 so it actually leaves.",
          "Invite someone who would eat alone. An empty place at a Polish Wigilia is a theology of the unexpected guest. You can do it without the wafer.",
          "If you keep the Seven Fishes or another vigil meal, tell the children why the table is strange: it is still the night of waiting.",
          "Let children carry the Infant to the crib. Let them give one of their own things away. Do not outsource all generosity to the adults' credit card.",
          "Write a letter instead of a last-minute order. Nicholas gave in secret. See [[/blog/christmas-gifts/|Christmas gifts]].",
          "For more ethnographic customs — Las Posadas, Simbang Gabi, opłatek — use the [[/blog/catholic-christmas-traditions/|traditions guide]]. This page is the short list you can keep even if you keep nothing else.",
        ],
      },
      {
        id: "ideas-after-the-25th",
        heading: "Ideas for the days the shops think Christmas is over",
        paragraphs: [
          "The Church is just starting on the 26th. That is the most Catholic idea on the internet, and the least used.",
        ],
        list: [
          "December 26 — Saint Stephen. Give leftovers to someone. Read " + `{{${CBO}acts/7/|Acts 7}}` + " if you can find five minutes.",
          "December 27, 2026 — Holy Family Sunday this year. Bless the household. Put the phones in a basket for an hour.",
          "December 28 — Holy Innocents. Pray for children, born and unborn. Keep the day quiet.",
          "January 1, 2027 — Mary, Mother of God. Holy Day of Obligation. See [[/blog/catholic-new-year/|Catholic New Year]].",
          "January 3 — Epiphany in the U.S. Move the Magi. Chalk the door. King cake if you like. [[/blog/three-wise-men/|Wise men]].",
          "January 10 — Baptism of the Lord. The season ends. If the tree is still up, this is a late but still defensible day to take it down.",
        ],
      },
    ],
    prayer: "Lord Jesus, we have more ideas than hours. Choose for us.\nGive us Mass, a manger, one poor neighbor, and enough joy to last past the wrapping paper.\nMary and Joseph, keep our house from becoming a store. Child of Bethlehem, be the only idea we cannot do without. Amen.",
    prayerHeading: "A prayer for a simple Christmas",
    related: [
      { href: "/blog/christmas-day/", label: "Christmas Day" },
      { href: "/blog/catholic-christmas-traditions/", label: "Catholic Christmas traditions" },
      { href: "/blog/christmas-gifts/", label: "Christmas gifts" },
      { href: "/blog/christmas-tree/", label: "The Christmas tree" },
      { href: "/blog/advent/", label: "Advent 2026" },
      { href: "/blog/christmas-mass-near-me/", label: "Find Christmas Mass" },
    ],
    faqs: [
      { question: "What are some Catholic Christmas ideas that are not shopping?", answer: "Mass, an empty crib filled on the Vigil, a blessed tree, Luke 2 read aloud, one gift that leaves the house for the poor, and keeping the octave after the 25th." },
      { question: "What should a Catholic family do on Christmas Eve?", answer: "Vigil or Night Mass, the Child in the crib, a meal that still feels like waiting, the tree blessed and then lit. Midnight is a custom, not a test." },
      { question: "What should we do on Christmas morning?", answer: "If you have not been to Mass, go. Then the Gospel, then breakfast, then gifts. The order is the idea." },
      { question: "How can I keep Christmas with small children?", answer: "One Mass they can survive, one figure they can carry to the crib, one gift they give away, lights they help switch on after a one-sentence prayer." },
      { question: "What if I live alone?", answer: "Mass is still the feast. Bring someone with you or sit where the parish actually is. Invite or accept an invitation. Loneliness is pastoral terrain, not a private failure." },
      { question: "Are crafts and recipes Catholic Christmas ideas?", answer: "They can serve the feast. They cannot replace it. Bake after you know what time Mass is." },
      { question: "When is it too late to start?", answer: "It is early November as this is written. You have weeks. If you read this on December 23, go to confession if you can, find the Vigil, and keep one work of mercy. That is enough to begin." },
      { question: "What is the difference between this list and Catholic Christmas traditions?", answer: "The traditions guide is the map of customs. This page is a short plan for 2026 that a busy house can actually keep." },
    ],
  },
  {
    slug: "christmas-day",
    title: "Christmas Day: What Catholics Celebrate on December 25",
    h1: "Christmas Day: The Nativity of the Lord, Hour by Hour",
    description: "Christmas Day 2026 is Friday, December 25. What the solemnity means: four Masses, the Incarnation, kneeling at the Creed, the octave, and how to keep the day.",
    keywords: "christmas day, christmas day 2026, christmas day catholic, nativity of the lord, december 25, what is christmas day, christmas day mass, christmas day meaning",
    readTime: "13 min",
    datePublished: "2026-11-03",
    crumb: "Christmas Day",
    category: "Liturgy & Worship",
    lede: "Christmas Day is not a morning of paper. It is the solemnity of the Nativity of the Lord: God the Son, born of Mary, in time. The Church is so unwilling to rush it that she gives the day four Masses, from the Vigil through the night, the dawn, and the full light of day.",
    answer: "Christmas Day is December 25 every year. In 2026 it falls on Friday and remains a Holy Day of Obligation. Any Mass of Christmas fulfills it, from the evening of December 24. The day proclaims the Incarnation: the Word became flesh (" + `{{${CBO}john/1/|John 1}}` + "). The Night Gospel is " + `{{${CBO}luke/2/|Luke 2}}` + ". The season begins at First Vespers of the 24th and runs to the Baptism of the Lord, January 10, 2027. " + `{{${CBO_DEC25}|December 25 on Catholic Bible Online}}` + " and " + `{{${CBO_NATIVITY}|the Nativity feast guide}}` + " walk the same day from the calendar side.",
    facts: [
      { label: "Date", value: "Friday, December 25, 2026" },
      { label: "Rank", value: "Solemnity of the Nativity of the Lord" },
      { label: "Obligation", value: "Yes; Vigil of the 24th or any Christmas Mass" },
      { label: "Friday abstinence", value: "Lifted — canon 1251 on solemnities" },
      { label: "Color", value: "White or gold; Gloria returns; kneel at the Incarnation in the Creed" },
    ],
    timeline: [
      { when: "Thursday evening, December 24", what: "First Vespers. Advent ends. Vigil Mass: \"tomorrow you will see his glory.\"" },
      { when: "Night of December 24–25", what: "Mass during the Night. Isaiah 9. Luke 2. Angels and shepherds. Often called Midnight Mass; midnight is a custom." },
      { when: "Dawn, December 25", what: "Mass at Dawn. The shepherds go to Bethlehem. \"Today a light will shine upon us.\"" },
      { when: "Day, December 25", what: "Mass during the Day. " + `{{${CBO}hebrews/1/|Hebrews 1}}` + " and John 1: the Child is the eternal Word." },
      { when: "Evening of the 25th", what: "The octave has begun. The Church is not finished. See [[/blog/catholic-christmas/|the 2026 octave and obligation guide]]." },
    ],
    sections: [
      {
        id: "what-the-day-is",
        heading: "What Christmas Day is",
        paragraphs: [
          "The USCCB calls Christmas one of the most important days of the Church year, second only to Easter, the feast of God becoming flesh. The Latin in carne is the point: not a metaphor, not a seasonal mood. The eternal Son, remaining God, takes a human nature from Mary (CCC 456–483). On this day the Creed pauses. All kneel at \"and by the Holy Spirit was incarnate of the Virgin Mary, and became man\" (GIRM 137).",
          "That kneeling is the meaning of Christmas Day in one gesture. Gifts, trees, and lights are allowed to stand around it. They are not allowed to replace it. " + `{{${CBO_NATIVITY}|Catholic Bible Online's Nativity guide}}` + " says the same in calendar language: God enters history — poverty, census, manger — to redeem it from within.",
        ],
        callout: {
          label: "Every Eucharist is a little Christmas",
          text: "The USCCB notes that every Mass is like Christmas: bread and wine become his Body and Blood, and in a sense he is born anew on the altar. If you only unwrap boxes and never go to the altar, you have kept the shadow of the day.",
        },
      },
      {
        id: "four-masses-slow-motion",
        heading: "Four Masses: the day in slow motion",
        paragraphs: [
          "Most feasts have a Vigil and a Day, or only a Day. Christmas has four distinct formularies. Vatican commentary has called them a way of savoring the event slowly. You are not required to attend four. One fulfills the precept. Priests may celebrate up to three on Christmas.",
        ],
        table: {
          caption: "The four Masses of Christmas Day",
          headers: ["Mass", "The hour it means", "What you hear"],
          rows: [
            ["Vigil (evening of the 24th)", "Tomorrow you will know; still on the threshold", `{{${CBO}matthew/1/|Matthew 1}}` + " — Joseph takes Mary; the Child is named Jesus"],
            ["During the Night", "The birth announced in the dark", `{{${CBO}isaiah/9/|Isaiah 9}}` + "; " + `{{${CBO}titus/2/|Titus 2}}` + "; " + `{{${CBO}luke/2/|Luke 2:1–14}}`],
            ["At Dawn", "Shepherds walking; first light", "Luke 2:15–20; \"Today a light will shine upon us\""],
            ["During the Day", "Full sun: who this Child is", `{{${CBO}isaiah/52/|Isaiah 52}}` + "; " + `{{${CBO}hebrews/1/|Hebrews 1}}` + "; " + `{{${CBO}john/1/|John 1:1–18}}`],
          ],
        },
        callout: {
          label: "Midnight is not a test of faith",
          text: "The Missal says Mass during the Night, not \"must be 12:00.\" A parish at 10 p.m. has not failed. Families with small children may choose the Vigil and still keep Christmas Day whole. Find a time with [[/blog/christmas-mass-near-me/|Christmas Mass near me]].",
        },
      },
      {
        id: "how-to-keep-the-day",
        heading: "How to keep Christmas Day 2026",
        paragraphs: [
          "The day is a Friday. Abstinence does not bind. Obligation does. After Mass, the day can be quiet or crowded; it cannot be Christless. Place the Child if he is not yet in the crib. Read Luke 2 if it was not read at home. Open [[/blog/christmas-gifts/|gifts]] after the Gospel, not as a rival liturgy. Light the [[/blog/christmas-tree/|tree]] if you waited for the blessing. Eat. Sleep. The octave is still coming.",
        ],
        list: [
          "Morning: Mass, unless you went at night. Do not skip because cooking started early.",
          "If someone in the house is angry or grieving, say so to God. The day can hold sorrow. It does not require fake cheer.",
          "Telephone the person who is alone. The shepherds went in haste. You can dial.",
          "Leave the TV's \"Christmas movie\" until after you can still name the Collect.",
          "At some hour, kneel at the crib with no audience. One minute is enough if it is honest.",
        ],
      },
      {
        id: "the-day-is-not-the-season",
        heading: "The day is not the whole season",
        paragraphs: [
          "Christmas Time runs from First Vespers of the Nativity through the Baptism of the Lord (Universal Norms 33). The octave — eight days as one feast — holds Stephen, the Holy Family (Sunday, December 27, 2026), the Holy Innocents, and Mary, Mother of God on January 1. Epiphany in the United States is Sunday, January 3, 2027. Taking the decorations down on the 26th because work resumes is understandable. Calling the feast over is a mistake the shops taught us.",
          "For Mass times, Friday meat, and the octave table, the companion page is [[/blog/catholic-christmas/|Catholic Christmas 2026]]. For customs, [[/blog/catholic-christmas-traditions/|traditions]]. For a plan you can keep, [[/blog/christmas-ideas/|Christmas ideas]]. This page is the day itself.",
        ],
      },
    ],
    prayer: "Word of the Father, you were born this day of the Virgin Mary.\nWe have known nights that felt empty. You filled one of them, in Bethlehem, and you fill this altar still.\nGive us the shepherds' haste, Joseph's obedience, Mary's memory, and the poor a place at our table.\nGlory to God in the highest, and on earth peace. Amen.",
    prayerHeading: "A prayer for Christmas Day",
    related: [
      { href: "/blog/catholic-christmas/", label: "Catholic Christmas 2026: Mass, octave, obligation" },
      { href: "/blog/christmas-ideas/", label: "Catholic Christmas ideas" },
      { href: "/blog/christmas-tree/", label: "The Christmas tree" },
      { href: "/blog/christmas-lights/", label: "Christmas lights" },
      { href: "/blog/christmas-gifts/", label: "Christmas gifts" },
      { href: "/blog/advent/", label: "Advent 2026" },
      { href: "/blog/three-wise-men/", label: "The Magi" },
    ],
    faqs: [
      { question: "When is Christmas Day 2026?", answer: "Friday, December 25, 2026. It is always December 25. The weekday changes; the solemnity does not." },
      { question: "Is Christmas Day a Holy Day of Obligation?", answer: "Yes, every year, including when it is a Friday, Saturday, or Monday. Any Mass of Christmas from the evening of December 24 fulfills it." },
      { question: "What is Christmas Day about, for Catholics?", answer: "The Nativity of the Lord: the eternal Word became flesh and was born of the Virgin Mary. It is the Incarnation made visible in a Child." },
      { question: "Why are there four Christmas Masses?", answer: "So the Church can linger: Vigil (threshold), Night (the birth), Dawn (the shepherds), Day (John 1 — who the Child is). One Mass fulfills the obligation." },
      { question: "Can Catholics eat meat on Christmas Day 2026?", answer: "Yes. It is a Friday solemnity. Canon 1251 lifts abstinence." },
      { question: "Does Christmas Eve Mass count for Christmas Day?", answer: "Yes. The Vigil Mass is a Mass of the Nativity. So is the Mass during the Night." },
      { question: "Why do we kneel during the Creed on Christmas?", answer: "At the words of the Incarnation. GIRM 137 asks for a genuflection on Christmas and on the Annunciation." },
      { question: "When does Christmas Day end and the season continue?", answer: "The day is December 25. The octave and Christmas Time continue. The season ends at the Baptism of the Lord, January 10, 2027." },
    ],
  },
];

export function christmasMomentGuideBySlug(slug: string): LiturgicalFeastGuide | undefined {
  return CHRISTMAS_MOMENT_GUIDES.find((guide) => guide.slug === slug);
}
