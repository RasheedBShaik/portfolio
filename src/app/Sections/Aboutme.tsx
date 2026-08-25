"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Globe,
  Zap,
  Palette,
  Cpu,
  Layout,
  Layers,
  Sparkles,
  MoveRight,
} from "lucide-react";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 font-syne bg-[#020204]"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start gap-4 uppercase"
        >
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
              Full Stack Developer
            </motion.span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-500">
              Software
            </span>
            <br />
            Designing Experiences
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative col-span-1 md:col-span-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-br from-white/[0.07] to-transparent p-8 md:p-12 transition-all hover:border-blue-500/30"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />

            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white tracking-tighter uppercase">
              <Terminal className="text-blue-400" size={24} />
              The Software Developer
            </h3>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-400">
              <p>
                I am a{" "}
                <span className="text-white font-semibold">
                  Full-Stack Developer
                </span>{" "}
                focused on building fast, scalable software and modern web
                applications. I work across the stack with{" "}
                <span className="text-blue-400 font-medium group-hover:italic transition-all duration-300 underline underline-offset-4 decoration-blue-500/30">
                  React, Next.js, TypeScript, Node.js, and Python.
                </span>
              </p>

              <p>
                I enjoy turning ideas into{" "}
                <span className="text-white">
                  reliable, intuitive, and high-performance products
                </span>
                , from polished frontend interfaces to backend logic and
                complete application experiences.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <Globe size={14} className="text-blue-500" /> India /
                Remote-Available
              </div>

              <div className="h-4 w-px bg-white/10 hidden md:block" />

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500 animate-pulse">
                <Zap size={14} /> Open to Opportunities
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-4 rounded-[2.5rem] border border-white/10 bg-white/3 p-8 relative overflow-hidden group backdrop-blur-sm"
          >
            <h3 className="mb-8 text-xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
              <Layers size={20} className="text-purple-400" />
              The Stack
            </h3>

            <div className="space-y-7">
              {[
                {
                  label: "Frontend",
                  val: "React / Next.js / TypeScript",
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  label: "Backend",
                  val: "Node.js / Python",
                  color: "from-emerald-500 to-teal-400",
                },
                {
                  label: "Database",
                  val: "MongoDB / PostgreSQL",
                  color: "from-orange-500 to-yellow-400",
                },
                {
                  label: "Creative",
                  val: "Three.js / GSAP / Motion",
                  color: "from-purple-500 to-violet-400",
                },
              ].map((item) => (
                <div key={item.label} className="group/item">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500">
                      {item.label}
                    </span>

                    <span className="text-[11px] font-medium text-white/80">
                      {item.val}
                    </span>
                  </div>

                  <div className="h-0.75 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full bg-linear-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="https://github.com/RasheedBShaik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-10 w-full group/btn flex items-center cursor-pointer justify-center gap-2 rounded-2xl bg-white text-black py-4 font-bold text-sm transition-all hover:bg-blue-400">
                View Github
                <MoveRight
                  size={16}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </button>
            </Link>
          </motion.div>

          {/* Feature Grid */}
          <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureBox
              icon={<Palette size={24} />}
              title="Frontend Engineering"
              desc="Building responsive, accessible interfaces with React, Next.js, TypeScript, and modern UI technologies."
              accent="pink"
            />

            <FeatureBox
              icon={<Cpu size={24} />}
              title="Backend & APIs"
              desc="Developing application logic, APIs, data flows, and backend services with Node.js and Python."
              accent="blue"
            />

            <FeatureBox
              icon={<Layout size={24} />}
              title="Full-Stack Development"
              desc="Connecting frontend experiences with reliable backend systems to build complete, production-ready applications."
              accent="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBox({
  icon,
  title,
  desc,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent: "pink" | "blue" | "purple";
}) {
  const accents = {
    pink: "group-hover:text-pink-400 group-hover:border-pink-500/50",
    blue: "group-hover:text-blue-400 group-hover:border-blue-500/50",
    purple: "group-hover:text-purple-400 group-hover:border-purple-500/50",
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-4xl border border-white/5 bg-white/2 p-8 transition-all hover:bg-white/5"
    >
      <div
        className={`mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 transition-all ${accents[accent]}`}
      >
        {icon}
      </div>

      <h4 className="mb-2 font-bold text-white text-xl tracking-tight">
        {title}
      </h4>

      <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-300 transition-colors">
        {desc}
      </p>
    </motion.div>
  );
}
