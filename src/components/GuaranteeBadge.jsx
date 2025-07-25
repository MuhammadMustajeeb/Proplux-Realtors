import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeBadge = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="py-20 px-6 bg-gradient-to-b from-black via-zinc-900 to-black"
  >
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-black to-slate-900 border border-emerald-500 rounded-xl shadow-xl p-8"
      >
        {/* Glowing ring behind the badge */}
        <div className="absolute -inset-1.5 bg-emerald-500 blur-lg opacity-20 rounded-xl animate-pulse" />

        {/* Icon and Badge Content */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <ShieldCheck className="text-emerald-400 w-10 h-10" />
          <h3 className="text-2xl font-bold text-emerald-400">
            7-Day Launch Guarantee
          </h3>
          <p className="text-slate-300 max-w-md">
            We promise to launch your luxury real estate site within 7 days — or you don’t pay. No delays. No excuses.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            *Excludes client-side delays in content, approvals, or hosting.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default GuaranteeBadge;
