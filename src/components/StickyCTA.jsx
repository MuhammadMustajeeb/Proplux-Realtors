"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTA = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <AnimatePresence>
      {isMobile && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-50 bg-emerald-500 px-4 py-3 flex justify-between items-center shadow-xl"
        >
          <span className="text-black font-semibold">🚀 Want more leads?</span>
          <a
            href="https://calendly.com/mustajeeb/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-900"
          >
            Book Free Call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
