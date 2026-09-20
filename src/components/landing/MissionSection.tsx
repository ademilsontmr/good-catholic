import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Church, HandHeart, Sparkles } from "lucide-react";

const PILLARS = [
  {
    title: "How to Pray the Rosary",
    description: "A complete step-by-step guide to the mysteries, prayers, and daily rhythm of the Rosary.",
    href: "/blog/rosary-complete-guide/",
    icon: Sparkles,
  },
  {
    title: "How to Go to Confession",
    description: "Prepare well for the sacrament of Reconciliation with clear steps and examination tips.",
    href: "/blog/how-to-go-to-confession/",
    icon: HandHeart,
  },
  {
    title: "What Is Purgatory?",
    description: "Understand Church teaching on purification, mercy, and prayer for the faithful departed.",
    href: "/blog/what-is-purgatory/",
    icon: Church,
  },
  {
    title: "Lectio Divina",
    description: "Learn a simple Catholic method for praying with Scripture in daily life.",
    href: "/blog/lectio-divina-how-to-practice/",
    icon: BookOpen,
  },
  {
    title: "The Seven Sacraments",
    description: "A clear overview of how Christ continues to act in the life of the Church.",
    href: "/blog/seven-sacraments/",
    icon: Church,
  },
  {
    title: "Divine Mercy Chaplet",
    description: "Pray the Chaplet with the full text and guidance for ordinary days and difficult ones.",
    href: "/blog/divine-mercy-chaplet/",
    icon: HandHeart,
  },
] as const;

/** Editorial mission + pillar guides for homepage content depth */
export function MissionSection() {
  return (
    <section id="mission" className="py-16 md:py-20 bg-surface border-y border-border/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Free Catholic resources
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mb-4 leading-tight">
            Guides for prayer, the sacraments, and everyday faith
          </h2>
          <p className="text-text-muted text-base md:text-lg leading-relaxed mb-4">
            Guide Catholic publishes original Catholic articles and prayer guides so you can grow
            with clarity—not just inspiration. Start with a pillar guide below, browse the{" "}
            <Link to="/blog/" className="text-primary font-semibold hover:underline">
              full library
            </Link>
            , or learn more{" "}
            <Link to="/about/" className="text-primary font-semibold hover:underline">
              about our mission
            </Link>
            .
          </p>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            We write for Catholics who want practical help with the Rosary, Confession, Mass,
            Scripture, and living the liturgical year at home—always pointing back to Christ and
            the teaching of the Church.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className="group rounded-xl border border-border/50 bg-background p-5 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <Icon className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-3">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read guide
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
