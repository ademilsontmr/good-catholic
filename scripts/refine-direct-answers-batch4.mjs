import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Batch 4: remaining teaching, saints, feasts, USA guides, prayers, novenas */
const REFINED = {
  // —— Remaining CatholicTeachingOn (12) ——
  "CatholicTeachingOnTruth.tsx":
    "Catholic truth is objective — rooted in Christ who is Truth, preserved in Scripture and Tradition, and taught by the Magisterium. The Eighth Commandment forbids lying; Catholics seek truth in science, conscience formed by faith, and humility before facts that contradict personal preference.",
  "CatholicTeachingOnFreeMasonry.tsx":
    "The Catholic Church prohibits membership in Freemasonry — declared incompatible with Catholic faith because of relativism, oaths, and secrecy that undermine ecclesial communion (1983 CDF declaration). Catholics who join Masonic lodges may not receive Communion; the Church distinguishes fraternal orders that are explicitly Christian and obedient to the Magisterium.",
  "CatholicTeachingOnEnvironment.tsx":
    "Catholic care for creation flows from God as Creator — humans are stewards, not owners, of earth (Laudato Si&apos;). The Church rejects both exploitation of nature and idolizing ecology over human dignity; environmental justice connects to preferential option for the poor and protection of unborn life.",
  "CatholicTeachingOnBeauty.tsx":
    "Beauty is a transcendental pointing to God — sacred art, music, and architecture lift the soul toward heaven. Catholics reject utilitarian ugliness in churches; beauty in liturgy, icons, and creation evangelizes and forms worshippers when ordered to truth and goodness.",
  "CatholicTeachingOnGambling.tsx":
    "Gambling is not intrinsically evil for Catholics — small stakes for recreation may be permissible. The Church condemons gambling that deprives family of necessities, exploits addiction, or replaces trust in Providence; casinos and lottery obsession often violate justice and temperance.",
  "CatholicTeachingOnPatience.tsx":
    "Patience is long-suffering love — enduring delay, suffering, and others&apos; faults without sinful anger. Catholics cultivate it through prayer, acceptance of God&apos;s timing, and imitation of Christ and Mary; it opposes impulsivity and despair in trials.",
  "CatholicTeachingOnFreedom.tsx":
    "True freedom is freedom for excellence — choosing the good, not license to sin. Catholic anthropology rejects freedom as mere autonomy; grace liberates from sin so the will can love God and neighbor; moral law protects authentic freedom.",
  "CatholicTeachingOnMoney.tsx":
    "Money is a tool, not an idol — Catholics may earn wealth justly but must practice stewardship, tithing, and almsgiving. The Church warns against greed, usury, and neglect of the poor; detachment and generosity are virtues; wealth without charity endangers the soul.",
  "CatholicTeachingOnGratitude.tsx":
    "Gratitude is recognition that all good comes from God — Eucharist means thanksgiving. Catholics express it through daily prayer, grace before meals, thanks after blessings, and contentment amid lack; ingratitude feeds pride and depression.",
  "CatholicTeachingOnPeace.tsx":
    "Peace is fruit of justice and charity — not merely absence of war but order in the soul (Augustine). Catholics work for peace through reconciliation, just institutions, and inner union with God; Christ gives peace the world cannot give (John 14:27).",
  "CatholicTeachingOnDrugs.tsx":
    "Recreational drug use is gravely sinful for Catholics — it harms the body, distorts reason, and violates the Fifth Commandment. Medical use under supervision differs; addiction requires treatment, Confession, and community support; the Church opposes legalization that normalizes harm.",
  "CatholicTeachingOnConsciousness.tsx":
    "The Catholic Church teaches the human soul is spiritual and immortal — consciousness reflects the rational soul made in God&apos;s image, not reducible to brain chemistry alone. Ethical issues at end of life (PVS, brain death) require careful moral criteria; the soul is the form of the body.",

  // —— Secondary saints (12) ——
  "SaintRitaOfCascia.tsx":
    "St. Rita of Cascia (1381–1457) — patron of impossible causes, abused wives, and loneliness — bore stigmata and lived decades in peacemaking. Her feast is May 22; roses and novenas for hopeless situations are popular in U.S. parishes.",
  "SaintVincentDePaul.tsx":
    "St. Vincent de Paul (1581–1660) served the poor in France — founded the Vincentians and Ladies of Charity. Patron of charitable societies; St. Vincent de Paul Society operates in thousands of U.S. parishes; his feast is September 27.",
  "SaintKateriTekakwitha.tsx":
    "St. Kateri Tekakwitha (1656–1680) — Lily of the Mohawks — first Native American saint, converted Jesuit mission, lived virginity and penance. Patron of ecology, Native Americans, and those ridiculed for faith; feast July 14 in U.S.",
  "SaintDominic.tsx":
    "St. Dominic (1174–1221) founded the Order of Preachers (Dominicans) and promoted the Rosary against Albigensian errors. Patron of astronomers and the Dominican Republic; feast August 8; Dominicans shaped Catholic theology and Inquisition reform.",
  "SaintIgnatiusOfLoyola.tsx":
    "St. Ignatius of Loyola (1491–1556) — soldier turned mystic — founded the Jesuits and wrote the Spiritual Exercises. Patron of retreats and soldiers; discernment of spirits and &quot;Ad majorem Dei gloriam&quot; define Ignatian spirituality worldwide.",
  "SaintAnneAndJoachim.tsx":
    "Sts. Anne and Joachim are parents of the Virgin Mary — honored in tradition though not named in Scripture. Patrons of grandparents, childless couples, and mothers; feast July 26; devotion strong among families and those seeking children.",
  "SaintMaryMagdalene.tsx":
    "St. Mary Magdalene — &quot;Apostle to the Apostles&quot; — first witness of the Resurrection (John 20). Once confused with the sinful woman; Church clarified she is distinct; feast July 22; patron of penitents, perfumers, and contemplatives.",
  "SaintChristopher.tsx":
    "St. Christopher — legend carries Christ as a child across a river — patron of travelers, motorists, and pilots. Though removed from universal calendar in 1969, local devotion continues; medals on cars reflect prayer for safe journey under Christ&apos;s protection.",
  "SaintBenedictMedal.tsx":
    "The St. Benedict medal is a sacramental with exorcism blessings and initials of Latin prayers against evil — worn or placed in homes for protection. St. Benedict (480–547) founded Western monasticism; Rule of St. Benedict shapes religious life; feast July 11.",
  "SaintJosephineBAkhita.tsx":
    "St. Josephine Bakhita (1869–1947) — kidnapped into slavery in Sudan, freed in Italy, became Canossian sister. Patron of Sudan and human trafficking victims; feast February 8; her story inspires Catholic anti-slavery advocacy in the U.S.",
  "SaintPadrePioMiracles.tsx":
    "Padre Pio&apos;s miracles include stigmata lasting fifty years, bilocation, reading souls in Confession, and countless healings reported at San Giovanni Rotondo. The Church approved his sanctity; Catholics distinguish approved miracles from pious legends while honoring his intercession.",
  "SaintPeregrineNovena.tsx":
    "St. Peregrine (1260–1345) — patron of cancer patients — received healing of his leg after prayer before a crucifix. His novena is popular in hospitals and among the seriously ill; feast May 1; black habit of Servite order identifies his iconography.",

  // —— Feast & seasonal guides (6) ——
  "CorpusChristiFeastGuideCatholic.tsx":
    "Corpus Christi honors Christ truly present in the Eucharist — in the U.S. celebrated on the Sunday after Trinity Sunday (June 7, 2026) with Mass and often outdoor processions with the Blessed Sacrament in a monstrance.",
  "SacredHeartDevotionCompleteGuide.tsx":
    "Sacred Heart devotion honors Jesus&apos; love symbolized by his wounded heart — First Friday Communion, home enthronement, and solemnity on the Friday after Pentecost (June 19, 2026). June is traditionally the month of the Sacred Heart.",
  "AssumptionOfMaryCatholicGuide.tsx":
    "The Assumption (August 15) celebrates Mary taken body and soul into heaven — a dogma defined in 1950. In the United States it is normally a Holy Day of Obligation unless transferred or abrogated when falling on Saturday or Monday.",
  "QueenshipOfMaryCatholicGuide.tsx":
    "The Queenship of Mary (August 22) proclaims Mary as Queen of heaven and earth by grace — one week after the Assumption. Catholics honor her with the Salve Regina, Litany of Loreto Queen titles, and the fifth Glorious Mystery of the Rosary.",
  "CatholicSummerMassScheduleGuide.tsx":
    "Catholics on summer vacation must still attend Sunday Mass — use MassTimes.org or diocesan finders before travel. Many tourist parishes change schedules in July; Saturday vigil Mass fulfills the Sunday obligation in the United States.",
  "SaintsPeterAndPaulFeastGuide.tsx":
    "The feast of Saints Peter and Paul on June 29 honors the two pillars of the Church — pope and apostle to the Gentiles, both martyred in Rome. It is a solemnity but not a separate weekday Holy Day of Obligation in the United States.",

  // —— USA pastoral guides (7) ——
  "CanCatholicsKeepAshesAtHome.tsx":
    "The Catholic Church does not permit keeping cremated remains at home permanently — ashes must be buried in a cemetery or entombed in a sacred place. Temporary storage during arrangements differs from keeping an urn on the mantel indefinitely.",
  "CatholicGodparentRequirementsUsa.tsx":
    "Catholic godparents in the USA must be fully initiated (baptized, confirmed, receiving Communion), at least age 16, living in harmony with Church teaching, and able to obtain a sponsor certificate from their parish.",
  "WhatAgeFirstCommunionCatholicUsa.tsx":
    "Most U.S. Catholic children receive First Communion around age seven or eight after parish religious education — though the pastor determines readiness. First Confession is required beforehand; adults receive through RCIA at Easter Vigil.",
  "HowLongIsRciaProcess.tsx":
    "RCIA typically runs from fall through Easter Vigil — about eight to nine months in U.S. parishes — though timelines vary by readiness, prior baptism, and marriage status. Unbaptized adults are initiated at Easter; baptized Christians may enter sooner.",
  "CatholicFuneralMassWhatToExpect.tsx":
    "A Catholic Funeral Mass (Mass of Christian Burial) offers the Eucharist for the deceased&apos;s soul with Scripture, prayers, and final commendation — often after a Vigil wake. Eulogies belong at the Vigil, not usually during Mass per diocesan norms.",
  "CanCatholicsDonateOrgans.tsx":
    "Yes — the Catholic Church supports organ donation as an act of charity when done ethically after true death is confirmed. Pope St. John Paul II called it a heroic gift; Catholics may register as donors while ensuring family and moral principles guide decisions.",
  "CatholicWeddingMassVsCeremony.tsx":
    "A Catholic wedding with Mass includes the Eucharist for two Catholics; a ceremony without Mass (Liturgy of the Word only) is used when one party is not Catholic or the priest deems it pastorally better — only Catholics in grace receive Communion.",

  // —— Prayers (8) ——
  "FatimaPrayerOMyJesus.tsx":
    "The Fatima Prayer (&quot;O my Jesus, forgive us our sins...&quot;) was revealed at Fatima in 1917 — prayed after each Rosary decade for reparation and conversion of sinners. Our Lady asked for its spread; it is central to Fatima devotion and First Saturday communions.",
  "DivinePraisesCatholic.tsx":
    "The Divine Praises are a Catholic litany of adoration — Blessed be God, Blessed be His Holy Name, etc. — prayed after Benediction of the Blessed Sacrament and at Eucharistic adoration. Written in 1797, they respond to each praise with &quot;Blessed be God.&quot;",
  "JesusPrayerCatholic.tsx":
    "The Jesus Prayer — &quot;Lord Jesus Christ, Son of God, have mercy on me, a sinner&quot; — comes from Eastern Christianity; Catholics may use it in contemplative prayer alongside the Rosary and lectio divina when practiced with Church teaching on grace and sacraments.",
  "SubTuumPraesidiumPrayer.tsx":
    "Sub Tuum Praesidium is among the oldest Marian prayers — &quot;We fly to thy patronage, O holy Mother of God&quot; — from at least the 3rd century. Catholics pray it for protection in danger; it appears in Compline traditions and papal processions.",
  "EternalRestPrayerCatholic.tsx":
    "Eternal Rest (&quot;Eternal rest grant unto them, O Lord, and let perpetual light shine upon them&quot;) is the classic prayer for the dead — sung at funerals, prayed for souls in purgatory, and included in November All Souls devotions and Rosary for the deceased.",
  "AgnusDeiPrayerCatholic.tsx":
    "Agnus Dei (&quot;Lamb of God, who take away the sins of the world, have mercy on us&quot;) is sung at Mass before Communion — three invocations, the third often &quot;grant us peace.&quot; John the Baptist&apos;s words (John 1:29) identify Christ as sacrificial Lamb.",
  "HailHolyQueenPrayer.tsx":
    "Hail, Holy Queen (Salve Regina) closes the Rosary — &quot;Hail, holy Queen, Mother of mercy...&quot; — prayed from Pentecost until Advent when replaced by Alma Redemptoris Mater. One of the four great Marian antiphons of the Church.",
  "MorningOfferingPrayer.tsx":
    "The Morning Offering unites the day&apos;s works, joys, and sufferings to the Sacred Heart of Jesus and Immaculate Heart of Mary — often prayed at waking. Apostleship of Prayer popularized it; it consecrates ordinary labor to God&apos;s glory.",

  // —— Novenas & devotions (5) ——
  "NovenaForFertilityCatholic.tsx":
    "A novena for fertility asks St. Gerard Majella, St. Anne, or Mary for openness to children — nine days of prayer alongside ethical medical care and NaPro technology when appropriate. The Church rejects IVF; prayer supports couples trusting God&apos;s plan for parenthood.",
  "StExpediteNovenaGuide.tsx":
    "St. Expédite novena is popular for urgent needs — tradition holds he was a Roman martyr invoked for swift help. Use with orthodox intent; some Church writers caution against superstition, but many U.S. Catholics pray nine days for pressing deadlines and crises.",
  "DivineMercyNovenaGuide.tsx":
    "The Divine Mercy novena runs from Good Friday to Divine Mercy Sunday — nine days of chaplet prayers Christ gave St. Faustina for different groups of souls. Jesus attached promises of grace and conversion; the image &quot;Jesus, I trust in You&quot; accompanies the devotion.",
  "SacredHeartNovenaGuide.tsx":
    "The Sacred Heart novena prepares for First Friday or the June solemnity — nine days honoring Christ&apos;s love, often with Communion, Confession, and reparation. St. Margaret Mary promoted the devotion after apparitions in Paray-le-Monial, France.",
  "GuardianAngelNovenaGuide.tsx":
    "A guardian angel novena invokes your personal angel over nine days for protection, guidance, and childlike trust — based on Matthew 18:10 and Psalm 91. Catholics teach each person receives a guardian angel at birth; the classic prayer asks light, guard, rule, and guide.",
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
