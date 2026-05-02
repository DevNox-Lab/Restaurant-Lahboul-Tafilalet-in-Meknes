import { Star, MessageSquare, Award, Banknote, Clock, Car } from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";

const stats = [
  {
    icon: Star,
    value: `${businessData.reviews.rating}`,
    label: "Guest Rating",
    accent: true,
  },
  {
    icon: MessageSquare,
    value: `${businessData.reviews.totalReviews}`,
    label: "Guest Reviews",
  },
  {
    icon: Award,
    value: `${businessData.reviews.distribution[5]}`,
    label: "Five-Star Reviews",
  },
  {
    icon: Banknote,
    value: businessData.priceRange,
    label: "Price Range",
  },
  {
    icon: Clock,
    value: "Open Daily",
    label: "10 AM – 11:30 PM",
  },
  {
    icon: Car,
    value: "Free Parking",
    label: "Multi-storey & Lot",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrustStats() {
  return (
    <section id="trust" className="py-20 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Guests Choose Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900">
            Trusted by Hundreds of Guests
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-warm-100 hover:shadow-md hover:border-amber-200/50 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  stat.accent
                    ? "bg-amber-500 text-white"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                <stat.icon size={22} />
              </div>
              <p className="font-bold text-warm-900 text-xl mb-1">
                {stat.value}
              </p>
              <p className="text-warm-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
