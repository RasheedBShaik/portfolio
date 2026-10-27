"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfigProvider } from "antd";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Search,
  ShieldCheck,
  X,
  FolderOpen,
  ArrowRight,
  ArrowUp,
  Mail,
  Linkedin,
  Layers,
  Code2,
  FileCode2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { projectData, ProjectType } from "../../../projectsData";

const socials = [
  { label: "GitHub", href: "https://github.com/rasheedbshaik", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/rasheedbshaik", icon: Linkedin },
  { label: "Email", href: "mailto:rasheed.sk7337@gmail.com", icon: Mail },
];

const filterTabs: { label: string; value: ProjectType | "all" }[] = [
  { label: "All Projects", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Single Page", value: "singlepage" },
  { label: "Features & UI", value: "feature" },
];

export default function ArchivePage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<ProjectType | "all">("all");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    return projectData.filter((project) => {
      // Tab filter
      const matchesTab = activeTab === "all" || project.projectType === activeTab;

      // Search query filter
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search) ||
        project.stack.some((tech) => tech.toLowerCase().includes(search)) ||
        project.category.toLowerCase().includes(search);

      return matchesTab && matchesSearch;
    });
  }, [query, activeTab]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7652B5",
        },
      }}
    >
      <main
        className="
          relative min-h-screen w-full overflow-hidden
          bg-[#FAF9F6] text-[#292333]
          font-syne selection:bg-violet-200
        "
      >
        {/* ================================================= */}
        {/* AMBIENT BACKGROUND */}
        {/* ================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -50, 60, 0],
              scale: [1, 1.15, 0.9, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-10%] top-[10%] h-[450px] w-[450px] rounded-full bg-violet-200/35 blur-[140px]"
          />

          <motion.div
            animate={{
              x: [0, -70, 50, 0],
              y: [0, 60, -40, 0],
              scale: [1, 0.9, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-300/25 blur-[150px]"
          />

          <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(#51416F_1px,transparent_1px),linear-gradient(90deg,#51416F_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-16">
          {/* ================================================= */}
          {/* TOP BACK BUTTON */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="/"
              className="
                group inline-flex items-center gap-3
                text-[#777381]
                transition-colors duration-300
                hover:text-[#292333]
              "
            >
              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-violet-900/10
                  bg-white/60
                  backdrop-blur-sm
                  transition-all duration-300
                  group-hover:border-violet-500/40
                  group-hover:bg-violet-500/10
                "
              >
                <ArrowLeft
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-x-1
                  "
                />
              </span>

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                "
              >
                Back to portfolio
              </span>
            </Link>
          </motion.div>

          {/* ================================================= */}
          {/* MY WORK HEADER */}
          {/* ================================================= */}

          <header className="mb-14 mt-14 md:my-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Main Heading */}

              <h1
                className="
                  max-w-5xl
                  text-6xl
                  font-black
                  uppercase
                  leading-[0.85]
                  tracking-[-0.06em]
                  text-[#292333]
                  sm:text-7xl
                  md:text-9xl
                "
              >
                My{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#292333]
                    via-[#51416F]
                    to-[#9675D9]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Work
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-[#777381]
                  md:text-base
                "
              >
                A collection of projects I&apos;ve designed and built — from
                responsive websites to full-stack applications.
              </p>
            </motion.div>

            {/* ================================================= */}
            {/* FILTER TABS & SEARCH */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                mt-10
                flex flex-col
                gap-6
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {filterTabs.map((tab) => {
                  const isActive = activeTab === tab.value;
                  return (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`
                        rounded-xl border px-4 py-2.5 text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer
                        ${
                          isActive
                            ? "border-violet-500/50 bg-violet-500/10 text-violet-700 shadow-sm"
                            : "border-violet-900/10 bg-white/50 text-[#777381] hover:border-violet-900/20 hover:text-[#292333]"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}

              <div className="group relative w-full md:w-80">
                <Search
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#777381]/50
                    transition-colors
                    duration-300
                    group-focus-within:text-violet-600
                  "
                />

                <input
                  type="text"
                  value={query}
                  placeholder="SEARCH PROJECTS..."
                  onChange={(e) => setQuery(e.target.value)}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-violet-900/10
                    bg-white/60
                    py-4
                    pl-12
                    pr-11
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#292333]
                    outline-none
                    placeholder:text-[#777381]/50
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    focus:border-violet-500/50
                    focus:bg-white
                    focus:shadow-[0_0_30px_rgba(118,82,181,0.08)]
                  "
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="
                      absolute
                      right-3
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-lg
                      text-[#777381]
                      transition-colors
                      hover:bg-violet-500/10
                      hover:text-[#292333]
                    "
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Project Count Info Bar */}
            <div className="mt-6 flex items-center gap-3 border-t border-violet-900/10 pt-4">
              <FolderOpen size={14} className="text-[#51416F]" />
              <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#777381]">
                Showing {filtered.length} of {projectData.length} Projects
              </span>
            </div>
          </header>

          {/* ================================================= */}
          {/* PROJECT HEADER */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="
              hidden
              border-y
              border-violet-900/10
              px-8
              py-4
              md:grid
              grid-cols-12
            "
          >
            <span className="col-span-1 text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
              #
            </span>

            <span className="col-span-5 text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
              Project
            </span>

            <span className="col-span-3 text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
              Built with
            </span>

            <span className="col-span-3 text-right text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
              View
            </span>
          </motion.div>

          {/* ================================================= */}
          {/* PROJECT LIST */}
          {/* ================================================= */}

          <div className="border-t border-violet-900/10 md:border-t-0">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.article
                  layout
                  key={project.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: Math.min(index * 0.06, 0.4),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    grid
                    grid-cols-12
                    items-center
                    border-b
                    border-violet-900/10
                    px-1
                    py-9
                    md:px-8
                    md:py-10
                  "
                >
                  {/* Animated Violet Line */}

                  <motion.div
                    initial={{
                      scaleY: 0,
                    }}
                    whileInView={{
                      scaleY: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04,
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-0.5
                      origin-top
                      bg-gradient-to-b
                      from-violet-600
                      via-violet-400
                      to-transparent
                      opacity-80
                    "
                  />

                  {/* Number */}

                  <div
                    className="
                      col-span-12
                      mb-5
                      md:col-span-1
                      md:mb-0
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[10px]
                        font-bold
                        tracking-widest
                        text-violet-600/70
                        md:text-[#777381]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Project */}

                  <div className="col-span-12 md:col-span-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2
                        className="
                          text-2xl
                          font-black
                          uppercase
                          tracking-[-0.03em]
                          text-[#292333]
                          transition-colors
                          duration-300
                          group-hover:text-violet-700
                          md:text-3xl
                        "
                      >
                        {project.title}
                      </h2>

                      <span
                        className="
                          rounded-full
                          border
                          border-violet-900/10
                          bg-white/60
                          px-2.5
                          py-1
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-[#777381]
                        "
                      >
                        {project.category}
                      </span>
                    </div>

                    <p
                      className="
                        mt-4
                        max-w-md
                        text-[12px]
                        leading-relaxed
                        text-[#777381]
                        md:text-[13px]
                      "
                    >
                      {project.description}
                    </p>

                    {project.creds && (
                      <div
                        className="
                          mt-4
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-violet-500/20
                          bg-violet-500/5
                          px-3
                          py-2
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-violet-700
                        "
                      >
                        <ShieldCheck size={11} />
                        {project.creds}
                      </div>
                    )}
                  </div>

                  {/* Technologies */}

                  <div
                    className="
                      col-span-12
                      mt-7
                      flex
                      flex-wrap
                      gap-2
                      md:col-span-3
                      md:mt-0
                    "
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-lg
                          border
                          border-violet-900/10
                          bg-white/60
                          px-2.5
                          py-1.5
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-[#777381]
                          transition-all
                          duration-300
                          group-hover:border-violet-500/30
                          group-hover:text-[#292333]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}

                  <div
                    className="
                      col-span-12
                      mt-7
                      flex
                      gap-3
                      md:col-span-3
                      md:mt-0
                      md:justify-end
                    "
                  >
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code`}
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-violet-900/10
                          bg-white/60
                          text-[#777381]
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:border-violet-500/30
                          hover:bg-white
                          hover:text-[#292333]
                        "
                      >
                        <Github size={17} />
                      </a>
                    ) : (
                      <div
                        title="Source code protected"
                        className="
                          flex
                          h-12
                          w-12
                          cursor-not-allowed
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-red-500/15
                          bg-red-500/4
                          text-red-600/50
                        "
                      >
                        <ShieldCheck size={17} />
                      </div>
                    )}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/launch
                        flex
                        flex-1
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        bg-[#292333]
                        px-5
                        py-3
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-violet-600
                        md:flex-none
                      "
                    >
                      View project
                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover/launch:translate-x-0.5
                          group-hover/launch:-translate-y-0.5
                        "
                      />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* ================================================= */}
          {/* EMPTY STATE */}
          {/* ================================================= */}

          {filtered.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                flex
                min-h-80
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-dashed
                border-violet-900/20
                px-6
                text-center
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-violet-900/10
                  bg-white/60
                "
              >
                <Search size={20} className="text-[#777381]" />
              </div>

              <h3
                className="
                  text-sm
                  font-black
                  uppercase
                  tracking-widest
                  text-[#292333]
                "
              >
                No projects found
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  leading-relaxed
                  text-[#777381]
                "
              >
                Try searching for a different project, technology, or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveTab("all");
                }}
                className="
                  mt-6
                  rounded-full
                  border
                  border-violet-500/30
                  bg-violet-500/10
                  px-5
                  py-2.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-violet-700
                  transition-all
                  hover:bg-violet-500/20
                "
              >
                Reset filters
              </button>
            </motion.div>
          )}

          {/* ================================================= */}
          {/* PROFESSIONAL FOOTER */}
          {/* ================================================= */}

          <footer className="mt-24 border-t border-violet-900/10 pt-16">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
              <div>
                <Link href="/" className="group inline-block">
                  <span className="font-syne text-xl font-extrabold tracking-wider text-[#292333]">
                    RASHEED<span className="text-violet-600">BASHA</span>
                  </span>
                </Link>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#777381]">
                  Full Stack Developer & Software Engineer
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      title={label}
                      target={label === "Email" ? undefined : "_blank"}
                      rel={label === "Email" ? undefined : "noopener noreferrer"}
                      className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-violet-900/10 bg-white/60 text-[#777381] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:bg-white hover:text-[#292333]"
                    >
                      <Icon size={16} strokeWidth={1.7} />
                    </a>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group flex items-center gap-2 rounded-xl border border-violet-900/10 bg-white/60 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#292333] backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:bg-white cursor-pointer"
                  aria-label="Back to top"
                >
                  <span>Back to top</span>
                  <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            <div className="my-10 h-px w-full bg-violet-900/10" />

            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left pb-8">
              <p className="text-[11px] font-medium tracking-wide text-[#777381]">
                © {new Date().getFullYear()} <span className="font-semibold text-[#292333]">Rasheed Basha</span>. All rights reserved.
              </p>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#777381]">
                  Available for Full-time Roles & Projects
                </span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </ConfigProvider>
  );
}