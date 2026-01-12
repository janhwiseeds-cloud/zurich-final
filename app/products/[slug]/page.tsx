import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Generate static params for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
                Product not found.
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-green-50 text-green-900 selection:bg-green-200 selection:text-green-900">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <Link href="/products" className="inline-flex items-center gap-2 text-green-700 hover:text-green-500 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Products
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image Side */}
                        <div className="bg-white rounded-3xl overflow-hidden border border-green-100 relative aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center group shadow-sm p-4">
                            {product.image ? (
                                <div className="relative w-full h-full">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-50 via-white to-white opacity-80" />
                                    <span className="text-6xl lg:text-9xl font-black text-green-900/5 uppercase tracking-tighter select-none group-hover:scale-110 transition-transform duration-700">
                                        {product.category.split(" ")[0]}
                                    </span>
                                    <div className="relative z-10 text-center p-8">
                                        <p className="text-green-500 text-sm tracking-widest uppercase mb-4">No Image</p>
                                        <h1 className="text-4xl md:text-5xl font-bold text-green-900">{product.name}</h1>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content Side */}
                        <div className="space-y-10">
                            <div>
                                <span className="text-green-600 font-bold tracking-wider uppercase text-sm border border-green-200 bg-green-100 px-3 py-1 rounded-full">
                                    {product.category}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black mt-6 mb-4 leading-tight text-green-950">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-green-800/80 leading-relaxed border-l-4 border-green-500 pl-6">
                                    {product.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
                                    <h3 className="text-lg font-bold mb-4 text-green-700">Key Features</h3>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-green-800 text-sm">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
                                    <h3 className="text-lg font-bold mb-4 text-green-700">Usage Details</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs text-green-600/70 uppercase font-bold">Dosage</p>
                                            <p className="text-green-900 font-medium">{product.usageDetails}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-green-600/70 uppercase font-bold">Application</p>
                                            <p className="text-green-900 font-medium">Foliar Spray / Drenching</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-green-900">How to Use</h3>
                                <div className="space-y-4">
                                    {product.howToUse.map((step, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-green-100 shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">
                                                {i + 1}
                                            </div>
                                            <p className="text-green-800 pt-1">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-green-200">
                                <p className="text-green-700 mb-4">Want to order this product? Contact our sales team.</p>
                            </div>

                        </div>
                    </div>
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
