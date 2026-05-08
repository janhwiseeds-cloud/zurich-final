export interface Review {
    text: string;
    name: string;
    rating: number;
}

export const reviews: Review[] = [
    {
        text: "Master Blaster 505 cleared my field of pests in just one spray. The knockdown effect is immediate, and my cauliflower crop is finally healthy.",
        name: "Rajesh Kumar",
        rating: 5,
    },
    {
        text: "I was struggling with resistant pests on my cotton. Protex Super worked wonders where other insecticides failed. Highly reliable product!",
        name: "Anita Desai",
        rating: 5,
    },
    {
        text: "Vinash helped me control weeds in my paddy field very effectively. It didn't affect the crop growth at all, just the weeds. Great herbicide.",
        name: "Vikram Singh",
        rating: 4,
    },
    {
        text: "Zuri Power really boosted the growth of my chilli plants. The flowering increased significantly, and the yield looks promising.",
        name: "Suresh Reddy",
        rating: 5,
    }
];