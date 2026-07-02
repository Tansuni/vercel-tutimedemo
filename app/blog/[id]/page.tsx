import { client, Blog } from "../../lib/microcms";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const post = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: id,
  });

  return (
    <main className="min-h-screen pt-32 pb-20 px-10 max-w-3xl mx-auto">
      <p className="text-white/40 text-xs tracking-widest mb-6">
        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("ja-JP") : ""}
      </p>
      <h1 className="text-5xl font-bold tracking-widest mb-16 text-white leading-tight">
        {post.title}
      </h1>
    
      <div
        className="text-white/60 leading-relaxed text-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body ?? "" }}
      />
    </main>
  );
}