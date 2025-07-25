"use client";
import { motion } from "framer-motion";

const features = [
  {
    icon: '🏠',
    title: "Luxury Websites",
    desc: "Crafted to showcase high-end properties with elegance, speed, and beauty.",
  },
  {
    icon: '🤖',
    title: "AI Assistant",
    desc: "24/7 automated responses, lead scoring, and smart follow-ups.",
  },
  {
    icon: '📊',
    title: "CRM + Analytics",
    desc: "Track clients, view property stats, and optimize your funnel in real-time.",
  },
];

const Features = () => (
  <section className="relative py-24 px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">
    <div className="absolute inset-0 pointer-events-none opacity-10 blur-3xl " />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-4 tracking-tight">
        Elevate Your Real Estate Game
      </h2>
      <p className="text-slate-300 text-lg">
        Everything you need to win more listings, convert leads faster, and look stunning doing it.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-md text-center hover:scale-105 hover:border-emerald-400 transition-transform duration-300"
        >
          <div className="text-5xl mb-4 animate-pulse">{f.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-emerald-300">{f.title}</h3>
          <p className="text-slate-400">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;
