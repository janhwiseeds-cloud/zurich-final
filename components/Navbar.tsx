"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "#reviews", label: "Reviews" },
        { href: "#contact", label: "Contact" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <section className="fixed top-0 z-50 border-b-2 border-black  h-auto left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-green-200">
            <div className="max-w-5xl mx-auto px-4 ">
                <div className="w-full py-3 flex items-center justify-between">
                    {/* Logo & App Name */}
                    <Link href="/">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <Image
                                src="/zurichlogo.png"
                                alt="Zurich Agroscience"
                                width={30}
                                height={30}
                            />
                            <p className="uppercase font-semibold text-lg">
                                Zurich <span className="text-green-700 font-bold">Agroscience</span>
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-black font-semibold transition-colors",
                                    isActive(link.href)
                                        ? "bg-white"
                                        : " hover:text-green-700"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className="md:hidden bg-green-100 border-2 rounded-2xl border-green-300 py-4 mb-5 px-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-4 py-3 rounded-lg font-semibold transition-colors",
                                    isActive(link.href)
                                        ? "text-white bg-green-700"
                                        : "text-green-950 hover:bg-green-200"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
