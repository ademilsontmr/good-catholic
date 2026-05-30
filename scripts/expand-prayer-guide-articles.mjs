import fs from "fs";
import path from "path";

const blogDir = path.join(process.cwd(), "src/pages/blog");

const patches = [
  {
    file: "LitanyOfLoretoCatholic.tsx",
    directAnswer: "The Litany of Loreto is an approved Catholic Marian litany invoking Mary under titles such as Mother of God, Virgin of virgins, and Help of Christians. The leader names each title and the people respond pray for us or have mercy on us.",
    extraFaqs: [
      ["Is the Litany of Loreto approved by the Church?", "Yes. It is one of the litanies approved for public and private devotion and is widely used in parishes, shrines, and May processions."],
      ["How long does the Litany of Loreto take?", "About ten to fifteen minutes when prayed at a moderate pace with all titles."],
    ],
  },
  {
    file: "PrayerOfAbandonmentCatholic.tsx",
    directAnswer: "The Prayer of Abandonment is a Catholic prayer attributed to Blessed Charles de Foucauld that entrusts one's entire life to God the Father with gratitude and trust, echoing Christ's words on the cross: Into your hands I commend my spirit.",
    extraFaqs: [
      ["Is Charles de Foucauld a saint?", "He was beatified by Pope Francis in 2022; the Church recognizes his heroic virtue and spirituality of Nazareth."],
      ["Can beginners pray the Prayer of Abandonment?", "Yes. Start with the first line if the full prayer feels difficult; trust grows through repetition."],
    ],
  },
  {
    file: "HolySpiritPrayerForDecisionsCatholic.tsx",
    directAnswer: "The Holy Spirit prayer for decisions is a Catholic invocation of Come, Holy Spirit before major choices — marriage, vocation, career, or medical ethics — combined with Scripture, counsel, and examination of conscience.",
    extraFaqs: [
      ["Is this the same as the novena for clarity?", "Similar in purpose; the novena for clarity is nine days, while this prayer can be used daily during any discernment period."],
      ["Should I talk to a priest when discerning?", "Yes for serious decisions. The Holy Spirit works through the Church's ministers and wise counselors."],
    ],
  },
  {
    file: "ActOfSpiritualCommunionCatholic.tsx",
    directAnswer: "The Act of Spiritual Communion is a Catholic prayer expressing desire to receive Jesus in the Eucharist when sacramental Communion is impossible — during illness, travel, or before Mass. St. Alphonsus Liguori popularized the classic English text.",
    extraFaqs: [
      ["Does Spiritual Communion replace going to Mass?", "No. Catholics still have the Sunday obligation when able; Spiritual Communion unites the soul when the Host cannot be received."],
      ["Who wrote the Act of Spiritual Communion?", "The common English text is associated with St. Alphonsus Liguori; similar prayers appear in centuries of Catholic devotion."],
    ],
  },
  {
    file: "PrayerBeforeCrucifixCatholic.tsx",
    directAnswer: "The Prayer Before a Crucifix is an indulgenced Catholic prayer asking Christ for lively faith, hope, charity, and repentance while kneeling before a crucifix — often associated with St. Francis of Assisi and prayed after Communion or during adoration.",
    extraFaqs: [
      ["Is there an indulgence for this prayer?", "The Church grants a partial indulgence when prayed before a crucifix with the usual conditions (sacramental confession, Communion, prayer for the Pope)." ],
      ["Must I kneel to pray it?", "Kneeling is traditional and fitting but not strictly required if physically unable."],
    ],
  },
  {
    file: "CorpusChristiFeastGuideCatholic.tsx",
    directAnswer: "Corpus Christi is the Catholic solemnity honoring the Real Presence of Christ in the Eucharist, celebrated in the U.S. on the Sunday after Trinity Sunday (June 7 in 2026) with Mass and often a public Eucharistic procession.",
    extraFaqs: [
      ["What does Corpus Christi mean in Latin?", "Body of Christ — referring to Christ truly present in the consecrated Host."],
      ["Can children join the procession?", "Yes. Teach them to genuflect when the Blessed Sacrament passes and to dress modestly."],
    ],
  },
  {
    file: "SacredHeartDevotionCompleteGuide.tsx",
    directAnswer: "Sacred Heart devotion honors the love of Jesus symbolized by his wounded heart, especially through First Friday Communion, family enthronement, and the solemnity on the Friday after Pentecost (June 19, 2026).",
    extraFaqs: [
      ["What image is used for the Sacred Heart?", "Jesus' heart encircled by thorns, with flames and often a cross — showing love wounded yet burning for souls."],
      ["Is June dedicated to the Sacred Heart?", "Yes. June is traditionally the month of the Sacred Heart in Catholic piety worldwide."],
    ],
  },
  {
    file: "SaintsPeterAndPaulFeastGuide.tsx",
    directAnswer: "The feast of Saints Peter and Paul on June 29 honors the two pillars of the early Church — Peter the first pope and Paul apostle to the Gentiles. It is a solemnity but not a separate Holy Day of Obligation beyond Sunday in the United States.",
    extraFaqs: [
      ["Why are Peter and Paul celebrated together?", "Both were martyred in Rome under Nero and together represent the unity of Jewish and Gentile Christianity in the one Church."],
      ["Where are Peter and Paul buried?", "Tradition holds both are buried at St. Peter's Basilica and the Basilica of St. Paul Outside the Walls in Rome."],
    ],
  },
  {
    file: "CatholicSummerMassScheduleGuide.tsx",
    directAnswer: "Catholics on summer vacation in the U.S. must still attend Sunday Mass — use apps like MassTimes.org, parish websites, or diocesan directories to find Mass times near hotels, beaches, or national parks.",
    extraFaqs: [
      ["What if there is no Catholic church nearby?", "You may need to travel a reasonable distance; there is no dispensation from Sunday Mass simply because you are on holiday."],
      ["Do summer parishes have different Mass times?", "Yes. Many coastal and tourist parishes add Masses in summer; always verify online before traveling."],
    ],
  },
  {
    file: "AssumptionOfMaryCatholicGuide.tsx",
    directAnswer: "The Assumption of Mary (August 15) celebrates Mary taken body and soul into heaven at the end of her earthly life. In the United States it is a Holy Day of Obligation when not transferred to Sunday.",
    extraFaqs: [
      ["Is the Assumption in the Bible?", "Revelation 12 is read typologically; the doctrine was defined by Pope Pius XII in 1950 as divinely revealed."],
      ["What if August 15 falls on a Saturday or Monday?", "U.S. bishops may transfer or lift the obligation — check your diocese each year."],
    ],
  },
  {
    file: "QueenshipOfMaryCatholicGuide.tsx",
    directAnswer: "The Queenship of Mary (August 22) celebrates Mary as Queen of Heaven and earth, one week after the Assumption, honoring her unique role in God's plan of salvation.",
    extraFaqs: [
      ["Is Mary Queen because of her own power?", "No. She is Queen by grace, as mother of the King — her glory is entirely from Christ."],
      ["How do Catholics honor Mary as Queen?", "Through the Rosary, Regina Caeli prayer, processions, and entrustment of families and nations to her care."],
    ],
  },
  {
    file: "CanCatholicsKeepAshesAtHome.tsx",
    directAnswer: "The Catholic Church does not permit keeping cremated remains at home indefinitely. Ashes must be buried in a cemetery or entombed in a sacred place — temporary storage during arrangements is different from permanent keeping.",
    extraFaqs: [
      ["What about a small portion in a locket?", "The Church forbids dividing ashes or making keepsakes; the whole body of ashes receives Christian burial."],
      ["Can ashes be buried in the same plot as a spouse?", "Yes. Catholic cemeteries routinely allow companion niches or second interments."],
    ],
  },
  {
    file: "CatholicGodparentRequirementsUsa.tsx",
    directAnswer: "Catholic godparents in the USA must be fully initiated Catholics (baptized, confirmed, receiving Communion), at least 16, living in harmony with Church teaching, and able to obtain a sponsor certificate from their parish.",
    extraFaqs: [
      ["Can two men be godparents?", "No. If two sponsors, canon law requires one man and one woman."],
      ["Can a non-practicing Catholic be a godparent?", "The pastor may decline someone who does not live the faith, even if confirmed."],
    ],
  },
  {
    file: "WhatAgeFirstCommunionCatholicUsa.tsx",
    directAnswer: "Most U.S. Catholic children receive First Communion around age seven or eight after two years of parish religious education, though exact age and readiness are determined by the pastor and diocesan norms.",
    extraFaqs: [
      ["Can adults receive First Communion?", "Yes through RCIA or adult confirmation programs — age is not a barrier."],
      ["Must children confess before First Communion?", "Yes. First Confession is required before First Eucharist in ordinary circumstances."],
    ],
  },
  {
    file: "HowLongIsRciaProcess.tsx",
    directAnswer: "RCIA in the United States typically runs from fall through the Easter Vigil — about eight to nine months — though unbaptized adults are initiated at Easter and timelines vary based on readiness, marriage status, and prior Christian formation.",
    extraFaqs: [
      ["What does RCIA stand for?", "Rite of Christian Initiation of Adults — the Church's process for welcoming new members."],
      ["Can I attend Mass during RCIA before becoming Catholic?", "Yes. You are expected to attend Sunday Mass; catechumens participate in the Liturgy of the Word and are dismissed before Communion."],
    ],
  },
  {
    file: "CatholicFuneralMassWhatToExpect.tsx",
    directAnswer: "A Catholic funeral Mass (Mass of Christian Burial) offers the Eucharist for the deceased's soul, with Scripture, prayers, and often the final commendation. It may follow a Vigil (Rosary or wake) and precedes burial or entombment at a cemetery.",
    extraFaqs: [
      ["Can non-Catholics receive Communion at a funeral?", "No. Only Catholics in a state of grace may receive the Eucharist; others may come forward for a blessing with arms crossed."],
      ["Are eulogies allowed at a Catholic funeral Mass?", "Personal eulogies belong at the Vigil or reception, not usually during the Mass itself per diocesan norms."],
    ],
  },
  {
    file: "CanCatholicsDonateOrgans.tsx",
    directAnswer: "Yes. The Catholic Church supports organ donation as an act of charity when done ethically — after true death is confirmed and without harming the donor's life. Pope St. John Paul II called it a heroic gift.",
    extraFaqs: [
      ["Does organ donation prevent an open-casket funeral?", "Not necessarily; funeral directors work with families and medical teams on dignified presentation."],
      ["Can Catholics register as organ donors on their license?", "Yes, with the understanding that family and Catholic moral principles guide final decisions."],
    ],
  },
  {
    file: "CatholicWeddingMassVsCeremony.tsx",
    directAnswer: "A Catholic wedding with Mass includes the Liturgy of the Eucharist for two Catholics; a wedding ceremony without Mass (Liturgy of the Word only) is used when one party is not Catholic or when a priest deems it pastorally better — only Catholics in grace receive Communion.",
    extraFaqs: [
      ["Who decides Mass vs. ceremony without Mass?", "The couple, priest, and diocesan policy — especially when a Catholic marries a baptized non-Catholic."],
      ["Is a Nuptial Mass required for a valid marriage?", "No. Validity requires consent, canonical form, and freedom to marry — not necessarily a full Mass."],
    ],
  },
];

