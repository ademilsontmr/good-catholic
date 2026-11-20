import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { seriesForSlug } from "@/data/topicSeries";
import { cn } from "@/lib/utils";

interface TopicSeriesNavProps {
  currentSlug: string;
  className?: string;
}

/** "In this series" box linking every article that covers the same topic from another angle. */
export function TopicSeriesNav({ currentSlug, className }: TopicSeriesNavProps) {
  const series = seriesForSlug(currentSlug);
  if (!series) return null;

  return (
    <nav
      aria-label={series.title}
      className={cn("my-10 rounded-2xl border border-accent/25 bg-accent/5 p-6", className)}
    >
      <p className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-text">
        <BookOpen className="h-5 w-5 text-accent" />
        {series.title}
      </p>
      <ul className="space-y-3">
        {series.items.map((item) => {
          const current = item.slug === currentSlug;
          return (
            <li key={item.slug} className="leading-snug">
              {current ? (
                <span className="font-semibold text-text">
                  {item.label} <span className="text-xs font-normal text-text-muted">(you are here)</span>
                </span>
              ) : (
                <Link
                  to={`/blog/${item.slug}/`}
                  className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
                >
                  {item.label}
                </Link>
              )}
              {item.hub && !current && <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent">Complete guide</span>}
              <span className="block text-sm text-text-muted">{item.note}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
