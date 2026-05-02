import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

export default function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0">
        <img
          src={images.interior}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-950/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-warm-950/60 via-amber-950/40 to-warm-900/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-500/20 rounded-full mb-8">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            <span className="text-amber-300 text-sm font-medium">
              {businessData.reviews.rating} stars from{" "}
              {businessData.reviews.totalReviews} happy guests
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-6 leading-tight">
            Reserve Your Moroccan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
              Rooftop Dining
            </span>{" "}
            Experience Today
          </h2>

          <p className="text-amber-200/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From traditional tagines to unforgettable rooftop views — your table
            at {businessData.name} awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservations"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-warm-950 font-bold text-lg rounded-full transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-400/30"
            >
              Reserve a Table Now
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href={businessData.contact.phoneHref}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500/30 hover:border-amber-500/60 text-amber-200 hover:text-amber-100 font-semibold text-lg rounded-full transition-all"
            >
              Call to Reserve
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
