import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "Mineral Exporation",
            title: "Mineral Exploration",
            image: "https://ik.imagekit.io/os33grffu/images%20(4).jpg?updatedAt=1712163215786",
            description: "Geologists and exploration teams employ various techniques, such as geological mapping, geochemical analysis, and geophysical surveys, to identify potential areas for mineral resources.",
        },
        {
            id: "02",
            catagory: "Drill Management ",
            title: " Drill Management and Core Logging",
            image: "https://ik.imagekit.io/os33grffu/images%20(5).jpg?updatedAt=1712254318192",
            description: "Our Drilling Management and Core Logging services cover all aspects of drill program oversight, from pinpointing drill targets to managing contractors and ensuring precise core handling and logging. ",
        },
        {
            id: "03",
            catagory: " Database and Mapping",
            title: " Database and Mapping Revival Solutions",
            image: "https://ik.imagekit.io/os33grffu/41746_2023_994_Fig1_HTML.png?updatedAt=1712254619767",
            description: "Our database management service not only organizes exploration databases efficiently but also revitalizes old maps, seamlessly integrating them with GIS-supported layers. ",
        },
        {
            id: "04",
            catagory: " Integrated Geophysical",
            title: " Integrated Geophysical Solutions",
            image: "https://ik.imagekit.io/os33grffu/images%20(6).jpg?updatedAt=1712254690031",
            description: "Our Geophysical Survey Design and Interpretation service offers tailored solutions for diverse deposit types, ensuring optimal outcomes in mineral exploration and mining. ",
        },
        {
            id: "05",
            catagory: "Geological Mapping",
            title: "Geological Mapping & Prospecting",
            image: "https://ik.imagekit.io/os33grffu/images.png?updatedAt=1712254689915",
            description: "Geological Mapping & Prospecting",
        },
    ];

    return (
<div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-5 md:grid-cols-2">
  {/* Your content here */}


            {items.map((item) => (
                <div key={item.id} className="relative overflow-hidden group">
                    <div>
                        <Image src={item.image} width={380} height={100} alt="" className="w-full " />
                    </div>
                    <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur" style={{ backgroundColor: '#f9aa0a' }}>
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm">{item.catagory}</p>
                            <span className="text-sm ">{item.id}</span>
                        </div>
                        <a className="block text-xl font-semibold" href="">{item.title}</a>
                        <p className="py-4" style={{ color: 'white' }}>{item.description}</p>

                        <a className="inline-flex items-center font-medium" href="/titles/page.jsx">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>


                    </div>

                    <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
                        <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
                        <span className="">
                            {item.id}
                        </span>

                    </div>
                </div>
            ))}
        </div>
    );
}
