import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Batch 6: how-to, daily life, liturgy, spiritual life, prayers, pastoral */
const REFINED = {
  // —— How-to (8) ——
  "HowToPrayAngelus.tsx":
    "The Angelus is prayed at 6 a.m., noon, and 6 p.m. — three Hail Marys with versicles about the Incarnation, ending with &quot;And the Word was made flesh.&quot; Catholics bow at those words; during Easter the Regina Caeli replaces it until Pentecost.",
  "HowToReturnToMass.tsx":
    "To return to Mass after absence: go to Confession if you missed Sunday Mass in mortal sin, pick a familiar parish time, sit where comfortable, and follow along in a missal or pew card — no one expects perfection; the Church welcomes every prodigal home.",
  "HowToTeachChildrenToPray.tsx":
    "Teach children to pray by modeling short prayers at meals and bedtime, using the Sign of the Cross, Our Father, and Hail Mary, and making prayer conversational — thank God, ask for help, say sorry. Keep sessions brief; let them see you pray daily.",
  "HowToFindCatholicCommunity.tsx":
    "Find Catholic community through your parish bulletin, young adult groups, Knights of Columbus, Bible studies, and diocesan websites — attend Mass regularly, introduce yourself to the pastor, and volunteer; online groups supplement but do not replace parish life.",
  "HowToOvercomeSin.tsx":
    "Overcome sin through grace in Confession, Eucharist, prayer, avoiding near occasions, and accountability — identify patterns, replace bad habits with virtuous ones, and persist after falls. Mortal sin requires Confession before Communion; daily examination helps.",
  "HowToChooseConfirmationName.tsx":
    "Choose a confirmation saint whose life inspires your vocation — research their story, virtues, and feast day; the name need not match your baptismal name. Pick someone you will ask for intercession throughout adult faith.",
  "HowToStudyBibleCatholic.tsx":
    "Study the Bible as a Catholic with a Church-approved translation, a study Bible with footnotes, the Catechism nearby, and a trusted commentary — read in context, follow Magisterial interpretation on disputed passages, and pray before studying.",
  "HowToPrayForSomeone.tsx":
    "Pray for someone by naming them to God, offering specific intentions, adding a Hail Mary or Our Father, and optionally fasting or offering Mass for them — intercessory prayer unites your sacrifice with Christ&apos;s; trust God&apos;s timing and will.",

  // —— Catholic daily life (6) ——
  "CatholicParenting.tsx":
    "Catholic parenting forms children in faith through family prayer, Sunday Mass, moral example, and open conversation about God — baptizing infants, teaching virtue, and creating a home where Christ is honored without coercion or hypocrisy.",
  "CatholicFamilyTraditions.tsx":
    "Catholic family traditions include Advent wreaths, blessing of homes at Epiphany, saint feast celebrations, rosary nights, and Sunday rest — customs that pass faith to children and mark the liturgical year in ordinary domestic life.",
  "CatholicLivingSecularWorld.tsx":
    "Catholics live in the secular world as leaven — engaging culture, work, and politics with Gospel values while avoiding compromise on grave sin; Sunday Mass, daily prayer, and moral courage keep faith from becoming private opinion only.",
  "DailyPrayerRoutine.tsx":
    "A Catholic daily prayer routine typically includes morning offering, Angelus at noon, Rosary or lectio divina, and night examination — anchored by Sunday Mass and regular Confession; even five focused minutes beat inconsistent long sessions.",
  "PrayerLife.tsx":
    "Catholic prayer life grows through vocal prayer (Our Father, Rosary), meditation, contemplation, and liturgical worship — ordered to charity and sacraments. Prayer is conversation with God; consistency and honesty matter more than eloquence.",
  "FamilyPrayer.tsx":
    "Family prayer unites the domestic church — grace before meals, bedtime prayers with children, Rosary on feast days, and Scripture at the table. The father or mother often leads; short and regular beats rare and lengthy.",

  // —— Mass & liturgy (7) ——
  "CatholicMassGuide.tsx":
    "Catholic Mass has two parts — Liturgy of the Word (readings, homily, Creed, intercessions) and Liturgy of the Eucharist (Offertory, Consecration, Communion, dismissal). Stand, sit, and kneel at local norms; non-Catholics may attend but not receive Communion.",
  "MeaningOfMass.tsx":
    "The Mass means participation in Christ&apos;s one sacrifice on Calvary made present on the altar — not a re-crucifixion but a sacramental re-presentation. Catholics offer worship to the Father through the Son in the Spirit and receive his Body and Blood.",
  "DailyMassReadings.tsx":
    "Daily Mass readings follow a three-year Sunday cycle and two-year weekday cycle — Old Testament (or Acts), Psalm, New Testament epistle, and Gospel. USCCB publishes readings online; lectio divina on the day&apos;s Gospel is a common lay practice.",
  "LiturgicalSeasonsGuide.tsx":
    "The liturgical year moves through Advent, Christmas, Ordinary Time, Lent, Easter Triduum, and Easter season — each with distinct colors, readings, and disciplines. Sundays are the Lord&apos;s Day; feasts and memorials of saints fill the calendar.",
  "LiturgyOfTheHoursGuide.tsx":
    "The Liturgy of the Hours is the Church&apos;s official daily prayer — Lauds, Day Prayer, Vespers, Compline, and Office of Readings — using psalms and canticles. Clergy and religious must pray it; laity are encouraged and many use apps like iBreviary.",
  "FastingAndAbstinence.tsx":
    "Catholic fasting and abstinence: Ash Wednesday and Good Friday — one full meal, two small, no meat; all Fridays abstain from meat (U.S. norms allow another penance if bishop permits). Ages 18–59 for fast; 14+ for abstinence.",
  "MeaningOfCrucifix.tsx":
    "The crucifix shows Christ crucified — Catholics display it in churches and homes as reminder of redemptive suffering, not morbid focus. It differs from an empty cross (Protestant emphasis on Resurrection); both truths belong to full Christian faith.",

  // —— Spiritual life (7) ——
  "DarkNightOfTheSoul.tsx":
    "The dark night of the soul (St. John of the Cross) is purifying desolation in advanced prayer — God withdraws felt consolation to deepen faith and love. It differs from depression or loss of faith; spiritual direction helps discern and endure.",
  "ContemplativePrayer.tsx":
    "Contemplative prayer is silent loving attention to God beyond words — a gift of the Spirit, not a technique. Catholics prepare through lectio divina and Rosary; Centering Prayer and similar methods require discernment with Church teaching.",
  "SpiritualDirection.tsx":
    "Spiritual direction is regular guidance in prayer and discernment with a trained director — distinct from counseling or Confession. Catholics seek directors knowledgeable in faith, psychologically healthy, and obedient to Magisterium.",
  "LivingVirtue.tsx":
    "Living virtue means habitual excellence ordered by reason and grace — cardinal virtues (prudence, justice, fortitude, temperance) and theological virtues (faith, hope, charity). Sacraments and prayer supply strength; repeated good acts form character.",
  "GrowingInHumility.tsx":
    "Grow in humility by acknowledging dependence on God, accepting correction, serving without recognition, and confessing pride in examination of conscience — Mary&apos;s Magnificat and Jesus&apos; washing of feet model Christian humility.",
  "GuardianAngels.tsx":
    "Catholics believe each person has a guardian angel from birth (Matthew 18:10) — a spirit assigned to protect, guide, and present us before God. The Guardian Angel prayer is taught to children; the feast is October 2.",
  "CatholicSpiritualWarfare.tsx":
    "Catholic spiritual warfare fights demons through sacraments, prayer, fasting, St. Michael, and obedience to the Church — not sensationalism or seeking visions. Renounce sin, avoid occult, and use approved deliverance ministry with priestly oversight when needed.",

  // —— Prayers & devotions (9) ——
  "OurLadyFatimaNovenaGuide.tsx":
    "The Fatima novena prepares for Our Lady of Fatima feasts — nine days of Rosary, Fatima prayers, and sacrifices for conversion of sinners and peace. Many begin May 4 for May 13; First Saturdays extend the devotion year-round.",
  "OurLadyPerpetualHelpNovena.tsx":
    "The Our Lady of Perpetual Help novena is prayed Wednesdays in many parishes — nine weeks or days asking Mary&apos;s intercession under the famous Byzantine icon. The Redemptorists popularized the devotion; the icon shows Christ clinging to his mother.",
  "OurLadyUndoerOfKnots.tsx":
    "Our Lady Undoer of Knots (Maria Knotenlöserin) is a devotion to Mary untying life&apos;s problems — inspired by a Baroque painting and promoted by Pope Francis. Catholics pray for her help with marriage, family, and seemingly impossible tangles.",
  "NovenasExplained.tsx":
    "Novenas are nine days of prayer for an intention — biblical precedent in Acts 1 before Pentecost. Catholics pray set formulas to saints or God; they express persistence, not magic; the Church encourages them when aligned with faith.",
  "PrayerToStJoseph.tsx":
    "Prayers to St. Joseph invoke the foster father of Jesus — patron of workers, fathers, and a happy death. The Memorare to St. Joseph, Year of St. Joseph indulgences, and sleeping with his name on your lips are popular devotions.",
  "GoodFridayPrayers.tsx":
    "Good Friday prayers include the Stations of the Cross, veneration of the cross, and silent adoration — no Mass is celebrated; Communion is distributed from hosts consecrated Holy Thursday. It is a day of fast and abstinence.",
  "LentPrayers.tsx":
    "Lent prayers include the Stations of the Cross, Lenten antiphons, Psalm 51, and penitential litanies — added to daily Rosary and Scripture. Ash Wednesday through Holy Saturday focuses on repentance, almsgiving, and preparation for Easter.",
  "PrayerBeforeMealsCatholic.tsx":
    "Catholic grace before meals blesses God for food — &quot;Bless us, O Lord, and these thy gifts...&quot; or simpler &quot;Grace&quot; with Sign of the Cross. It acknowledges Providence and sanctifies family table fellowship.",
  "NightPrayerCatholic.tsx":
    "Catholic night prayer (Compline) includes examination of conscience, act of contrition, Psalm 4 or 91, and entrusting sleep to God — &quot;Into your hands, O Lord, I commend my spirit.&quot; Many families pray a simplified version with children.",

  // —— Doctrine & Marian (6) ——
  "GiftsOfHolySpirit.tsx":
    "The seven gifts of the Holy Spirit — wisdom, understanding, counsel, fortitude, knowledge, piety, fear of the Lord — are infused at Baptism and strengthened in Confirmation. They perfect the virtues and help us follow the Spirit&apos;s lead.",
  "FruitsOfHolySpirit.tsx":
    "The twelve fruits of the Holy Spirit (Galatians 5:22–23) — charity, joy, peace, patience, kindness, goodness, generosity, gentleness, faithfulness, modesty, self-control, chastity — show the Spirit&apos;s work in a soul living in grace.",
  "WhatIsTheNiceneCreed.tsx":
    "The Nicene Creed is the Church&apos;s profession of faith at Mass — formulated at Nicaea (325) and Constantinople (381), defining belief in one God, Trinity, Incarnation, Resurrection, one baptism, and life everlasting. Catholics stand and recite it on Sundays.",
  "WhatIsTheScapular.tsx":
    "A scapular is a sacramental — two cloth squares on cords, originally part of religious habits; the Brown Scapular of Carmel signifies devotion to Mary. Enrollment by a priest is required; it is a sign of prayer, not automatic salvation.",
  "TheProblemOfSuffering.tsx":
    "Catholics understand suffering through the Cross — Christ redeems pain by joining it to his; suffering is not meaningless when offered in love. The Church rejects pure punishment theology; Job, Gospels, and John Paul II&apos;s Salvifici Doloris explore mystery without easy answers.",
  "VirginMary.tsx":
    "Mary is Mother of God (Theotokos), ever-Virgin, Immaculate Conception, and Assumed into heaven — highest honor among saints, not worship. Catholics honor her as Jesus did; she leads to Christ, crushes the serpent&apos;s head, and intercedes for the Church.",

  // —— Pastoral & sacramentals (7) ——
  "CatholicFuneralRites.tsx":
    "Catholic funeral rites include Vigil (wake), Funeral Mass (Mass of Christian Burial), and Rite of Committal at the cemetery — prayer for the deceased&apos;s soul and comfort for the living. Cremation is allowed; ashes must be buried in sacred ground.",
  "CatholicLastRites.tsx":
    "Last Rites (Anointing of the Sick) include confession if possible, anointing with oil, and Viaticum (Communion as food for the journey) — for anyone seriously ill or elderly, not only the moment of death. They forgive sin and strengthen the soul.",
  "CatholicAnnulmentProcess.tsx":
    "A Catholic annulment declares a marriage was invalid from the start — not divorce but judgment that consent, form, or capacity was lacking. The process involves tribunal, witnesses, and may take months; it allows remarriage in the Church if nullity is proven.",
  "NaturalFamilyPlanning.tsx":
    "Natural Family Planning (NFP) uses fertility awareness to achieve or avoid pregnancy — morally acceptable to the Church when openness to life guides decisions. It requires training; effectiveness rivals artificial methods when used correctly; it respects marital unity without contraception.",
  "CatholicTithingGuide.tsx":
    "Catholic tithing traditionally means giving ten percent — often five to parish, five to charity — though the Church sets no rigid rule; generous proportionate giving from income is the norm. Sunday offering supports parish ministry and the poor.",
  "ExaminationOfConscienceGuideDetailed.tsx":
    "A detailed examination reviews each commandment with specific questions — lying, lust, missing Mass, gossip, neglect of family duties — before Confession. Guides exist for married, single, youth, and priests; honesty about mortal sin is essential for valid absolution.",
  "MiraculousMedalGuide.tsx":
    "The Miraculous Medal was revealed to St. Catherine Labouré in 1830 — Mary standing on the globe, rays from her hands, &quot;O Mary conceived without sin, pray for us who have recourse to thee.&quot; Worn for devotion; miracles reported through her intercession.",

  // —— Vocation & conversion (2) ——
  "SignsOfVocation.tsx":
    "Signs of a vocation to priesthood or religious life include desire for prayer, love of Eucharist, attraction to service, peace when imagining that life, and confirmation from spiritual director — not fleeting emotion but sustained fruit over time.",
  "CatholicConversionGuide.tsx":
    "Catholic conversion through RCIA involves inquiry, catechumenate, rites, and initiation at Easter Vigil — Baptism if unbaptized, Confirmation and Eucharist for all. Sponsors, parish community, and gradual immersion in Mass prepare the convert.",
};

function replaceDirectAnswer(content, newText) {
  const escaped = jsx(newText);
  const pattern =
    /(<div className="mb-8 p-6 bg-amber-50\/80 border border-amber-200\/60 rounded-xl">\s*<p className="text-lg text-text leading-relaxed font-medium">)([\s\S]*?)(<\/p>\s*<\/div>)/;
  if (!pattern.test(content)) return null;
  return content.replace(pattern, `$1${escaped}$3`);
}

let updated = 0;
const missing = [];

for (const [file, answer] of Object.entries(REFINED)) {
  const filePath = path.join(blogDir, file);
  if (!fs.existsSync(filePath)) {
    missing.push(`${file} (not found)`);
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
