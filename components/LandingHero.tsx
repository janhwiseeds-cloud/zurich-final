
import Link from "next/link";

export default function LandingHero() {
    return (
             <section className="max-w-7xl mx-auto mt-10 ">
                <div className="flex flex-col gap-4 items-center justify-center text-center p-2">
                    <p className="text-green-700">
                        Growing Stronger Harvests
                    </p>
                    <h1 className="uppercase text-4xl sm:text-5xl max-md:text-3xl font-bold tracking-tight relative inline-block leading-tight">
                        <span className="bg-green-600 text-white px-2 py-1 inline-block">
                            Zurich agroscience
                        </span>

                        <span className="absolute 
                    -top-3 right-0 
                    translate-x-[70%] 
                    rotate-[30deg] 
                    lowercase 
                    text-xs sm:text-sm md:text-xl
                    whitespace-nowrap"
                        >
                            pvt. ltd.
                        </span>
                    </h1>
                    <p className="text-sm w-100 max-md:w-full">
                        Zurich Agroscience delivers trusted agro products designed to improve crop health, protect yields, and support sustainable farming practices.
                        From seeds to protection solutions, we help farmers grow with confidence.
                    </p>

                    <Link href="/products">
                        <button className={`group btn rounded-lg py-5.5 px-15 bg-green-600 hover:bg-green-800  transtion-all duration-200 font-semibold text-white flex`}>
                            View Products <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf-icon lucide-leaf size-4 transition-transform rotate-90 duration-300 group-hover:translate-x-1  group-hover:rotate-110"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
                        </button>
                    </Link>

              


<div className="relative w-full pt-10 px-4">

    {/* Badge */}
    <div className="absolute left-1/2 -translate-x-1/2 top-6 z-20">
        <div className="bg-white border-2 border-black text-black px-6 py-1 rounded-full whitespace-nowrap">
            <p className="text-sm font-bold uppercase tracking-wide">
                New
            </p>
        </div>
    </div>

    {/* Image Container */}
    <div className="border-2 border-black outline-green-600 outline-4 rounded-3xl overflow-hidden">
        <img
            src="/heroimage.png"
            alt="Hero"
            className="w-full h-full object-cover"
        />
    </div>

</div>

                </div>
            </section>
    )};