import { motion } from "framer-motion";
import beforeAfterImg from "../assets/before-after.webp";

const CaseStudy = () => (
  <section className="bg-slate-950 py-20 px-6 text-white">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-center mb-6 text-emerald-400"
    >
      📈 Real Results
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="text-lg text-slate-300 text-center max-w-3xl mx-auto mb-10"
    >
      See how we transformed a Miami Realtor’s website from outdated to fully booked using our
      AI + Design system tailored for conversions and trust.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto"
    >
      <img
        src={beforeAfterImg}
        alt="Before and After Real Estate Website"
        className="rounded-2xl shadow-xl border border-white/10"
        loading="lazy"
      />
    </motion.div>
  </section>
);

export default CaseStudy;
