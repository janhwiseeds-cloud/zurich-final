import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium, modern font
import "./globals.css";
import { cn } from "../lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-neutral-950 font-sans antialiased text-neutral-100",
          outfit.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
