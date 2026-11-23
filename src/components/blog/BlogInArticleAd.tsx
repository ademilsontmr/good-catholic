import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { BlogArticleAd } from "@/components/blog/BlogArticleAd";

const SLOT = "4247667421";

const BOX_TAGS = new Set(["ASIDE", "HEADER", "NAV", "TABLE", "LI", "BLOCKQUOTE", "FIGURE", "DETAILS"]);

/** True when the paragraph sits inside a styled box (answer box, callout, card, table…) within the article. */
function insideBox(paragraph: HTMLElement, article: HTMLElement) {
  for (let el = paragraph.parentElement; el && el !== article; el = el.parentElement) {
    if (BOX_TAGS.has(el.tagName)) return true;
    if (/(^|\s)(bg-|border(\s|-|$)|rounded)/.test(el.className || "")) return true;
  }
  return false;
}

function contentParagraphs(article: HTMLElement) {
  return [...article.querySelectorAll("p")].filter((paragraph) => {
    if (paragraph.closest("[data-in-article-ad]")) return false;
    if (paragraph.closest("[aria-label='Advertisement']")) return false;
    // Never drop the ad into the yellow answer box or any other box: only plain body paragraphs.
    if (insideBox(paragraph, article)) return false;
    const text = (paragraph.textContent || "").replace(/\s+/g, " ").trim();
    if (text.startsWith("Written by")) return false;
    return text.length > 0;
  });
}

/** Places one in-article unit after the third plain body paragraph. The loader stays in index.html. */
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
