import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReferralBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / documentHeight) * 100;

      if (scrollPercent > 50) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-black px-6 py-4 rounded-xl shadow-lg flex items-center space-x-4"
        >
          <span className="font-semibold">💸 Refer & Earn:</span>
          <a
            href="https://proplux-realtors.vercel.app/?ref=yourname"
            className="underline hover:text-white transition"
            target="_blank"
          >
            Share & get $100 credit
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReferralBanner;
