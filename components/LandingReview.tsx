
import Review from "@/components/Review";

export default function LandingReview() {
     const reviewsLanding = [
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
    return (
         <section id="reviews" className="p-8 max-w-7xl mx-auto my-10">
                            <h2 className="text-3xl font-bold mb-4 text-center">Customer Reviews</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                                {reviewsLanding.map((review, index) => (
                                    <Review key={index} text={review.text} name={review.name} rating={review.rating} />
                                ))}
                            </div>
                        </section>
    )
};