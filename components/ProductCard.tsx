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
        <div
            className={cn(
                "group bg-white border outline-4 outline-green-700/100 border-green-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
                className
            )}
        >
            {/* Image */}
            <div className="relative h-60 bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-6 overflow-hidden border-b border-green-100">
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="text-5xl font-black text-green-100">
                        {product.category.slice(0, 3)}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
                {/* Category */}
                <div className="mb-3">
                    <span className="text-[11px] font-semibold bg-green-700 text-white px-3 py-1 rounded-full">
                        {product.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-green-950 mb-3 leading-tight group-hover:text-green-700 transition-colors">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-green-900/70 leading-relaxed mb-4 line-clamp-3">
                    {product.shortDescription}
                </p>
                    <p className="text-green-800/60 text-sm mb-4 line-clamp-2">
                        dose: {product.usageDetails}
                    </p>

                    <div className="mt-4">
                        <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center text-sm font-bold text-green-700 hover:text-green-600 transition-colors gap-2"
                        >
                            View Solution <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

        </div>
    );
}