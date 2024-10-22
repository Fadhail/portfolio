"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center mt-2">
      <div className="bg-gray-800 text-white rounded-full px-6 py-3 space-x-8">
        {links.map((link, index) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                isActive ? "text-cyan-400 border-b-2" : ""
              } hover:text-cyan-400 transition duration-300`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
