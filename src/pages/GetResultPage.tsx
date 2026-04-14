import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Cross, ArrowRight, Lock, Star, FileText, CheckCircle, Shield, Clock, Gift } from "lucide-react";
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

  if (!state?.answers) {
    navigate("/quiz");
    return null;
  }

  // Calculate a teaser score range to create curiosity
  const rawScore = state.score;
  const maxScore = state.maxScore;
  const percent = Math.round((rawScore / maxScore) * 100);
  const isHigh = percent >= 70;
  const isMid = percent >= 40 && percent < 70;

  const teaserMessage = isHigh
    ? "Your score is above average — you have a strong foundation to build on."
    : isMid
    ? "Your score reveals specific areas where you can grow significantly."
    : "Your score shows a real opportunity for spiritual transformation.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      navigate("/result", {
        state: { ...state, userName: name.trim() },
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

        <main className="relative py-10 pb-20">
          <div className="container mx-auto px-4 max-w-xl">

            {/* Urgency banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3 mb-6">
              <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <p className="text-sm text-amber-800">
                <strong>Your results are waiting.</strong> Complete your order to unlock your personalized guide.
              </p>
            </div>

            {/* Score teaser */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 mb-6 text-center">
              <p className="text-sm text-text-muted uppercase tracking-wide font-medium mb-4">Your Catholic Life Assessment Score</p>

              {/* Circular score */}
              <div className="relative w-36 h-36 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="10" className="text-border" />
                  <circle
                    cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - percent / 100)}`}
                    className="text-accent/30 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-4xl font-bold text-text blur-sm select-none">??%</span>
                  <span className="text-xs text-text-muted">score</span>
                </div>
              </div>

              {/* Level badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 ${
                isHigh ? "bg-green-100 text-green-700" :
                isMid ? "bg-amber-100 text-amber-700" :
                "bg-blue-100 text-blue-700"
              }`}>
                <span>{isHigh ? "🌟" : isMid ? "📈" : "🌱"}</span>
                <span>{isHigh ? "Strong Foundation" : isMid ? "Growing Catholic" : "Beginning the Journey"}</span>
              </div>

              <p className="text-sm text-text-muted italic mb-3">{teaserMessage}</p>

              {/* Blurred area breakdown teaser */}
              <div className="mt-4 space-y-2 text-left">
                {[
                  { name: "Eucharistic Life", show: true },
                  { name: "Prayer Life", show: false },
                  { name: "Formation", show: false },
                  { name: "Devotions", show: false },
                  { name: "Christian Witness", show: false },
                ].map((area, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-text-muted w-32 flex-shrink-0">{area.name}</span>
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${area.show ? "bg-accent" : "bg-accent/30 blur-sm"}`}
                        style={{ width: area.show ? `${Math.min(100, Math.max(20, percent + (i * 7 - 14)))}%` : "100%" }}
                      />
                    </div>
                    <span className={`text-xs font-bold w-8 text-right ${area.show ? "text-text" : "text-text-muted blur-sm select-none"}`}>
                      {area.show ? `${Math.min(100, Math.max(20, percent + (i * 7 - 14)))}%` : "??%"}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-accent font-semibold mt-3">🔒 Unlock your full breakdown below</p>
            </div>

            {/* Main card */}
            <div className="bg-surface border border-border rounded-3xl p-8 shadow-lg">

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h1 className="font-display text-xl font-bold text-text leading-tight">
                    Get Your Personalized Catholic Life Guide
                  </h1>
                  <p className="text-sm text-text-muted">10 pages · Instant download · Made for you</p>
                </div>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-2 mb-6 p-3 bg-background-muted/50 rounded-xl">
                <div className="flex -space-x-2">
                  {["S", "M", "E", "D"].map((l, i) => (
                    <div key={i} className="w-7 h-7 rounded-full bg-accent/20 border-2 border-surface flex items-center justify-center text-xs font-bold text-accent">
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-text-muted">
                  <strong className="text-text">12,847 Catholics</strong> have already received their guide
                </p>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-6">
                <p className="text-sm font-semibold text-text">What's included in your guide:</p>
                {[
                  { icon: "📊", text: "Full breakdown of your score across 5 spiritual areas" },
                  { icon: "🙏", text: "Personalized prayers and devotions for your level" },
                  { icon: "📅", text: "7-day spiritual action plan tailored to your results" },
                  { icon: "✝️", text: "Sacramental guidance and recommended practices" },
                  { icon: "📖", text: "10-page PDF with your name on the cover" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                    <p className="text-sm text-text-muted">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 mb-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-text-muted italic">
                  "The guide was exactly what I needed. It showed me where I was strong and where I needed to grow. Worth every penny."
                </p>
                <p className="text-xs text-text-muted mt-2 font-medium">— Sarah M., Austin TX</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Your first name <span className="text-text-muted font-normal">(for your personalized guide)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Michael"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none text-text placeholder:text-text-muted text-lg"
                    required
                    autoFocus
                  />
                </div>

                {/* Price block */}
                <div className="border-2 border-accent/30 rounded-2xl p-4 bg-gradient-to-br from-accent/5 to-primary/5">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm text-text-muted line-through">$29.00</p>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-4xl font-bold text-text">$15</span>
                        <span className="text-text-muted">.00 USD</span>
                      </div>
                    </div>
                    <div className="bg-accent text-button-text text-xs font-bold px-3 py-1 rounded-full">
                      48% OFF
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Gift className="w-3 h-3 text-accent" />
                    <span>One-time payment · No subscription · No hidden fees</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold group bg-accent hover:bg-accent/90 text-button-text"
                  disabled={!name.trim() || isSubmitting}
                >
                  {isSubmitting ? "Loading your results..." : "Unlock My Full Results →"}
                </Button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 text-xs text-text-muted pt-1">
                  <div className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Instant access</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Money-back guarantee</span>
                  </div>
                </div>
              </form>
            </div>

            {/* FAQ mini */}
            <div className="mt-6 space-y-3">
              {[
                { q: "What happens after I pay?", a: "You get instant access to your full results and can download your personalized PDF guide immediately." },
                { q: "Is this a subscription?", a: "No. This is a one-time payment of $15. You will never be charged again." },
                { q: "What if I'm not satisfied?", a: "We offer a full refund within 7 days, no questions asked." },
              ].map((item, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl p-4">
                  <p className="text-sm font-semibold text-text mb-1">{item.q}</p>
                  <p className="text-sm text-text-muted">{item.a}</p>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </>
  );
}
