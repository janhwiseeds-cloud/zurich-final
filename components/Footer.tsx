"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CopyrightIcon } from "lucide-react";

export default function Footer() {
    const footerLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "#reviews", label: "Reviews" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <section className="w-screen h-auto relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-linear-to-r  from-green-200 to-green-500 border-t-2 border-black">
            <div className="max-w-5xl mx-auto px-4">
                <div className="w-full py-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & App Name */}
                    <Link href="/">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <Image
                                src="/zurichlogo.png"
                                alt="Zurich Agroscience"
                                width={50}
                                height={50}
                            />
                        </div>
                    </Link>

                    {/* Copyright */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-sm text-black font-semibold flex items-center gap-1">
                            <CopyrightIcon size={10}/> {new Date().getFullYear()} Zurich Agroscience
                        </div>
                             <p className="text-xs text-black/70">
                            All rights reserved. Pvt Ltd.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
