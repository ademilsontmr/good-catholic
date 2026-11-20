import { Link, useLocation } from "react-router-dom";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { BlogInArticleAd } from "@/components/blog/BlogInArticleAd";
import { ARTICLE_UPDATED } from "@/data/articleDates";

/** "November 19, 2026" — formatted in UTC so the prerendered HTML and the browser agree. */
function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function ArticleByline() {
  const { pathname } = useLocation();
  const slug = pathname.match(/^\/blog\/([^/]+)\/?$/)?.[1];
  const updated = slug ? ARTICLE_UPDATED[slug] : undefined;

  return (
    <>
      <BlogArticleAd key={`top-ad-${pathname}`} />
      <BlogInArticleAd key={`in-article-ad-${pathname}`} />
      <p className="text-sm text-text-muted mb-4">
        By{" "}
        <Link to="/about/" className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80">
          Guide Catholic Editorial Team
        </Link>
        {updated && (
          <>
            {" · "}Updated <time dateTime={updated}>{formatDate(updated)}</time>
          </>
        )}
      </p>
    </>
  );
}
