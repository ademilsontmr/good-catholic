import { Link } from "react-router-dom";
import { Cross, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-button-text py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Cross className="w-5 h-5 text-button-text" />
              </div>
              <span className="font-display text-2xl font-bold">Guide Catholic</span>
            </div>
            <p className="text-button-text/70 max-w-md mb-6">
              Helping Catholics live their faith more deeply and consciously.
              Content, prayers, and tools for your spiritual journey.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-button-text/10 flex items-center justify-center hover:bg-button-text/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-button-text/10 flex items-center justify-center hover:bg-button-text/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-button-text/10 flex items-center justify-center hover:bg-button-text/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quiz</h4>
            <ul className="space-y-2 text-button-text/70">
              <li>
                <Link to="/quiz" className="hover:text-button-text transition-colors">
                  Take the Quiz
                </Link>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-button-text transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-button-text transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-button-text transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/daily-verses" className="hover:text-button-text transition-colors">
                  Daily Verse
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-button-text/70">
              <li>
                <Link to="/terms/" className="hover:text-button-text transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy/" className="hover:text-button-text transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-button-text transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-button-text/20 mt-12 pt-8 text-center text-sm text-button-text/60">
          <p>© 2024 Guide Catholic. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ for the glory of God
          </p>
        </div>
      </div>
    </footer>
  );
}
