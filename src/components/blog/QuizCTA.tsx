import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Cross } from "lucide-react";

interface QuizCTAProps {
  title?: string;
  description?: string;
}

export function QuizCTA({
  title = "How is your faith journey?",
  description = "Many Catholics feel they could live their faith more deeply, but don't know where to start. Take our quiz and receive personalized guidance for your spiritual life.",
}: QuizCTAProps) {
  return (
    <aside
      className="my-12 relative overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.12] via-surface to-primary/[0.06] shadow-sm"
      aria-label="Catholic faith quiz"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-sm">
            <Cross className="w-6 h-6 text-accent-foreground" strokeWidth={2} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl md:text-2xl font-bold text-text mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-3 sm:mb-0">
              {description}
            </p>
            <p className="inline-flex items-center gap-1.5 text-xs text-text-muted sm:hidden">
              <Clock className="w-3.5 h-3.5 text-accent" />
              Free · 5 min · 30 questions
            </p>
          </div>

          <Link to="/quiz-intro" className="shrink-0 w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold px-6 shadow-glow transition-all duration-300 group"
            >
              Take the Quiz Now
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
