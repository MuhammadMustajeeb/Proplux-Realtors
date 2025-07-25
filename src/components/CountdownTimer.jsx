import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec) => {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const percent = ((86400 - timeLeft) / 86400) * 100;

  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4 text-emerald-400">
          ⏳ Limited-Time Founders Offer
        </h2>
        <p className="text-lg text-slate-300 mb-6">
          Secure your custom AI-powered real estate website <span className="text-white font-semibold">within 24 hours</span> — this exclusive launch deal vanishes soon.
        </p>
        <div className="text-5xl font-extrabold text-white mb-6">
          {formatTime(timeLeft)}
        </div>

        <div className="bg-slate-800 h-3 w-full max-w-xl mx-auto rounded-full overflow-hidden">
          <motion.div
            className="bg-emerald-500 h-full"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "linear", duration: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
