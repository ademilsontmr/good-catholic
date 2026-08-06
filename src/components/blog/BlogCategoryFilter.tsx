import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, LayoutGrid } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const MOBILE_INLINE_LIMIT = 6;

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
  compact?: boolean;
}

function CategoryChip({ label, count, isActive, onClick, compact }: CategoryChipProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
        isActive
          ? "bg-accent text-button-text shadow-sm"
          : "bg-background-muted text-text-muted hover:bg-accent/10 hover:text-text"
      )}
    >
      <span className="whitespace-nowrap">{label}</span>
      {count !== undefined && (
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[10px] font-semibold leading-none tabular-nums",
            isActive ? "bg-button-text/20 text-button-text" : "bg-background text-text-muted"
          )}
        >
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

export function BlogCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  filteredCount,
}: BlogCategoryFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const { canScrollLeft, canScrollRight } = useScrollFades(scrollRef);

  const totalPosts = categories.reduce((sum, c) => sum + c.count, 0);
  const isAllSelected = selectedCategory === "All";
  const selectedInOverflow =
    !isAllSelected && !categories.slice(0, MOBILE_INLINE_LIMIT).some((c) => c.name === selectedCategory);

  const mobileInlineCategories = (() => {
    const top = categories.slice(0, MOBILE_INLINE_LIMIT);
    if (!selectedInOverflow) return top;
    const selected = categories.find((c) => c.name === selectedCategory);
    if (!selected) return top;
    return [...top.slice(0, MOBILE_INLINE_LIMIT - 1), selected];
  })();

  const mobileOverflowCategories = categories.filter(
    (c) => !mobileInlineCategories.some((inline) => inline.name === c.name)
  );

  const handleSelect = (category: string) => {
    onCategoryChange(category);
    setMoreOpen(false);
  };

  useEffect(() => {
    if (!scrollRef.current || selectedCategory === "All") return;
    const active = scrollRef.current.querySelector<HTMLElement>('[aria-selected="true"]');
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [selectedCategory]);

  const resultLabel =
    filteredCount === totalPosts
      ? `${totalPosts} articles`
      : `${filteredCount} of ${totalPosts} articles`;

  return (
    <div className="mb-10">
      {/* Desktop & tablet — wrapped chips, no horizontal scroll */}
      <div
        className="hidden md:flex flex-wrap justify-center gap-2 max-w-5xl mx-auto"
        role="tablist"
        aria-label="Filter blog by category"
      >
        <CategoryChip
          label="All"
          count={totalPosts}
          isActive={isAllSelected}
          onClick={() => handleSelect("All")}
        />
        {categories.map((category) => (
          <CategoryChip
            key={category.name}
            label={category.name}
            count={category.count}
            isActive={selectedCategory === category.name}
            onClick={() => handleSelect(category.name)}
          />
        ))}
      </div>

      {/* Mobile — compact scroll row + overflow popover */}
      <div className="md:hidden">
        <div className="relative -mx-4">
          {canScrollLeft && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent"
            />
          )}
          {canScrollRight && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent"
            />
          )}

          <div
            ref={scrollRef}
            className="scrollbar-none flex gap-2 overflow-x-auto px-4 pb-1 snap-x snap-mandatory"
            role="tablist"
            aria-label="Filter blog by category"
          >
            <CategoryChip
              label="All"
              count={totalPosts}
              isActive={isAllSelected}
              onClick={() => handleSelect("All")}
              compact
            />
            {mobileInlineCategories.map((category) => (
              <CategoryChip
                key={category.name}
                label={category.name}
                count={category.count}
                isActive={selectedCategory === category.name}
                onClick={() => handleSelect(category.name)}
                compact
              />
            ))}

            {mobileOverflowCategories.length > 0 && (
              <Popover open={moreOpen} onOpenChange={setMoreOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex shrink-0 snap-start items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                      selectedInOverflow
                        ? "bg-accent text-button-text shadow-sm"
                        : "border border-border bg-surface text-text-muted hover:border-accent/40 hover:text-text"
                    )}
                    aria-expanded={moreOpen}
                    aria-haspopup="dialog"
                  >
                    <LayoutGrid className="h-3.5 w-3.5 shrink-0" />
                    <span className="whitespace-nowrap">
                      {selectedInOverflow ? selectedCategory : "More"}
                    </span>
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 shrink-0 transition-transform", moreOpen && "rotate-180")}
                    />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  align="center"
                  sideOffset={8}
                  className="w-[min(calc(100vw-2rem),22rem)] p-3"
                >
                  <p className="mb-3 text-xs font-medium text-text-muted">All categories</p>
                  <div className="grid max-h-64 grid-cols-1 gap-1.5 overflow-y-auto sm:grid-cols-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        type="button"
                        onClick={() => handleSelect(category.name)}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                          selectedCategory === category.name
                            ? "bg-accent/15 font-medium text-accent"
                            : "text-text hover:bg-background-muted"
                        )}
                      >
                        <span className="min-w-0 truncate">{category.name}</span>
                        <span className="shrink-0 text-xs tabular-nums text-text-muted">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-text-muted">{resultLabel}</p>
      </div>

      {/* Desktop result count */}
      <p className="mt-4 hidden text-center text-sm text-text-muted md:block">{resultLabel}</p>
    </div>
  );
}
