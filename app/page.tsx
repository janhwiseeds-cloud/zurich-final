"use client";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 5);

  return (
    <main className="min-h-screen bg-green-50 text-green-900 selection:bg-green-200 selection:text-green-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-80 h-80 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/60 border border-green-200 backdrop-blur-xl shadow-lg shadow-green-900/5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest text-green-800 uppercase">Innovating Agriculture</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1] text-green-950 drop-shadow-sm">
            ZURICH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              AGROSCIENCE
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-green-800/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Empowering farmers with advanced bio-fertilizers and pesticides.
            Sustainable solutions for a greener, more productive future.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/products"
              className="px-10 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full transition-all hover:shadow-2xl hover:shadow-green-600/40 flex items-center gap-3 group transform hover:-translate-y-1"
            >
              Explore Products <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-10 py-5 bg-white hover:bg-green-50 text-green-900 text-lg font-bold rounded-full backdrop-blur-md border-2 border-green-100 transition-all shadow-lg hover:shadow-xl hover:border-green-200 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-green-900">Our Solutions</h2>
              <p className="text-green-800/70 max-w-lg">High-performance products tailored for every stage of crop growth.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-green-600 font-bold hover:text-green-500 transition-colors">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            <div className="md:hidden flex justify-center mt-8">
              <Link href="/products" className="flex items-center gap-2 text-green-600 font-bold hover:text-green-500 transition-colors">
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-green-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-900">Farmer Stories</h2>
            <p className="text-green-800/70 max-w-2xl mx-auto">
              Hear from farmers across the country who have transformed their yields with Zurich Agroscience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}


      {/* Footer */}
      <footer className="py-10 border-t border-green-200 bg-white text-center">
        <p className="text-green-800/60 text-sm">
          © {new Date().getFullYear()} Zurich Agroscience Pvt Ltd. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
