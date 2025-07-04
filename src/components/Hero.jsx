import { useEffect, useState } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Scroll-Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover transition-transform duration-200 will-change-transform"
        style={{
          backgroundImage: `url(${isMobile ? "/hero-luxury.webp" : "/hero-luxury.webp"})`,
          transform: `translateY(${isMobile ? 0 : offsetY * 0.3}px)`,
        }}
      />

      {/* Overlay (optional for better text contrast) */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Get 5–10 More Leads/Week with{" "}
          <span className="text-emerald-400">AI-Powered Realtor Websites</span>
        </h1>
        <p className="mt-6 text-slate-300 max-w-xl">
          We build modern, automated sites for luxury real estate agents — complete with smart chatbots and booking systems. Go live in 7 days.
        </p>
        <div className="mt-8 space-x-4">
          <a href="https://calendly.com/mustajeeb/free-strategy-call" target="_blank" rel="noreferrer">
            <button className="bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-emerald-600 shadow-xl">
              Book a Free Demo
            </button>
          </a>
          <a href="#offer">
            <button className="border border-slate-300 px-6 py-3 rounded-lg text-slate-300 hover:border-white hover:text-white">
              See Our Offer
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
