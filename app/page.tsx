"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { MenuIcon } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LandingHero from "@/components/LandingHero";

export default function Home() {
    const featuredProducts = products.slice(0, 6); // Show only the first 6 products as featured
    return (
        <main className="mx-auto w-full bg-green-600/10 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <LandingHero />
                <section className="p-8 max-w-7xl mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className=" flex justify-center mt-8">
                        <Link href="/products" className="flex items-center justify-center text-center gap-2 text-green-800 font-bold hover:text-green-700 transition-colors duration-300">
                            View All Products <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </div>

        </main>
    );
}
