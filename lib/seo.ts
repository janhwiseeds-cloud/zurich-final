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
  };
}
