// components/Navbar.js

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "mailto:mochammadfadhail2@gmail.com" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex justify-center items-center space-x-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={index}
            href={link.path}
            className={`text-white ${
              isActive ? "text-cyan-400 border-b-2" : ""
            } hover:text-cyan-400 transition duration-300`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
