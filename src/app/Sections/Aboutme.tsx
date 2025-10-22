"use client";
import React from "react";
import { motion } from "framer-motion";
export const Aboutme = () => {
  return (
    <div id="aboutme">
      <div className="text-center bg-[var(--bg)]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div
            className="text-center text-xl md:3xl lg:5xl font-semibold m-auto max-w-[350px] tracking-[13px] border-8 border-[var(--text)]
         p-8 text-[var(--text)] "
          >
            ABOUT ME
          </div>
          <div className="w-full flex justify-center py-18 bg-[var(--bg)]">
            <div className="text-[var(--text)] bg-[var(--bg)] text-xl text-start max-w-[762px] px-4 md:px-0">
              Hello! I'm Rasheed Basha Shaik, a passionate web developer with
              expertise in HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.
              I enjoy building responsive, user-friendly applications with a
              focus on clean code, performance optimization, and seamless user
              experiences. Currently, I’m expanding my skills in Node.js,
              MongoDB, and TypeScript to grow into a full-stack developer. I
              thrive on continuous learning, collaboration, and turning ideas
              into impactful digital solutions.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
