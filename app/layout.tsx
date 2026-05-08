import type { Metadata } from "next";
import { Gabarito } from "next/font/google"; // Premium, modern font
import "./globals.css";
import { cn } from "../lib/utils";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});


export const metadata: Metadata = {
  title: "Zurich Agroscience | Premium Agriculture Solutions",
  description: "Advanced fertilizers and pesticides for modern farming. Empowering farmers with science-backed solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gabarito.className} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full scroll-smooth flex flex-col">{children}</body>
    </html>
  );
}
