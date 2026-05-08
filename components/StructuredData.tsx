import { siteConfig } from "@/lib/seo";

interface StructuredDataProps {
  type: "Organization" | "Product" | "BreadcrumbList";
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
