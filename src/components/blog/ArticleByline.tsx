import { Link } from "react-router-dom";

export function ArticleByline() {
  return (
    <p className="text-sm text-text-muted mb-4">
      Written by{" "}
      <Link to="/about/" className="font-semibold text-accent underline underline-offset-2 hover:text-accent/80">
        Guide Catholic
      </Link>
    </p>
  );
}
