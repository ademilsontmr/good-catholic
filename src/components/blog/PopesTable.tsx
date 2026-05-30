import { useMemo, useState } from "react";
import { CATHOLIC_POPES } from "@/data/catholicPopes";

export function PopesTable() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATHOLIC_POPES;
    return CATHOLIC_POPES.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        String(p.num).includes(q) ||
        p.reign.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="my-8">
      <label htmlFor="pope-search" className="block text-sm font-medium text-text mb-2">
        Search all {CATHOLIC_POPES.length} popes by name, number, or dates
      </label>
      <input
        id="pope-search"
        type="search"
        placeholder="e.g. Gregory, Leo XIV, 1962..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-border bg-background text-text mb-4"
      />
      <div className="overflow-x-auto rounded-xl border border-border max-h-[600px] overflow-y-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-accent/10 sticky top-0 z-10">
            <tr>
              <th className="px-4 py-3 font-semibold text-text w-16">#</th>
              <th className="px-4 py-3 font-semibold text-text">Pope</th>
              <th className="px-4 py-3 font-semibold text-text">Pontificate</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((pope) => (
              <tr key={pope.num} className="border-t border-border/60 hover:bg-background-muted/40">
                <td className="px-4 py-2 text-text-muted font-medium">{pope.num}</td>
                <td className="px-4 py-2 text-text">{pope.name}</td>
                <td className="px-4 py-2 text-text-muted">{pope.reign}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && (
        <p className="text-text-muted text-sm mt-2">No popes match your search.</p>
      )}
    </div>
  );
}
