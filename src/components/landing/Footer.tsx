import { Link } from "react-router-dom";
import { Cross } from "lucide-react";

type FooterLink = { to: string; label: string; highlight?: boolean };

/** Every target is a real, indexable page listed in public/sitemap.xml. */
const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Explore",
    links: [
      { to: "/quiz-intro/", label: "Catholic Life Assessment" },
      { to: "/blog/", label: "Blog" },
      { to: "/blog/complete-catholic-prayer-guide/", label: "Catholic Prayers" },
      { to: "/blog/how-to-pray-the-rosary-complete-guide/", label: "How to Pray the Rosary" },
      { to: "/blog/catholic-feast-days/", label: "Feast Days" },
    ],
  },
  {
    title: "Saints",
    links: [
      { to: "/blog/saint-of-the-day/", label: "Saint of the Day" },
      { to: "/blog/list-of-saints-and-what-they-protect/", label: "Patron Saints" },
      { to: "/blog/us-saints-and-blesseds/", label: "US Saints & Blesseds" },
      { to: "/blog/list-of-all-popes-catholic-complete-guide/", label: "List of Popes" },
    ],
  },
  {
    title: "Scripture",
    links: [
      { to: "/daily-verses/", label: "Daily Verse" },
      { to: "/random-bible-verse/", label: "Random Bible Verse" },
      { to: "/lockscreen/", label: "Lockscreen Wallpapers" },
    ],
  },
  {
    title: "About",
    links: [
      { to: "/about/", label: "About Us" },
      { to: "/contact/", label: "Contact" },
      { to: "/donate/", label: "Donate", highlight: true },
      { to: "/terms/", label: "Terms of Use" },
      { to: "/privacy/", label: "Privacy Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-button-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4" aria-label="Guide Catholic home">
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </span>
              <span className="font-display text-2xl font-bold">Guide Catholic</span>
            </Link>
            <p className="text-button-text/70 max-w-md text-sm">
              Helping Catholics live their faith more deeply and consciously.
              Content, prayers, and tools for your spiritual journey.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-button-text/70">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={
                        link.highlight
                          ? "font-semibold text-red-300 hover:text-button-text transition-colors"
                          : "hover:text-button-text transition-colors"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-button-text/20 mt-12 pt-8 text-center text-sm text-button-text/60">
          <p>© 2026 Guide Catholic. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for the glory of God</p>
        </div>
      </div>
    </footer>
  );
}
