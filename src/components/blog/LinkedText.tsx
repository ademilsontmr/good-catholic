import { Link } from "react-router-dom";
import { INTERLINK_MAP } from "@/lib/interlinks";

interface LinkedTextProps {
  children: string;
  className?: string;
  /** Slug of the current article — prevents linking to itself */
  currentSlug?: string;
}

/**
 * Renders a paragraph of text with automatic contextual internal links.
 * Scans the text for phrases in INTERLINK_MAP and wraps them in <Link> tags.
 * Each phrase is only linked ONCE per paragraph to avoid over-optimization.
 */
export function LinkedText({ children, className, currentSlug }: LinkedTextProps) {
  const text = children;

  // Sort phrases by length descending so longer phrases match first
  const phrases = Object.keys(INTERLINK_MAP).sort((a, b) => b.length - a.length);

  // Build segments: array of { text: string, url?: string }
  type Segment = { text: string; url?: string };
  let segments: Segment[] = [{ text }];
  const usedUrls = new Set<string>();

  for (const phrase of phrases) {
    const url = INTERLINK_MAP[phrase];

    // Skip if this URL is the current page or already used in this paragraph
    if (usedUrls.has(url)) continue;
    if (currentSlug && url.includes(currentSlug)) continue;

    const newSegments: Segment[] = [];
    let matched = false;

    for (const seg of segments) {
      if (seg.url || matched) {
        // Already a link or phrase already matched — don't re-process
        newSegments.push(seg);
        continue;
      }

      const idx = seg.text.indexOf(phrase);
      if (idx === -1) {
        newSegments.push(seg);
        continue;
      }

      // Split into before, link, after
      if (idx > 0) newSegments.push({ text: seg.text.slice(0, idx) });
      newSegments.push({ text: phrase, url });
      if (idx + phrase.length < seg.text.length) {
        newSegments.push({ text: seg.text.slice(idx + phrase.length) });
      }

      usedUrls.add(url);
      matched = true;
    }

    if (matched) segments = newSegments;
  }

  return (
    <p className={className}>
      {segments.map((seg, i) =>
        seg.url ? (
          <Link
            key={i}
            to={seg.url}
            className="text-accent hover:text-accent/80 underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
          >
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </p>
  );
}
