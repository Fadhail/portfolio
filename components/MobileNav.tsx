// components/MobileNav.js

"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "mailto:mochammadfadhail2@gmail.com" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent text-white fixed top-0 left-0 right-0 z-10">
      <div className="text-lg font-bold">XEROON.</div>
      {/* Hamburger Icon */}
      <div
        onClick={toggleMenu}
        className="cursor-pointer"
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </div>
      {/* Menu Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-800 bg-opacity-90 transition-transform duration-300 ease-in-out`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className="block py-2 px-4 text-center text-white hover:bg-gray-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
