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
import GitHubContributions from "@/components/GitHubContributions";

export default function Home() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <main className="pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Avatar */}
            <motion.div
              className="relative w-48 h-48 md:w-96 md:h-96 mx-auto md:mx-0 order-first md:order-last rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.1 }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Avatar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </motion.div>

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
                Hello I'm <br /> <span className="text-cyan-600">Fadhail</span>
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

        {/* Contributions */}
        <motion.div
          className="text-4xl md:text-6xl font-bold mb-6 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="flex justify-center mt-8">
            {username ? (
              <GitHubContributions username={username} />
            ) : (
              <p className="text-center mt-4 text-gray-60">
                Please set your GitHub username in .env.local
              </p>
            )}
          </div>
        </motion.div>
      </main>

      {/* Projects */}
      <motion.section
        className="py-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={`/api/placeholder/400/200`}
                    alt={`Project ${item}`}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold">Project {item}</h3>
              </motion.div>
            ))}
          </div>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center text-lg hover:gap-4 gap-2 transition-all"
          >
            View More <ArrowRightIcon size={20} />
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
