import { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { Loader2, CheckCircle } from "lucide-react";
import { getResultLevel } from "@/data/quizQuestions";
import type { QuizSessionData } from "./GetResultPage";

const STORAGE_KEY = "gc_quiz_session";

const ResultadoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [sessionData, setSessionData] = useState<QuizSessionData | null>(null);
  const [paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    const sessions = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    // Debug: log what we have
    console.log("URL params:", window.location.search);
    console.log("localStorage pending:", localStorage.getItem("gc_pending_session"));
    console.log("sessionStorage pending:", sessionStorage.getItem("gc_pending_session"));
    console.log("sessions keys:", Object.keys(sessions));

    // 1. PRIMARY: session ID in URL ?sid=xxx
    const sidFromUrl = searchParams.get("sid");
    console.log("sid from URL:", sidFromUrl);
    if (sidFromUrl && sessions[sidFromUrl]) {
      setSessionData(sessions[sidFromUrl]);
      setPaymentVerified(true);
      setLoading(false);
      window.history.replaceState({}, "", "/result/");
      return;
    }

    // 2. FALLBACK A: localStorage pending session
    const pendingLS = localStorage.getItem("gc_pending_session");
    if (pendingLS && sessions[pendingLS]) {
      localStorage.removeItem("gc_pending_session");
      sessionStorage.removeItem("gc_pending_session");
      setSessionData(sessions[pendingLS]);
      setPaymentVerified(true);
      setLoading(false);
      return;
    }

    // 3. FALLBACK B: sessionStorage pending session
    const pendingSS = sessionStorage.getItem("gc_pending_session");
    if (pendingSS && sessions[pendingSS]) {
      localStorage.removeItem("gc_pending_session");
      sessionStorage.removeItem("gc_pending_session");
      setSessionData(sessions[pendingSS]);
      setPaymentVerified(true);
      setLoading(false);
      return;
    }

    // 4. FALLBACK C: most recent session (last resort — within 10 min only)
    const allSessions = Object.entries(sessions) as [string, QuizSessionData][];
    // Clean up old sessions (older than 2 hours)
    const now = Date.now();
    let cleaned = false;
    for (const [key, data] of allSessions) {
      if (now - data.createdAt > 2 * 60 * 60 * 1000) {
        delete sessions[key];
        cleaned = true;
      }
    }
    if (cleaned) localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));

    const freshSessions = Object.entries(sessions) as [string, QuizSessionData][];
    const recent = freshSessions
      .filter(([, d]) => now - d.createdAt < 10 * 60 * 1000) // only within 10 min
      .sort(([, a], [, b]) => b.createdAt - a.createdAt)[0];
    if (recent) {
      console.log("Using most recent session:", recent[0]);
      setSessionData(recent[1]);
      setPaymentVerified(true);
      setLoading(false);
      return;
    }

    // 5. DEV/TEST: direct navigation with location state
    const locationState = location.state as (QuizSessionData & { localMode?: boolean }) | null;
    if (locationState?.localMode && locationState.score !== undefined) {
      setSessionData({
        userName: locationState.userName || "Friend",
        answers: locationState.answers || [],
        score: locationState.score,
        maxScore: locationState.maxScore || 90,
        localMode: true,
        createdAt: Date.now(),
      });
      setLoading(false);
      return;
    }

    // 6. No valid session
    navigate("/quiz", { replace: true });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-accent mx-auto mb-4" />
          <p className="text-text-muted">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!sessionData) return null;

  const maxPoints = sessionData.answers.length * 3 || 90;
  const scorePercent = Math.min(100, Math.round((sessionData.score / maxPoints) * 100));
  const level = getResultLevel(scorePercent);

  return (
    <>
      <Helmet>
        <title>Your Catholic Life Assessment Results - Guide Catholic</title>
        <meta name="description" content="Discover your personalized Catholic spiritual growth plan based on your assessment results." />
        <link rel="canonical" href="https://guidecatholic.com/result/" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <QuizHeader />

        {/* Payment confirmed banner */}
        {paymentVerified && (
          <div className="bg-green-50 border-b border-green-200 py-2">
            <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm text-green-700">
              <CheckCircle className="w-4 h-4" />
              <span>Payment confirmed — your personalized guide is ready!</span>
            </div>
          </div>
        )}

        <ResultScreen
          score={scorePercent}
          level={level}
          userName={sessionData.userName}
          answers={sessionData.answers}
          onRestart={() => navigate("/quiz")}
        />
      </div>
    </>
  );
};

export default ResultadoPage;
