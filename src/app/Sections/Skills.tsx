"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Cpu,
  Orbit,
  Terminal,
  Box,
  Zap,
  Code2,
  MousePointer2,
  ArrowUpRight,
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 px-6 font-syne overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 backdrop-blur-sm">
            <Cpu size={14} className="animate-pulse" />
            Technical Architecture
          </div>
          <h2 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl uppercase">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">STACK</span>
          </h2>
        </motion.div>

        {/* 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. THE CORE ENGINE (7 Columns) */}
          <BentoCard className="md:col-span-7" spotlightColor="rgba(59, 130, 246, 0.15)">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Code2 size={160} strokeWidth={1} />
            </div>
            <h3 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-4">01. Core Stack</h3>
            <h4 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              React & <span className="text-slate-500 ">Next.js</span>
            </h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              Specializing in <span className="text-white">Server Components</span>, edge runtime optimization, and high-concurrency state management.
            </p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "App Router", "Tanstack Query", "Zustand", "Tailwind"].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-300 uppercase tracking-widest hover:bg-white/10 transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>

          {/* 2. CREATIVE MOTION (5 Columns) */}
          <BentoCard className="md:col-span-5" spotlightColor="rgba(168, 85, 247, 0.15)">
            <Orbit className="text-purple-400 mb-6" size={32} />
            <h3 className="text-[10px] font-bold text-purple-400 uppercase tracking-[0.3em] mb-2">02. Creative</h3>
            <h4 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Motion & 3D</h4>
            <div className="space-y-4 mb-6">
              {["Three.js", "GSAP", "Framer Motion"].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-purple-500" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-[11px] text-slate-500 italic">Interaction as a first-class citizen.</p>
            </div>
          </BentoCard>

          {/* 3. INFRASTRUCTURE (4 Columns) */}
          <BentoCard className="md:col-span-4" spotlightColor="rgba(16, 185, 129, 0.15)">
            <Terminal className="text-emerald-500 mb-6" size={24} />
            <h3 className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.3em] mb-2">03. Environment</h3>
            <h4 className="text-xl font-bold text-white uppercase tracking-tighter mb-8 ">Tooling HUD</h4>
            <div className="grid grid-cols-2 gap-4">
              {[{n: "Vercel", s:"Cloud"}, {n: "node", s:"Backend"}, {n: "Git", s:"Core"}, {n: "Postman", s:"APIs"}].map((t) => (
                <div key={t.n} className="group/tool transition-transform hover:translate-x-1">
                   <div className="text-[11px] font-black text-white uppercase tracking-tighter flex items-center gap-2">
                    <span className="h-1 w-1 bg-emerald-500 rounded-full" /> {t.n}
                   </div>
                   <div className="text-[9px] text-slate-600 pl-3 uppercase tracking-widest">{t.s}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 4. DESIGN SYSTEMS (8 Columns) */}
          <BentoCard className="md:col-span-8" spotlightColor="rgba(236, 72, 153, 0.15)">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
              <div className="max-w-xs">
                <Box className="text-pink-400 mb-6" size={24} />
                <h3 className="text-[10px] font-bold text-pink-400 uppercase tracking-[0.3em] mb-2">04. UI Engineering</h3>
                <h4 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4">Design Systems</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Building scalable <span className="text-white">component libraries</span> with Shadcn UI, Ant Design UI, and Material UI.
                </p>
              </div>
              <div className="relative flex items-end gap-3 h-32 pr-4">
                {[40, 90, 60, 100].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1, ease: "circOut" }}
                    className="w-8 rounded-t-lg bg-gradient-to-t from-pink-500/40 to-pink-500/10 border-x border-t border-pink-500/20"
                  />
                ))}
                <MousePointer2 size={16} className="absolute bottom-0 right-[-10px] text-white animate-bounce" />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ children, className, spotlightColor }: { children: React.ReactNode, className?: string, spotlightColor: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#08080a] p-8 md:p-12 transition-colors hover:border-white/20 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />
      <div className="relative z-10 h-full flex flex-col items-start">
        {children}
      </div>
    </motion.div>
  );
}