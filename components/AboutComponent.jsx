import Image from "next/image";

export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-center pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-yellow-500 lg:text-5xl" href="">Who We Are</a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="max-w-full lg:max-w-none">
                    <Image
                        src="https://ik.imagekit.io/os33grffu/Homepage%202.png?updatedAt=1712504269673"
                        width={900}
                        height={500}
                        alt=""
                        className="object-cover w-full"
                    />
                </div>

                <div>
                    <p className="px-4 lg:px-0 pb-4 text-gray-600 text-sm lg:text-base">
                        We are a leading geological consultancy, offering comprehensive services and training tailored to your needs. Specializing in geological mapping, core logging, drill management, and database/project management, our expertly trained team adheres to modern industry standards. Our products provide invaluable insights into deposit types, adding substantial value to projects, facilitating progression to subsequent phases, and presenting data in formats readily understood by international investors. Additionally, our consultancy services cover a diverse range of geological mineralization models, offering data analysis and guidance for further exploration. From geological mapping and prospecting to soil mapping, drilling operations, and geochemical data interpretation, our team excels in all aspects of project management, ensuring seamless execution and successful outcomes.
                    </p>

                    <div className="flex px-4 lg:px-0 pt-4 gap-x-4">
                        <Image src="/image/awards.png" width={100} height={80} alt="" className="h-[100px]" />
                        <Image src="/image/awards1.png" width={100} height={80} alt="" className="h-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
