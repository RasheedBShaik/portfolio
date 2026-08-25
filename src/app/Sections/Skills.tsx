"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Database,
  Server,
  Terminal,
  Box,
  Code2,
  MousePointer2,
  Globe2,
} from "lucide-react";

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 font-syne overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 flex flex-col items-start gap-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.04,
              borderColor: "rgba(96,165,250,0.4)",
              boxShadow: "0 0 30px rgba(59,130,246,0.15)",
            }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 backdrop-blur-sm"
          >
            {/* Animated scanning light */}
            <motion.div
              className="absolute inset-y-0 -left-1/2 w-1/2 bg-linear-to-r from-transparent via-blue-400/20 to-transparent skew-x-[-20deg]"
              animate={{
                x: ["0%", "400%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            {/* Outer rotating ring */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(99,102,241,0.5)",
                boxShadow:
                  "0 0 20px rgba(79,70,229,0.15), inset 0 0 20px rgba(6,182,212,0.05)",
              }}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 backdrop-blur-sm"
            >
              {/* Moving energy beam */}
              <motion.span
                className="absolute inset-y-0 -left-[40%] w-[35%] skew-x-[-25deg] bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
                animate={{
                  left: ["-40%", "120%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              />

              {/* Single orbital system */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative flex h-4 w-4 shrink-0 items-center justify-center"
              >
                {/* Outer orbit */}
                <span className="absolute inset-0 rounded-full border border-blue-400/30 border-t-cyan-400 border-r-indigo-400" />

                {/* Inner orbit */}
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0.75 rounded-full border border-fuchsia-400/30 border-b-fuchsia-400"
                />

                {/* One core */}
                <motion.span
                  animate={{
                    scale: [0.8, 1.25, 0.8],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 4px rgba(6,182,212,0.5)",
                      "0 0 14px rgba(6,182,212,1)",
                      "0 0 4px rgba(6,182,212,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-cyan-300"
                />
              </motion.span>

              {/* Text */}
              <motion.span
                animate={{
                  color: ["#60a5fa", "#22d3ee", "#a78bfa", "#60a5fa"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                Technical Skills
              </motion.span>
            </motion.div>

            {/* Bottom progress line */}
            <motion.span
              className="absolute bottom-0 left-4 h-px bg-blue-400"
              animate={{
                width: ["0%", "calc(100% - 32px)", "0%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl uppercase">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-indigo-500">
              STACK
            </span>
          </h2>
        </motion.div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. FRONTEND */}
          <BentoCard
            className="md:col-span-7"
            spotlightColor="rgba(59, 130, 246, 0.15)"
            delay={0}
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Code2 size={160} strokeWidth={1} />
            </div>

            <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">
              01. Frontend
            </h3>

            <h4 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              React & <span className="text-slate-500">Next.js</span>
            </h4>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              Building{" "}
              <span className="text-white">fast, responsive, and scalable</span>{" "}
              web applications with modern React architecture and TypeScript.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "Next.js",
                "React",
                "Tailwind",
                "Framer Motion",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:bg-white/10 hover:border-blue-400/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 2. BACKEND */}
          <BentoCard
            className="md:col-span-5"
            spotlightColor="rgba(16, 185, 129, 0.15)"
            delay={0.1}
          >
            <Server className="text-emerald-400 mb-6" size={32} />

            <h3 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-2">
              02. Backend
            </h3>

            <h4 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">
              APIs & Services
            </h4>

            <div className="space-y-4 mb-6">
              {["Node.js", "Python", "REST APIs"].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="h-px w-4 bg-emerald-500" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-[11px] text-slate-500 italic">
                From interface to server.
              </p>
            </div>
          </BentoCard>

          {/* 3. DATABASE & TOOLS */}
          <BentoCard
            className="md:col-span-4"
            spotlightColor="rgba(245, 158, 11, 0.15)"
            delay={0.2}
          >
            <Database className="text-orange-400 mb-6" size={24} />

            <h3 className="text-[10px] font-bold text-orange-400 uppercase tracking-[0.3em] mb-2">
              03. Data & Tools
            </h3>

            <h4 className="text-xl font-bold text-white uppercase tracking-tighter mb-8">
              Development Environment
            </h4>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "MongoDB", s: "Database" },
                { n: "PostgreSQL", s: "Database" },
                { n: "Git", s: "Versioning" },
                { n: "Vercel", s: "Deployment" },
              ].map((tool) => (
                <div
                  key={tool.n}
                  className="group/tool transition-transform hover:translate-x-1"
                >
                  <div className="text-[11px] font-black text-white uppercase tracking-tighter flex items-center gap-2">
                    <span className="h-1 w-1 bg-orange-500 rounded-full" />
                    {tool.n}
                  </div>

                  <div className="text-[9px] text-slate-600 pl-3 uppercase tracking-widest">
                    {tool.s}
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 4. PYTHON & SOFTWARE */}
          <BentoCard
            className="md:col-span-8"
            spotlightColor="rgba(168, 85, 247, 0.15)"
            delay={0.3}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
              <div className="max-w-xs">
                <Terminal className="text-purple-400 mb-6" size={24} />

                <h3 className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.3em] mb-2">
                  04. Software
                </h3>

                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">
                  Python & Problem Solving
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Using{" "}
                  <span className="text-white">
                    Python and programming fundamentals
                  </span>{" "}
                  to solve problems, automate tasks, work with data, and build
                  useful software.
                </p>
              </div>

              <div className="relative flex items-end gap-3 h-32 pr-4">
                {[40, 90, 60, 100].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.12,
                      duration: shouldReduceMotion ? 0 : 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-8 rounded-t-lg bg-linear-to-t from-purple-500/40 to-purple-500/10 border-x border-t border-purple-500/20"
                  />
                ))}

                <MousePointer2
                  size={16}
                  className="absolute bottom-0 -right-2.5 text-white animate-bounce"
                />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className,
  spotlightColor,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor: string;
  delay?: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`,
  );

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 30,
        scale: shouldReduceMotion ? 1 : 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -4,
              transition: {
                duration: 0.25,
              },
            }
      }
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08080a] p-8 md:p-12 transition-colors hover:border-white/20 ${className}`}
    >
      {/* Cursor Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: spotlight,
        }}
      />

      {/* Subtle top highlight */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-start">
        {children}
      </div>
    </motion.div>
  );
}
