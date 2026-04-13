import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Cross, FileText, Clock, CheckCircle, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function QuizIntro() {
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
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Free Catholic Life Assessment</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
                Discover Your Path to
                <span className="text-accent block mt-2">Deeper Catholic Faith</span>
              </h1>
              
              <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                Take our comprehensive 30-question assessment and receive a personalized 10-page spiritual growth guide tailored to your journey.
              </p>
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
            <div className="text-center">
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
