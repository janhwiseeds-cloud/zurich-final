"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductsContent() {
    const [filter, setFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const categories = ["All", "Pesticide", "Insecticide", "Herbicide", "Fungicide", "Growth Promoter", "Plant Growth Regulator"];

    const filteredProducts = products
        .filter(p => filter === "All" || p.category === filter)
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <section className="p-6">
            <div className="max-w-7xl mx-auto">

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
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

                {/* Search Bar */}
                <SearchBar 
                    onSearch={setSearchQuery} 
                    placeholder="Search products by name..."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
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
    );
}
