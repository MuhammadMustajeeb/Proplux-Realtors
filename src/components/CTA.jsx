const CTA = () => (
  <section className="bg-gradient-to-r from-emerald-600 to-emerald-400 py-20 px-6 text-black text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Real Estate Brand?</h2>
    <p className="text-lg mb-8">Let’s build your dream site with AI power and stunning 3D design.</p>
    <button
    onClick={() => window.open('https://calendly.com/mustajeeb/real-estate-demo', '_blank')}
  className="bg-black text-white px-8 py-4 rounded-full hover:opacity-80"
>
  Book a Free Call
</button>

<a href="/offer" className="text-emerald-400 underline hover:text-emerald-300 transition">View Offer Details</a>


  </section>
);
export default CTA;