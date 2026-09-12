import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

/** Subtle mid-article donation nudge linking to /donate/ */
export function DonateCTA() {
  return (
    <aside
      className="mt-10 mb-6 rounded-xl border border-primary/15 bg-primary/[0.04] px-5 py-4 md:px-6 md:py-5"
      aria-label="Support Guide Catholic"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
          <div className="shrink-0 mt-0.5 sm:mt-0 w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <Heart className="w-4 h-4 text-primary" fill="currentColor" aria-hidden="true" />
          </div>
          <p className="text-sm md:text-[0.95rem] text-text leading-relaxed">
            If this guide helped you, a small gift keeps Guide Catholic free for the next reader.{" "}
            <span className="text-text-muted italic">
              “God loveth a cheerful giver.” —{" "}
              <cite className="not-italic font-medium text-primary">2 Cor 9:7</cite>
            </span>
          </p>
        </div>
        <Link
          to="/donate/"
          className="shrink-0 inline-flex items-center justify-center rounded-lg border border-primary/25 bg-surface px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
        >
          Support us
        </Link>
      </div>
    </aside>
  );
}
