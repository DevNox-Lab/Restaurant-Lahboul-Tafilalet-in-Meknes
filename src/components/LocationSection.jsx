import {
  MapPin,
  Phone,
  Mail,
  Camera,
  Clock,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

export default function LocationSection() {
  const { location, contact, hours } = businessData;

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section id="location" className="py-16 sm:py-20 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Find Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Visit Us in Meknes
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto text-base sm:text-lg">
            Centrally located on Avenue Lahboul with free parking — we're easy to
            find and ready to welcome you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-8">
          {/* Map area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl overflow-hidden border border-warm-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <img
                  src={images.meknes}
                  alt="Meknes, Morocco — location of Restaurant Lahboul Tafilalet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-warm-900/20 to-transparent" />

                {/* Info overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 flex items-center justify-center shrink-0 shadow-lg">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-serif text-base sm:text-lg font-semibold">
                        {businessData.name}
                      </p>
                      <p className="text-white/70 text-sm">
                        {location.fullAddress}
                      </p>
                    </div>
                  </div>
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm sm:text-base rounded-full transition-colors shadow-md"
                  >
                    <Navigation size={16} />
                    Open Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact & Hours — stacked cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-warm-200 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-warm-900 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 text-warm-600 hover:text-amber-700 transition-colors"
                >
                  <Phone size={18} className="text-amber-600 shrink-0" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-warm-600 hover:text-amber-700 transition-colors"
                >
                  <Mail size={18} className="text-amber-600 shrink-0" />
                  <span className="text-sm truncate">{contact.email}</span>
                </a>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-600 hover:text-amber-700 transition-colors"
                >
                  <Camera size={18} className="text-amber-600 shrink-0" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href={contact.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-600 hover:text-amber-700 transition-colors"
                >
                  <ExternalLink size={18} className="text-amber-600 shrink-0" />
                  <span className="text-sm">Threads</span>
                </a>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-warm-200 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-warm-900 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-amber-600" />
                Opening Hours
              </h3>
              <div className="space-y-1.5">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className={`flex justify-between text-sm py-1.5 px-2.5 sm:px-3 rounded-lg ${
                      h.day === today
                        ? "bg-amber-50 text-amber-800 font-semibold"
                        : "text-warm-600"
                    }`}
                  >
                    <span>{h.day}</span>
                    <span>
                      {h.open} – {h.close}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-warm-200 shadow-sm">
              <h3 className="font-serif text-lg font-semibold text-warm-900 mb-3 flex items-center gap-2">
                <MapPin size={18} className="text-amber-600" />
                Address
              </h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                {location.fullAddress}
              </p>
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
              >
                View on Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
