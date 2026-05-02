import { Camera, ExternalLink, Phone, Mail } from "lucide-react";
import { businessData } from "../data/businessData";

export default function Footer() {
  const { contact, location } = businessData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-warm-950 border-t border-amber-900/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Restaurant Lahboul Tafilalet"
                className="h-14 w-auto object-contain"
              />
              <div>
                <p className="text-amber-100 font-serif font-semibold">
                  Lahboul Tafilalet
                </p>
                <p className="text-amber-500/50 text-xs uppercase tracking-wider">
                  Meknes, Morocco
                </p>
              </div>
            </div>
            <p className="text-amber-200/40 text-sm leading-relaxed">
              Authentic Moroccan rooftop dining in the heart of Meknes. Traditional
              cuisine, warm hospitality, unforgettable views.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-100 font-semibold text-sm mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Reservations", href: "#reservations" },
                { label: "Reviews", href: "#reviews" },
                { label: "Location", href: "#location" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-amber-200/40 hover:text-amber-300 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-100 font-semibold text-sm mb-4">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2 text-amber-200/40 hover:text-amber-300 text-sm transition-colors"
              >
                <Phone size={14} />
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-amber-200/40 hover:text-amber-300 text-sm transition-colors break-all"
              >
                <Mail size={14} className="shrink-0" />
                {contact.email}
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-amber-100 font-semibold text-sm mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-amber-900/30 hover:bg-amber-900/50 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href={contact.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-amber-900/30 hover:bg-amber-900/50 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors"
                aria-label="Threads"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-900/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/30 text-sm">
            &copy; {year} {businessData.name}. All rights reserved.
          </p>
          <p className="text-amber-200/20 text-xs">
            {location.fullAddress}
          </p>
        </div>
      </div>
    </footer>
  );
}
