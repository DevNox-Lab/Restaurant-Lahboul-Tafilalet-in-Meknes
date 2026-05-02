import { useState, useMemo } from "react";
import { Search, Flame, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { businessData } from "../data/businessData";
import { menuImages } from "../data/images";

export default function MenuSection() {
  const categories = businessData.menu.map((c) => c.category);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const allItems =
      activeCategory === "All"
        ? businessData.menu.flatMap((c) =>
            c.items.map((item) => ({ ...item, category: c.category }))
          )
        : businessData.menu
            .filter((c) => c.category === activeCategory)
            .flatMap((c) =>
              c.items.map((item) => ({ ...item, category: c.category }))
            );

    if (!searchQuery.trim()) return allItems;
    const q = searchQuery.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Menu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Taste the Tradition
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto text-lg">
            From slow-cooked tagines to hand-rolled couscous — every dish tells the story of Moroccan culinary heritage.
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-warm-400"
            />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-warm-200 bg-white text-warm-800 placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                  : "bg-white text-warm-600 border border-warm-200 hover:border-amber-300 hover:text-amber-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-5 border border-warm-100 hover:shadow-md hover:border-amber-200/50 transition-all group"
              >
                {/* Food image */}
                <div className="h-36 rounded-xl overflow-hidden mb-4 bg-amber-50">
                  <img
                    src={menuImages[item.category]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Labels */}
                <div className="flex items-center gap-2 mb-2">
                  {item.signature && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full">
                      <Award size={10} />
                      Signature
                    </span>
                  )}
                  {item.popular && !item.signature && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-500/10 text-red-600 text-xs font-semibold rounded-full">
                      <Flame size={10} />
                      Popular
                    </span>
                  )}
                  <span className="text-xs text-warm-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-semibold text-warm-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-warm-500 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <p className="font-bold text-amber-700 text-lg">
                  {item.price} <span className="text-sm font-normal text-warm-400">MAD</span>
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-warm-400">
            <p className="text-lg">No items found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
