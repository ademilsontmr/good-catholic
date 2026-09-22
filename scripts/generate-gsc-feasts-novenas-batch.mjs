/**
 * GSC follow-up batch: upcoming US feasts + situational novenas / patrons.
 * IDs 1451–1462
 * node scripts/generate-gsc-feasts-novenas-batch.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/pages/blog");
const START_ID = 1451;
const PUB = "2026-09-22";

const CBO = {
  home: "https://catholicbibleonline.com/",
  prayers: "https://catholicbibleonline.com/prayers/",
  novenas: "https://catholicbibleonline.com/novenas/",
  stJude: "https://catholicbibleonline.com/novenas/st-jude-novena/",
  stJoseph: "https://catholicbibleonline.com/novenas/",
  stMichael: "https://catholicbibleonline.com/prayers/st-michael-prayer/",
  michaelLent: "https://catholicbibleonline.com/novenas/st-michaels-lent-novena/",
  dailyVerse: "https://catholicbibleonline.com/daily-verses/",
  bible: "https://catholicbibleonline.com/bible/",
};

function esc(s) {
  return JSON.stringify(s);
}
function xml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}
function formatDateLabel(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return `${months[m - 1]} ${d}, ${y}`;
}

const articles = [
  {
    component: "WhenIsMichaelmas2026",
    slug: "when-is-michaelmas-2026",
    feastLabel: "September 29, 2026",
    query: "when is michaelmas 2026",
    h1: "When Is Michaelmas 2026? Date, Meaning & What Catholics Do",
    title: "When Is Michaelmas 2026? September 29 Date Guide | Guide Catholic",
    desc: "Michaelmas 2026 falls on Tuesday, September 29 — the Feast of Saints Michael, Gabriel, and Raphael. Date, meaning, Mass, and St. Michael Prayer for U.S. Catholics.",
    keywords: "when is michaelmas 2026, michaelmas 2026 date, michaelmas day 2026, st michael feast day 2026, feast of st michael the archangel 2026",
    excerpt: "Clear answer: Michaelmas 2026 is Tuesday, September 29 — plus meaning, Mass, and how Americans keep the Feast of the Archangels.",
    category: "Saints & Feast Days",
    icon: "Shield",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    readTime: "12 min",
    cboUrl: CBO.stMichael,
    cboLabel: "St. Michael Prayer on Catholic Bible Online",
    answer: "<strong>Michaelmas 2026 is Tuesday, September 29, 2026</strong> — the Feast of Saints Michael, Gabriel, and Raphael (also called the Feast of the Archangels).",
    lead: "People searching when is michaelmas 2026 usually want one clear date — then what to pray and whether it ends St. Michael's Lent. Here is the short answer with enough depth for Mass and family prayer.",
    sections: [
      { h: "The exact date in 2026", body: `Michaelmas always falls on <strong>September 29</strong>. In 2026 that weekday is <strong>Tuesday</strong>. It is not a U.S. Holy Day of Obligation, but many parishes mark it with the St. Michael Prayer, angelic hymns, and white or festive vestments.` },
      { h: "Michaelmas vs St. Michael's Lent", body: `St. Michael's Lent (often Aug 15–Sep 29) ends on Michaelmas for many U.S. devotees. If you prayed a 40- or 46-day novena, September 29 is thanksgiving, not a tribunal. Close with Confession if needed, then celebrate the feast.` },
      { h: "Who the Church honors that day", body: `The Roman calendar unites Michael, Gabriel, and Raphael — messengers of combat, announcement, and healing. Americans often focus on Michael because of spiritual-warfare devotion, but the missal remembers all three.` },
      { h: "What to do on September 29, 2026", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li>Attend Mass if you can.</li><li>Pray the St. Michael Prayer after Mass or at home.</li><li>Read Daniel 12, Revelation 12, or Tobit 12.</li><li>Thank God for a novena finished — or begin a shorter chaplet habit.</li><li>Teach children the names of the three archangels.</li></ul>` },
      { h: "Related Guide Catholic pages", body: `For a fuller Michaelmas guide see our <Link to="/blog/feast-of-archangels-michaelmas-september-29-2026-guide/" className="text-accent underline underline-offset-2">Feast of the Archangels 2026 article</Link>. For the season hub, open <Link to="/blog/st-michaels-lent-2026/" className="text-accent underline underline-offset-2">St. Michael's Lent 2026</Link>.` },
    ],
    faqs: [
      ["When is Michaelmas 2026?", "Tuesday, September 29, 2026."],
      ["Is Michaelmas a Holy Day of Obligation in the USA?", "No — but attending Mass is still a fitting way to keep the feast."],
      ["Is Michaelmas the same as the Feast of the Archangels?", "Yes. September 29 honors Michael, Gabriel, and Raphael."],
      ["Does St. Michael's Lent end on Michaelmas?", "Many U.S. Catholics end the Assumption-to-Michaelmas novena on September 29."],
    ],
  },
  {
    component: "ListOfSaintsAndWhatTheyProtect",
    slug: "list-of-saints-and-what-they-protect",
    feastLabel: "Patron saints by need",
    query: "list of saints and what they protect",
    h1: "List of Saints and What They Protect: Catholic Patrons by Need",
    title: "List of Saints and What They Protect (Catholic Patrons) | Guide Catholic",
    desc: "List of Catholic saints and what they protect — patrons for jobs, health, family, travel, addiction, students, and impossible causes, with how to ask their intercession.",
    keywords: "list of saints and what they protect, patron saints list, catholic saints by cause, what is each saint the patron of, saints that protect you",
    excerpt: "A practical Catholic list of saints and what they protect — work, health, family, travel, students, addiction, and hopeless cases — plus how patronage really works.",
    category: "Saints & Intercession",
    icon: "Star",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
    readTime: "18 min",
    cboUrl: CBO.novenas,
    cboLabel: "Novenas on Catholic Bible Online",
    answer: "Catholics ask patron saints to <strong>pray for specific needs</strong> — not to replace Christ. Below is a clear list of popular saints and what they are traditionally invoked to protect or help with.",
    lead: "Searchers for list of saints and what they protect want a usable directory, not a theology lecture. This page pairs common needs with the saints Americans actually ask — and how to pray without superstition.",
    sections: [
      { h: "How patronage works (30 seconds)", body: `A patron saint is a friend in heaven linked by history, martyrdom, or devotion to a place, profession, illness, or cause. We ask their intercession the way we ask a holy friend on earth to pray — always through Jesus, never instead of him.` },
      { h: "Health, healing, and mental peace", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li><strong>St. Luke</strong> — physicians, medical care</li><li><strong>St. Raphael the Archangel</strong> — healing journeys, safe travel with illness</li><li><strong>St. Peregrine</strong> — cancer and chronic disease</li><li><strong>St. Dymphna</strong> — anxiety, mental health, trauma</li><li><strong>Our Lady of Lourdes</strong> — healing pilgrimages and the sick</li></ul>` },
      { h: "Work, money, and the home", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li><strong>St. Joseph</strong> — workers, fathers, buying/selling a house</li><li><strong>St. Homobonus</strong> — business integrity</li><li><strong>St. Matthew</strong> — accountants, financial stewards</li><li><strong>St. Cajetan</strong> — job seekers</li><li><strong>St. Anthony of Padua</strong> — lost items, sometimes lost opportunities</li></ul>` },
      { h: "Family, marriage, and children", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li><strong>St. Anne</strong> — mothers, grandparents, infertility hopes</li><li><strong>St. Monica</strong> — parents of wandering children</li><li><strong>St. Gerard Majella</strong> — pregnancy and safe delivery</li><li><strong>Holy Family</strong> — household peace</li><li><strong>St. Valentine / St. Priscilla traditions</strong> — love ordered to marriage (catechize carefully)</li></ul>` },
      { h: "Impossible causes and spiritual combat", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li><strong>St. Jude Thaddeus</strong> — impossible / hopeless cases</li><li><strong>St. Rita of Cascia</strong> — desperate situations, difficult marriages</li><li><strong>St. Michael the Archangel</strong> — protection from evil, spiritual warfare</li><li><strong>St. Benedict</strong> — protection, deliverance, holy dying</li><li><strong>Our Lady Undoer of Knots</strong> — tangled problems</li></ul>` },
      { h: "Students, travel, and daily dangers", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li><strong>St. Thomas Aquinas</strong> — students, exams</li><li><strong>St. Joseph of Cupertino</strong> — difficult tests</li><li><strong>St. Christopher</strong> — travelers (popular devotion)</li><li><strong>Guardian Angel</strong> — daily protection for each person</li><li><strong>St. Florian</strong> — firefighters; <strong>St. Michael</strong> often for police/military too</li></ul>` },
      { h: "How to use this list without superstition", body: `Pick one saint for one concrete intention. Pray a short prayer daily for nine days (a novena) or simply an Our Father and Hail Mary. Go to Mass and Confession. Charity and justice matter more than burying statues. For structured novenas, browse <a href="${CBO.novenas}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online's novena library</a>.` },
      { h: "Go deeper on Guide Catholic", body: `See also our <Link to="/blog/patron-saints-guide/" className="text-accent underline underline-offset-2">Patron Saints Guide</Link>, <Link to="/blog/st-jude-novena-guide/" className="text-accent underline underline-offset-2">St. Jude Novena</Link>, and <Link to="/blog/st-joseph-novena-buying-house-guide/" className="text-accent underline underline-offset-2">St. Joseph for a house</Link>.` },
    ],
    faqs: [
      ["What does it mean that a saint 'protects' something?", "It means Catholics traditionally ask that saint's intercession for a related need — not that the saint replaces God's providence."],
      ["Can I have more than one patron saint?", "Yes. Confirmation saints, parish patrons, and cause-based patrons often overlap."],
      ["Is asking saints to pray idolatry?", "No. The Church distinguishes worship (latria) due to God alone from honor (dulia) given to saints."],
      ["Who is the patron of impossible causes?", "St. Jude Thaddeus is the best-known; St. Rita is also invoked for desperate situations."],
    ],
  },
  {
    component: "StJudeNovenaPrayer9DaysGuide",
    slug: "st-jude-novena-prayer-9-days-guide",
    feastLabel: "9-day St. Jude novena",
    query: "st jude novena prayer 9 days guide",
    h1: "St. Jude Novena Prayer: 9-Day Guide with Full Intention Steps",
    title: "St. Jude Novena Prayer (9 Days) Complete Guide | Guide Catholic",
    desc: "St. Jude novena prayer for 9 days — step-by-step guide, how to set your intention, traditional structure, feast day (Oct 28), and where to pray the full text.",
    keywords: "st jude novena prayer 9 days guide, st jude novena 9 days, saint jude novena prayer, novena to st jude impossible cases, how to pray st jude novena",
    excerpt: "A practical 9-day St. Jude novena guide for impossible causes — intention, daily steps, feast timing, and links to the full prayer text.",
    category: "Prayer & Devotion",
    icon: "Heart",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    readTime: "14 min",
    cboUrl: CBO.stJude,
    cboLabel: "St. Jude Novena on Catholic Bible Online",
    answer: "The St. Jude novena is a <strong>nine-day prayer</strong> to the patron of impossible causes. Name one intention, pray daily for nine days, and trust God's timing — not magic formulas.",
    lead: "Americans searching st jude novena prayer 9 days guide want the method, not fluff. This page gives the structure, timing around October 28, and where to read the full traditional text free.",
    sections: [
      { h: "Who St. Jude is", body: `St. Jude Thaddeus was an apostle and is linked with the New Testament Letter of Jude. Devotion to him as patron of hopeless cases grew strongly in the U.S. in the twentieth century. His feast with St. Simon is <strong>October 28</strong>.` },
      { h: "How to pray the 9 days — step by step", body: `<ol class="list-decimal list-inside text-text space-y-3 mb-6"><li>Write one clear intention (person + need).</li><li>Choose a set time each day for nine consecutive days.</li><li>Begin with the Sign of the Cross.</li><li>Pray the St. Jude novena prayer (full text linked below).</li><li>Add an Our Father, Hail Mary, and Glory Be.</li><li>End by entrusting the outcome to God's will.</li><li>On day 9, thank God — and consider Mass or Confession.</li></ol>` },
      { h: "When to start for the October 28 feast", body: `To finish on the feast, begin <strong>October 20</strong> and end October 28. You may also start any day of the year for an urgent need — novenas are not limited to feast seasons.` },
      { h: "What “impossible” really means", body: `Impossible causes include medical crises, addiction, broken relationships, legal dead ends, and spiritual dryness. St. Jude's intercession is hope under the Cross — not a guarantee of your preferred outcome.` },
      { h: "Full prayer text", body: `For the complete traditional prayer and daily pages, open the free <a href="${CBO.stJude}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. Jude Novena on Catholic Bible Online</a>. Also see our broader <Link to="/blog/st-jude-novena-guide/" className="text-accent underline underline-offset-2">St. Jude Novena Guide</Link>.` },
      { h: "Thanksgiving after favors", body: `Many devotees publish a short thank-you or give alms after answered prayer. Gratitude spreads hope; it is not a fee for grace.` },
    ],
    faqs: [
      ["How many days is the St. Jude novena?", "Nine consecutive days."],
      ["When is St. Jude's feast day?", "October 28 (with St. Simon)."],
      ["Can I pray the novena for someone else?", "Yes — name them clearly in your intention."],
      ["Where is the full prayer text?", "Catholic Bible Online hosts a free St. Jude Novena with the traditional prayers."],
    ],
  },
  {
    component: "StJosephNovenaBuyingHouse2026",
    slug: "st-joseph-novena-for-buying-a-house",
    feastLabel: "St. Joseph & the home",
    query: "st joseph novena for buying a house",
    h1: "St. Joseph Novena for Buying a House: Prayer, Statue & Trust",
    title: "St. Joseph Novena for Buying a House (Guide) | Guide Catholic",
    desc: "How to pray a St. Joseph novena when buying a house — 9-day steps, the buried statue tradition explained carefully, home blessing, and trust in Providence.",
    keywords: "st joseph novena for buying a house, st joseph prayer house, burying st joseph statue, novena for home buyers catholic, st joseph real estate prayer",
    excerpt: "Catholic guide to asking St. Joseph's help when buying a house — novena steps, statue customs without superstition, and blessing a new home.",
    category: "Prayer & Devotion",
    icon: "Home",
    bg: "bg-yellow-50",
    iconColor: "text-yellow-700",
    readTime: "15 min",
    cboUrl: CBO.novenas,
    cboLabel: "Novenas on Catholic Bible Online",
    answer: "Catholics seeking a home ask <strong>St. Joseph</strong> — guardian of the Holy Family — through a nine-day novena, honest effort in the search, and trust that a house is a gift ordered to family life, not a lucky charm.",
    lead: "Searches for st joseph novena for buying a house spike whenever mortgages and moving stress collide with faith. Here is a clear Catholic method that keeps prayer and prudence together.",
    sections: [
      { h: "Why St. Joseph for a house?", body: `St. Joseph protected Mary and Jesus through Bethlehem, Egypt, and Nazareth. Asking him for a dwelling is asking the same fatherly care for your household — shelter, work, and peace.` },
      { h: "9-day novena outline for buyers", body: `<ol class="list-decimal list-inside text-text space-y-3 mb-6"><li>Name your intention: city, budget range, and family needs.</li><li>Pray daily for nine days at a fixed time.</li><li>Include a prayer to St. Joseph and one decade of the Rosary.</li><li>Do one practical next step each day (call agent, review budget, declutter).</li><li>End day 9 with Mass if possible.</li></ol>` },
      { h: "The buried statue tradition — without superstition", body: `Some Catholics bury a St. Joseph statue as a popular custom when selling or seeking a home. The Church does not require it. If you use the custom, treat it as a reminder to pray — never as magic. Do not treat Joseph as a real-estate charm. Our longer guide on <Link to="/blog/st-joseph-novena-buying-house-guide/" className="text-accent underline underline-offset-2">buying a house with St. Joseph</Link> covers the custom carefully.` },
      { h: "Virtue checklist while you wait", body: `Honesty with lenders, justice toward sellers, patience with delays, and charity if another family needs the house more. Prayer that ignores virtue is incomplete.` },
      { h: "When you move in", body: `Ask a priest for a house blessing when possible. Place a crucifix and a small image of the Holy Family. Pray grace before meals on day one — that is how a house becomes a home.` },
      { h: "Related prayers", body: `See also <Link to="/blog/st-joseph-novena-selling-house/" className="text-accent underline underline-offset-2">St. Joseph novena for selling a house</Link> and <Link to="/blog/prayer-to-st-joseph/" className="text-accent underline underline-offset-2">Prayer to St. Joseph</Link>.` },
    ],
    faqs: [
      ["Is there an official St. Joseph house-buying novena?", "There are many traditional prayers to St. Joseph; the Church does not mandate one real-estate formula."],
      ["Do I have to bury a statue?", "No. It is an optional popular custom, not a requirement of faith."],
      ["Can renters pray this too?", "Yes — ask for a stable, affordable dwelling and peace in your household."],
      ["What if the deal falls through?", "Keep praying and acting; unanswered preferences are not unanswered love."],
    ],
  },
  {
    component: "StSimonAndJudeFeastOctober282026",
    slug: "st-simon-and-jude-feast-day-october-28-2026",
    feastLabel: "October 28, 2026",
    query: "st jude feast day 2026",
    h1: "St. Simon and Jude Feast Day (October 28, 2026): Novena Timing & Mass",
    title: "St. Simon & Jude Feast Day October 28, 2026 | Guide Catholic",
    desc: "Feast of Saints Simon and Jude on October 28, 2026 — what the day means, when to start a St. Jude novena, and how U.S. Catholics keep the feast.",
    keywords: "st jude feast day 2026, simon and jude october 28, feast of st jude 2026, st simon and jude feast day",
    excerpt: "October 28, 2026: Feast of Saints Simon and Jude — date, meaning, novena countdown, and parish customs for U.S. Catholics.",
    category: "Saints & Feast Days",
    icon: "Heart",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    readTime: "13 min",
    cboUrl: CBO.stJude,
    cboLabel: "St. Jude Novena on Catholic Bible Online",
    answer: "The Feast of Saints Simon and Jude is <strong>Wednesday, October 28, 2026</strong>. Many Catholics finish a St. Jude novena that day.",
    lead: "October's apostolic feast is the natural finish line for St. Jude devotion. Here is the 2026 date, who Simon and Jude are, and how to prepare in the United States.",
    sections: [
      { h: "Date and liturgical note", body: `October 28, 2026 is a weekday feast of apostles. Red vestments often appear. It is not a U.S. Holy Day of Obligation.` },
      { h: "Who Simon and Jude are", body: `Simon the Zealot and Jude Thaddeus are listed among the Twelve. Jude's New Testament letter urges perseverance in faith. Popular devotion emphasizes Jude's care for desperate needs.` },
      { h: "Novena countdown for 2026", body: `Start a nine-day St. Jude novena on <strong>October 20, 2026</strong> to conclude on the feast. Pair it with Confession if your intention involves conversion or reconciliation.` },
      { h: "Parish and home ideas", body: `Bring a written intention to Mass, light a candle if your parish allows, and share one answered-hope story at dinner — hope is contagious.` },
      { h: "Keep praying after the feast", body: `If the need remains, continue simple daily prayer. Feasts are peaks, not the only days heaven hears.` },
    ],
    faqs: [
      ["When is St. Jude's feast day in 2026?", "October 28, 2026 (with St. Simon)."],
      ["When should I start the novena for the feast?", "October 20, 2026 for a nine-day finish on October 28."],
      ["Is October 28 a Holy Day of Obligation?", "No, not in the United States."],
    ],
  },
  {
    component: "ChristTheKingSunday2026Usa",
    slug: "christ-the-king-sunday-2026-usa",
    feastLabel: "November 22, 2026",
    query: "christ the king 2026",
    h1: "Christ the King Sunday 2026 (November 22): Meaning & Mass Guide",
    title: "Christ the King Sunday 2026 — November 22 Guide | Guide Catholic",
    desc: "Christ the King Sunday 2026 falls on November 22 — the last Sunday of the liturgical year before Advent. Meaning, readings focus, and how U.S. Catholics keep the solemnity.",
    keywords: "christ the king 2026, feast of christ the king 2026, when is christ the king sunday 2026, solemnity of christ the king usa",
    excerpt: "Christ the King Sunday 2026 is November 22 — what the solemnity means, why it closes the year, and how to prepare for Advent.",
    category: "Saints & Feast Days",
    icon: "Crown",
    bg: "bg-violet-50",
    iconColor: "text-violet-700",
    readTime: "14 min",
    cboUrl: CBO.dailyVerse,
    cboLabel: "Daily Bible Verse on Catholic Bible Online",
    answer: "The Solemnity of Our Lord Jesus Christ, King of the Universe, is <strong>Sunday, November 22, 2026</strong> in the Roman calendar — the last Sunday before Advent begins (November 29).",
    lead: "Christ the King 2026 closes Ordinary Time and asks a hard question: who rules your week — Christ or lesser kings? This guide is for U.S. Catholics heading into Advent.",
    sections: [
      { h: "Why this feast exists", body: `Instituted by Pius XI (1925) amid rising ideologies that claimed total loyalty, the feast proclaims Christ's kingship over hearts, nations, and history — a kingship of truth and the Cross, not domination.` },
      { h: "2026 date and Advent connection", body: `November 22, 2026 is followed by Advent I on November 29. Use Christ the King as a spiritual inventory before the violet season starts.` },
      { h: "How to keep the solemnity", body: `Attend Sunday Mass with attention to the Preface of Christ the King. Pray a decade for civic leaders. Choose one area of life to re-submit to Christ's reign (phone use, finances, speech).` },
      { h: "Family catechesis idea", body: `Ask children: “If Jesus is King, what would he want our home to look like this week?” Write three answers and post them on the fridge until Advent wreath night.` },
      { h: "Bridge to Advent 2026", body: `See our <Link to="/blog/advent-2026-start-date-when-does-advent-begin/" className="text-accent underline underline-offset-2">Advent 2026 start date guide</Link> to plan the next season.` },
    ],
    faqs: [
      ["When is Christ the King Sunday 2026?", "November 22, 2026."],
      ["Is it a Holy Day of Obligation?", "It falls on Sunday — Sunday Mass obligation applies."],
      ["When does Advent 2026 begin?", "November 29, 2026."],
    ],
  },
  {
    component: "CatholicThanksgivingPrayerUsa2026",
    slug: "catholic-thanksgiving-prayer-usa-2026",
    feastLabel: "November 26, 2026",
    query: "catholic thanksgiving prayer",
    h1: "Catholic Thanksgiving Prayer (USA 2026): Grace, Mass & Family Rites",
    title: "Catholic Thanksgiving Prayer USA 2026 | Guide Catholic",
    desc: "Catholic Thanksgiving prayers for November 26, 2026 — grace before the meal, Mass options, gratitude rooted in the Eucharist, and family customs for U.S. Catholics.",
    keywords: "catholic thanksgiving prayer, thanksgiving prayer catholic 2026, grace before thanksgiving meal, catholic thanksgiving mass",
    excerpt: "Prayers and Mass ideas for Catholic Thanksgiving 2026 in the United States — Eucharist as thanksgiving, table grace, and family gratitude without forgetting the poor.",
    category: "Prayer & Devotion",
    icon: "Heart",
    bg: "bg-orange-50",
    iconColor: "text-orange-700",
    readTime: "12 min",
    cboUrl: CBO.prayers,
    cboLabel: "Prayer library on Catholic Bible Online",
    answer: "U.S. Thanksgiving 2026 is <strong>Thursday, November 26</strong>. Catholics keep it best by linking the meal to the Eucharist — whose very name means thanksgiving — and by praying before eating.",
    lead: "A national holiday of thanks can become shallow. Here is a Catholic way to pray Thanksgiving 2026 that stays tied to the Mass and to the poor.",
    sections: [
      { h: "Eucharist means thanksgiving", body: `Before the turkey, remember: every Mass is thanksgiving. If your parish offers a morning Mass on Thanksgiving Day, prioritize it — even a short liturgy reorders the feast.` },
      { h: "A simple table grace", body: `“Bless us, O Lord, and these Thy gifts… and make us mindful of the hungry. Through Christ our Lord. Amen.” Add one sentence naming a concrete mercy from the past year.` },
      { h: "Family rite that takes five minutes", body: `Go around the table: each person names one gift and one person to pray for. End with a Hail Mary for those who have no meal today.` },
      { h: "Works of mercy that fit the day", body: `Invite someone lonely, donate to a food pantry before shopping for extras, or write a thank-you to a priest, teacher, or nurse.` },
      { h: "Gratitude after hard years", body: `Catholic thanksgiving includes the Cross. You may thank God for surviving a loss without pretending the wound is gone.` },
    ],
    faqs: [
      ["When is Thanksgiving Day 2026 in the USA?", "Thursday, November 26, 2026."],
      ["Is Thanksgiving a Catholic holy day?", "It is a civic holiday; Catholics sanctify it through Mass and prayer."],
      ["What prayer should we say before the meal?", "The traditional Catholic grace before meals, plus a short personal thanksgiving."],
    ],
  },
  {
    component: "PresentationOfMaryNovember212026",
    slug: "presentation-of-mary-november-21-2026",
    feastLabel: "November 21, 2026",
    query: "presentation of mary 2026",
    h1: "Presentation of Mary (November 21, 2026): Feast Day Guide",
    title: "Presentation of Mary November 21, 2026 | Guide Catholic",
    desc: "Presentation of the Blessed Virgin Mary on November 21, 2026 — meaning, tradition, prayers, and how U.S. Catholics can keep the memorial before Advent.",
    keywords: "presentation of mary 2026, november 21 catholic feast, presentation of the blessed virgin mary, our lady presentation feast",
    excerpt: "November 21, 2026: Presentation of Mary — what the feast remembers, how to pray, and why it prepares hearts for Advent.",
    category: "Saints & Feast Days",
    icon: "Star",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
    readTime: "12 min",
    cboUrl: CBO.prayers,
    cboLabel: "Marian prayers on Catholic Bible Online",
    answer: "The Presentation of the Blessed Virgin Mary is remembered on <strong>Saturday, November 21, 2026</strong> — a memorial of Mary's dedication to God, kept one week before Advent begins.",
    lead: "Quiet Marian memorials often get skipped. November 21, 2026 is a gift: consecrate the week before Advent with Mary’s example of belonging wholly to God.",
    sections: [
      { h: "What the feast remembers", body: `Tradition (especially the Protoevangelium of James) recounts Mary presented in the Temple as a child. The liturgy honors her lifelong availability to God — fulfilled later in the Annunciation.` },
      { h: "Why it matters before Advent 2026", body: `Advent starts November 29. Celebrating Mary's presentation trains willingness: “Be it done unto me.” Use the day to declutter one distraction before the violet season.` },
      { h: "Prayers for November 21", body: `Pray the Memorare, a decade of the Joyful Mysteries, or the Collect of the day if you have a missal. Visit <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online prayers</a> for Marian texts.` },
      { h: "Family idea", body: `Bless children's backpacks or work bags and pray that every place they enter becomes a small temple of charity.` },
    ],
    faqs: [
      ["When is the Presentation of Mary 2026?", "November 21, 2026."],
      ["Is it in the Bible?", "The Gospels do not narrate it; the Church keeps it through Tradition and liturgy."],
      ["How does it relate to Advent?", "It falls the week before Advent 2026 and invites total availability to God."],
    ],
  },
  {
    component: "StAndrewChristmasNovena2026",
    slug: "st-andrew-christmas-novena-2026",
    feastLabel: "November 30 – December 24, 2026",
    query: "st andrew christmas novena",
    h1: "St. Andrew Christmas Novena 2026: Dates, Prayer & How to Begin",
    title: "St. Andrew Christmas Novena 2026 (Nov 30 Start) | Guide Catholic",
    desc: "St. Andrew Christmas Novena 2026 begins November 30 — traditional prayer said 15 times a day until Christmas Eve, with dates and tips for U.S. Catholics.",
    keywords: "st andrew christmas novena 2026, christmas novena st andrew, november 30 christmas novena, st andrew feast day 2026",
    excerpt: "Begin the St. Andrew Christmas Novena on November 30, 2026 — dates, the traditional prayer rhythm, and how to keep it through Advent.",
    category: "Prayer & Devotion",
    icon: "Sparkles",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    readTime: "13 min",
    cboUrl: CBO.novenas,
    cboLabel: "Novenas on Catholic Bible Online",
    answer: "The popular St. Andrew Christmas Novena traditionally begins on <strong>St. Andrew's Day, November 30, 2026</strong>, and continues until Christmas Eve — often prayed fifteen times daily.",
    lead: "If Advent feels abstract, the St. Andrew Christmas Novena gives a concrete daily act from November 30 through December 24, 2026.",
    sections: [
      { h: "2026 start date", body: `St. Andrew's feast is <strong>Monday, November 30, 2026</strong> — the day after Advent begins (Nov 29). Starting the Christmas novena that Monday is a classic U.S. Catholic custom.` },
      { h: "How the devotion is usually prayed", body: `Many pray the short Christmas anticipation prayer fifteen times a day from Nov 30 to Dec 24. If fifteen is too many, begin with once morning and night — fidelity beats burnout.` },
      { h: "Pair it with Advent practices", body: `Keep an Advent wreath, read one Isaiah passage weekly, and go to Confession before Christmas. The novena is fuel, not a substitute for the season's sacraments.` },
      { h: "Intention ideas", body: `Peace in the family, return of a loved one to Mass, sobriety, or gratitude for the Incarnation itself.` },
      { h: "See also", body: `<Link to="/blog/advent-2026-start-date-when-does-advent-begin/" className="text-accent underline underline-offset-2">When Advent 2026 begins</Link> and <Link to="/blog/immaculate-conception-december-8-2026-holy-day-usa/" className="text-accent underline underline-offset-2">Immaculate Conception Dec 8, 2026</Link>.` },
    ],
    faqs: [
      ["When does the St. Andrew Christmas Novena start in 2026?", "November 30, 2026."],
      ["How long does it last?", "From St. Andrew's Day through Christmas Eve (December 24)."],
      ["Must I pray it fifteen times a day?", "That is the traditional form; a smaller faithful rhythm is better than quitting."],
    ],
  },
  {
    component: "HolySoulsNovenaAllSouls2026",
    slug: "holy-souls-novena-all-souls-2026",
    feastLabel: "November 1–9, 2026",
    query: "novena for the holy souls",
    h1: "Holy Souls Novena for All Souls 2026: How to Pray for the Dead",
    title: "Holy Souls Novena & All Souls 2026 Guide | Guide Catholic",
    desc: "How to pray a novena for the Holy Souls around All Souls Day 2026 — indulgences, Masses, cemetery visits, and practical mercy for the faithful departed.",
    keywords: "novena for the holy souls, all souls day 2026 novena, pray for souls in purgatory, holy souls novena november",
    excerpt: "A Catholic novena approach for the Holy Souls around All Saints and All Souls 2026 — Mass, indulgences, and cemetery prayer without confusion.",
    category: "Prayer & Devotion",
    icon: "Flame",
    bg: "bg-slate-100",
    iconColor: "text-slate-700",
    readTime: "15 min",
    cboUrl: CBO.prayers,
    cboLabel: "Prayers on Catholic Bible Online",
    answer: "Around <strong>All Souls Day (November 2, 2026)</strong>, Catholics intensify prayer for the faithful departed — Masses, the Eternal Rest prayer, cemetery visits, and novenas for the Holy Souls.",
    lead: "All Souls week is peak search season for praying the dead home to God. Here is a clear 2026 plan that stays faithful to Church teaching on purgatory and mercy.",
    sections: [
      { h: "All Saints and All Souls 2026 dates", body: `All Saints is <strong>Sunday, November 1, 2026</strong> (Holy Day patterns may interact with Sunday). All Souls is <strong>Monday, November 2, 2026</strong>. See our guides: <Link to="/blog/all-saints-day-november-1-2026-holy-day-obligation/" className="text-accent underline underline-offset-2">All Saints 2026</Link> and <Link to="/blog/all-souls-day-november-2-2026-prayers-mass-times/" className="text-accent underline underline-offset-2">All Souls 2026</Link>.` },
      { h: "A simple nine-day pattern", body: `From Oct 25–Nov 2 or Nov 2–10, pray daily: Eternal Rest prayer, one decade of the Rosary for named departed, and one small sacrifice offered for them.` },
      { h: "Mass is the greatest help", body: `Have Mass offered for the deceased when you can. Sunday and weekday Mass intentions are concrete charity.` },
      { h: "Indulgences — check current norms", body: `The Church attaches indulgences to certain All Souls practices (cemetery visits, prayers). Follow current norms from your diocese or the Manual of Indulgences — conditions usually include Confession, Communion, and prayer for the Pope's intentions.` },
      { h: "Comfort without denial", body: `Grief and hope can coexist. Purgatory is mercy completing love — not a rejection of the Cross.` },
    ],
    faqs: [
      ["When is All Souls Day 2026?", "November 2, 2026."],
      ["What prayer is used for the dead?", "The Eternal Rest (Requiem) prayer is the classic short form."],
      ["Can I pray a novena for one person?", "Yes — name them each day and offer Mass if possible."],
    ],
  },
  {
    component: "StRitaNovenaImpossibleCauses",
    slug: "st-rita-novena-impossible-causes",
    feastLabel: "St. Rita of Cascia",
    query: "st rita novena impossible causes",
    h1: "St. Rita Novena for Impossible Causes: 9-Day Catholic Guide",
    title: "St. Rita Novena for Impossible Causes | Guide Catholic",
    desc: "St. Rita of Cascia novena for impossible causes — who she is, how to pray nine days, intentions for marriage and reconciliation, and feast day (May 22).",
    keywords: "st rita novena, st rita of cascia novena, novena for impossible causes st rita, saint rita prayer difficult marriage",
    excerpt: "Pray a St. Rita novena for desperate situations — impossible causes, difficult marriages, and reconciliation — with clear Catholic steps.",
    category: "Prayer & Devotion",
    icon: "Flower2",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    readTime: "14 min",
    cboUrl: CBO.novenas,
    cboLabel: "Novenas on Catholic Bible Online",
    answer: "St. Rita of Cascia is invoked for <strong>impossible and desperate causes</strong>, especially family wounds. A novena is nine days of focused prayer with a clear intention and trust in God's will.",
    lead: "Where St. Jude is widely known, St. Rita is the patron many turn to for marriages and situations that feel stuck. This guide keeps her story and the novena practical.",
    sections: [
      { h: "Who St. Rita is", body: `Rita of Cascia (1381–1457) endured a difficult marriage, the murder of family members, and later life as an Augustinian nun. She is often called patron of impossible causes and of difficult marriages.` },
      { h: "How to pray a 9-day novena", body: `Set one intention. Each day: Sign of the Cross, prayer to St. Rita, Our Father, Hail Mary, Glory Be, and a short act of forgiveness if your intention involves resentment.` },
      { h: "Intentions that fit her patronage", body: `Reconciliation in marriage, peace after violence in a family line, infertility of hope (not only of body), and any knot that human strategies cannot untie.` },
      { h: "Feast day", body: `St. Rita's feast is <strong>May 22</strong>. You may pray her novena any time of year.` },
      { h: "Pair with St. Jude when needed", body: `Some Catholics pray both patrons for the same crisis. See <Link to="/blog/st-jude-novena-prayer-9-days-guide/" className="text-accent underline underline-offset-2">St. Jude 9-day guide</Link>.` },
    ],
    faqs: [
      ["What is St. Rita the patron of?", "Impossible causes and difficult marriages, among other intentions."],
      ["When is her feast day?", "May 22."],
      ["Can I pray her novena and St. Jude's together?", "Yes — keep intentions clear and avoid treating prayer like stacking charms."],
    ],
  },
  {
    component: "StFrancisBlessingOfAnimalsOctober42026",
    slug: "st-francis-blessing-of-animals-october-4-2026",
    feastLabel: "October 4, 2026",
    query: "st francis feast day 2026",
    h1: "St. Francis Feast Day 2026 (Oct 4): Blessing of Animals & How to Keep It",
    title: "St. Francis Feast Day 2026 — Blessing of Animals Guide | Guide Catholic",
    desc: "St. Francis of Assisi feast day October 4, 2026 — blessing of animals, Canticle themes, poverty of spirit, and parish customs for U.S. Catholics.",
    keywords: "st francis feast day 2026, st francis of assisi feast day 2026, blessing of the animals 2026, october 4 st francis",
    excerpt: "October 4, 2026: St. Francis feast day — animal blessings, care for creation, and practical ways to keep the feast beyond a photo op.",
    category: "Saints & Feast Days",
    icon: "Bird",
    bg: "bg-lime-50",
    iconColor: "text-lime-700",
    readTime: "13 min",
    cboUrl: CBO.dailyVerse,
    cboLabel: "Daily verses on Catholic Bible Online",
    answer: "The Feast of St. Francis of Assisi is <strong>Sunday, October 4, 2026</strong>. Many U.S. parishes offer a blessing of animals near this date.",
    lead: "GSC shows strong interest in St. Francis feast day 2026 with weak CTR on generic titles. This page answers the date and the blessing-of-animals custom Americans actually look for.",
    sections: [
      { h: "Date in 2026", body: `October 4, 2026 is a Sunday — a natural day for parish animal blessings on the church lawn after Mass.` },
      { h: "Blessing of animals — what it is", body: `A priest or deacon may bless pets as creatures of God. Bring animals calmly, clean up after them, and teach children that Francis loved creation because he loved the Creator.` },
      { h: "More than pets", body: `Keep the feast with a work of mercy for the poor, a simpler meal, or reading a portion of the Canticle of the Creatures.` },
      { h: "Fuller biography", body: `See our <Link to="/blog/st-francis-feast-day-october-4-2026-guide/" className="text-accent underline underline-offset-2">St. Francis October 4, 2026 guide</Link> for history and spirituality.` },
    ],
    faqs: [
      ["When is St. Francis feast day 2026?", "October 4, 2026."],
      ["Do all parishes bless animals?", "Many do near October 4; check your bulletin."],
      ["Is the blessing only for dogs and cats?", "Any pet may be brought if the parish allows; follow local instructions."],
    ],
  },
];

function generate(a) {
  const sections = a.sections
    .map(
      (s) => `
              <h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(s.h)}</h2>
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: ${esc(s.body)} }} />`
    )
    .join("\n");

  const faqs = a.faqs
    .map(
      ([q, ans]) =>
        `                { question: ${esc(q)}, answer: ${esc(ans)} }`
    )
    .join(",\n");

  const cboBox = a.cboUrl
    ? `
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6">
                <p className="text-text leading-relaxed mb-3">
                  For free full prayer texts and related devotionals, visit{" "}
                  <a href="${a.cboUrl}" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">
                    ${xml(a.cboLabel)}
                  </a>
                  .
                </p>
              </div>`
    : "";

  return `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ${a.icon}, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";

export default function ${a.component}() {
  return (
    <>
      <Helmet>
        <title>{${esc(a.title)}}</title>
        <meta name="description" content={${esc(a.desc)}} />
        <meta name="keywords" content={${esc(a.keywords)}} />
        <link rel="canonical" href="https://guidecatholic.com/blog/${a.slug}/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ArticleSchema
        title={${esc(a.h1)}}
        description={${esc(a.desc)}}
        url="https://guidecatholic.com/blog/${a.slug}/"
        datePublished="${PUB}"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://guidecatholic.com/" },
          { name: "Blog", url: "https://guidecatholic.com/blog/" },
          { name: ${esc(a.query)}, url: "https://guidecatholic.com/blog/${a.slug}/" },
        ]}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="bg-background-muted/50 py-3 mt-16">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-text-muted">
              <Link to="/" className="hover:text-accent">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span>/</span>
              <span className="text-text">${xml(a.query)}</span>
            </nav>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8">
              <ArrowLeft className="w-4 h-4" />Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4 flex-wrap">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">${xml(a.category)}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />${formatDateLabel(PUB)}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />${a.readTime}</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
                ${xml(a.h1)}
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                ${xml(a.lead)}
              </p>
            </header>

            <div className="aspect-video ${a.bg} rounded-2xl flex items-center justify-center mb-10">
              <${a.icon} className="w-24 h-24 ${a.iconColor}" strokeWidth={1.5} />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: ${esc(a.answer)} }} />
              </div>
${cboBox}
${sections}

              <QuizCTA
                title={${esc("How is your prayer life?")}}
                description={${esc("Take our Catholic life assessment for personalized next steps in prayer and the sacraments.")}}
              />
            </div>

            <BlogFAQ
              linkAnswersSlug="${a.slug}"
              faqs={[
${faqs}
              ]}
            />
            <RelatedArticles currentSlug="${a.slug}" />
            <ArticleBottomCTA />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
`;
}

const blog = [];
const lazy = [];
const routes = [];
const sitemap = [];

for (let i = 0; i < articles.length; i++) {
  const a = articles[i];
  fs.writeFileSync(path.join(OUT, `${a.component}.tsx`), generate(a));
  const id = START_ID + i;
  blog.push(`  {
    id: ${id},
    slug: "${a.slug}",
    title: ${esc(a.h1)},
    excerpt: ${esc(a.excerpt)},
    date: "${PUB}",
    readTime: "${a.readTime}",
    category: ${esc(a.category)},
    icon: ${a.icon},
    bgColor: "${a.bg}",
    iconColor: "${a.iconColor}"
  }`);
  lazy.push(`const ${a.component} = lazy(() => import("./pages/blog/${a.component}"));`);
  routes.push(`            <Route path="/blog/${a.slug}/" element={<${a.component} />} />`);
  sitemap.push(`  <url>
    <loc>https://guidecatholic.com/blog/${a.slug}/</loc>
    <lastmod>${PUB}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
  console.log("wrote", a.slug);
}

fs.writeFileSync(path.join(__dirname, "gsc-batch-blog.txt"), blog.join(",\n") + ",\n");
fs.writeFileSync(path.join(__dirname, "gsc-batch-lazy.txt"), lazy.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "gsc-batch-routes.txt"), routes.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "gsc-batch-sitemap.txt"), sitemap.join("\n") + "\n");
console.log(`Done: ${articles.length} articles, IDs ${START_ID}–${START_ID + articles.length - 1}`);
