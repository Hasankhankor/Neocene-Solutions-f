import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="">Who We Are </a>

            </div>
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="https://www.portableas.com/wp-content/uploads/Mining-in-Australia.jpg" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4 ">
                    Neocene Solutions is more than a company; we are a collective of skilled geologists, engineers,
                    and industry professionals dedicated to pushing the boundaries of whats possible in mineral exploration.
                    With a shared commitment to excellence, our diverse team brings together a wealth of experience and expertise to every project we undertake.
                      We pride ourselves on providing solutions that are not only versatile but also meticulously crafted to address the distinct challenges and objectives of our clients
                      . Whether you seek individualized guidance or seek to streamline your entire operational framework,
                      Neocene Solutions is committed to being your trusted partner in achieving success and realizing your goals.</p>
                    <div className="flex px-12 pt-4 gap-x-4 ">
                        <Image src="/image/awards.png" width={100} height={80} alt="" className=" h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className=" h-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}