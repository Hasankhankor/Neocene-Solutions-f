import Image from 'next/image'
import { TbArrowUpRight } from "react-icons/tb"
export default function About() {
    return (
        <div>
            <div className="bg-[url('https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg')] bg-center bg-cover ">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">WHO ARE WE?</h1>

            </div>
            <div className="container ">
                <div className="py-4 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">What Sets Us Apart</h2>
                    <p className="text-2xl font-medium lg:w-1/2">
                    Innovation: We leverage the latest technologies and methodologies to stay at the forefront of mineral exploration.
Integrity: Our approach is built on transparency, honesty, and a steadfast commitment to ethical practices in every facet of our operations.
Collaboration: We thrive on collaboration, working closely with our clients to understand their unique needs and tailor our services accordingly.
                    </p>
                </div>
                <div className="items-center lg:flex gap-x-8">
                    <div className="w-full">
                        <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" width={700} height={700} alt="" className="" />
                    </div>
                    <div className="">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">Our Services</h2>
                    <p className="pb-8 tracking-wide">
  Training: Elevate your team{'\''}s skills with our comprehensive mineral exploration training programs.
  Property Evaluation: Trust our in-depth assessments to unlock the potential of mineral-rich properties.
  <br />
  Mapping and Survey Design: Precision-driven geological and geochemical mapping, coupled with expert survey design.
  <br />
  Drill Management and Core Logging: From planning to execution, we manage drilling operations and provide meticulous core logging services.
  At Neocene Solutions, we don{'\''}t just explore minerals; we unearth opportunities. Join us on a journey where knowledge meets discovery, and together, we shape the future of mineral exploration.
  <br />
</p>

                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="">Read More <TbArrowUpRight className="text-xl" /> </a>


                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <h1 className="text-4xl font-bold tracking-wider text-center">TEAM</h1>
                    </div>
                    <div className="grid gap-20 py-8 lg:grid-cols-3">
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs.
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-gray-500 ">
                            <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                                <Image src="https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg" width={200} height={200} alt="" className="mx-auto rounded-full " />
                                <h2 className="py-4 text-2xl font-semibold " >BUILDING SURVEYS</h2>
                                <p className="text-sm text-gray-400">
                                Neocene Solutions is dedicated to delivering an extensive array of services tailored to meet your specific needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}