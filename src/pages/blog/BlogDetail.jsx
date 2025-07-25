import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBlogs } from "../../utils/getAllBlogs";
import { marked } from "marked";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState([]);


  useEffect(() => {
  getAllBlogs()
    .then(posts => {
      const found = posts.find(p => p.slug === slug);
      if (!found) {
        setError(true);
      } else {
        setPost(found);

        // Related posts logic (basic match by keyword/title similarity)
        const keywords = found.title.toLowerCase().split(" ");
        const related = posts
          .filter(p => p.slug !== slug)
          .filter(p => keywords.some(word => p.title.toLowerCase().includes(word)))
          .slice(0, 3);
        setRelatedPosts(related);
      }
    })
    .catch(() => setError(true));
}, [slug]);


  if (error) return <div className="text-center p-20 text-white">Post not found.</div>;
  if (!post) return <div className="text-center p-20 text-white">Loading...</div>;

  const readingTime = Math.ceil(post.content.split(" ").length / 200); // ~200wpm

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 md:px-8 relative">
      
      {/* ✅ Sticky Back Button */}
      <Link
        to="/blog"
        className="fixed top-4 left-4 bg-emerald-500/10 border border-emerald-500 text-emerald-300 px-3 py-1.5 rounded-full text-sm backdrop-blur hover:bg-emerald-500/20 transition z-50"
      >
        ← Back to Blogs
      </Link>

      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-xl shadow-xl">
        
        {/* ✅ Title */}
        <h1 className="text-4xl font-extrabold text-emerald-300 mb-2 leading-tight">{post.title}</h1>
        
        {/* ✅ Metadata */}
        <p className="text-sm text-slate-400 mb-4">
          {post.date} · {readingTime} min read · by <span className="text-emerald-400">PropLux AI</span>
        </p>

        {/* ✅ Markdown Body Styled */}
        <article
          className="prose prose-invert max-w-none text-slate-200 prose-headings:text-emerald-300 prose-a:text-emerald-400 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />

        {/* ✅ Social Share */}
        <div className="mt-10 pt-6 border-t border-white/10 flex gap-6 text-sm">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            🔁 Share on Twitter
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            👍 Share on Facebook
          </a>
        </div>

        {/* ✅ Related Posts Section */}
{relatedPosts.length > 0 && (
  <div className="mt-16">
    <h3 className="text-2xl font-bold mb-6 text-white">Related Posts</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {relatedPosts.map(post => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="block bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-xl p-5 transition-all duration-200 hover:border-emerald-400"
        >
          <h4 className="text-lg font-semibold text-emerald-300">{post.title}</h4>
          <p className="text-slate-400 text-sm mt-1">{post.description}</p>
          <span className="text-xs text-slate-500 mt-2 inline-block">{post.date}</span>
        </Link>
      ))}
    </div>
  </div>
)}

      </div>
    </div>
  );
}
