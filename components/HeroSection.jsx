import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";

export default function HeroSection() {
  return (
    <div className="bg-zinc-50 font-sans">
      <div className="container mx-auto px-4 py-8 text-center lg:flex lg:justify-between lg:py-0 lg:px-0 lg:text-left">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <p className="tracking-widest text-lg lg:text-xl xl:text-2xl">
            Unveiling Earth&apos;s Secrets, Empowering Exploration.
          </p>

          <h1 className="py-4 text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight text-yellow-500 ">
            Welcome to Neocene Solutions
          </h1>

          <div className="mb-8"></div>
          <p className="pb-9 text-gray-500 xl:pb-20 text-base lg:text-lg xl:text-xl">
            Welcome esteemed visitors to Neocene Solutions, a realm where the
            convergence of discovery and cutting-edge technology takes
            precedence. Here, we extend our warm embrace to those seeking to
            embark on a journey of unparalleled innovation and advancement. With
            a steadfast commitment to excellence, we pledge to accompany you on
            your quest to unveil the treasures of tomorrow. At Neocene Solutions,
            we stand as vanguards, guiding you with precision and expertise toward
            the realization of your next profound discovery.
          </p>
          <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-yellow-500 hover:bg-black hover:ring-2 hover:ring-yellow-600 ring-offset-2 border border-white">
            Get Started
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div style={{ width: '60px' }}></div>
        <div className="relative w-full h-72 lg:h-auto lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-full shadow-lg">
            <Image
              src="https://ik.imagekit.io/os33grffu/hero1.png?updatedAt=1712509170167"
              layout="fill"
              objectFit="cover"
              alt="Hero Image"
              className="shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
