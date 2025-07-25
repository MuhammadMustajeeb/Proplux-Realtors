import { motion } from "framer-motion";

const Offer = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-gradient-to-b from-black via-zinc-900 to-black py-20 px-4 text-white"
    id="offer"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        🚀 Special Launch Offer
      </h2>

      <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
        For a limited time only — the first 10 realtors get a full AI-powered
        digital suite for just{" "}
        <span className="text-emerald-400 font-semibold">$499</span>.
      </p>

      <ul className="text-left space-y-3 text-slate-300 text-base md:text-lg border border-white/10 rounded-xl p-6 bg-black/30 backdrop-blur">
        <li>✅ AI Chatbot Integration</li>
        <li>✅ Avatar Welcome Video</li>
        <li>✅ Realtor CRM Dashboard</li>
        <li>✅ 3 Custom SEO Blog Posts</li>
        <li>✅ Cold Outreach DM Templates</li>
        <li>✅ Free Hosting + 30 Days Support</li>
        <li className="text-emerald-400 font-semibold">
          🔒 7-Day Launch Guarantee
        </li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          window.open(
            "https://calendly.com/mustajeeb/free-strategy-call",
            "_blank"
          )
        }
        className="mt-10 bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-lg"
      >
        Claim Your Spot
      </motion.button>
    </div>
  </motion.section>
);

export default Offer;
