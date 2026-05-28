import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateMetadataConfig, siteConfig, generateLongTailKeywords } from "@/lib/seo";
import { FAQPageSchema, BreadcrumbSchema } from "@/components/StructuredData";
import { products } from "@/data/products";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Best Agriculture Solutions in West Bengal | Zurich Agroscience",
    description:
      "Find the best agricultural products and crop protection solutions in West Bengal — curated pesticides, herbicides, insecticides and growth promoters from Zurich Agroscience.",
    url: `${siteConfig.url}/solutions/west-bengal`,
    type: "website",
  }),
  keywords: generateLongTailKeywords([
    "best agriculture solutions",
    "crop protection",
    "pesticides",
    "insecticides",
  ]),
  alternates: { canonical: `${siteConfig.url}/solutions/west-bengal` },
};

export default function WestBengalSolutions() {
  // pick 4 recommended products relevant to paddy and common crops in the region
  const recommended = products.filter((p) => ["Pesticide", "Growth Promoter", "Insecticide"].includes(p.category)).slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Solutions", url: `${siteConfig.url}/solutions` },
          { name: "West Bengal", url: `${siteConfig.url}/solutions/west-bengal` },
        ]}
      />

      <FAQPageSchema
        items={[
          {
            question: "Which products are best for paddy crop protection in West Bengal?",
            answer:
              "For paddy, we recommend products like Zaterra and Vinash, which control stem borers and weeds respectively. Choose based on crop stage and local pest pressure.",
          },
          {
            question: "How can I contact Zurich Agroscience for bulk orders in West Bengal?",
            answer: `You can contact our sales team via the Contact page or reach out to local distributors listed on the website for purchase and technical guidance.`,
          },
        ]}
      />

      <header className="prose prose-green mx-auto text-center">
        <h1>Best Agriculture Solutions in West Bengal</h1>
        <p className="lead">
          Zurich Agroscience supplies proven crop protection and growth-promoting products tailored for the agricultural needs of West Bengal farmers.
        </p>
      </header>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-bold">Why Zurich for West Bengal?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Products tested for local crop cycles and pest profiles.</li>
          <li>Distribution network in and around Kolkata and regional partners.</li>
          <li>Technical guidance for dosage and application tailored to smallholder farms.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Recommended Products</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {recommended.map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-green-100 shadow-sm">
              <Image src={p.image} alt={p.name} width={120} height={80} className="object-contain rounded" />
              <div>
                <h4 className="font-bold">{p.name}</h4>
                <p className="text-sm text-green-800/80">{p.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 prose">
        <h3>Practical Tips for West Bengal Farmers</h3>
        <p>
          Effective pest and weed management starts with timely scouting. Match product selection to the pest stage, follow label dosages and rotate modes of action to reduce resistance risks. Our technical team is available to advise on integrated pest management strategies suited for coastal and deltaic zones of West Bengal.
        </p>
      </section>

      <section className="mt-12">
        <Link href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow">
          Contact our West Bengal sales team
        </Link>
      </section>
    </main>
  );
}
