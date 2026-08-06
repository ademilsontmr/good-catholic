import { ExternalLink } from "lucide-react";
import { CBO_ST_MICHAELS_LENT_GUIDE, stMichaelCboLinkClass } from "@/lib/catholicBibleOnlineLinks";

interface StMichaelCboCTAProps {
  compact?: boolean;
}

/** Prominent CTA linking to the St. Michael's Lent novena on Catholic Bible Online */
export function StMichaelCboCTA({ compact }: StMichaelCboCTAProps) {
  if (compact) {
    return (
      <p className="text-text leading-relaxed mb-6">
        Pray the complete 46-day St. Michael&apos;s Lent novena — daily text, calendar, and full prayers — free at{" "}
        <StMichaelCboLink />.
      </p>
    );
  }

  return (
    <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8">
      <h2 className="font-display text-xl font-bold text-text mb-3 flex items-center gap-2 mt-0">
        <ExternalLink className="w-5 h-5 text-accent shrink-0" />
        Pray St. Michael&apos;s Lent Novena (46 Days — Free)
      </h2>
      <p className="text-text leading-relaxed mb-4">
        For the complete daily St. Michael&apos;s Lent novena — St. Michael Prayer, litany, consecration, and a page
        for every day from August 15 through September 29 — use Catholic Bible Online&apos;s dedicated guide:
      </p>
      <a
        href={CBO_ST_MICHAELS_LENT_GUIDE}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-button-text transition-colors hover:bg-accent/90"
      >
        Open St. Michael&apos;s Lent Novena on Catholic Bible Online
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export function StMichaelCboLink() {
  return (
    <a
      href={CBO_ST_MICHAELS_LENT_GUIDE}
      target="_blank"
      rel="noopener noreferrer"
      className={stMichaelCboLinkClass}
    >
      Catholic Bible Online
    </a>
  );
}
