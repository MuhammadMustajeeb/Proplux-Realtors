import { Helmet } from "react-helmet";

export default function BlogPost3() {
  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">
      <Helmet>
        <title>7-Day Website Launch for Realtors | PropLux</title>
        <meta name="description" content="Busy realtor? Here's how to launch your site, AI tools, and booking system in just 7 days." />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-4">
          7-Day Launch Plan for Real Estate Agents (No Tech Skills Needed)
        </h1>
        <p className="text-slate-500 mb-10">Published: June 2025 • 4 min read</p>

        <p className="text-slate-300 mb-4">
          You're a realtor, not a web developer. That’s why we built a simple launch process for busy agents who want results fast.
        </p>

        <h2 className="text-xl font-semibold text-emerald-300 mt-8 mb-2">📅 Day 1: Book Your Strategy Call</h2>
        <p className="text-slate-300 mb-4">We learn your goals and walk you through the custom plan.</p>

        <h2 className="text-xl font-semibold text-emerald-300 mt-8 mb-2">🎨 Day 2–4: Approve Your Design</h2>
        <p className="text-slate-300 mb-4">We build your branding, website, and 3D hero experience.</p>

        <h2 className="text-xl font-semibold text-emerald-300 mt-8 mb-2">🚀 Day 5–7: AI Setup + Launch</h2>
        <p className="text-slate-300 mb-4">We integrate the chatbot, CRM, booking system — and deploy your site live.</p>

        <div className="bg-slate-900 p-6 rounded-xl mt-12 text-center border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Done-for-You Real Estate Website — Launched in 7 Days
          </h3>
          <p className="text-slate-300 mb-4">
            Want this process done for you? Let’s chat and start your 7-day launch.
          </p>
          <a href="https://calendly.com/mustajeeb/free-strategy-call" target="_blank">
            <button className="bg-emerald-500 px-6 py-3 text-black font-semibold rounded-full hover:bg-emerald-600">
              Book a Strategy Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
