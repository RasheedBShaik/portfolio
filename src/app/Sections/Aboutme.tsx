"use client";

import { useEffect, useState } from "react";
import {
  User,
  Code2,
  Layout,
  Cpu,
  Globe,
  Zap,
  Palette,
  Layers,
  Terminal,
  Sparkles,
  MoveRight,
} from "lucide-react";
import { motion } from "framer-motion";
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
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 backdrop-blur-md">
            <Sparkles size={14} className="animate-spin-slow" />
            Frontend Architect
          </div>
          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Designing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Interfaces
            </span>
            <br />
            Building Systems
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative col-span-1 md:col-span-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 md:p-12 transition-all hover:border-blue-500/30"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700" />

            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white tracking-tighter uppercase">
              <Terminal className="text-blue-400" size={24} />
              The Creative Developer
            </h3>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-400">
              <p>
                I am a{" "}
                <span className="text-white font-semibold">
                  Frontend Engineer
                </span>{" "}
                obsessed with the friction-point between design and engineering.
                I build high-performance web apps with{" "}
                <span className="text-blue-400 font-medium group-hover:italic transition-all duration-300 underline underline-offset-4 decoration-blue-500/30">
                  React, Next.js, and TypeScript.
                </span>
              </p>
              <p>
                My philosophy is simple:{" "}
                <span className="text-white">
                  If it doesn't feel instant, it's not finished.
                </span>{" "}
                I bridge the gap between complex backend logic and the end-user,
                ensuring every interaction is meaningful and accessible.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                <Globe size={14} className="text-blue-500" /> India /
                Remote-Available
              </div>
              <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
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
            className="col-span-1 md:col-span-4 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 relative overflow-hidden group backdrop-blur-sm"
          >
            <h3 className="mb-8 text-xl font-black text-white uppercase tracking-tighter flex items-center gap-2">
              <Layers size={20} className="text-purple-400" />
              The Stack
            </h3>
            <div className="space-y-7">
              {[
                {
                  label: "Core",
                  val: "Next.js / React",
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  label: "Styling",
                  val: "Tailwind / Motion",
                  color: "from-pink-500 to-rose-400",
                },
                {
                  label: "Backend",
                  val: "Node",
                  color: "from-emerald-500 to-teal-400",
                },
                {
                  label: "Graphics",
                  val: "Three.js / GSAP",
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
                  <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className={`h-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link href={"https://github.com/RasheedBShaik"}>
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
              title="Design to Code"
              desc="Pixel-perfect implementation of Figma designs with a focus on motion and typography."
              accent="pink"
            />
            <FeatureBox
              icon={<Cpu size={24} />}
              title="Performance"
              desc="Zero-clutter code, optimized assets, and best-in-class Lighthouse scores."
              accent="blue"
            />
            <FeatureBox
              icon={<Layout size={24} />}
              title="UX Engineering"
              desc="Crafting intuitive flows that guide users effortlessly through complex data."
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
      className="group relative rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05]"
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
