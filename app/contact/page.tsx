import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { generateMetadataConfig, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Contact",
    description: "Contact Zurich Agroscience for product inquiries, sales, and support.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  }),
  keywords: [
    "contact",
    "zurich agroscience",
    "agriculture",
    "pesticides",
    "insecticides",
  ],
};

export default function ContactPage() {
  return <ContactForm />;
}