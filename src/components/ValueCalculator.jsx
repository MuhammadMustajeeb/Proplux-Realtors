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
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl font-bold text-center mb-4"
      >
        📈 Value & Revenue Calculator
      </motion.h2>
      <motion.p
        variants={fadeUp}
        custom={1}
        className="text-slate-400 text-center mb-12 max-w-xl mx-auto"
      >
        Discover how many more leads you can capture with AI-powered systems and what they could be worth in revenue.
      </motion.p>

      <motion.div
        variants={fadeUp}
        custom={2}
        className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left"
      >
        <div>
          <label className="block mb-1 text-sm font-medium text-slate-300">
            🧍 Monthly Visitors
          </label>
          <input
            type="number"
            value={visitors}
            onChange={(e) => setVisitors(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-800 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-slate-300">
            📊 Conversion Rate (%)
          </label>
          <input
            type="number"
            value={conversion}
            onChange={(e) => setConversion(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-800 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-slate-300">
            💼 Avg Commission per Sale ($)
          </label>
          <input
            type="number"
            value={commission}
            onChange={(e) => setCommission(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-slate-900 text-white border border-slate-800 focus:ring-2 focus:ring-emerald-400 outline-none transition"
          />
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={3}
        className="mt-14 max-w-xl mx-auto bg-slate-900 p-8 rounded-2xl border border-emerald-500/20 shadow-lg text-center"
      >
        <p className="text-lg text-slate-300 mb-2">
          With your current traffic and conversion...
        </p>
        <p className="text-xl md:text-2xl font-semibold text-emerald-400">
          🧲 Estimated Leads per Month:{" "}
          <span className="font-bold text-white">{leads}</span>
        </p>
        <p className="text-2xl md:text-3xl font-bold text-white mt-2">
          💰 Potential Revenue:{" "}
          <span className="text-emerald-400">${revenue.toLocaleString()}</span>
        </p>
      </motion.div>
    </motion.section>
  );
};

export default ValueCalculator;
