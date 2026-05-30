import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Batch 2: doctrine, saints, prayers, novenas, seasonal guides */
const REFINED = {
  // —— Catholic teaching (12) ——
  "CatholicTeachingOnSalvation.tsx":
    "Catholic salvation is cooperation with God&apos;s grace — Christ won redemption on the cross, and we respond through faith, baptism, sacraments, and good works animated by charity. Catholics reject &quot;faith alone&quot; without love (James 2) and &quot;works alone&quot; without grace; salvation is God&apos;s gift we receive and live.",
  "CatholicTeachingOnMarriage.tsx":
    "Catholic marriage is a lifelong covenant between one man and one woman, raised by Christ to a sacrament that signifies and confers grace. The Church teaches marriage is indissoluble, open to children, and a vocation of mutual self-gift — civil divorce does not dissolve a valid sacramental bond.",
  "CatholicTeachingOnDivorce.tsx":
    "The Catholic Church does not grant divorce that dissolves a valid sacramental marriage — spouses may separate for grave reasons, but remarriage in the Church requires a declaration of nullity (annulment) if the first union was invalid. Divorced Catholics who have not remarried civilly may receive Communion if in a state of grace.",
  "CatholicTeachingOnContraception.tsx":
    "The Catholic Church teaches that contraception — deliberately blocking the procreative meaning of the marital act — is intrinsically wrong (Humanae Vitae, 1968). Natural Family Planning to space births for serious reasons is permitted; openness to life and total self-gift remain the moral norm for married love.",
  "CatholicTeachingAbortion.tsx":
    "The Catholic Church teaches that direct abortion is gravally wrong at every stage — human life deserves protection from conception. Abortion is never a morally licit choice; the Church supports mothers in crisis through pregnancy help centers, post-abortion healing (Project Rachel), and advocacy for both woman and unborn child.",
  "CatholicTeachingOnEuthanasia.tsx":
    "Catholic teaching rejects euthanasia and assisted suicide — intentionally causing or aiding death to eliminate suffering violates the dignity of the human person. The Church permits refusing overly burdensome treatment and supports palliative care that manages pain while respecting natural death as God&apos;s appointed time.",
  "CatholicTeachingOnPornography.tsx":
    "The Catholic Church condemns pornography as gravely sinful — it objectifies persons, destroys marriages, rewires the brain toward lust, and violates chastity. Confession, accountability, filtering software, and counseling are part of recovery; the virtue of purity and the sacraments restore freedom in Christ.",
  "CatholicTeachingOnSameSexMarriage.tsx":
    "The Catholic Church teaches that marriage is exclusively the union of one man and one woman — same-sex unions cannot be sacramental marriage. The Church calls persons with same-sex attraction to chastity and holiness like all Catholics, rejecting unjust discrimination while upholding the truth about human sexuality.",
  "CatholicTeachingOnTransgender.tsx":
    "Catholic teaching holds that God creates each person male or female — the body reveals sexual identity, and gender ideology that rejects the body is incompatible with Christian anthropology. The Church calls for compassion toward those who suffer gender dysphoria while rejecting medical transition that mutilates healthy organs.",
  "CatholicTeachingOnIVF.tsx":
    "The Catholic Church prohibits IVF because it separates procreation from the marital act, often destroys embryos, and treats children as products. Donum Vitae teaches that human life begins at conception and every embryo is a person — adoption and NaPro technology are moral alternatives many Catholic couples pursue.",
  "CatholicTeachingOnHell.tsx":
    "Hell is Catholic dogma — definitive self-exclusion from God for unrepented mortal sin, eternal separation from love, not a metaphor. The Church warns of hell to call sinners to repentance; God desires all to be saved, but human freedom can reject him definitively at death.",
  "CatholicTeachingOnHeaven.tsx":
    "Heaven is the beatific vision — seeing God face to face in perfect happiness with the saints and angels for eternity. Catholics hope for heaven through grace, faith, sacraments, and perseverance; purgatory purifies those who die in friendship with God but still need cleansing before entering glory.",

  // —— Major saints (12) ——
  "SaintFrancisOfAssisi.tsx":
    "St. Francis of Assisi (1181–1226) founded the Franciscan order, embraced radical poverty, received the stigmata, and renewed the Church through joy and love of creation. Patron of ecology and peace, he is among the most beloved saints — his prayer &quot;Make me an instrument of your peace&quot; is prayed worldwide.",
  "SaintPadrePio.tsx":
    "St. Padre Pio (1887–1968) was an Italian Capuchin friar with the stigmata, bilocation, and the gift of reading souls in Confession. Millions visited San Giovanni Rotondo; he founded the House for the Relief of Suffering and is a patron of confessors, civil defense workers, and those seeking healing.",
  "SaintAnthonyOfPadua.tsx":
    "St. Anthony of Padua (1195–1231) was a Franciscan preacher and Doctor of the Church — patron of lost things, the poor, and travelers. His feast is June 13; Catholics invoke him when items are missing and honor his powerful sermons that drew sinners back to Christ.",
  "SaintMichaelArchangel.tsx":
    "St. Michael the Archangel is leader of the heavenly armies — his name means &quot;Who is like God?&quot; Scripture shows him defeating Satan (Revelation 12); Catholics pray the St. Michael prayer after Mass, in spiritual warfare, and on his feast September 29.",
  "SaintJudeThaddeus.tsx":
    "St. Jude Thaddeus is the apostle and martyr invoked as patron of hopeless causes — often confused with Judas Iscariot, devotion revived in the 20th century through St. Bridget&apos;s promises. His feast is October 28; novenas to St. Jude are among the most popular in U.S. parishes.",
  "SaintThereseOfLisieux.tsx":
    "St. Thérèse of Lisieux (1873–1897) — the Little Flower — taught the &quot;little way&quot; of childlike trust and doing small acts with great love. Doctor of the Church and patron of missionaries, she promised to spend her heaven doing good on earth and is one of the most popular modern saints.",
  "SaintAugustineOfHippo.tsx":
    "St. Augustine (354–430) converted from sin and Manichaeism to become Bishop of Hippo and Doctor of the Church — his Confessions and City of God shaped Western Christianity. Patron of theologians and brewers, his phrase &quot;Our hearts are restless until they rest in you&quot; captures Catholic spirituality.",
  "SaintThomasAquinas.tsx":
    "St. Thomas Aquinas (1225–1274) is the Church&apos;s preeminent theologian — Angelic Doctor who synthesized faith and reason in the Summa Theologica. Patron of students and universities, his Eucharistic hymns (Pange Lingua, Tantum Ergo) are sung at Corpus Christi and adoration worldwide.",
  "SaintCatherineOfSiena.tsx":
    "St. Catherine of Siena (1347–1380) was a Dominican mystic, Doctor of the Church, and peacemaker who persuaded Pope Gregory XI to return to Rome. Her Dialogue and letters on Church reform remain influential; she is patron of Italy, nurses, and fire prevention.",
  "SaintMaximilianKolbe.tsx":
    "St. Maximilian Kolbe (1894–1941) offered his life at Auschwitz in place of a stranger — starved after two weeks, he was killed by lethal injection. Franciscan friar, martyr of charity, and patron of prisoners, drug addicts, and the pro-life movement.",
  "SaintDymphnaMentalHealth.tsx":
    "St. Dymphna is patron of those with mental illness, anxiety, and nervous disorders — martyred in the 7th century after fleeing an abusive father. Her shrine in Massillon, Ohio, draws American pilgrims; Catholics invoke her alongside professional mental health care.",
  "SaintJosephGuide.tsx":
    "St. Joseph is foster father of Jesus, spouse of Mary, and patron of the universal Church, workers, and a happy death. Scripture calls him a just man; popes have urged devotion through the Year of St. Joseph, novenas for employment and housing, and entrustment of families to his care.",

  // —— Doctrine & guides (10) ——
  "SevenSacraments.tsx":
    "The seven sacraments are Baptism, Confirmation, Eucharist, Penance, Anointing of the Sick, Holy Orders, and Matrimony — visible signs instituted by Christ that confer grace. Catholics receive sacraments throughout life; the Eucharist is the source and summit, while Baptism initiates into the Church.",
  "WhatIsGraceCatholic.tsx":
    "Grace is God&apos;s free gift of divine life — sanctifying grace indwells the soul in friendship with God; actual grace helps us act rightly in the moment. Catholics receive grace primarily through sacraments, prayer, and charity; it is not earned but cooperated with through faith and works.",
  "WhatIsOriginalSin.tsx":
    "Original sin is the fallen state inherited from Adam and Eve — not personal guilt but deprivation of original holiness and inclination toward sin (concupiscence). Baptism removes original sin; its effects remain, which is why Catholics need grace, sacraments, and lifelong conversion.",
  "WhatIsHolyWeek.tsx":
    "Holy Week is the most sacred week of the Christian year — from Palm Sunday through the Triduum (Holy Thursday, Good Friday, Holy Saturday) to Easter. Catholics attend liturgies commemorating Christ&apos;s Passion, death, and Resurrection; the Easter Vigil is the pinnacle of the liturgical year.",
  "WhatIsPentecost.tsx":
    "Pentecost is the feast of the Holy Spirit&apos;s descent on the apostles fifty days after Easter — birthday of the Church. Catholics wear red, celebrate Mass with Sequence Veni Sancte Spiritus, and pray for renewal; it closes the Easter season and begins Ordinary Time.",
  "WhatIsAdvent.tsx":
    "Advent is the four-week season preparing for Christmas — a time of hope, repentance, and joyful expectation of Christ&apos;s coming in history, sacraments, and glory. Catholics use an Advent wreath, violet vestments, and increased prayer; it begins the liturgical year in the Roman Rite.",
  "CatholicAnnulment.tsx":
    "A Catholic annulment (declaration of nullity) is not divorce — it is a tribunal judgment that no valid sacramental marriage existed due to impediments, lack of consent, or defect of form. If granted, parties may marry in the Church; the process requires witnesses and can take months in U.S. dioceses.",
  "ConvertingToCatholicism.tsx":
    "Converting to Catholicism means entering the one Church Christ founded — through RCIA for the unbaptized or profession of faith for baptized Christians. The journey includes catechesis, sponsors, rites of initiation, and reception of Baptism, Confirmation, and Eucharist, usually at Easter Vigil.",
  "FaithAndAnxiety.tsx":
    "Catholic faith does not deny anxiety — Christ himself experienced anguish, and saints like Dymphna and Padre Pio accompany those who suffer. Prayer, sacraments, community, and professional therapy belong together; trust in Providence does not replace treatment for clinical anxiety disorders.",
  "CatholicProLifeGuide.tsx":
    "Catholic pro-life teaching protects human dignity from conception to natural death — opposing abortion, euthanasia, and unjust violence while supporting mothers, adoption, and social policies that help families thrive. Prayer, education, legislative advocacy, and pregnancy resource centers are common Catholic responses.",

  // —— Prayers (8) ——
  "ComeHolySpiritPrayer.tsx":
    "Come, Holy Spirit is the classic Catholic invocation — Veni Sancte Spiritus — prayed before decisions, at Confirmation, during Pentecost, and in the novena before Pentecost. Catholics ask the Third Person of the Trinity for wisdom, courage, and gifts that build up the Church.",
  "GuardianAngelPrayer.tsx":
    "The Guardian Angel prayer asks one&apos;s personal angel — assigned at birth per Catholic tradition — to light, guard, rule, and guide. Children learn it at bedtime; adults pray it for protection against evil and guidance in daily choices (cf. Matthew 18:10, Psalm 91).",
  "StMichaelChapletPrayer.tsx":
    "The St. Michael Chaplet honors the archangel with nine salutations and invocations for protection against evil — prayed on a chaplet or rosary beads. It complements the short St. Michael prayer and is popular in spiritual warfare, exorcism ministry support, and parish prayer groups.",
  "SevenSorrowsRosaryGuide.tsx":
    "The Seven Sorrows Rosary (Servite Rosary) meditates on seven sorrows of Mary — from Simeon&apos;s prophecy to the burial of Christ. Each sorrow has seven Hail Marys; the devotion was promoted by the Servite order and grants special graces for compassion toward Mary and her Son.",
  "TheMemorarePrayer.tsx":
    "The Memorare is a Catholic prayer to Mary attributed to St. Bernard of Clairvaux — &quot;Remember, O most gracious Virgin Mary, that never was it known...&quot; Catholics pray it in urgent need, before exams, during illness, and in novenas; it expresses confident trust in Mary&apos;s intercession.",
  "AnimaChristiPrayer.tsx":
    "Anima Christi (Soul of Christ) is an Eucharistic prayer — &quot;Soul of Christ, sanctify me; Body of Christ, save me...&quot; — prayed after Communion or during adoration. Though often linked to St. Ignatius, it predates him; it asks Christ&apos;s Passion to transform the soul.",
  "MagnificatPrayerCatholic.tsx":
    "The Magnificat is Mary&apos;s canticle in Luke 1:46–55 — &quot;My soul magnifies the Lord&quot; — prayed nightly in Vespers (Evening Prayer of the Liturgy of the Hours). Catholics meditate on Mary&apos;s humility and God&apos;s justice; it is central to Advent and Marian feasts.",
  "GloryBePrayer.tsx":
    "The Glory Be (Gloria Patri) is a short doxology — &quot;Glory be to the Father, and to the Son, and to the Holy Spirit...&quot; — prayed at the end of each Rosary decade, psalms in the Divine Office, and many novenas. It praises the Trinity and has been sung in the Church since the early centuries.",

  // —— Novenas & expanded guides (8) ——
  "StRitaNovenaImpossibleCauses.tsx":
    "The St. Rita novena for impossible causes invokes the 15th-century Augustinian stigmatist — patron of abused wives, loneliness, and situations without human hope. Catholics pray nine days before her feast (May 22) or anytime; she is often pictured with a thorn wound and roses.",
  "StPadrePioNovenaHealing.tsx":
    "The St. Padre Pio novena for healing asks the stigmatic friar to intercede for physical, emotional, and spiritual recovery. Pray nine consecutive days with Mass and Confession when possible; Padre Pio heard confessions for hours and believed suffering united to Christ brings grace.",
  "UndoerOfKnotsNovenaGuide.tsx":
    "The Undoer of Knots novena honors Mary under a title popularized by Pope Francis — she unties the knots of sin, family conflict, and impossible problems. Catholics pray nine days with the dedicated prayer; the original painting hangs in St. Peter am Perlach, Augsburg, Germany.",
  "NovenaBeforeSurgeryCatholic.tsx":
    "A novena before surgery is nine days of Catholic prayer for the patient, medical team, and successful recovery — invoke Christ the Divine Physician, Mary Health of the Sick, St. Luke, St. Peregrine, and St. Padre Pio. Receive Anointing of the Sick for serious operations; prayer complements medicine.",
  "NovenaForMarriageCatholic.tsx":
    "A novena for marriage asks God and saints like St. Rita, St. Joseph, and St. Anne to intercede for a healthy union, reconciliation, or finding a spouse. Catholics pray nine days with chastity, counseling when needed, and openness to God&apos;s timing — not manipulation of another person&apos;s free will.",
  "NovenaForTheDeadCatholic.tsx":
    "A novena for the dead is nine days of prayer for a soul in purgatory — Mass intentions, Rosary, Eternal Rest prayer, and almsgiving. Catholics believe the living can help the dead through suffrage; the novena often begins after a funeral and may coincide with All Souls&apos; Day.",
  "StGerardNovenaPregnancy.tsx":
    "The St. Gerard novena is prayed by expectant mothers and couples struggling with fertility — St. Gerard Majella (1726–1755) is patron of unborn children and childbirth. Nine days of prayer, often with Mass, accompanies responsible medical care and trust in God&apos;s plan for parenthood.",
  "StMichaelNovenaProtection.tsx":
    "The St. Michael novena for protection invokes the archangel against spiritual evil, danger, and temptation over nine days. Catholics pray during Lent, before travel, or amid spiritual attack — combining prayer with sacraments, prudence, and avoiding occult practices the Church forbids.",
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
