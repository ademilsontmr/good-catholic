import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

/** How many categories sit in the row next to "All" (the rest live in the "All topics" panel). */
const INLINE_LIMIT = 6;
/** Categories with at least this many articles are listed as main topics in the panel. */
const MAIN_TOPIC_MIN = 10;

export interface CategoryItem {
  name: string;
  count: number;
}

interface BlogCategoryFilterProps {
  categories: CategoryItem[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  filteredCount: number;
}

interface CategoryChipProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

function CategoryChip({ label, count, isActive, onClick, className }: CategoryChipProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 snap-start items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        isActive
          ? "border-accent bg-accent text-button-text shadow-sm"
          : "border-border/70 bg-surface text-text-muted hover:border-accent/50 hover:text-text",
        className
      )}
    >
      <span className="whitespace-nowrap">{label}</span>
      {count !== undefined && (
        <span className={cn("text-xs tabular-nums", isActive ? "text-button-text/80" : "text-text-muted/70")}>
          {count}
        </span>
      )}
    </button>
  );
}

function useScrollFades(scrollRef: React.RefObject<HTMLDivElement | null>) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [scrollRef, update]);

  return { canScrollLeft, canScrollRight };
}

interface TopicPanelProps {
  categories: CategoryItem[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

/** Searchable list of every category: main topics by size, then smaller topics A–Z. */
function TopicPanel({ categories, selectedCategory, onSelect }: TopicPanelProps) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const matches = categories.filter((c) => !q || c.name.toLowerCase().includes(q));
  const main = matches.filter((c) => c.count >= MAIN_TOPIC_MIN);
  const smaller = matches
    .filter((c) => c.count < MAIN_TOPIC_MIN)
    .sort((a, b) => a.name.localeCompare(b.name));

  const section = (title: string, items: CategoryItem[]) =>
    items.length > 0 && (
      <div>
        <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-text-muted">{title}</p>
        <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((category) => {
            const active = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(category.name)}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  active ? "bg-accent/15 font-semibold text-accent" : "text-text hover:bg-background-muted"
                )}
              >
                <span className="min-w-0 truncate">{category.name}</span>
                <span className="shrink-0 text-xs tabular-nums text-text-muted">{category.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a topic…"
          aria-label="Find a topic"
          className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-3 text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </label>
      <div className="max-h-[min(60vh,26rem)] space-y-5 overflow-y-auto pr-1">
        {section("Main topics", main)}
        {section("More topics", smaller)}
        {matches.length === 0 && <p className="px-1 py-6 text-center text-sm text-text-muted">No topic matches “{query}”.</p>}
      </div>
    </div>
  );
}

export function BlogCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  filteredCount,
}: BlogCategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const { canScrollLeft, canScrollRight } = useScrollFades(scrollRef);

  const totalPosts = categories.reduce((sum, c) => sum + c.count, 0);
  const isAllSelected = selectedCategory === "All";

  // Row = largest categories; a selected category from the panel moves to the front so it stays visible.
  const inlineCategories = useMemo(() => {
    const top = categories.slice(0, INLINE_LIMIT);
    if (isAllSelected || top.some((c) => c.name === selectedCategory)) return top;
    const selected = categories.find((c) => c.name === selectedCategory);
    return selected ? [selected, ...top.slice(0, INLINE_LIMIT - 1)] : top;
  }, [categories, selectedCategory, isAllSelected]);
  const hiddenCount = categories.length - inlineCategories.length;

  const handleSelect = (category: string) => {
    onCategoryChange(category);
    setPanelOpen(false);
  };

  useEffect(() => {
    if (!scrollRef.current || isAllSelected) return;
    const active = scrollRef.current.querySelector<HTMLElement>('[aria-pressed="true"]');
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selectedCategory, isAllSelected]);

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 md:justify-center">
        <div className="relative -ml-4 min-w-0 flex-1 md:ml-0 md:flex-none">
          {canScrollLeft && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:hidden"
            />
          )}
          {canScrollRight && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent md:hidden"
            />
          )}

          {/* One row: scrolls sideways on phones, wraps (centered) from tablet up */}
          <div
            ref={scrollRef}
            role="group"
            aria-label="Filter blog by category"
            className="scrollbar-none flex snap-x scroll-pl-4 gap-2 overflow-x-auto py-1 pl-4 pr-2 md:flex-wrap md:justify-center md:overflow-visible md:px-0"
          >
            <CategoryChip label="All" count={totalPosts} isActive={isAllSelected} onClick={() => handleSelect("All")} />
            {inlineCategories.map((category, index) => (
              <CategoryChip
                key={category.name}
                label={category.name}
                count={category.count}
                isActive={selectedCategory === category.name}
                onClick={() => handleSelect(category.name)}
                // Keep the row to one line from tablet up: 2 chips on md, 4 on lg, 5 on xl, 6 on 2xl
                className={cn(
                  index >= 2 && "md:hidden lg:inline-flex",
                  index >= 4 && "lg:hidden xl:inline-flex",
                  index >= 5 && "xl:hidden 2xl:inline-flex"
                )}
              />
            ))}
          </div>
        </div>
        <Popover open={panelOpen} onOpenChange={setPanelOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-expanded={panelOpen}
              aria-haspopup="dialog"
              className={cn(
                "inline-flex shrink-0 snap-start items-center gap-1.5 rounded-full border border-dashed px-3.5 py-1.5 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                panelOpen
                  ? "border-accent bg-accent/10 text-text"
                  : "border-border bg-transparent text-text hover:border-accent/60"
              )}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span className="whitespace-nowrap">
                <span className="sm:hidden">Topics</span>
                <span className="hidden sm:inline">All topics</span>
              </span>
              <span className="hidden text-xs tabular-nums text-text-muted sm:inline">{categories.length}</span>
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", panelOpen && "rotate-180")} />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            sideOffset={10}
            collisionPadding={16}
            // Don't focus the search box on touch screens: it would pop the keyboard over the list
            onOpenAutoFocus={(e) => {
              if (window.matchMedia("(pointer: coarse)").matches) e.preventDefault();
            }}
            className="w-[min(calc(100vw-2rem),46rem)] p-4"
          >
            <TopicPanel categories={categories} selectedCategory={selectedCategory} onSelect={handleSelect} />
          </PopoverContent>
        </Popover>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-text-muted">
        {isAllSelected ? (
          <span>
            {totalPosts.toLocaleString("en-US")} articles
            {hiddenCount > 0 && <span className="hidden sm:inline"> · {categories.length} topics</span>}
          </span>
        ) : (
          <>
            <span>
              <span className="font-semibold text-text">{filteredCount.toLocaleString("en-US")}</span> in{" "}
              <span className="font-semibold text-text">{selectedCategory}</span>
            </span>
            <button
              type="button"
              onClick={() => handleSelect("All")}
              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-accent hover:bg-accent/10"
            >
              <X className="h-3 w-3" />
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
}
