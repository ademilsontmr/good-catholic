import { jsPDF } from "jspdf";

interface GuideData {
  userName: string;
  score: number;
  levelTitle: string;
  answers?: number[];
}

export const generateCatholicGuidePDF = ({ userName, score, levelTitle, answers = [] }: GuideData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  
  const firstName = userName.split(" ")[0];

  // Calculate area scores from answers
  const getAreaScore = (start: number, end: number): number => {
    const slice = answers.slice(start, end);
    if (slice.length === 0) return score; // fallback to overall score
    const total = slice.reduce((sum, p) => sum + (p || 0), 0);
    const max = slice.length * 3;
    return Math.round((total / max) * 100);
  };

  const areaScores = {
    eucaristica: getAreaScore(0, 7),
    oracao: getAreaScore(7, 14),
    formacao: getAreaScore(14, 20),
    devocoes: getAreaScore(20, 26),
    testemunho: getAreaScore(26, 30),
  };

  const getDiagnostico = (area: string, percent: number): string => {
    const diagnosticos: Record<string, { high: string; medium: string; low: string }> = {
      eucaristica: {
        high: `${firstName}, you live the Eucharist as the center of your faith! Holy Mass is truly the "source and summit" of your Christian life. Continue participating with this devotion.`,
        medium: `${firstName}, you have good Eucharistic participation, but there is room to grow. Try arriving earlier for Mass and giving thanks after Communion.`,
        low: `${firstName}, the Eucharist is the greatest treasure Jesus left us. Seek to participate more actively in Sunday Mass and consider weekday Mass when possible.`,
      },
      oracao: {
        high: `${firstName}, you cultivate a beautiful prayer life! As St. Teresa of Avila said: "Prayer is a relationship of friendship with God." Continue in this constant dialogue with the Lord.`,
        medium: `${firstName}, your prayer life is developing. Establish fixed times to pray and include the Holy Rosary in your routine.`,
        low: `${firstName}, prayer is the breathing of the soul. Start with small moments: a Hail Mary upon waking, an Our Father before sleeping.`,
      },
      formacao: {
        high: `${firstName}, you seek to know the faith deeply! The Catechism and the Sacraments are pillars of your spiritual life. Continue studying and living the Church's teachings.`,
        medium: `${firstName}, you have good knowledge of doctrine. To grow, read the Catechism and seek formation groups in your parish.`,
        low: `${firstName}, knowing the faith is fundamental. Start with the Youth Catechism (YouCat) or participate in adult catechesis in your parish.`,
      },
      devocoes: {
        high: `${firstName}, your devotions demonstrate a deep love for the Church's Tradition! Devotion to Our Lady and the Saints strengthens your faith journey.`,
        medium: `${firstName}, you have good devotional practices. Consider making the Consecration to Our Lady and cultivating devotion to your patron saint.`,
        low: `${firstName}, devotions are precious aids in spiritual life. Start by praying the Rosary daily — "the Rosary is the weapon of these times."`,
      },
      testemunho: {
        high: `${firstName}, you are a true apostle! Your witness and generosity build up the Church. Continue being light to the world!`,
        medium: `${firstName}, you live Christian values. Seek opportunities to serve in the community and share your faith with joy.`,
        low: `${firstName}, we are called to be "salt of the earth and light of the world." Start by living the Gospel at home and at work.`,
      },
    };
    if (percent >= 70) return diagnosticos[area].high;
    if (percent >= 40) return diagnosticos[area].medium;
    return diagnosticos[area].low;
  };
  
  // Helper functions
  const centerText = (text: string, y: number, size: number = 12) => {
    doc.setFontSize(size);
    const textWidth = doc.getTextWidth(text);
    doc.text(text, (pageWidth - textWidth) / 2, y);
  };
  
  const addParagraph = (text: string, startY: number, fontSize: number = 11): number => {
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, startY);
    return startY + lines.length * (fontSize * 0.4);
  };
  
  const addTitle = (text: string, y: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(12, 75, 148); // Marian Blue
    centerText(text, y, 16);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
  };
  
  const addSubtitle = (text: string, y: number) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(212, 160, 23); // Liturgical Gold
    doc.text(text, margin, y);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal");
    return y + 8;
  };

  const addPageNumber = (pageNum: number) => {
    doc.setFontSize(10);
    doc.setTextColor(128, 128, 128);
    centerText(`- ${pageNum} -`, pageHeight - 25, 10);
    doc.setTextColor(0, 0, 0);
  };

  const addFooter = () => {
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    centerText("Catholic Life Guide | Guide Catholic", pageHeight - 15, 8);
    doc.setFontSize(9);
    doc.setTextColor(12, 75, 148);
    centerText("www.guidecatholic.com", pageHeight - 8, 9);
    doc.setTextColor(0, 0, 0);
  };

  // ===============================
  // PAGE 1 - COVER
  // ===============================
  doc.setFillColor(12, 75, 148);
  doc.rect(0, 0, pageWidth, 80, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  centerText("COMPLETE GUIDE", 35, 28);
  centerText("TO CATHOLIC LIFE", 50, 24);
  doc.setFont("helvetica", "normal");
  centerText("Prayers, Devotions and Church Teachings", 65, 12);
  
  doc.setTextColor(0, 0, 0);
  
  // Decorative cross
  doc.setDrawColor(212, 160, 23);
  doc.setLineWidth(3);
  doc.line(pageWidth / 2, 100, pageWidth / 2, 140);
  doc.line(pageWidth / 2 - 15, 115, pageWidth / 2 + 15, 115);
  
  doc.setFontSize(14);
  centerText(`Specially prepared for`, 160, 14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(12, 75, 148);
  centerText(userName, 175, 20);
  
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  centerText(`Quiz Result: ${score}%`, 195, 12);
  centerText(`Level: ${levelTitle}`, 205, 12);
  
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128);
  centerText('"Seek first the Kingdom of God"', 230, 11);
  centerText("— Matthew 6:33", 240, 10);
  
  addFooter();
  addPageNumber(1);

  // ===============================
  // PAGE 2 - COMPLETE ASSESSMENT
  // ===============================
  doc.addPage();
  addTitle("Your Complete Assessment", 25);

  let y = 36;

  // Subtitle
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`${firstName}, here is your detailed spiritual profile across 5 key areas:`, margin, y);
  doc.setTextColor(0, 0, 0);
  y += 8;

  const areas = [
    { key: "eucaristica", label: "Eucharistic Life", score: areaScores.eucaristica },
    { key: "oracao", label: "Prayer Life", score: areaScores.oracao },
    { key: "formacao", label: "Formation & Sacraments", score: areaScores.formacao },
    { key: "devocoes", label: "Devotions", score: areaScores.devocoes },
    { key: "testemunho", label: "Christian Witness", score: areaScores.testemunho },
  ];

  // Progress bars section — compact
  for (const area of areas) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(12, 75, 148);
    doc.text(area.label, margin, y);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`${area.score}%`, pageWidth - margin - doc.getTextWidth(`${area.score}%`), y);
    y += 3.5;

    // Background bar
    doc.setFillColor(220, 220, 220);
    doc.roundedRect(margin, y, contentWidth, 3.5, 1, 1, "F");

    // Filled bar
    const barColor = area.score >= 70 ? [34, 197, 94] : area.score >= 40 ? [212, 160, 23] : [12, 75, 148];
    doc.setFillColor(barColor[0], barColor[1], barColor[2]);
    const barWidth = Math.max(3, (area.score / 100) * contentWidth);
    doc.roundedRect(margin, y, barWidth, 3.5, 1, 1, "F");
    y += 8;
  }

  y += 3;

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Detailed diagnostics header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(12, 75, 148);
  doc.text("Detailed Diagnosis", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);
  y += 7;

  for (const area of areas) {
    const badgeText = area.score >= 70 ? "Strong" : area.score >= 40 ? "Growing" : "Needs Attention";
    const badgeColor: [number, number, number] = area.score >= 70 ? [34, 197, 94] : area.score >= 40 ? [212, 160, 23] : [239, 68, 68];

    // Area label
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(12, 75, 148);
    doc.text(area.label, margin, y);

    // Badge
    doc.setFontSize(8);
    const badgeW = doc.getTextWidth(badgeText) + 5;
    const badgeX = pageWidth - margin - badgeW;
    doc.setFillColor(...badgeColor);
    doc.roundedRect(badgeX, y - 4.5, badgeW, 6, 1.5, 1.5, "F");
    doc.setTextColor(255, 255, 255);
    doc.text(badgeText, badgeX + 2.5, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(8.5);
    y += 5;

    const diagText = getDiagnostico(area.key, area.score);
    const lines = doc.splitTextToSize(diagText, contentWidth);
    doc.text(lines, margin, y);
    y += lines.length * 3.8 + 5;
  }

  addFooter();
  addPageNumber(2);
  // PAGE 3 - INTRODUCTION
  // ===============================
  doc.addPage();
  addTitle("Introduction: The Call to Holiness", 30);
  
  y = 50;
  y = addParagraph(`Dear ${firstName},`, y);
  y += 8;
  
  y = addParagraph(
    "This Guide was prepared with great care to help you on your faith journey. The Catholic Church, founded by Our Lord Jesus Christ, is the repository of the fullness of revealed truth and the means of salvation.",
    y
  );
  y += 10;
  
  y = addParagraph(
    "The Second Vatican Council reminds us that all the faithful are called to holiness: \"All the faithful of whatever state or condition are called to the fullness of Christian life and to the perfection of charity\" (Lumen Gentium, 40). This is not a privilege of the few, but the vocation of all the baptized.",
    y
  );
  y += 10;
  
  y = addParagraph(
    "In this guide you will find: fundamental prayers of the Catholic tradition, explanations about the Sacraments, Marian devotions, practices of piety, and guidance for growing in spiritual life. Everything is based on the Catechism of the Catholic Church and Sacred Tradition.",
    y
  );
  y += 10;
  
  y = addSubtitle("How to use this Guide", y);
  y = addParagraph(
    "• Set aside a moment of the day for reading and prayer\n• Don't rush - absorb each teaching\n• Practice the prayers daily\n• Seek confession and the Eucharist frequently\n• Ask for the intercession of Our Lady",
    y
  );
  y += 10;
  
  y = addParagraph(
    "\"Prayer is the raising of one's mind and heart to God or the requesting of good things from God\" (St. John Damascene). May this guide be an instrument of grace in your life.",
    y
  );
  
  addFooter();
  addPageNumber(3);

  // ===============================
  // PAGE 3 - FUNDAMENTAL PRAYERS
  // ===============================
  doc.addPage();
  addTitle("Fundamental Catholic Prayers", 30);
  
  y = 45;
  y = addSubtitle("Sign of the Cross", y);
  y = addParagraph(
    "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    y
  );
  y += 5;
  y = addParagraph(
    "The Sign of the Cross is the first prayer we learn and the distinctive mark of the Christian. By making it, we profess faith in the Holy Trinity and remember the Passion of Christ.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("Our Father", y);
  y = addParagraph(
    "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    y
  );
  y += 5;
  y = addParagraph(
    "This prayer was taught by Jesus himself to the Apostles. It is called the \"Lord's Prayer\" and contains all the petitions necessary for our salvation.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("Hail Mary", y);
  y = addParagraph(
    "Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    y
  );
  y += 5;
  y = addParagraph(
    "The first part is the greeting of the Archangel Gabriel and St. Elizabeth to Mary. The second is the Church's supplication to the Mother of God.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("Glory Be", y);
  y = addParagraph(
    "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.",
    y
  );
  
  y += 8;
  y = addSubtitle("Apostles' Creed", y);
  y = addParagraph(
    "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    y, 10
  );
  
  addFooter();
  addPageNumber(4);

  // ===============================
  // PAGE 4 - THE SEVEN SACRAMENTS
  // ===============================
  doc.addPage();
  addTitle("The Seven Sacraments of the Church", 30);
  
  y = 45;
  y = addParagraph(
    "The Sacraments are sensible and efficacious signs of grace, instituted by Christ and entrusted to the Church. Through them, divine life is communicated to us. There are seven Sacraments:",
    y
  );
  y += 10;
  
  y = addSubtitle("1. Baptism", y);
  y = addParagraph(
    "Gateway to Christian life. Through Baptism we are freed from original sin, reborn as children of God and become members of the Church. \"Whoever believes and is baptized will be saved\" (Mk 16:16).",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("2. Confirmation", y);
  y = addParagraph(
    "Sacrament that completes Baptism and confers the Holy Spirit in a special way, strengthening us to be witnesses of Christ. We receive the seven gifts of the Holy Spirit.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("3. Eucharist", y);
  y = addParagraph(
    "\"Source and summit of all Christian life\" (LG 11). In the Eucharist, we receive the very Body and Blood of Christ under the species of bread and wine. It is the Sacrament of Love.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("4. Penance (Confession)", y);
  y = addParagraph(
    "Sacrament of reconciliation with God and with the Church. Through sincere confession and the priest's absolution, our sins are forgiven. \"Whose sins you forgive are forgiven\" (Jn 20:23).",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("5. Anointing of the Sick", y);
  y = addParagraph(
    "Sacrament that confers special grace to the faithful facing serious illness or old age. It strengthens the soul and can bring healing of the body, if it is God's will.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("6. Holy Orders", y);
  y = addParagraph(
    "Sacrament by which men are ordained bishops, priests or deacons, receiving sacred power to exercise ministry in the name of Christ.",
    y, 10
  );
  y += 8;
  
  y = addSubtitle("7. Matrimony", y);
  y = addParagraph(
    "Sacrament that unites man and woman in an indissoluble covenant, making them cooperators with God in the transmission of life. \"What God has joined together, let no one separate\" (Mt 19:6).",
    y, 10
  );
  
  addFooter();
  addPageNumber(5);

  // ===============================
  // PAGE 5 - DEVOTION TO OUR LADY
  // ===============================
  doc.addPage();
  addTitle("Devotion to Our Lady", 30);
  
  y = 45;
  y = addParagraph(
    "The Virgin Mary occupies a central place in the Catholic faith. She is Mother of God (Theotokos), Mother of the Church and our spiritual Mother. Jesus, from the height of the Cross, entrusted her to us: \"Behold, your mother\" (Jn 19:27).",
    y
  );
  y += 10;
  
  y = addSubtitle("The Marian Dogmas", y);
  y = addParagraph(
    "• Divine Motherhood: Mary is truly Mother of God\n• Perpetual Virginity: Mary was virgin before, during and after childbirth\n• Immaculate Conception: Mary was preserved from original sin\n• Assumption: Mary was taken up to Heaven in body and soul",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("The Holy Rosary", y);
  y = addParagraph(
    "The Rosary is the prayer most recommended by the Church to honor Our Lady. St. Pio of Pietrelcina said: \"The Rosary is the weapon of these times.\" It consists of meditation on the mysteries of the life of Christ and Mary.",
    y
  );
  y += 8;
  
  y = addParagraph(
    "JOYFUL MYSTERIES (Monday and Saturday):\n1. The Annunciation\n2. The Visitation\n3. The Nativity\n4. The Presentation\n5. Finding in the Temple",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "SORROWFUL MYSTERIES (Tuesday and Friday):\n1. The Agony in the Garden\n2. The Scourging at the Pillar\n3. The Crowning with Thorns\n4. The Carrying of the Cross\n5. The Crucifixion",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "GLORIOUS MYSTERIES (Wednesday and Sunday):\n1. The Resurrection\n2. The Ascension\n3. The Descent of the Holy Spirit\n4. The Assumption of Mary\n5. The Coronation of Mary",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "LUMINOUS MYSTERIES (Thursday):\n1. The Baptism in the Jordan\n2. The Wedding at Cana\n3. The Proclamation of the Kingdom\n4. The Transfiguration\n5. The Institution of the Eucharist",
    y, 10
  );
  
  addFooter();
  addPageNumber(6);

  // ===============================
  // PAGE 6 - HOLY MASS
  // ===============================
  doc.addPage();
  addTitle("Holy Mass: Source and Summit", 30);
  
  y = 45;
  y = addParagraph(
    "Holy Mass is the unbloody renewal of Christ's Sacrifice on Calvary. In it, Jesus offers himself to the Father through the hands of the priest for our salvation. The Second Vatican Council teaches that the Eucharist is \"source and summit of all Christian life\" (Lumen Gentium, 11).",
    y
  );
  y += 10;
  
  y = addSubtitle("Structure of the Mass", y);
  y = addParagraph(
    "INTRODUCTORY RITES:\n• Entrance and Greeting\n• Penitential Act\n• Gloria (Sundays and feasts)\n• Collect Prayer",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "LITURGY OF THE WORD:\n• First Reading (Old Testament)\n• Responsorial Psalm\n• Second Reading (Epistles)\n• Gospel Acclamation (Alleluia)\n• Gospel\n• Homily\n• Profession of Faith (Creed)\n• Prayer of the Faithful",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "LITURGY OF THE EUCHARIST:\n• Offertory (presentation of gifts)\n• Prayer over the Offerings\n• Preface and Holy\n• Eucharistic Prayer (Consecration)\n• Our Father\n• Sign of Peace\n• Breaking of Bread (Lamb of God)\n• Communion",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "CONCLUDING RITES:\n• Announcements\n• Final Blessing\n• Dismissal",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Dispositions for Communion", y);
  y = addParagraph(
    "To receive Communion worthily one must:\n• Be in a state of grace (without mortal sin)\n• Observe the Eucharistic fast of 1 hour\n• Have right intention and devotion",
    y, 10
  );
  y += 8;
  
  y = addParagraph(
    "St. Pio of Pietrelcina stated: \"It would be easier for the earth to exist without the sun than without Holy Mass.\" Do not fail to participate at least every Sunday and holy days of obligation.",
    y
  );
  
  addFooter();
  addPageNumber(7);

  // ===============================
  // PAGE 7 - CONFESSION
  // ===============================
  doc.addPage();
  addTitle("The Sacrament of Confession", 30);
  
  y = 45;
  y = addParagraph(
    "\"Receive the Holy Spirit. Whose sins you forgive are forgiven\" (Jn 20:22-23). Jesus instituted the Sacrament of Confession so that, even after Baptism, we can obtain forgiveness of sins committed.",
    y
  );
  y += 10;
  
  y = addSubtitle("How to make a good Confession", y);
  y = addParagraph(
    "1. EXAMINATION OF CONSCIENCE: Before confession, examine your conscience in light of the Ten Commandments and the precepts of the Church. Ask the Holy Spirit to enlighten your memory.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "2. CONTRITION: Have sincere sorrow for sins committed, not only for fear of punishment, but for having offended God who is infinitely good.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "3. FIRM PURPOSE OF AMENDMENT: Have firm intention to sin no more and to avoid occasions of sin.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "4. CONFESSION: Declare all mortal sins to the priest, in number, kind and circumstances that change the nature of the sin.",
    y, 10
  );
  y += 6;
  
  y = addParagraph(
    "5. PENANCE: Fulfill the penance given by the confessor as reparation for sins.",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Act of Contrition", y);
  y = addParagraph(
    "O my God, I am heartily sorry for having offended You, because You are infinitely good and lovable, and sin displeases You. I firmly resolve, with the help of Your grace, to do penance, to sin no more, and to avoid the occasions of sin. Amen.",
    y
  );
  y += 10;
  
  y = addSubtitle("The Ten Commandments", y);
  y = addParagraph(
    "1. I am the Lord your God: you shall not have strange gods before me\n2. You shall not take the name of the Lord your God in vain\n3. Remember to keep holy the Lord's Day\n4. Honor your father and your mother\n5. You shall not kill\n6. You shall not commit adultery\n7. You shall not steal\n8. You shall not bear false witness\n9. You shall not covet your neighbor's wife\n10. You shall not covet your neighbor's goods",
    y, 10
  );
  
  addFooter();
  addPageNumber(8);

  // ===============================
  // PAGE 8 - PRAYER LIFE
  // ===============================
  doc.addPage();
  addTitle("Life of Prayer", 30);
  
  y = 45;
  y = addParagraph(
    "\"Pray without ceasing\" (1 Thess 5:17). Prayer is the breathing of the Christian soul. Without prayer, spiritual life withers. St. Teresa of Avila taught that \"prayer is a relationship of friendship with God.\"",
    y
  );
  y += 10;
  
  y = addSubtitle("Morning Prayer", y);
  y = addParagraph(
    "My God, I adore You and love You with all my heart. I thank You for having created me, made me a Christian and preserved me this night. I offer You the actions of this day; grant that they may all be according to Your holy will and for Your greater glory. Preserve me from sin and all evil. May Your grace be always with me and with all my loved ones. Amen.",
    y
  );
  y += 10;
  
  y = addSubtitle("Evening Prayer", y);
  y = addParagraph(
    "My God, I thank You for all the benefits I have received from You today. I ask Your forgiveness for the sins I have committed this day. Watch over me during this night and preserve me from all evil. Mary, my Mother, protect me. Holy Angel of the Lord, my zealous guardian, watch over me. Amen.",
    y
  );
  y += 10;
  
  y = addSubtitle("The Angelus", y);
  y = addParagraph(
    "V. The Angel of the Lord declared unto Mary.\nR. And she conceived of the Holy Spirit. (Hail Mary)\n\nV. Behold the handmaid of the Lord.\nR. Be it done unto me according to thy word. (Hail Mary)\n\nV. And the Word was made Flesh.\nR. And dwelt among us. (Hail Mary)\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.\n\nLet us pray: Pour forth, we beseech You, O Lord, Your grace into our hearts, that we to whom the Incarnation of Christ Your Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Prayer to St. Michael the Archangel", y);
  y = addParagraph(
    "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.",
    y, 10
  );
  
  addFooter();
  addPageNumber(9);

  // ===============================
  // PAGE 9 - SAINTS AND INTERCESSION
  // ===============================
  doc.addPage();
  addTitle("The Saints and Intercession", 30);
  
  y = 45;
  y = addParagraph(
    "The Church is composed of three parts: the Church Militant (us, on earth), the Church Suffering (the souls in Purgatory) and the Church Triumphant (the Saints in Heaven). We are all united in the Mystical Body of Christ.",
    y
  );
  y += 10;
  
  y = addSubtitle("Why pray to the Saints?", y);
  y = addParagraph(
    "The Saints, being before God, can intercede for us. As the book of Revelation shows, they present our prayers to God (Rev 5:8). We do not worship the Saints - worship is due to God alone - but we venerate them and ask for their intercession.",
    y
  );
  y += 10;
  
  y = addSubtitle("Some Intercessor Saints", y);
  y = addParagraph(
    "• St. Joseph: Patron of the Universal Church, families and workers\n• St. Anthony: Impossible causes and lost objects\n• St. Rita: Impossible causes\n• St. Jude Thaddeus: Desperate causes\n• St. Therese: Missionaries and the sick\n• Padre Pio: Healing and conversion\n• St. Francis of Assisi: Ecology and animals",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Prayer to St. Joseph", y);
  y = addParagraph(
    "To you, St. Joseph, we come in our tribulation, and having implored the help of your most holy Spouse, we confidently invoke your patronage also. Through that sacred bond of charity which united you to the Immaculate Virgin Mother of God and through the paternal love with which you embraced the Child Jesus, we humbly beg you to look graciously upon the inheritance which Jesus Christ has purchased by his Blood, and with your power and strength to aid us in our necessities.",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Prayer to the Guardian Angel", y);
  y = addParagraph(
    "Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.",
    y
  );
  y += 10;
  
  y = addSubtitle("Prayer for the Souls in Purgatory", y);
  y = addParagraph(
    "Eternal rest grant unto them, O Lord, and let perpetual light shine upon them. May they rest in peace. Amen.\n\nRemember to pray for the souls in Purgatory, especially for your deceased family members. Charity toward the deceased is a work of great merit.",
    y, 10
  );
  
  addFooter();
  addPageNumber(10);

  // ===============================
  // PAGE 10 - CONCLUSION AND LIFE PLAN
  // ===============================
  doc.addPage();
  addTitle("Your Spiritual Life Plan", 30);
  
  y = 45;
  y = addParagraph(
    `Dear ${firstName}, as you conclude this Guide, I invite you to establish a spiritual life plan. Christian life is not improvised - it requires dedication and constancy. As St. Josemaria Escriva said: "Holiness is doing the things of each day well".`,
    y
  );
  y += 10;
  
  y = addSubtitle("Daily Routine Proposal", y);
  y = addParagraph(
    "MORNING:\n• Upon waking: Sign of the Cross and offering of the day\n• Morning prayer (5-10 minutes)\n• Spiritual reading or Gospel of the day\n\nTHROUGHOUT THE DAY:\n• Angelus (6am, 12pm, 6pm) or at least at noon\n• Ejaculations (short prayers throughout the day)\n• Quick examination of conscience before lunch\n\nEVENING:\n• Rosary (20 minutes)\n• Examination of conscience\n• Evening prayer and Hail Holy Queen",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Weekly Proposal", y);
  y = addParagraph(
    "• Sunday: Holy Mass (obligatory)\n• At least one Mass during the week\n• Confession: at least monthly, ideally biweekly\n• Adoration of the Blessed Sacrament: at least 1 hour per week\n• Spiritual reading: one book per month",
    y, 10
  );
  y += 10;
  
  y = addSubtitle("Personal Commitment", y);
  y = addParagraph(
    `I, ${userName}, commit myself to:\n\n1. Participate in Holy Mass every Sunday\n2. Go to Confession at least once a month\n3. Pray the Rosary daily\n4. Make an examination of conscience every night\n5. Grow in knowledge of the Catholic faith`,
    y, 10
  );
  y += 10;
  
  // Final quote
  doc.setFillColor(12, 75, 148);
  doc.rect(margin, y, contentWidth, 35, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  const finalQuote = "\"Do not be afraid! Open wide the doors to Christ!\" — St. John Paul II";
  const quoteLines = doc.splitTextToSize(finalQuote, contentWidth - 10);
  doc.text(quoteLines, margin + 5, y + 15);
  
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  
  addFooter();
  addPageNumber(11);

  // Save the PDF
  doc.save("Catholic-Life-Guide.pdf");
};
