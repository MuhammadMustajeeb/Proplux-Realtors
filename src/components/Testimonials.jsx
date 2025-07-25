import { motion } from "framer-motion";

const testimonials = [
  {
    name: 'Ava R.',
    quote: "PropLux gave my listings the boost they needed. Incredible design and results!",
    avatar: "👩‍💼",
  },
  {
    name: 'James T.',
    quote: "My calendar is full of bookings. The AI tools are a game changer.",
    avatar: "🧑‍💼",
  },
];

const Testimonials = () => (
  <section className="bg-slate-950 py-20 px-6 text-white">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold text-center mb-16"
    >
      What Our Clients Say
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-8 rounded-xl shadow-lg border border-white/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">{t.avatar}</div>
            <div className="text-lg font-semibold text-emerald-400">{t.name}</div>
          </div>
          <p className="text-slate-300 text-md leading-relaxed italic">
            “{t.quote}”
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;
