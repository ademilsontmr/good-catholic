import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Batch 7 (final): remaining articles with auto-generated Direct Answers */
const REFINED = {
  "ActOfFaithHopeCharity.tsx":
    "The Acts of Faith, Hope, and Charity are traditional Catholic prayers — assent to revealed truth, trust in God&apos;s promises, and love of God above all and neighbor as self. They are often prayed after the Rosary or during morning devotion.",
  "BlessedCarloAcutis.tsx":
    "Blessed Carlo Acutis (1991–2006) was an Italian teenager who catalogued Eucharistic miracles online and lived daily Mass and adoration — beatified in 2020, patron example for youth and digital evangelization. His feast is October 12.",
  "CatholicAndOrthodoxDifferences.tsx":
    "Catholics and Orthodox share sacraments, Scripture, and much theology but differ on papal supremacy and infallibility, the Filioque in the Creed, and some disciplinary traditions — schism since 1054; ecumenical dialogue seeks unity without compromising doctrine.",
  "CatholicBaptismPrep.tsx":
    "Baptism preparation for infants includes parent catechesis, choosing godparents who are practicing Catholics, selecting a saint name, and scheduling the rite — often during Sunday Mass. For adults, RCIA replaces infant prep.",
  "CatholicBibleGuide.tsx":
    "The Catholic Bible has 73 books in a Church-defined canon — use translations with imprimatur (NABRE, RSV-2CE, Douay-Rheims). Catholics interpret with Tradition and Magisterium; the Bible is central but not the sole rule of faith.",
  "CatholicBibleStudyGuide.tsx":
    "Catholic Bible study uses a approved translation, Catechism, and commentaries faithful to the Church — small groups at parish, Augustine Institute, or Bible Timeline programs. Avoid study that rejects Magisterial authority on disputed passages.",
  "CatholicBibleVerses.tsx":
    "Essential Catholic Bible verses include John 6 (Eucharist), Matthew 16 (Peter), James 2 (faith and works), Luke 1 (Mary), and John 20 (Confession) — memorized for prayer, apologetics, and lectio divina within Church interpretation.",
  "CatholicChurchHistory.tsx":
    "Catholic Church history spans two millennia — from Pentecost through martyrs, councils (Nicaea, Trent, Vatican II), missions, schisms, and reforms. Apostolic succession links the pope and bishops to the apostles; the Church claims continuity of faith under the Holy Spirit.",
  "CatholicConfirmationPrep.tsx":
    "Confirmation prep includes catechesis on the Holy Spirit, sponsor selection, saint name, service hours, and retreat — in the U.S. often two years before the bishop&apos;s visit. Candidates must be baptized, in grace, and ready to witness publicly.",
  "CatholicConversionsRising.tsx":
    "Catholic conversions are rising in some U.S. dioceses — often driven by Eucharistic hunger, beauty of liturgy, moral clarity, and online testimony. RCIA numbers fluctuate; personal invitation and parish welcome remain decisive factors.",
  "CatholicDating.tsx":
    "Catholic dating seeks a spouse in faith — chastity before marriage, no cohabitation, openness to children, and Mass and prayer together. Physical boundaries protect dignity; intentional courtship toward sacramental marriage replaces casual hookup culture.",
  "CatholicDatingGuide.tsx":
    "A Catholic dating guide emphasizes prayer for discernment, accountability, meeting in public, involving spiritual mentors, and discussing marriage and family early — ending relationships that require sin or block faith growth.",
  "CatholicGriefAndLoss.tsx":
    "Catholics grieve with hope — mourning is human; the Funeral Mass, prayers for the dead, and belief in resurrection comfort the bereaved. Purgatory allows hope of reunion; professional counseling alongside spiritual direction is encouraged.",
  "CatholicHomeschooling.tsx":
    "Catholic homeschooling educates children at home with faith integrated into curriculum — legal in all U.S. states; families use Seton, Mother of Divine Grace, or local co-ops. Bishop guidelines often require catechesis aligned with diocesan standards.",
  "CatholicInnerHealingGuide.tsx":
    "Catholic inner healing prayer invites Christ to heal emotional wounds from sin, trauma, or rejection — often with a trained minister, not replacing therapy or Confession. Unbound, Sohl, and similar ministries operate with priest oversight.",
  "CatholicMarriagePreparation.tsx":
    "Catholic marriage prep (Pre-Cana) includes meetings with priest, FOCCUS or similar inventory, natural family planning class, and canonical freedom checks — required months before the wedding; remarriage after divorce needs annulment first.",
  "CatholicMassOnline.tsx":
    "Online Mass broadcasts help the homebound and sick but do not fulfill the Sunday obligation for those able to attend in person — spiritual communion is possible; Catholics unable to attend due to illness or lack of access should consult their pastor.",
  "CatholicMentalHealthGuide.tsx":
    "Catholic mental health care integrates faith, therapy, and sacraments — grace and medicine both heal; depression and anxiety are not moral failures. Priests refer to professionals; St. Dymphna is a patron; prayer supplements but does not replace treatment.",
  "CatholicMorningRoutine.tsx":
    "A Catholic morning routine may include Sign of the Cross, Morning Offering, brief Scripture, Angelus at noon prep, and review of the day&apos;s saints — setting intention before screens and work. Even ten minutes sanctifies the day.",
  "CatholicPrayerForAnxiety.tsx":
    "Catholic prayer for anxiety includes surrender to God&apos;s will, Rosary, Psalm 23, Jesus&apos; name invocation, and St. Dymphna or St. Teresa of Avila — paired with professional help when needed. Anxiety is not lack of faith; Christ cares for the anxious.",
  "CatholicPrayerForMarriage.tsx":
    "Catholic prayers for marriage ask God to strengthen unity, fidelity, and openness to life — to St. Joseph, Mary, or the Holy Family. Spouses praying together daily is among the strongest protections for sacramental marriage.",
  "CatholicPrayerForProtection.tsx":
    "Catholic prayers for protection include St. Michael prayer, Psalm 91, Guardian Angel prayer, and St. Benedict medal blessing — trusting God while using approved sacramentals. Protection is spiritual; avoid superstition or occult counter-practices.",
  "CatholicPrayersForDying.tsx":
    "Catholic prayers for the dying include Apostolic Pardon if a priest is present, Divine Mercy chaplet, commendation of the soul, and holding a crucifix — family prays Our Father and Hail Mary as the soul departs; call priest for Anointing early.",
  "CatholicRetreatsGuide.tsx":
    "Catholic retreats — silent, preached, or Ignatian — offer prayer, Confession, and rest away from daily noise. Parish weekends, Cursillo, TEC, and monastery guest stays deepen conversion; search diocesan retreat centers nationwide.",
  "CatholicSacramentalsGuide.tsx":
    "Sacramentals are blessed objects and actions — holy water, medals, scapulars, blessed salt — that prepare for grace and remind of faith. They do not work magically; faith and prayer give them meaning; exorcised items require proper blessing.",
  "CatholicSchoolsAmerica.tsx":
    "Catholic schools in America educate about 1.7 million students — parish and diocesan schools integrate faith, academics, and virtue; tuition varies with parish subsidies. They require religion classes and Mass; teachers often need catechist certification.",
  "CatholicViewOnWealth.tsx":
    "Catholic teaching on wealth: private property is legitimate but subordinate to universal destination of goods — the rich must practice stewardship, tithing, and justice to the poor. Wealth without generosity endangers salvation (Luke 18:25).",
  "CatholicWeddingCeremony.tsx":
    "A Catholic wedding ceremony occurs in a church — exchange of vows before priest and witnesses, rings, optional Mass for two Catholics. Music, readings, and décor need pastor approval; civil marriage alone is insufficient for sacramental validity in Church.",
  "CatholicismAndEvolution.tsx":
    "The Catholic Church permits belief in evolution of the body provided one affirms special creation of the soul by God — Pius XII and subsequent popes distinguish scientific theories from philosophical materialism. Adam and Eve as real first parents is required doctrine.",
  "ChristmasMassNearMe.tsx":
    "Christmas Mass times vary by parish — Vigil Mass on December 24 often fulfills the obligation; midnight, dawn, and day Masses on December 25 celebrate the Nativity. Check parish websites early; churches fill quickly; Holy Day of Obligation applies.",
  "ChurchChangesPost2025.tsx":
    "Church changes after 2025 include ongoing implementation of synodal recommendations, liturgical translations, and papal directives — Catholics follow their bishop and Rome for authoritative updates, not social media speculation about unapproved reforms.",
  "ConsecratYourHome.tsx":
    "Consecrating your home to the Sacred Heart or Immaculate Heart involves priestly blessing when possible, enthronement image, family prayer, and renewal of baptismal promises — making the domestic church a place of prayer and virtue.",
  "CorpusChristiCatholic.tsx":
    "Corpus Christi (Body and Blood of Christ) is a solemnity honoring the Real Presence — in the U.S. on the Sunday after Trinity Sunday with processions and Benediction in many parishes. Eucharistic adoration and First Friday devotion extend the feast&apos;s spirit.",
  "DailyMassNearMe.tsx":
    "Daily Mass is offered at most Catholic parishes on weekdays — often early morning; use MassTimes.org, parish apps, or diocesan locators. Daily Mass is not obligatory but richly indulgenced; readings follow the two-year weekday cycle.",
  "DeuterocanonicalBooks.tsx":
    "Deuterocanonical books (Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, plus Esther and Daniel additions) are Scripture in the Catholic canon — in the Septuagint, affirmed at Trent; Protestants removed them in the 16th century.",
  "DignityOfWork.tsx":
    "Catholic social teaching upholds the dignity of work — fair wages, rest on Sunday, safe conditions, and work as participation in God&apos;s creation (Laborem Exercens). Idleness and exploitation both violate human dignity; all honest labor can be offered to God.",
  "DivineOfficeLaity.tsx":
    "Laity may pray the Divine Office (Liturgy of the Hours) — Morning Prayer and Evening Prayer are most common; apps and single-volume Christian Prayer make it accessible. It unites lay faithful with clergy and the universal Church in daily psalmody.",
  "EasterMassTimes.tsx":
    "Easter Mass times include the Easter Vigil after dark on Holy Saturday — the Church&apos;s greatest liturgy with baptisms and Alleluia return — plus multiple Masses Easter Sunday. It is the summit of the liturgical year; arrive early for full churches.",
  "EucharisticAdorationNearMe.tsx":
    "Find Eucharistic adoration through parish bulletins, adoration chapels, and websites like MassTimes.org — perpetual adoration parishes maintain 24/7 schedules with hourly sign-ups. Any Catholic parish with an exposed monstrance welcomes adorers.",
  "EucharisticPrayers.tsx":
    "Eucharistic Prayers I–IV are the central consecration prayers of the Mass — the priest asks the Father to send the Spirit so bread and wine become Christ&apos;s Body and Blood. EP II is most common on Sundays; EP I (Roman Canon) is the oldest.",
  "FaithMentalHealth.tsx":
    "Faith and mental health support each other — grace heals the soul; therapy and medicine heal the mind. Catholics reject stigma; saints like St. Dymphna patronize mental illness; prayer and professional care belong together, not in opposition.",
  "GraceAfterMealsCatholic.tsx":
    "Grace after meals thanks God — &quot;We give thee thanks, Almighty God, for all thy benefits&quot; or the simpler traditional form with Sign of the Cross. It completes the meal blessing and teaches children gratitude.",
  "HealingThroughFaith.tsx":
    "Healing through faith includes sacramental grace, prayer, anointing of the sick, and trust in God&apos;s will — physical cures are possible but not guaranteed. Miracles are investigated by the Church; suffering united to Christ has redemptive value.",
  "HolyWaterSacramental.tsx":
    "Holy water is blessed water used for blessing oneself, homes, and objects — recalls Baptism and repels evil symbolically. Fonts at church entrances invite dipping on entry; priests bless water with exorcism prayer; replace periodically.",
  "HowToPrayIntercessory.tsx":
    "Intercessory prayer asks God for others&apos; needs — name the person, be specific, persist like the widow (Luke 18), and offer fasting or Mass. It is priestly work of the baptized; results follow God&apos;s wisdom, not our timetable.",
  "ImportanceOfConfession.tsx":
    "Confession restores grace after mortal sin and strengthens against venial sin — Christ instituted it (John 20:23); monthly confession is a common Catholic practice. Without it, one may not receive Communion in mortal sin.",
  "Jubilee2025Legacy.tsx":
    "The Jubilee Year 2025 (Pilgrims of Hope) offered plenary indulgences through pilgrimage, works of mercy, and sacraments — its legacy continues in renewed hunger for mercy, pilgrim churches, and the Holy Doors&apos; spiritual meaning beyond the calendar year.",
  "JubileePilgrimageGuide.tsx":
    "A Jubilee pilgrimage visits designated churches — pass through Holy Door, attend Mass, receive Communion and Confession, pray for the pope&apos;s intentions to gain plenary indulgence. Rome, diocesan cathedrals, and shrines participate; check official lists.",
  "LocalPilgrimage.tsx":
    "Local Catholic pilgrimages visit nearby shrines, missions, or basilicas — walking prayer, Mass at destination, and relics or apparition sites. U.S. sites include National Shrine in D.C., Guadalupe tilma tours, and regional saint shrines.",
  "ManagingDepression.tsx":
    "Managing depression as a Catholic includes therapy, medication when prescribed, routine prayer without guilt for dryness, Confession, community, and St. Dymphna — depression is an illness, not punishment; seek help promptly; God does not abandon the suffering.",
  "OurLadyImmaculateConceptionUSA.tsx":
    "The Immaculate Conception is patroness of the United States — December 8 feast, Basilica in Washington, D.C., and national consecration history. Mary conceived without sin from the first moment; the U.S. was placed under her protection in 1846.",
  "PatronSaints.tsx":
    "Patron saints intercede for nations, cities, professions, and causes — St. Patrick for Ireland, St. Luke for physicians, St. Joseph for workers. Catholics honor patrons at feast days and ask their prayer in relevant needs.",
  "PopeFrancisLegacy.tsx":
    "Pope Francis (2013–2025) emphasized mercy, care for the poor and environment (Laudato Si&apos;), synodality, and outreach to margins — his legacy includes encyclicals, Curia reform, and global pastoral style; evaluation continues under Church tradition.",
  "PopeLeoXIV.tsx":
    "Pope Leo XIV continues the papacy after Francis — Catholics pray for the pope as successor of Peter, follow his teaching on faith and morals, and look to Rome for unity. Biographical and policy details develop as his pontificate unfolds.",
  "PrayerForJobAndWork.tsx":
    "Catholic prayers for work invoke St. Joseph the Worker — for employment, just treatment, and offering daily labor to God. Job loss is met with prayer and action; dignity of work teaching supports fair wages and Sabbath rest.",
  "PrayerForTheSick.tsx":
    "Prayer for the sick includes Anointing of the Sick from a priest, Rosary, Divine Mercy chaplet, and intercession to Our Lady of Lourdes or St. Peregrine — visit the ill, offer practical help, and never blame illness on lack of faith.",
  "PrayersForHealingCatholic.tsx":
    "Catholic healing prayers include James 5:14–15 anointing, laying on of hands in charismatic prayer with priestly oversight, and novenas to healing saints — always submit to God&apos;s will; medical care remains primary for bodily illness.",
  "PrayersOfHope2026.tsx":
    "Prayers of hope for 2026 anchor Catholics in trust amid uncertainty — Psalm 27, Romans 8, Divine Mercy, and entrustment to Mary Undoer of Knots. Hope is theological virtue, not optimism; Christ has overcome the world.",
  "PrayingForSoulsInPurgatory.tsx":
    "Praying for souls in purgatory applies the Church&apos;s treasury of merit — Mass intentions, Rosary, almsgiving, and indulgences shorten purification. November All Souls and daily remembrance of deceased are corporal works of mercy to the dead.",
  "PropheciesOfFatima.tsx":
    "Fatima prophecies (1917) included warning of war, spread of Russia&apos;s errors, and the Third Secret about persecution of the Church — popes consecrated the world to Mary; faithful focus on prayer, penance, and First Saturdays rather than private speculation.",
  "RosaryMysteriesMeditation.tsx":
    "Rosary mystery meditation imagines Gospel scenes while praying Hail Marys — Joyful (Incarnation), Sorrowful (Passion), Glorious (Resurrection), Luminous (public ministry). One mystery per decade; slow pacing beats speed; read the biblical account first.",
  "SacramentOfMatrimony.tsx":
    "Matrimony is the sacrament uniting baptized man and woman in indissoluble covenant — the couple are ministers; the priest witnesses. Openness to children and fidelity are essential; valid marriage requires free consent, proper form, and no prior bond.",
  "SacredHeartPromises.tsx":
    "Sacred Heart promises to St. Margaret Mary include peace in families, consolation, refuge, and grace for a fervent life — linked to First Friday Communion and enthronement devotion. The Church approves the devotion; promises require correspondence with grace.",
  "SaintJohnVianneyCureOfArs.tsx":
    "St. John Vianney (1786–1859) — Curé of Ars — heard confessions up to sixteen hours daily and converted a lukewarm parish through prayer and penance. Patron of parish priests; feast August 4; model for confessors and pastors.",
  "SpiritualGiftsGuide.tsx":
    "Spiritual gifts in Catholic context include charisms for building the Church — teaching, healing, administration, mercy — discerned with hierarchy; distinct from sacramental grace and the seven gifts of the Holy Spirit in Confirmation.",
  "SpiritualLifeBasics.tsx":
    "Basics of Catholic spiritual life: Sunday Mass, regular Confession, daily prayer, Scripture, works of mercy, and growth in virtue — built on Baptism and fed by Eucharist. Sanctity is for every layperson, not only religious.",
  "SpiritualRetreatAtHome.tsx":
    "A home spiritual retreat sets aside a day or weekend — silence, Rosary, Scripture, Confession if possible, fasting lightly, and no unnecessary screens. Ignatian examen and Stations substitute when travel to a retreat center is impossible.",
  "StayingCatholicInCollege.tsx":
    "Staying Catholic in college means finding Newman Center or parish, weekly Mass, accountability friends, chastity in dorm culture, and questioning professors&apos; moral claims — intellectual challenges strengthen faith when paired with Catholic fellowship and apologetics.",
  "TattoosCatholicChurch.tsx":
    "The Catholic Church has no absolute ban on tattoos — moral evaluation considers permanence, content (no sacrilege or evil imagery), motive, and health. Catechism does not forbid them; cultural and employer norms vary; conscience and modesty guide decisions.",
  "TheCrusadesHistory.tsx":
    "The Crusades (1095–1291) were medieval military pilgrimages to recover the Holy Land — mixed motives of faith, land, and politics; successes and atrocities on both sides. Modern Church repents sins of crusaders while noting complex historical context.",
  "ThreeDaysOfDarkness.tsx":
    "Three Days of Darkness is a private revelation claim — not required Catholic belief — describing global darkness before divine chastisement. The Church has not approved it; faithful focus on approved devotions, sacraments, and obedience to Magisterium over unapproved prophecies.",
  "VocationalDiscernment.tsx":
    "Vocational discernment discovers God&apos;s call — marriage, priesthood, religious life, or dedicated single life — through prayer, spiritual direction, testing peace over time, and Church confirmation. Discernment is a process, not a single emotion.",
  "WhatDoCatholicsBeliieve.tsx":
    "Catholics believe in one God — Father, Son, and Holy Spirit — the Incarnation, Real Presence in the Eucharist, seven sacraments, papal authority, Mary and the saints, resurrection of body, and life everlasting — summarized in the Creed and Catechism.",
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
