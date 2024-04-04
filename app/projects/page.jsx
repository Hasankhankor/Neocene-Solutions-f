import Image from "next/image";

export default function Projects() {
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
        <div className="">
            <div className="bg-[url('https://ik.imagekit.io/os33grffu/1028906-1-eng-GB-peabody-energy-1074x654.png?updatedAt=1712254450689')] bg-center bg-cover ">
                <div>
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-yellow-500 text-center">Services</h1>

                </div>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">
                {items.map((item) => (
                    <div key={item.id} className="relative overflow-hidden rounded-xl group">
                        <Image src={item.image} alt={item.title} width={500} height={300} />
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
