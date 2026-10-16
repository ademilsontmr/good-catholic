import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

const SLOT = "4247667421";

function contentParagraphs(article: HTMLElement) {
  return [...article.querySelectorAll("p")].filter((paragraph) => {
    if (paragraph.closest("[data-in-article-ad]")) return false;
    if (paragraph.closest("[aria-label='Advertisement']")) return false;
    if (paragraph.closest("nav")) return false;
    const text = (paragraph.textContent || "").replace(/\s+/g, " ").trim();
    if (text.startsWith("Written by")) return false;
    return text.length > 0;
  });
}

/** Places one in-article unit after the third paragraph. The loader stays in index.html. */
export function BlogInArticleAd() {
  const { pathname } = useLocation();
  const [host, setHost] = useState<HTMLElement | null>(null);
  const isArticle = /^\/blog\/.+/.test(pathname);

  useLayoutEffect(() => {
    if (!isArticle) return;
    const article = document.querySelector("article");
    if (!article) return;
    const third = contentParagraphs(article)[2];
    if (!third) return;
    const mount = document.createElement("div");
    mount.dataset.inArticleAd = "true";
    third.insertAdjacentElement("afterend", mount);
    setHost(mount);
    return () => {
      mount.remove();
      setHost(null);
    };
  }, [isArticle, pathname]);

  if (!host) return null;
  return createPortal(<BlogArticleAd slot={SLOT} />, host);
}
