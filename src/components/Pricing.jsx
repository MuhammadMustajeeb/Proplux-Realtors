"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$499",
    desc: "Perfect for new agents who want to look pro.",
    features: [
      "AI-powered landing page",
      "Booking calendar setup",
      "Smart chatbot integration",
    ],
  },
  {
    name: "Growth",
    price: "$999",
    desc: "For active agents scaling their personal brand.",
    features: [
      "Custom branded site",
      "CRM integration",
      "Email lead responder",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$1999+",
    desc: "White-glove service for top-tier luxury realtors.",
    features: [
      "3D visual site tour",
      "Content strategy session",
      "Dedicated support line",
    ],
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-slate-950 py-20 px-6 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-6"
      >
        Pricing Plans
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-slate-400 text-center max-w-xl mx-auto mb-16"
      >
        Get started with a tailored solution based on your goals.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            className={`rounded-xl p-8 text-center shadow-lg border transition-all ${
              plan.highlight
                ? "bg-slate-900 border-emerald-500 shadow-emerald-400/20"
                : "bg-slate-900 border-white/10"
            }`}
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-1">
              {plan.name}
            </h3>
            <p className="text-3xl font-bold mb-3">{plan.price}</p>
            <p className="text-slate-400 mb-6">{plan.desc}</p>

            <ul className="space-y-3 text-left mb-8">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                  <span className="text-slate-300">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/mustajeeb/free-strategy-call",
                  "_blank"
                )
              }
              className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                plan.highlight
                  ? "bg-emerald-500 text-black hover:bg-emerald-600"
                  : "border border-slate-300 text-white hover:border-white hover:bg-slate-800"
              }`}
            >
              Book This Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
