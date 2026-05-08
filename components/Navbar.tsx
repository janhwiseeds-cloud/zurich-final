"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, MenuIcon } from "lucide-react";
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
        <section className="w-screen h-auto relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-green-200 ">
                       <div className="max-w-2xl mx-auto px-4 ">
                           <div className="w-full h-16 flex items-center justify-between p-4">
                               <div className="flex items-center gap-1">
                                   <Image 
                                       src="/zurichlogo.png"
                                       alt="Zurich Agroscience"
                                       width={30}
                                       height={30}
                                   />
                                   <p className="uppercase font-semibold text-2xl">Zurich <span className="text-green-700">Agroscience</span></p>
                               </div>
                               <div className="">
                                   <MenuIcon
                                       size={25} />
                               </div>
                           </div>
                       </div>
                   </section>
       
    );
}
