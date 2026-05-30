import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Top 50 by GSC impressions, quick wins, and high-intent search volume */
const REFINED = {
  "OurLadyOfGuadalupeScience.tsx":
    "Scientists have studied the Our Lady of Guadalupe tilma for decades — its cactus-fiber cloth should have decayed in decades yet survives after 500 years, and high-resolution imaging has found figures reflected in Mary&apos;s eyes. Catholics see this as Marian evidence; researchers debate mechanisms, but no natural explanation has fully accounted for the image.",
  "CatholicSaintsList.tsx":
    "Catholic saints are holy men and women in heaven whom the Church venerates — each is known for specific patronages (health, work, travel, marriage, lost items, and more). Catholics ask saints to intercede with God; they do not worship saints as gods.",
  "GenZAndCatholicism.tsx":
    "Gen Z and young millennials are returning to Catholicism in notable numbers — drawn by the Real Presence, beauty in liturgy, moral clarity, and online Catholic creators. Surveys and parish RCIA data show a reversal of decades of youth decline, especially among young men seeking tradition and truth.",
  "WhatIsTheTrinity.tsx":
    "The Holy Trinity is the central Catholic belief that one God exists as three divine Persons — Father, Son, and Holy Spirit — equal in glory, distinct in relation, united in essence. Catholics do not worship three gods; the Trinity is one God in three Persons, revealed by Christ and defined by the Church.",
  "SevenDeadlySins.tsx":
    "The seven deadly sins are pride, greed, lust, envy, gluttony, wrath, and sloth — disordered passions that lead to grave sin if unchecked. Catholic tradition pairs each with a contrary virtue (humility, generosity, chastity, kindness, temperance, patience, and diligence) for growth in holiness.",
  "ApparitionsOfOurLady.tsx":
    "Approved Marian apparitions are private revelations recognized by the Church — Guadalupe (1531), Lourdes (1858), and Fatima (1917) are the most famous. Catholics may devoutly honor them; they are not required beliefs like the Assumption, but they shape prayer, pilgrimage, and Marian devotion worldwide.",
  "CatholicViewOnGhosts.tsx":
    "Catholics do not deny spiritual realities, but the Church warns that most &quot;ghost&quot; experiences are not souls of the dead returning — they may involve purgatorial souls (rare), imagination, or demonic deception. Catholics pray for the dead, avoid occult practices, and bless their homes through the Church&apos;s rites.",
  "ChastityModernWorld.tsx":
    "Catholic chastity means integrating sexuality according to God&apos;s plan — abstinence before marriage, fidelity within marriage, and purity of heart in a culture saturated with pornography and hookup culture. It is a virtue of freedom, not repression, ordered to authentic love and the dignity of the person.",
  "CatholicPrayersGuide.tsx":
    "Essential Catholic prayers include the Our Father, Hail Mary, Glory Be, Apostles&apos; Creed, Act of Contrition, and prayers of the Rosary — prayed at Mass, in the home, and before sacraments. Catholics learn these from childhood; each connects the believer to Scripture, the Church, and centuries of tradition.",
  "HailMaryPrayer.tsx":
    "The Hail Mary is the central Catholic Marian prayer, built from Gabriel&apos;s greeting and Elizabeth&apos;s words in Luke 1, plus a petition for Mary&apos;s intercession at death. Catholics pray it in the Rosary, at the end of Compline, and in countless devotions — it is not worship of Mary but honor and request for her prayers.",
  "OurFatherPrayer.tsx":
    "The Our Father (Lord&apos;s Prayer) is the prayer Christ taught his disciples in Matthew 6 — the model for all Christian prayer. Catholics pray it at every Mass, in the Rosary, and daily; each petition (hallowed be thy name, thy kingdom come, forgive us, lead us not into temptation) shapes Catholic spirituality.",
  "CompleteRosaryGuide.tsx":
    "The Rosary is a Catholic devotion meditating on Christ&apos;s life through twenty mysteries while praying one Our Father, ten Hail Marys, and one Glory Be per decade. Catholics use rosary beads to count prayers; the full Rosary takes about 15–20 minutes and is among the most popular prayers in the world.",
  "RosaryCompleteGuide.tsx":
    "The Rosary is a Catholic devotion meditating on Christ&apos;s life through twenty mysteries while praying one Our Father, ten Hail Marys, and one Glory Be per decade. Catholics use rosary beads to count prayers; the full Rosary takes about 15–20 minutes and is among the most popular prayers in the world.",
  "HowToGoToConfession.tsx":
    "To go to Confession, examine your conscience, enter the confessional, tell the priest your sins and how long since your last confession, listen to counsel, perform your penance, and pray the Act of Contrition. The priest absolves you in Christ&apos;s name — the seal of Confession is absolute in Catholic law.",
  "CatholicConfessionGuide.tsx":
    "Catholic Confession (Reconciliation) is the sacrament in which a baptized Catholic confesses sins to a priest and receives absolution from Christ. Sins must be confessed in kind and number when mortal; the Church requires Confession at least once a year and before Communion if in mortal sin.",
  "WhatIsPurgatory.tsx":
    "Purgatory is Catholic teaching that souls who die in God&apos;s grace but still need purification undergo cleansing before entering heaven — not a second chance, but completion of holiness. Catholics pray for the holy souls, offer Masses for them, and gain indulgences to help shorten their purification.",
  "EucharistRealPresence.tsx":
    "Catholics believe Jesus is truly, really, and substantially present in the Eucharist — Body, Blood, Soul, and Divinity under the appearances of bread and wine after consecration. This is not symbol only; the Catechism (CCC 1374) teaches the whole Christ is present, and adoration of the Blessed Sacrament follows from this faith.",
  "MassTimesNearMe.tsx":
    "To find Catholic Mass times near you, search your parish website, diocesan directory, or apps like MassTimes.org and One Body — verify Saturday vigil and Sunday schedules weekly. Catholics must attend Mass every Sunday and Holy Day of Obligation unless illness or impossibility prevents it.",
  "ConfessionTimesNearMe.tsx":
    "Catholic confession times vary by parish — check the parish website, bulletin, or door poster; many U.S. parishes offer Saturday afternoon confessions before vigil Mass. You may also schedule an appointment with any priest; all validly ordained Catholic priests can hear confession anywhere.",
  "StJosephNovenaHouse.tsx":
    "The St. Joseph novena for buying a house is a nine-day Catholic prayer asking the patron of workers and families to intercede for a home purchase, sale, or housing need. Catholics bury a statue of St. Joseph upside down as a popular custom, but the heart of the devotion is persevering prayer and trust in Providence.",
  "StJosephBuyingHouseGuide.tsx":
    "St. Joseph is the Catholic patron of families and workers — many Americans pray a novena to him when buying or selling a home, burying a St. Joseph statue as a folk custom while asking for honest dealings and housing stability. The Church encourages prayer, not superstition; trust God&apos;s timing alongside practical steps.",
  "NovenaForClarityCatholic.tsx":
    "A novena for clarity is nine days of Catholic prayer to the Holy Spirit for light in major decisions — career, marriage, vocation, or relocation. Catholics combine daily prayer with Mass, Confession, counsel from a priest or spiritual director, and patience; clarity means knowing God&apos;s will, not always getting the answer you prefer.",
  "StJudeNovenaGuide.tsx":
    "The St. Jude novena is a nine-day prayer to the patron of hopeless causes — invoked when situations feel impossible, from illness to addiction to broken relationships. Catholics pray with hope, not magic; St. Jude Thaddeus, apostle and martyr, is among the most popular intercessors in U.S. parishes.",
  "NovenaForAnxietyCatholic.tsx":
    "A novena for anxiety is a nine-day Catholic prayer asking Christ, Mary, and saints like St. Dymphna for peace when worry overwhelms you. Prayer supports — but does not replace — therapy or medication; the Church teaches that grace and responsible mental health care belong together.",
  "StAnthonyNovenaLostThings.tsx":
    "The St. Anthony novena for lost things asks the Franciscan Doctor of the Church to intercede when items are missing — keys, wallets, documents, or peace of mind. Catholics pray for nine days (or use the short rhyming prayer immediately); many report finding items during the novena.",
  "WhatIsTheCatholicMass.tsx":
    "The Catholic Mass is the central act of worship — the Liturgy of the Word (Scripture and homily) and the Liturgy of the Eucharist (Consecration and Communion) re-present Christ&apos;s sacrifice. Sunday Mass is obligatory for Catholics; the Mass is the same worldwide, united with the Pope and bishops.",
  "CompleteMassGuide.tsx":
    "Catholic Mass has two main parts: the Liturgy of the Word (readings, homily, Creed) and the Liturgy of the Eucharist (Offertory, Consecration, Communion). Understanding each part helps Catholics participate fully — responses, postures, and receiving Communion in a state of grace.",
  "DoCatholicsWorshipMary.tsx":
    "Catholics do not worship Mary — latria (adoration) belongs to God alone. Catholics honor Mary with hyperdulia (highest veneration of a creature) because she is Mother of God and cooperated in salvation; every Marian prayer leads back to Christ, such as the Hail Mary ending with &quot;pray for us sinners.&quot;",
  "IsItSinToMissMass.tsx":
    "Yes — deliberately missing Sunday Mass without serious reason is a mortal sin in Catholic teaching, violating the Third Commandment and the precept of the Church. Illness, caring for infants, unavoidable travel impossibility, or severe weather may excuse; laziness or recreation alone do not.",
  "CanCatholicsEatMeat.tsx":
    "Catholics abstain from meat on Ash Wednesday, Good Friday, and all Fridays of Lent — and some U.S. bishops extend Friday abstinence year-round or allow another penance. Fish and seafood are permitted; the rule applies to flesh meat of warm-blooded animals, not dairy or eggs.",
  "AshWednesdayGuide.tsx":
    "Ash Wednesday begins Lent — Catholics receive ashes on the forehead (from palms burned last year) as a sign of repentance and mortality: &quot;Remember you are dust.&quot; It is not a Holy Day of Obligation in the U.S., but Mass with ashes is among the best-attended liturgies of the year.",
  "CatholicFastingRules.tsx":
    "Catholic fasting rules require adults (18–59) to eat one full meal on Ash Wednesday and Good Friday, with two smaller meals that together do not equal a full meal; abstinence from meat applies on those days and Lenten Fridays. Pregnant women, the ill, and manual laborers may be exempt.",
  "TenCommandmentsCatholic.tsx":
    "The Ten Commandments are God&apos;s moral law given to Moses — Catholics number them slightly differently from most Protestants but teach the same substance: worship God alone, honor parents, keep Sabbath holy, and avoid idolatry, blasphemy, murder, adultery, theft, false witness, and coveting.",
  "ListOfAllPopesCatholicGuide.tsx":
    "The Catholic Church has had 267 popes from St. Peter to Pope Leo XIV — each Bishop of Rome and successor of Peter with authority to teach and govern the universal Church. This guide lists every pope with dates, eras, and links to individual biographies for SEO and catechesis.",
  "WhyDoCatholics.tsx":
    "Catholics believe the Church founded by Christ on Peter (Matthew 16:18) subsists in the Catholic Church — with the fullness of sacraments, Scripture and Tradition, and apostolic succession. Common reasons to be Catholic include the Eucharist, historical continuity, moral clarity, and communion with saints across centuries.",
  "CatholicVsProtestant.tsx":
    "Catholics and Protestants share faith in Christ and the Bible but differ on authority (Scripture + Tradition vs sola Scriptura), the Eucharist (Real Presence vs memorial), Mary and saints, the papacy, and seven sacraments vs two. Dialogue focuses on shared creeds while honestly addressing 500 years of division since the Reformation.",
  "DivineMercyChaplet.tsx":
    "The Divine Mercy Chaplet is a Catholic prayer given to St. Faustina Kowalska — prayed on ordinary rosary beads, offering the Father the Body and Blood of Christ with &quot;For the sake of His sorrowful Passion, have mercy on us and on the whole world.&quot; It is especially prayed at 3 p.m. and during the Divine Mercy novena before Divine Mercy Sunday.",
  "ActOfContrition.tsx":
    "The Act of Contrition is the Catholic prayer expressing sorrow for sin and resolve to amend life — prayed in Confession before absolution. Common forms include &quot;O my God, I am heartily sorry...&quot; and a longer traditional text; perfect contrition (sorrow from love of God) can forgive mortal sin even before Confession in extremis.",
  "ExaminationOfConscience.tsx":
    "An examination of conscience is prayerful review of thoughts, words, and deeds against the Ten Commandments and Gospel before Confession. Catholics examine sins of commission and omission, note kind and number of mortal sins, and prepare to confess honestly to the priest for valid absolution.",
  "VirginMaryGuide.tsx":
    "Mary is the Mother of God (Theotokos), ever-Virgin, Immaculate Conceived, and assumed into heaven — the four Marian dogmas. Catholics honor her as greatest saint and model of faith; she intercedes for the Church but is not worshipped. The Rosary, Marian feasts, and apparitions deepen devotion to Christ through Mary.",
  "HowToBecomeCatholicGuide.tsx":
    "To become Catholic, an unbaptized adult enters RCIA (Rite of Christian Initiation of Adults), receives formation, and is baptized, confirmed, and receives First Communion at the Easter Vigil. Already-baptized Christians may enter through a similar process and profession of faith, often at Easter or Pentecost.",
  "WhatIsRCIAGuide.tsx":
    "RCIA (Rite of Christian Initiation of Adults) is the Church&apos;s process for welcoming unbaptized adults and baptized non-Catholics into full communion — typically September through Easter in U.S. parishes. Catechumens attend weekly sessions, Mass (Liturgy of the Word), and rites that mark stages toward initiation.",
  "CatholicChurchNearMe.tsx":
    "To find a Catholic church near you, use your diocese&apos;s parish finder, Google Maps, or MassTimes.org — verify Mass times, language (English, Spanish, Latin), and whether the parish offers RCIA, confession, or adoration. Any valid Catholic Mass worldwide fulfills the Sunday obligation.",
  "SundayMass.tsx":
    "Sunday Mass is the primary weekly worship for Catholics — celebrating the Lord&apos;s Day with Scripture, Eucharist, and community. The obligation binds every Catholic except when illness or impossibility excuses; Saturday evening vigil Mass (typically after 4 p.m.) fulfills the Sunday duty in the United States.",
  "BestCatholicBibleTranslations.tsx":
    "The best Catholic Bible translations in English include the NABRE (U.S. liturgy), RSV-2CE, Douay-Rheims (traditional), and Jerusalem Bible — all include the deuterocanonical books Catholics accept. Choose based on readability for study vs devotion; avoid Protestant-only translations that omit Tobit, Wisdom, and Maccabees.",
  "StJosephNovenaForEmployment.tsx":
    "The St. Joseph novena for employment is a nine-day Catholic prayer for job seekers — invoking the patron of workers who provided for the Holy Family through honest labor. Pray daily, attend Mass if possible, update résumés and networks, and trust Providence while actively searching.",
  "StJosephNovenaSellingHouse.tsx":
    "The St. Joseph novena for selling a house asks the patron of families to intercede for a fair sale, wise pricing, and timely closing. Many Catholics combine nine days of prayer with good staging and real estate practice; the buried-statue custom is folk piety, not Church requirement.",
  "NovenaForFinancialHelpCatholic.tsx":
    "A novena for financial help is nine days of prayer to God and St. Joseph for providence amid debt, unemployment, or bills — not prosperity gospel, but trust combined with budgeting, honest work, and help from Catholic Charities or St. Vincent de Paul when needed.",
  "WhyMenReturnToCatholicChurch.tsx":
    "Young men are returning to Catholicism seeking truth, tradition, brotherhood, and the Real Presence — trends visible in TLM parishes, campus ministries, and online Catholic media. The Church offers masculine saints, clear doctrine, and sacramental life that secular culture cannot replicate.",
  "HowToBecomeCatholic.tsx":
    "Becoming Catholic starts with contacting a parish RCIA director — unbaptized adults prepare for baptism, confirmation, and Eucharist at Easter; baptized Christians may make a profession of faith. There is no fee; the process includes prayer, catechesis, and choosing a sponsor.",
  "SignOfTheCrossCatholic.tsx":
    "The Sign of the Cross is made by touching forehead, chest, left shoulder, then right while saying &quot;In the name of the Father, and of the Son, and of the Holy Spirit. Amen.&quot; Catholics use it to begin and end prayer, enter church, and bless themselves — professing faith in the Trinity and Christ&apos;s cross.",
  "IsTheCatholicChurchTrue.tsx":
    "Catholics believe the Church Christ founded on Peter (Matthew 16:18–19) is the one, holy, catholic, and apostolic Church — with unbroken succession, the Eucharist, and Magisterial authority. Apologetics examines history, Scripture, and reason; faith accepts what God has revealed through Christ and the Spirit-guided Church.",
};

function replaceDirectAnswer(content, newText) {
  const escaped = jsx(newText);
  const pattern =
    /(<div className="mb-8 p-6 bg-amber-50\/80 border border-amber-200\/60 rounded-xl">\s*<p className="text-lg text-text leading-relaxed font-medium">)([\s\S]*?)(<\/p>\s*<\/div>)/;
  if (!pattern.test(content)) return null;
  return content.replace(pattern, `$1${escaped}$3`);
}

let updated = 0;
let missing = [];

for (const [file, answer] of Object.entries(REFINED)) {
  const filePath = path.join(blogDir, file);
  if (!fs.existsSync(filePath)) {
    missing.push(file);
    continue;
  }
  const content = fs.readFileSync(filePath, "utf8");
  const next = replaceDirectAnswer(content, answer);
  if (!next) {
    missing.push(`${file} (no amber box)`);
    continue;
  }
  fs.writeFileSync(filePath, next);
  updated++;
  console.log("Refined", file);
}

console.log("\nDone. Updated:", updated, "Missing:", missing.length);
if (missing.length) console.log(missing.join("\n"));
