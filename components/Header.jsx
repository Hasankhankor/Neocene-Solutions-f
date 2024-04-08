import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="sticky inset-x-0 top-0 z-10 bg-gray-200 bg-opacity-60 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-8">
                <div className="flex items-center flex-col md:flex-row"> {/* Adjust flex direction for larger screens */}
                    <div className="mr-4 md:mr-8"> {/* Add margin for separation */}
                        <Image
                            src="https://ik.imagekit.io/os33grffu/Justlogo-removebg-preview.png?updatedAt=1712072212323"
                            alt="logo"
                            width={50} // Set fixed width
                            height={30} // Set fixed height
                            className="logo"
                            style={{
                                objectFit: "cover", // Ensure the image covers the entire space
                                maxWidth: "100%", // Ensure the image doesn't exceed its container
                                display: "block" // Ensures proper spacing
                            }}
                        />
                    </div>
                    <div> {/* Adjust margin for larger screens */}
                        <h1 style={{ color: "#f9aa0a" }}>
                            Neocene Solutions Inc.<br />
                            <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>
                                Discovery Oriented!
                            </span>
                        </h1>
                    </div>
                </div>
                <Navigation />
            </div>
        </div>
    );
}
