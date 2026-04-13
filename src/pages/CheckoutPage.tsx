import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface LocationState {
  score?: number;
  answers?: Record<number, string>;
  localMode?: boolean;
}

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const locationState = location.state as LocationState | null;

  useEffect(() => {
    // Redirect directly to result page in local mode
    if (locationState?.localMode) {
      navigate("/result", { 
        state: locationState,
        replace: true 
      });
    } else {
      // If no local mode, redirect to quiz
      navigate("/quiz", { replace: true });
    }
  }, [locationState, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-text-muted">Redirecting...</p>
    </div>
  );
};

export default CheckoutPage;
