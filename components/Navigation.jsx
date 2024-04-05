// components/Navigation.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbArrowUpRight } from "react-icons/tb";

export default function Navigation() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };


  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="lg:flex gap-x-6">
        <Link href="/" className={pathname === "/" ? "text-black font-semibold" : ""}>
          HOME
        </Link>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/projects" className={pathname === "/projects" ? "text-black font-semibold" : ""}>
            Services
          </a>
          {isOpen && (
     <div className={`absolute top-full mt-1 w-56 bg-white shadow-lg divide-y divide-gray-100 rounded-md ${isOpen ? 'text-gray-500' : ''}`}>
     <ul className="py-1">
       <li><Link href="/projects"> 1 : Geological Mapping</Link></li>
       <li><Link href="/projects"> 2 : Drill Management </Link></li>
       <li><Link href="/projects"> 3  :  Database and Mapping</Link></li>
       <li><Link href="/projects"> 4  : Integrated Geophysical </Link></li>
       <li><Link href="/projects"> 5  : Exploration Skills Enhancement </Link></li>

     </ul>
   </div>



          )}
        </div>
        <Link href="/faqs" className={pathname === "/faqs" ? "text-black font-semibold" : ""}>
          FAQS
        </Link>
        <Link href="/careers" className={pathname === "/careers" ? "text-black font-semibold" : ""}>
          CAREERS
        </Link>
        <Link href="/about" className={pathname === "/about" ? "text-black font-semibold" : ""}>
          ABOUT US
        </Link>
      </nav>
    </>
  );
}