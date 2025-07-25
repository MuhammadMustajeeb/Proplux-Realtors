import { motion } from "framer-motion";

const CTA = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    id="cta"
    className="bg-gradient-to-b from-black via-zinc-900 to-black backdrop-blur-xl border border-white/10 max-w-4xl mx-auto rounded-2xl py-20 px-8 text-center text-white shadow-lg"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-emerald-400">
      Ready to Elevate Your Real Estate Brand?
    </h2>

    <p className="text-lg text-slate-300 max-w-xl mx-auto mb-10">
      Let’s build your dream site with AI power, beautiful UX, and stunning modern design — all tailored for luxury listings.
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => window.open('https://calendly.com/mustajeeb/free-strategy-call', '_blank')}
      className="bg-emerald-500 hover:bg-emerald-600 transition text-black text-lg font-semibold px-8 py-4 rounded-full shadow-xl"
    >
      🚀 Book a Free Strategy Call
    </motion.button>
  </motion.section>
);

export default CTA;
