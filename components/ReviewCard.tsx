import { Review } from "@/data/reviews";
import { Star, MapPin } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="bg-white/60 backdrop-blur-sm border border-green-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-500" : "text-green-200"}`}
                    />
                ))}
            </div>

            <p className="text-green-800 text-sm mb-6 leading-relaxed italic">
                &quot;{review.review}&quot;
            </p>

            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-green-700 font-bold">
                    {review.name[0]}
                </div>
                <div>
                    <h4 className="font-bold text-green-900 text-sm">{review.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-green-600/70">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                    </div>
                </div>
            </div>
        </div>
    );
}
