"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const lineControls = useAnimation();
  const [lineRef, lineInView] = useInView();

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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    if (lineInView) {
      lineControls.start("visible");
    } else {
      lineControls.start("hidden");
    }
  }, [controls, inView, lineControls, lineInView]);

  return (
    <div className="gradient-bg min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-600 shadow-lg">
            <Image
              src="/images/profile.jpg"
              alt="Avatar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl font-bold text-cyan-600">About Me</h1>
            <p className="mt-6 mb-6 text-lg text-gray-400 leading-relaxed max-w-2xl">
              Hello My name is Mochammad Fadhail Fijratullah. I am a Computer
              Engineering student with a strong interest in the world of
              technology. My hobbies include coding and playing games. I am
              always eager to learn new things, especially those that can
              enhance my understanding of programming and technology.
              Additionally, I am interested in exploring how technology can be
              applied to improve efficiency and productivity in various sectors.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-lg hover:gap-4 gap-2 transition-all"
            >
              Download CV <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </main>

      {/* Timeline */}
      <section className="mt-16 px-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-10">
          Timeline
        </h2>
        <div className="relative pl-6">
          {/* Animated Line */}
          <motion.div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-3 border-l-2 border-gray-300"
            initial={{ height: 0 }}
            animate={lineControls}
            variants={{
              hidden: { height: 0 },
              visible: { height: "100%", transition: { duration: 1 } },
            }}
          ></motion.div>

          <motion.div
            ref={ref}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.3,
                },
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
            initial="hidden"
            animate={controls}
          >
            {[
              {
                year: "2017-2020",
                title: "SMP NEGERI 3 CIMAHI",
              },
              {
                year: "2020-2023",
                title: "SMA NEGERI 3 CIMAHI",
              },
              {
                year: "2023-Present",
                title: "Universitas Logistik dan Bisnis Internasional",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative mb-10"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
              >
                <div className="bg-cyan-600 h-4 w-4 rounded-full absolute -left-[10px] top-1 ml-3"></div>
                <h3 className="text-lg font-semibold ml-8">{item.year}</h3>
                <p className="text-gray-600 mt-1 ml-8">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16 px-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-10">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "PHP", "Python", "C#", "SQL"].map(
            (skill, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-800 font-medium py-2 px-4 rounded-lg shadow-md"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      {/* Toolbox */}
      <section className="mt-16 mb-16 px-6 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-10">
          Toolbox
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Visual Studio Code", "Git", "GitHub"].map((tool, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-md"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