const directAnswerBlock = (text) => `
              <div className="mb-8 p-6 bg-amber-50/80 border border-amber-200/60 rounded-xl">
                <p className="text-lg text-text leading-relaxed font-medium">${text.replace(/'/g, "&apos;")}</p>
              </div>
`;

for (const p of patches) {
  const filePath = path.join(blogDir, p.file);
  if (!fs.existsSync(filePath)) {
    console.warn("Skip missing", p.file);
    continue;
  }
  let content = fs.readFileSync(filePath, "utf8");

  if (!content.includes("bg-amber-50/80")) {
    content = content.replace(
      '<div className="prose prose-lg max-w-none">',
      `<div className="prose prose-lg max-w-none">${directAnswerBlock(p.directAnswer)}`
    );
  }

  if (p.extraFaqs?.length && content.includes("<BlogFAQ faqs={[")) {
    const faqCount = (content.match(/question:/g) || []).length;
    if (faqCount < 6) {
      const insert = p.extraFaqs
        .map(([q, a]) => `              { question: "${q.replace(/"/g, '\\"')}", answer: "${a.replace(/"/g, '\\"').replace(/'/g, "&apos;")}" }`)
        .join(",\n");
      content = content.replace(
        /(\n            \]\} \/>)/,
        `,\n${insert}$1`
      );
    }
  }

  // Bump read time if still 7-11 min
  content = content.replace(
    /<Clock className="w-4 h-4" \/>7 min read/,
    '<Clock className="w-4 h-4" />14 min read'
  );
  content = content.replace(
    /<Clock className="w-4 h-4" \/>10 min read/,
    '<Clock className="w-4 h-4" />14 min read'
  );
  content = content.replace(
    /<Clock className="w-4 h-4" \/>11 min read/,
    '<Clock className="w-4 h-4" />14 min read'
  );
  content = content.replace(
    /<Clock className="w-4 h-4" \/>12 min read/,
    '<Clock className="w-4 h-4" />15 min read'
  );
  content = content.replace(
    /<Clock className="w-4 h-4" \/>13 min read/,
    '<Clock className="w-4 h-4" />15 min read'
  );

  fs.writeFileSync(filePath, content);
  console.log("Patched", p.file);
}
console.log("Done:", patches.length, "articles");
