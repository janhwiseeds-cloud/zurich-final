"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import InfiniteMarquee from "./InfiniteMarquee";
import { products } from "@/data/products";


export default function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validPhone, setValidPhone] = useState(true);


      const marqueeItems = products.map(product => ({
            image: product.image,
            slug: product.slug,
            alt: product.name
        }));

    useEffect(() => {
        const phoneRegex = /^\+?[0-9\s\-()]{10,}$/;
        setValidPhone(phone === "" || phoneRegex.test(phone));
    }, [phone]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, message }),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success(data.message || "We will get back to you shortly.");
                setName("");
                setPhone("");
                setMessage("");
            } else {
                toast.error(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const ReadyMadeMessage = [
        "Hi, I'm interested in your services.",
        "Hire me for your agricultural needs.",
        "I have a question about your products.",
    ];

    return (
       <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f7fff7] to-[#eef8ee] px-4 overflow-hidden">
    
    <h1 className="text-5xl md:text-7xl mt-20 mb-10 font-black tracking-tight text-green-950">
        Contact Us
    </h1>

    <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-7"
    >
        <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-green-200 bg-white px-4 py-3 text-black outline-none transition-all duration-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 mb-4"
        />

        <div className="flex items-start gap-2 mb-4">
            <div className="rounded-xl border border-green-200 bg-white px-4 py-3 text-sm font-medium text-green-900">
                +91
            </div>

            <input
                type="text"
                placeholder="Your Phone Number"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition-all duration-200 focus:ring-4 ${
                    validPhone
                        ? "border-green-200 focus:border-green-500 focus:ring-green-100"
                        : "border-red-200 focus:border-red-400 focus:ring-red-100"
                }`}
            />
        </div>

        <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-28 resize-none rounded-xl border border-green-200 bg-white px-4 py-3 text-black outline-none transition-all duration-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 mb-4"
        />

        {ReadyMadeMessage.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
                {ReadyMadeMessage.map((msg, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Insert message ${i + 1}`}
                        onClick={() => setMessage(msg)}
                        className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition-all duration-200 hover:bg-green-100 hover:border-green-400"
                    >
                        {msg}
                    </button>
                ))}
            </div>
        )}

        <button
            disabled={!validPhone || isSubmitting}
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-green-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
    </form>

    <Link href="/">
        <p className="mt-6 text-sm underline font-medium text-green-700 hover:text-green-900 transition-colors duration-200">
            Back To Home
        </p>
    </Link>

    <div className="mx-auto w-full my-24 max-md:my-12 pointer-events-none">
        <InfiniteMarquee items={marqueeItems} />
    </div>
</div>
    );
}
