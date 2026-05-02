import { Star, Users, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";
import { images } from "../data/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with real image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-warm-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-950/90 via-warm-950/50 to-warm-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-300 text-sm font-medium">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            {businessData.reviews.rating} Rating
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-300 text-sm font-medium">
            <Users size={14} />
            {businessData.reviews.totalReviews} Reviews
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 border border-amber-500/25 rounded-full text-amber-300 text-sm font-medium">
            ☀️ Rooftop Seating
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50 leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Authentic Moroccan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
            Rooftop Dining
          </span>{" "}
          in Meknes
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-amber-200/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {businessData.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reservations"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-warm-950 font-semibold text-lg rounded-full transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-400/30"
          >
            Reserve a Table
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-500/30 hover:border-amber-500/60 text-amber-200 hover:text-amber-100 font-semibold text-lg rounded-full transition-all"
          >
            View Menu
          </a>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] border border-amber-700/20 shadow-2xl">
            <img
              src={images.rooftop}
              alt="Rooftop dining experience at Lahboul Tafilalet"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-warm-950/80 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
              <p className="text-sm font-medium text-amber-200/80">
                Rooftop Dining Experience
              </p>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-500/20 backdrop-blur-sm border border-amber-400/20 rounded-full text-amber-200 text-xs">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                4.9 Rating
              </span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#trust"
            className="inline-flex flex-col items-center text-amber-500/50 hover:text-amber-400/70 transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">
              Discover More
            </span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
