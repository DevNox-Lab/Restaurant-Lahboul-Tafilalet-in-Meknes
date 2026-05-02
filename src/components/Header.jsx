import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessData } from "../data/businessData";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Rooftop", href: "#experience" },
  { label: "Reservations", href: "#reservations" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-950/95 backdrop-blur-md border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.png"
              alt="Restaurant Lahboul Tafilalet"
              className="h-11 md:h-14 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-amber-100 font-serif text-lg font-semibold leading-tight">
                Lahboul Tafilalet
              </p>
              <p className="text-amber-500/70 text-xs tracking-wider uppercase">
                Meknes
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-amber-200/80 hover:text-amber-100 transition-colors rounded-lg hover:bg-amber-900/20"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={businessData.contact.phoneHref}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-full transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={businessData.contact.phoneHref}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 bg-amber-600 hover:bg-amber-500 text-white rounded-full transition-colors"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-amber-200 hover:text-amber-100 rounded-lg hover:bg-amber-900/20 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-warm-950/98 border-t border-amber-900/20"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-amber-200/80 hover:text-amber-100 hover:bg-amber-900/20 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
