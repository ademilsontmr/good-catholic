import { ResultLevel } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Download, Share2, RotateCcw, Trophy, Target, BookOpen, Cross, Heart, Star, Church, HandHeart, Sparkles, Calendar, Quote, Users, Flame, Crown, Shield, Scroll } from "lucide-react";
import { toast } from "sonner";
import { generateCatholicGuidePDF } from "@/utils/generateCatholicGuidePDF";

interface ResultScreenProps {
  score: number;
  level: ResultLevel;
  userName: string;
  answers: number[];
  onRestart: () => void;
}

// Áreas de avaliação baseadas nas perguntas
const getAreaScores = (answers: number[]) => {
  const eucaristica = answers.slice(0, 7).reduce((sum, p) => sum + (p || 0), 0);
  const eucaristicaMax = 7 * 3;
  const eucaristicaPercent = Math.round((eucaristica / eucaristicaMax) * 100);

  const oracao = answers.slice(7, 14).reduce((sum, p) => sum + (p || 0), 0);
  const oracaoMax = 7 * 3;
  const oracaoPercent = Math.round((oracao / oracaoMax) * 100);

  const formacao = answers.slice(14, 20).reduce((sum, p) => sum + (p || 0), 0);
  const formacaoMax = 6 * 3;
  const formacaoPercent = Math.round((formacao / formacaoMax) * 100);

  const devocoes = answers.slice(20, 26).reduce((sum, p) => sum + (p || 0), 0);
  const devocoesMax = 6 * 3;
  const devocoesPercent = Math.round((devocoes / devocoesMax) * 100);

  const testemunho = answers.slice(26, 30).reduce((sum, p) => sum + (p || 0), 0);
  const testemunhoMax = 4 * 3;
  const testemunhoPercent = Math.round((testemunho / testemunhoMax) * 100);

  return {
    eucaristica: eucaristicaPercent,
    oracao: oracaoPercent,
    formacao: formacaoPercent,
    devocoes: devocoesPercent,
    testemunho: testemunhoPercent,
  };
};

// Personalized diagnosis based on area score
const getDiagnostico = (area: string, percent: number, userName: string) => {
  const firstName = userName.split(" ")[0];
  
  const diagnosticos: Record<string, { high: string; medium: string; low: string }> = {
    eucaristica: {
      high: `${firstName}, you live the Eucharist as the center of your faith! Holy Mass is truly the "source and summit" of your Christian life, as taught by Vatican Council II. Continue participating with this devotion.`,
      medium: `${firstName}, you have good participation in Eucharistic life, but there's room to grow. Try arriving earlier for Mass, preparing in prayer, and giving thanks after Communion.`,
      low: `${firstName}, the Eucharist is the greatest treasure Jesus left us. "Without the Mass, the earth could not subsist" (St. Pio of Pietrelcina). Seek to participate more actively in Sunday Mass.`,
    },
    oracao: {
      high: `${firstName}, you cultivate a beautiful prayer life! As St. Teresa of Avila said: "Prayer is a relationship of friendship with God." Continue in this constant dialogue with the Lord.`,
      medium: `${firstName}, your prayer life is developing. Establish fixed times to pray and include the Holy Rosary in your routine - Our Lady will intercede for you.`,
      low: `${firstName}, prayer is the breathing of the soul. Start with small moments: a Hail Mary upon waking, an Our Father before sleeping. "Pray without ceasing" (1 Thess 5:17).`,
    },
    formacao: {
      high: `${firstName}, you seek to know the faith deeply! The Catechism and the Sacraments are pillars of your spiritual life. Continue studying and living the Church's teachings.`,
      medium: `${firstName}, you have good knowledge of doctrine. To grow, read the Catechism of the Catholic Church and seek formation groups in your parish.`,
      low: `${firstName}, knowing the faith is fundamental. "Faith that is not thought through is not a full faith" (St. John Paul II). Start with the Youth Catechism (YouCat) or participate in adult catechesis.`,
    },
    devocoes: {
      high: `${firstName}, your devotions demonstrate a deep love for the Church's Tradition! Devotion to Our Lady and the Saints strengthens your faith journey.`,
      medium: `${firstName}, you have good devotional practices. Consider making the Consecration to Our Lady and cultivating devotion to your patron saint.`,
      low: `${firstName}, devotions are precious aids in spiritual life. Start by praying the Rosary daily - "the Rosary is the weapon of these times" (St. Pio of Pietrelcina).`,
    },
    testemunho: {
      high: `${firstName}, you are a true apostle! "Go and make disciples" (Mt 28:19). Your witness and generosity build up the Church. Continue being light to the world!`,
      medium: `${firstName}, you live Christian values. Seek opportunities to serve in the community and share your faith with joy and naturalness.`,
      low: `${firstName}, we are called to be "salt of the earth and light of the world." Start by living the Gospel at home and at work - the best witness is the example of life.`,
    },
  };

  if (percent >= 70) return diagnosticos[area].high;
  if (percent >= 40) return diagnosticos[area].medium;
  return diagnosticos[area].low;
};

