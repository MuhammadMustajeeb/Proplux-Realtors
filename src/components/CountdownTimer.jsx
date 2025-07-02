import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

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
    <section className="bg-slate-900 py-10 px-6 text-center text-white">
      <h3 className="text-xl font-semibold text-emerald-400 mb-2">⏳ Limited Time Launch Offer Ends In:</h3>
      <p className="text-3xl font-bold mb-4">{formatTime(timeLeft)}</p>
      <div className="bg-slate-800 h-2 w-full max-w-xl mx-auto rounded-full overflow-hidden">
        <motion.div
          className="bg-emerald-400 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default CountdownTimer;