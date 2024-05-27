import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="container py-8 lg:py-16 px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="relative w-full h-64 lg:h-auto lg:w-full flex justify-center items-center">

          <div className="relative w-full h-full shadow-lg gap-3">
            <Image
              src="https://ik.imagekit.io/os33grffu/Homepage%202.png?updatedAt=1712504269673"
              layout="fill"
              objectFit="cover"
              alt="About Image"
              className="shadow-xl"
            />
          </div>
        </div>

        <div className="mb-8 lg:flex lg:flex-col lg:items-center lg:justify-center font-sans">
          <a className="py-4 text-3xl font-extrabold leading-tight text-yellow-500 lg:text-5xl" href="">
            Who We Are
          </a>

          <div style={{ height: '30px' }}></div>
          <div className="mb-8 flex justify-center">
            <p className="text-gray-500 xl:pb-20 text-base lg:text-lg xl:text-xl w-full">
              We are a leading geological consultancy, offering comprehensive services and training tailored to your needs. Specializing in geological mapping, core logging, drill management, and database/project management, our expertly trained team adheres to modern industry standards. Our products provide invaluable insights into deposit types, adding substantial value to projects, facilitating progression to subsequent phases, and presenting data in formats readily understood by international investors. Additionally, our consultancy services cover a diverse range of geological mineralization models, offering data analysis and guidance for further exploration. From geological mapping and prospecting to soil mapping, drilling operations, and geochemical data interpretation, our team excels in all aspects of project management, ensuring seamless execution and successful outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