// Personalized recommendations
const getRecomendacoes = (areaScores: ReturnType<typeof getAreaScores>) => {
  const recomendacoes: string[] = [];
  
  if (areaScores.eucaristica < 60) {
    recomendacoes.push("Attend Holy Mass at least every Sunday and, if possible, during the week.");
    recomendacoes.push("Make weekly adoration of the Blessed Sacrament.");
  }
  
  if (areaScores.oracao < 60) {
    recomendacoes.push("Establish a fixed daily time for personal prayer (morning or evening).");
    recomendacoes.push("Pray the Holy Rosary daily, meditating on the mysteries.");
  }
  
  if (areaScores.formacao < 60) {
    recomendacoes.push("Go to Confession at least monthly to live in a state of grace.");
    recomendacoes.push("Read the Catechism of the Catholic Church or participate in study groups.");
  }
  
  if (areaScores.devocoes < 60) {
    recomendacoes.push("Make the Consecration to Our Lady (St. Louis de Montfort method).");
    recomendacoes.push("Cultivate devotion to your patron saint and ask for their intercession.");
  }
  
  if (areaScores.testemunho < 60) {
    recomendacoes.push("Contribute with tithing and participate in a group or ministry.");
    recomendacoes.push("Share your faith with family and friends through your witness.");
  }

  if (recomendacoes.length === 0) {
    recomendacoes.push("Continue deepening your prayer life with the Liturgy of the Hours.");
    recomendacoes.push("Consider making an annual spiritual retreat to renew your faith.");
    recomendacoes.push("Be a multiplier: help others grow in the Catholic faith.");
  }

  return recomendacoes.slice(0, 5);
};

// Suggested prayers by level
const getOracoesSugeridas = (score: number) => {
  if (score >= 75) {
    return [
      "Liturgy of the Hours (Lauds and Vespers)",
      "Daily Lectio Divina",
      "Meditation on the Church Fathers",
      "Novena to the Holy Spirit",
      "Daily Consecration to Our Lady",
    ];
  }
  if (score >= 50) {
    return [
      "Daily Holy Rosary",
      "Angelus Prayer (6am, 12pm, 6pm)",
      "Evening Examination of Conscience",
      "Novenas to the Saints",
      "Family Prayer",
    ];
  }
  return [
    "Our Father, Hail Mary and Glory Be (morning and evening)",
    "Prayer before meals",
    "Holy Rosary (at least on Saturdays)",
    "Visit the Blessed Sacrament when passing by a Church",
    "Guardian Angel Prayer",
  ];
};

// Saint quotes based on level
const getSantoCitacao = (score: number) => {
  if (score >= 75) {
    return {
      citacao: "It is not enough to be good, one must be holy. Holiness is not a luxury for the few, it is a duty for all.",
      santo: "St. John Paul II",
      reflexao: "You are on the path to holiness! Keep persevering."
    };
  }
  if (score >= 60) {
    return {
      citacao: "Have patience with all things, but chiefly have patience with yourself. Do not lose courage in considering your own imperfections.",
      santo: "St. Francis de Sales",
      reflexao: "Growing in faith is a process. God is working in you."
    };
  }
  if (score >= 40) {
    return {
      citacao: "You cannot do great things, but you can do small things with great love.",
      santo: "St. Teresa of Calcutta",
      reflexao: "Every small step toward God is a great victory."
    };
  }
  return {
    citacao: "It is never too late to return to God. God's love for you is infinite.",
    santo: "St. Augustine",
    reflexao: "St. Augustine himself had a late conversion and became one of the greatest saints of the Church."
  };
};

