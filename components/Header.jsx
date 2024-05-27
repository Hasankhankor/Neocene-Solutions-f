import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import Navigation from "./Navigation";

export default function Header() {
    return (
        <div className="relative">
            <Image
                src="https://ik.imagekit.io/os33grffu/Backdrop.png?updatedAt=1712509362707"
                alt="Background"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Black transparent overlay */}
            <div className="container flex items-center justify-between py-8 relative z-20">
                <div className="flex items-center flex-col md:flex-row">
                    <div className="mr-4 md:mr-8">
                        <Link href="/"> {/* Wrap the logo with Link */}
                            <a>
                                <Image
                                    src="https://ik.imagekit.io/os33grffu/Justlogo-removebg-preview.png?updatedAt=1712072212323"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="logo"
                                    style={{
                                        objectFit: "cover",
                                        maxWidth: "100%",
                                        display: "block"
                                    }}
                                />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <h1 style={{ color: "#ffffff" }}>
                            <Link href="/"> {/* Wrap the company name with Link */}
                                <a style={{ textDecoration: 'none' }}>
                                    Neocene Solutions Inc.<br />
                                    <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px', color: "#ffffff" }}>
                                        Discovery Oriented!
                                    </span>
                                </a>
                            </Link>
                        </h1>
                    </div>
                </div>
                <Navigation />
            </div>
        </div>
    );
}
