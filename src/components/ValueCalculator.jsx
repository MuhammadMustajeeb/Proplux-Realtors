"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ValueCalculator = () => {
  const [visitors, setVisitors] = useState(1000);
  const [conversion, setConversion] = useState(2);
  const [commission, setCommission] = useState(10000);

  const leads = Math.round((visitors * conversion) / 100);
  const revenue = leads * commission;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-950 text-white py-20 px-6 text-center"
    >
      <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6">
        📈 Revenue Calculator
      </motion.h2>

      <motion.p
        variants={fadeUp}
        custom={1}
        className="text-slate-400 mb-10 max-w-2xl mx-auto"
      >
        Estimate how much more you could earn with better lead conversion and AI automations.
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={2}
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left"
      >
        <div>
          <label className="block mb-1 text-sm text-slate-300">Monthly Visitors</label>
          <input
            type="number"
            className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
            value={visitors}
            onChange={(e) => setVisitors(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">Conversion Rate (%)</label>
          <input
            type="number"
            className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
            value={conversion}
            onChange={(e) => setConversion(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-slate-300">Avg Commission ($)</label>
          <input
            type="number"
            className="w-full p-3 rounded bg-slate-800 text-white border border-slate-700"
            value={commission}
            onChange={(e) => setCommission(Number(e.target.value))}
          />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} custom={3} className="mt-10 text-center">
        <p className="text-xl text-emerald-400 font-semibold">
          🧲 You could generate <strong>{leads}</strong> new leads/month
        </p>
        <p className="text-2xl font-bold mt-2 text-white">
          💰 ${revenue.toLocaleString()} monthly revenue potential
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ValueCalculator;