// Bible verse — large pool, selected based on score + weakest area
const getVersiculoPersonalizado = (score: number, areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];

  const pool: Record<string, Array<{ texto: string; referencia: string }>> = {
    eucaristica: [
      { texto: "I am the living bread that came down from heaven. Whoever eats this bread will live forever.", referencia: "John 6:51" },
      { texto: "Do this in remembrance of me.", referencia: "Luke 22:19" },
      { texto: "My flesh is real food and my blood is real drink. Whoever eats my flesh and drinks my blood remains in me, and I in them.", referencia: "John 6:55-56" },
      { texto: "The cup of blessing that we bless, is it not a participation in the blood of Christ?", referencia: "1 Corinthians 10:16" },
    ],
    oracao: [
      { texto: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", referencia: "Matthew 7:7" },
      { texto: "Pray without ceasing.", referencia: "1 Thessalonians 5:17" },
      { texto: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.", referencia: "Philippians 4:6" },
      { texto: "The Lord is near to all who call on him, to all who call on him in truth.", referencia: "Psalm 145:18" },
    ],
    formacao: [
      { texto: "You will know the truth, and the truth will set you free.", referencia: "John 8:32" },
      { texto: "Your word is a lamp to my feet and a light to my path.", referencia: "Psalm 119:105" },
      { texto: "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.", referencia: "2 Timothy 3:16" },
      { texto: "Faith comes from hearing, and hearing through the word of Christ.", referencia: "Romans 10:17" },
    ],
    devocoes: [
      { texto: "Here is your mother. And from that time on, the disciple took her into his home.", referencia: "John 19:27" },
      { texto: "Behold, I am the handmaid of the Lord; let it be to me according to your word.", referencia: "Luke 1:38" },
      { texto: "My soul magnifies the Lord, and my spirit rejoices in God my Savior.", referencia: "Luke 1:46-47" },
      { texto: "All generations will call me blessed.", referencia: "Luke 1:48" },
    ],
    testemunho: [
      { texto: "You are the light of the world. A city on a hill cannot be hidden.", referencia: "Matthew 5:14" },
      { texto: "Go therefore and make disciples of all nations.", referencia: "Matthew 28:19" },
      { texto: "Let your light shine before others, so that they may see your good works and give glory to your Father in heaven.", referencia: "Matthew 5:16" },
      { texto: "We are ambassadors for Christ, God making his appeal through us.", referencia: "2 Corinthians 5:20" },
    ],
  };

  const candidates = pool[weakestArea] || pool.oracao;
  const idx = (score + areaScores.devocoes) % candidates.length;
  return candidates[idx];
};

// Personalized 7-day plan
const getPlano7Dias = (areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  const planos: Record<string, Array<{ dia: string; acao: string; tempo: string }>> = {
    eucaristica: [
      { dia: "Sunday", acao: "Attend Holy Mass with special attention", tempo: "1h" },
      { dia: "Monday", acao: "Read about the Eucharist in the Catechism (paragraphs 1322-1419)", tempo: "15min" },
      { dia: "Tuesday", acao: "Make a Spiritual Communion during the day", tempo: "5min" },
      { dia: "Wednesday", acao: "Visit the Blessed Sacrament at the nearest Church", tempo: "15min" },
      { dia: "Thursday", acao: "Attend a weekday Mass (if possible)", tempo: "45min" },
      { dia: "Friday", acao: "Pray before the Tabernacle, giving thanks for the Eucharist", tempo: "10min" },
      { dia: "Saturday", acao: "Prepare for Sunday Mass with examination of conscience", tempo: "10min" },
    ],
    oracao: [
      { dia: "Sunday", acao: "Reserve 15 minutes of silent prayer in the morning", tempo: "15min" },
      { dia: "Monday", acao: "Pray the Rosary meditating on the Joyful Mysteries", tempo: "20min" },
      { dia: "Tuesday", acao: "Pray the Angelus at noon (wherever you are)", tempo: "3min" },
      { dia: "Wednesday", acao: "Read and meditate on a Psalm (suggestion: Psalm 23)", tempo: "10min" },
      { dia: "Thursday", acao: "Pray for your family and friends", tempo: "10min" },
      { dia: "Friday", acao: "Make an examination of conscience before sleeping", tempo: "10min" },
      { dia: "Saturday", acao: "Pray the Rosary meditating on the Glorious Mysteries", tempo: "20min" },
    ],
    formacao: [
      { dia: "Sunday", acao: "Read the Gospel of the day and reflect", tempo: "15min" },
      { dia: "Monday", acao: "Study about the Sacrament of the Eucharist", tempo: "20min" },
      { dia: "Tuesday", acao: "Read about the life of a Saint (suggestion: St. Joseph)", tempo: "15min" },
      { dia: "Wednesday", acao: "Study about the Sacrament of Confession", tempo: "20min" },
      { dia: "Thursday", acao: "Research the history of your parish", tempo: "15min" },
      { dia: "Friday", acao: "Read an encyclical or Church document", tempo: "20min" },
      { dia: "Saturday", acao: "Schedule a confession for next week", tempo: "5min" },
    ],
    devocoes: [
      { dia: "Sunday", acao: "Pray the Rosary with family or alone", tempo: "20min" },
      { dia: "Monday", acao: "Light a candle and pray to Our Lady", tempo: "10min" },
      { dia: "Tuesday", acao: "Research about your patron saint", tempo: "15min" },
      { dia: "Wednesday", acao: "Begin a Novena to a Saint of your devotion", tempo: "10min" },
      { dia: "Thursday", acao: "Use holy water when leaving home, blessing yourself", tempo: "1min" },
      { dia: "Friday", acao: "Pray the Stations of the Cross (even alone)", tempo: "30min" },
      { dia: "Saturday", acao: "Pray the Rosary meditating on the Luminous Mysteries", tempo: "20min" },
    ],
    testemunho: [
      { dia: "Sunday", acao: "Invite someone to go to Mass with you", tempo: "varies" },
      { dia: "Monday", acao: "Do an act of charity (help someone in need)", tempo: "30min" },
      { dia: "Tuesday", acao: "Share a Catholic reflection on social media", tempo: "5min" },
      { dia: "Wednesday", acao: "Forgive someone who hurt you (in prayer)", tempo: "10min" },
      { dia: "Thursday", acao: "Donate something to the Church or to the poor", tempo: "varies" },
      { dia: "Friday", acao: "Practice fasting or abstinence in reparation", tempo: "all day" },
      { dia: "Saturday", acao: "Pray for a family member away from the faith", tempo: "10min" },
    ],
  };
  
  return planos[weakestArea] || planos.oracao;
};

// Patron Saints — large pool, randomly selected based on score + weakest area
const getSantoProtetor = (areaScores: ReturnType<typeof getAreaScores>, score: number) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];

  const pool: Record<string, Array<{ nome: string; titulo: string; oracao: string }>> = {
    eucaristica: [
      { nome: "St. Pio of Pietrelcina", titulo: "Apostle of the Eucharist", oracao: "St. Pio of Pietrelcina, you who lived each Mass as if it were the first and the last, help me to love the Eucharist as you loved it. Amen." },
      { nome: "St. Peter Julian Eymard", titulo: "Apostle of the Blessed Sacrament", oracao: "St. Peter Julian Eymard, who called the Eucharist 'the summary of all God's love,' help me to adore Jesus truly present in the Blessed Sacrament. Amen." },
      { nome: "St. Tarcisius", titulo: "Martyr of the Eucharist", oracao: "St. Tarcisius, who gave your life to protect the Eucharist, help me to receive Jesus with the same reverence and love. Amen." },
      { nome: "St. John Vianney", titulo: "Curé of Ars", oracao: "St. John Vianney, who spent hours before the tabernacle, teach me to find in the Eucharist the source of all holiness. Amen." },
    ],
    oracao: [
      { nome: "St. Teresa of Avila", titulo: "Doctor of Prayer", oracao: "St. Teresa of Avila, master of the interior life, teach me to cultivate friendship with God through prayer. Help me never to abandon this relationship of love. Amen." },
      { nome: "St. John of the Cross", titulo: "Doctor of the Soul", oracao: "St. John of the Cross, who passed through the dark night of the soul and found God in the depths of silence, help me to persevere in prayer even in dryness. Amen." },
      { nome: "St. Thérèse of Lisieux", titulo: "Doctor of the Little Way", oracao: "St. Thérèse, who found God in the small things of daily life, teach me to pray with simplicity and trust, like a child before the Father. Amen." },
      { nome: "St. Ignatius of Loyola", titulo: "Master of Discernment", oracao: "St. Ignatius of Loyola, who taught us to find God in all things, help me to cultivate a life of prayer that transforms every moment into an encounter with God. Amen." },
    ],
    formacao: [
      { nome: "St. Thomas Aquinas", titulo: "Angelic Doctor", oracao: "St. Thomas Aquinas, who united faith and reason in an admirable way, enlighten my mind to know more deeply the doctrine of the Church. Amen." },
      { nome: "St. Augustine of Hippo", titulo: "Doctor of Grace", oracao: "St. Augustine, who sought the truth with all your heart and found it in Christ, help me to deepen my knowledge of the faith and live it with conviction. Amen." },
      { nome: "St. Robert Bellarmine", titulo: "Doctor of the Church", oracao: "St. Robert Bellarmine, defender of the faith, help me to know and love the teachings of the Church and to live them with joy. Amen." },
      { nome: "St. Catherine of Siena", titulo: "Doctor of the Church", oracao: "St. Catherine of Siena, who received mystical wisdom directly from God, help me to grow in knowledge and love of the Catholic faith. Amen." },
    ],
    devocoes: [
      { nome: "St. Louis Marie Grignion de Montfort", titulo: "Apostle of Mary", oracao: "St. Louis de Montfort, who taught us the way to Jesus through Mary, help me to grow in devotion to the Blessed Virgin. Amen." },
      { nome: "St. Alphonsus Liguori", titulo: "Doctor of Moral Theology", oracao: "St. Alphonsus Liguori, great devotee of Our Lady, help me to cultivate tender and persevering devotion to the Mother of God. Amen." },
      { nome: "St. Maximilian Kolbe", titulo: "Knight of the Immaculata", oracao: "St. Maximilian Kolbe, who consecrated your life to Our Lady, help me to entrust myself completely to the Immaculate Heart of Mary. Amen." },
      { nome: "St. Bernadette Soubirous", titulo: "Visionary of Lourdes", oracao: "St. Bernadette, who saw Our Lady and kept her message in your heart, help me to deepen my Marian devotion with simplicity and faith. Amen." },
    ],
    testemunho: [
      { nome: "St. Francis of Assisi", titulo: "Patron of Peace", oracao: "St. Francis of Assisi, who preached the Gospel with your life before words, help me to be a living witness of Christ in the world. Amen." },
      { nome: "St. Paul the Apostle", titulo: "Apostle to the Nations", oracao: "St. Paul, who proclaimed Christ to the ends of the earth, give me your courage and zeal to share the faith with those around me. Amen." },
      { nome: "Bl. Carlo Acutis", titulo: "Patron of the Internet", oracao: "Blessed Carlo Acutis, who used the internet to spread devotion to the Eucharist, help me to be a witness of Christ in the digital world. Amen." },
      { nome: "St. Teresa of Calcutta", titulo: "Servant of the Poor", oracao: "St. Teresa of Calcutta, who saw Christ in the face of the poorest, help me to serve my neighbor with the same love and dedication. Amen." },
    ],
  };

  const candidates = pool[weakestArea] || pool.oracao;
  // Deterministic random based on score so it's consistent per result
  const idx = score % candidates.length;
  return candidates[idx];
};

