import { useEffect } from "react";

/**
 * AdSense auto ads are loaded by an inline script in index.html, which skips
 * these paths. Keep NO_ADS_PATH in sync with the regex there.
 */
const NO_ADS_PATH = /^\/quiz(-intro)?(\/|$)/;
const ADSENSE_SRC = "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
const ADSENSE_URL = `https://${ADSENSE_SRC}?client=ca-pub-7369074864505211`;

function adSenseLoaded(): boolean {
  return !!document.querySelector(`script[src*="${ADSENSE_SRC}"]`);
}

function loadAdSense(): void {
  if (adSenseLoaded()) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = ADSENSE_URL;
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
}

/**
 * Keeps ad-free pages ad-free across client-side navigation.
 *
 * Auto ads can't be switched off once adsbygoogle.js has run, so a reader who
 * reaches the quiz from an article (script already loaded) gets one full
 * reload of the same URL; index.html then skips the loader. Leaving for a
 * normal page loads the script there, so that page gets its ads back.
 */
export function useNoAds(): void {
  useEffect(() => {
    if (adSenseLoaded()) {
      window.location.reload();
      return;
    }
    return () => {
      // Runs after the router has moved to the next URL.
      if (!NO_ADS_PATH.test(window.location.pathname)) loadAdSense();
    };
  }, []);
}
