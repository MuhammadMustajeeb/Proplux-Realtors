import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-gradient-to-b from-black via-zinc-900 to-black py-12 px-6 border-t border-white/10 text-white"
  >
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
      <div>
        <h3 className="text-xl font-semibold text-emerald-400 mb-2">PropLux</h3>
        <p className="text-slate-400 text-sm">
          Crafting elite digital experiences for luxury real estate professionals.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
        <ul className="space-y-1 text-slate-400 text-sm">
          <li><a href="/blog" className="hover:text-emerald-400">Blog</a></li>
          <li><a href="/#features" className="hover:text-emerald-400">Features</a></li>
          <li><a href="/#pricing" className="hover:text-emerald-400">Pricing</a></li>
          <li><a href="/#contact" className="hover:text-emerald-400">Contact</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-2">Stay Connected</h4>
        <p className="text-slate-400 text-sm mb-2">Get updates, offers & tips.</p>
        <form className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400"
          />
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 transition text-white text-sm font-semibold px-4 py-2 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div className="mt-10 text-sm text-center text-slate-500 border-t border-white/10 pt-6">
      &copy; {new Date().getFullYear()} PropLux. All rights reserved.
    </div>
  </motion.footer>
);

export default Footer;
