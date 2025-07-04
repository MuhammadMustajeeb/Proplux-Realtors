import { useEffect, useState, lazy, Suspense } from "react";

// Lazy load the 3D scene only on desktop
const Scene = lazy(() => import("./Scene"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        {isMobile ? (
          <img
            src="/hero-luxury.webp"
            alt="Luxury Mobile Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <Suspense fallback={<div className="text-white text-center pt-20">Loading 3D Scene...</div>}>
            <Scene />
          </Suspense>
        )}
      </div>

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
