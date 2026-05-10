"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


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




    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4">Contact Us</h1>


            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md border border-green-100">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 input input-success border-green-300 p-2 rounded-md mb-4 w-full"
                />


                <input
                    type="text"
                    placeholder="Your Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-2 input input-success border-green-300 p-2 rounded-md mb-4 w-full"
                />


                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-2 input input-success border-green-300 p-2 rounded-md mb-4 w-full"
                />
                <button onClick={handleSubmit} className="btn rounded-lg py-5.5 px-15 cursor-pointer bg-green-600 hover:bg-green-800 outline-2  transtion-all duration-200 font-semibold text-white w-full">submit</button>
            </div>
        </div>
    )
}