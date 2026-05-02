import { Users, Baby, Plane, UtensilsCrossed, Sun, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "../data/images";

const features = [
  {
    icon: Users,
    title: "Groups Welcome",
    description: "Spacious seating arrangements for parties, corporate events, and large family gatherings.",
  },
  {
    icon: Baby,
    title: "Good for Kids",
    description: "A family-friendly environment where children feel welcome and comfortable.",
  },
  {
    icon: UtensilsCrossed,
    title: "Family Lunch",
    description: "Our signature lunch service is perfect for multi-generational family meals.",
  },
  {
    icon: Plane,
    title: "Tourist Meals",
    description: "Visitors to Meknes discover authentic flavors in a traditionally Moroccan setting.",
  },
  {
    icon: Sun,
    title: "Rooftop Group Bookings",
    description: "Reserve our rooftop exclusively for your special occasion or celebration.",
  },
];

export default function GroupDiningSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-warm-100 to-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-warm-200">
              <img
                src={images.group}
                alt="Group and family dining at Lahboul Tafilalet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-900/40 to-transparent" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Group & Family Dining
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-6">
              Gather, Celebrate, Feast
            </h2>
            <p className="text-warm-500 text-lg leading-relaxed mb-8">
              From intimate family lunches to large celebrations, our space is
              designed to bring people together over exceptional Moroccan cuisine.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feat) => (
                <div key={feat.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <feat.icon size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-800 mb-0.5">
                      {feat.title}
                    </h3>
                    <p className="text-warm-500 text-sm">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#reservations"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all shadow-md shadow-amber-600/20"
            >
              Plan a Group Visit
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
