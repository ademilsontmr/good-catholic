import { Heart, Target, BookOpen, Users, Star, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Complete Assessment",
    description: "Evaluate your participation in sacramental life, prayer, and devotions of the Catholic Church.",
  },
  {
    icon: Star,
    title: "Personalized Classification",
    description: "Discover your practitioner level: from 'Beginning of the Journey' to 'Exemplary Catholic'.",
  },
  {
    icon: BookOpen,
    title: "Exclusive Guide",
    description: "Receive a PDF with prayers, devotions, and practical tips to grow in faith.",
  },
  {
    icon: Heart,
    title: "Spiritual Reflection",
    description: "30 questions that will make you reflect on your relationship with God and the Church.",
  },
  {
    icon: Users,
    title: "Faith Community",
    description: "Join thousands of Catholics seeking to live their faith better.",
  },
  {
    icon: Trophy,
    title: "Follow-up",
    description: "Receive exclusive content to continue your spiritual journey.",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why take the quiz?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Discover the Benefits
          </h2>
          <p className="text-text-muted text-lg">
            More than a quiz, an opportunity to reflect and grow in your Christian life.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-surface rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
                <benefit.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-text mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
