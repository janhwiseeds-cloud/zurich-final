import Image from "next/image"


export default function AboutPage() {
    return (
        <main className="max-w-7xl mx-auto p-4">
<section className="my-30 max-md:my-10">
    <div className="flex max-md:flex-col gap-10 max-md:5 justify-center items-center">
        <div>
            <p className="leading-relaxed max-md:text-sm text-lg">
                <span className="font-bold">Zurich Agroscience Private Limited</span> is an Indian agrochemical and agricultural solutions company focused on pesticides, fertilizers, hybrid seeds, and bio-agriculture products. The company was incorporated in 2020 and is registered under the Registrar of Companies, Kolkata. Public MCA-related records show that it operates as a private non-government company with an active status. Its registered office is located in Maheshtala, Kolkata, West Bengal. The company promotes itself as a provider of sustainable farming solutions designed to improve crop productivity and support modern agricultural practices. Through its websites and product pages, Zurich Agroscience highlights products such as <span className="font-semibold text-green-700">bio-fertilizers, pesticides, hybrid corn seeds, and crop protection</span> solutions targeted toward Indian farmers and agricultural distributors.
            </p>
        </div>
        <Image src="/heroimage.png" alt="About Zurich Agroscience" width={600} height={400} className="rounded-lg outline-2 outline-black border-4 shadow-md" />
    </div>
</section>

        </main>
    )

};