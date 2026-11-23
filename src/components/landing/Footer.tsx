import { Link } from "react-router-dom";
import { Cross, CircleDot, Heart } from "lucide-react";

type FooterLink = { to: string; label: string };

/**
 * Every target is a real, indexable page listed in public/sitemap.xml.
 * Columns follow what readers search for most (Bing/Search Console) and the coming liturgical dates;
 * refresh the "Church Year" column as the seasons change.
 */
const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Holy Rosary",
    links: [
      { to: "/rosary/", label: "Pray the Rosary Online" },
      { to: "/blog/how-to-pray-the-rosary-step-by-step/", label: "How to Pray the Rosary" },
      { to: "/blog/how-to-pray-the-rosary-complete-guide/", label: "Mysteries by Day" },
      { to: "/blog/joyful-mysteries-of-the-rosary/", label: "Joyful Mysteries" },
      { to: "/blog/sorrowful-mysteries-of-the-rosary/", label: "Sorrowful Mysteries" },
      { to: "/blog/glorious-mysteries-of-the-rosary/", label: "Glorious Mysteries" },
      { to: "/blog/luminous-mysteries-of-the-rosary/", label: "Luminous Mysteries" },
    ],
  },
  {
    title: "Prayers",
    links: [
      { to: "/blog/complete-catholic-prayer-guide/", label: "Catholic Prayers" },
      { to: "/blog/our-father-prayer/", label: "Our Father" },
      { to: "/blog/hail-mary-prayer/", label: "Hail Mary" },
      { to: "/blog/hail-holy-queen-prayer/", label: "Hail Holy Queen" },
      { to: "/blog/saint-michael-prayer/", label: "St. Michael Prayer" },
      { to: "/blog/divine-mercy-chaplet/", label: "Divine Mercy Chaplet" },
      { to: "/blog/how-to-pray-a-novena-guide/", label: "How to Pray a Novena" },
    ],
  },
  {
    title: "Church Year",
    links: [
      { to: "/blog/advent/", label: "Advent 2026" },
      { to: "/blog/immaculate-conception/", label: "Immaculate Conception" },
      { to: "/blog/our-lady-of-guadalupe/", label: "Our Lady of Guadalupe" },
      { to: "/blog/catholic-christmas/", label: "Catholic Christmas" },
      { to: "/blog/holy-days-of-obligation-2027-usa/", label: "Holy Days of Obligation 2027" },
      { to: "/blog/ash-wednesday/", label: "Ash Wednesday 2027" },
      { to: "/blog/catholic-feast-days/", label: "Feast Days Calendar" },
    ],
  },
  {
    title: "Learn the Faith",
    links: [
      { to: "/blog/what-do-catholics-believe/", label: "What Catholics Believe" },
      { to: "/blog/catholic-church-hierarchy/", label: "Church Hierarchy" },
      { to: "/blog/complete-guide-to-the-catholic-mass/", label: "The Catholic Mass" },
      { to: "/blog/complete-guide-to-catholic-confession/", label: "Confession" },
      { to: "/blog/seven-deadly-sins/", label: "Seven Deadly Sins" },
      { to: "/blog/ten-commandments-catholic/", label: "Ten Commandments" },
      { to: "/blog/catholic-last-rites-explained/", label: "Last Rites" },
      { to: "/blog/what-is-purgatory/", label: "Purgatory" },
    ],
  },
  {
    title: "Saints & Popes",
    links: [
      { to: "/blog/saint-of-the-day/", label: "Saint of the Day" },
      { to: "/blog/catholic-saints-list/", label: "Catholic Saints List" },
      { to: "/blog/list-of-saints-and-what-they-protect/", label: "Patron Saints" },
      { to: "/blog/us-saints-and-blesseds/", label: "US Saints & Blesseds" },
      { to: "/blog/list-of-all-popes-catholic-complete-guide/", label: "List of Popes" },
    ],
  },
  {
    title: "Scripture & Tools",
    links: [
      { to: "/daily-verses/", label: "Verse of the Day" },
      { to: "/random-bible-verse/", label: "Random Bible Verse" },
      { to: "/blog/lectio-divina-how-to-practice/", label: "Lectio Divina" },
      { to: "/lockscreen/", label: "Lockscreen Wallpapers" },
      { to: "/quiz-intro/", label: "Catholic Life Assessment" },
    ],
  },
];

const LEGAL: FooterLink[] = [
  { to: "/about/", label: "About Us" },
  { to: "/contact/", label: "Contact" },
  { to: "/blog/", label: "All Articles" },
  { to: "/terms/", label: "Terms of Use" },
  { to: "/privacy/", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-button-text">
      <div className="container mx-auto px-4 pt-12 pb-8">
        {/* Brand and main actions */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-10 border-b border-button-text/20">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-2 mb-3" aria-label="Guide Catholic home">
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </span>
              <span className="font-display text-2xl font-bold">Guide Catholic</span>
            </Link>
            <p className="text-button-text/75 text-sm leading-relaxed">
              Catholic prayers, the Rosary, saints and the Church year, explained clearly and faithfully, with free tools for your
              daily prayer.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/rosary/"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-button-text hover:opacity-90 transition-opacity"
            >
              <CircleDot className="w-4 h-4" /> Pray the Rosary
            </Link>
            <Link
              to="/quiz-intro/"
              className="inline-flex items-center rounded-xl border border-button-text/40 px-5 py-3 text-sm font-semibold hover:bg-button-text/10 transition-colors"
            >
              Take the Catholic Life Assessment
            </Link>
            <Link
              to="/donate/"
              className="inline-flex items-center gap-2 rounded-xl border border-red-300/60 px-5 py-3 text-sm font-semibold text-red-200 hover:bg-red-300/10 transition-colors"
            >
              <Heart className="w-4 h-4" /> Donate
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 py-10">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-button-text/70">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-button-text transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal bar */}
        <div className="border-t border-button-text/20 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-button-text/60">
          <nav aria-label="Site information">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {LEGAL.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-button-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:text-right">
            <p>© 2026 Guide Catholic. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for the glory of God</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
