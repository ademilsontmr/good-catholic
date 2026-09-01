/**
 * Generate 12 SEO feast-day articles (Sep–Dec 2026) for U.S. Catholics.
 * node scripts/generate-us-feast-seo-2026.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "../src/pages/blog");
const START_ID = 1439;
const PUB = "2026-08-31";

const CBO = {
  home: "https://catholicbibleonline.com/",
  prayers: "https://catholicbibleonline.com/prayers/",
  novenas: "https://catholicbibleonline.com/novenas/",
  rosary: "https://catholicbibleonline.com/prayers/holy-rosary/",
  guardianAngel: "https://catholicbibleonline.com/prayers/guardian-angel-prayer/",
  stMichael: "https://catholicbibleonline.com/prayers/st-michael-prayer/",
  nativityMary: "https://catholicbibleonline.com/blog/nativity-of-the-blessed-virgin-mary-september-8-feast-day-guide-2026/",
  holyCross: "https://catholicbibleonline.com/blog/exaltation-of-the-holy-cross-september-14-feast-day-guide-2026/",
  ourLadySorrows: "https://catholicbibleonline.com/blog/our-lady-of-sorrows-september-15-catholic-feast-day-guide-2026/",
  advent2026: "https://catholicbibleonline.com/blog/advent-2026-novena-catholic-guide-dates-prayers-how-to-prepare/",
  dailyVerse: "https://catholicbibleonline.com/daily-verses/",
  bible: "https://catholicbibleonline.com/bible/",
};

function esc(s) {
  return JSON.stringify(s);
}
function xml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
}

const articles = [
  {
    component: "NativityOfMarySeptember82026FeastGuide",
    slug: "nativity-of-mary-september-8-2026-feast-day-guide",
    feastLabel: "September 8, 2026",
    query: "nativity of mary 2026",
    h1: "Nativity of Mary (September 8, 2026): Feast Day Guide for U.S. Catholics",
    title: "Nativity of Mary September 8, 2026: Feast Day Guide | Guide Catholic",
    desc: "Nativity of the Blessed Virgin Mary on September 8, 2026 — meaning, Mass, traditions, prayers, and how U.S. Catholics celebrate Mary's birthday.",
    keywords: "nativity of mary 2026, nativity of the blessed virgin mary september 8, mary birthday feast, september 8 catholic feast 2026, nativity of mary feast day",
    excerpt: "Complete guide to the Nativity of Mary on September 8, 2026 — history, Scripture, U.S. parish customs, prayers, and family traditions.",
    category: "Saints & Feast Days",
    icon: "Star",
    bg: "bg-sky-50",
    iconColor: "text-sky-600",
    readTime: "16 min",
    cboUrl: CBO.nativityMary,
    cboLabel: "Nativity of Mary feast guide on Catholic Bible Online",
    answer: "The Nativity of the Blessed Virgin Mary is celebrated on <strong>Monday, September 8, 2026</strong>. It is a feast (not a Holy Day of Obligation in most U.S. dioceses) honoring Mary's birth — nine months after the Immaculate Conception on December 8.",
    lead: "Americans search nativity of mary 2026 every late summer as school starts and Marian devotions return. Here is the feast explained for parishes, families, and converts — with prayers you can use today.",
    sections: [
      { h: "When is the Nativity of Mary in 2026?", body: `<strong>September 8, 2026</strong> falls on a Monday. The Church celebrates the birth of the Virgin Mary — not Jesus' birth (Christmas), but the day Mary was born to Saints Anne and Joachim. In the United States this is a <em>feast</em>, not a Holy Day of Obligation unless your bishop transfers another solemnity; check your diocesan calendar.` },
      { h: "What the feast means theologically", body: `Mary's Nativity is the dawn of redemption. Because she was preserved from original sin (Immaculate Conception), her birth announces that God is already preparing a sinless Ark for the Word. The Catechism (CCC 484–486) teaches that Mary is "full of grace" from the first instant of her existence. Celebrating September 8 keeps Advent and Christmas from feeling disconnected from Marian hope.` },
      { h: "Scripture and tradition behind September 8", body: `The Gospels do not narrate Mary's birth, but the Church receives the story through Sacred Tradition — especially the Protoevangelium of James and centuries of liturgical memory. Key Marian texts for the day include Luke 1:26–38 (Annunciation), Luke 1:46–55 (Magnificat), and Isaiah 7:14. Read them slowly after Mass or during family prayer.` },
      { h: "How U.S. parishes celebrate", body: `Expect Marian hymns ("Hail Holy Queen," "Immaculate Mary"), white or blue vestments, and sometimes a parish potluck or school blessing. Hispanic parishes may mark the day with flowers for Our Lady; Polish-American communities sometimes connect it with harvest customs. If your parish offers a Marian procession, bring children — formation happens in motion.` },
      { h: "Family traditions that actually stick", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li>Bake a simple birthday cake for Mary and sing "Happy Birthday" before a decade of the Rosary.</li><li>Plant fall flowers or place a bouquet by a home altar.</li><li>Read one chapter of a children's Mary book after dinner.</li><li>Give alms to a pregnancy center in Our Lady's name.</li><li>Begin a 54-day Rosary novena if you need sustained intercession.</li></ul>` },
      { h: "Prayers for September 8", body: `Pray the <strong>Litany of Loreto</strong>, the <strong>Memorare</strong>, or one joyful mystery of the Rosary meditating on Mary's birth. For full prayer texts free online, visit <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online's prayer library</a> or the dedicated <a href="${CBO.nativityMary}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Nativity of Mary 2026 guide</a>.` },
      { h: "Nativity of Mary vs Immaculate Conception", body: `December 8 celebrates Mary conceived without sin; September 8 celebrates her <em>birth</em>. Both are Marian pillars. Confusing them is common — clarify it when teaching RCIA or family catechism.` },
      { h: "Connect the feast to your week", body: `Monday feasts can be missed because of work. If you cannot attend a weekday Mass, pray Morning Prayer from the Liturgy of the Hours, read the Gospel of the day, and make an act of spiritual communion. Pair Scripture with a <a href="${CBO.dailyVerse}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">daily Bible verse</a> routine on Catholic Bible Online.` },
    ],
    faqs: [
      ["When is the Nativity of Mary 2026?", "Monday, September 8, 2026."],
      ["Is September 8 a Holy Day of Obligation in the USA?", "Generally no — it is a feast. Always confirm with your diocese."],
      ["What color vestments are used?", "White or festive Marian colors; blue is common in devotions."],
      ["What is the difference between Nativity of Mary and Immaculate Conception?", "Immaculate Conception (Dec 8) is Mary's conception without sin; Nativity (Sep 8) is her birth."],
      ["Where can I find prayers for this feast?", "Catholic Bible Online hosts free prayers and a Nativity of Mary 2026 feast guide."],
    ],
  },
  {
    component: "ExaltationHolyCrossSeptember142026Guide",
    slug: "exaltation-of-holy-cross-september-14-2026-guide",
    feastLabel: "September 14, 2026",
    query: "exaltation of the holy cross 2026",
    h1: "Exaltation of the Holy Cross (September 14, 2026): Catholic Feast Guide",
    title: "Exaltation of the Holy Cross September 14, 2026 | Guide Catholic",
    desc: "Exaltation of the Holy Cross on September 14, 2026 — history of the feast, veneration, Mass, and what U.S. Catholics do on this solemnity.",
    keywords: "exaltation of the holy cross 2026, feast of the cross september 14, holy cross day 2026, triumph of the cross catholic",
    excerpt: "September 14, 2026: Exaltation of the Holy Cross explained — Constantine, St. Helena, veneration, and parish customs in the United States.",
    category: "Saints & Feast Days",
    icon: "Cross",
    bg: "bg-red-50",
    iconColor: "text-red-700",
    readTime: "17 min",
    cboUrl: CBO.holyCross,
    cboLabel: "Exaltation of the Holy Cross guide on Catholic Bible Online",
    answer: "The Exaltation of the Holy Cross is celebrated on <strong>Sunday, September 14, 2026</strong>. Catholics honor the Cross on which Christ redeemed the world — a solemnity rooted in the discovery of the True Cross in Jerusalem (tradition of St. Helena).",
    lead: "Search interest for exaltation of the holy cross 2026 peaks mid-September when St. Michael's Lent devotees reach the Cross at the center of the Assumption-to-Michaelmas road. This guide is for U.S. Catholics who want clarity, not confusion.",
    sections: [
      { h: "Date and rank of the feast in 2026", body: `September 14, 2026 is a <strong>Sunday</strong>, so the solemnity of the Exaltation of the Holy Cross coincides with the Lord's Day — a powerful liturgical combination. The feast ranks as a solemnity; red vestments proclaim the love that spilled from the Cross.` },
      { h: "History: Helena, Jerusalem, and the True Cross", body: `Tradition holds that Emperor Constantine's mother, St. Helena, found the True Cross in the 4th century. The Church dedicated September 14 to both the discovery and the dedication of the Church of the Holy Sepulcher. American Catholics need not treat the story as archaeology alone — it is a feast of <em>triumph</em>: what looked like defeat became victory.` },
      { h: "Theology of the Cross in one paragraph", body: `The Cross is not merely a symbol of suffering but the tree of life restored. Galatians 6:14, 1 Corinthians 1:18, and John 3:14–15 frame the day's readings. Christ's exaltation on the Cross exalts mercy: God enters our death to destroy death.` },
      { h: "What happens at Mass in the U.S.", body: `Expect the <strong>Sequence "Crux Fidelis"</strong> or hymns such as "Lift High the Cross." Some parishes expose the crucifix for veneration after Mass — a genuflection, kiss, or bow according to local custom. If you lead music or liturgy, prepare catechists to explain veneration (we honor what the Cross represents; we do not worship wood).` },
      { h: "Home and parish customs", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li>Display a crucifix in a central room and bless it with holy water.</li><li>Pray the Stations of the Cross — even five stations if time is short.</li><li>Make a sacrifice you have postponed and offer it with the Sign of the Cross.</li><li>Visit a cemetery or memorial for someone who died in faith.</li><li>Read John 19 slowly as a family lectio.</li></ul>` },
      { h: "Exaltation of the Cross during St. Michael's Lent", body: `Many U.S. Catholics praying the Assumption-to-Michaelmas novena reach September 14 as a penitential checkpoint. Let the Cross re-order your intentions: Michael's combat only makes sense under the Crucified King. Pair this feast with the free <a href="${CBO.holyCross}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Holy Cross feast guide on Catholic Bible Online</a>.` },
      { h: "Scripture readings to pray with", body: `Numbers 21:4–9 (bronze serpent lifted up), Philippians 2:6–11 (Christ humbled and exalted), and John 3:13–17 appear in the lectionary cycle. Use the full text on <a href="${CBO.bible}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a> if you do not own a missal.` },
    ],
    faqs: [
      ["When is Exaltation of the Holy Cross 2026?", "Sunday, September 14, 2026."],
      ["Is it a Holy Day of Obligation?", "When it falls on Sunday, you fulfill obligation through Sunday Mass."],
      ["Why red vestments?", "Red signifies the love and blood of martyrs and the Passion of Christ."],
      ["Can Catholics venerate the Cross?", "Yes — with a kiss, touch, or bow, honoring Christ's sacrifice."],
      ["Where is a full feast guide with prayers?", "Catholic Bible Online publishes a September 14, 2026 Holy Cross guide."],
    ],
  },
  {
    component: "OurLadyOfSorrowsSeptember152026Feast",
    slug: "our-lady-of-sorrows-september-15-2026-feast-day",
    feastLabel: "September 15, 2026",
    query: "our lady of sorrows 2026",
    h1: "Our Lady of Sorrows (September 15, 2026): Seven Sorrows & Feast Day Guide",
    title: "Our Lady of Sorrows September 15, 2026: Feast Guide | Guide Catholic",
    desc: "Our Lady of Sorrows on September 15, 2026 — the Seven Sorrows of Mary, devotions, Mass, and comfort for grieving U.S. Catholics.",
    keywords: "our lady of sorrows 2026, seven sorrows of mary, september 15 feast day, mater dolorosa, our lady of sorrows feast",
    excerpt: "September 15, 2026: Our Lady of Sorrows — the Seven Sorrows, Scriptural roots, and how Catholics pray with Mary in grief and hope.",
    category: "Saints & Feast Days",
    icon: "Heart",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    readTime: "18 min",
    cboUrl: CBO.ourLadySorrows,
    cboLabel: "Our Lady of Sorrows 2026 guide on Catholic Bible Online",
    answer: "Our Lady of Sorrows is celebrated on <strong>Monday, September 15, 2026</strong>, the day after the Exaltation of the Holy Cross. Catholics meditate on Mary's Seven Sorrows — from Simeon's prophecy to the burial of Jesus.",
    lead: "Grief-heavy headlines make our lady of sorrows 2026 one of the most searched Marian feasts each September. This page explains the Seven Sorrows with pastoral clarity for American parishes and families.",
    sections: [
      { h: "The Seven Sorrows (Septem Dolorum)", body: `<ol class="list-decimal list-inside text-text space-y-2 mb-6"><li>Prophecy of Simeon (Luke 2:34–35)</li><li>Flight into Egypt (Matthew 2:13–15)</li><li>Loss of the Child Jesus for three days (Luke 2:41–50)</li><li>Meeting Jesus on the way to Calvary</li><li>Crucifixion and Death of Our Lord</li><li>Receiving Jesus' body (Pieta)</li><li>Burial of Jesus</li></ol> Pray one sorrow per day the week before September 15 if you are new to the devotion.` },
      { h: "Why the feast follows the Holy Cross", body: `Liturgically, September 15 sits beside the Cross because Mary stood beneath it. John 19:25–27 is the heart of the day: the Beloved Disciple receives Mary as mother. American Catholics who feel orphaned — by divorce, death, or distance — find a mother who stayed when others fled.` },
      { h: "Devotions U.S. Catholics actually use", body: `The <strong>Servite Rosary of the Seven Sorrows</strong> (seven groups of seven Hail Marys) is the classic devotion. Simpler options: one Our Father and seven Hail Marys for the seven sorrows, or the Stabat Mater hymn after dinner. Full texts live on <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.` },
      { h: "Pastoral word for the grieving", body: `This feast does not romanticize pain. Mary validates sorrow while pointing to resurrection. If you are mourning, bring the name of the deceased to Mass on September 15, light a candle, and ask Mary to stand with you as she stood at the tomb.` },
      { h: "Parish and school ideas", body: `Blue or sorrowful-Marian hymns, exposition of the Blessed Sacrament for intentions of the suffering, and service projects for bereaved families. Schools can teach the Seven Sorrows with one image per sorrow — children remember stories.` },
      { h: "Deeper reading on Catholic Bible Online", body: `For a full September 15, 2026 article with prayers and traditions, open the <a href="${CBO.ourLadySorrows}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Our Lady of Sorrows feast guide</a>. Pair it with daily Scripture on <a href="${CBO.dailyVerse}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online's daily verses</a>.` },
    ],
    faqs: [
      ["When is Our Lady of Sorrows 2026?", "Monday, September 15, 2026."],
      ["What are the Seven Sorrows?", "Seven key sufferings of Mary from prophecy to burial — see list above."],
      ["Is there a special rosary?", "Yes — the Servite Seven Sorrows Rosary (seven sets of seven Hail Marys)."],
      ["What color is used liturgically?", "White or Marian blue in devotions; liturgical color is white for the feast."],
      ["Where can I read more?", "Catholic Bible Online's Our Lady of Sorrows September 15, 2026 guide."],
    ],
  },
  {
    component: "FeastOfArchangelsMichaelmasSeptember292026",
    slug: "feast-of-archangels-michaelmas-september-29-2026-guide",
    feastLabel: "September 29, 2026",
    query: "feast of the archangels 2026",
    h1: "Feast of the Archangels (September 29, 2026): Michaelmas Guide for U.S. Catholics",
    title: "Feast of the Archangels September 29, 2026 (Michaelmas) | Guide Catholic",
    desc: "Feast of Saints Michael, Gabriel, and Raphael on September 29, 2026 — Michaelmas traditions, St. Michael Prayer, and how Americans celebrate.",
    keywords: "feast of the archangels 2026, michaelmas 2026, september 29 st michael, archangels feast day, st michael gabriel raphael",
    excerpt: "Michaelmas 2026 (September 29): Feast of the Archangels — who they are, St. Michael Prayer, parish customs, and end of St. Michael's Lent.",
    category: "Saints & Feast Days",
    icon: "Shield",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    readTime: "17 min",
    cboUrl: CBO.stMichael,
    cboLabel: "St. Michael Prayer on Catholic Bible Online",
    answer: "The Feast of Saints Michael, Gabriel, and Raphael is on <strong>Tuesday, September 29, 2026</strong> (Michaelmas). It ends many Americans' St. Michael's Lent novena and is a major day for angelic devotion and spiritual combat prayers.",
    lead: "Feast of the archangels 2026 searches spike as September ends. Whether you finished a 46-day novena or simply want Michaelmas explained, this guide covers theology, prayer, and U.S. customs.",
    sections: [
      { h: "Who are the three archangels?", body: `<strong>Michael</strong> ("Who is like God?") — defender against evil (Daniel, Jude, Revelation). <strong>Gabriel</strong> — messenger of the Annunciation (Luke 1). <strong>Raphael</strong> — healer and guide (Tobit). The Church names only these three archangels in the Roman liturgy.` },
      { h: "Michaelmas in American Catholic life", body: `Michaelmas once marked quarter days in Anglo culture; Catholics still use it for parish patron celebrations, police/firefighter blessings, and school year consecrations. Fall parish dinners on the last weekend of September remain common in the Midwest and South.` },
      { h: "The St. Michael Prayer — text and use", body: `Leo XIII's prayer remains the standard: "St. Michael the Archangel, defend us in battle…" Pray it after Mass, at bedtime, or when spiritual fear rises. Find the full text on <a href="${CBO.stMichael}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>. Avoid superstition — angels serve Christ, not curiosity.` },
      { h: "End of St. Michael's Lent 2026", body: `If you began August 15, September 29 is your finish line. Attend Mass, thank God for perseverance, and consider one final work of mercy. The daily novena pages are free on <a href="${CBO.novenas}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online's novena library</a>.` },
      { h: "Family and parish celebration ideas", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li>Bless children with the St. Michael Prayer before school.</li><li>Host an angel-themed dessert (namesake fun, not cosplay).</li><li>Invite first responders for a blessing after Mass.</li><li>Donate to a crisis pregnancy or veterans' ministry.</li><li>Read Tobit 12 for Raphael's role in healing.</li></ul>` },
      { h: "Scripture for September 29", body: `Revelation 12:7–9 (Michael casts down the dragon) and John 1:47–51 (angels ascending and descending) appear in the liturgy. Read them on <a href="${CBO.bible}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a> before the feast.` },
    ],
    faqs: [
      ["When is Michaelmas 2026?", "Tuesday, September 29, 2026."],
      ["Which archangels are celebrated?", "Saints Michael, Gabriel, and Raphael."],
      ["Is Michaelmas a Holy Day of Obligation in the USA?", "No — it is a feast, though many Catholics treat it as a major devotional day."],
      ["What prayer should I say?", "The St. Michael Prayer is the classic; also pray the Guardian Angel prayer for family members."],
      ["Where is the St. Michael Prayer online?", "Free on Catholic Bible Online's St. Michael Prayer page."],
    ],
  },
  {
    component: "GuardianAngelsFeastDayOctober22026",
    slug: "guardian-angels-feast-day-october-2-2026",
    feastLabel: "October 2, 2026",
    query: "guardian angels feast day 2026",
    h1: "Guardian Angels Feast Day (October 2, 2026): Prayer & Catholic Guide",
    title: "Guardian Angels Feast Day October 2, 2026 | Guide Catholic",
    desc: "Guardian Angels feast on October 2, 2026 — Catholic teaching, Guardian Angel prayer, children's traditions, and U.S. parish customs.",
    keywords: "guardian angels feast day 2026, guardian angel prayer, october 2 feast, feast of guardian angels catholic",
    excerpt: "October 2, 2026: Guardian Angels feast — what the Church teaches, full prayer text, and family traditions for U.S. Catholics.",
    category: "Saints & Feast Days",
    icon: "Sparkles",
    bg: "bg-violet-50",
    iconColor: "text-violet-600",
    readTime: "15 min",
    cboUrl: CBO.guardianAngel,
    cboLabel: "Guardian Angel Prayer on Catholic Bible Online",
    answer: "The Memorial of the Guardian Angels is <strong>Friday, October 2, 2026</strong>. Catholics honor the angel assigned to protect and guide each person — a doctrine rooted in Matthew 18:10 and the long tradition of the Church.",
    lead: "Parents search guardian angels feast day 2026 when October begins. This guide teaches the doctrine without sentimentality and gives you the prayers children can memorize.",
    sections: [
      { h: "What the Church teaches about guardian angels", body: `The Catechism (CCC 336) teaches that angels are spiritual creatures who glorify God and serve His saving plans. From infancy to death, human life is surrounded by their watchful care. This is not folklore — it is ordinary Catholic cosmology.` },
      { h: "Matthew 18:10 — the biblical anchor", body: `"See that you do not despise one of these little ones. For I tell you that in heaven their angels always see the face of my Father." Jesus links dignity of children with angelic guardianship — reason enough to teach the feast in Catholic schools.` },
      { h: "Guardian Angel prayer (when and how)", body: `Tradition encourages the prayer at waking, before travel, and at bedtime — especially for children. The classic text begins "Angel of God, my guardian dear…" Read the full version on <a href="${CBO.guardianAngel}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a> and print it for bedroom doors.` },
      { h: "October 2 customs in U.S. parishes", body: `Blessing of children after Mass, first-grade catechism on angels, and all-school Guardian Angel prayer over the PA system. Hispanic communities often mark the day with modest celebrations tying angels to protection during migration and family separation.` },
      { h: "Avoiding superstition", body: `Guardian angels are not pets, horoscopes, or guarantees against suffering. They guide us toward salvation. Teach kids to thank their angel and to obey God — the angel's mission is holiness, not comfort alone.` },
    ],
    faqs: [
      ["When is Guardian Angels feast 2026?", "Friday, October 2, 2026."],
      ["Does everyone have a guardian angel?", "Yes — the Church holds that each person receives a guardian angel."],
      ["What is the Guardian Angel prayer?", "A short traditional prayer to one's guardian angel — full text on Catholic Bible Online."],
      ["Is October 2 a Holy Day?", "No — it is an optional memorial (celebrated as a feast in many U.S. parishes)."],
    ],
  },
  {
    component: "StFrancisFeastDayOctober42026Guide",
    slug: "st-francis-feast-day-october-4-2026-guide",
    feastLabel: "October 4, 2026",
    query: "st francis feast day 2026",
    h1: "St. Francis Feast Day (October 4, 2026): Blessing of Animals & Catholic Guide",
    title: "St Francis Feast Day October 4, 2026 | Guide Catholic",
    desc: "St. Francis of Assisi on October 4, 2026 — blessing of pets, Franciscan spirituality, and how U.S. Catholics celebrate the feast.",
    keywords: "st francis feast day 2026, blessing of the animals 2026, october 4 st francis, st francis of assisi feast",
    excerpt: "October 4, 2026: St. Francis of Assisi — blessing of animals, Franciscan poverty, and parish events across the United States.",
    category: "Saints & Feast Days",
    icon: "Bird",
    bg: "bg-green-50",
    iconColor: "text-green-700",
    readTime: "16 min",
    cboUrl: "https://catholicbibleonline.com/saints/st-francis-of-assisi/",
    cboLabel: "St. Francis of Assisi on Catholic Bible Online",
    answer: "The Memorial of St. Francis of Assisi is <strong>Sunday, October 4, 2026</strong>. U.S. parishes famously offer Blessing of the Animals — honoring the saint who preached to creation as brother and sister.",
    lead: "St francis feast day 2026 brings pet owners, Franciscan schools, and ecology-minded Catholics to the same search. Here is the real Francis — poor, crucified, joyful — not only the birdbath statue.",
    sections: [
      { h: "Who was Francis of Assisi?", body: `Born in 1181/1182, Francis renounced wealth, rebuilt San Damiano, received the stigmata at La Verna, and founded the Franciscan order. He sang the Canticle of the Sun and bore the wounds of Christ. Pope Francis took his name for a reason: the saint models evangelical poverty and care for the marginalized.` },
      { h: "Blessing of the Animals in American parishes", body: `Expect outdoor services with dogs, cats, horses, and occasionally chickens. Parishes read Genesis 1 or Francis' canticle, sprinkle holy water, and remind owners that stewardship is ongoing — not a photo op alone.` },
      { h: "Franciscan spirituality in five minutes", body: `Poverty, peace, and praise. Pray the Peace Prayer attributed to Franciscan tradition ("Lord, make me an instrument of your peace…"). Serve the poor on October 4 instead of only posting nature photos.` },
      { h: "Connect Francis to creation and Scripture", body: `Psalm 148 and Job 38–39 praise God through creation. Read them on <a href="${CBO.bible}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>. Learn more about Francis on the <a href="https://catholicbibleonline.com/saints/st-francis-of-assisi/" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">St. Francis saint page</a>.` },
      { h: "St. Francis and St. Michael's Lent", body: `Franciscan memory links penitential seasons to Michael and the Cross. If you prayed St. Michael's Lent this year, let Francis teach gratitude on October 4 — another form of combat against pride.` },
    ],
    faqs: [
      ["When is St. Francis feast day 2026?", "Sunday, October 4, 2026."],
      ["Why bless animals?", "Honoring St. Francis' love for creation and God's dominion entrusted to humans."],
      ["Is the Blessing of Animals official?", "It is a popular Catholic blessing; rites vary by diocese."],
      ["What is St. Francis the patron of?", "Animals, ecology, merchants, and San Francisco, among others."],
    ],
  },
  {
    component: "OurLadyOfTheRosaryOctober72026Feast",
    slug: "our-lady-of-the-rosary-october-7-2026-feast-day",
    feastLabel: "October 7, 2026",
    query: "our lady of the rosary 2026",
    h1: "Our Lady of the Rosary (October 7, 2026): Feast Day & How to Pray",
    title: "Our Lady of the Rosary October 7, 2026 Feast Guide | Guide Catholic",
    desc: "Our Lady of the Rosary on October 7, 2026 — Battle of Lepanto, how to pray the Rosary, and October devotion guide for U.S. Catholics.",
    keywords: "our lady of the rosary 2026, feast of the rosary october 7, october rosary month, lepanto feast, how to pray rosary catholic",
    excerpt: "October 7, 2026: Our Lady of the Rosary — Lepanto, the power of the Rosary, and a practical guide for October devotion in the United States.",
    category: "Saints & Feast Days",
    icon: "Heart",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    readTime: "19 min",
    cboUrl: CBO.rosary,
    cboLabel: "How to pray the Holy Rosary on Catholic Bible Online",
    answer: "The Memorial of Our Lady of the Rosary is <strong>Wednesday, October 7, 2026</strong>. The feast recalls the Battle of Lepanto (1571) and the Church's confidence that the Rosary is spiritual warfare wielded through Mary's hands.",
    lead: "Our lady of the rosary 2026 is the anchor of October — rosary month in the United States. If you want the feast explained and a prayer plan that fits American schedules, start here.",
    sections: [
      { h: "Lepanto and why October 7 matters", body: `Pope St. Pius V attributed the Christian naval victory at Lepanto to Rosary prayer across Europe. The feast was once called Our Lady of Victory — a reminder that Marian devotion is not passive. Americans facing cultural battles, family fracture, or personal addiction can treat the Rosary as a daily discipline, not a decoration.` },
      { h: "How to pray the Rosary (quick outline)", body: `<ol class="list-decimal list-inside text-text space-y-2 mb-6"><li>Sign of the Cross, Apostles' Creed, Our Father, three Hail Marys, Glory Be.</li><li>Announce the mystery; pray one Our Father, ten Hail Marys, Glory Be; optional Fatima prayer.</li><li>Repeat for five decades; conclude with Hail Holy Queen and optional St. Michael Prayer.</li></ol> Full step-by-step with all mysteries: <a href="${CBO.rosary}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online Rosary guide</a>.` },
      { h: "Which mysteries on October 7?", body: `Wednesday in Ordinary Time suggests Joyful or Glorious mysteries depending on your custom; many U.S. parishes pray a public Rosary after Mass on the feast. Pick one set and finish it — completeness beats perfection.` },
      { h: "October Rosary month in U.S. parishes", body: `Forty Hours, living Rosary with school children, and family rosary challenges. Hispanic parishes often crown a statue of Our Lady. Offer one decade in the car if evenings are chaotic.` },
      { h: "Rosary promises and realistic expectations", body: `Traditional promises linked to the Rosary emphasize perseverance and conversion — not magic. Pray expecting to be changed, not only to change others.` },
    ],
    faqs: [
      ["When is Our Lady of the Rosary 2026?", "Wednesday, October 7, 2026."],
      ["Why is October rosary month?", "Popular piety plus the October 7 feast anchors Marian prayer all month."],
      ["How long does a Rosary take?", "About 15–20 minutes for five decades."],
      ["Where is a complete Rosary guide?", "Catholic Bible Online's Holy Rosary prayer page."],
      ["What was Lepanto?", "1571 naval battle; Pope Pius V credited victory to Rosary prayer."],
    ],
  },
  {
    component: "AllSaintsDayNovember12026HolyDay",
    slug: "all-saints-day-november-1-2026-holy-day-obligation",
    feastLabel: "November 1, 2026",
    query: "all saints day 2026",
    h1: "All Saints' Day 2026 (November 1): Holy Day of Obligation & Mass Times",
    title: "All Saints Day November 1, 2026: Holy Day Guide | Guide Catholic",
    desc: "All Saints' Day November 1, 2026 — Holy Day of Obligation in the USA, Mass times, meaning, and how Catholics honor the saints in heaven.",
    keywords: "all saints day 2026, all saints day holy day of obligation, november 1 mass times, all saints day catholic usa",
    excerpt: "November 1, 2026: All Saints' Day — U.S. Holy Day of Obligation, vigil Mass rules, and how to celebrate the communion of saints.",
    category: "Saints & Feast Days",
    icon: "Crown",
    bg: "bg-amber-50",
    iconColor: "text-amber-700",
    readTime: "17 min",
    cboUrl: CBO.prayers,
    cboLabel: "Catholic prayers on Catholic Bible Online",
    answer: "All Saints' Day is <strong>Sunday, November 1, 2026</strong>. In the United States it is a Holy Day of Obligation — Catholics should attend Mass to honor every saint in heaven, known and unknown.",
    lead: "All saints day 2026 searches explode every late October when parish bulletins list vigil Masses. This guide clarifies obligation, vigil rules, and how to teach the communion of saints.",
    sections: [
      { h: "Holy Day of Obligation in the USA", body: `All Saints' Day (November 1) remains on the U.S. Holy Day list. When it falls on Sunday (as in 2026), Sunday Mass fulfills the obligation for that day. Still treat November as a season to invoke patron saints by name.` },
      { h: "Theology: one Church, three states", body: `The Church Militant (on earth), Suffering (purgatory), and Triumphant (heaven) form one Body in Christ. Revelation 7:9–17 paints the multitude no one can count — the biblical icon of All Saints.` },
      { h: "Practices for November 1", body: `<ul class="list-disc list-inside text-text space-y-2 mb-6"><li>Display images of patron saints in your home.</li><li>Pray the Litany of the Saints — full text on <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.</li><li>Name one virtue from your confirmation saint to imitate this month.</li><li>Visit a cemetery (especially before All Souls).</li></ul>` },
      { h: "All Saints vs Halloween", body: `Halloween ("All Hallows' Eve") precedes the feast. Catholics can reclaim the triduum: Eve vigil, All Saints victory, All Souls prayer. Avoid only criticizing secular costumes — offer a richer story.` },
      { h: "Mass times and vigil expectations", body: `Check your parish website by October 25. Saturday evening vigil counts for some holy days; for All Saints on Sunday 2026, plan Sunday Mass with special hymns to the saints.` },
    ],
    faqs: [
      ["Is All Saints Day 2026 a Holy Day of Obligation?", "Yes in the USA; in 2026 it falls on Sunday, so Sunday Mass fulfills it."],
      ["When is All Saints Day 2026?", "Sunday, November 1, 2026."],
      ["What is the difference between All Saints and All Souls?", "All Saints honors those in heaven; All Souls (Nov 2) prays for the holy souls in purgatory."],
      ["What prayer honors all saints?", "The Litany of the Saints is the classic — available free online."],
    ],
  },
  {
    component: "AllSoulsDayNovember22026Guide",
    slug: "all-souls-day-november-2-2026-prayers-mass-times",
    feastLabel: "November 2, 2026",
    query: "all souls day 2026",
    h1: "All Souls' Day 2026 (November 2): Prayers, Mass & Indulgences Guide",
    title: "All Souls Day November 2, 2026: Catholic Guide | Guide Catholic",
    desc: "All Souls' Day November 2, 2026 — pray for the holy souls in purgatory, Mass times, indulgences, and November memorial traditions in the USA.",
    keywords: "all souls day 2026, all souls day mass times, november 2 catholic, pray for the dead catholic, all souls indulgence",
    excerpt: "November 2, 2026: All Souls' Day — purgatory, prayers for the dead, plenary indulgence conditions, and U.S. cemetery customs.",
    category: "Saints & Feast Days",
    icon: "Flame",
    bg: "bg-stone-100",
    iconColor: "text-stone-700",
    readTime: "18 min",
    cboUrl: CBO.prayers,
    cboLabel: "Prayers for the faithful departed on Catholic Bible Online",
    answer: "All Souls' Day is <strong>Monday, November 2, 2026</strong>. Catholics pray for the holy souls in purgatory — especially at Mass, in November indulgences, and through cemetery visits.",
    lead: "All souls day 2026 matters to every American Catholic who has buried someone they love. This page explains doctrine without coldness and gives practical November steps.",
    sections: [
      { h: "What is All Souls' Day?", body: `The Commemoration of All the Faithful Departed (November 2) extends All Saints: we intercede for souls being purified before heaven. 2 Maccabees 12:45–46 and the Church's prayer tradition support offering sacrifice for the dead.` },
      { h: "Mass on November 2, 2026", body: `Monday Masses will include violet vestments and readings of hope (John 6, Wisdom 3). Many U.S. parishes schedule an extra evening Mass or a cemetery service. Arrive with names written on paper — read them silently during the prayer of the faithful.` },
      { h: "November indulgences (summary)", body: `The Church grants plenary indulgences applicable to the dead when you visit a cemetery (Nov 1–8) and pray for the departed, or visit a church on All Souls Day — under usual conditions (Confession, Communion, prayer for the Pope, detachment from sin). Confirm details in the current Enchiridion or your diocese.` },
      { h: "Prayers to use", body: `Eternal Rest grant unto them, O Lord… Requiem aeternam. Rosary for the dead. Office of the Dead from the Liturgy of the Hours. Find free prayer texts at <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.` },
      { h: "Hispanic and Filipino November customs in the U.S.", body: `Día de los Muertos overlaps culturally but is distinct liturgically — catechists should honor family altars while teaching purgatory and Mass as the heart of remembrance. Simbang Gabi preparation often begins later in Advent, but November lists of the dead cross many cultures.` },
    ],
    faqs: [
      ["When is All Souls Day 2026?", "Monday, November 2, 2026."],
      ["Is All Souls a Holy Day of Obligation?", "Not in the United States — but Mass is strongly encouraged."],
      ["What is a plenary indulgence for the dead?", "A full remission of temporal punishment applied to souls in purgatory under Church conditions."],
      ["Can I pray for non-Catholics who died?", "Yes — God's mercy is not limited by our categories."],
    ],
  },
  {
    component: "Advent2026StartDateWhenDoesAdventBegin",
    slug: "advent-2026-start-date-when-does-advent-begin",
    feastLabel: "Advent begins November 29, 2026",
    query: "when does advent start 2026",
    h1: "When Does Advent 2026 Start? Dates, Calendar & Catholic Guide",
    title: "Advent 2026 Start Date: When Does Advent Begin? | Guide Catholic",
    desc: "When does Advent 2026 start? First Sunday is November 29, 2026. Advent calendar, wreath, Mass schedule, and preparation guide for U.S. Catholics.",
    keywords: "when does advent start 2026, advent 2026 dates, first sunday of advent 2026, advent calendar catholic, advent begins 2026",
    excerpt: "Advent 2026 starts Sunday, November 29 — four weeks until Christmas. Dates, wreath blessings, and a practical preparation guide for American Catholics.",
    category: "Liturgy & Worship",
    icon: "Star",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    readTime: "18 min",
    cboUrl: CBO.advent2026,
    cboLabel: "Advent 2026 Novena & Catholic Guide on Catholic Bible Online",
    answer: "Advent 2026 begins on <strong>Sunday, November 29, 2026</strong> (First Sunday of Advent) and ends on <strong>Thursday, December 24, 2026</strong>, before the Mass of the Lord's Nativity at night.",
    lead: "When does advent start 2026 is the top liturgical query every November. Americans need dates before retailers sell Christmas in October — here is the Church's calendar with a plan that fits busy households.",
    sections: [
      { h: "Advent 2026 calendar at a glance", body: `<table class="w-full text-sm mb-6 border border-border"><thead><tr class="bg-muted"><th class="p-2 text-left">Date</th><th class="p-2 text-left">Milestone</th></tr></thead><tbody><tr><td class="p-2 border-t">Nov 29, 2026</td><td class="p-2 border-t">First Sunday of Advent — Year A cycle begins</td></tr><tr><td class="p-2 border-t">Dec 6, 2026</td><td class="p-2 border-t">Second Sunday of Advent</td></tr><tr><td class="p-2 border-t">Dec 13, 2026</td><td class="p-2 border-t">Gaudete Sunday (Third Sunday — rose vestments)</td></tr><tr><td class="p-2 border-t">Dec 20, 2026</td><td class="p-2 border-t">Fourth Sunday of Advent</td></tr><tr><td class="p-2 border-t">Dec 24, 2026</td><td class="p-2 border-t">Christmas Eve — Vigil Masses</td></tr><tr><td class="p-2 border-t">Dec 25, 2026</td><td class="p-2 border-t">Christmas Day — Holy Day of Obligation</td></tr></tbody></table>` },
      { h: "What Advent is (and is not)", body: `Advent is a season of <em>waiting</em>, not early Christmas. Violet vestments, restrained decor, and penitential fasting (especially Ember Days where observed) train desire for Christ. U.S. culture rushes Christmas music; Catholics can keep Advent Advent.` },
      { h: "Advent wreath: bless it the first Sunday", body: `Four candles — three violet, one rose for Gaudete. Light one more each week with a short prayer. Children respond well to a visible countdown that is not Santa-centric.` },
      { h: "Prepare spiritually before Black Friday", body: `Schedule Confession, choose a charity gift budget, and download an Advent reading plan. Catholic Bible Online publishes a full <a href="${CBO.advent2026}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Advent 2026 novena and preparation guide</a> with daily links.` },
      { h: "Scripture during Advent", body: `Isaiah, John the Baptist, and Mary magnify the season. Use <a href="${CBO.dailyVerse}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">daily Bible verses</a> or read the Sunday Gospel on <a href="${CBO.bible}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a> each Monday.` },
    ],
    faqs: [
      ["When does Advent 2026 start?", "Sunday, November 29, 2026."],
      ["When does Advent 2026 end?", "At the Christmas Vigil on December 24, 2026."],
      ["How many weeks is Advent?", "Four Sundays — length of the last week varies."],
      ["What is Gaudete Sunday 2026?", "December 13, 2026 — Third Sunday of Advent."],
      ["Where is a full Advent 2026 prayer guide?", "Catholic Bible Online's Advent 2026 novena and Catholic guide."],
    ],
  },
  {
    component: "ImmaculateConceptionDecember82026HolyDay",
    slug: "immaculate-conception-december-8-2026-holy-day-usa",
    feastLabel: "December 8, 2026",
    query: "immaculate conception 2026 holy day",
    h1: "Immaculate Conception 2026 (December 8): U.S. Holy Day Guide",
    title: "Immaculate Conception December 8, 2026 Holy Day | Guide Catholic",
    desc: "Immaculate Conception December 8, 2026 — U.S. Holy Day of Obligation, patronal feast of America, Mass times, and what the dogma means.",
    keywords: "immaculate conception 2026, december 8 holy day of obligation, immaculate conception mass times, patroness of usa",
    excerpt: "December 8, 2026: Immaculate Conception — U.S. Holy Day, patronal feast of the United States, and clear explanation of the dogma.",
    category: "Saints & Feast Days",
    icon: "Star",
    bg: "bg-sky-50",
    iconColor: "text-sky-500",
    readTime: "16 min",
    cboUrl: CBO.home,
    cboLabel: "Catholic Bible Online — prayers and Marian resources",
    answer: "The Solemnity of the Immaculate Conception is <strong>Tuesday, December 8, 2026</strong> — a Holy Day of Obligation in the United States. It celebrates Mary conceived without original sin (not Jesus' virginal conception).",
    lead: "Immaculate conception 2026 holy day searches spike when parish bulletins list vigil Masses on December 7. This page is the U.S.-specific obligation guide plus a one-minute doctrine refresher.",
    sections: [
      { h: "Holy Day rules in the USA for December 8", body: `Catholics must attend Mass on December 8 unless dispensed by diocesan policy. Many dioceses offer vigil Mass on Monday evening, December 7, 2026. Confirm times locally — urban parishes often add noon Masses for workers.` },
      { h: "Patronal feast of the United States", body: `The U.S. bishops placed the nation under Our Lady of the Immaculate Conception in 1847. The Basilica of the National Shrine in Washington bears her title. Flying the flag alongside Marian prayer is patriotic and Catholic.` },
      { h: "Doctrine in plain English", body: `Mary was preserved from original sin from the first instant of her conception by unique grace in view of Christ's merits (Pius IX, 1854). Luke 1:28 ("full of grace") and Genesis 3:15 underpin the dogma. Read more in the Catechism CCC 490–493.` },
      { h: "How to observe December 8", body: `Mass, Marian hymnody, almsgiving, and praying for the unborn and their mothers. Avoid confusing December 8 with March 25 (Annunciation — Jesus' conception).` },
      { h: "Prayers and Scripture online", body: `Use <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a> for the Litany of Loreto, Hail Mary, and Marian readings from <a href="${CBO.bible}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Sacred Scripture</a>.` },
    ],
    faqs: [
      ["Is December 8, 2026 a Holy Day of Obligation?", "Yes throughout the United States."],
      ["Can I go to Mass on December 7 vigil?", "Most U.S. dioceses allow vigil Mass to fulfill the obligation — verify locally."],
      ["What does Immaculate Conception mean?", "Mary was conceived without original sin — it refers to Mary's conception, not Jesus'."],
      ["Why is it the U.S. patronal feast?", "Bishops consecrated the nation to the Immaculate Conception in 1847."],
    ],
  },
  {
    component: "OurLadyOfGuadalupeDecember122026Feast",
    slug: "our-lady-of-guadalupe-december-12-2026-feast-day-usa",
    feastLabel: "December 12, 2026",
    query: "our lady of guadalupe 2026",
    h1: "Our Lady of Guadalupe 2026 (December 12): Feast Day Guide for the Americas",
    title: "Our Lady of Guadalupe December 12, 2026 | Guide Catholic",
    desc: "Our Lady of Guadalupe on December 12, 2026 — apparitions, Mass times, Mañanitas, and how U.S. Catholics celebrate Empress of the Americas.",
    keywords: "our lady of guadalupe 2026, december 12 guadalupe, mañanitas guadalupe, guadalupe feast day usa, empress of the americas",
    excerpt: "December 12, 2026: Our Lady of Guadalupe — Juan Diego, Tilma, Mañanitas, and parish celebrations across the United States.",
    category: "Saints & Feast Days",
    icon: "Flower2",
    bg: "bg-pink-50",
    iconColor: "text-pink-600",
    readTime: "19 min",
    cboUrl: CBO.home,
    cboLabel: "Catholic Bible Online — Marian devotion resources",
    answer: "The Feast of Our Lady of Guadalupe is <strong>Saturday, December 12, 2026</strong>. She is Patroness of the Americas and Star of the New Evangelization — honored from Mexico City to parishes in every U.S. state.",
    lead: "Our lady of guadalupe 2026 drives Mass overflow, Mañanitas at 4 a.m., and mariachi in parish lots. Whether you are Mexican-American or discovering Guadalupe for the first time, this guide explains the feast for the whole Church in the U.S.",
    sections: [
      { h: "The apparitions in brief", body: `In December 1531, Mary appeared to St. Juan Diego on Tepeyac hill near Mexico City. Her image on the tilma converted millions. The message is tender: "Am I not here, I who am your mother?"` },
      { h: "December 12 in U.S. parishes", body: `Expect overnight vigils (Mañanitas), bilingual Masses, Aztec dancers at some celebrations, and roses blessed in Mary's honor. Parking will be difficult — arrive early or carpool.` },
      { h: "Guadalupe and evangelization", body: `St. John Paul II named her Star of the New Evangelization. In a polarized America, Guadalupe unites indigenous and European, rich and poor, under one mestiza face of mercy.` },
      { h: "Prayers for the feast", body: `Pray the Guadalupe novena in the days leading up to December 12. Read Luke 1:46–55 and Revelation 12. Find free Marian prayers on <a href="${CBO.prayers}" target="_blank" rel="noopener noreferrer" class="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.` },
      { h: "Respectful participation for non-Hispanic Catholics", body: `Attend, listen, and avoid treating the feast as exotic tourism. Guadalupe belongs to the whole American continent. Bring flowers, pray for immigrants, and learn one line of "La Guadalupana."` },
      { h: "Works of mercy on Guadalupe", body: `Support pregnancy centers, migrant shelters, or parish food pantries. Mary asked for a church and comforted the poor — imitation beats slogans.` },
    ],
    faqs: [
      ["When is Our Lady of Guadalupe 2026?", "Saturday, December 12, 2026."],
      ["What are Mañanitas?", "Early-morning songs and prayers on the feast — often December 12 before dawn."],
      ["Is Guadalupe only for Mexican Catholics?", "No — she is Patroness of all the Americas."],
      ["Who was Juan Diego?", "St. Juan Diego Cuauhtlatoatzin — indigenous visionary, canonized 2002."],
    ],
  },
];

function formatDateLabel(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function renderSection(s, slug) {
  const hasHtml = /<(ul|ol|table|a|strong|em)\b/i.test(s.body);
  const h2 = `<h2 className="font-display text-2xl font-bold text-text mt-10 mb-4">${xml(s.h)}</h2>`;
  if (hasHtml) {
    return `
              ${h2}
              <div className="text-text leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: ${esc(s.body)} }} />`;
  }
  return `
              ${h2}
              <LinkedText className="text-text leading-relaxed mb-6" currentSlug="${slug}">
                ${s.body}
              </LinkedText>`;
}

function generate(a) {
  const sections = a.sections.map((s) => renderSection(s, a.slug)).join("\n");

  const faqs = a.faqs.map(([q, ans]) => `                { question: ${esc(q)}, answer: ${esc(ans)} }`).join(",\n");

  const cboBox = `
              <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
                  <ExternalLink className="w-5 h-5 text-accent shrink-0" />
                  Free resources on Catholic Bible Online
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  For prayers, Scripture, and devotionals related to ${xml(a.feastLabel)}, visit{" "}
                  <a href="${a.cboUrl}" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">${xml(a.cboLabel)}</a>
                  {" "}on{" "}
                  <a href="${CBO.home}" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline underline-offset-2 hover:text-accent/80">Catholic Bible Online</a>.
                </p>
                <a
                  href="${a.cboUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
                >
                  Open on Catholic Bible Online
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>`;

  return `import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ${a.icon}, Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { ArticleBottomCTA } from "@/components/blog/ArticleBottomCTA";
import { QuizCTA } from "@/components/blog/QuizCTA";
import { BlogFAQ } from "@/components/blog/BlogFAQ";
import { ArticleSchema, BreadcrumbSchema } from "@/components/blog/ArticleSchema";
import { LinkedText } from "@/components/blog/LinkedText";

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
                title={${esc("How is your liturgical year going?")}}
                description={${esc("Take our Catholic life assessment — Mass, prayer, and seasonal fidelity.")}}
              />

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
                <h3 className="font-display text-lg font-bold text-text mb-3">Key facts at a glance</h3>
                <ul className="text-text space-y-2 text-sm">
                  <li>• <strong>Feast / season:</strong> ${xml(a.feastLabel)}</li>
                  <li>• <strong>Primary search:</strong> ${xml(a.query)}</li>
                  <li>• <strong>Category:</strong> ${xml(a.category)}</li>
                  <li>• <strong>More on Guide Catholic:</strong> <Link to="/blog/catholic-feast-days/" className="text-accent underline underline-offset-2">Catholic Feast Days hub</Link></li>
                  <li>• <strong>Prayers &amp; Scripture:</strong> <a href="${CBO.home}" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Catholic Bible Online</a></li>
                </ul>
              </div>
            </div>

            <BlogFAQ
              linkAnswersSlug="${a.slug}"
              faqs={[
${faqs}
              ]}
            />
            <RelatedArticles currentSlug="${a.slug}" />
            <ArticleBottomCTA
              title={${esc("Live the feasts — not only read about them")}}
              description={${esc("Build Catholic habits that last through Advent, Christmas, and the whole liturgical year.")}}
            />
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
const interlinks = [];
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
  interlinks.push(`  ${esc(a.query)}: "/blog/${a.slug}/",`);
  interlinks.push(`  ${esc(a.h1.split(":")[0].trim())}: "/blog/${a.slug}/",`);
  sitemap.push(`  <url>
    <loc>https://guidecatholic.com/blog/${a.slug}/</loc>
    <lastmod>${PUB}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`);
  console.log("wrote", a.slug);
}

fs.writeFileSync(path.join(__dirname, "us-feast-seo-2026-blog.txt"), blog.join(",\n") + ",\n");
fs.writeFileSync(path.join(__dirname, "us-feast-seo-2026-lazy.txt"), lazy.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "us-feast-seo-2026-routes.txt"), routes.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "us-feast-seo-2026-interlinks.txt"), interlinks.join("\n") + "\n");
fs.writeFileSync(path.join(__dirname, "us-feast-seo-2026-sitemap.txt"), sitemap.join("\n") + "\n");
console.log("Done", articles.length, "IDs", START_ID, "-", START_ID + articles.length - 1);
