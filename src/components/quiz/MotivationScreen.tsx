import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Flame, Trophy } from "lucide-react";

interface MotivationScreenProps {
  questionNumber: number; // 7, 15, or 25
  onContinue: () => void;
}

const content = {
  7: {
    icon: Star,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-50",
    badge: "Great start!",
    badgeColor: "bg-amber-100 text-amber-700",
    title: "You're off to a strong start!",
    subtitle: "7 questions answered",
    message: "You've completed the first section of your assessment. Every answer is helping us build a more accurate picture of your spiritual life.",
    stat: "23%",
    statLabel: "completed",
    cta: "Keep going →",
    quote: "\"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.\"",
    quoteAuthor: "— Matthew 7:7",
    tip: "💡 Tip: Answer honestly — there are no right or wrong answers. This is about your real spiritual life.",
  },
  15: {
    icon: Flame,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-50",
    badge: "Halfway there!",
    badgeColor: "bg-orange-100 text-orange-700",
    title: "You're halfway through!",
    subtitle: "15 questions answered",
    message: "Incredible! You've already answered half the questions. Your commitment to understanding your faith is already a sign of spiritual maturity.",
    stat: "50%",
    statLabel: "completed",
    cta: "Continue the journey →",
    quote: "\"I can do all things through Christ who strengthens me.\"",
    quoteAuthor: "— Philippians 4:13",
    tip: "🔥 You're doing great! The second half reveals the deeper dimensions of your Catholic life.",
  },
  25: {
    icon: Trophy,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    badge: "Almost done!",
    badgeColor: "bg-green-100 text-green-700",
    title: "Almost there — just 5 more!",
    subtitle: "25 questions answered",
    message: "You're 83% done! Just 5 final questions stand between you and your personalized Catholic Life Guide. Don't stop now — the best is yet to come.",
    stat: "83%",
    statLabel: "completed",
    cta: "Finish strong →",
    quote: "\"He who perseveres to the end will be saved.\"",
    quoteAuthor: "— Matthew 24:13",
    tip: "🏆 Your personalized 10-page guide is almost ready. These last 5 questions are the most important!",
  },
};

export function MotivationScreen({ questionNumber, onContinue }: MotivationScreenProps) {
  const c = content[questionNumber as keyof typeof content];
  if (!c) return null;

  const Icon = c.icon;
  const progress = parseInt(c.stat);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-slide-up">

        {/* Card */}
        <div className="bg-surface border border-border rounded-3xl p-8 shadow-lg text-center">

          {/* Badge */}
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-5 ${c.badgeColor}`}>
            {c.badge}
          </span>

          {/* Icon */}
          <div className={`w-20 h-20 ${c.iconBg} rounded-full flex items-center justify-center mx-auto mb-5`}>
            <Icon className={`w-10 h-10 ${c.iconColor}`} />
          </div>

          {/* Title */}
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text mb-2">
            {c.title}
          </h2>
          <p className="text-sm text-text-muted mb-6">{c.subtitle}</p>

          {/* Progress ring */}
          <div className="relative w-28 h-28 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
              <circle
                cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - progress / 100)}`}
                className={`${c.iconColor} transition-all duration-1000`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-2xl font-bold text-text">{c.stat}</span>
              <span className="text-xs text-text-muted">{c.statLabel}</span>
            </div>
          </div>

          {/* Message */}
          <p className="text-text-muted leading-relaxed mb-6 text-sm">
            {c.message}
          </p>

          {/* Quote */}
          <div className="bg-background-muted/50 rounded-2xl p-4 mb-6 text-left">
            <p className="text-sm italic text-text-muted leading-relaxed">{c.quote}</p>
            <p className="text-xs text-text-muted mt-1 font-medium">{c.quoteAuthor}</p>
          </div>

          {/* Tip */}
          <p className="text-xs text-text-muted bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 mb-6 text-left">
            {c.tip}
          </p>

          {/* CTA */}
          <Button
            onClick={onContinue}
            size="lg"
            className="w-full h-14 text-lg font-bold group"
          >
            {c.cta}
            <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
