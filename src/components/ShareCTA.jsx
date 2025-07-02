const ShareCTA = () => {
  const shareLink = encodeURIComponent("https://proplux-realtors.vercel.app/");
  const message = encodeURIComponent("Check out PropLux – the AI-powered website builder for realtors. Insanely powerful tool!");

  return (
    <section className="bg-slate-950 py-16 px-6 text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Know a Realtor Who Needs This?</h3>
      <p className="mb-6 text-slate-400">Help a friend grow their business. Share PropLux with one click 👇</p>
      <div className="space-x-4">
        <a
          href={`https://twitter.com/intent/tweet?url=${shareLink}&text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600"
        >
          Share on Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 px-6 py-3 rounded-lg text-white hover:bg-blue-800"
        >
          Share on Facebook
        </a>
      </div>
    </section>
  );
};

export default ShareCTA;