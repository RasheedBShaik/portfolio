
"use client";

import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, ArrowRight, Mail, Download } from "lucide-react";

const technologies = ["React", "Next.js", "TypeScript", "Python", "Node.js", "Tailwind CSS"];

const socials = [
  { label: "GitHub", href: "https://github.com/rasheedbshaik", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/rasheedbshaik", icon: Linkedin },
  { label: "Email", href: "mailto:rasheed.sk7337@gmail.com", icon: Mail },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const delay = (value: number) => (reduce ? 0 : value);

  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 12, filter: reduce ? "blur(0px)" : "blur(3px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: delay(0.45), ease },
    },
  };

  const nameTransition = reduce ? { duration: 0 } : {
    opacity: { duration: 0.25 },
    scale: { type: "spring" as const, stiffness: 70, damping: 17, mass: 1, delay: 0.1 },
    x: { type: "spring" as const, stiffness: 60, damping: 17, delay: 0.1 },
    filter: { duration: 0.55, delay: 0.1 },
  };

  const fallingContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.075, delayChildren: delay(0.65) },
    },
  };

  const fallingItem = {
    hidden: reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -35, scale: 0.92 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: reduce ? { duration: 0 } : {
        type: "spring" as const, stiffness: 220, damping: 16, mass: 0.8,
      },
    },
  };

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-x-clip bg-[#FAF9F6] px-4 pb-10 pt-20 font-syne text-[#292333] selection:bg-violet-200 sm:px-8 sm:pb-10 sm:pt-22">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[4%] h-[min(55vw,480px)] w-[min(85vw,760px)] -translate-x-1/2 rounded-full bg-violet-200/35 blur-[100px]"
          animate={reduce ? undefined : { scale: [1, 1.07, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-36 bottom-0 h-72 w-72 rounded-full bg-violet-200/25 blur-[100px]"
          animate={reduce ? undefined : { x: [0, -20, 0], y: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(#51416F_1px,transparent_1px),linear-gradient(90deg,#51416F_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Name reveal */}
        <div className="relative z-10 flex w-full flex-col items-center">
          <motion.p
            initial={{ opacity: 0, x: reduce ? 0 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: delay(0.45), ease }}
            className="mb-3 text-base font-semibold tracking-[0.12em] text-[#51416F] sm:mb-4 sm:text-xl"
          >
            Hello, I'm
          </motion.p>

          <div className="w-full overflow-visible px-1">
            <motion.div
              initial={reduce ? { opacity: 1, scale: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, scale: 1.18, x: "-1vw", filter: "blur(7px)" }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              transition={nameTransition}
              className="mx-auto w-fit max-w-full origin-center overflow-visible"
            >
              <h1 className="whitespace-nowrap px-[0.12em] py-[0.04em] text-[clamp(2.55rem,10.5vw,8.5rem)] font-extrabold uppercase leading-[1.12] tracking-[-0.035em] sm:text-[clamp(4rem,9.5vw,8.5rem)]">
                <span className="bg-gradient-to-r from-[#292333] via-[#51416F] to-[#9675D9] bg-clip-text text-transparent">RASHEED</span>
              </h1>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: delay(0.7), delay: delay(0.4), ease }}
                className="mt-2 h-1 w-full origin-center rounded-full bg-gradient-to-r from-violet-600 via-violet-400/80 to-violet-300/10 sm:mt-3 sm:h-1.5"
              />
            </motion.div>
          </div>
        </div>

        {/* Introduction */}
        <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ delay: delay(0.4) }} className="mt-6 max-w-3xl sm:mt-7">
          <h2 className="text-lg font-bold leading-snug tracking-[-0.035em] text-[#292333] sm:text-2xl md:text-3xl">
            Full-Stack Developer<span className="text-violet-600">{" "}building for the web.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#777381] sm:text-base sm:leading-7">
            I build modern web applications with clean code, thoughtful
            interfaces, and a focus on performance, usability, and scalability.
          </p>
        </motion.div>

        {/* Primary actions */}
        <motion.div variants={reveal} initial="hidden" animate="visible" transition={{ delay: delay(0.55) }} className="mt-5 flex w-full flex-col justify-center gap-3 sm:mt-6 sm:w-auto sm:flex-row">
          <motion.a
            href="#projects"
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="group flex items-center justify-between gap-8 rounded-xl bg-[#292333] px-5 py-3.5 text-white shadow-[0_8px_24px_rgba(41,35,51,0.1)] transition-colors duration-300 hover:bg-violet-700 sm:min-w-[190px]"
          >
            <span className="text-xs font-bold uppercase tracking-[0.12em]">Explore Projects</span>
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="/resume/rasheed-basha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E1E9] bg-white/75 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#51416F] transition-colors duration-300 hover:border-violet-300 hover:bg-violet-50 sm:min-w-[190px]"
          >
            <Download size={16} />View Resume
          </motion.a>
        </motion.div>

        {/* Falling technology badges */}
        <motion.div variants={fallingContainer} initial="hidden" animate="visible" className="mt-7 w-full max-w-2xl sm:mt-8">
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: delay(0.35), ease } },
            }}
            className="mb-3 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#96909F]"
          >
            Technologies I Work With
          </motion.p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                variants={fallingItem}
                whileHover={reduce ? undefined : { y: -3, scale: 1.035 }}
                className="rounded-lg border border-[#E9E5EF] bg-white/80 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#625B70] shadow-[0_3px_10px_rgba(41,35,51,0.03)] transition-colors duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800 sm:py-2 sm:text-[11px]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Falling social icons */}
        <motion.div variants={fallingContainer} initial="hidden" animate="visible" className="mt-6 flex flex-col items-center gap-3 sm:mt-7">
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                variants={fallingItem}
                href={href}
                title={label}
                aria-label={label}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E1E9] bg-white/80 text-[#77717F] transition-colors duration-300 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 sm:h-11 sm:w-11"
              >
                <Icon size={18} strokeWidth={1.7} />
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {!reduce && <motion.span animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 rounded-full bg-emerald-500" />}
              <span className="relative m-auto h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#898391] sm:text-[10px]">Open to opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
