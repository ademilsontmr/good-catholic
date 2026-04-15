interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished = "2026-04-14",
  dateModified = "2026-04-14",
  image = "https://guidecatholic.com/favicon.svg",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image,
    author: {
      "@type": "Organization",
      name: "Guide Catholic",
      url: "https://guidecatholic.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Guide Catholic",
      url: "https://guidecatholic.com",
      logo: {
        "@type": "ImageObject",
        url: "https://guidecatholic.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
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
