"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="absolute w-full py-4 bg-transparent backdrop-blur-sm z-10">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden xl:flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            XEROON.
          </Link>
          <div className="flex items-center gap-8">
            <Navbar />
            <Link href="mailto:mochammadfadhail2@gmail.com">
              <Button className="bg-cyan-600 hover:bg-cyan-700 px-6 rounded">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Nav */}
        <motion.div
          className="xl:hidden"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <div className="fixed z-10 top-2 left-0 right-0">
            <MobileNav />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
