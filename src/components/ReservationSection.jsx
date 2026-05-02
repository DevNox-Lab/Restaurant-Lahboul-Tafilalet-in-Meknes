import { useState } from "react";
import { CalendarCheck, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ReservationSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    rooftop: "yes",
    request: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservations" className="py-20 bg-warm-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Reservations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-amber-50 mb-6">
              Reserve Your Table
            </h2>
            <p className="text-amber-200/60 text-lg leading-relaxed mb-8">
              Whether it's a family lunch, a rooftop dinner, or a special
              celebration — secure the perfect table ahead of time.
            </p>

            {/* Tips */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/15">
                <AlertCircle size={22} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-200 font-medium mb-1">
                    Lunch hours are our busiest
                  </p>
                  <p className="text-amber-300/50 text-sm">
                    Reserve ahead for the best rooftop table, especially between
                    12 PM and 6 PM.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-warm-900/50 border border-amber-900/20">
                <CalendarCheck size={22} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-200 font-medium mb-1">
                    Group reservations available
                  </p>
                  <p className="text-amber-300/50 text-sm">
                    Planning a large gathering? We can arrange special seating
                    for groups of any size.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-warm-900/50 border border-amber-900/20">
                <Clock size={22} className="text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-200 font-medium mb-1">
                    Open daily from 10 AM
                  </p>
                  <p className="text-amber-300/50 text-sm">
                    We serve from breakfast through late dinner — every day of the
                    week.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="bg-warm-900/50 border border-amber-600/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-amber-100 mb-3">
                  Reservation Confirmed!
                </h3>
                <p className="text-amber-200/60 mb-6">
                  Thank you, {form.name}. We'll prepare your
                  {form.rooftop === "yes" ? " rooftop " : " "}table for{" "}
                  {form.guests} guest{form.guests !== "1" ? "s" : ""}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-colors"
                >
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-warm-900/50 border border-amber-900/20 rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-amber-200/70 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 placeholder:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-200/70 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+212 ..."
                      className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 placeholder:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-amber-200/70 text-sm font-medium mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-amber-200/70 text-sm font-medium mb-2">
                      Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    >
                      <option value="">Select time</option>
                      {[
                        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
                        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
                        "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
                        "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
                        "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
                        "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
                        "10:00 PM", "10:30 PM",
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-amber-200/70 text-sm font-medium mb-2">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      required
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    >
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-amber-200/70 text-sm font-medium mb-2">
                      Rooftop Seating?
                    </label>
                    <select
                      name="rooftop"
                      value={form.rooftop}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all"
                    >
                      <option value="yes">Yes, rooftop please</option>
                      <option value="no">Indoor seating</option>
                      <option value="any">No preference</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-amber-200/70 text-sm font-medium mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="request"
                    value={form.request}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any dietary requirements, celebrations, or special arrangements..."
                    className="w-full px-4 py-3 bg-warm-900/70 border border-amber-900/30 rounded-xl text-amber-100 placeholder:text-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-warm-950 font-bold text-lg rounded-full transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
