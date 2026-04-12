export interface AnswerOption {
  label: string;
  points: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: AnswerOption[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "How often do you attend Holy Mass?",
    options: [
      { label: "Every Sunday and holy days", points: 3 },
      { label: "Almost every Sunday", points: 2.5 },
      { label: "A few times a month", points: 2 },
      { label: "Rarely, only on special occasions", points: 1 },
      { label: "Never or almost never", points: 0 },
    ],
  },
  {
    id: 2,
    question: "Do you try to arrive early to prepare spiritually before Mass?",
    options: [
      { label: "Always, I like to prepare in prayer", points: 3 },
      { label: "Frequently arrive early", points: 2.5 },
      { label: "Sometimes, when I can", points: 2 },
      { label: "Rarely, I usually arrive just in time", points: 1 },
      { label: "Never, I always arrive late", points: 0 },
    ],
  },
  {
    id: 3,
    question: "Do you actively participate in the liturgy (responses, songs, posture)?",
    options: [
      { label: "Yes, I participate with attention and devotion", points: 3 },
      { label: "Most of the time I participate well", points: 2.5 },
      { label: "Sometimes I get distracted during Mass", points: 2 },
      { label: "I rarely pay full attention", points: 1 },
      { label: "I don't actively participate", points: 0 },
    ],
  },
  {
    id: 4,
    question: "Do you receive Communion frequently when you are in a state of grace?",
    options: [
      { label: "Always when I'm in grace", points: 3 },
      { label: "Frequently receive Communion", points: 2.5 },
      { label: "Sometimes receive Communion", points: 2 },
      { label: "Rarely receive Communion", points: 1 },
      { label: "Never or almost never receive Communion", points: 0 },
    ],
  },
  {
    id: 5,
    question: "Do you attend Mass on holy days of obligation besides Sundays?",
    options: [
      { label: "Always attend on holy days", points: 3 },
      { label: "Most holy days", points: 2.5 },
      { label: "Some holy days", points: 2 },
      { label: "Rarely go on holy days", points: 1 },
      { label: "Don't attend on holy days", points: 0 },
    ],
  },
  {
    id: 6,
    question: "Do you serve or have you served in any Church ministry or pastoral work?",
    options: [
      { label: "Yes, I actively serve in ministry", points: 3 },
      { label: "I have served and plan to return", points: 2.5 },
      { label: "I participate occasionally", points: 2 },
      { label: "Never served, but I'm interested", points: 1 },
      { label: "Never served and not interested", points: 0 },
    ],
  },
  {
    id: 7,
    question: "How often do you make Eucharistic Adoration?",
    options: [
      { label: "Weekly or more", points: 3 },
      { label: "A few times a month", points: 2.5 },
      { label: "Once a month", points: 2 },
      { label: "Rarely, a few times a year", points: 1 },
      { label: "Never made adoration", points: 0 },
    ],
  },
  {
    id: 8,
    question: "Do you pray every day?",
    options: [
      { label: "Yes, I pray several times a day", points: 3 },
      { label: "Yes, I pray at least once a day", points: 2.5 },
      { label: "I pray most days", points: 2 },
      { label: "I pray only some days", points: 1 },
      { label: "Rarely or never pray", points: 0 },
    ],
  },
  {
    id: 9,
    question: "Do you set aside a specific time of day for personal prayer?",
    options: [
      { label: "Yes, I have a fixed prayer time", points: 3 },
      { label: "Most days I have this moment", points: 2.5 },
      { label: "Sometimes I can set aside time", points: 2 },
      { label: "I rarely have specific time", points: 1 },
      { label: "I don't have a reserved moment", points: 0 },
    ],
  },
  {
    id: 10,
    question: "Do you pray the Holy Rosary? How often?",
    options: [
      { label: "Daily", points: 3 },
      { label: "Several times a week", points: 2.5 },
      { label: "Once a week", points: 2 },
      { label: "Rarely, a few times a month", points: 1 },
      { label: "Never or almost never", points: 0 },
    ],
  },
  {
    id: 11,
    question: "Do you pray the Angelus or other traditional Church prayers?",
    options: [
      { label: "Yes, I pray daily", points: 3 },
      { label: "Frequently pray", points: 2.5 },
      { label: "Sometimes pray", points: 2 },
      { label: "Rarely pray", points: 1 },
      { label: "Don't know or never pray", points: 0 },
    ],
  },
  {
    id: 12,
    question: "Do you pray before meals or thank God daily?",
    options: [
      { label: "Always, at all meals", points: 3 },
      { label: "Frequently give thanks", points: 2.5 },
      { label: "Sometimes I remember to give thanks", points: 2 },
      { label: "Rarely do this", points: 1 },
      { label: "Never pray before meals", points: 0 },
    ],
  },
  {
    id: 13,
    question: "Do you usually pray for other people's needs?",
    options: [
      { label: "Yes, I pray daily for others", points: 3 },
      { label: "Frequently pray for others", points: 2.5 },
      { label: "Sometimes, when they ask me", points: 2 },
      { label: "I rarely remember", points: 1 },
      { label: "Never pray for others", points: 0 },
    ],
  },
  {
    id: 14,
    question: "Does prayer help you make important decisions?",
    options: [
      { label: "I always seek God in decisions", points: 3 },
      { label: "Frequently ask for guidance", points: 2.5 },
      { label: "Sometimes turn to prayer", points: 2 },
      { label: "Rarely think of praying", points: 1 },
      { label: "Never relate prayer and decisions", points: 0 },
    ],
  },
  {
    id: 15,
    question: "Do you know the 7 sacraments of the Catholic Church?",
    options: [
      { label: "Yes, I know all of them and their importance", points: 3 },
      { label: "I know most of them", points: 2.5 },
      { label: "I know some", points: 2 },
      { label: "I know very little", points: 1 },
      { label: "I don't know the sacraments", points: 0 },
    ],
  },
  {
    id: 16,
    question: "How often do you go to Confession?",
    options: [
      { label: "Monthly or more", points: 3 },
      { label: "Every 2-3 months", points: 2.5 },
      { label: "A few times a year", points: 2 },
      { label: "Once a year or less", points: 1 },
      { label: "Haven't confessed in years", points: 0 },
    ],
  },
  {
    id: 17,
    question: "Do you read the Catechism or use it to clarify faith questions?",
    options: [
      { label: "Yes, I consult it regularly", points: 3 },
      { label: "Sometimes consult it", points: 2.5 },
      { label: "Rarely, but I've read excerpts", points: 2 },
      { label: "Never read it, but I'm interested", points: 1 },
      { label: "Never read it and don't know it", points: 0 },
    ],
  },
  {
    id: 18,
    question: "Do you participate or have you participated in Bible study/catechesis groups?",
    options: [
      { label: "Yes, I currently participate", points: 3 },
      { label: "I have participated and it was very good", points: 2.5 },
      { label: "Only participated in childhood", points: 2 },
      { label: "Never participated, but I want to", points: 1 },
      { label: "Never participated", points: 0 },
    ],
  },
  {
    id: 19,
    question: "Are you aware of the importance of the Eucharist and Confession for Christian life?",
    options: [
      { label: "Yes, they are central to my faith", points: 3 },
      { label: "I understand their importance well", points: 2.5 },
      { label: "I have a notion of their importance", points: 2 },
      { label: "I understand little about this", points: 1 },
      { label: "I don't understand their importance", points: 0 },
    ],
  },
  {
    id: 20,
    question: "Do you try to avoid serious sins and live in a state of grace?",
    options: [
      { label: "Yes, it's my priority", points: 3 },
      { label: "I frequently make an effort", points: 2.5 },
      { label: "I try, but I have difficulty", points: 2 },
      { label: "I rarely think about it", points: 1 },
      { label: "I don't worry about it", points: 0 },
    ],
  },
  {
    id: 21,
    question: "Do you make novenas? How often?",
    options: [
      { label: "Yes, I frequently make novenas", points: 3 },
      { label: "I make a few novenas a year", points: 2.5 },
      { label: "Sometimes I make them", points: 2 },
      { label: "I rarely make novenas", points: 1 },
      { label: "Never made a novena", points: 0 },
    ],
  },
  {
    id: 22,
    question: "Do you have Marian devotion (to Our Lady)?",
    options: [
      { label: "Yes, I have great devotion", points: 3 },
      { label: "I have moderate devotion", points: 2.5 },
      { label: "I have some devotion", points: 2 },
      { label: "Little devotion", points: 1 },
      { label: "I don't have Marian devotion", points: 0 },
    ],
  },
  {
    id: 23,
    question: "Do you follow the liturgical calendar and its celebrations?",
    options: [
      { label: "Yes, I follow closely", points: 3 },
      { label: "I follow the main feasts", points: 2.5 },
      { label: "I know some dates", points: 2 },
      { label: "I know very little", points: 1 },
      { label: "I don't follow", points: 0 },
    ],
  },
  {
    id: 24,
    question: "Do you have devotion to any saint and ask for their intercession?",
    options: [
      { label: "Yes, I have devotional saints", points: 3 },
      { label: "I have a patron saint", points: 2.5 },
      { label: "Sometimes I ask for intercession", points: 2 },
      { label: "I rarely ask the saints", points: 1 },
      { label: "I don't have devotion to saints", points: 0 },
    ],
  },
  {
    id: 25,
    question: "Do you keep sacramentals at home (holy water, cross, images) and use them with faith?",
    options: [
      { label: "Yes, I have and use them with devotion", points: 3 },
      { label: "I have some and use them sometimes", points: 2.5 },
      { label: "I have them, but use them little", points: 2 },
      { label: "I have few items", points: 1 },
      { label: "I don't have sacramentals at home", points: 0 },
    ],
  },
  {
    id: 26,
    question: "Do you consume Catholic content (homilies, reflections, videos)?",
    options: [
      { label: "Yes, daily", points: 3 },
      { label: "Several times a week", points: 2.5 },
      { label: "Weekly", points: 2 },
      { label: "Rarely", points: 1 },
      { label: "Never consume", points: 0 },
    ],
  },
  {
    id: 27,
    question: "Do you contribute to the community (tithe, donations, volunteering)?",
    options: [
      { label: "Yes, I contribute regularly", points: 3 },
      { label: "I contribute frequently", points: 2.5 },
      { label: "I contribute sometimes", points: 2 },
      { label: "I rarely contribute", points: 1 },
      { label: "I don't contribute", points: 0 },
    ],
  },
  {
    id: 28,
    question: "Do you try to live Christian values at work, family, and relationships?",
    options: [
      { label: "Yes, it's my way of life", points: 3 },
      { label: "I frequently make an effort", points: 2.5 },
      { label: "Sometimes I succeed", points: 2 },
      { label: "I have difficulty with this", points: 1 },
      { label: "I don't think about it daily", points: 0 },
    ],
  },
  {
    id: 29,
    question: "Do you share your faith with other people?",
    options: [
      { label: "Yes, I actively evangelize", points: 3 },
      { label: "I frequently talk about faith", points: 2.5 },
      { label: "Sometimes I share", points: 2 },
      { label: "I rarely talk about faith", points: 1 },
      { label: "I never share my faith", points: 0 },
    ],
  },
  {
    id: 30,
    question: "Do you seek to grow spiritually with study, prayer, and frequent confession?",
    options: [
      { label: "Yes, I constantly seek to grow", points: 3 },
      { label: "I frequently seek to grow", points: 2.5 },
      { label: "Sometimes I dedicate myself to this", points: 2 },
      { label: "I rarely think about it", points: 1 },
      { label: "I don't seek spiritual growth", points: 0 },
    ],
  },
];

