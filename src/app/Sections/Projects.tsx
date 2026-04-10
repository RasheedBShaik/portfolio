"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, Typography, ConfigProvider } from "antd";
import { Github, ExternalLink, ShieldCheck, ArrowRight, Terminal, Code2, Layers, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import { projectData } from "../../../projectsData";

const { Title, Text } = Typography;

export default function Projects() {
  // We only take the first 4 for the home page
  const featured = projectData.slice(0, 4);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#3b82f6" } }}>
      <section id="projects" className="relative w-full bg-[#050505] py-32 px-6 font-syne overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">
                <Cpu size={14} className="animate-pulse" />
                Featured Deployments
              </div>
              <Title level={1} className="!text-white !m-0 !text-6xl md:!text-8xl !font-black uppercase tracking-tighter leading-none">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-light">Works</span>
              </Title>
            </motion.div>

            <Text className="text-slate-500 uppercase text-[10px] font-bold tracking-[0.2em] md:text-right max-w-[200px]">
              A curated selection of high-performance web systems.
            </Text>
          </div>

          {/* Project List */}
          <div className="flex flex-col border-t border-white/10">
            {featured.map((project, index) => (
              <ProjectRow key={index} project={project} index={index} />
            ))}
          </div>

          {/* SEE ALL PROJECTS BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <Link href="/projects" className="group relative flex items-center gap-6 px-10 py-6 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:pr-14">
              <span className="relative z-10">Initialize Full Archive</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              {/* Button Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity" />
            </Link>
          </motion.div>
        </div>
      </section>
    </ConfigProvider>
  );
}

function ProjectRow({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/5 transition-all cursor-pointer"
    >
      {/* Animated Hover Background */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="hoverGlow"
            className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-transparent to-transparent z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 flex-grow">
        {/* Project ID & Dynamic Icon */}
        <div className="flex items-center gap-6 min-w-[100px]">
          <span className="text-blue-500 font-black text-sm tabular-nums group-hover:text-blue-600 transition-colors">0{index + 1}</span>
          <div className="p-3 rounded-2xl bg-white/5 text-slate-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all duration-500 group-hover:rotate-[360deg]">
            {project.icon}
          </div>
        </div>

        {/* Info Container */}
        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:italic transition-all">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((s: string) => (
              <span key={s} className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                <div className="h-1 w-1 bg-blue-500 rounded-full" /> {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Suite */}
      <div className="relative z-10 flex items-center gap-4 mt-8 md:mt-0">
        {project.creds && (
          <Tooltip title={project.creds} color="#3b82f6" placement="top">
            <div className="p-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-blue-400 cursor-help hover:bg-blue-500/20 transition-colors">
              <ShieldCheck size={20} />
            </div>
          </Tooltip>
        )}
        
        <div className="flex gap-2">
          <a href={project.github} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/40 transition-all">
            <Github size={20} />
          </a>
          <a href={project.live} target="_blank" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl shadow-blue-500/10">
            Live <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}