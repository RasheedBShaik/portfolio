"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Terminal,
  Globe,
  Zap,
  Palette,
  Cpu,
  Layout,
  Layers,
  MoveRight,
} from "lucide-react";
import Link from "next/link";

const technologies = [
  {
    label: "Frontend",
    value: "React / Next.js / TypeScript",
    color: "from-violet-600 to-purple-400",
  },
  {
    label: "Backend",
    value: "Node.js / Python",
    color: "from-emerald-500 to-teal-400",
  },
  {
    label: "Database",
    value: "MongoDB / PostgreSQL",
    color: "from-orange-500 to-amber-400",
  },
  {
    label: "Creative",
    value: "Three.js / GSAP / Motion",
    color: "from-purple-500 to-violet-400",
  },
];

const features = [
  {
    icon: Palette,
    title: "Frontend Engineering",
    desc: "Building responsive, accessible interfaces with React, Next.js, TypeScript, and modern UI technologies.",
    accent: "group-hover:text-violet-600 group-hover:border-violet-300",
  },
  {
    icon: Cpu,
    title: "Backend & APIs",
    desc: "Developing application logic, APIs, data flows, and backend services with Node.js and Python.",
    accent: "group-hover:text-emerald-600 group-hover:border-emerald-300",
  },
  {
    icon: Layout,
    title: "Full-Stack Development",
    desc: "Connecting frontend experiences with reliable backend systems to build complete, production-ready applications.",
    accent: "group-hover:text-purple-600 group-hover:border-purple-300",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutMe() {
  const reduce = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#FAF9F6] px-4 py-20 font-syne text-[#292333] selection:bg-violet-200 sm:px-8 sm:py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-violet-200/25 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-purple-200/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="mb-10 flex flex-col items-start gap-5 sm:mb-14"
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 6 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            whileHover={reduce ? undefined : { y: -2 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E1E9] bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#51416F] shadow-sm"
          >
            <motion.span
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="inline-flex"
              animate={reduce ? undefined : { rotate: 360 }}
            >
              <Layers size={15} className="text-violet-600" />
            </motion.span>
            Full Stack Developer
            <motion.span
              animate={reduce ? undefined : { opacity: [1, 0.45, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
          </motion.div>

          <h2 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.055em] sm:text-5xl md:text-7xl">
            Building{" "}
            <span className="bg-gradient-to-r from-[#51416F] via-violet-600 to-[#9675D9] bg-clip-text text-transparent">
              Software
            </span>
            <br />
            Designing Experiences<span className="text-violet-500">.</span>
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-[#777381] sm:text-base sm:leading-8">
            I turn ideas into thoughtful digital experiences through clean code,
            modern technologies, and a focus on performance and usability.
          </p>
        </motion.div>

        {/* Main cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Developer introduction */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease }}
            whileHover={reduce ? undefined : { y: -3 }}
            className="group relative overflow-hidden rounded-3xl border border-[#E8E2EF] bg-white/75 p-6 shadow-[0_8px_35px_rgba(41,35,51,0.035)] transition-all duration-300 hover:border-violet-200 hover:shadow-[0_14px_40px_rgba(81,65,111,0.07)] sm:rounded-[2rem] sm:p-9 md:col-span-7 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-200/30 blur-[75px] transition-colors duration-500 group-hover:bg-violet-300/35" />

            <h3 className="relative mb-6 flex items-center gap-3 text-lg font-extrabold uppercase tracking-[-0.03em] sm:text-xl">
              <motion.span
                whileHover={reduce ? undefined : { rotate: -6, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-700"
              >
                <Terminal size={21} />
              </motion.span>
              The Software Developer
            </h3>

            <div className="relative space-y-5 text-base leading-7 text-[#777381] sm:text-lg sm:leading-8">
              <p>
                I am a{" "}
                <span className="font-semibold text-[#292333]">
                  Full-Stack Developer
                </span>{" "}
                focused on building fast, scalable software and modern web
                applications. I work across the stack with{" "}
                <span className="font-medium text-violet-700">
                  React, Next.js, TypeScript, Node.js, and Python.
                </span>
              </p>

              <p>
                I enjoy turning ideas into{" "}
                <span className="font-semibold text-[#292333]">
                  reliable, intuitive, high-performance products
                </span>
                , from polished frontend interfaces to backend logic and
                complete application experiences.
              </p>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-[#EEEAF2] pt-6">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#777381] sm:text-xs">
                <motion.svg
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.25}
                  strokeLinecap="round"
                  className="text-violet-500"
                >
                  {/* Fixed globe outline */}
                  <circle cx="12" cy="12" r="10" />

                  {/* Fixed latitude lines */}
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <ellipse cx="12" cy="12" rx="10" ry="8" />

                  {/* Rotating longitude lines */}
                  <motion.g
                    animate={
                      reduce
                        ? undefined
                        : {
                            scaleX: [1, 0.08, 1, 0.08, 1],
                            x: [0, 0, 0, 0, 0],
                          }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      transformOrigin: "12px 12px",
                    }}
                  >
                    <ellipse cx="12" cy="12" rx="4" ry="10" />
                  </motion.g>

                  {/* Secondary longitude line for depth */}
                  {!reduce && (
                    <motion.ellipse
                      cx="12"
                      cy="12"
                      rx="4"
                      ry="10"
                      strokeOpacity={0.45}
                      animate={{
                        scaleX: [0.08, 1, 0.08, 1, 0.08],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.svg>
                India / Remote
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-emerald-700 sm:text-xs">
                <Zap size={15} />
                Open to Opportunities
              </div>
            </div>
          </motion.div>

          {/* Technology stack */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.12, ease }}
            whileHover={reduce ? undefined : { y: -3 }}
            className="relative overflow-hidden rounded-3xl border border-[#E8E2EF] bg-white/65 p-6 shadow-[0_8px_35px_rgba(41,35,51,0.035)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(81,65,111,0.07)] sm:rounded-[2rem] sm:p-8 md:col-span-5"
          >
            <h3 className="mb-8 flex items-center gap-3 text-lg font-extrabold uppercase tracking-[-0.03em]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-700">
                <Layers size={21} />
              </span>
              The Stack
            </h3>

            <div className="space-y-7">
              {technologies.map((item, index) => (
                <div key={item.label}>
                  <div className="mb-2 flex flex-wrap items-end justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#898391]">
                      {item.label}
                    </span>
                    <span className="text-right text-xs font-medium text-[#51416F]">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EEEAF2]">
                    <motion.div
                      initial={{ width: reduce ? "100%" : "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduce ? 0 : 0.9,
                        delay: reduce ? 0 : index * 0.12,
                        ease: "circOut",
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="https://github.com/rasheedbshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn mt-9 flex w-full items-center justify-between rounded-xl bg-[#292333] px-5 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-violet-700"
            >
              View GitHub
              <MoveRight
                size={17}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-5 md:col-span-12 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: reduce ? 0 : index * 0.1,
                    ease,
                  }}
                  whileHover={reduce ? undefined : { y: -5 }}
                  className="group rounded-3xl border border-[#E8E2EF] bg-white/70 p-6 shadow-[0_5px_25px_rgba(41,35,51,0.025)] transition-all duration-300 hover:border-violet-200 hover:bg-white hover:shadow-[0_12px_35px_rgba(81,65,111,0.06)] sm:p-7"
                >
                  <motion.div
                    whileHover={reduce ? undefined : { scale: 1.06 }}
                    className={`mb-5 inline-flex rounded-xl border border-[#E8E2EF] bg-[#FAF9F6] p-3 text-[#51416F] transition-colors duration-300 ${feature.accent}`}
                  >
                    <Icon size={23} />
                  </motion.div>

                  <h4 className="mb-3 text-lg font-bold tracking-[-0.035em] text-[#292333]">
                    {feature.title}
                  </h4>

                  <p className="text-sm leading-7 text-[#777381] transition-colors duration-300 group-hover:text-[#625B70]">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
