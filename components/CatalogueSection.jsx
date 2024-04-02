import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "Mineral Exporation",
            title: "Mineral Exploration",
            image: "https://www.mining-technology.com/wp-content/uploads/sites/19/2020/05/5-e1589884717877.jpg",
            description: "Geologists and exploration teams employ various techniques, such as geological mapping, geochemical analysis, and geophysical surveys, to identify potential areas for mineral resources.",
        },
        {
            id: "02",
            catagory: "Drill Management ",
            title: " Drill Management and Core Logging",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
            description: "Our Drilling Management and Core Logging services cover all aspects of drill program oversight, from pinpointing drill targets to managing contractors and ensuring precise core handling and logging. ",
        },
        {
            id: "03",
            catagory: " Database and Mapping",
            title: " Database and Mapping Revival Solutions",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
            description: "Our database management service not only organizes exploration databases efficiently but also revitalizes old maps, seamlessly integrating them with GIS-supported layers. ",
        },
        {
            id: "04",
            catagory: " Integrated Geophysical",
            title: " Integrated Geophysical Solutions",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
            description: "Our Geophysical Survey Design and Interpretation service offers tailored solutions for diverse deposit types, ensuring optimal outcomes in mineral exploration and mining. ",
        },
        {
            id: "05",
            catagory: "Geological Mapping",
            title: "Geological Mapping & Prospecting",
            image: "https://frdusa.com/wp-content/uploads/2017/05/DCR20.jpg",
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

                        <a className="inline-flex items-center font-medium" href="">See Details <TbArrowNarrowRight className="ml-2 text-xl " /></a>
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
