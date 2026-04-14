import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Cross, ArrowRight, Lock, Star, FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LocationState {
  answers: number[];
  score: number;
  maxScore: number;
  localMode: boolean;
}

export default function GetResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If no quiz data, redirect back
  if (!state?.answers) {
    navigate("/quiz");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    // Navigate to result with name included
    setTimeout(() => {
      navigate("/result", {
        state: {
          ...state,
          userName: name.trim(),
        },
      });
    }, 400);
  };

  return (
    <>
      <Helmet>
        <title>Your Results Are Ready | Guide Catholic</title>
        <meta name="robots" content="noindex" />
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

        {/* Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <main className="relative py-16">
          <div className="container mx-auto px-4 max-w-lg">

            {/* Progress indicator */}
            <div className="flex items-center justify-center gap-2 mb-8 text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Quiz completed</span>
              </div>
              <div className="w-8 h-px bg-border" />
              <div className="flex items-center gap-1 text-accent font-medium">
                <span className="w-5 h-5 rounded-full bg-accent text-button-text text-xs flex items-center justify-center font-bold">2</span>
                <span>Get your guide</span>
              </div>
              <div className="w-8 h-px bg-border" />
              <div className="flex items-center gap-1 text-text-muted">
                <span className="w-5 h-5 rounded-full bg-border text-xs flex items-center justify-center font-bold">3</span>
                <span>Results</span>
              </div>
            </div>

            {/* Main card */}
            <div className="bg-surface border border-border rounded-3xl p-8 shadow-lg">

              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-accent" />
              </div>

              <h1 className="font-display text-2xl md:text-3xl font-bold text-text text-center mb-3">
                Your results are ready!
              </h1>
              <p className="text-text-muted text-center mb-8 leading-relaxed">
                Enter your name to personalize your <strong className="text-text">10-page Catholic Life Guide</strong> and unlock your full spiritual assessment.
              </p>

              {/* What's included */}
              <div className="bg-background-muted/50 rounded-2xl p-4 mb-8 space-y-2">
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Personalized spiritual assessment across 5 areas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>10-page PDF guide with your name on the cover</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>7-day personalized spiritual action plan</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-muted">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Prayers, saints, and practices for your level</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Your first name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Michael"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-text placeholder:text-text-muted"
                    required
                    autoFocus
                  />
                </div>

                {/* Price */}
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-2xl p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium text-text">One-time payment</span>
                    <Star className="w-4 h-4 text-accent fill-accent" />
                  </div>
                  <div className="font-display text-4xl font-bold text-text">
                    $15<span className="text-lg text-text-muted font-normal">.00</span>
                  </div>
                  <p className="text-xs text-text-muted mt-1">USD · No subscription · No hidden fees</p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg group"
                  disabled={!name.trim() || isSubmitting}
                >
                  {isSubmitting ? "Loading..." : "Get My Personalized Guide"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                  <Lock className="w-3 h-3" />
                  <span>Secure payment · Instant access</span>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
