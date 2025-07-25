import { useEffect, useState } from "react";
import { getAllBlogs } from "../utils/getAllBlogs";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then(setBlogs).catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-900 to-black text-white" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          ✨ Latest Insights from PropLux AI
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 3).map((blog) => (
            <Link
              to={`/blog/${blog.slug}`}
              key={blog.slug}
              className="group bg-black/40 border border-zinc-800 hover:border-emerald-400 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-emerald-500/20"
            >
              <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition">
                {blog.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-2 mb-3">
                {blog.date}
              </p>
              <p className="text-zinc-300 line-clamp-3 text-sm">
                {blog.content.slice(0, 150)}...
              </p>
              <span className="inline-block mt-4 text-emerald-400 text-sm font-semibold hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
