"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const nav = [
	{ href: "/", label: "HOME" },
	{ href: "/projects", label: "PROJECTS" },
	{ href: "/about", label: "ABOUT US" },
	{ href: "/gallery", label: "SERVICES" },
];

export default function Navigation() {
	const pathname = usePathname();
	const [isOpen, setOpen] = useState(false);
      const [isOpen2, setIsOpen2] = useState(false);

			const handleMouseEnter = () => {
				setIsOpen2(true);
			};

			const handleMouseLeave = () => {
				setIsOpen2(false);
			};

	return (
		<>
			<button className="block lg:hidden" onClick={() => setOpen(!isOpen)}>
				<svg
					className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
				<svg
					className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
				</svg>
			</button>

			<nav
    className={`lg:flex gap-x-6 transform transition ${
        isOpen
            ? "flex flex-col px-8 py-12 z-50  gap-y-6 absolute inset-y-0 bg-white right-0  translate-x-0 "
            : "hidden max-md:translate-x-full"
    }`}
>
    <Link
        href="/"
        className={pathname === "/" ? "text-black font-semibold" : ""}
    >
        HOME
    </Link>
    <Link
        href="/projects"
        className={pathname === "/projects" ? "text-black font-semibold" : ""}
    >
        EVENTS
    </Link>
    <Link
        href="/about"
        className={pathname === "/about" ? "text-black font-semibold" : ""}
    >
        ABOUT
    </Link>
    <Link
        href="/careers"
        className={pathname === "/careers" ? "text-black font-semibold" : ""}
    >
        CAREERS
    </Link>
    <Link
        href="/faqs"
        className={pathname === "/faqs" ? "text-black font-semibold" : ""}
    >
        FAQS
    </Link>
</nav>
<div
    className={` ${
        isOpen ? "fixed inset-0 z-30 bg-opacity-50" : "hidden"
    } `}
    style={{ backgroundColor: pathname === "/careers" || pathname === "/faqs" ? "#f9aa0a" : "" }}
    onClick={() => setOpen(false)}
></div>

<Link
    href="/contact"
    className="items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100"
    style={{ color: '#f9aa0a', borderColor: '#f9aa0a' }}
>
    Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
</Link>


		</>
	);
}
