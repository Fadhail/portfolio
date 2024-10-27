"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto">
        {/* Desktop Layout */}
        <div className="hidden xl:flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            XEROON.
          </Link>

          <div className="flex items-center gap-8">
            <Navbar />
            <Link href="/contact">
              <Button className="bg-cyan-600 hover:bg-cyan-900 rounded">
                Hire me
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
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="flex flex-col items-center">
            <div className="fixed z-10 top-0 left-0 right-0">
              <MobileNav />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
