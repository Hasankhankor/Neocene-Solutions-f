import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {

    return (

        <div className="bg-zinc-50">
            <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                <p className="tracking-widest" style={{ fontSize: '19px' }}>Unveiling Earths Secrets, Empowering Exploration. </p>




                <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl" style={{ color: '#FFA500' }}> Welcome to Neocene Solutions</h1>

                    <div style={{ marginBottom: '20px' }}></div>
                    <p className="pb-6 text-gray-500 xl:pb-10">


Welcome esteemed visitors to Neocene Solutions, a realm where the convergence of discovery and cutting-edge technology takes precedence. Here, we extend our warm embrace to those seeking to embark on a journey of unparalleled innovation and advancement. With a steadfast commitment to excellence, we pledge to accompany you on your quest to unveil the treasures of tomorrow. At Neocene Solutions, we stand as vanguards, guiding you with precision and expertise toward the realization of your next profound discovery.<br />
                    </p>
                    <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-yellow-500 hover:bg-yellow-500 hover:ring-2 hover:ring-yellow-500 ring-offset-2 border border-white">
    Get Started
    <TbArrowUpRight className="w-5 h-5 ml-2" />
</button>




                </div>

                <div className="w-1/2">
                <Image src="/image/hero1.jpg" width={800} height={500} alt=""
                className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block border border-solid border-gray-500" />

                </div>

            </div>
        </div>
    );
}