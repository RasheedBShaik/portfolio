"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigProvider } from "antd";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Search,
  Terminal,
  ShieldCheck,
  Command,
  X,
} from "lucide-react";
import Link from "next/link";
import { projectData } from "../../../projectsData";

export default function ArchivePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const s = query.toLowerCase();
    return projectData.filter(
      (p) =>
        p.title.toLowerCase().includes(s) ||
        p.stack.some((tech) => tech.toLowerCase().includes(s)) ||
        p.category.toLowerCase().includes(s),
    );
  }, [query]);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#3b82f6" } }}>
      <main className="min-h-screen bg-[#050505] text-white font-syne py-8 md:py-20 px-4 md:px-6 selection:bg-blue-500/30">
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <header className="flex flex-col gap-6 mb-12 md:mb-16">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors w-fit"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Root / Portfolio
              </span>
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                Work{" "}
                <span className="text-slate-800 font-light block md:inline">
                  History
                </span>
              </h1>

              {/* Enhanced Search Bar - Full width on mobile */}
              <div className="relative w-full md:w-80 group">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors"
                  size={16}
                />
                <input
                  type="text"
                  value={query}
                  placeholder="FILTER BY TECH OR NAME..."
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-4 md:py-4 pl-12 pr-10 text-[11px] font-bold tracking-[0.1em] uppercase focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.04] transition-all appearance-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-1"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </header>

          {/* Registry Stats */}
          <div className="flex items-center gap-4 mb-6 px-1">
            <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-widest whitespace-nowrap">
              <Command size={12} className="animate-pulse" /> System Active
            </div>
            <div className="h-px flex-1 bg-white/5" />
            <div className="text-[10px] font-mono text-slate-600 uppercase whitespace-nowrap">
              {filtered.length} / {projectData.length}
            </div>
          </div>

          {/* Table Header - Desktop Only */}
          <div className="hidden md:grid grid-cols-12 px-8 py-4 border-y border-white/5 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] bg-white/[0.01]">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Project Identification</div>
            <div className="col-span-3">Technologies</div>
            <div className="col-span-3 text-right">Deployment</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5 border-t md:border-t-0 border-white/5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="grid grid-cols-12 px-2 md:px-8 py-8 md:py-10 items-center group hover:bg-white/[0.02] transition-all relative overflow-hidden"
                >
                  {/* Sidebar Highlight Decor */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                  {/* ID - Hidden on very small screens, visible on md+ */}
                  <div className="hidden md:block col-span-1 text-slate-800 font-mono text-xs font-black group-hover:text-blue-500/50 transition-colors">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>

                  {/* Project Info - Full width on mobile */}
                  <div className="col-span-12 md:col-span-5 space-y-4 mb-6 md:mb-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="md:hidden text-blue-500/40 font-mono text-[10px] font-bold">
                        // {(i + 1).toString().padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl md:text-2xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors leading-none">
                        {project.title}
                      </h3>
                      <span className="text-[9px] px-2 py-0.5 border border-white/10 text-slate-500 rounded-full font-bold uppercase tracking-tighter bg-white/[0.02]">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-[13px] md:text-[12px] text-slate-400 leading-relaxed font-medium max-w-md">
                      {project.description}
                    </p>

                    {project.creds && (
                      <div className="flex items-center gap-2 text-[9px] font-bold text-blue-500 tracking-widest bg-blue-500/5 w-fit px-2 py-1.5 rounded-md border border-blue-500/10">
                        <ShieldCheck size={11} /> {project.creds}
                      </div>
                    )}
                  </div>

                  {/* Tech Tags - Stacked nicely on mobile */}
                  <div className="col-span-12 md:col-span-3 flex gap-1.5 flex-wrap mb-8 md:mb-0">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] md:text-[8px] font-black text-slate-400 border border-white/10 px-2.5 py-1 rounded bg-white/[0.03] group-hover:border-blue-500/20 group-hover:text-slate-200 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Links - Larger touch targets for mobile */}
                  {/* Links - Larger touch targets for mobile */}
                  <div className="col-span-12 md:col-span-3 flex justify-start md:justify-end gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 md:p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all flex-1 md:flex-none flex justify-center items-center"
                        title="View Source"
                      >
                        <Github size={20} className="md:w-4 md:h-4" />
                      </a>
                    ) : (
                      /* Protected State - Shown when GitHub link is missing */
                      <div
                        className="p-4 md:p-3 rounded-xl bg-white/[0.02] border border-red-500/10 text-red-500/40 cursor-not-allowed flex-1 md:flex-none flex justify-center items-center"
                        title="Source Code Protected"
                      >
                        <ShieldCheck size={20} className="md:w-4 md:h-4" />
                      </div>
                    )}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-6 py-4 md:py-3 rounded-xl bg-white text-black font-black text-[10px] md:text-[9px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 flex-[2] md:flex-none"
                    >
                      Launch <ExternalLink size={14} className="md:w-3 md:h-3" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center border border-dashed border-white/10 rounded-3xl mt-4"
            >
              <Terminal className="mx-auto text-slate-800 mb-6" size={48} />
              <h4 className="text-white font-black uppercase text-sm tracking-widest mb-2">
                Query Null
              </h4>
              <p className="text-slate-600 font-bold uppercase text-[9px] tracking-[0.3em] px-6">
                No registry entries match the current search parameters.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </ConfigProvider>
  );
}