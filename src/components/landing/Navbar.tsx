import { Link } from "react-router-dom";
import { Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
              <Cross className="w-4 h-4 text-button-text" />
            </div>
            <span className="font-display text-xl font-bold text-accent">Guide Catholic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/blog"
              className="text-text-muted hover:text-text transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/about/"
              className="text-text-muted hover:text-text transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact/"
              className="text-text-muted hover:text-text transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/daily-verses"
              className="text-text-muted hover:text-text transition-colors"
            >
              Daily Verse
            </Link>
            <Link
              to="/random-bible-verse/"
              className="text-text-muted hover:text-text transition-colors"
            >
              Random Bible Verse
            </Link>
            <Link
              to="/donate/"
              className="text-red-700 hover:text-red-800 font-semibold transition-colors"
            >
              Donate
            </Link>
            <Link to="/quiz-intro">
              <Button className="bg-gradient-accent hover:opacity-90 text-button-text font-semibold">
                Take the Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile: Take the Quiz button */}
          <div className="md:hidden">
            <Link to="/quiz-intro">
              <Button size="sm" className="bg-gradient-accent hover:opacity-90 text-button-text font-semibold">
                Take the Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
