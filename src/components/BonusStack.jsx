import { motion } from "framer-motion";

const bonuses = [
  {
    title: "Bonus #1: Smart Booking Calendar Setup",
    desc: "We’ll integrate your Calendly with auto-reminders — no manual follow-up ever.",
    value: "$99 Value",
  },
  {
    title: "Bonus #2: Realtor CRM Dashboard",
    desc: "Includes lead tracking, notes, and status updates — all in one view.",
    value: "$149 Value",
  },
  {
    title: "Bonus #3: AI Chatbot Custom Script",
    desc: "We write your smart AI sales script based on your brand voice and listings.",
    value: "$199 Value",
  },
  {
    title: "Bonus #4: Free Hosting for 1 Month",
    desc: "Launch instantly with hosting and SSL preconfigured — zero tech needed.",
    value: "$117 Value",
  },
];

const BonusStack = () => (
  <section className="bg-slate-950 py-20 px-6 text-white text-center">
    <h2 className="text-4xl font-bold mb-6 text-emerald-400">🎁 Limited-Time Launch Bonuses</h2>
    <p className="text-slate-400 max-w-2xl mx-auto mb-12">
      Get over <span className="text-emerald-300 font-bold">$564 in free value</span> when you book your strategy call now. These bonuses vanish after the first 10 spots.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {bonuses.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="bg-slate-900 p-6 rounded-xl shadow-lg border border-white/10 text-left"
        >
          <h3 className="text-xl font-bold mb-2 text-emerald-400">{b.title}</h3>
          <p className="text-slate-300 mb-2">{b.desc}</p>
          <p className="text-sm text-slate-500 italic">{b.value}</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-12">
      <a href="https://calendly.com/mustajeeb/free-strategy-call" target="_blank" rel="noopener noreferrer">
        <button className="bg-emerald-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600">
          Claim All Bonuses Now
        </button>
      </a>
    </div>
  </section>
);

export default BonusStack;
