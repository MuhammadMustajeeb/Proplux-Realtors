import { motion } from "framer-motion";

const Offer = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-black py-20 px-6 text-white text-center"
    id="offer"
  >
    <h2 className="text-4xl font-bold mb-6">Special Launch Offer</h2>
    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
      First 10 clients get a full setup including website, AI assistant, and CRM — for only $499.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://calendly.com/mustajeeb/free-strategy-call', '_blank')}
      className="bg-emerald-500 px-8 py-4 rounded-full text-black text-lg font-semibold hover:bg-emerald-600"
    >
      Claim Your Spot
    </motion.button>
  </motion.section>
);

export default Offer;