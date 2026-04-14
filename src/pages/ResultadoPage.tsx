import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { Loader2 } from "lucide-react";
import { getResultLevel } from "@/data/quizQuestions";

interface LocationState {
  score?: number;
  answers?: number[];
  localMode?: boolean;
  userName?: string;
}

const ResultadoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const locationState = location.state as LocationState | null;

    if (locationState?.localMode && locationState.score !== undefined) {
      setScore(locationState.score);
      setAnswers(locationState.answers || []);
      setUserName(locationState.userName || "Friend");
      setLoading(false);
      return;
    }

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

  if (score === null) return null;

  const maxScore = answers.length * 3;
  const normalizedScore = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const level = getResultLevel(normalizedScore);

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
        <ResultScreen
          score={score}
          level={level}
          userName={userName}
          answers={answers}
          onRestart={() => navigate("/quiz")}
        />
      </div>
    </>
  );
};

export default ResultadoPage;
