import { Helmet } from "react-helmet";

export default function BlogPost2() {
  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">
      <Helmet>
        <title>Why Most Realtor Websites Don’t Convert | PropLux</title>
        <meta name="description" content="Learn why most real estate sites fail to generate leads — and how to fix it with design, copy, and AI tools." />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-4">
          Why Most Realtor Websites Don’t Convert (and How to Fix Yours)
        </h1>
        <p className="text-slate-500 mb-10">Published: June 2025 • 6 min read</p>

        <p className="text-slate-300 mb-4">
          A beautiful site doesn't mean anything if it doesn't turn visitors into leads.
          Most realtor websites suffer from the same 3 issues: no clear CTA, poor mobile UX, and no automation.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">❌ Mistake 1: No Strong CTA</h2>
        <p className="text-slate-300 mb-4">
          “Contact Us” is not a CTA. Today’s users expect instant booking, value previews, and lead magnets.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">❌ Mistake 2: Outdated Design</h2>
        <p className="text-slate-300 mb-4">
          Trust is everything in luxury. If your site looks 10 years old, your listings will look the same.
        </p>

        <h2 className="text-2xl font-semibold text-emerald-300 mt-8 mb-2">❌ Mistake 3: No Follow-Up Automation</h2>
        <p className="text-slate-300 mb-4">
          80% of leads are lost due to no follow-up. You need a smart assistant to engage cold visitors instantly.
        </p>

        <div className="bg-slate-900 p-6 rounded-xl mt-12 text-center border border-white/10">
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Let’s Fix Your Website — in 7 Days
          </h3>
          <p className="text-slate-300 mb-4">
            We rebuild real estate sites that convert — with AI chat, modern UI, and smart CTAs.
          </p>
          <a href="https://calendly.com/mustajeeb/free-strategy-call" target="_blank">
            <button className="bg-emerald-500 px-6 py-3 text-black font-semibold rounded-full hover:bg-emerald-600">
              Book a Free Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
