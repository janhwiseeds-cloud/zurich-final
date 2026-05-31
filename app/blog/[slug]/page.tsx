import { blog } from "@/data/blog";
import { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/seo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/StructuredData";

export async function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | Zurich Agroscience`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Zurich Agroscience`,
      description: post.excerpt,
      url,
      images: [{ url: post.image || siteConfig.ogImage, width: 1200, height: 630 }],
    },
    alternates: { canonical: url },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) return <div>Not found</div>;

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <ArticleSchema title={post.title} description={post.excerpt} author={post.author} datePublished={post.publishedAt} image={post.image} url={url} />
      <BreadcrumbSchema items={[{ name: "Home", url: siteConfig.url }, { name: "Blog", url: `${siteConfig.url}/blog` }, { name: post.title, url }]} />

      <article>
        <h1 className="text-3xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{post.publishedAt} • {post.author}</p>
        {post.image && <Image src={post.image} alt={post.title} width={900} height={400} className="rounded mb-6" />}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
