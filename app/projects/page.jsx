import Image from "next/image";

export default function Projects() {
    const items = [
        {
            id: "01",
            catagory: "Mineral Exporation",
            title: "Mineral Exploration",
            image: "https://ik.imagekit.io/os33grffu/Tab%201.png?updatedAt=1712504480753",
            description: "Geologists and exploration teams employ various techniques, such as geological mapping, geochemical analysis, and geophysical surveys, to identify potential areas for mineral resources.",
        },
        {
            id: "02",
            catagory: "Drill Management ",
            title: " Drill Management and Core Logging",
            image: "https://ik.imagekit.io/os33grffu/Tab%202.png?updatedAt=1712504481176",
            description: "Our Drilling Management and Core Logging services cover all aspects of drill program oversight, from pinpointing drill targets to managing contractors and ensuring precise core handling and logging. ",
        },
        {
            id: "03",
            catagory: " Database and Mapping",
            title: " Database and Mapping Revival Solutions",
            image: "https://ik.imagekit.io/os33grffu/Tab%203.png?updatedAt=1712504594108",
            description: "Our database management service not only organizes exploration databases efficiently but also revitalizes old maps, seamlessly integrating them with GIS-supported layers. ",
        },
        {
            id: "04",
            catagory: " Integrated Geophysical",
            title: " Integrated Geophysical Solutions",
            image: "https://ik.imagekit.io/os33grffu/Tab%204.png?updatedAt=1712504769285",
            description: "Our Geophysical Survey Design and Interpretation service offers tailored solutions for diverse deposit types, ensuring optimal outcomes in mineral exploration and mining. ",
        },
        {
            id: "05",
            catagory: "Geological Mapping",
            title: "Geological Mapping & Prospecting",
            image: "https://ik.imagekit.io/os33grffu/Tab%205.png?updatedAt=1712504650082",
            description: "Geological Mapping & Prospecting",
        },
    ];

    return (
        <div className="">
            <div className="bg-[url('https://ik.imagekit.io/os33grffu/Homepage%202.png?updatedAt=1712504269673')] bg-center bg-cover ">
                <div>
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-yellow-500 text-center">Services</h1>

                </div>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">
                {items.map((item) => (
                 <div key={item.id} className="relative overflow-hidden rounded-xl group bg-yellow-500">

                        <div className="w-full h-96 md:w-96 md:h-80"> {/* Larger size container */}
                            <Image src={item.image} alt={item.title} layout="fixed" width={500} height={300} />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold">{item.title}</h1>
                            <p className="py-4">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
