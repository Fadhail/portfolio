"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "RFID Attendance System",
    description:
      "The RFID Attendance System is a web-based application designed to streamline the attendance tracking process using Radio Frequency Identification (RFID) technology. This system allows users to mark their attendance effortlessly by simply scanning RFID tags.",
    techStack: ["PHP", "SQL", "C++", "CSS"],
    link: "https://github.com/Fadhail/Absenza",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "This project is a real-time attendance system that uses Face Recognition with TensorFlow.js to identify and verify users.",
    techStack: ["PHP", "JavaScript", "CSS"],
    link: "https://github.com/Fadhail/face-recognition-attendance-system",
  }
];

const Projects: React.FC = () => {
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
      <section className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            My Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-700 mt-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-cyan-600 hover:text-cyan-800 mt-5 inline-block font-semibold transition duration-300"
                >
                  View Project &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
