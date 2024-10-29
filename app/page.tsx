"use client";

import {
  ArrowRightIcon,
  Link2Icon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--cursor-x", `${x}%`);
      document.documentElement.style.setProperty("--cursor-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="gradient-bg min-h-screen flex items-center justify-center">
      {/* Hero */}
      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative w-48 h-48 md:w-96 md:h-96 mx-auto md:mx-0 order-first md:order-last rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Avatar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>

            {/* Content */}
            <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span
                className="text-sm tracking-wider text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.9 }}
              >
                COMPUTER ENGINEERING STUDENT
              </motion.span>
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Hello I&apos;m <br />{" "}
                <span className="text-cyan-600">Fadhail</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-2xl text-gray-600 max-w-md md:max-w-2xl mb-4 mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                A Computer Engineering student with a strong interest in the
                world of technology.
              </motion.p>
              <motion.div
                className="flex space-x-6 justify-center md:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a href="#" className="hover:text-gray-600 transition-colors">
                  <Link2Icon size={24} />
                </a>
                <a
                  href="https://www.instagram.com/moch.fadhail/"
                  className="hover:text-gray-600 transition-colors"
                >
                  <InstagramIcon size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mochammad-fadhail-70450425b/"
                  className="hover:text-gray-600 transition-colors"
                >
                  <LinkedinIcon size={24} />
                </a>
                <a
                  href="https://github.com/Fadhail"
                  className="hover:text-gray-600 transition-colors"
                >
                  <GithubIcon size={24} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center text-lg hover:gap-4 gap-2 transition-all"
                >
                  View About Me <ArrowRightIcon size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
