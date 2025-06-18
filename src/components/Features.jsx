const features = [
  { icon: '🏠', title: "Premium Websites", desc: "Bespoke websites crafted for luxury listings." },
  { icon: '🤖', title: "AI-Powered Systems", desc: "Automated lead response to capture every opportunity." },
  { icon: '📊', title: "CRM + Analytics", desc: "Track performance and manage leads efficiently." },
];

const Features = () => (
  <section className="bg-slate-950 py-20 px-6 text-white">
    <h2 className="text-4xl font-bold text-center mb-16">What You Get with PropLux</h2>
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="bg-slate-900 p-8 rounded-xl shadow-lg border border-white/10 text-center">
          <div className="text-5xl mb-4">{f.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-emerald-400">{f.title}</h3>
          <p className="text-slate-300">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Features;