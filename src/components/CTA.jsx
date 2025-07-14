import { motion } from "framer-motion";

const CTA = () => (
  <motion.section
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    id="cta"
    className="bg-gradient-to-r from-emerald-600 to-emerald-400 py-20 px-6 text-black text-center"
  >
    <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Real Estate Brand?</h2>
    <p className="text-lg mb-8">
      Let’s build your dream site with AI power and stunning 3D design.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://calendly.com/mustajeeb/free-strategy-call', '_blank')}
      className="bg-black px-8 py-4 rounded-full text-emerald-500 text-lg font-semibold hover:bg-black-200"
    >
      Book a Free Call
    </motion.button>
  </motion.section>
);

export default CTA;
