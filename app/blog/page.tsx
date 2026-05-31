import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { siteConfig, generateMetadataConfig } from "@/lib/seo";
import { blog } from "@/data/blog";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Blog | Zurich Agroscience - Farming Tips & Guides",
    description: "Articles and practical guides for farmers: integrated pest management, pesticide selection, crop nutrition, and regional advice.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  }),
};

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-4">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold">Zurich Agroscience Blog</h1>
        <p className="mt-3 text-green-800">Practical agricultural advice and product guides.</p>
      </header>

      <section className="mt-10 space-y-6">
        {blog.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="block p-4 bg-white rounded-lg border border-green-100 shadow-sm hover:shadow-md">
            <div className="flex gap-4 items-center">
              <Image src={post.image || "/heroimage.png"} alt={post.title} width={140} height={90} className="object-cover rounded" />
              <div>
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-sm text-green-800/80 mt-1">{post.excerpt}</p>
                <p className="text-xs text-gray-500 mt-2">{post.publishedAt} • {post.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
