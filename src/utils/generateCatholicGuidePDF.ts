import { jsPDF } from "jspdf";

interface GuideData {
  userName: string;
  score: number;
  levelTitle: string;
  answers?: number[];
}

// ─── BRAND COLORS ───────────────────────────────────────────────────────────
const BLUE:   [number,number,number] = [12,  75,  148]; // Marian Blue
const GOLD:   [number,number,number] = [180, 130,  20]; // Liturgical Gold
const DARK:   [number,number,number] = [30,  30,   40]; // Near-black text
const GRAY:   [number,number,number] = [110, 110, 120]; // Muted text
const LIGHT:  [number,number,number] = [245, 246, 250]; // Light bg
const WHITE:  [number,number,number] = [255, 255, 255];
const GREEN:  [number,number,number] = [34,  160,  80];
const AMBER:  [number,number,number] = [200, 140,  20];
const RED:    [number,number,number] = [200,  60,  60];

export const generateCatholicGuidePDF = ({ userName, score, levelTitle, answers = [] }: GuideData) => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();   // 210
  const H = doc.internal.pageSize.getHeight();  // 297
  const M = 18;   // margin
  const CW = W - M * 2; // content width
  const firstName = userName.split(" ")[0] || "Friend";

  // ── Area scores ─────────────────────────────────────────────────────────
  const areaScore = (s: number, e: number) => {
    const sl = answers.slice(s, e);
    if (!sl.length) return score;
    return Math.round(sl.reduce((a, b) => a + (b || 0), 0) / (sl.length * 3) * 100);
  };
  const areas = {
    eucaristica: areaScore(0, 7),
    oracao:      areaScore(7, 14),
    formacao:    areaScore(14, 20),
    devocoes:    areaScore(20, 26),
    testemunho:  areaScore(26, 30),
  };

  // ── Design helpers ───────────────────────────────────────────────────────
  const rgb = (c: [number,number,number]) => ({ r: c[0], g: c[1], b: c[2] });

  const setColor = (c: [number,number,number]) =>
    doc.setTextColor(c[0], c[1], c[2]);

  const setFill = (c: [number,number,number]) =>
    doc.setFillColor(c[0], c[1], c[2]);

  const setDraw = (c: [number,number,number]) =>
    doc.setDrawColor(c[0], c[1], c[2]);

  const cx = (text: string, y: number, size = 11) => {
    doc.setFontSize(size);
    doc.text(text, W / 2, y, { align: "center" });
  };

  const wrap = (text: string, x: number, y: number, maxW: number, size = 10): number => {
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxW) as string[];
    doc.text(lines, x, y);
    return y + lines.length * (size * 0.38);
  };

  // Section title with left accent bar
  const sectionTitle = (text: string, y: number): number => {
    setFill(BLUE);
    doc.rect(M, y - 4, 3, 7, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    setColor(BLUE);
    doc.text(text, M + 6, y);
    doc.setFont("helvetica", "normal");
    setColor(DARK);
    return y + 8;
  };

  // Sub-heading (gold)
  const subHead = (text: string, y: number): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    setColor(GOLD);
    doc.text(text, M, y);
    doc.setFont("helvetica", "normal");
    setColor(DARK);
    return y + 6;
  };

  // Thin horizontal rule
  const rule = (y: number, color = LIGHT): number => {
    setDraw(color);
    doc.setLineWidth(0.3);
    doc.line(M, y, W - M, y);
    return y + 4;
  };

  // Filled pill badge
  const badge = (text: string, x: number, y: number, color: [number,number,number]) => {
    doc.setFontSize(7.5);
    const tw = doc.getTextWidth(text);
    setFill(color);
    doc.roundedRect(x, y - 4, tw + 6, 5.5, 1.5, 1.5, "F");
    setColor(WHITE);
    doc.text(text, x + 3, y);
    setColor(DARK);
  };

  // Progress bar
  const progressBar = (x: number, y: number, w: number, pct: number) => {
    const color: [number,number,number] = pct >= 70 ? GREEN : pct >= 40 ? AMBER : RED;
    setFill([230, 232, 240]);
    doc.roundedRect(x, y, w, 3, 1, 1, "F");
    setFill(color);
    doc.roundedRect(x, y, Math.max(3, w * pct / 100), 3, 1, 1, "F");
  };

  // Consistent footer
  const footer = (page: number) => {
    // Footer bar
    setFill([240, 242, 248]);
    doc.rect(0, H - 14, W, 14, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setColor(GRAY);
    doc.text("Catholic Life Guide  ·  Guide Catholic  ·  www.guidecatholic.com", M, H - 7);
    doc.text(`${page}`, W - M, H - 7, { align: "right" });
    setColor(DARK);
  };

  // ── Diagnosis text ───────────────────────────────────────────────────────
  const diag = (area: string, pct: number): string => {
    const d: Record<string, [string, string, string]> = {
      eucaristica: [
        `${firstName}, you live the Eucharist as the center of your faith. Holy Mass is truly the "source and summit" of your Christian life. Continue with this devotion.`,
        `${firstName}, your Eucharistic participation is developing. Try arriving earlier for Mass and spending time in thanksgiving after Communion.`,
        `${firstName}, the Eucharist is the greatest treasure Jesus left us. Seek to participate more actively in Sunday Mass and consider weekday Mass when possible.`,
      ],
      oracao: [
        `${firstName}, you cultivate a beautiful prayer life. As St. Teresa of Avila said: "Prayer is a relationship of friendship with God." Continue in this constant dialogue with the Lord.`,
        `${firstName}, your prayer life is growing. Establish fixed times to pray and include the Holy Rosary in your daily routine.`,
        `${firstName}, prayer is the breathing of the soul. Start with small moments: a Hail Mary upon waking, an Our Father before sleeping.`,
      ],
      formacao: [
        `${firstName}, you seek to know the faith deeply. The Catechism and the Sacraments are pillars of your spiritual life. Continue studying and living the Church's teachings.`,
        `${firstName}, you have good doctrinal knowledge. To grow further, read the Catechism and seek formation groups in your parish.`,
        `${firstName}, knowing the faith is fundamental. Start with the YouCat or participate in adult catechesis in your parish.`,
      ],
      devocoes: [
        `${firstName}, your devotions show a deep love for the Church's Tradition. Devotion to Our Lady and the Saints strengthens your faith journey.`,
        `${firstName}, you have good devotional practices. Consider making the Consecration to Our Lady and cultivating devotion to your patron saint.`,
        `${firstName}, devotions are precious aids in spiritual life. Start by praying the Rosary daily — "the Rosary is the weapon of these times."`,
      ],
      testemunho: [
        `${firstName}, you are a true apostle. Your witness and generosity build up the Church. Continue being light to the world!`,
        `${firstName}, you live Christian values. Seek opportunities to serve in the community and share your faith with joy.`,
        `${firstName}, we are called to be "salt of the earth and light of the world." Start by living the Gospel at home and at work.`,
      ],
    };
    const [hi, mid, lo] = d[area] || d.oracao;
    return pct >= 70 ? hi : pct >= 40 ? mid : lo;
  };

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 1 — COVER
  // ════════════════════════════════════════════════════════════════════════
  // Full-bleed header
  setFill(BLUE);
  doc.rect(0, 0, W, 90, "F");

  // Gold accent stripe
  setFill(GOLD);
  doc.rect(0, 88, W, 2.5, "F");

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  setColor(WHITE);
  cx("COMPLETE GUIDE", 38);
  doc.setFontSize(18);
  cx("TO CATHOLIC LIFE", 52);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  setColor([200, 215, 240]);
  cx("Prayers · Devotions · Church Teachings", 66);
  cx("Sacraments · Spiritual Growth", 73);

  // Cross symbol
  setDraw(GOLD);
  doc.setLineWidth(2);
  doc.line(W / 2, 105, W / 2, 138);
  doc.line(W / 2 - 12, 118, W / 2 + 12, 118);

  // Personalization block
  setFill(LIGHT);
  doc.roundedRect(M, 148, CW, 52, 4, 4, "F");
  setDraw([210, 215, 230]);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, 148, CW, 52, 4, 4, "S");

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setColor(GRAY);
  cx("Specially prepared for", 160);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  setColor(BLUE);
  cx(userName, 173);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setColor(GRAY);
  cx(`Assessment Score: ${score}%   ·   Level: ${levelTitle}`, 183);

  // Divider inside box
  setDraw([210, 215, 230]);
  doc.setLineWidth(0.3);
  doc.line(M + 20, 188, W - M - 20, 188);

  doc.setFontSize(8);
  setColor(GRAY);
  cx("Guide Catholic  ·  www.guidecatholic.com", 194);

  // Scripture quote
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  setColor(GRAY);
  cx('"Seek first the Kingdom of God and His righteousness"', 225);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  cx("— Matthew 6:33", 233);

  footer(1);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 2 — COMPLETE ASSESSMENT
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();

  // Page header band
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Your Complete Assessment", M, 12);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setColor([180, 200, 230]);
  doc.text(`${firstName}  ·  Score: ${score}%  ·  ${levelTitle}`, W - M, 12, { align: "right" });

  let y = 28;

  // Intro line
  doc.setFontSize(9);
  setColor(GRAY);
  doc.text(`${firstName}, here is your detailed spiritual profile across 5 key areas of Catholic life:`, M, y);
  y += 9;

  // ── Progress bars ──────────────────────────────────────────────────────
  const areaList = [
    { key: "eucaristica", label: "Eucharistic Life",      pct: areas.eucaristica },
    { key: "oracao",      label: "Prayer Life",           pct: areas.oracao },
    { key: "formacao",    label: "Formation & Sacraments",pct: areas.formacao },
    { key: "devocoes",    label: "Devotions",             pct: areas.devocoes },
    { key: "testemunho",  label: "Christian Witness",     pct: areas.testemunho },
  ];

  for (const a of areaList) {
    const barColor: [number,number,number] = a.pct >= 70 ? GREEN : a.pct >= 40 ? AMBER : RED;
    const badgeLabel = a.pct >= 70 ? "Strong" : a.pct >= 40 ? "Growing" : "Needs Attention";

    // Row background
    setFill(LIGHT);
    doc.roundedRect(M, y - 4, CW, 13, 2, 2, "F");

    // Label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setColor(BLUE);
    doc.text(a.label, M + 3, y + 2);

    // Badge
    badge(badgeLabel, W - M - doc.getTextWidth(badgeLabel) - 10, y + 2, barColor);

    // Score %
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setColor(barColor);
    doc.text(`${a.pct}%`, W - M - doc.getTextWidth(badgeLabel) - 18, y + 2, { align: "right" });

    // Bar
    progressBar(M + 3, y + 5, CW - 6, a.pct);

    y += 16;
  }

  y += 4;
  rule(y, [210, 215, 230]);
  y += 6;

  // ── Detailed diagnosis ─────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  setColor(BLUE);
  doc.text("Detailed Diagnosis", M, y);
  y += 8;

  for (const a of areaList) {
    const barColor: [number,number,number] = a.pct >= 70 ? GREEN : a.pct >= 40 ? AMBER : RED;

    // Area label + badge inline
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    setColor(DARK);
    doc.text(a.label, M, y);

    const badgeLabel = a.pct >= 70 ? "Strong" : a.pct >= 40 ? "Growing" : "Needs Attention";
    badge(badgeLabel, M + doc.getTextWidth(a.label) + 4, y, barColor);

    doc.setFont("helvetica", "normal");
    setColor(GRAY);
    doc.setFontSize(8.5);
    y += 4.5;

    const lines = doc.splitTextToSize(diag(a.key, a.pct), CW) as string[];
    doc.text(lines, M, y);
    y += lines.length * 3.6 + 5;
  }

  footer(2);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 3 — INTRODUCTION
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Introduction: The Call to Holiness", M, 12);

  y = 30;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  setColor(DARK);
  y = wrap(`Dear ${firstName},`, M, y, CW, 10); y += 4;
  y = wrap("This Guide was prepared with great care to help you on your faith journey. The Catholic Church, founded by Our Lord Jesus Christ, is the repository of the fullness of revealed truth and the means of salvation.", M, y, CW, 10); y += 6;
  y = wrap("The Second Vatican Council reminds us that all the faithful are called to holiness: \"All the faithful of whatever state or condition are called to the fullness of Christian life and to the perfection of charity\" (Lumen Gentium, 40). This is not a privilege of the few, but the vocation of all the baptized.", M, y, CW, 10); y += 6;
  y = wrap("In this guide you will find: fundamental prayers of the Catholic tradition, explanations about the Sacraments, Marian devotions, practices of piety, and guidance for growing in spiritual life. Everything is based on the Catechism of the Catholic Church and Sacred Tradition.", M, y, CW, 10); y += 8;

  y = sectionTitle("How to Use This Guide", y);
  const tips = ["Set aside a quiet moment each day for reading and prayer", "Don't rush — absorb each teaching slowly", "Practice the prayers daily, even briefly", "Seek Confession and the Eucharist frequently", "Ask for the intercession of Our Lady"];
  for (const tip of tips) {
    setFill(BLUE);
    doc.circle(M + 1.5, y - 1.5, 1.2, "F");
    doc.setFontSize(10);
    setColor(DARK);
    y = wrap(tip, M + 6, y, CW - 6, 10); y += 1;
  }
  y += 6;

  // Quote box
  setFill(LIGHT);
  doc.roundedRect(M, y, CW, 22, 3, 3, "F");
  setFill(GOLD);
  doc.rect(M, y, 3, 22, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  setColor(DARK);
  wrap("\"Prayer is the raising of one's mind and heart to God or the requesting of good things from God.\"", M + 8, y + 7, CW - 12, 10);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  setColor(GRAY);
  doc.text("— St. John Damascene", M + 8, y + 18);

  footer(3);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 4 — FUNDAMENTAL PRAYERS
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Fundamental Catholic Prayers", M, 12);

  y = 28;
  const prayers = [
    { title: "Sign of the Cross", text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.", note: "The Sign of the Cross is the first prayer we learn and the distinctive mark of the Christian." },
    { title: "Our Father", text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.", note: "Taught by Jesus himself to the Apostles — the Lord's Prayer." },
    { title: "Hail Mary", text: "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.", note: "The greeting of the Archangel Gabriel and the Church's supplication to the Mother of God." },
    { title: "Glory Be", text: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.", note: "" },
    { title: "Apostles' Creed", text: "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.", note: "" },
  ];

  for (const p of prayers) {
    y = subHead(p.title, y);
    // Prayer text in light box
    setFill(LIGHT);
    const pLines = doc.splitTextToSize(p.text, CW - 8) as string[];
    const boxH = pLines.length * 3.8 + 6;
    doc.roundedRect(M, y - 3, CW, boxH, 2, 2, "F");
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9.5);
    setColor(DARK);
    doc.text(pLines, M + 4, y + 1);
    y += boxH + 1;
    if (p.note) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      setColor(GRAY);
      y = wrap(p.note, M, y, CW, 8.5); y += 2;
    }
    y += 3;
  }

  footer(4);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 5 — THE SEVEN SACRAMENTS
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("The Seven Sacraments of the Church", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("The Sacraments are efficacious signs of grace, instituted by Christ and entrusted to the Church. Through them, divine life is communicated to us.", M, y, CW, 9.5); y += 6;

  const sacraments = [
    { n: "1. Baptism",           t: "Gateway to Christian life. We are freed from original sin, reborn as children of God and become members of the Church. \"Whoever believes and is baptized will be saved\" (Mk 16:16)." },
    { n: "2. Confirmation",      t: "Completes Baptism and confers the Holy Spirit in a special way, strengthening us to be witnesses of Christ. We receive the seven gifts of the Holy Spirit." },
    { n: "3. Eucharist",         t: "\"Source and summit of all Christian life\" (LG 11). We receive the very Body and Blood of Christ under the species of bread and wine." },
    { n: "4. Penance",           t: "Sacrament of reconciliation with God and the Church. Through sincere confession and absolution, our sins are forgiven. \"Whose sins you forgive are forgiven\" (Jn 20:23)." },
    { n: "5. Anointing of Sick", t: "Confers special grace to the faithful facing serious illness or old age. It strengthens the soul and can bring healing of the body, if it is God's will." },
    { n: "6. Holy Orders",       t: "Men are ordained bishops, priests or deacons, receiving sacred power to exercise ministry in the name of Christ." },
    { n: "7. Matrimony",         t: "Unites man and woman in an indissoluble covenant. \"What God has joined together, let no one separate\" (Mt 19:6)." },
  ];

  for (let i = 0; i < sacraments.length; i++) {
    const s = sacraments[i];
    setFill(i % 2 === 0 ? LIGHT : WHITE);
    const sLines = doc.splitTextToSize(s.t, CW - 36) as string[];
    const rowH = Math.max(12, sLines.length * 3.8 + 6);
    doc.roundedRect(M, y - 3, CW, rowH, 2, 2, "F");

    // Number circle
    setFill(BLUE);
    doc.circle(M + 7, y + rowH / 2 - 3, 5, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setColor(WHITE);
    doc.text(`${i + 1}`, M + 7, y + rowH / 2 - 0.5, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setColor(BLUE);
    doc.text(s.n.replace(/^\d+\. /, ""), M + 16, y + 2);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    setColor(DARK);
    doc.text(sLines, M + 16, y + 7);
    y += rowH + 2;
  }

  footer(5);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 6 — DEVOTION TO OUR LADY
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Devotion to Our Lady", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("The Virgin Mary occupies a central place in the Catholic faith. She is Mother of God (Theotokos), Mother of the Church and our spiritual Mother. Jesus, from the Cross, entrusted her to us: \"Behold, your mother\" (Jn 19:27).", M, y, CW, 9.5); y += 6;

  y = sectionTitle("The Four Marian Dogmas", y);
  const dogmas = [
    ["Divine Motherhood", "Mary is truly Mother of God — defined at the Council of Ephesus (431 AD)."],
    ["Perpetual Virginity", "Mary was virgin before, during and after the birth of Jesus."],
    ["Immaculate Conception", "Mary was preserved from original sin from the moment of her conception (1854)."],
    ["Assumption", "Mary was taken up to Heaven in body and soul at the end of her earthly life (1950)."],
  ];
  for (const [title, desc] of dogmas) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setColor(GOLD);
    doc.text(`✦  ${title}`, M, y);
    doc.setFont("helvetica", "normal");
    setColor(DARK);
    y = wrap(desc, M + 6, y + 4, CW - 6, 9); y += 2;
  }
  y += 4;

  y = sectionTitle("The Holy Rosary", y);
  doc.setFontSize(9);
  setColor(DARK);
  y = wrap("The Rosary is the prayer most recommended by the Church to honor Our Lady. St. Pio of Pietrelcina said: \"The Rosary is the weapon of these times.\"", M, y, CW, 9); y += 5;

  const mysteries = [
    ["Joyful Mysteries", "Mon & Sat", "Annunciation · Visitation · Nativity · Presentation · Finding in the Temple"],
    ["Sorrowful Mysteries", "Tue & Fri", "Agony in the Garden · Scourging · Crowning with Thorns · Carrying the Cross · Crucifixion"],
    ["Glorious Mysteries", "Wed & Sun", "Resurrection · Ascension · Descent of the Holy Spirit · Assumption · Coronation of Mary"],
    ["Luminous Mysteries", "Thursday", "Baptism in the Jordan · Wedding at Cana · Proclamation of the Kingdom · Transfiguration · Institution of the Eucharist"],
  ];

  for (const [title, days, list] of mysteries) {
    setFill(LIGHT);
    doc.roundedRect(M, y - 3, CW, 16, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setColor(BLUE);
    doc.text(title, M + 3, y + 1);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setColor(GOLD);
    doc.text(days, W - M - 3, y + 1, { align: "right" });
    doc.setFontSize(8);
    setColor(GRAY);
    y = wrap(list, M + 3, y + 6, CW - 6, 8);
    y += 4;
  }

  footer(6);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 7 — HOLY MASS
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Holy Mass: Source and Summit", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("Holy Mass is the unbloody renewal of Christ's Sacrifice on Calvary. The Second Vatican Council teaches that the Eucharist is \"source and summit of all Christian life\" (Lumen Gentium, 11).", M, y, CW, 9.5); y += 6;

  y = sectionTitle("Structure of the Mass", y);

  const massParts = [
    { part: "Introductory Rites", items: "Entrance · Greeting · Penitential Act · Gloria · Collect" },
    { part: "Liturgy of the Word", items: "First Reading · Psalm · Second Reading · Gospel · Homily · Creed · Prayer of the Faithful" },
    { part: "Liturgy of the Eucharist", items: "Offertory · Preface · Holy · Eucharistic Prayer (Consecration) · Our Father · Sign of Peace · Communion" },
    { part: "Concluding Rites", items: "Blessing · Dismissal" },
  ];

  for (const mp of massParts) {
    setFill(BLUE);
    doc.roundedRect(M, y - 3, 3, 12, 1, 1, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    setColor(BLUE);
    doc.text(mp.part, M + 6, y + 1);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    setColor(GRAY);
    y = wrap(mp.items, M + 6, y + 6, CW - 6, 8.5);
    y += 4;
  }

  y += 2;
  y = sectionTitle("Dispositions for Holy Communion", y);
  const dispositions = [
    "Be in a state of grace (free from mortal sin — go to Confession if needed)",
    "Observe the Eucharistic fast of one hour before receiving",
    "Approach with faith, reverence, and right intention",
  ];
  for (const d of dispositions) {
    setFill(GOLD);
    doc.circle(M + 1.5, y - 1.5, 1.2, "F");
    doc.setFontSize(9.5);
    setColor(DARK);
    y = wrap(d, M + 6, y, CW - 6, 9.5); y += 2;
  }

  y += 4;
  // Quote box
  setFill(LIGHT);
  doc.roundedRect(M, y, CW, 18, 3, 3, "F");
  setFill(GOLD);
  doc.rect(M, y, 3, 18, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  setColor(DARK);
  wrap("\"It would be easier for the earth to exist without the sun than without Holy Mass.\"", M + 8, y + 6, CW - 12, 9.5);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setColor(GRAY);
  doc.text("— St. Pio of Pietrelcina", M + 8, y + 14);

  footer(7);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 8 — CONFESSION
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("The Sacrament of Confession", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("\"Receive the Holy Spirit. Whose sins you forgive are forgiven\" (Jn 20:22-23). Jesus instituted Confession so that, even after Baptism, we can obtain forgiveness of sins committed.", M, y, CW, 9.5); y += 6;

  y = sectionTitle("Five Steps for a Good Confession", y);
  const steps = [
    ["Examination of Conscience", "Review your thoughts, words, and actions in light of the Ten Commandments. Ask the Holy Spirit to enlighten your memory."],
    ["Contrition", "Have sincere sorrow for sins committed — not only for fear of punishment, but for having offended God who is infinitely good."],
    ["Firm Purpose of Amendment", "Have a firm intention to sin no more and to avoid the occasions of sin."],
    ["Confession", "Declare all mortal sins to the priest, specifying their kind and number."],
    ["Penance", "Fulfill the penance given by the confessor as reparation for sins."],
  ];
  for (let i = 0; i < steps.length; i++) {
    const [title, desc] = steps[i];
    setFill(BLUE);
    doc.circle(M + 4, y - 1, 4, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    setColor(WHITE);
    doc.text(`${i + 1}`, M + 4, y + 0.5, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    setColor(DARK);
    doc.text(title, M + 11, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    setColor(GRAY);
    y = wrap(desc, M + 11, y + 4, CW - 11, 8.5); y += 3;
  }

  y += 2;
  y = sectionTitle("Act of Contrition", y);
  setFill(LIGHT);
  const actLines = doc.splitTextToSize("O my God, I am heartily sorry for having offended You, because You are infinitely good and lovable, and sin displeases You. I firmly resolve, with the help of Your grace, to do penance, to sin no more, and to avoid the occasions of sin. Amen.", CW - 8) as string[];
  doc.roundedRect(M, y - 3, CW, actLines.length * 3.8 + 8, 2, 2, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  setColor(DARK);
  doc.text(actLines, M + 4, y + 2);
  y += actLines.length * 3.8 + 10;

  y = sectionTitle("The Ten Commandments", y);
  const cmds = ["I am the Lord your God: you shall not have strange gods before me","You shall not take the name of the Lord your God in vain","Remember to keep holy the Lord's Day","Honor your father and your mother","You shall not kill","You shall not commit adultery","You shall not steal","You shall not bear false witness","You shall not covet your neighbor's wife","You shall not covet your neighbor's goods"];
  for (let i = 0; i < cmds.length; i++) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setColor(GOLD);
    doc.text(`${i + 1}.`, M, y);
    doc.setFont("helvetica", "normal");
    setColor(DARK);
    y = wrap(cmds[i], M + 6, y, CW - 6, 8); y += 1;
  }

  footer(8);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 9 — LIFE OF PRAYER
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Life of Prayer", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("\"Pray without ceasing\" (1 Thess 5:17). Prayer is the breathing of the Christian soul. St. Teresa of Avila taught that \"prayer is a relationship of friendship with God.\"", M, y, CW, 9.5); y += 6;

  const prayerBlocks = [
    { title: "Morning Offering", text: "My God, I adore You and love You with all my heart. I thank You for having created me, made me a Christian and preserved me this night. I offer You the actions of this day; grant that they may all be according to Your holy will and for Your greater glory. Preserve me from sin and all evil. Amen." },
    { title: "Evening Prayer", text: "My God, I thank You for all the benefits I have received from You today. I ask Your forgiveness for the sins I have committed this day. Watch over me during this night and preserve me from all evil. Mary, my Mother, protect me. Holy Angel of the Lord, watch over me. Amen." },
    { title: "The Angelus", text: "V. The Angel of the Lord declared unto Mary. R. And she conceived of the Holy Spirit. (Hail Mary) — V. Behold the handmaid of the Lord. R. Be it done unto me according to thy word. (Hail Mary) — V. And the Word was made Flesh. R. And dwelt among us. (Hail Mary) — V. Pray for us, O holy Mother of God. R. That we may be made worthy of the promises of Christ. Amen." },
    { title: "Prayer to St. Michael the Archangel", text: "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen." },
  ];

  for (const pb of prayerBlocks) {
    y = subHead(pb.title, y);
    setFill(LIGHT);
    const pbLines = doc.splitTextToSize(pb.text, CW - 8) as string[];
    const pbH = pbLines.length * 3.8 + 6;
    doc.roundedRect(M, y - 3, CW, pbH, 2, 2, "F");
    setFill(BLUE);
    doc.rect(M, y - 3, 2.5, pbH, "F");
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    setColor(DARK);
    doc.text(pbLines, M + 6, y + 1);
    y += pbH + 4;
  }

  footer(9);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 10 — THE SAINTS AND INTERCESSION
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("The Saints and Intercession", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("The Church is composed of three parts: the Church Militant (us, on earth), the Church Suffering (souls in Purgatory) and the Church Triumphant (Saints in Heaven). We are all united in the Mystical Body of Christ.", M, y, CW, 9.5); y += 6;

  y = sectionTitle("Why Pray to the Saints?", y);
  y = wrap("The Saints, being before God, can intercede for us. As Revelation shows, they present our prayers to God (Rev 5:8). We do not worship the Saints — worship is due to God alone — but we venerate them and ask for their intercession.", M, y, CW, 9.5); y += 6;

  y = sectionTitle("Some Intercessor Saints", y);
  const saints = [
    ["St. Joseph", "Patron of the Universal Church, families and workers"],
    ["St. Anthony", "Impossible causes and lost objects"],
    ["St. Jude Thaddeus", "Desperate and hopeless causes"],
    ["St. Thérèse of Lisieux", "Missionaries and the sick"],
    ["St. Pio of Pietrelcina", "Healing and conversion"],
    ["St. Francis of Assisi", "Ecology, animals and peace"],
  ];
  for (let i = 0; i < saints.length; i++) {
    const [name, role] = saints[i];
    setFill(i % 2 === 0 ? LIGHT : WHITE);
    doc.roundedRect(M, y - 3, CW, 10, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    setColor(BLUE);
    doc.text(name, M + 3, y + 1);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    setColor(GRAY);
    doc.text(role, M + 3, y + 5.5);
    y += 12;
  }

  y += 2;
  y = sectionTitle("Prayer to St. Joseph", y);
  setFill(LIGHT);
  const sjLines = doc.splitTextToSize("To you, St. Joseph, we come in our tribulation, and having implored the help of your most holy Spouse, we confidently invoke your patronage also. Through that sacred bond of charity which united you to the Immaculate Virgin Mother of God and through the paternal love with which you embraced the Child Jesus, we humbly beg you to look graciously upon the inheritance which Jesus Christ has purchased by his Blood, and with your power and strength to aid us in our necessities. Amen.", CW - 8) as string[];
  doc.roundedRect(M, y - 3, CW, sjLines.length * 3.8 + 6, 2, 2, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  setColor(DARK);
  doc.text(sjLines, M + 4, y + 1);
  y += sjLines.length * 3.8 + 10;

  y = sectionTitle("Prayer for the Souls in Purgatory", y);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap("Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.", M, y, CW, 9.5);

  footer(10);

  // ════════════════════════════════════════════════════════════════════════
  // PAGE 11 — SPIRITUAL LIFE PLAN
  // ════════════════════════════════════════════════════════════════════════
  doc.addPage();
  setFill(BLUE);
  doc.rect(0, 0, W, 18, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  setColor(WHITE);
  doc.text("Your Spiritual Life Plan", M, 12);

  y = 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  setColor(DARK);
  y = wrap(`Dear ${firstName}, as you conclude this Guide, I invite you to establish a spiritual life plan. Christian life is not improvised — it requires dedication and constancy. As St. Josemaría Escrivá said: "Holiness is doing the things of each day well."`, M, y, CW, 9.5); y += 6;

  // Two-column daily/weekly plan
  const colW = (CW - 6) / 2;

  y = sectionTitle("Daily Routine", y);
  setFill(LIGHT);
  doc.roundedRect(M, y - 3, colW, 52, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  setColor(BLUE);
  doc.text("MORNING", M + 3, y + 2);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setColor(DARK);
  const morningItems = ["Sign of the Cross & offering of the day", "Morning prayer (5–10 min)", "Gospel of the day"];
  let ty = y + 7;
  for (const item of morningItems) { doc.text(`• ${item}`, M + 3, ty); ty += 4; }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  setColor(BLUE);
  doc.text("EVENING", M + 3, ty + 1); ty += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setColor(DARK);
  const eveningItems = ["Holy Rosary (20 min)", "Examination of conscience", "Evening prayer"];
  for (const item of eveningItems) { doc.text(`• ${item}`, M + 3, ty); ty += 4; }

  setFill(LIGHT);
  doc.roundedRect(M + colW + 6, y - 3, colW, 52, 2, 2, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  setColor(BLUE);
  doc.text("WEEKLY", M + colW + 9, y + 2);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  setColor(DARK);
  const weeklyItems = ["Sunday: Holy Mass (obligatory)", "Weekday Mass when possible", "Monthly Confession", "1 hour of Eucharistic Adoration", "Spiritual reading"];
  ty = y + 7;
  for (const item of weeklyItems) { doc.text(`• ${item}`, M + colW + 9, ty); ty += 4; }

  y += 56;

  y = sectionTitle("Personal Commitment", y);
  setFill(LIGHT);
  doc.roundedRect(M, y - 3, CW, 38, 2, 2, "F");
  setDraw([210, 215, 230]);
  doc.setLineWidth(0.5);
  doc.roundedRect(M, y - 3, CW, 38, 2, 2, "S");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  setColor(DARK);
  const commitments = [
    `I, ${userName}, commit myself to:`,
    "1. Participate in Holy Mass every Sunday",
    "2. Go to Confession at least once a month",
    "3. Pray the Rosary daily",
    "4. Make an examination of conscience every night",
    "5. Grow in knowledge of the Catholic faith",
  ];
  let cy = y + 3;
  for (const c of commitments) {
    doc.setFont(c.startsWith("I,") ? "helvetica" : "helvetica", c.startsWith("I,") ? "bold" : "normal");
    doc.text(c, M + 4, cy);
    cy += 5;
  }
  y += 42;

  // Final quote — full-width banner
  setFill(BLUE);
  doc.roundedRect(M, y, CW, 22, 3, 3, "F");
  setFill(GOLD);
  doc.rect(M, y, 3, 22, "F");
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  setColor(WHITE);
  wrap("\"Do not be afraid! Open wide the doors to Christ!\"", M + 8, y + 8, CW - 12, 11);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  setColor([180, 200, 230]);
  doc.text("— St. John Paul II", M + 8, y + 18);

  footer(11);

  // ── Save ─────────────────────────────────────────────────────────────────
  doc.save("Catholic-Life-Guide.pdf");
};
