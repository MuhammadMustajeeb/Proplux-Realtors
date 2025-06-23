import Scene from './Scene';

const Hero = () => (
  <section className="relative h-screen bg-black overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Scene />
    </div>
    <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
      <h1 className="text-6xl font-bold text-white drop-shadow-lg">
        Discover <span className="text-emerald-400">Elite Homes</span>
      </h1>
      <p className="mt-6 text-slate-300 max-w-xl">
        Helping realtors attract clients with futuristic design and AI automation.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-emerald-600">
          Book a Free Demo
        </button>
        <button className="border border-slate-300 px-6 py-3 rounded-lg text-slate-300 hover:border-white hover:text-white">
          Explore Now
        </button>
        <a href="/offer" className="text-emerald-400 underline hover:text-emerald-300 transition">See Our Offer</a>
      </div>
    </div>
  </section>
);
export default Hero;