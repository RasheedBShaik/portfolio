"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ConfigProvider, Input } from "antd";
import { 
  ArrowLeft, Github, ExternalLink, 
  Search, Terminal, Hash, ShieldCheck 
} from "lucide-react";
import Link from "next/link";
import { projectData } from "../../../projectsData";


export default function page() {
  const [query, setQuery] = useState("");

  // Filter logic to search by title or tech stack
  const filtered = projectData.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.stack.some(s => s.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#3b82f6" } }}>
      <main className="min-h-screen bg-[#050505] text-white font-syne py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Navigation */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
            <div className="space-y-4">
              <Link href="/" className="group inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Return to Hub</span>
              </Link>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                Archive <span className="text-slate-800 italic font-light">Index</span>
              </h1>
            </div>

            {/* Terminal Style Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="SEARCH REGISTRY (TECH / NAME)..."
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-12 pr-6 text-[11px] font-black tracking-[0.1em] uppercase focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
              />
            </div>
          </div>

          {/* Table Header (Desktop Only) */}
          <div className="hidden md:grid grid-cols-12 px-8 py-4 border-b border-white/10 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
            <div className="col-span-1"><Hash size={12}/></div>
            <div className="col-span-4">System Name</div>
            <div className="col-span-4">Technology Stack</div>
            <div className="col-span-3 text-right">Access Points</div>
          </div>

          {/* The List */}
          <div className="flex flex-col">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-12 px-4 md:px-8 py-10 border-b border-white/5 items-center group hover:bg-white/[0.01] transition-colors"
              >
                {/* ID */}
                <div className="hidden md:block col-span-1 text-slate-800 font-mono text-xs font-black">
                  0{i + 1}
                </div>

                {/* Project Info */}
                <div className="col-span-7 md:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="md:hidden text-slate-800 font-mono text-[10px]">0{i + 1}</span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.creds && (
                    <div className="flex items-center gap-2 text-[9px] font-bold text-blue-500/60 uppercase tracking-widest">
                      <ShieldCheck size={10} /> Credentials Available
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="hidden md:flex col-span-4 gap-2 flex-wrap">
                  {project.stack.map(s => (
                    <span key={s} className="text-[9px] font-black text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/[0.02]">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="col-span-5 md:col-span-3 flex justify-end gap-2 md:gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-white transition-all"
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    className="flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 rounded-xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    <span className="hidden sm:inline">Launch</span> 
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10 rounded-[2rem] mt-10">
              <Terminal className="mx-auto text-slate-700 mb-4" size={40} />
              <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.3em]">
                No projects found in the current buffer.
              </p>
            </div>
          )}
        </div>
      </main>
    </ConfigProvider>
  );
}