import { Sun, UtensilsCrossed, Users, Baby, CalendarCheck, HandPlatter } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "../data/images";

const experiences = [
  {
    icon: Sun,
    title: "Rooftop Seating",
    description: "Dine under the Meknes sky with panoramic views of the city and surrounding landscapes.",
  },
  {
    icon: UtensilsCrossed,
    title: "Traditional Moroccan Food",
    description: "Authentic tagines, couscous, and grilled dishes prepared with time-honored Moroccan recipes.",
  },
  {
    icon: Users,
    title: "Family-Friendly Dining",
    description: "A welcoming space where families can enjoy quality meals together in a warm atmosphere.",
  },
  {
    icon: CalendarCheck,
    title: "Group Reservations",
    description: "Plan celebrations, gatherings, or business meals with dedicated group seating options.",
  },
  {
    icon: HandPlatter,
    title: "Lunch Experience",
    description: "Our busiest hours bring the freshest dishes — arrive early for the best rooftop table.",
  },
  {
    icon: Baby,
    title: "Table Service",
    description: "Full table service with attentive staff ensuring a comfortable, hassle-free dining experience.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-warm-950 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.06]">
        <img src={images.moroccanDoor} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-warm-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top image strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-14 max-w-3xl mx-auto"
        >
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img src={images.rooftop} alt="Rooftop dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img src={images.moroccanFood} alt="Moroccan cuisine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3] hidden md:block">
            <img src={images.interior} alt="Interior ambiance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            The Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-50 mb-4">
            Rooftop Dining, Moroccan Soul
          </h2>
          <p className="text-amber-200/60 max-w-2xl mx-auto text-lg">
            Every meal is an experience — from our sun-kissed rooftop to the rich
            flavors of traditional Moroccan cuisine.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={item}
              className="group p-8 rounded-2xl bg-warm-900/50 border border-amber-900/20 hover:border-amber-600/30 transition-all hover:bg-warm-900/70 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                <exp.icon size={26} className="text-amber-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-amber-100 mb-3">
                {exp.title}
              </h3>
              <p className="text-amber-200/50 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
