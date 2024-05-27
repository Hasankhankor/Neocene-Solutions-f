import Image from "next/image";

export default function Projects() {
    const items = [
        {
            id: "01",
            category: "Geological Mapping",
            title: "Geological Mapping",
            image: "https://ik.imagekit.io/os33grffu/Tab%201.png?updatedAt=1712504480753",
            description: "Geologists and exploration teams employ various techniques, such as geological mapping, geochemical analysis, and geophysical surveys, to identify potential areas for mineral resources.",
            link: "/GeologicalMapping"
        },
        {
            id: "02",
            category: "Drill Management",
            title: "Drill Management and Core Logging",
            image: "https://ik.imagekit.io/os33grffu/Tab%202.png?updatedAt=1712504481176",
            description: "Our Drilling Management and Core Logging services cover all aspects of drill program oversight, from pinpointing drill targets to managing contractors.",
            link: "/DrillManagement"
        },
        {
            id: "03",
            category: "Database Solutions",
            title: "Database and Mapping Revival Solutions",
            image: "https://ik.imagekit.io/os33grffu/Tab%203.png?updatedAt=1712504594108",
            description: "Our database management service not only organizes exploration databases efficiently but also revitalizes old maps.",
            link: "/DatabaseAndMapping"
        },
        {
            id: "04",
            category: "Geophysical Solutions",
            title: "Geophysical Solutions",
            image: "https://ik.imagekit.io/os33grffu/Tab%204.png?updatedAt=1712504769285",
            description: "Our Geophysical Survey Design and Interpretation service offers tailored solutions for diverse deposit types, ensuring optimal outcomes in mineral exploration and mining.",
            link: "/GeophysicalSolutions"
        },
        {
            id: "05",
            category: "Enhancement of Exploration Skills",
            title: "Enhancement of Exploration Skills",
            image: "https://ik.imagekit.io/os33grffu/Tab%205.png?updatedAt=1712504650082s",
            description: "We offer comprehensive workforce training tailored to elevate proficiency in modern mineral exploration techniques and project management skills.",
            link: "/EnhancementofExploration"
        },
    ];

    const isValidImage = (url) => {
        return url && (url.startsWith('/') || url.startsWith('http://') || url.startsWith('https://'));
    };

    const defaultImage = "/default-image.png"; // Path to your default image

    return (
        <div className="p-4 md:p-10 lg:p-20">
            <div className="bg-[url('https://ik.imagekit.io/os33grffu/_51bec44b-6205-408a-a2c4-b202d6505d83%20(2).jfif?updatedAt=1716662262264')] bg-center bg-cover p-10 md:p-20">
                <div className="bg-orange-500 p-2 w-1">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center text-white">Services</h1>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                {items.map((item) => (
                    <div key={item.id} className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                        <div className="w-full h-60 md:h-72 relative">
                            <Image
                                src={isValidImage(item.image) ? item.image : defaultImage}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-6 bg-white">
                            <div className="relative mb-8">
                                <div className="absolute top-0 left-0 z-10 bg-orange-500 text-white py-1 px-2 rounded-tr-md rounded-bl-md">{item.title}</div>
                                <p className="text-md text-white bg-black p-3">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
