import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "Offer", to: "offer" },
  { name: "Contact", to: "cta" },
  { name: "Blog", href: "/blog" },
  { name: "Visualizer", href: "/visualizer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white px-6 md:px-10 py-4 shadow-md"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <ScrollLink to="hero" smooth duration={600} className="cursor-pointer">
          <h1 className="text-2xl font-bold text-emerald-400">PropLux</h1>
        </ScrollLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.to ? (
                <ScrollLink
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-70}
                  spy
                  activeClass="text-emerald-400"
                  className="relative group text-lg cursor-pointer font-medium transition-all"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ) : (
                <a
                  href={link.href}
                  className="relative group text-lg cursor-pointer font-medium transition-all hover:text-emerald-400"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA (desktop) */}
        <a
          href="/visualizer"
          className="hidden md:inline-block bg-emerald-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 transition duration-300"
        >
          Try Visualizer
        </a>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 text-center bg-black/90 backdrop-blur-md rounded-lg shadow-lg py-4 space-y-3"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.to ? (
                  <ScrollLink
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-60}
                    className="text-lg block py-2 hover:text-emerald-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <a
                    href={link.href}
                    className="text-lg block py-2 hover:text-emerald-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}

            <li>
              <a
                href="/visualizer"
                className="bg-emerald-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 inline-block transition"
              >
                Try Visualizer
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
