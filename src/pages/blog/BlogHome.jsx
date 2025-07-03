import { Link } from "react-router-dom";
import aiToolsImg from "../../assets/blog/ai-tools.webp";
import conversionImg from "../../assets/blog/conversion.webp";
import launchPlanImg from "../../assets/blog/launch-plan.webp";

const posts = [
  {
    title: "Top 5 AI Tools for Realtors in 2025",
    excerpt: "Discover the smartest tools for lead gen, automation, and client engagement in the luxury real estate world.",
    link: "/blog/ai-tools-for-realtors",
    image: aiToolsImg,
    alt: "AI tools illustration",
    loading: "lazy",
  },
  {
    title: "Why Most Realtor Websites Don’t Convert (and How to Fix Yours)",
    excerpt: "No CTA? Bad design? Learn the exact tweaks to make your site generate leads 24/7.",
    link: "/blog/website-conversion-fixes",
    image: conversionImg,
    alt: "Website conversion graphic",
    loading: "lazy",
  },
  {
    title: "7-Day Launch Plan for Real Estate Agents (No Tech Skills Needed)",
    excerpt: "Too busy to figure out tech? We’ll build and launch your AI-powered website in just 7 days.",
    link: "/blog/7-day-launch-plan",
    image: launchPlanImg,
    alt: "Launch plan calendar",
    loading: "lazy",
  },
];

export default function BlogHome() {
  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-emerald-400 mb-12">🏡 PropLux Blog</h1>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {posts.map((post, i) => (
          <div key={i} className="bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-white/10">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-emerald-300 mb-2">{post.title}</h2>
              <p className="text-slate-400 mb-4">{post.excerpt}</p>
              <Link to={post.link} className="text-emerald-400 hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
