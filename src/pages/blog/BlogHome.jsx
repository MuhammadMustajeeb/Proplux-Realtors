import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "ai-tools-for-realtors",
    title: "Top 5 AI Tools for Realtors in 2025",
    description: "These AI tools are helping agents close deals faster than ever.",
    date: "June 2025",
  },
  {
    slug: "seo-for-real-estate",
    title: "How SEO Can Get You More Listings",
    description: "Simple SEO strategies to dominate your local market.",
    date: "May 2025",
  },
];

export default function BlogHome() {
  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">📰 AI Blog for Realtors</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <div className="bg-slate-900 p-6 rounded-xl border border-white/10 hover:border-emerald-500 transition">
              <h2 className="text-xl font-semibold mb-2 text-emerald-400">{post.title}</h2>
              <p className="text-slate-300 text-sm">{post.description}</p>
              <p className="mt-3 text-xs text-slate-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
