import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/** In-article unit. The adsbygoogle.js loader already lives in index.html. */
export function BlogArticleAd() {
  const { pathname } = useLocation();
  const pushed = useRef(false);
  const isArticle = /^\/blog\/.+/.test(pathname);

  useEffect(() => {
    if (!isArticle || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // A second push against the same unit throws. Ignore it.
    }
  }, [isArticle]);

  if (!isArticle) return null;

  return (
    <div className="mb-6" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7369074864505211"
        data-ad-slot="6851981166"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
