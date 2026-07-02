import { client, Blog } from "../lib/microcms";
import Link from "next/link";

export default async function BlogPage() {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });

  return (
    <main className="min-h-screen pt-32 pb-20 px-10 max-w-4xl mx-auto">
      <p className="text-cyan-400 tracking-[0.4em] text-xs uppercase mb-4">Blog</p>
      <h1 className="text-6xl font-bold tracking-widest mb-16 text-white">記事一覧</h1>

      <div className="grid grid-cols-1 gap-6">
        {data.contents.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="border border-white/10 p-8 hover:border-cyan-400/40 transition-colors duration-300 group block"
          >
            {post.thumbnail && (
              <img
                src={post.thumbnail.url}
                alt={post.title}
                className="w-full h-48 object-cover mb-6"
              />
            )}
            <p className="text-white/40 text-xs tracking-widest mb-2">
              {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
            </p>
            <h2 className="text-2xl font-bold tracking-widest text-white group-hover:text-cyan-400 transition-colors duration-300">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
