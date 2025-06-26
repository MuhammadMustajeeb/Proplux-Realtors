import { motion } from "framer-motion";

const testimonials = [
  { name: 'Ava R.', quote: "PropLux gave my listings the boost they needed. Incredible design and results!" },
  { name: 'James T.', quote: "My calendar is full of bookings. The AI tools are a game changer." },
];

const Testimonials = () => (
  <section className="bg-slate-950 py-20 px-6 text-white">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-center mb-16"
    >
      Client Love
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-slate-900 p-6 rounded-lg border border-white/10"
        >
          <p className="text-slate-300 italic">“{t.quote}”</p>
          <p className="text-emerald-400 mt-4 font-semibold">– {t.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;