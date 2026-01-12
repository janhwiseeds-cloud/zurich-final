"use client";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductsPage() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", "Pesticide", "Fertilizer", "Growth Promoter"];

    const filteredProducts = filter === "All"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-green-50 text-green-900 selection:bg-green-200 selection:text-green-900">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-12 px-6 bg-white border-b border-green-100">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-green-900">
                        Our <span className="text-green-600">Products</span>
                    </h1>
                    <p className="text-green-800/70 max-w-2xl mx-auto">
                        Scientific solutions designed to maximize crop yield and quality. Explore our range of premium fertilizers and pesticides.
                    </p>
                </div>
            </section>

            {/* Filter & Grid */}
            <section className="py-12 px-6">
                <div className="container mx-auto">

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold border transition-all",
                                    filter === cat
                                        ? "bg-green-600 border-green-600 text-white shadow-lg shadow-green-600/20"
                                        : "bg-white border-green-200 text-green-700 hover:border-green-400 hover:text-green-900"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-green-800/50">No products found for this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <footer className="py-10 border-t border-green-200 bg-white text-center">
                <p className="text-green-800/60 text-sm">
                    © {new Date().getFullYear()} Zurich Agroscience Pvt Ltd. All rights reserved.
                </p>
            </footer>
        </main>
    );
}