export interface ResultLevel {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
  emoji: string;
}

export const resultLevels: ResultLevel[] = [
  {
    minScore: 90,
    maxScore: 100,
    title: "Exemplary Practicing Catholic",
    description: "You live your Catholic faith intensely! Continue firm on this journey and be a light to others.",
    emoji: "🏆",
  },
  {
    minScore: 75,
    maxScore: 89,
    title: "Committed Catholic",
    description: "You have a solid faith life. Continue growing and deepening your spirituality.",
    emoji: "⭐",
  },
  {
    minScore: 60,
    maxScore: 74,
    title: "Growing Catholic",
    description: "You're on the right path! Seek to participate more in the sacraments and Church life.",
    emoji: "🌱",
  },
  {
    minScore: 40,
    maxScore: 59,
    title: "Seeking Catholic",
    description: "Your faith needs to be nourished. Draw closer to the Church and the sacraments.",
    emoji: "🔍",
  },
  {
    minScore: 20,
    maxScore: 39,
    title: "Distant Catholic",
    description: "It's time to return to the Father's house. The Church awaits you with open arms!",
    emoji: "🏠",
  },
  {
    minScore: 0,
    maxScore: 19,
    title: "Beginning of the Journey",
    description: "It's never too late to start. God loves you and calls you to a full life of faith.",
    emoji: "✨",
  },
];

export function getResultLevel(normalizedScore: number): ResultLevel {
  return resultLevels.find(
    (level) => normalizedScore >= level.minScore && normalizedScore <= level.maxScore
  ) || resultLevels[resultLevels.length - 1];
}

export function calculateNormalizedScore(totalPoints: number): number {
  return Math.round((totalPoints / 90) * 100);
}
