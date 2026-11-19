const SITE = "https://guidecatholic.com";

interface CollectionItem {
  name: string;
  /** Site-relative path, e.g. "/blog/saint-of-the-day/may-29/" */
  path: string;
}

interface CollectionPageSchemaProps {
  name: string;
  description: string;
  /** Site-relative path of the hub page, with trailing slash */
  path: string;
  /** Last breadcrumb label (Home › Blog › this). Omit when the page is /blog/ itself. */
  breadcrumbName?: string;
  items: CollectionItem[];
  /** Order of `items` on the page */
  order?: "ascending" | "descending";
}

/** JSON-LD for blog hub pages: CollectionPage + ItemList of its articles + BreadcrumbList. */
export function CollectionPageSchema({
  name,
  description,
  path,
  breadcrumbName,
  items,
  order = "ascending",
}: CollectionPageSchemaProps) {
  const url = `${SITE}${path}`;
  const breadcrumbs = [
    { name: "Home", item: `${SITE}/` },
    { name: "Blog", item: `${SITE}/blog/` },
    ...(breadcrumbName ? [{ name: breadcrumbName, item: url }] : []),
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: "Guide Catholic", url: `${SITE}/` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#itemlist` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        name,
        numberOfItems: items.length,
        itemListOrder:
          order === "ascending" ? "https://schema.org/ItemListOrderAscending" : "https://schema.org/ItemListOrderDescending",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: `${SITE}${item.path}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          ...crumb,
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
