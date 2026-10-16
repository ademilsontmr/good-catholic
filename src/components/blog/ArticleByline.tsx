import { Link, useLocation } from "react-router-dom";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";
import { BlogInArticleAd } from "@/components/blog/BlogInArticleAd";

export function ArticleByline() {
  const { pathname } = useLocation();

  return (
    <>
      <BlogArticleAd key={pathname} />
      <BlogInArticleAd key={pathname} />
      <p className="text-sm text-text-muted mb-4">
        Written by{" "}
        <Link to="/about/" className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80">
          Guide Catholic
        </Link>
      </p>
    </>
  );
}
