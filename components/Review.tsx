type Review = {
    text: string;
    name: string;
    rating: number;
    extraClass?: string;
};

export default function Review({ text, name, rating, extraClass }: Review) {
    return (
        <div className={`flex flex-col max-w-md mx-auto items-center justify-center text-center ${extraClass}`}>

            {/* Stars */}
            <div className="flex items-center text-yellow-400">
                {[...Array(rating)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ))}
            </div>

            <p className="text-black text-lg leading-none mt-2 tracking-tight ">
                "{highlightWords(text)}"
            </p>

            <p className="text-green-800 mt-4 italic text-sm">
                -{name}
            </p>
        </div>
    );
}

export function highlightWords(text: string) {
    let highlightedCount = 0;

    return text.split(" ").map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, "");

        if (cleanWord.length > 5 && highlightedCount < 3) {
            highlightedCount++;

            return (
                <span key={index} className="text-green-700">
                    {word}{" "}
                </span>
            );
        }

        return word + " ";
    });
}