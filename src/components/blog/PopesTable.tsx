import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";
import { POPE_TABLE_ROWS } from "@/lib/popeTableData";
import { popeArticlePath } from "@/lib/popeSlugs";

function PopeThumbnail({ name, image }: { name: string; image: string }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return (
      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0" aria-hidden>
        <Crown className="w-4 h-4 text-accent/70" />
      </div>
    );
  }

  return (
    <img
      src={image}
      alt=""
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="w-10 h-10 rounded-full object-cover bg-background-muted shrink-0 border border-border/60"
    />
  );
}

export function PopesTable() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return POPE_TABLE_ROWS;
    return POPE_TABLE_ROWS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.personalName.toLowerCase().includes(q) ||
        p.birthPlace.toLowerCase().includes(q) ||
        String(p.num).includes(q) ||
        p.pontificate.toLowerCase().includes(q) ||
        p.reign.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="my-8 not-prose">
      <label htmlFor="pope-search" className="block text-sm font-medium text-text mb-2">
        Search all {POPE_TABLE_ROWS.length} popes by name, number, dates, or birthplace
      </label>
      <input
        id="pope-search"
        type="search"
        placeholder="e.g. Gregory, Leo XIV, Rome, 1362..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg border border-border bg-background text-text mb-4"
      />
      <p className="text-xs text-text-muted mb-3">
        Showing {filtered.length} of {POPE_TABLE_ROWS.length} popes
      </p>
      <div className="overflow-x-auto rounded-xl border border-border max-h-[70vh] overflow-y-auto shadow-sm">
        <table className="w-full text-sm text-left min-w-[720px]">
          <thead className="bg-accent/10 sticky top-0 z-10">
            <tr>
              <th className="px-3 py-3 font-semibold text-text w-12">Nº</th>
              <th className="px-3 py-3 font-semibold text-text w-14">Photo</th>
              <th className="px-3 py-3 font-semibold text-text min-w-[140px]">Pope</th>
              <th className="px-3 py-3 font-semibold text-text min-w-[180px]">Pontificate</th>
              <th className="px-3 py-3 font-semibold text-text min-w-[160px]">Birthplace</th>
              <th className="px-3 py-3 font-semibold text-text min-w-[120px]">Duration</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((pope) => (
              <tr key={pope.num} className="border-t border-border/60 hover:bg-background-muted/40">
                <td className="px-3 py-2.5 text-text-muted font-medium tabular-nums">{pope.num}</td>
                <td className="px-3 py-2.5">
                  <PopeThumbnail name={pope.name} image={pope.image} />
                </td>
                <td className="px-3 py-2.5 text-text">
                  <Link
                    to={popeArticlePath(pope.slug)}
                    className="text-accent hover:text-accent/80 font-medium hover:underline"
                  >
                    {pope.name}
                  </Link>
                  {pope.personalName && (
                    <span className="block text-xs text-text-muted italic mt-0.5">{pope.personalName}</span>
                  )}
                </td>
                <td className="px-3 py-2.5 text-text-muted">{pope.pontificate}</td>
                <td className="px-3 py-2.5 text-text-muted">{pope.birthPlace || "—"}</td>
                <td className="px-3 py-2.5 text-text-muted whitespace-nowrap">{pope.duration || "—"}</td>
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
