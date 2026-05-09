import { Metadata } from "next";
import Link from "next/link";
import { generateMetadataConfig, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "Terms of Service",
    description: "The terms and conditions that govern use of the Zurich Agroscience website and services.",
    url: `${siteConfig.url}/terms`,
    type: "website",
  }),
  keywords: [
    "terms of service",
    "terms",
    "zurich agroscience",
    "legal",
  ],
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-20 bg-white text-green-900">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-green-600 hover:underline">
            Home
          </Link>
          <span className="px-2">/</span>
          <span className="text-gray-600">Terms of Service</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-green-800/80 mb-8">Last updated: May 9, 2026</p>

        <section className="prose max-w-none text-green-800 mb-8">
          <p>
            Welcome to Zurich Agroscience. These Terms of Service ("Terms") govern your access to and use
            of our website, products, and services. By accessing or using our site, you agree to be bound
            by these Terms. If you do not agree, please do not use our services.
          </p>

          <h2>1. Use of the Website</h2>
          <p>
            You may use the website for lawful purposes only. You agree not to use the site in any way that
            violates applicable laws or regulations, infringes intellectual property rights, or is harmful to
            other users.
          </p>

          <h2>2. Product Information</h2>
          <p>
            We make reasonable efforts to display accurate product information, but we do not warrant that
            product descriptions, images, or other content are complete or error-free. Always refer to the
            product label and documented instructions before use.
          </p>

          <h2>3. Orders and Payments</h2>
          <p>
            Any orders placed through the website are subject to acceptance and availability. Prices and
            payment terms are as shown at the time of purchase. We reserve the right to refuse or cancel
            orders for any reason.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on the site, including text, graphics, logos, images, and software, is the property
            of Zurich Agroscience or its licensors and is protected by intellectual property laws. You may
            not reproduce or use our content without prior written permission.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Zurich Agroscience will not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising out of your access to or use of
            the site or products, even if advised of the possibility of such damages.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Changes will take effect when posted on this page.
            Continued use of the site after changes are posted constitutes acceptance of the new Terms.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms are governed by the laws applicable in the jurisdiction where Zurich Agroscience is
            incorporated, without regard to conflict of law principles.
          </p>

          <h2>8. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us through the channels listed on the
            website or at hello@xrahman.com.
          </p>
        </section>
      </div>
    </main>
  );
}
