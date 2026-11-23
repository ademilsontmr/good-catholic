import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const TOP_SLOT = "6851981166";

/** In-article unit. The adsbygoogle.js loader already lives in index.html. */
export function BlogArticleAd({ slot = TOP_SLOT, onlyOnBlog = true }: { slot?: string; onlyOnBlog?: boolean }) {
  const { pathname } = useLocation();
  const pushed = useRef(false);
  const isArticle = !onlyOnBlog || /^\/blog\/.+/.test(pathname);

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
    // Reserve the height the responsive unit actually takes so the page does not jump when it fills:
    // on phones AdSense serves a full-width square (as tall as the screen is wide), elsewhere 280px.
    <div className="ad-slot mb-6" aria-label="Advertisement">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7369074864505211"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
