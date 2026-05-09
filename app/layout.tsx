import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadataConfig, siteConfig } from "@/lib/seo";
import { OrganizationSchema } from "@/components/StructuredData";
import FallingLeaves from "@/components/FallingLeaves";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Zurich Agroscience - Premium Agricultural Solutions",
    description: siteConfig.description,
    url: siteConfig.url,
  }),
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/zurichlogo.png",
    apple: "/zurichlogo.png",
  },
  manifest: "/site.webmanifest",
  authors: [
    {
      name: "Zurich Agroscience Pvt Ltd",
      url: siteConfig.url,
    },
  ],
  creator: "Zurich Agroscience",
  publisher: "Zurich Agroscience Pvt Ltd",
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
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <OrganizationSchema />
      </head>
      <body className="min-h-full scroll-smooth flex flex-col pt-16">
        <Navbar />
        <FallingLeaves />
        {children}
        <Footer />
      </body>
    </html>
  );
}
