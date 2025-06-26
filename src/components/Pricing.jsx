// components/Pricing.jsx
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
    <section id="pricing" className="bg-black text-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-slate-400 mb-16">
          Get started with a tailored solution based on your goals.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className={`rounded-xl border border-white/10 p-8 text-left shadow-lg bg-slate-950 ${
                plan.highlight
                  ? "border-emerald-500 shadow-emerald-500/30"
                  : ""
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2 text-emerald-400">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold mb-2">{plan.price}</p>
              <p className="text-slate-400 mb-6">{plan.desc}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-1" />
                    <span>{f}</span>
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
                    : "border border-slate-300 text-white hover:border-white"
                }`}
              >
                Book This Plan
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
