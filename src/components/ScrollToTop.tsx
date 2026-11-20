import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Start every page opened from a link (e.g. "Continue Reading") at the top.
 * Back/forward (POP) keeps the browser's own scroll restoration, and #anchor links are left alone.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP" || hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash, navigationType]);

  return null;
}
