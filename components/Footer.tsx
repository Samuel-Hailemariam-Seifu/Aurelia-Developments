"use client";

import Link from "next/link";

const developments = [
  "The Residences at Aurelia",
  "Aurelia Tower",
  "Aurelia Heights",
  "Aurelia Plaza",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-off-white mb-6 tracking-wide">
              AURELIA
            </h3>
            <p className="text-sm text-warm-gray leading-relaxed mb-6">
              Architecting Landmark Living
            </p>
            <div className="space-y-2 text-sm text-warm-gray">
              <p>123 Park Avenue</p>
              <p>New York, NY 10017</p>
              <p className="mt-4">+1 (212) 555-0100</p>
              <p>info@aureliadevelopments.com</p>
            </div>
          </div>

          {/* Developments */}
          <div>
            <h4 className="text-sm font-semibold text-off-white mb-6 uppercase tracking-wider">
              Developments
            </h4>
            <ul className="space-y-3 text-sm">
              {developments.map((development) => (
                <li key={development}>
                  <Link
                    href="/developments"
                    className="text-warm-gray hover:text-bronze transition-colors"
                  >
                    {development}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-off-white mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-warm-gray hover:text-bronze transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#process"
                  className="text-warm-gray hover:text-bronze transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-warm-gray hover:text-bronze transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-off-white mb-6 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-warm-gray hover:text-bronze transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-warm-gray hover:text-bronze transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-warm-gray hover:text-bronze transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bronze/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-warm-gray">
            <p>© {new Date().getFullYear()} Aurelia Developments. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              Luxury Real Estate Development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
