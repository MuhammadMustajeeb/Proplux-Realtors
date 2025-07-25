export const getAllBlogs = async () => {
  const slugs = ["ai-for-realtors", "why-choose-a-real-estate-website", "seo-for-realtors", "ai-tools-for-real-estate" , "real-estate-website-must-haves", "how-to-market-yourself-as-realtor"];

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const res = await fetch(`/blogs/${slug}.md`);
        if (!res.ok) throw new Error(`Failed to load ${slug}.md`);
        const contentRaw = await res.text();

        const lines = contentRaw.split("\n").filter(line => line.trim() !== "");

        const title = lines[0].replace(/^#\s*/, "");
        const date = lines[1]?.replace(/^>\s*/, "") || "";
        const content = lines.slice(2).join("\n").trim();

        return { slug, title, date, content };
      } catch (err) {
        console.error(`Error loading ${slug}:`, err);
        return null;
      }
    })
  );

  return posts.filter(Boolean); // Remove nulls
};
