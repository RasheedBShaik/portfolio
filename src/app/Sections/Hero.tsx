"use client";

import React, { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import "./Bubbles.css"; // Make sure this CSS file exists and is imported

// Bubbles component generating random styles only on client
const Bubbles = () => {
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const bubbleArray = [...Array(18)].map((_, i) => {
        const randomDot = Math.floor(Math.random() * 0); // 0-10%
        const randomDuration = (Math.random() * 10 + 5).toFixed(1); // 5.0s - 15.0s

        return (
          <span
            key={i}
            style={{
              left: `${randomDot}%`,
              animationDuration: `${randomDuration}s`,
            }}
          ></span>
        );
      });
      setBubbles(bubbleArray);
    };

    generateBubbles();
  }, []);

  return (
    <div className="bubbles absolute inset-0 z-0 pointer-events-none">
      {bubbles}
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="relative flex px-5 sm:px-0 pt-16 min-h-dvh font-semibold justify-center w-full bg-[var(--bg)] text-[var(--text)] overflow-hidden">
      {/* Background Bubbles */}
      <Bubbles />

      {/* Foreground Content */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-5"
      >
        <img
          className="h-50 w-50 relative left-[-50px] z-0"
          src="./images/RBlogo.png"
          alt="logo"
        />
        <div className="text:2xl md:text-3xl">Hi, I am </div>
        <div className="text-3xl pb-0 md:pb-1 sm:text-5xl md:text-7xl lg:text-9xl">
          Rasheed Basha
        </div>
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-5xl text-[#a066ff]">
          Front-end Developer/Designer
        </div>

        <div className="flex items-center gap-5 pt-5">
          <Link
            target="_blank"
            href="mailto:rasheedbasha.2004@gmail.com"
            className=" bg-[#CCFF00] h-10 w-10 sm:h-16 sm:w-16 flex justify-center items-center rounded-2xl hover:border-3 hover:bg-[#ccff0099] hover:border-[var(--text)]"
          >
            <div>
              <img
                className="w-5 h-5 sm:h-full sm:w-full"
                src="./images/gmail.svg"
                alt="email"
              />
            </div>
          </Link>

          <Link
            target="_blank"
            href="https://github.com/rasheedbshaik"
            className="bg-[#CCFF00] h-10 w-10 sm:h-16 sm:w-16 flex justify-center items-center rounded-2xl hover:border-3 hover:bg-[#ccff0099] hover:border-[var(--text)]"
          >
            <div>
              <img
                className="w-5 h-5 sm:h-full sm:w-full"
                src="./images/github.svg"
                alt="GitHub"
              />
            </div>
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/in/rasheedbshaik/"
            className="bg-[#CCFF00] h-10 w-10 sm:h-16 sm:w-16 flex justify-center items-center rounded-2xl hover:border-3 hover:bg-[#ccff0099] hover:border-[var(--text)]"
          >
            <div>
              <img
                className="w-5 h-5 sm:h-full sm:w-full"
                src="./images/linkedin.svg"
                alt="LinkedIn"
              />
            </div>
          </Link>
          <Link
            href="./images/Shaik_Rasheed_Basha_Resume.pdf"
            target="_blank"
            download
            className="bg-[#CCFF00] h-10 w-10 sm:h-16 sm:w-16 flex justify-center items-center rounded-2xl hover:border-3 hover:bg-[#ccff0099] hover:border-[var(--text)]"
            rel="noopener noreferrer"
          >
            <div>
              <img
                className="w-5 h-5 sm:h-full sm:w-full"
                src="./images/resume.svg"
                alt="Resume"
              />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
