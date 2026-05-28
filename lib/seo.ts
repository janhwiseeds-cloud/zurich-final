export const siteConfig = {
  name: "Zurich Agroscience",
  description: "Premium agricultural solutions including pesticides, insecticides, herbicides, fungicides, and plant growth promoters for modern farming.",
  url: "https://zurich-agroscience.com",
  ogImage: "/zurichlogo.png",
  bannerImage: "/heroimage.png",
  logo: "/zurichlogo.png",
  links: {
    twitter: "https://twitter.com/zurichagro",
    facebook: "https://facebook.com/zurichagro",
  },
  keywords: [
    "pesticides",
    "insecticides",
    "herbicides",
    "fungicides",
    "plant growth regulator",
    "growth promoter",
    "agriculture",
    "farming solutions",
    "crop protection",
    "agroscience",
  ],
  // Primary operating area and address details to strengthen local SEO
  location: {
    address: "Maheshtala, Kolkata, West Bengal, India",
    city: "Kolkata",
    region: "West Bengal",
    country: "India",
  },
};

export function generateMetadataConfig(params?: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}) {
  const title = params?.title ? `${params.title} | Zurich Agroscience` : "Zurich Agroscience | Premium Agriculture Solutions";
  const description = params?.description || siteConfig.description;
  const image = params?.image || siteConfig.ogImage;
  const url = params?.url || siteConfig.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
      siteName: siteConfig.name,
      type: params?.type || "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@zurichagro",
    },
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
    // Add some local-focused keywords and long-tail keyword helper for pages that want them
    keywords: [
      ...siteConfig.keywords,
      "agriculture West Bengal",
      "crop protection West Bengal",
      "best pesticide in West Bengal",
      "best agriculture solutions in Kolkata",
      "agricultural products Kolkata",
    ],
  };
}

// Helper to create location-based long-tail keywords for products and pages
export function generateLongTailKeywords(baseKeywords: string[], opts?: { city?: string; region?: string }) {
  const city = opts?.city || siteConfig.location?.city || "";
  const region = opts?.region || siteConfig.location?.region || "";

  const locationSuffixes = [city, region].filter(Boolean);

  const longTails: string[] = [];

  baseKeywords.forEach((k) => {
    locationSuffixes.forEach((loc) => {
      longTails.push(`${k} in ${loc}`);
      longTails.push(`best ${k} in ${loc}`);
      longTails.push(`${k} suppliers ${loc}`);
    });
  });

  return Array.from(new Set([...baseKeywords, ...longTails]));
}
