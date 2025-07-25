import { useEffect, useState } from "react";
import { getAllBlogs } from "../../utils/getAllBlogs";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllBlogs().then(setPosts).catch(console.error);
  }, []);

  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-br from-[#0d0d0d] via-[#0f1115] to-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-400 mb-12 text-center">
          📚 PropLux AI Blog
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No blog posts found.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transition-transform duration-300 ease-in-out hover:border-emerald-500 hover:shadow-xl hover:scale-[1.02]"
              >
                <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-300 mt-2 line-clamp-2">
                  {post.description || "Explore the latest insights powered by PropLux AI."}
                </p>
                <p className="text-xs text-slate-500 mt-3">{post.date}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
