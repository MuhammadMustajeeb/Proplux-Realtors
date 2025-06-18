const testimonials = [
  { name: 'Ava R.', quote: "PropLux gave my listings the boost they needed. Incredible design and results!" },
  { name: 'James T.', quote: "My calendar is full of bookings. The AI tools are a game changer." },
];

const Testimonials = () => (
  <section className="bg-slate-950 py-20 px-6 text-white">
    <h2 className="text-4xl font-bold text-center mb-16">Client Love</h2>
    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-slate-900 p-6 rounded-lg border border-white/10">
          <p className="text-slate-300 italic">“{t.quote}”</p>
          <p className="text-emerald-400 mt-4 font-semibold">– {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;