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

export default function Home() {
    const featuredProducts = products.slice(0, 6); // Show only the first 6 products as featured
    return (
        <main className="mx-auto w-full bg-green-600/10 min-h-screen">
            <Navbar />

            <section className="max-w-7xl mx-auto mt-30 max-md:mt-10 ">
                <div className="flex flex-col gap-4 items-center justify-center text-center p-2">
                    <p className="text-green-700">
                        Growing Stronger Harvests
                    </p>
                    <h1 className="uppercase text-4xl sm:text-5xl max-md:text-3xl font-bold tracking-tight relative inline-block leading-tight">
                        <span className="bg-green-600 text-white px-2 py-1 inline-block">
                            Zurich agroscience
                        </span>

                        <span className="absolute 
                    -top-3 right-0 
                    translate-x-[70%] 
                    rotate-[30deg] 
                    lowercase 
                    text-xs sm:text-sm md:text-xl
                    whitespace-nowrap"
                        >
                            pvt. ltd.
                        </span>
                    </h1>
                    <p className="text-sm w-100 max-md:w-full">
                        Zurich Agroscience delivers trusted agro products designed to improve crop health, protect yields, and support sustainable farming practices.
                        From seeds to protection solutions, we help farmers grow with confidence.
                    </p>

                    <Link href="/products">
                        <button className={`group btn rounded-lg py-5.5 px-15 bg-green-600 hover:bg-green-800  transtion-all duration-200 font-semibold text-white flex`}>
                            View Products <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf-icon lucide-leaf size-4 transition-transform rotate-90 duration-300 group-hover:translate-x-1  group-hover:rotate-110"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        </button>
                    </Link>



                </div>
            </section>
            <section className="p-8 max-w-5xl mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>


                <div className=" flex justify-center mt-8">
                    <Link href="/products" className="flex items-center justify-center text-center gap-2 text-green-600 font-bold hover:text-green-500 transition-colors">
                        View All Products <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

        </main>
    );
}
