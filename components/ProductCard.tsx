import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
    className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
    return (
        <div className={cn(
            "group relative flex flex-col w-full bg-white rounded-2xl transition-all duration-300",
            className
        )}>
            {/* Colorful Animated Shine Shadow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-emerald-400 to-green-600 rounded-2xl blur opacity-65 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />

            <div className={cn(
                "relative flex flex-col w-full bg-white rounded-2xl overflow-hidden h-full",
                "border border-green-100", // Subtle border
                "shadow-md group-hover:shadow-xl", // Base shadows
            )}>
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


