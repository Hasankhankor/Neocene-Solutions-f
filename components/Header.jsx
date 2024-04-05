import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="sticky inset-x-0 top-0 z-10 bg-gray-200 bg-opacity-60 backdrop-blur-lg">
            <div className="container flex items-center justify-between py-8">
                <div className="flex items-center flex-col"> {/* Wrap logo and text inside a flex container, and make it column direction */}
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
                    <h1 style={{ marginLeft: "20px", color: "#f9aa0a" }}> {/* Add some margin to separate logo and text, and set text color */}
                        Neocene Solutions Inc.<br />
                        <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>Discovery Oriented!</span>
                    </h1>
                </div>
                <Navigation />
            </div>
        </div>
    );
}
