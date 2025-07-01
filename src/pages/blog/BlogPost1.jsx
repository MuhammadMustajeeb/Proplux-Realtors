import { Helmet } from "react-helmet";

export default function BlogPost1() {
  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">
      <Helmet>
        <title>Top 5 AI Tools for Realtors in 2025 | PropLux</title>
        <meta
          name="description"
          content="Discover the top 5 AI tools helping real estate agents automate leads, boost sales, and grow their brand in 2025."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-4">
          Top 5 AI Tools for Realtors in 2025
        </h1>
        <p className="text-slate-500 mb-10">Published: June 2025 • 5 min read</p>

        <p className="text-slate-300 mb-4">
          The real estate industry is shifting fast — and AI is leading the charge.
          From smart websites to automated lead capture, realtors who adopt these tools now
          are outpacing the competition.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">1. Chatbase</h2>
        <p className="text-slate-300 mb-4">
          Add a GPT-powered chatbot to your website that can answer questions 24/7.
          It qualifies leads while you sleep.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">2. Fasdeem AI</h2>
        <p className="text-slate-300 mb-4">
          Create automatic responses, follow-ups, and smart lead pipelines —
          built specifically for real estate workflows.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">3. Heygen / Synthesia</h2>
        <p className="text-slate-300 mb-4">
          Create avatar video introductions for listings, ads, and demos without recording yourself.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">4. Zapier + GPT</h2>
        <p className="text-slate-300 mb-4">
          Automate repetitive tasks like follow-up emails or social media posts using AI workflows.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">5. Calendly AI Scheduling</h2>
        <p className="text-slate-300 mb-8">
          Let clients book discovery calls without the back-and-forth. Use routing forms to qualify leads.
        </p>

        <div className="bg-slate-900 p-6 rounded-xl mt-12 text-center border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Want an AI-Powered Website Like This?
          </h3>
          <p className="text-slate-300 mb-4">
            We help realtors go live in 7 days with automated websites, chatbots, and booking tools.
          </p>
          <a
            href="https://calendly.com/mustajeeb/free-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-emerald-500 px-6 py-3 text-black font-semibold rounded-full hover:bg-emerald-600">
              Book a Free Strategy Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
