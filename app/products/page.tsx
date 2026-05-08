import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductsContent from "@/components/ProductsContent";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Products | Zurich Agroscience - Pesticides, Insecticides & More",
  description: "Browse our complete range of agricultural products: pesticides, insecticides, herbicides, fungicides, and plant growth regulators for modern farming solutions.",
  keywords: "pesticides, insecticides, herbicides, fungicides, plant growth regulators, agricultural products, crop protection",
  openGraph: {
    title: "Premium Agricultural Products | Zurich Agroscience",
    description: "Discover science-backed agricultural solutions for crop protection and plant growth.",
    url: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {

    return (
        <main className="min-h-screen w-full">

            {/* Header */}
            <section className="p-6 bg-white border-b border-green-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-green-900">
                        Our <span className="text-green-600">Products</span>
                    </h1>
                </div>
            </section>

            {/* Filter & Grid */}
            <ProductsContent />

            
        </main>
    );
}
