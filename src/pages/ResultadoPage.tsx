import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
    // 1. Check for Stripe redirect — look for pending session in localStorage
    const pendingSessionId = localStorage.getItem("gc_pending_session");

    if (pendingSessionId) {
      const sessions = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      const data: QuizSessionData = sessions[pendingSessionId];

      if (data) {
        // Clear pending flag
        localStorage.removeItem("gc_pending_session");
        setSessionData(data);
        setPaymentVerified(true);
        setLoading(false);
        return;
      }
    }

    // 2. Check for direct navigation with location state (dev/test mode)
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

    // 3. No valid session — redirect to quiz
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
