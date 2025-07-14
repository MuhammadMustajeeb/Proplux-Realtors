const ShareCTA = () => {
  const shareLink = encodeURIComponent("https://proplux-realtors.vercel.app/");
  const message = encodeURIComponent(
    "Check out PropLux – the AI-powered website builder for realtors. Insanely powerful tool!"
  );
  const fullMessage = `${message}%20${shareLink}`;

  return (
    <section className="bg-slate-950 py-16 px-6 text-white text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Know a Realtor Who Needs This?
      </h3>
      <p className="mb-8 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
        Help a friend grow their business. Share PropLux with one click 👇
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${shareLink}&text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-emerald-600 shadow-xl transition"
        >
          Share on Twitter
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-emerald-600 shadow-xl transition"
        >
          Share on Facebook
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/?text=${fullMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-emerald-500 px-6 py-3 rounded-lg text-black font-semibold hover:bg-emerald-600 shadow-xl transition"
        >
          Share on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ShareCTA;
