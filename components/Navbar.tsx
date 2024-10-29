"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              isActive
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-white hover:text-cyan-400 transition-colors duration-300"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