// Virtues to develop — large pool, 3 selected based on score
const getVirtudes = (score: number, areaScores: ReturnType<typeof getAreaScores>) => {
  const allVirtues = [
    // Theological virtues
    { nome: "Faith", descricao: "Firm belief in God and all He has revealed" },
    { nome: "Hope", descricao: "Trust in God's promises and eternal life" },
    { nome: "Charity", descricao: "Love of God above all and neighbor as oneself" },
    // Cardinal virtues
    { nome: "Prudence", descricao: "Discernment to know and choose the good" },
    { nome: "Justice", descricao: "Giving to God and neighbor what is their due" },
    { nome: "Fortitude", descricao: "Courage to persevere through tribulations" },
    { nome: "Temperance", descricao: "Moderation of pleasures and earthly goods" },
    // Moral virtues
    { nome: "Humility", descricao: "Recognizing that all good comes from God" },
    { nome: "Purity", descricao: "Integrity of heart, mind, and body" },
    { nome: "Obedience", descricao: "Submission to God's will and lawful authority" },
    { nome: "Patience", descricao: "Bearing suffering with peace and trust in God" },
    { nome: "Generosity", descricao: "Freely giving of time, talent, and treasure" },
    { nome: "Piety", descricao: "Reverence and devotion toward God and sacred things" },
    { nome: "Perseverance", descricao: "Constancy in prayer and the spiritual life" },
    { nome: "Meekness", descricao: "Gentleness of spirit in dealing with others" },
    { nome: "Gratitude", descricao: "Thankfulness to God for all His gifts" },
    { nome: "Zeal", descricao: "Fervent desire to serve God and spread the faith" },
    { nome: "Detachment", descricao: "Freedom from excessive attachment to earthly things" },
    { nome: "Devotion", descricao: "Readiness and eagerness to serve God" },
    { nome: "Compassion", descricao: "Sharing in the suffering of others with love" },
  ];

  // Use score + area scores to deterministically pick 3 different virtues
  const seed = score + areaScores.eucaristica + areaScores.oracao;
  const i1 = seed % allVirtues.length;
  const i2 = (seed * 3 + 7) % allVirtues.length;
  const i3 = (seed * 7 + 13) % allVirtues.length;

  // Ensure no duplicates
  const indices = [i1];
  let next = i2;
  while (indices.includes(next)) next = (next + 1) % allVirtues.length;
  indices.push(next);
  next = i3;
  while (indices.includes(next)) next = (next + 1) % allVirtues.length;
  indices.push(next);

  return indices.map(i => allVirtues[i]);
};

