import { motion } from "framer-motion";

const bonuses = [
  {
    title: "Smart Booking Calendar Setup",
    desc: "We’ll integrate your Calendly with auto-reminders — no manual follow-up ever.",
    value: "$99 Value",
  },
  {
    title: "Realtor CRM Dashboard",
    desc: "Includes lead tracking, notes, and status updates — all in one clean view.",
    value: "$149 Value",
  },
  {
    title: "AI Chatbot Custom Script",
    desc: "We write your smart AI sales script based on your brand voice and listings.",
    value: "$199 Value",
  },
  {
    title: "Free Hosting for 1 Month",
    desc: "Launch instantly with hosting + SSL preconfigured — zero tech needed.",
    value: "$117 Value",
  },
];

const BonusStack = () => (
  <section className="bg-slate-950 py-20 px-6 text-white">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-center mb-6 text-emerald-400"
    >
      🎁 Limited-Time Launch Bonuses
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-slate-400 max-w-2xl text-center mx-auto mb-12"
    >
      Get over <span className="text-emerald-300 font-bold">$564 in free value</span> when you book your strategy call today.
      Only 10 spots available — don’t miss out.
    </motion.p>

    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {bonuses.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-8 rounded-xl shadow-lg border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-2 text-emerald-400">{b.title}</h3>
          <p className="text-slate-300 mb-3">{b.desc}</p>
          <span className="text-sm font-medium text-slate-500 bg-slate-800 inline-block px-3 py-1 rounded-full">
            {b.value}
          </span>
        </motion.div>
      ))}
    </div>

    <div className="mt-14 text-center">
      <a href="https://calendly.com/mustajeeb/free-strategy-call" target="_blank" rel="noopener noreferrer">
        <button className="bg-emerald-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 shadow-md transition">
          Claim All Bonuses Now
        </button>
      </a>
    </div>
  </section>
);

export default BonusStack;
