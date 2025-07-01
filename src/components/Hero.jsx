import Scene from "./Scene";
import { motion } from "framer-motion";

const Hero = () => (
  <section id="hero" className="relative h-screen bg-black overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Scene />
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-white drop-shadow-lg"
      >
        Get 5–10 More Leads/Week with <span className="text-emerald-400">AI-Powered Realtor Websites</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-6 text-slate-300 max-w-xl"
      >
        Done-for-you 3D website, AI chatbot, and CRM — built for luxury real estate agents. Live in 7 days or it's free.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 space-x-4"
      >
        <a href="https://calendly.com/mustajeeb/free-strategy-call">
          <button className="bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-emerald-600 shadow-xl">
            Book a Free Demo
          </button>
        </a>
        <a href="/offer">
          <button className="border border-slate-300 px-6 py-3 rounded-lg text-slate-300 hover:border-white hover:text-white">
            See Our Offer
          </button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;