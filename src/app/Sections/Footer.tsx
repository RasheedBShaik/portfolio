"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 35,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#020204] text-white">
      {/* ===================================================== */}
      {/* AMBIENT BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          whileInView={{
            opacity: 0.3,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-[15%] h-105 w-105 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[150px]"
        />

        {/* Blue glow */}
        <motion.div
          initial={{
            opacity: 0,
            x: -150,
          }}
          whileInView={{
            opacity: 0.22,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.2,
          }}
          className="absolute -bottom-25 -left-25 h-87.5 w-87.5 rounded-full bg-blue-600/15 blur-[130px]"
        />

        {/* Pink glow */}
        <motion.div
          initial={{
            opacity: 0,
            x: 150,
          }}
          whileInView={{
            opacity: 0.2,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.3,
          }}
          className="absolute -bottom-25 -right-25 h-87.5 w-87.5 rounded-full bg-fuchsia-600/15 blur-[130px]"
        />

        {/* Subtle center light */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.5,
          }}
          className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-linear-to-r from-transparent via-purple-500/20 to-transparent blur-sm"
        />
      </div>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ================================================= */}
        {/* TOP LINE */}
        {/* ================================================= */}

        <div className="relative h-px overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 left-0 w-1/2 bg-linear-to-r from-transparent via-purple-400 to-transparent"
          />
        </div>

        {/* ================================================= */}
        {/* BACK TO TOP */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="flex justify-center py-16"
        >
          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="relative flex flex-col items-center gap-4"
            aria-label="Back to top"
          >
            {/* Animated orbital button */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -90,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.35,
                type: "spring",
                stiffness: 90,
                damping: 12,
              }}
              className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/4 backdrop-blur-md"
            >
              {/* Outer orbit */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-2 rounded-full border border-dashed border-purple-400/40"
              />

              {/* Second orbit */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-full border border-blue-400/10"
              />

              {/* Glow pulse */}
              <motion.div
                animate={{
                  scale: [0.8, 1.25, 0.8],
                  opacity: [0.15, 0.4, 0.15],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl"
              />

              <motion.div
                animate={{
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <ArrowUp
                  size={22}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </motion.div>
            </motion.div>

            <motion.span
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white"
            >
              Back to top
            </motion.span>
          </button>
        </motion.div>

        {/* ================================================= */}
        {/* MAIN FOOTER */}
        {/* ================================================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="pb-16"
        >
          {/* ================================================= */}
          {/* LARGE NAME */}
          {/* ================================================= */}

          <motion.div
            variants={reveal}
            className="relative flex items-center justify-center py-6"
          >
            {/* Huge background text */}
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="select-none whitespace-nowrap font-syne text-[19vw] font-black uppercase leading-none text-white/[0.07] md:text-[14vw]"
            >
              RASHEED
            </motion.h2>

            {/* Main visible name */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute"
            >
              <h3 className="font-syne text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                Rasheed {" "}
                <span className="text-purple-400">Basha</span>
              </h3>

              {/* Name glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute left-1/2 top-1/2 -z-10 h-20 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[60px]"
              />
            </motion.div>
          </motion.div>

          {/* ================================================= */}
          {/* ROLE */}
          {/* ================================================= */}

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 45 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="h-px bg-linear-to-r from-transparent to-purple-400"
              />

              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-purple-400"
                />

                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white">
                  Full Stack Developer
                </p>

                <Sparkles
                  size={14}
                  className="text-purple-400"
                />
              </div>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 45 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="h-px bg-linear-to-l from-transparent to-purple-400"
              />
            </div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 md:text-base">
              Building modern digital experiences with clean code,
              thoughtful design, and real-world impact.
            </p>
          </motion.div>

          {/* ================================================= */}
          {/* STATUS */}
          {/* ================================================= */}

          <motion.div
            variants={reveal}
            className="mt-10 flex justify-center"
          >
            <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-5 py-3 backdrop-blur-md">
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* TECH STACK */}
          {/* ================================================= */}

          <motion.div
            variants={reveal}
            className="mt-14 flex flex-col items-center gap-5"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-white/20" />

              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-slate-400">
                React · Next.js · TypeScript · Node.js
              </span>

              <div className="h-px w-12 bg-linear-to-l from-transparent to-white/20" />
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* DIVIDER */}
          {/* ================================================= */}

          <motion.div
            variants={reveal}
            className="relative mt-14 h-px overflow-hidden bg-white/10"
          >
            <motion.div
              initial={{
                x: "-100%",
              }}
              whileInView={{
                x: "100%",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                delay: 0.3,
              }}
              className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-transparent via-purple-400 to-transparent"
            />
          </motion.div>

          {/* ================================================= */}
          {/* COPYRIGHT */}
          {/* ================================================= */}

          <motion.div
            variants={reveal}
            className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
          >
            <p className="text-[11px] font-medium tracking-wide text-slate-400">
              © {year}{" "}
              <span className="font-semibold text-white">
                Rasheed Basha
              </span>
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-500">
              Designed & Built with passion
            </p>

            <p className="text-[11px] font-medium tracking-wide text-slate-400">
              All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
