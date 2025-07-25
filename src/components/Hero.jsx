"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform transition-transform duration-200"
        style={{
          backgroundImage: `url('/hero-luxury.webp')`,
          transform: `translateY(${isMobile ? 0 : offsetY * 0.3}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight drop-shadow-xl"
        >
          Get 5–10 More Leads/Week with{" "}
          <span className="text-emerald-400">AI-Powered Realtor Websites</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-slate-300"
        >
          We build modern, automated sites for luxury real estate agents —
          complete with smart chatbots, auto-booking, and lead nurturing.
          Launch in just 7 days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto"
        >
          <a
            href="https://calendly.com/mustajeeb/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg">
              Book a Free Demo
            </button>
          </a>
          <a href="#offer" className="w-full md:w-auto">
            <button className="w-full border border-slate-400 hover:border-white hover:text-white text-slate-300 px-6 py-3 rounded-xl">
              See Our Offer
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
