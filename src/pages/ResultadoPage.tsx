import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { Loader2 } from "lucide-react";

interface LocationState {
  score?: number;
  answers?: Record<number, string>;
  localMode?: boolean;
}

const ResultadoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    const locationState = location.state as LocationState | null;

    // Check if we have data from location state (local mode)
    if (locationState?.localMode && locationState.score !== undefined) {
      setScore(locationState.score);
      setAnswers(locationState.answers || {});
      setLoading(false);
      return;
    }

    // If no data, redirect to quiz
    navigate("/quiz", { replace: true });
  }, [location.state, navigate]);

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

  if (score === null) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Your Catholic Life Assessment Results - Guide Catholic</title>
        <meta name="description" content="Discover your personalized Catholic spiritual growth plan based on your assessment results." />
        <link rel="canonical" href="https://guidecatholic.com/result/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <QuizHeader />
        <ResultScreen 
          score={score} 
          answers={answers}
          onRetakeQuiz={() => navigate("/quiz")}
        />
      </div>
    </>
  );
};

export default ResultadoPage;
