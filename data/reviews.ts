export interface Review {
    id: string;
    name: string;
    role: string; // e.g., "Wheat Farmer", "Orchard Owner"
    location: string;
    review: string;
    rating: number; // 1-5
    image: string; // Placeholder or path
}

export const reviews: Review[] = [
    {
        id: "1",
        name: "Rajesh Kumar",
        role: "Vegetable Farmer",
        location: "Punjab, India",
        review: "Master Blaster 505 cleared my field of pests in just one spray. The knockdown effect is immediate, and my cauliflower crop is finally healthy.",
        rating: 5,
        image: "/placeholder-user.png"
    },
    {
        id: "2",
        name: "Anita Desai",
        role: "Cotton Grower",
        location: "Maharashtra, India",
        review: "I was struggling with resistant pests on my cotton. Protex Super worked wonders where other insecticides failed. Highly reliable product!",
        rating: 5,
        image: "/placeholder-user.png"
    },
    {
        id: "3",
        name: "Vikram Singh",
        role: "Paddy Farmer",
        location: "Haryana, India",
        review: "Vinash helped me control weeds in my paddy field very effectively. It didn't affect the crop growth at all, just the weeds. Great herbicide.",
        rating: 4,
        image: "/placeholder-user.png"
    },
    {
        id: "4",
        name: "Suresh Reddy",
        role: "Chilli Farmer",
        location: "Andhra Pradesh, India",
        review: "Zuri Power really boosted the growth of my chilli plants. The flowering increased significantly, and the yield looks promising.",
        rating: 5,
        image: "/placeholder-user.png"
    }
];
