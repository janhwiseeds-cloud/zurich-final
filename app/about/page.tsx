import Image from "next/image";

import Review from "@/components/Review";


export default function AboutPage() {
    return (
        <main className="max-w-7xl mx-auto p-4">

            <section className="text-start md:text-center mt-20 max-md:mt-10">
                <h1 className="text-2xl md:text-6xl font-bold text-black">
                    About <span className="text-green-600 max-md:text-3xl">Zurich Agroscience</span>
                </h1>
            </section>
            <section className="my-20 max-md:my-10">
                <div className="flex max-md:flex-col gap-10 max-md:5 justify-center items-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-green-300 opacity-50 blur-md rotate-[-2deg] rounded-[10%]"></div>
                        <p className="leading-relaxed relative z-10 text-black max-md:text-sm text-lg">
                            <span className="font-bold">Zurich Agroscience Private Limited</span> is an Indian agrochemical and agricultural solutions company focused on pesticides, fertilizers, hybrid seeds, and bio-agriculture products. The company was incorporated in 2020 and is registered under the Registrar of Companies, Kolkata. Public MCA-related records show that it operates as a private non-government company with an active status. Its registered office is located in Maheshtala, Kolkata, West Bengal. The company promotes itself as a provider of sustainable farming solutions designed to improve crop productivity and support modern agricultural practices. Through its websites and product pages, Zurich Agroscience highlights products such as <span className="font-semibold text-green-700">bio-fertilizers, pesticides, hybrid corn seeds, and crop protection</span> solutions targeted toward Indian farmers and agricultural distributors.
                        </p>
                    </div>
                    <Image src="/heroimage.png" alt="About Zurich Agroscience" width={600} height={400} className="rounded-lg outline-2 outline-black border-4 shadow-md" />
                </div>


            </section>
            <Review extraClass="my-20" text="Packaging and branding look professional compared to local competitors." name="Amit" rating={5} />

            <section className="my-20 max-md:my-10">
                <div className="flex flex-row-reverse max-md:flex-col gap-10 max-md:5 justify-center items-center">
                    <div className="relative inline-block">
                        <div className="absolute -inset-2 bg-yellow-300 opacity-50 blur-md rotate-[-2deg] rounded-[10%]"></div>
                        <p className="leading-relaxed relative z-10 text-black max-md:text-sm text-lg">
                            Over the years, Zurich Agroscience Pvt. Ltd. has continued to expand its presence across different agricultural markets while maintaining a strong commitment to integrity and innovation. We are proud to contribute to the agricultural community by supporting sustainable farming practices and <span className="font-bold">promoting scientific crop management solutions.</span> Our company continues to strengthen its distribution network and improve its product portfolio to serve farmers more efficiently. With a passionate team and a farmer-first approach, we aim to become one of the most trusted agricultural solution providers in India. At Zurich Agroscience, we are committed to growing together with farmers and building a stronger future for agriculture through dedication, technology, and continuous improvement.
                        </p>
                    </div>
                    <Image src="/herobranch.png" alt="About Zurich Agroscience" width={300} height={400} className="rounded-lg outline-2 outline-black border-4 shadow-md" />
                </div>


            </section>


        </main>
    )

};