"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-green-900">
                            Get in Touch
                        </h2>
                        <p className="text-green-800/70 mb-8 max-w-md">
                            Have questions about our products or want to become a distributor?
                            Reach out to us today.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 rounded-full text-green-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-green-900">Our Office</h3>
                                    <p className="text-green-800/70">
                                        123 Agriculture Way,
                                        <br />
                                        Green Valley, State - 543210
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 rounded-full text-green-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-green-900">Email Us</h3>
                                    <p className="text-green-800/70">
                                        <a href="mailto:info@zurichagro.com" className="hover:text-green-600 transition-colors">
                                            info@zurichagro.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-green-100 rounded-full text-green-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-green-900">Call Us</h3>
                                    <p className="text-green-800/70">
                                        <a href="tel:+919876543210" className="hover:text-green-600 transition-colors">
                                            +91 98765 43210
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 p-8 rounded-3xl border border-green-100 shadow-xl shadow-green-900/5">
                        <h3 className="text-2xl font-bold mb-6 text-green-900">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-green-800">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-green-800">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                        placeholder="+91..."
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-green-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-green-800">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-green-600/30"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
