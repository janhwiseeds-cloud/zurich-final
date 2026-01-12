"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-green-100 py-4 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-green-600 p-1.5 rounded-lg group-hover:bg-green-500 transition-colors">
                        <Image
                            src="/LOGO.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-green-900">
                        ZURICH <span className="text-green-600">AGRO</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-green-900/70 hover:text-green-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/products" className="text-sm font-medium text-green-900/70 hover:text-green-600 transition-colors">
                        Products
                    </Link>
                    <Link href="#reviews" className="text-sm font-medium text-green-900/70 hover:text-green-600 transition-colors">
                        Reviews
                    </Link>

                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-neutral-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-neutral-950 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                    <Link
                        href="/"
                        className="text-lg font-medium text-neutral-300 hover:text-green-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        className="text-lg font-medium text-neutral-300 hover:text-green-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Products
                    </Link>
                    <Link
                        href="#reviews"
                        className="text-lg font-medium text-neutral-300 hover:text-green-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Reviews
                    </Link>
                </div>
            )}
        </nav>
    );
}
