import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, Cross, Shield } from "lucide-react";

interface ArticleBottomCTAProps {
  title?: string;
  description?: string;
}

export function ArticleBottomCTA({
  title = "How deep is your Catholic faith?",
  description = "Take our free 5-minute assessment and receive a personalized spiritual growth guide — tailored to your prayer life, sacraments, and daily habits.",
}: ArticleBottomCTAProps) {
  return (
    <section
      className="mt-12 relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-surface to-accent/[0.12] shadow-sm"
      aria-label="Catholic faith assessment"
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-shrink-0 hidden sm:flex w-16 h-16 rounded-2xl bg-gradient-accent items-center justify-center shadow-glow mx-auto md:mx-0">
            <Cross className="w-8 h-8 text-accent-foreground" strokeWidth={2} />
          </div>

          <div className="flex-1 text-center md:text-left min-w-0">
            <p className="inline-flex items-center gap-2 bg-accent/15 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
              Free Catholic Life Assessment
            </p>
            <h3 className="font-display text-2xl md:text-[1.65rem] font-bold text-text mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-text-muted text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              {description}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 mt-4 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                5 minutes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-primary" />
                100% private
              </span>
              <span>30 questions · personalized guide</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 shrink-0">
            <Link to="/quiz-intro" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-8 bg-gradient-accent hover:opacity-90 text-accent-foreground font-bold text-base shadow-glow transition-all duration-300 group"
              >
                Take the Quiz Now
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <p className="text-xs text-text-muted text-center">No account required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
