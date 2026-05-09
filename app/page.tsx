import { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingHero from "@/components/LandingHero";
import Review from "@/components/Review";
import LandingReview from "@/components/LandingReview";
import { generateMetadataConfig, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Home",
    description: "Discover advanced pesticides, insecticides, herbicides, fungicides, and plant growth regulators. Zurich Agroscience provides science-backed solutions for modern farming.",
    url: siteConfig.url,
    type: "website",
  }),
  keywords: [...siteConfig.keywords, "crop protection solutions", "agricultural products", "farming chemicals"],
};

export default function Home() {
   
    const featuredProducts = products.slice(0, 6); // Show only the first 6 products as featured

    const last9Products = products.slice(-9); // Get the last 9 products for the "New Arrivals" section
    return (
        <main className="mx-auto w-full bg-red-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <LandingHero />
                <Review extraClass="mt-10" text="Master Blaster 505 cleared my field of pests in just one spray. The knockdown effect is immediate, and my cauliflower crop is finally healthy." name="Rajesh Kumar" rating={5} />
               
                <section className="p-6 max-w-7xl mx-auto mt-8">
                     <h2 className="text-3xl font-bold mb-4 text-center">Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className=" flex justify-center mt-8">
                        <Link href="/products">
                        <button className={`group outline-2 btn rounded-lg py-5.5 px-15 bg-linear-to-r from-emerald-500 bg-green-700  hover:bg-emerald-800  transtion-all duration-200 font-semibold text-white flex`}>
                            View All Products <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf-icon lucide-leaf size-4 transition-transform rotate-90 duration-300 group-hover:translate-x-1  group-hover:rotate-110"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        </button>
                    </Link>
                    </div>
                </section>
                <LandingReview />



                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 mb-10">
                        {last9Products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="relative w-full pt-10 px-4">

    {/* Badge */}
    <div className="absolute left-1/2  -translate-x-1/2 top-6 z-20">
        <div className="bg-white border-2 border-black text-black px-6 py-1 rounded-full whitespace-nowrap">
            <p className="text-sm font-bold uppercase tracking-wide">
                zurich
            </p>
        </div>
    </div>

    {/* Image Container */}
    <div className="border-4 border-white mb-20 outline-black outline-2 rounded-3xl overflow-hidden">
        <img
            src="/new.png"
            alt="Hero"
            className="w-full h-full object-cover"
        />
    </div>

</div>
            </div>
        </main>
    );
}
