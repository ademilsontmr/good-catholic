import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Batch 5: apologetics, sacraments, what-is, how-to, Marian, spiritual life */
const REFINED = {
  // —— Apologetics & doctrine (9) ——
  "OurLadyGuadalupePatronessAmericas.tsx":
    "Our Lady of Guadalupe appeared to St. Juan Diego in Mexico in 1531 — her image on his tilma is venerated as miraculous and she is Patroness of the Americas and Protectress of the Unborn. Catholics celebrate her feast on December 12 with Mass, roses, and pilgrimages to the Basilica in Mexico City.",
  "WhyYoungCatholicsLeave.tsx":
    "Young Catholics often leave over perceived irrelevance, scandal, moral disagreements, or weak catechesis — not always rejection of Christ. The Church responds through authentic community, beauty in liturgy, clear teaching, and mentors who show faith as a living relationship with Jesus.",
  "PatronSaintsGuide.tsx":
    "Patron saints are heavenly intercessors linked to places, professions, illnesses, or causes — Catholics ask their prayer, not worship them. Choosing a patron for confirmation, naming a child, or daily devotion connects ordinary life to the communion of saints.",
  "DidJesusFoundTheCatholicChurch.tsx":
    "Catholics believe Jesus founded one Church on Peter (Matthew 16:18–19) — apostolic succession, the Eucharist, and bishops trace to the apostles. Historical continuity, unified doctrine, and sacramental life support the claim that the Catholic Church is that original Church fully present today.",
  "AreNonCatholicsSaved.tsx":
    "The Catholic Church teaches salvation comes through Christ — Catholics in full communion have the ordinary means (sacraments and Magisterium), while baptized non-Catholics and those invincibly ignorant may be saved if they sincerely seek truth and cooperate with grace (Lumen Gentium 16).",
  "FaithAndWorksCatholic.tsx":
    "Catholics teach we are saved by grace through faith — but faith that works in love (Galatians 5:6). Good works do not earn salvation; they flow from sanctifying grace and must be present in a living faith, as James 2 and Catholic tradition affirm.",
  "WhyPrayToSaints.tsx":
    "Catholics pray to saints to ask their intercession — like asking a friend to pray for you, not worshipping them. Revelation 5:8 shows saints offering prayers; Mary and the saints are alive in Christ and closer to God than we are on earth.",
  "CatholicVsProtestantBible.tsx":
    "The Catholic Bible includes 73 books — 46 Old Testament (with seven deuterocanonical books) and 27 New Testament. Protestant Bibles typically have 66 books, omitting Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, and added sections of Esther and Daniel.",
  "CatholicApologeticsGuide.tsx":
    "Catholic apologetics defends and explains the faith with reason, Scripture, and Tradition — answering objections about the pope, Mary, saints, and sacraments. It aims at truth and charity, not winning arguments; the goal is to lead souls toward Christ in his Church.",

  // —— What-is guides (9) ——
  "WhatIsTheMassGuide.tsx":
    "The Catholic Mass is the central act of worship — the Liturgy of the Word (Scripture and homily) and Liturgy of the Eucharist where bread and wine become Christ&apos;s Body and Blood. Sunday Mass fulfills the Third Commandment; the Mass re-presents Calvary in an unbloody sacrifice.",
  "WhatIsPurgatoryGuide.tsx":
    "Purgatory is the Catholic doctrine of final purification after death for souls destined for heaven but not yet perfectly holy — temporal effects of forgiven sin are cleansed before the beatific vision. It is not a second chance; those in purgatory are saved and aided by our prayers.",
  "WhatIsTheCatechism.tsx":
    "The Catechism of the Catholic Church (1992) is the official compendium of Catholic doctrine — Scripture, Tradition, and Magisterium organized for bishops, teachers, and laity. It covers creed, sacraments, morality, and prayer in 2,865 numbered paragraphs.",
  "WhatIsCatholicFaith.tsx":
    "Catholic faith is assent to God&apos;s revelation in Christ, preserved in Scripture and Tradition and taught by the Magisterium — lived through sacraments, moral life, and prayer. It is relational trust in Jesus and obedience to the Church he founded, not mere intellectual agreement.",
  "WhatIsANovena.tsx":
    "A novena is nine days of prayer for a special intention — imitating the apostles&apos; nine days of prayer before Pentecost. Catholics may pray to God, Mary, or a saint; novenas express persistent trust and often conclude on a feast day or after a novena prayer formula.",
  "WhatIsHolyOrders.tsx":
    "Holy Orders is the sacrament by which bishops, priests, and deacons are ordained to serve the Church — configuring them to Christ the Head and Shepherd. Only baptized men may be validly ordained priests in the Latin Church; ordination imprints an indelible character.",
  "WhatIsTheBibleCatholic.tsx":
    "For Catholics the Bible is inspired Scripture within Sacred Tradition — interpreted authoritatively by the Magisterium, not private opinion alone. The Church defined the canon; lectio divina and liturgical proclamation are primary ways Catholics encounter the Word.",
  "WhatIsTheCatholicChurch.tsx":
    "The Catholic Church is the community founded by Christ, headed by the pope as successor of Peter, united in faith, sacraments, and governance — the &quot;one, holy, catholic, and apostolic&quot; Church of the Creed, visibly continuing apostolic teaching worldwide.",
  "WhatIsCatholicSpirituality.tsx":
    "Catholic spirituality is the lived relationship with God through prayer, sacraments, virtue, and devotion — shaped by liturgy, saints, and one&apos;s vocation. It includes Rosary, adoration, lectio divina, and works of mercy, always ordered to holiness in communion with the Church.",

  // —— Sacraments & pastoral (6) ——
  "CatholicBaptismGuide.tsx":
    "Catholic Baptism washes away original sin, initiates into Christ&apos;s death and resurrection, and makes one a member of the Church — infants or adults, with water and Trinitarian formula. Godparents must be practicing Catholics; Baptism is necessary for salvation and ordinarily received once.",
  "CatholicConfirmationGuide.tsx":
    "Confirmation completes Baptism — the bishop (or delegate) anoints with chrism and invokes the Holy Spirit for strength and mission. In the U.S. it often follows years of catechesis around ages 12–16; the confirmand chooses a saint name and sponsor.",
  "CatholicFirstCommunion.tsx":
    "First Communion is a Catholic child&apos;s first reception of the Eucharist — the Body and Blood of Christ — after First Confession and catechesis, usually around age seven or eight. It requires belief in the Real Presence and a state of grace.",
  "CatholicMarriageGuide.tsx":
    "Catholic marriage is a sacrament — lifelong covenant between baptized man and woman, open to life, witnessed by the Church. Valid marriage is indissoluble; preparation includes Pre-Cana, natural family planning instruction, and freedom from prior bonds.",
  "HowToGoToConfessionGuide.tsx":
    "To go to Confession: examine conscience, enter the confessional, say &quot;Bless me, Father, for I have sinned,&quot; confess all mortal sins with kind and number, receive penance, pray the Act of Contrition, and receive absolution. The seal is absolute — the priest may never reveal sins.",
  "ExaminationOfConscienceGuide.tsx":
    "An examination of conscience reviews thoughts, words, and deeds against the Ten Commandments and virtues before Confession — asking where you failed to love God and neighbor. Catholic guides often use commandment lists, Beatitudes, or vocation-specific questions for married, single, or youth.",

  // —— How-to & prayer practice (6) ——
  "HowToPrayRosaryComplete.tsx":
    "To pray the Rosary: make the Sign of the Cross, Creed, Our Father, three Hail Marys, Glory Be; then five decades — each with one Our Father, ten Hail Marys, Glory Be, and optional Fatima Prayer — meditating on Joyful, Sorrowful, Glorious, or Luminous mysteries.",
  "HowToPrayNovena.tsx":
    "To pray a novena: choose intention and saint or prayer, set nine consecutive days, pray the same formula daily with focus and persistence, and attend Mass or receive Communion if possible on the final day. Novenas express trust; they do not force God&apos;s will.",
  "HowToDoHolyHour.tsx":
    "A Holy Hour is an hour (or shorter period) of prayer before the Blessed Sacrament — adoration, Scripture, Rosary, silence, and intercession. Catholics may make a Holy Hour at home with a crucifix or at church during Eucharistic exposition.",
  "HowToReadBible.tsx":
    "Catholics read the Bible with the Church — start with Gospels, use a Catholic edition with footnotes, pray before reading, and interpret difficult passages through Tradition and Magisterium. Lectio divina (read, meditate, pray, contemplate) is the classic method.",
  "HowToLiveLent.tsx":
    "Live Lent through prayer, fasting, and almsgiving — Ash Wednesday and Good Friday are days of fast and abstinence; all Fridays abstain from meat. Add daily Gospel reading, Confession, Stations of the Cross, and generosity to the poor.",
  "RosaryForBeginners.tsx":
    "Beginners start with one decade — one mystery, ten Hail Marys — or a single mystery set per day. Use a Rosary booklet, pray slowly, and focus on one scene from Christ&apos;s or Mary&apos;s life rather than rushing through all five decades.",

  // —— Marian devotion (4) ——
  "OurLadyGuadalupeNovena.tsx":
    "The Our Lady of Guadalupe novena runs nine days before her feast on December 12 — prayers to the Patroness of the Americas for unity, protection of the unborn, and conversion. Many U.S. parishes with Hispanic communities pray it with roses and Juan Diego hymns.",
  "OurLadyOfFatimaGuide.tsx":
    "Our Lady of Fatima appeared to three children in Portugal in 1917 — calling for prayer, penance, and consecration to her Immaculate Heart. The Church approved the apparitions; the First Saturday devotion, Rosary, and reparation for sins are central Fatima messages.",
  "OurLadyOfLourdesGuide.tsx":
    "Our Lady appeared to St. Bernadette at Lourdes, France in 1858 — identifying herself as the Immaculate Conception and calling for prayer and penance. Lourdes is a major pilgrimage site; the Church recognizes healings after prayer and bathing in the spring.",
  "ImmaculateConceptionGuide.tsx":
    "The Immaculate Conception teaches Mary was preserved from original sin from the moment of her conception — not Jesus&apos; virginal conception. It is a dogma (1854); the U.S. patronal feast is December 8, a Holy Day of Obligation when not transferred.",

  // —— Classic prayers (4) ——
  "StJudePrayer.tsx":
    "The St. Jude prayer invokes the patron of hopeless causes — &quot;St. Jude, apostle and martyr, pray for us who have recourse to thee&quot; — for desperate situations when human help fails. Jude was a cousin of Jesus and author of the New Testament epistle.",
  "StAnthonyPrayer.tsx":
    "The St. Anthony prayer for lost things — &quot;St. Anthony, St. Anthony, please come around; something is lost and cannot be found&quot; — asks the patron of lost items for help finding objects or spiritual direction. Anthony was a Franciscan preacher and Doctor of the Church.",
  "SaintMichaelPrayer.tsx":
    "The St. Michael prayer (&quot;St. Michael the Archangel, defend us in battle...&quot;) asks protection against evil — composed by Pope Leo XIII after a vision. Catholics pray it after Mass in some parishes, during spiritual warfare, and on Michaelmas (September 29).",
  "MorningPrayerCatholic.tsx":
    "Catholic morning prayer often includes the Sign of the Cross, Morning Offering, Angelus (or Regina Caeli in Easter), and brief Scripture — consecrating the day to God before work begins. Lauds from the Liturgy of the Hours is the Church&apos;s official morning prayer.",

  // —— Spiritual life (4) ——
  "LectioDivina.tsx":
    "Lectio divina is prayerful Scripture reading in four steps — lectio (read), meditatio (meditate), oratio (pray), contemplatio (rest in God). Catholics use it daily to let the Word speak personally, distinct from academic Bible study.",
  "EucharisticAdoration.tsx":
    "Eucharistic adoration is worship of Christ truly present in the consecrated Host exposed in a monstrance or reserved in the tabernacle — prayer, silence, Rosary, and spiritual communion. Perpetual adoration chapels exist in many U.S. parishes.",
  "SpiritualCommunion.tsx":
    "Spiritual Communion is a prayer expressing desire to receive Jesus in the Eucharist when unable to attend Mass — uniting heart to Christ present in the tabernacle. It does not replace Sunday obligation but nourishes love for the Real Presence.",
  "EucharisticMiraclesScience.tsx":
    "Eucharistic miracles are reported cases where consecrated Hosts appear as human heart tissue or bleed — some scientifically examined with unexplained results. The Church investigates cautiously; faith rests on Christ&apos;s words at the Last Supper, not miracles alone.",

  // —— Seasonal (4) ——
  "AshWednesday2026.tsx":
    "Ash Wednesday 2026 is February 18 — it opens Lent with Mass, ashes on the forehead (&quot;Remember you are dust&quot;), and fasting (one full meal, two small) plus abstinence from meat for Catholics ages 18–59.",
  "LentPreparationGuide.tsx":
    "Prepare for Lent by planning prayer (daily Gospel, Stations), fasting (beyond minimum rules), and almsgiving — clearing distractions and scheduling Confession. Catholics choose one serious penance and one work of mercy to sustain forty days.",
  "AdventPrayers.tsx":
    "Advent prayers include the O Antiphons (December 17–24), Advent Wreath prayers each Sunday, and Marian antiphons — preparing for Christ&apos;s birth and Second Coming. The season emphasizes hope, repentance, and joyful expectation, not Christmas celebration yet.",
  "AllSaintsAllSoulsDay.tsx":
    "All Saints (November 1) honors every saint in heaven; All Souls (November 2) prays for the faithful departed in purgatory. Both are Holy Days in the U.S. calendar — Mass, visiting cemeteries, and indulgences for the dead are traditional practices.",

  // —— Misc high-value (4) ——
  "TraditionalLatinMassGuide.tsx":
    "The Traditional Latin Mass (Extraordinary Form) uses the 1962 Roman Missal — mostly Latin, priest facing the altar, Gregorian chant, and older rubrics. Pope Benedict XVI&apos;s Summorum Pontificum expanded access; Pope Francis&apos; Traditionis Custodes regulates its celebration.",
  "WhyProtestantReformation.tsx":
    "The Protestant Reformation (1517 onward) split Western Christianity over authority, justification, and sacraments — Luther, Calvin, and others rejected papal supremacy and several Catholic doctrines. The Catholic Church responded at Trent and continues ecumenical dialogue today.",
  "ReasonsToBecomeCatholic.tsx":
    "People become Catholic for the Eucharist and Real Presence, historical continuity with the apostles, moral clarity, beauty of liturgy, intellectual depth, or personal encounter with Christ in the Church. RCIA welcomes inquirers without pressure.",
  "IncorruptibleSaints.tsx":
    "Incorruptible saints are bodies that did not decay normally after death — considered a sign of holiness, not proof alone. Examples include St. Bernadette and St. Catherine of Bologna; the Church examines scientifically while cautioning against sensationalism.",
  "BrownScapularGuide.tsx":
    "The Brown Scapular of Our Lady of Mount Carmel is a sacramental — two wool cloths worn over the shoulders, signifying devotion to Mary and her protection. Enrollment by a priest includes promises of prayer; the Sabbatine privilege requires chastity and daily prayer.",
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
