import { Link, useLocation } from "react-router-dom";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

export function ArticleByline() {
  const { pathname } = useLocation();

  return (
    <>
      <BlogArticleAd key={pathname} />
      <p className="text-sm text-text-muted mb-4">
        Written by{" "}
        <Link to="/about/" className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80">
          Guide Catholic
        </Link>
      </p>
    </>
  );
}
