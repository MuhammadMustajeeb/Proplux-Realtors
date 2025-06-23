import { motion } from 'framer-motion';

const OfferPage = () => (
  <section className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-white px-6 py-20 flex flex-col items-center text-center font-sans">
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl md:text-6xl font-extrabold mb-6 text-emerald-400 drop-shadow"
    >
      Done-for-You Realtor Website
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10"
    >
      Stand out in the real estate market with a high-end, AI-powered website that converts leads 24/7.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-left bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-10 rounded-3xl shadow-2xl border border-slate-700 max-w-xl backdrop-blur"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">✨ What’s Included</h2>
      <ul className="list-disc list-inside space-y-4 text-slate-300">
        <li>Stunning custom website (React + Tailwind + 3D visuals)</li>
        <li>AI chatbot assistant trained for real estate clients</li>
        <li>CRM integration + lead capture</li>
        <li>Booking automation (Calendly)</li>
        <li>SEO + fast loading</li>
        <li>Mobile optimized & modern animations</li>
      </ul>
    </motion.div>

    <div className="mt-10 text-xl text-white">
      💰 <span className="font-bold text-emerald-400">Starting at $999</span>
    </div>

    <div className="mt-8 flex gap-6 flex-wrap justify-center">
      <a
        href="/"
        className="bg-emerald-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-all shadow-md"
      >
        View Demo Site
      </a>
      <a
        href="https://calendly.com/yourname/real-estate-demo"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
      >
        Book a Free Call
      </a>
    </div>
  </section>
);

export default OfferPage;