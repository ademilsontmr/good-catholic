import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { MotivationScreen } from "@/components/quiz/MotivationScreen";
import { questions } from "@/data/quizQuestions";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuizSession } from "@/hooks/useQuizSession";

const MOTIVATION_AFTER = [7, 15, 25]; // show after answering question 7, 15, 25

const QuizPage = () => {
  const navigate = useNavigate();
  const { sessionId, session, createSession, updateAnswers, clearSession } = useQuizSession();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showMotivation, setShowMotivation] = useState<number | null>(null);
  const initRef = useRef(false);

  useEffect(() => {
    const initSession = async () => {
      if (initRef.current) return;
      initRef.current = true;
      if (!sessionId) {
        createSession();
      } else if (session) {
        if (session.answers && session.answers.length > 0) {
          if (session.completed_at) {
            clearSession();
            createSession();
          } else {
            setAnswers(session.answers);
            setCurrentQuestion(session.answers.length);
          }
        }
      }
    };
    initSession();
  }, [session]);

  const handleSelectAnswer = useCallback(async (points: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = points;
    setAnswers(newAnswers);

    updateAnswers(newAnswers).catch(err => console.error("Error saving answers:", err));

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;

      if (currentQuestion >= questions.length - 1) {
        // Quiz complete
        navigate("/get-result", {
          state: {
            testType: "spiritual_gifts",
            answers: newAnswers,
            score: newAnswers.reduce((a, b) => a + b, 0),
            maxScore: newAnswers.length * 3,
            localMode: true,
          }
        });
      } else if (MOTIVATION_AFTER.includes(nextQuestion)) {
        // Show motivation screen after question 7, 15, 25
        setShowMotivation(nextQuestion);
      } else {
        setCurrentQuestion(nextQuestion);
      }
    }, 300);
  }, [answers, currentQuestion, navigate, updateAnswers]);

  const handleMotivationContinue = useCallback(() => {
    setShowMotivation(null);
    setCurrentQuestion(prev => prev + 1);
  }, []);

  // Show motivation screen if triggered
  if (showMotivation !== null) {
    return (
      <MotivationScreen
        questionNumber={showMotivation}
        onContinue={handleMotivationContinue}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-text-muted hover:text-text"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>

        <QuizHeader />

        <main className="flex-1 flex flex-col justify-center py-8">
          <ProgressBar current={currentQuestion + 1} total={questions.length} />
          <QuestionCard
            key={currentQuestion}
            question={questions[currentQuestion]}
            selectedAnswer={answers[currentQuestion] ?? null}
            onSelectAnswer={handleSelectAnswer}
          />
        </main>

        <footer className="py-6 text-center">
          <p className="text-sm text-text-muted">
            © 2024 Guide Catholic · All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default QuizPage;
