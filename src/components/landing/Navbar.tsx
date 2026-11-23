import { Link } from "react-router-dom";
import { Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { to: "/rosary/", label: "Rosary" },
  { to: "/blog/", label: "Blog" },
  { to: "/daily-verses/", label: "Daily Verse" },
  { to: "/random-bible-verse/", label: "Random Bible Verse" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-2 h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 md:gap-2 shrink-0" aria-label="Guide Catholic home">
            <div className="w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full bg-gradient-accent flex items-center justify-center">
              <Cross className="w-4 h-4 text-button-text" />
            </div>
            {/* Below 360px only the icon shows, so the three buttons always fit */}
            <span className="font-display text-base min-[400px]:text-lg md:text-xl font-bold text-accent whitespace-nowrap max-[359px]:sr-only">
              Guide Catholic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-text-muted hover:text-text transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate/"
              className="text-red-700 hover:text-red-800 font-semibold transition-colors"
            >
              Donate
            </Link>
            <Link to="/quiz-intro/">
              <Button className="bg-gradient-accent hover:opacity-90 text-button-text font-semibold">
                Take the Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile: Donate, Quiz, Menu */}
          <div className="flex md:hidden items-center gap-1 min-[400px]:gap-1.5 shrink-0">
            <Link
              to="/donate/"
              className="inline-flex items-center h-9 px-3 min-[400px]:px-3.5 rounded-full bg-button hover:bg-button-hover text-button-text text-[13px] min-[400px]:text-sm font-semibold transition-colors"
            >
              Donate
            </Link>
            <Link
              to="/quiz-intro/"
              className="inline-flex items-center h-9 px-3 min-[400px]:px-3.5 rounded-full bg-accent hover:opacity-90 text-accent-foreground text-[13px] min-[400px]:text-sm font-semibold transition-opacity"
            >
              Quiz
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center h-10 px-2.5 min-[400px]:px-3 rounded-xl border border-border bg-surface text-text text-[13px] min-[400px]:text-sm hover:bg-background-muted transition-colors"
                >
                  Menu
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="font-display text-accent">Guide Catholic</SheetTitle>
                <div className="mt-6 flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <SheetClose asChild key={link.to}>
                      <Link to={link.to} className="py-3 border-b border-border/60 text-text hover:text-accent transition-colors">
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link to="/donate/" className="py-3 border-b border-border/60 text-red-700 font-semibold">
                      Donate
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/quiz-intro/" className="mt-6">
                      <Button className="w-full bg-gradient-accent hover:opacity-90 text-button-text font-semibold">
                        Take the Quiz
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