export function ResultScreen({ score, level, userName, answers, onRestart }: ResultScreenProps) {
  const firstName = userName.split(" ")[0] || "Friend";
  const areaScores = getAreaScores(answers);
  const recomendacoes = getRecomendacoes(areaScores);
  const oracoes = getOracoesSugeridas(score);
  const santoCitacao = getSantoCitacao(score);
  const versiculoPersonalizado = getVersiculoPersonalizado(score, areaScores);
  const plano7Dias = getPlano7Dias(areaScores);
  const santoProtetor = getSantoProtetor(areaScores, score);
  const virtudes = getVirtudes(score, areaScores);

  // Normalize score to percentage (score is raw points, max is 90)
  const maxPoints = answers.length * 3 || 90;
  const scorePercent = Math.min(100, Math.round((score / maxPoints) * 100));

  const handleDownloadGuide = () => {
    try {
      generateCatholicGuidePDF({ userName, score: scorePercent, levelTitle: level.title, answers });
      toast.success("PDF generated successfully! Check your downloads.");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error generating PDF. Please try again.");
    }
  };

  const handleShare = async () => {
    const text = `I just discovered how my Catholic life is going! Take the quiz too at Guide Catholic.`;
    const url = 'https://guidecatholic.com';
    if (navigator.share) {
      try { await navigator.share({ title: "Guide Catholic", text, url }); } catch {}
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast.success("Link copied!");
    }
  };

  const getAreaColor = (percent: number) => {
    if (percent >= 70) return "bg-green-500";
    if (percent >= 40) return "bg-accent";
    return "bg-primary";
  };

  const areas = [
    { key: "eucaristica", label: "Eucharistic Life", icon: Church, score: areaScores.eucaristica },
    { key: "oracao", label: "Prayer Life", icon: HandHeart, score: areaScores.oracao },
    { key: "formacao", label: "Formation & Sacraments", icon: BookOpen, score: areaScores.formacao },
    { key: "devocoes", label: "Devotions", icon: Heart, score: areaScores.devocoes },
    { key: "testemunho", label: "Christian Witness", icon: Star, score: areaScores.testemunho },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-slide-up">

      {/* ── 1. HERO: Score + Level ── */}
      <div className="relative bg-gradient-to-br from-primary via-primary to-accent rounded-3xl p-8 md:p-12 mb-6 text-primary-foreground overflow-hidden text-center">
        <div className="absolute inset-0 bg-white/5 rounded-3xl" />
        <div className="relative z-10">
          <p className="text-primary-foreground/70 text-sm uppercase tracking-widest mb-2">Your Result</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-1">{firstName},</h2>
          <h3 className="font-display text-xl md:text-2xl text-primary-foreground/90 mb-8">{level.title}</h3>

          {/* Score circle */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="50" fill="none" stroke="white" strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - scorePercent / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(43 82% 70%)" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-white">{scorePercent}%</span>
              <span className="text-xs text-primary-foreground/70">score</span>
            </div>
          </div>

          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">{level.description}</p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-8">
            {[
              { icon: Trophy, label: "Level", value: level.title.split(" ").slice(-1)[0] },
              { icon: Target, label: "Questions", value: "30/30" },
              { icon: BookOpen, label: "Points", value: `${Math.round(scorePercent * 0.9)}/90` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white/10 rounded-xl p-3">
                <Icon className="w-5 h-5 mx-auto mb-1 text-primary-foreground/70" />
                <p className="text-xs text-primary-foreground/60">{label}</p>
                <p className="font-bold text-sm">{value}</p>
              </div>
            ))}
          </div>

          {/* Primary CTA — above the fold */}
          <Button
            onClick={handleDownloadGuide}
            className="h-14 px-10 bg-white text-primary hover:bg-white/90 font-bold text-lg shadow-xl w-full sm:w-auto"
          >
            <Download className="w-5 h-5 mr-2" />
            Download My Personalized Guide (PDF)
          </Button>
          <p className="text-xs text-primary-foreground/50 mt-3">10-page guide · Instant download · Made for {firstName}</p>
        </div>
      </div>

      {/* ── 2. SAINT QUOTE ── */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 border border-primary/20 mb-6 relative overflow-hidden">
        <Quote className="absolute top-4 right-4 w-14 h-14 text-primary/10" />
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Crown className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-primary text-sm">Word from a Saint for You</p>
            <p className="text-xs text-muted-foreground">{santoCitacao.santo}</p>
          </div>
        </div>
        <blockquote className="text-lg italic text-foreground mb-3 leading-relaxed">"{santoCitacao.citacao}"</blockquote>
        <p className="text-sm text-muted-foreground bg-background/50 rounded-lg p-3">💡 {santoCitacao.reflexao}</p>
      </div>

      {/* ── 3. AREA BREAKDOWN ── */}
      <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-display text-lg text-primary">Complete Assessment</h3>
            <p className="text-sm text-muted-foreground">Your 5 spiritual areas</p>
          </div>
        </div>

        {/* Progress bars */}
        <div className="space-y-4 mb-6">
          {areas.map((area) => (
            <div key={area.key}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <area.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{area.label}</span>
                </div>
                <span className={`text-sm font-bold ${area.score >= 70 ? "text-green-600" : area.score >= 40 ? "text-accent" : "text-primary"}`}>
                  {area.score}%
                </span>
              </div>
              <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getAreaColor(area.score)}`}
                  style={{ width: `${area.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed diagnostics — alternating background */}
        <div className="space-y-3">
          {areas.map((area, i) => (
            <div key={area.key} className={`rounded-xl p-4 ${i % 2 === 0 ? "bg-secondary/30" : "bg-primary/5"}`}>
              <div className="flex items-center gap-2 mb-2">
                <area.icon className="w-4 h-4 text-accent" />
                <h4 className="font-semibold text-foreground text-sm">{area.label}</h4>
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-medium ${
                  area.score >= 70 ? "bg-green-100 text-green-700" :
                  area.score >= 40 ? "bg-amber-100 text-amber-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {area.score >= 70 ? "Strong" : area.score >= 40 ? "Growing" : "Needs attention"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{getDiagnostico(area.key, area.score, userName)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. PATRON SAINT ── */}
      <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg text-primary">Your Patron Saint</h3>
            <p className="text-sm text-muted-foreground">Special intercessor for your journey</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-5 text-center mb-4">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
            <Users className="w-8 h-8 text-accent" />
          </div>
          <h4 className="font-display text-xl text-primary mb-0.5">{santoProtetor.nome}</h4>
          <p className="text-accent text-sm font-medium">{santoProtetor.titulo}</p>
        </div>
        <div className="bg-secondary/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
            <Cross className="w-3 h-3 text-primary" /> Prayer to your Patron Saint
          </p>
          <p className="text-sm text-muted-foreground italic leading-relaxed">{santoProtetor.oracao}</p>
        </div>
      </div>

      {/* ── 5. VIRTUES ── */}
      <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            <Flame className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg text-primary">Virtues to Develop</h3>
            <p className="text-sm text-muted-foreground">Focus for your spiritual growth</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {virtudes.map((virtude, i) => (
            <div key={i} className="bg-secondary/30 rounded-xl p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{virtude.nome}</h4>
              <p className="text-xs text-muted-foreground">{virtude.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. 7-DAY PLAN ── */}
      <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-lg text-primary">7-Day Plan for {firstName}</h3>
            <p className="text-sm text-muted-foreground">Personalized challenge to strengthen your faith</p>
          </div>
        </div>
        <div className="space-y-2">
          {plano7Dias.map((dia, i) => (
            <div key={i} className={`flex items-center gap-4 rounded-xl p-3 ${i % 2 === 0 ? "bg-secondary/30" : "bg-green-50"}`}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-xs text-muted-foreground">Day</span>
                <span className="text-xl font-bold text-primary">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-foreground text-sm">{dia.dia}</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">{dia.tempo}</span>
                </div>
                <p className="text-sm text-muted-foreground">{dia.acao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. BIBLE VERSE ── */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 border border-accent/30 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
            <Scroll className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-lg text-primary">God's Word for You</h3>
            <p className="text-sm text-muted-foreground">Verse to meditate on this week</p>
          </div>
        </div>
        <div className="bg-background/60 rounded-xl p-5 text-center">
          <Cross className="w-8 h-8 text-primary mx-auto mb-3" />
          <blockquote className="text-lg italic text-foreground mb-2 leading-relaxed">"{versiculoPersonalizado.texto}"</blockquote>
          <cite className="text-accent font-semibold text-sm">— {versiculoPersonalizado.referencia}</cite>
        </div>
      </div>

      {/* ── 8. RECOMMENDATIONS + PRAYERS ── */}
      <div className="bg-card rounded-2xl p-6 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-display text-lg text-primary">Your Spiritual Growth Plan</h3>
            <p className="text-sm text-muted-foreground">Recommendations and prayers for your level</p>
          </div>
        </div>

        <h4 className="font-semibold text-foreground text-sm mb-3">Recommendations</h4>
        <ul className="space-y-2 mb-6">
          {recomendacoes.map((rec, i) => (
            <li key={i} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-3">
              <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              <span className="text-sm text-foreground">{rec}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-foreground text-sm mb-3">Suggested Prayers</h4>
        <div className="grid md:grid-cols-2 gap-2">
          {oracoes.map((oracao, i) => (
            <div key={i} className="flex items-center gap-2 bg-primary/5 rounded-lg p-3">
              <Heart className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-sm text-foreground">{oracao}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. DOWNLOAD CTA (repeated at bottom) ── */}
      <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-6 md:p-8 mb-6 text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          <div className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <Download className="w-7 h-7" />
          </div>
          <h4 className="font-display text-xl mb-2">Download the Complete Catholic Life Guide</h4>
          <p className="text-primary-foreground/70 text-sm mb-5 max-w-md mx-auto">
            10-page PDF with daily prayers, devotions, Church teachings and your personalized plan.
          </p>
          <Button
            onClick={handleDownloadGuide}
            className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-bold shadow-lg w-full sm:w-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Guide (PDF)
          </Button>
        </div>
      </div>

      {/* ── 10. SECONDARY ACTIONS ── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          onClick={handleShare}
          variant="outline"
          className="flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share with Friends
        </Button>
        <Button
          onClick={onRestart}
          variant="ghost"
          className="flex-1 h-12 text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Retake Quiz
        </Button>
      </div>

      {/* ── 11. EVANGELIZATION ── */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
        <h4 className="font-display text-lg mb-2">Share the Faith with Your Friends!</h4>
        <p className="text-primary-foreground/70 text-sm mb-4">
          Help your friends discover how their Catholic life is going. Share this quiz and evangelize through your witness!
        </p>
        <Button onClick={handleShare} className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Share2 className="w-4 h-4 mr-2" />
          Share guidecatholic.com
        </Button>
      </div>

    </div>
  );
}