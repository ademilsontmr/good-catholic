import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { ResultScreen } from "@/components/quiz/ResultScreen";
import { calculateNormalizedScore, getResultLevel } from "@/data/quizQuestions";
import { useQuizSession } from "@/hooks/useQuizSession";
import { Loader2, Lock, Clock, AlertTriangle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type PaymentStatus = "processing" | "approved" | "paid" | "expired" | "cancelled" | "failed";

interface PaymentData {
  id: string;
  status: PaymentStatus;
  customer_name: string;
  quiz_answers: number[] | null;
  score: number | null;
  access_token: string;
}

interface LocationState {
  testType?: string;
  score?: number;
  answers?: number[];
  maxScore?: number;
  localMode?: boolean;
}

const ResultadoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { sessionId, session, loading, clearSession } = useQuizSession();
  const [isLoadingPayment, setIsLoadingPayment] = useState(true);
  const [payment, setPayment] = useState<PaymentData | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const locationState = location.state as LocationState | null;
  const isLocalMode = locationState?.localMode === true;

  // Load payment by token - this is the source of truth
  useEffect(() => {
    // Skip payment check in local mode
    if (isLocalMode) {
      setIsLoadingPayment(false);
      return;
    }

    const tokenFromUrl = searchParams.get("token");
    const tokenFromStorage = localStorage.getItem("payment_access_token");
    const token = tokenFromUrl || tokenFromStorage;

    if (token) {
      loadPaymentByToken(token);
    } else {
      // No token - redirect to quiz
      setIsLoadingPayment(false);
    }
  }, [searchParams, isLocalMode]);

  const loadPaymentByToken = async (token: string) => {
    setIsLoadingPayment(true);
    setPaymentError(null);

    try {
      const { data, error } = await supabase
        .from("payments")
        .select("id, status, customer_name, quiz_answers, score, access_token")
        .eq("access_token", token)
        .maybeSingle();

      if (error) {
        console.error("Error loading payment:", error);
        setPaymentError("Error loading payment.");
        return;
      }

      if (data) {
        setPayment(data as PaymentData);
        // Store token for future visits
        localStorage.setItem("payment_access_token", token);
      } else {
        setPaymentError("Payment not found.");
      }
    } catch (err) {
      console.error("Error loading payment:", err);
      setPaymentError("Error loading payment.");
    } finally {
      setIsLoadingPayment(false);
    }
  };

  // Redirect if no data source at all
  useEffect(() => {
    // Skip redirect in local mode if we have answers
    if (isLocalMode && locationState?.answers && locationState.answers.length > 0) {
      return;
    }

    const token = searchParams.get("token") || localStorage.getItem("payment_access_token");
    if (!loading && !isLoadingPayment && !token && !isLocalMode) {
      navigate("/quiz");
    }
  }, [loading, isLoadingPayment, searchParams, navigate, isLocalMode, locationState]);

  const handleRestart = () => {
    // Clear all payment data
    localStorage.removeItem("payment_id");
    localStorage.removeItem("payment_access_token");
    localStorage.removeItem("billing_url");
    localStorage.removeItem("pix_code");
    localStorage.removeItem("checkout_customer_data");
    clearSession();
    navigate("/quiz");
  };

  const handleGoToPayment = () => {
    navigate("/payment");
  };

  const handleCheckPayment = async () => {
    const token = searchParams.get("token") || localStorage.getItem("payment_access_token");
    if (token) {
      await loadPaymentByToken(token);
    }
  };

  // Loading state
  if (loading || isLoadingPayment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-text-muted">Loading result...</p>
        </div>
      </div>
    );
  }

  // LOCAL MODE - Show result directly without payment check
  if (isLocalMode && locationState?.answers && locationState.answers.length > 0) {
    const answers = locationState.answers;
    const userName = "Catholic Friend";
    const totalPoints = answers.reduce((sum: number, points: number) => sum + (points || 0), 0);
    const normalizedScore = calculateNormalizedScore(totalPoints);
    const resultLevel = getResultLevel(normalizedScore);

    return (
      <div className="min-h-screen bg-background">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative min-h-screen flex flex-col">
          <main className="flex-1 flex flex-col justify-center py-8">
            <ResultScreen
              score={normalizedScore}
              level={resultLevel}
              userName={userName}
              answers={answers}
              onRestart={handleRestart}
            />
          </main>

          <footer className="py-6 text-center">
            <p className="text-sm text-text-muted">
              © 2024 Good Catholic · All rights reserved
            </p>
          </footer>
        </div>
      </div>
    );
  }

  // Error state - no payment found
  if (paymentError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-surface rounded-2xl shadow-soft p-8 md:p-12 border border-border/50 max-w-md text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background-muted mb-6">
            <Lock className="w-10 h-10 text-text-muted" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
            {paymentError}
          </h2>
          <p className="text-text-muted mb-6">We couldn't find a payment associated with this link.</p>
          <Button onClick={() => navigate("/quiz")} className="w-full">
            Take the Quiz
          </Button>
        </div>
      </div>
    );
  }

  // No payment data at all
  if (!payment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="bg-surface rounded-2xl shadow-soft p-8 md:p-12 border border-border/50 max-w-md text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background-muted mb-6">
            <Lock className="w-10 h-10 text-text-muted" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">Restricted Access</h2>
          <p className="text-text-muted mb-6">This result is premium. Complete the payment to access.</p>
          <Button onClick={() => navigate("/quiz")} className="w-full">
            Take the Quiz
          </Button>
        </div>
      </div>
    );
  }

  // CRITICAL: Block access if payment is NOT "approved"
  // Fonte da verdade: status no Supabase (atualizado pelo webhook)
  const normalizedStatus: PaymentStatus = payment.status === "paid" ? "approved" : payment.status;

  if (normalizedStatus !== "approved") {
    // Determine the appropriate UI based on payment status
    const getStatusUI = () => {
      switch (normalizedStatus) {
        case "processing":
          return {
            icon: <Clock className="w-10 h-10 text-accent" />,
            title: "Payment Pending",
            message:
              "Your payment has not been approved yet. Once confirmed, your premium result will be unlocked.",
            showCheckButton: true,
            showPaymentButton: true,
          };
        case "expired":
          return {
            icon: <AlertTriangle className="w-10 h-10 text-warning" />,
            title: "Payment Expired",
            message:
              "The payment deadline has expired. Please generate a new payment to access your result.",
            showCheckButton: false,
            showPaymentButton: true,
          };
        case "cancelled":
          return {
            icon: <XCircle className="w-10 h-10 text-error" />,
            title: "Payment Cancelled",
            message:
              "This payment was cancelled. Please generate a new payment to access your result.",
            showCheckButton: false,
            showPaymentButton: true,
          };
        case "failed":
          return {
            icon: <XCircle className="w-10 h-10 text-error" />,
            title: "Payment Failed",
            message:
              "There was a problem with the payment. Please try again with a new payment.",
            showCheckButton: false,
            showPaymentButton: true,
          };
        default:
          return {
            icon: <Lock className="w-10 h-10 text-text-muted" />,
            title: "Result Blocked",
            message: "This result is premium. Complete the payment to access.",
            showCheckButton: false,
            showPaymentButton: true,
          };
      }
    };

    const statusUI = getStatusUI();

    return (
      <div className="min-h-screen bg-background">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
          <div className="bg-surface rounded-2xl shadow-soft p-8 md:p-12 border border-border/50 max-w-md text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background-muted mb-6">
              {statusUI.icon}
            </div>

            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">{statusUI.title}</h2>

            <p className="text-text-muted mb-6">{statusUI.message}</p>

            {statusUI.showCheckButton && (
              <Button onClick={handleCheckPayment} variant="outline" className="w-full h-12 mb-4">
                Check Payment
              </Button>
            )}

            {statusUI.showPaymentButton && (
              <Button
                onClick={handleGoToPayment}
                className="w-full h-12 bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold text-lg shadow-glow transition-all duration-300 mb-4"
              >
                {normalizedStatus === "processing" ? "Back to Checkout" : "Generate New Payment"}
              </Button>
            )}

            <Button onClick={handleRestart} variant="ghost" className="text-text-muted">
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // APPROVED - Show the result
  // Get answers from payment data (source of truth from backend)
  const answers = payment.quiz_answers || [];
  const userName = payment.customer_name || "Católico";

  // Calculate results
  const totalPoints = answers.reduce((sum: number, points: number) => sum + (points || 0), 0);
  const normalizedScore = calculateNormalizedScore(totalPoints);
  const resultLevel = getResultLevel(normalizedScore);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col justify-center py-8">
          <ResultScreen
            score={normalizedScore}
            level={resultLevel}
            userName={userName}
            answers={answers}
            onRestart={handleRestart}
          />
        </main>

        <footer className="py-6 text-center">
          <p className="text-sm text-text-muted">
            © 2024 Good Catholic · All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ResultadoPage;
