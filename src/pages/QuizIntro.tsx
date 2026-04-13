import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Cross, FileText, Clock, CheckCircle, ArrowRight, Download, Sparkles, Users, Star, TrendingUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function QuizIntro() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the assessment take?",
      answer: "The assessment takes approximately 10 minutes to complete. You can pause and resume at any time."
    },
    {
      question: "Do I really need to create an account?",
      answer: "No! You can start immediately without any registration. Just answer the questions and get your personalized guide instantly."
    },
    {
      question: "Is the guide really personalized?",
      answer: "Yes! Your guide is customized based on your answers across 5 spiritual areas: Eucharistic Life, Prayer Life, Formation, Devotions, and Christian Witness."
    },
    {
      question: "What's included in the 10-page PDF guide?",
      answer: "Your guide includes: personalized spiritual assessment, recommended prayers, sacramental guidance, daily and weekly action plans, and teachings from the Catholic Church."
    }
  ];

  const miniTestimonials = [
    { name: "Sarah M.", rating: 5, text: "Life-changing assessment!" },
    { name: "Michael T.", rating: 5, text: "Exactly what I needed for my faith journey." },
    { name: "Emily R.", rating: 5, text: "The personalized guide is incredible!" }
  ];

  return (
    <>
      <Helmet>
        <title>Take Your Catholic Life Assessment - Guide Catholic</title>
        <meta name="description" content="Discover your spiritual strengths and areas for growth with our comprehensive Catholic life assessment. Get your personalized 10-page guide instantly." />
        <link rel="canonical" href="https://guidecatholic.com/quiz-intro/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-button-text py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-xl font-bold">Guide Catholic</span>
            </Link>
          </div>
        </header>

        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Main Content */}
        <main className="relative py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Catholic Life Assessment</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
                Discover Your Path to
                <span className="text-accent block mt-2">Deeper Catholic Faith</span>
              </h1>
              
              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-8">
                Take our comprehensive 30-question assessment and receive a personalized 10-page spiritual growth guide tailored to your journey.
              </p>

              {/* CTA Above the Fold */}
              <Link to="/quiz">
                <Button size="lg" className="text-lg px-8 py-6 h-auto group mb-6">
                  Start Your Assessment Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Social Proof Counter */}
              <div className="flex items-center justify-center gap-6 text-sm text-text-muted mb-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span><strong className="text-text">12,847</strong> Catholics assessed</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span><strong className="text-text">234</strong> today</span>
                </div>
              </div>

              {/* Mini Testimonials */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                {miniTestimonials.map((testimonial, index) => (
                  <div key={index} className="bg-surface border border-border rounded-lg px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-text-muted">"{testimonial.text}" - {testimonial.name}</span>
                  </div>
                ))}
              </div>

              {/* Urgency Element */}
              <div className="mt-6 inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                <span>⚡ Start now and get your guide in 10 minutes</span>
              </div>
            </div>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-text mb-2">
                  10 Minutes
                </h3>
                <p className="text-text-muted text-sm">
                  Quick and easy assessment that fits into your busy schedule
                </p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-text mb-2">
                  10-Page Guide
                </h3>
                <p className="text-text-muted text-sm">
                  Comprehensive personalized guide with prayers, teachings, and practices
                </p>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-text mb-2">
                  No Account Needed
                </h3>
                <p className="text-text-muted text-sm">
                  Start immediately - no registration, no email required
                </p>
              </div>
            </div>

            {/* What You'll Receive */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Download className="w-8 h-8 text-accent" />
                <h2 className="font-display text-2xl md:text-3xl font-bold text-text">
                  What You'll Receive
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-text-muted">
                    <strong className="text-text">Personalized Assessment:</strong> Detailed analysis of your spiritual life across 5 key areas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-text-muted">
                    <strong className="text-text">10-Page PDF Guide:</strong> Complete with prayers, sacraments, devotions, and Church teachings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-text-muted">
                    <strong className="text-text">Practical Action Plan:</strong> Daily and weekly spiritual practices tailored to your level
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-text-muted">
                    <strong className="text-text">Instant Access:</strong> Download your guide immediately after completing the assessment
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-12">
              <Link to="/quiz">
                <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                  Start Your Assessment Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <p className="text-sm text-text-muted mt-4">
                ✓ No Registration  •  ✓ Instant Results
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text text-center mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4 max-w-2xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-background-muted transition-colors"
                    >
                      <span className="font-semibold text-text">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-accent transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-4 pb-4 text-text-muted">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-border">
              <div className="text-center">
                <p className="text-text-muted mb-6">
                  Based on Catholic Church teachings and the Catechism
                </p>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>30 Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>5 Spiritual Areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Personalized Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Downloadable PDF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Urgency CTA */}
            <div className="mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 rounded-3xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-text mb-3">
                Ready to Transform Your Spiritual Life?
              </h3>
              <p className="text-text-muted mb-6">
                Join thousands of Catholics who have already discovered their personalized path to holiness.
              </p>
              <Link to="/quiz">
                <Button size="lg" className="text-lg px-8 py-6 h-auto group">
                  Begin Your Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="text-xs text-text-muted mt-4">
                ⏱️ Takes only 10 minutes • 🎁 Get instant access to your guide
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-text-muted">
              © 2024 Guide Catholic · All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
