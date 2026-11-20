/** Legacy blog URLs that 301 to canonical paths (Cloudflare _redirects + sitemap exclude). */
export const BLOG_REDIRECT_ALIASES = [
  { from: "/blog/what-is-purgatory-guide/", to: "/blog/what-is-purgatory/" },
  { from: "/blog/lectio-divina/", to: "/blog/lectio-divina-how-to-practice/" },
  { from: "/blog/how-to-pray-rosary/", to: "/blog/rosary-complete-guide/" },
  { from: "/blog/guardian-angels/", to: "/blog/guardian-angels-guide/" },
  { from: "/blog/list-of-all-popes-catholic-guide/", to: "/blog/list-of-all-popes-catholic-complete-guide/" },
  { from: "/blog/what-is-advent/", to: "/blog/advent/" },
  { from: "/blog/what-is-rcia-for-adults/", to: "/blog/what-is-rcia-explained/" },
];

export const BLOG_REDIRECT_ALIAS_PATHS = new Set(BLOG_REDIRECT_ALIASES.map((r) => r.from));
