import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cross, BookOpen, ChevronRight } from "lucide-react";
export function HeroSection() {
  return <section className="relative flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{
        animationDelay: "1s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-text">Free Catholic guides</span>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow animate-float">
              <Cross className="w-8 h-8 text-accent-foreground" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft animate-float" style={{
            animationDelay: "0.5s"
          }}>
              <BookOpen className="w-8 h-8 text-button-text" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-5 leading-tight animate-slide-up">
            Catholic guides for prayer, Scripture, and the sacraments
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-text-muted mb-8 max-w-2xl mx-auto animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            Read original articles on the Mass, Confession, the Rosary, the saints, and daily Catholic life. Then open today’s verse or take the faith assessment if you want a next step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
            <Link to="/blog/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 group">
                Read the guides
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link
              to="/daily-verses/"
              className="text-primary font-medium hover:underline"
            >
              Verse of the day
            </Link>
            <Link
              to="/random-bible-verse/"
              className="text-primary font-medium hover:underline"
            >
              Random Bible verse
            </Link>
          </div>
        </div>
      </div>

    </section>;
}