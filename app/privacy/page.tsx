import { Metadata } from "next";
import Link from "next/link";
import { generateMetadataConfig, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Privacy Policy | Zurich Agroscience",
    description: "Zurich Agroscience's privacy practices and how we handle your personal data.",
    url: `${siteConfig.url}/privacy`,
    type: "website",
  }),
  keywords: ["privacy policy", "data protection", "zurich agroscience"],
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-20 bg-white text-green-900">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-green-600 hover:underline">
            Home
          </Link>
          <span className="px-2">/</span>
          <span className="text-gray-600">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-green-800/80 mb-8">Last updated: May 9, 2026</p>

        <section className="prose max-w-none text-green-800 mb-8">
          <p>
            Zurich Agroscience values your privacy. This Privacy Policy explains how we collect, use,
            disclose, and protect your personal information when you use our website and services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide to us directly (such as name, email,
            phone number, billing/shipping address), as well as information collected automatically (such as
            IP address, device information, and usage data).
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information to provide and improve our services, process orders, communicate with
            you, comply with legal obligations, and for marketing purposes where you have consented.
          </p>

          <h2>3. Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to enhance user experience, remember preferences, and
            analyze site traffic. You can manage cookie preferences in your browser settings.
          </p>

          <h2>4. Sharing and Disclosure</h2>
          <p>
            We may share information with service providers, payment processors, shipping partners, and as
            required by law. We do not sell your personal information to third parties.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect personal information. However, no method
            of transmission or electronic storage is completely secure.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the
            processing of your personal data. Contact us to exercise these rights.
          </p>

          <h2>7. International Transfers</h2>
          <p>
            Your data may be transferred and processed in countries other than your own. We take steps to
            ensure appropriate safeguards are in place.
          </p>

          <h2>8. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will post changes on this page with an updated
            effective date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            For privacy inquiries, please contact us through the contact page on our website or at hello@xrahman.com.
          </p>
        </section>
      </div>
    </main>
  );
}
