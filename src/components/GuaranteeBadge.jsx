import { motion } from "framer-motion";

const GuaranteeBadge = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative mx-auto mt-10 w-fit"
  >
    {/* Glowing ring */}
    <div className="absolute inset-0 rounded-full blur-lg bg-emerald-400 opacity-20 animate-pulse z-0" />

    {/* Badge */}
    <div className="relative z-10 px-6 py-4 bg-black border border-emerald-500 rounded-full text-emerald-400 font-bold shadow-lg text-center text-sm md:text-base">
      ✅ 7-Day Launch Guarantee — Go Live Fast or It’s Free!
    </div>
  </motion.div>
);

export default GuaranteeBadge;
