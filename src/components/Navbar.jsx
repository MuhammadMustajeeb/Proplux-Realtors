import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Offer", to: "offer" },
    { name: "Contact", to: "cta" },
    { name: "Blog", href: "blog" },
    { name: "Visualizer", href: "/visualizer" }, // non-scroll link
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm text-white py-4 px-6 md:px-10 shadow-md"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <ScrollLink to="hero" smooth={true} duration={600} className="cursor-pointer">
          <h1 className="text-2xl font-bold text-emerald-400">PropLux</h1>
        </ScrollLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.to ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                  activeClass="active-link"
                  className="relative group text-lg cursor-pointer"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ) : (
                <a
                  href={link.href}
                  className="relative group text-lg cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Try Visualizer CTA (desktop only) */}
        <a
          href="/visualizer"
          className="hidden md:inline-block bg-emerald-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 ml-6 transition"
        >
          Try Visualizer
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.to ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-60}
                  className="text-lg block py-2 hover:text-emerald-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <a
                  href={link.href}
                  className="text-lg block py-2 hover:text-emerald-400 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}

          {/* CTA Button for Mobile */}
          <li>
            <a
              href="/visualizer"
              className="bg-emerald-500 text-black font-semibold px-5 py-2 rounded-lg hover:bg-emerald-600 inline-block transition"
            >
              Try Visualizer
            </a>
          </li>
        </ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
