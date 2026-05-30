import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const jsx = (s) =>
  s.replace(/\\/g, "\\\\").replace(/'/g, "&apos;").replace(/"/g, "&quot;").trim();

/** Batch 3: remaining teaching, Complete guides, saints, liturgy, prayers, novenas */
const REFINED = {
  // —— Catholic teaching (16) ——
  "CatholicTeachingOnBaptism.tsx":
    "Baptism is the first sacrament — washing away original sin, initiating into Christ and the Church, and imprinting an indelible character. Catholics baptize infants by right of parents&apos; duty; adults receive Baptism, Confirmation, and Eucharist at the Easter Vigil through RCIA.",
  "CatholicTeachingOnPrayer.tsx":
    "Catholic prayer is raising heart and mind to God — vocal (Our Father, Rosary), meditative (lectio divina), and contemplative (silent union). The Church teaches set times (Morning Offering, Angelus), liturgical prayer (Mass, Divine Office), and that prayer requires faith, humility, and persistence.",
  "CatholicTeachingOnForgiveness.tsx":
    "Catholics forgive because Christ forgave from the cross — mercy is not optional for disciples (Matthew 6:14-15). The Church distinguishes forgiving the person from trusting again, offers Confession for sin, and teaches that resentment harms the soul while mercy frees it.",
  "CatholicTeachingOnSuffering.tsx":
    "Catholic teaching on suffering sees pain as mystery united to Christ&apos;s Passion — not meaningless, but redeemable when offered with love. The Church rejects euthanasia and despair; saints, sacraments, and community support help believers carry crosses without denying their weight.",
  "CatholicTeachingOnHumility.tsx":
    "Humility is truth before God — knowing oneself as creature and sinner, yet loved infinitely. Catholics cultivate it through Confession, service, accepting correction, and prayers like the Litany of Humility; it is the foundation of all virtues, not self-hatred.",
  "CatholicTeachingOnPride.tsx":
    "Pride is the root sin — inordinate self-love that turns from God and others (CCC 1866). Catholics fight pride through gratitude, confession of faults, obedience to lawful authority, and honoring others; it opposes humility and often masks insecurity with arrogance.",
  "CatholicTeachingOnHope.tsx":
    "Theological hope is trust in heaven and grace to attain it — not wishful thinking but virtue anchored in Christ&apos;s promises. Catholics hope for eternal life, resurrection of the body, and God&apos;s help amid trial; despair and presumption are sins against hope.",
  "CatholicTeachingOnLove.tsx":
    "Catholic love (charity) is willing the true good of the other for God&apos;s sake — agape that seeks salvation, not mere feeling. Marriage love is total, faithful, and open to life; love of neighbor flows from love of God and is the greatest theological virtue.",
  "CatholicTeachingOnCharity.tsx":
    "Charity is supernatural love of God above all and neighbor as oneself for God&apos;s sake — the greatest virtue (1 Corinthians 13). Catholics express it through Corporal and Spiritual Works of Mercy, almsgiving, volunteering, and forgiveness; faith without charity is dead.",
  "CatholicTeachingOnJustice.tsx":
    "Justice gives each person his due — rights, wages, truth, and legal fairness. Catholic social teaching applies justice to poverty, immigration, and human dignity; commutative, distributive, and social justice together build the common good under natural law and Gospel mercy.",
  "CatholicTeachingOnWar.tsx":
    "The Catholic just war tradition permits armed defense only under strict conditions — just cause, legitimate authority, right intention, proportionality, and non-combatant immunity (Catechism 2309). The Church prioritizes peace, diplomacy, and protection of the innocent; pacifism and militarism both require discernment.",
  "CatholicTeachingOnAngels.tsx":
    "Angels are pure spirits created by God — messengers, guardians, and worshippers at the throne. Catholics believe each person has a guardian angel (Matthew 18:10); Michael, Gabriel, and Raphael are archangels named in Scripture; angel worship is forbidden — latria belongs to God alone.",
  "CatholicTeachingOnDeath.tsx":
    "Death is the separation of soul and body — a consequence of sin yet redeemed by Christ&apos;s Resurrection. Catholics prepare through sacraments, Last Rites, and hope in judgment, purgatory, heaven, or hell; the funeral Mass prays for the deceased and proclaims Easter hope.",
  "CatholicTeachingOnAlcohol.tsx":
    "The Catholic Church does not prohibit alcohol — Christ drank wine and changed water into wine at Cana. Moderation is virtue; drunkenness is sin. Some saints abstain by vow; recovering alcoholics should avoid drinking; alcohol must never replace trust in God or harm health or family.",
  "CatholicTeachingOnSocialMedia.tsx":
    "Catholics use social media under the same moral law as speech — avoiding gossip, pornography, bullying, and wasting time that belongs to prayer and duty. The Church encourages evangelization online with charity and truth, while warning that digital life must not replace real community and sacraments.",
  "CatholicTeachingOnScience.tsx":
    "Faith and science cannot ultimately conflict — both seek truth; God is author of Scripture and nature. The Church founded universities, supports ethical research, and rejects scientism that denies the soul; Galileo&apos;s case is often misunderstood — the Magisterium affirms legitimate scientific discovery.",
  "CatholicTeachingOnEndTimes.tsx":
    "Catholic eschatology teaches Christ will return in glory to judge the living and dead — the general resurrection, new heaven and earth, and definitive triumph of good. The Church warns against date-setting and fear-mongering; live ready through sacraments, charity, and hope, not apocalyptic speculation.",

  // —— Complete guides (7) ——
  "CompleteEucharistGuide.tsx":
    "The Eucharist is the source and summit of Catholic life — bread and wine become Christ&apos;s Body and Blood at consecration. Catholics must receive in a state of grace, fast one hour beforehand, and attend Mass weekly; adoration, processions, and First Communion deepen Eucharistic faith.",
  "CompleteConfessionGuide.tsx":
    "Catholic Confession (Reconciliation) restores grace after mortal sin and strengthens against venial sin — examine conscience, confess to a priest, receive absolution, do penance. The seal is absolute; Confession is required at least annually and before Communion if in mortal sin.",
  "CompleteFastingGuide.tsx":
    "Catholic fasting and abstinence bind Ash Wednesday, Good Friday, Lenten Fridays, and Ember Days in tradition — one full meal, two small meals on fast days; no meat on abstinence days. Fasting unites body and spirit; pregnant women, the ill, and elderly may be exempt.",
  "CompleteDiscernmentGuide.tsx":
    "Discernment is discovering God&apos;s will through prayer, Scripture, sacraments, counsel, and peace of soul — especially for vocation, marriage, or career. Ignatian rules distinguish consolation from desolation; major decisions need time, spiritual direction, and obedience to Church teaching.",
  "CompleteSaintsGuide.tsx":
    "Saints are heroes of faith in heaven — the Church canonizes models of holiness, not perfect people without sin on earth. Catholics honor saints, ask intercession, and imitate virtues; patron saints help with specific needs from illness to study to motherhood.",
  "CompletePrayerGuide.tsx":
    "Catholic prayer life includes vocal, meditative, and liturgical forms — daily Morning Offering, Rosary, Mass, and periodic Confession form a foundation. The Liturgy of the Hours, novenas, and adoration extend devotion; consistency matters more than length.",
  "CompleteCatholicMarriageGuide.tsx":
    "Sacramental Catholic marriage requires free consent, openness to children, permanence, and formation — Pre-Cana classes, Natural Family Planning instruction, and meeting with a priest precede the wedding. A Nuptial Mass or Liturgy of the Word celebrates the covenant before God and the Church.",

  // —— Saints (9) ——
  "SaintBernadetteSoubirous.tsx":
    "St. Bernadette (1844–1879) was a poor French girl who saw Our Lady at Lourdes eighteen times in 1858 — Mary asked for prayer, penance, and a chapel. Bernadette became a nun, endured suffering patiently, and her body remains incorrupt; Lourdes heals souls and bodies through faith and springs.",
  "SaintJoanOfArc.tsx":
    "St. Joan of Arc (1412–1431) — the Maid of Orléans — heard saints&apos; voices calling her to restore France&apos;s dauphin and expel English invaders. Captured, tried for heresy, and burned at the stake, she was vindicated and canonized; patron of France, soldiers, and those ridiculed for faith.",
  "SaintPatrick.tsx":
    "St. Patrick (c. 385–461) evangelized Ireland — kidnapped as a youth, escaped, returned as bishop, used the shamrock to teach the Trinity. March 17 is his feast; he is patron of Ireland and engineers; legends of driving out snakes symbolize driving out paganism.",
  "SaintNicholas.tsx":
    "St. Nicholas (270–343) was Bishop of Myra — generous to the poor, defender of orthodoxy at Nicaea, and patron of children, sailors, and gift-givers. December 6 is his feast; his charity inspired Santa Claus traditions, though the saint points to Christ, not commercialism.",
  "SaintPaulApostle.tsx":
    "St. Paul the Apostle — Saul of Tarsus — persecuted Christians until his Damascus conversion; he became apostle to the Gentiles and wrote much of the New Testament. Beheaded in Rome c. 67; feast June 29 with Peter; his theology of grace, Body of Christ, and faith working in love shapes all Catholic preaching.",
  "SaintPeterApostle.tsx":
    "St. Peter was the first pope — fisherman called by Christ, received keys of the kingdom (Matthew 16), denied Jesus then repented, preached at Pentecost. Crucified upside down in Rome; every pope is his successor; feast June 29 with Paul.",
  "SaintTeresaOfAvila.tsx":
    "St. Teresa of Ávila (1515–1582) reformed Carmel, wrote The Interior Castle and Way of Perfection, and taught contemplative prayer with humor and grit. First woman Doctor of the Church; patron of headache sufferers and Spain; her phrase &quot;God alone suffices&quot; summarizes Carmelite spirituality.",
  "SaintJohnOfTheCross.tsx":
    "St. John of the Cross (1542–1591) — Carmelite mystic, poet of Dark Night of the Soul, and Doctor of the Church — taught purification before union with God. Imprisoned by brethren, he united suffering with Christ; co-reformer with Teresa of Ávila; patron of mystics and contemplatives.",
  "SaintElizabethAnnSeton.tsx":
    "St. Elizabeth Ann Seton (1774–1821) — first native-born U.S. saint — widowed, converted to Catholicism, founded the Sisters of Charity and Catholic schools in America. Patron of Catholic schools, widows, and seafarers; her feast is January 4.",

  // —— Liturgical & devotional guides (6) ——
  "CatholicLentGuide.tsx":
    "Lent is forty days of prayer, fasting, and almsgiving before Easter — ashes on Ash Wednesday, violet vestments, Stations of the Cross, and increased Confession. Catholics give up sin and attachments, add charity, and prepare for Triduum; Sundays are not counted in the forty days.",
  "CatholicAdventGuide.tsx":
    "Advent prepares for Christmas over four weeks — hope, peace, joy, and love with violet or rose candles on the wreath. Catholics resist premature celebration, pray the O Antiphons, attend Reconciliation, and await Christ&apos;s coming in history, mystery, and majesty.",
  "PalmSundayCatholicGuide.tsx":
    "Palm Sunday begins Holy Week — Catholics carry blessed palms commemorating Christ&apos;s entry into Jerusalem, then hear the Passion Gospel. It is not a Holy Day of Obligation separate from Sunday Mass in the U.S.; palms are kept at home as sacramentals or returned to the church for burning into next year&apos;s ashes.",
  "CatholicHolyDaysUSA.tsx":
    "U.S. Holy Days of Obligation are six: Mary Mother of God (Jan 1), Ascension (Thursday or Sunday per diocese), Assumption (Aug 15), All Saints (Nov 1), Immaculate Conception (Dec 8), and Christmas — when not transferred or abrogated. Catholics must attend Mass unless excused; check your diocese annually.",
  "StationsOfTheCross.tsx":
    "The Stations of the Cross follow Christ&apos;s Passion through fourteen scenes — from condemnation to burial. Catholics pray them especially in Lent and Good Friday, meditating on each station with genuflections; St. Francis popularized the devotion; many parishes walk them on Fridays.",
  "PlenaryIndulgenceGuide.tsx":
    "A plenary indulgence removes all temporal punishment due to sin — gained under conditions of sacramental Confession, Eucharist, prayer for the Pope&apos;s intentions, detachment from sin, and performing the indulgenced act (e.g., adoration, Stations, Rosary in church). Partial indulgences remit part of punishment.",

  // —— Prayers & litanies (6) ——
  "LitanyOfLoretoCatholic.tsx":
    "The Litany of Loreto is an approved Marian litany invoking Mary under titles like Mother of God, Virgin of virgins, and Help of Christians — leader and people respond &quot;Pray for us.&quot; Used at papal events, May processions, and after Rosary; takes about ten to fifteen minutes.",
  "PrayerOfStFrancisCatholic.tsx":
    "The Prayer of St. Francis (&quot;Lord, make me an instrument of your peace&quot;) asks to sow love, pardon, faith, hope, light, and joy amid conflict. Widely attributed to Francis though likely modern; Catholics pray it for reconciliation, leadership, and peacemaking.",
  "BeatitudesCatholicExplained.tsx":
    "The Beatitudes (Matthew 5:3-12) are Jesus&apos; blueprint for happiness — poor in spirit, meek, merciful, peacemakers, persecuted for righteousness. Catholics see them as attitudes of the Kingdom, not optional ethics; they describe Christ and call disciples to counter-cultural holiness.",
  "TeDeumPrayerCatholic.tsx":
    "The Te Deum is an ancient hymn of praise — &quot;We praise you, O God; we acclaim you as Lord&quot; — sung at Morning Prayer, victories, ordinations, and Thanksgiving. Catholics use it to thank God for blessings; it professes faith in Trinity, Church, and eternal life.",
  "ReginaCaeliPrayer.tsx":
    "Regina Caeli (Queen of Heaven, rejoice!) replaces the Angelus during Easter season — from Easter Sunday through Pentecost. Catholics pray it at noon commemorating Mary&apos;s joy at the Resurrection; Latin and English forms are common in parishes and homes.",
  "LitanyOfTheSaintsCatholic.tsx":
    "The Litany of the Saints invokes holy men and women — &quot;St. N., pray for us&quot; — used at baptisms, ordinations, Rogation days, and All Saints. One of the Church&apos;s approved litanies; the Easter Vigil sings it during the procession to the font.",

  // —— Novenas (6) ——
  "NovenaForAddictionCatholic.tsx":
    "A novena for addiction is nine days of prayer for freedom from alcohol, drugs, pornography, or gambling — invoking St. Maximilian Kolbe, St. Monica, or St. Jude alongside Christ&apos;s healing. Prayer supports recovery programs and professional treatment; the Church teaches addiction is a disease and a spiritual battle.",
  "NovenaForExamsCatholic.tsx":
    "A novena for exams asks St. Joseph of Cupertino (patron of test-takers), St. Thomas Aquinas, or Mary Seat of Wisdom for focus and calm during studies and tests. Catholics combine prayer with honest preparation — not superstition for grades without work.",
  "NovenaForLegalCasesCatholic.tsx":
    "A novena for legal cases invokes St. Yves, St. Thomas More, or St. Jude for just outcomes in court, immigration, or disputes. Catholics pray for truth, wise counsel, and integrity — prayer does not replace honest lawyers or lawful process.",
  "NovenaForFamilyPeaceCatholic.tsx":
    "A novena for family peace asks the Holy Family — Jesus, Mary, and Joseph — to heal conflict, resentment, and division in households. Pray nine days with forgiveness, conversation, and possibly family counseling; sacraments strengthen unity in Christ.",
  "NovenaForBrokenHeartCatholic.tsx":
    "A novena for a broken heart invokes Mary, Mother of Sorrows, St. Rita, or St. Jude for healing after breakup, betrayal, or grief. Catholics allow time to mourn, seek Confession if needed, and trust that Christ binds wounds through prayer and community.",
  "StMonicaNovenaForChildren.tsx":
    "The St. Monica novena for children asks the patron of mothers — who prayed decades for Augustine&apos;s conversion — to intercede for wayward sons and daughters. Nine days of persistent prayer, fasting optionally, and unconditional love mirror Monica&apos;s faithfulness.",
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
