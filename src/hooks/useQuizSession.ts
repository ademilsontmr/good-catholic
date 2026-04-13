import { useState, useEffect, useCallback } from "react";

const SESSION_KEY = "quiz_session_id";
const ANSWERS_KEY = "quiz_answers";
const SCORE_KEY = "quiz_score";

interface QuizSession {
  id: string;
  answers: Record<number, string>;
  score: number | null;
  paid: boolean;
  created_at: string;
}

export const useQuizSession = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [session, setSession] = useState<QuizSession | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load session from localStorage on mount
  useEffect(() => {
    const storedSessionId = localStorage.getItem(SESSION_KEY);
    if (storedSessionId) {
      setSessionId(storedSessionId);
      loadSession(storedSessionId);
    }
  }, []);

  const loadSession = useCallback(async (id: string) => {
    try {
      setLoading(true);
      const answers = JSON.parse(localStorage.getItem(ANSWERS_KEY) || "{}");
      const score = localStorage.getItem(SCORE_KEY);
      
      const sessionData: QuizSession = {
        id,
        answers,
        score: score ? parseFloat(score) : null,
        paid: false,
        created_at: new Date().toISOString(),
      };
      
      setSession(sessionData);
      setError(null);
    } catch (err) {
      console.error("Error loading session:", err);
      setError("Failed to load session");
    } finally {
      setLoading(false);
    }
  }, []);

  const createSession = useCallback(async () => {
    try {
      setLoading(true);
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      localStorage.setItem(SESSION_KEY, newSessionId);
      localStorage.setItem(ANSWERS_KEY, "{}");
      localStorage.removeItem(SCORE_KEY);
      
      setSessionId(newSessionId);
      await loadSession(newSessionId);
      
      return newSessionId;
    } catch (err) {
      console.error("Error creating session:", err);
      setError("Failed to create session");
      return null;
    } finally {
      setLoading(false);
    }
  }, [loadSession]);

  const updateAnswers = useCallback(async (answers: Record<number, string>) => {
    if (!sessionId) return;

    try {
      localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
      
      if (session) {
        setSession({ ...session, answers });
      }
    } catch (err) {
      console.error("Error updating answers:", err);
      setError("Failed to update answers");
    }
  }, [sessionId, session]);

  const updateScore = useCallback(async (score: number) => {
    if (!sessionId) return;

    try {
      localStorage.setItem(SCORE_KEY, score.toString());
      
      if (session) {
        setSession({ ...session, score });
      }
    } catch (err) {
      console.error("Error updating score:", err);
      setError("Failed to update score");
    }
  }, [sessionId, session]);

  const markAsPaid = useCallback(async () => {
    if (!sessionId) return;

    try {
      if (session) {
        setSession({ ...session, paid: true });
      }
    } catch (err) {
      console.error("Error marking as paid:", err);
      setError("Failed to mark as paid");
    }
  }, [sessionId, session]);

  const clearSession = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(ANSWERS_KEY);
    localStorage.removeItem(SCORE_KEY);
    setSessionId(null);
    setSession(null);
  }, []);

  return {
    sessionId,
    session,
    loading,
    error,
    createSession,
    updateAnswers,
    updateScore,
    markAsPaid,
    clearSession,
  };
};
