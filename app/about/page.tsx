import { Metadata } from "next";
import Image from "next/image";
import Review from "@/components/Review";
import FAQAccordion from "@/components/FAQAccordion";
import { generateMetadataConfig, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...generateMetadataConfig({
    title: "About | Zurich Agroscience",
    description: "Learn about Zurich Agroscience - an Indian agrochemical company providing pesticides, fertilizers, hybrid seeds, and agricultural solutions.",
    url: `${siteConfig.url}/about`,
    type: "website",
  }),
  keywords: [
    "about zurich agroscience",
    "agrochemical company",
    "pesticides",
    "fertilizers",
    "hybrid seeds",
    "india",
  ],
};

export default function AboutPage() {
    return (
        <main className="max-w-7xl mx-auto p-4">

         
            <section className="my-20 max-md:my-10">
                   <section className="text-start my-10 mb-20 md:text-center mt-20 max-md:mt-10">
                <h1 className="text-2xl md:text-6xl font-bold text-black">
                    About <span className="text-green-600 max-md:text-3xl">Zurich Agroscience</span>
                </h1>
            </section>
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

             <Review extraClass="md:mt-30"  text="Packaging and branding look professional compared to local competitors." name="Amit" rating={5}/>

            <section className="md:mt-30 max-md:my-10">
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

              <Review extraClass="md:mt-40" text="The product quality is top-notch and has significantly improved my crop yield." name="Priya" rating={4}/>

            {/* FAQ Section */}
            <section className="my-20 md:mt-50  max-md:my-10">
                <h2 className="text-3xl flex-1 md:text-5xl font-bold text-center text-black max-md:mb-4 mb-12">
                    Frequently Asked <span className="text-green-600">Questions</span>
                </h2>
                <div className="max-w-4xl flex-1 mx-auto">
                    <div className="relative inline-block w-full">
                          
                            <FAQAccordion
                                items={[
                                    { title: "What does Zurich Agroscience Pvt Ltd do?", content: "The company works in agrochemicals, fertilizers, pesticides, hybrid seeds, and agricultural crop solutions." },
                                    { title: "Where is Zurich Agroscience Pvt Ltd located?", content: "Its registered office is in Maheshtala, Kolkata, West Bengal, India." },
                                    { title: "When was Zurich Agroscience Pvt Ltd established?", content: "The company was incorporated in 2020." },
                                    { title: "What products does the company sell?", content: "It sells pesticides, bio-fertilizers, crop protection products, and hybrid agricultural seeds." },
                                    { title: "Is Zurich Agroscience Pvt Ltd an active company?", content: "Yes, public MCA-related records currently list the company as active." },
                                ]}
                            />
                    
                    </div>
                </div>
            </section>


            <section className="md:spcace-y-10 my-40 max-md:my-10 md:grid  gap-20">
                  <Review text="Customer service was very helpful in addressing my concerns." name="Rahul" rating={5}/>
            </section>


        </main>
    )

};