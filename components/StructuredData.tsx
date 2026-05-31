import { siteConfig } from "@/lib/seo";

interface StructuredDataProps {
  type: "Organization" | "Product" | "BreadcrumbList" | "WebSite" | "LocalBusiness" | "SearchAction" | "FAQPage" | "Article";
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
  };

  const structuredData = { ...baseStructure, ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/zurichlogo.png`,
        sameAs: [siteConfig.links.twitter, siteConfig.links.facebook],
        contact: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          availableLanguage: ["en"],
        },
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: siteConfig.name,
        url: siteConfig.url,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/products?search={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <StructuredData
      type="LocalBusiness"
      data={{
        name: siteConfig.name,
        image: `${siteConfig.url}${siteConfig.bannerImage}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location?.address || "",
          addressLocality: siteConfig.location?.city || "",
          addressRegion: siteConfig.location?.region || "",
          addressCountry: siteConfig.location?.country || "",
        },
        telephone: "",
        url: siteConfig.url,
      }}
    />
  );
}

export function ProductSchema({ name, description, image, category, slug }: {
  name: string;
  description: string;
  image: string;
  category: string;
  slug: string;
}) {
  return (
    <StructuredData
      type="Product"
      data={{
        name,
        description,
        image: `${siteConfig.url}${image}`,
        category,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        url: `${siteConfig.url}/products/${slug}`,
        // If site wants to add offers/pricing later, keep offers template here
        offers: {
          "@type": "Offer",
          url: `${siteConfig.url}/products/${slug}`,
          availability: "https://schema.org/InStock",
        },
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <StructuredData
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function FAQPageSchema({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <StructuredData
      type="FAQPage"
      data={{
        mainEntity: items.map((qa) => ({
          "@type": "Question",
          name: qa.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: qa.answer,
          },
        })),
      }}
    />
  );
}

export function ArticleSchema({ title, description, author, datePublished, image, url }: { title: string; description: string; author: string; datePublished: string; image?: string; url: string }) {
  return (
    <StructuredData
      type="Article"
      data={{
        headline: title,
        description,
        author: { "@type": "Organization", name: author },
        datePublished,
        image: image ? `${siteConfig.url}${image}` : undefined,
        url,
      }}
    />
  );
}
