"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMenu } from "react-icons/tb";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center lg:flex lg:gap-x-6">
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <TbMenu size={24} />
          </button>
        </div>
        <div className={`lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block gap-x-6`}>
          <Link href="/" className={pathname === "/" ? "glow-orange" : "text-white"}>
            HOME
          </Link>
          <div
            className="relative mt-2 lg:mt-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/projects" className={pathname === "/projects" ? "glow-orange" : "text-white"}>
              SERVICES
            </a>
            {isOpen && (
              <div className="absolute top-full mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-200 divide-y divide-gray-100">
                <ul className="py-2">
                  <li className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
                    <Link href="/GeologicalMapping">Geological Mapping</Link>
                  </li>
                  <li className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
                    <Link href="/DrillManagement">Drill Management</Link>
                  </li>
                  <li className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
                    <Link href="/DatabaseAndMapping">Database and Mapping Revival Solutions</Link>
                  </li>
                  <li className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
                    <Link href="/GeophysicalSolutions">Geophysical Solutions</Link>
                  </li>
                  <li className="block px-4 py-2 hover:bg-orange-500 hover:text-white">
                    <Link href="/EnhancementofExploration">Capacity Building</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/faqs" className={`mt-2 lg:mt-0 ${pathname === "/faqs" ? "glow-orange" : "text-white"}`}>
            FAQS
          </Link>
          <Link href="/careers" className={pathname === "/careers" ? "glow-orange" : "text-white"}>
            CAREERS
          </Link>
        </div>
      </nav>
    </>
  );
}
