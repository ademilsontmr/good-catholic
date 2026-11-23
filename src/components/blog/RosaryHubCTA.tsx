import { Link } from "react-router-dom";

/** Links the Rosary articles to the /rosary/ hub with its guided, bead-by-bead Rosary. */
export function RosaryHubCTA() {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <p className="font-display text-xl font-bold text-text">Pray the Rosary with us now</p>
        <p className="text-text-muted text-sm mt-1">
          A guided Rosary, bead by bead, that opens on today's mysteries, with every prayer and all 20 mysteries in one place.
        </p>
      </div>
      <Link
        to="/rosary/"
        className="inline-flex items-center justify-center rounded-xl bg-gradient-accent px-5 py-3 font-semibold text-button-text hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Open the guided Rosary
      </Link>
    </aside>
  );
}
