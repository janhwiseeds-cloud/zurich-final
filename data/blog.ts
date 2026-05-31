export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string; // ISO
  author: string;
  image?: string;
}

export const blog: BlogPost[] = [
  {
    id: "b1",
    slug: "integrated-pest-management-west-bengal",
    title: "Integrated Pest Management for West Bengal Farmers",
    excerpt: "A practical guide to integrated pest management (IPM) tailored for West Bengal's rice and vegetable systems.",
    content: "<p>Integrated Pest Management (IPM) combines monitoring, biological control, cultural practices and selective chemical use. For West Bengal, timing applications around transplanting and scouting for stem borers and leaf folders is crucial.</p>",
    publishedAt: "2024-10-10",
    author: "Zurich Agroscience Team",
    image: "/heroimage.png",
  },
  {
    id: "b2",
    slug: "how-to-choose-pesticide-for-paddy",
    title: "How to Choose the Right Pesticide for Paddy",
    excerpt: "A farmer-friendly checklist to match pesticides to pest biology and crop stage.",
    content: "<p>Select pesticides based on pest identification, mode of action and recommended dose. Rotate chemistries to reduce resistance.</p>",
    publishedAt: "2025-01-15",
    author: "Zurich Agroscience Team",
    image: "/masterbg.jpeg",
  },
];
