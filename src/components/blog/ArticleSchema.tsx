import { Helmet } from "react-helmet-async";
import { ARTICLE_DATES, ARTICLE_UPDATED } from "@/data/articleDates";

const MAX_HEADLINE = 110;

/** Article headline for JSON-LD: drop a trailing " — subtitle" (then ": subtitle") when the title is too long. */
function articleHeadline(title: string): string {
  if (title.length <= MAX_HEADLINE) return title;
  for (const sep of [" — ", " – ", ": "]) {
    const head = title.slice(0, title.lastIndexOf(sep));
    if (title.includes(sep) && head.length >= 30 && head.length <= MAX_HEADLINE) return head;
  }
  return title.slice(0, MAX_HEADLINE).replace(/\s+\S*$/, "");
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = "Guide Catholic",
  image = "https://guidecatholic.com/og-image.png",
}: ArticleSchemaProps) {
  // Fall back to the blog listing date so every Article has datePublished and dateModified.
  const slug = url.match(/\/blog\/([^/]+)\/?$/)?.[1];
  const listedDate = slug ? ARTICLE_DATES[slug] : undefined;
  datePublished = datePublished ?? listedDate;
  // The page's last real change (git) wins, but never earlier than the publish date.
  const changed = slug ? ARTICLE_UPDATED[slug] : undefined;
  dateModified = [changed, dateModified, datePublished].filter(Boolean).sort().pop();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleHeadline(title),
    description,
    url,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    image,
    author: {
      "@type": "Organization",
      name: author === "Guide Catholic" ? "Guide Catholic Editorial Team" : author,
      url: "https://guidecatholic.com/about/",
    },
    publisher: {
      "@type": "Organization",
      name: "Guide Catholic",
      url: "https://guidecatholic.com",
      logo: {
        "@type": "ImageObject",
        url: "https://guidecatholic.com/favicon-192.png",
        width: 192,
        height: 192,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <>
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration e.g. "PT20M"
  url: string;
}

export function HowToSchema({ name, description, steps, totalTime, url }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    ...(totalTime && { totalTime }),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
    author: {
      "@type": "Organization",
      name: "Guide Catholic",
      url: "https://guidecatholic.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
