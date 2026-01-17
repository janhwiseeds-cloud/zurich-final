import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    className?: string;
}

// Define an array of intense/neon colors for the border
const borderColors = [
    "#16a34a", // Green (Default)
    "#ef4444", // Red
    "#3b82f6", // Blue
    "#a855f7", // Purple
    "#f59e0b", // Amber/Orange
    "#ec4899", // Pink
    "#06b6d4", // Cyan
    "#eab308", // Yellow
];

export default function ProductCard({ product, className }: ProductCardProps) {
    // Deterministically select a color based on the product ID
    // We use a simple hash of the ID to pick an index
    const colorIndex = product.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % borderColors.length;
    const activeColor = borderColors[colorIndex];

    return (
        <div className={cn("group relative rounded-2xl overflow-hidden p-[2px] max-md:shadow-md hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300", className)}>
            {/* Animated Border Background */}
            {/* We use inline styles for the dynamic gradient color to ensure it shines brightly */}
            <div
                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] opacity-100"
                style={{
                    background: `conic-gradient(from 90deg at 50% 50%, #0000 0%, ${activeColor} 50%, #0000 100%)`
                }}
            />

            {/* Content Container (Masks the border) */}
            <div className="relative h-full w-full bg-white rounded-[14px] overflow-hidden flex flex-col">
                {/* Image Container */}
                {/* Mobile: h-64 (intermediate size), Desktop: h-56 */}
                {/* Mobile: p-2 (small padding to prevent edge touching), Desktop: p-4 */}
                <div className="h-64 md:h-56 w-full bg-white relative overflow-hidden flex items-center justify-center p-2 md:p-4 border-b border-green-50 shrink-0">
                    {product.image ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                // Use object-contain everywhere to ensuring NOTHING gets cut off. 
                                // It will scale down to fit within the box fully visible.
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-green-50 flex items-center justify-center">
                            <span className="text-4xl font-black text-green-900/10 uppercase tracking-widest">{product.category.slice(0, 3)}</span>
                        </div>
                    )}
                </div>

                <div className="p-6 relative z-20 flex-grow flex flex-col">
                    <div className="mb-2">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider border border-green-200 px-2 py-1 rounded-full bg-green-50">
                            {product.category}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-green-900 mb-2 group-hover:text-green-600 transition-colors">
                        {product.name}
                    </h3>
                    <p className="text-green-800/60 text-sm mb-4 line-clamp-2">
                        {product.shortDescription}
                    </p>
                    <p className="text-green-800/60 text-sm mb-4 line-clamp-2">
                        dose: {product.usageDetails}
                    </p>

                    <div className="mt-auto">
                        <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center text-sm font-bold text-green-700 hover:text-green-500 transition-colors gap-2"
                        >
                            View Solution <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
