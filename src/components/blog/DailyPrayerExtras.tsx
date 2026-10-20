import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CLUSTER_LINKS, DAILY_PRAYER_GUIDES, DAILY_PRAYERS_HUB } from "@/data/dailyCatholicPrayers";

function normalizePath(pathname: string): string {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function DailyPrayersHubLink() {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);
  if (path === DAILY_PRAYERS_HUB) return null;

  const guide = DAILY_PRAYER_GUIDES.find((item) => item.href === path);
  const related = (guide?.related ?? CLUSTER_LINKS[path] ?? []).filter((item) => item.href !== path);

  return (
    <aside className="my-10 rounded-xl border border-border bg-background-muted/60 p-5" aria-label="More daily Catholic prayers">
      <p className="text-text leading-relaxed">
        <Link
          to={DAILY_PRAYERS_HUB}
          className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Explore our complete guide to daily Catholic prayers for a practical routine and more traditional prayers.
        </Link>
      </p>
      {related.length > 0 && (
        <p className="mt-3 text-text-muted leading-relaxed">
          Continue with{" "}
          {related.map((item, index) => (
            <span key={item.href}>
              {index > 0 && index === related.length - 1 ? " and " : index > 0 ? ", " : ""}
              <Link
                to={item.href}
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            </span>
          ))}
          .
        </p>
      )}
    </aside>
  );
}

export function SharePage({ title, url }: { title: string; url: string }) {
  const [note, setNote] = useState("");

  async function share() {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setNote("Link copied");
    } catch {
      setNote("Copy the address from the browser bar");
    }
  }

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={share}
        className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-accent hover:bg-background-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Share this guide
      </button>
      {note ? <span className="text-sm text-text-muted">{note}</span> : null}
    </div>
  );
}

export function CopyPrayerButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-4 text-sm font-semibold text-accent underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {copied ? "Copied" : "Copy prayer"}
    </button>
  );
}
