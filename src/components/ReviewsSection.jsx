import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { businessData } from "../data/businessData";

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

function ReviewDistributionBar({ star, count, total }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-amber-200/70 w-3 text-right">{star}</span>
      <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />
      <div className="flex-1 h-2 bg-warm-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-amber-500 rounded-full transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-amber-200/50 w-8 text-right">{count}</span>
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ReviewsSection() {
  const { rating, totalReviews, distribution, testimonials } =
    businessData.reviews;

  return (
    <section id="reviews" className="py-20 bg-warm-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Guest Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-50 mb-4">
            What Our Guests Say
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-warm-900/50 border border-amber-900/20 rounded-2xl p-8 text-center sticky top-28">
              <div className="text-6xl font-bold text-amber-400 font-serif mb-2">
                {rating}
              </div>
              <div className="flex justify-center mb-2">
                <StarRow />
              </div>
              <p className="text-amber-200/60 mb-6">
                Based on {totalReviews} guest reviews
              </p>

              {/* Distribution */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <ReviewDistributionBar
                    key={star}
                    star={star}
                    count={distribution[star]}
                    total={totalReviews}
                  />
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-amber-900/20">
                <p className="text-amber-200/40 text-sm">
                  {distribution[5]} of {totalReviews} guests gave us 5 stars
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
          >
            {testimonials.map((review) => (
              <motion.div
                key={review.name}
                variants={item}
                className="bg-warm-900/30 border border-amber-900/15 rounded-2xl p-6 hover:border-amber-700/25 transition-colors"
              >
                <Quote size={24} className="text-amber-600/30 mb-4" />
                <p className="text-amber-100/80 leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-amber-200/70 font-medium text-sm">
                      {review.name}
                    </span>
                  </div>
                  <StarRow count={review.rating} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
