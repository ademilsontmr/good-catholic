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

// Personalized Bible verse
const getVersiculoPersonalizado = (score: number, areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  const versiculos: Record<string, { texto: string; referencia: string }> = {
    eucaristica: {
      texto: "I am the living bread that came down from heaven. Whoever eats this bread will live forever.",
      referencia: "John 6:51"
    },
    oracao: {
      texto: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
      referencia: "Matthew 7:7"
    },
    formacao: {
      texto: "You will know the truth, and the truth will set you free.",
      referencia: "John 8:32"
    },
    devocoes: {
      texto: "Here is your mother. And from that time on, the disciple took her into his home.",
      referencia: "John 19:27"
    },
    testemunho: {
      texto: "You are the light of the world. A city on a hill cannot be hidden.",
      referencia: "Matthew 5:14"
    }
  };
  
  return versiculos[weakestArea] || versiculos.oracao;
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

// Patron Saints by area
const getSantoProtetor = (areaScores: ReturnType<typeof getAreaScores>) => {
  const weakestArea = Object.entries(areaScores).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  const santos: Record<string, { nome: string; titulo: string; oracao: string }> = {
    eucaristica: {
      nome: "St. Pio of Pietrelcina",
      titulo: "Apostle of the Eucharist",
      oracao: "St. Pio of Pietrelcina, you who lived each Mass as if it were the first and the last, help me to love the Eucharist as you loved it. Amen."
    },
    oracao: {
      nome: "St. Teresa of Avila",
      titulo: "Doctor of Prayer",
      oracao: "St. Teresa of Avila, master of the interior life, teach me to cultivate friendship with God through prayer. Help me never to abandon this relationship of love. Amen."
    },
    formacao: {
      nome: "St. Thomas Aquinas",
      titulo: "Angelic Doctor",
      oracao: "St. Thomas Aquinas, who united faith and reason in an admirable way, enlighten my mind to know more deeply the doctrine of the Church. Amen."
    },
    devocoes: {
      nome: "St. Louis Marie Grignion de Montfort",
      titulo: "Apostle of Mary",
      oracao: "St. Louis de Montfort, who taught us the way to Jesus through Mary, help me to grow in devotion to the Blessed Virgin. Amen."
    },
    testemunho: {
      nome: "St. Francis of Assisi",
      titulo: "Patron of Peace",
      oracao: "St. Francis of Assisi, who preached the Gospel with your life before words, help me to be a living witness of Christ in the world. Amen."
    },
  };
  
  return santos[weakestArea] || santos.oracao;
};

// Virtues to develop
const getVirtudes = (score: number, areaScores: ReturnType<typeof getAreaScores>) => {
  const virtudes = [];
  
  if (areaScores.eucaristica < 60) {
    virtudes.push({ nome: "Piety", descricao: "Reverence and love for sacred things" });
  }
  if (areaScores.oracao < 60) {
    virtudes.push({ nome: "Perseverance", descricao: "Constancy in prayer life" });
  }
  if (areaScores.formacao < 60) {
    virtudes.push({ nome: "Prudence", descricao: "Discernment to know God's will" });
  }
  if (areaScores.devocoes < 60) {
    virtudes.push({ nome: "Devotion", descricao: "Readiness to serve God" });
  }
  if (areaScores.testemunho < 60) {
    virtudes.push({ nome: "Charity", descricao: "Love of God and neighbor" });
  }
  
  if (virtudes.length === 0) {
    virtudes.push(
      { nome: "Humility", descricao: "Recognizing that all good comes from God" },
      { nome: "Fortitude", descricao: "Persevering through tribulations" },
      { nome: "Hope", descricao: "Trust in God's promises" }
    );
  }
  
  return virtudes.slice(0, 3);
};

export function ResultScreen({ score, level, userName, answers, onRestart }: ResultScreenProps) {
  const firstName = userName.split(" ")[0];
  const areaScores = getAreaScores(answers);
  const recomendacoes = getRecomendacoes(areaScores);
  const oracoes = getOracoesSugeridas(score);
  const santoCitacao = getSantoCitacao(score);
  const versiculoPersonalizado = getVersiculoPersonalizado(score, areaScores);
  const plano7Dias = getPlano7Dias(areaScores);
  const santoProtetor = getSantoProtetor(areaScores);
  const virtudes = getVirtudes(score, areaScores);

  const handleDownloadGuide = () => {
    try {
      generateCatholicGuidePDF({
        userName,
        score,
        levelTitle: level.title,
      });
      toast.success("PDF generated successfully! Check your downloads.");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Error generating PDF. Please try again.");
    }
  };

  const handleShare = async () => {
    const text = `I discovered how my Catholic life is going! Take the quiz too at Guide Catholic and see your result.`;
    const url = 'https://good-catholic.com';
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Guide Catholic - Catholic Life Quiz",
          text,
          url,
        });
      } catch {
        // User cancelled sharing
      }
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      toast.success("Link copied to share!");
    }
  };

  const getScoreColor = () => {
    if (score >= 75) return "text-green-600";
    if (score >= 50) return "text-accent";
    return "text-primary";
  };

  const getAreaColor = (percent: number) => {
    if (percent >= 70) return "bg-green-500";
    if (percent >= 40) return "bg-accent";
    return "bg-primary";
  };

  const areas = [
    { key: "eucaristica", label: "Eucharistic Life", icon: Church, score: areaScores.eucaristica },
    { key: "oracao", label: "Prayer Life", icon: HandHeart, score: areaScores.oracao },
    { key: "formacao", label: "Formation and Sacraments", icon: BookOpen, score: areaScores.formacao },
    { key: "devocoes", label: "Devotions", icon: Heart, score: areaScores.devocoes },
    { key: "testemunho", label: "Christian Witness", icon: Star, score: areaScores.testemunho },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 animate-slide-up">
      {/* Header com resultado principal */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{level.emoji}</div>
          <h2 className="font-display text-xl text-muted-foreground mb-2">
            Congratulations, {firstName}!
          </h2>
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
            {level.title}
          </h3>
          
          {/* Score Circle */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-secondary"
              />
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="url(#goldGradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${(score / 100) * 402} 402`}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(43 82% 46%)" />
                  <stop offset="100%" stopColor="hsl(38 90% 55%)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-4xl font-bold ${getScoreColor()}`}>
                {score}%
              </span>
              <span className="text-sm text-muted-foreground">score</span>
            </div>
          </div>

          <p className="text-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {level.description}
          </p>
        </div>

        {/* Stats rápidos */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <Trophy className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Level</span>
            <p className="font-semibold text-foreground text-sm">{level.title.split(" ").slice(-1)}</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <Target className="w-6 h-6 text-primary mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Questions</span>
            <p className="font-semibold text-foreground">30/30</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-4 text-center">
            <BookOpen className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-sm text-muted-foreground">Points</span>
            <p className="font-semibold text-foreground">{Math.round(score * 0.9)}/90</p>
          </div>
        </div>
      </div>

      {/* CITAÇÃO DO SANTO - NOVO */}
      <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20 mb-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-6xl text-primary/10">
          <Quote className="w-16 h-16" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg text-primary">Word from a Saint for You</h3>
              <p className="text-sm text-muted-foreground">{santoCitacao.santo}</p>
            </div>
          </div>
          <blockquote className="text-xl italic text-foreground mb-4 leading-relaxed">
            "{santoCitacao.citacao}"
          </blockquote>
          <p className="text-muted-foreground text-sm bg-background/50 rounded-lg p-3">
            💡 {santoCitacao.reflexao}
          </p>
        </div>
      </div>

      {/* DIAGNÓSTICO COMPLETO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
            <Target className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Complete Assessment</h3>
            <p className="text-sm text-muted-foreground">Detailed evaluation of your Catholic life</p>
          </div>
        </div>

        {/* Barras de progresso por área */}
        <div className="space-y-4 mb-8">
          {areas.map((area) => (
            <div key={area.key}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <area.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{area.label}</span>
                </div>
                <span className="text-sm font-bold text-foreground">{area.score}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getAreaColor(area.score)}`}
                  style={{ width: `${area.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Diagnósticos detalhados */}
        <div className="space-y-4">
          {areas.map((area) => (
            <div key={area.key} className="bg-secondary/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <area.icon className="w-5 h-5 text-accent" />
                <h4 className="font-semibold text-foreground">{area.label}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {getDiagnostico(area.key, area.score, userName)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SANTO PROTETOR - NOVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Your Patron Saint</h3>
            <p className="text-sm text-muted-foreground">Special intercessor for your journey</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 text-center mb-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
            <Users className="w-10 h-10 text-accent" />
          </div>
          <h4 className="font-display text-2xl text-primary mb-1">{santoProtetor.nome}</h4>
          <p className="text-accent font-medium">{santoProtetor.titulo}</p>
        </div>

        <div className="bg-secondary/30 rounded-xl p-4">
          <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Cross className="w-4 h-4 text-primary" />
            Prayer to your Patron Saint
          </h5>
          <p className="text-muted-foreground italic leading-relaxed">
            {santoProtetor.oracao}
          </p>
        </div>
      </div>

      {/* VIRTUDES A DESENVOLVER - NOVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
            <Flame className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Virtues to Develop</h3>
            <p className="text-sm text-muted-foreground">Focus for your spiritual growth</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {virtudes.map((virtude, index) => (
            <div key={index} className="bg-secondary/30 rounded-xl p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{virtude.nome}</h4>
              <p className="text-sm text-muted-foreground">{virtude.descricao}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLANO DE 7 DIAS - NOVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">7-Day Plan for {firstName}</h3>
            <p className="text-sm text-muted-foreground">Personalized challenge to strengthen your faith</p>
          </div>
        </div>

        <div className="space-y-3">
          {plano7Dias.map((dia, index) => (
            <div key={index} className="flex items-center gap-4 bg-secondary/30 rounded-xl p-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex flex-col items-center justify-center shrink-0">
                <span className="text-xs text-muted-foreground uppercase">Day</span>
                <span className="text-2xl font-bold text-primary">{index + 1}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-foreground">{dia.dia}</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">{dia.tempo}</span>
                </div>
                <p className="text-sm text-muted-foreground">{dia.acao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VERSÍCULO PERSONALIZADO - NOVO */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl p-6 md:p-8 border border-accent/30 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
            <Scroll className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">God's Word for You</h3>
            <p className="text-sm text-muted-foreground">Verse to meditate on this week</p>
          </div>
        </div>

        <div className="bg-background/50 rounded-xl p-6 text-center">
          <Cross className="w-10 h-10 text-primary mx-auto mb-4" />
          <blockquote className="text-xl italic text-foreground mb-3 leading-relaxed">
            "{versiculoPersonalizado.texto}"
          </blockquote>
          <cite className="text-accent font-semibold">— {versiculoPersonalizado.referencia}</cite>
        </div>
      </div>

      {/* CLASSIFICAÇÃO PERSONALIZADA */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-gradient flex items-center justify-center">
            <Star className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Personalized Classification</h3>
            <p className="text-sm text-muted-foreground">Your level on the faith journey</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6">
          <div className="text-center">
            <span className="text-5xl mb-3 block">{level.emoji}</span>
            <h4 className="font-display text-2xl text-primary mb-2">{level.title}</h4>
            <p className="text-muted-foreground">{firstName}, you are at this level:</p>
          </div>
        </div>

        {/* Visual scale of levels */}
        <div className="space-y-2 mb-6">
          {[
            { title: "Exemplary Practicing Catholic", min: 90, emoji: "🏆" },
            { title: "Committed Catholic", min: 75, emoji: "⭐" },
            { title: "Growing Catholic", min: 60, emoji: "🌱" },
            { title: "Seeking Catholic", min: 40, emoji: "🔍" },
            { title: "Distant Catholic", min: 20, emoji: "🏠" },
            { title: "Beginning of the Journey", min: 0, emoji: "✨" },
          ].map((lvl) => (
            <div
              key={lvl.title}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                level.title === lvl.title
                  ? "bg-gold-gradient text-accent-foreground"
                  : "bg-secondary/30 text-muted-foreground"
              }`}
            >
              <span className="text-xl">{lvl.emoji}</span>
              <span className={`flex-1 ${level.title === lvl.title ? "font-semibold" : ""}`}>
                {lvl.title}
              </span>
              <span className="text-sm">{lvl.min}%+</span>
            </div>
          ))}
        </div>
      </div>

      {/* GUIA EXCLUSIVO */}
      <div className="bg-card rounded-2xl shadow-sacred p-6 md:p-8 border border-border/50 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-primary">Exclusive Guide for {firstName}</h3>
            <p className="text-sm text-muted-foreground">Personalized prayers and recommendations</p>
          </div>
        </div>

        {/* Practical recommendations */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Recommendations for your spiritual growth
          </h4>
          <ul className="space-y-3">
            {recomendacoes.map((rec, index) => (
              <li key={index} className="flex items-start gap-3 bg-secondary/30 rounded-lg p-3">
                <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="text-foreground">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Suggested prayers */}
        <div className="mb-8">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Cross className="w-5 h-5 text-primary" />
            Suggested prayers for your level
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {oracoes.map((oracao, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary/5 rounded-lg p-3">
                <Heart className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground text-sm">{oracao}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA - Download PDF Guide */}
      <div className="bg-gradient-to-br from-primary via-primary to-accent rounded-2xl p-6 md:p-8 mb-6 text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
            <Download className="w-8 h-8" />
          </div>
          <h4 className="font-display text-2xl mb-2">
            Download the Complete Catholic Life Guide
          </h4>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Exclusive 10-page PDF with daily prayers, devotions, Church teachings and much more to deepen your faith.
          </p>
          
          <Button
            onClick={handleDownloadGuide}
            className="h-12 sm:h-14 px-6 sm:px-10 bg-white text-primary hover:bg-white/90 font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            <Download className="w-5 h-5 mr-2 shrink-0" />
            <span className="truncate">Download Guide (PDF)</span>
          </Button>
        </div>
      </div>

      {/* Secondary actions */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <Button
          onClick={handleShare}
          variant="outline"
          className="flex-1 h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Result
        </Button>
        <Button
          onClick={onRestart}
          variant="outline"
          className="flex-1 h-12 border-border text-foreground hover:bg-secondary"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Retake Quiz
        </Button>
      </div>

      {/* Final card - Evangelization invitation */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center">
        <h4 className="font-display text-xl mb-2">Share the Faith with Your Friends!</h4>
        <p className="text-primary-foreground/80 text-sm mb-4">
          Help your friends and colleagues discover how their Catholic life is going. Share this quiz and evangelize through your witness!
        </p>
        <Button
          onClick={handleShare}
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share Site
        </Button>
      </div>
    </div>
  );
}
