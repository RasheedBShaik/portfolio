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
} from "lucide-react";
import Link from "next/link";
import { projectData } from "../../../projectsData";

export default function ArchivePage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return projectData;

    return projectData.filter(
      (project) =>
        project.title.toLowerCase().includes(search) ||
        project.stack.some((tech) => tech.toLowerCase().includes(search)) ||
        project.category.toLowerCase().includes(search),
    );
  }, [query]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a855f7",
        },
      }}
    >
      <main
        className="
          relative min-h-screen w-full overflow-hidden
          bg-transparent text-white
          font-syne selection:bg-purple-500/30
        "
      >
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
              bg-[#020204]
              w-full
                group inline-flex items-center gap-3
                text-slate-400
                transition-colors duration-300
                hover:text-white
              "
            >
              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-white/15
                  bg-black/20
                  backdrop-blur-sm
                  transition-all duration-300
                  group-hover:border-purple-400/50
                  group-hover:bg-purple-500/10
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
          {/* NO BACKGROUND */}
          {/* ================================================= */}

          <header className="mb-14 mt-14 md:mb-20 md:mt-20">
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
              {/* Small Label */}

              <div className="mb-6 flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                  className="h-px bg-purple-500"
                />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.35em]
                    text-purple-400
                  "
                >
                  Selected work
                </span>
              </div>

              {/* Main Heading */}

              <h1
                className="
                  max-w-5xl
                  text-6xl
                  font-black
                  uppercase
                  leading-[0.85]
                  tracking-[-0.06em]
                  text-white
                  sm:text-7xl
                  md:text-9xl
                "
              >
                My{" "}
                <span
                  className="
                    bg-linear-to-r
                    from-white
                    via-purple-200
                    to-purple-500
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
                  text-slate-300
                  md:text-base
                "
              >
                A collection of projects I&apos;ve designed and built — from
                responsive websites to full-stack applications.
              </p>
            </motion.div>

            {/* ================================================= */}
            {/* SEARCH */}
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
                bg-[#020204]
                flex flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* Project Count */}

              <div className="flex items-center gap-3">
                <FolderOpen size={14} className="text-purple-400" />

                <span
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-slate-300
                  "
                >
                  {filtered.length}{" "}
                  {filtered.length === 1 ? "Project" : "Projects"}
                </span>

                <span className="h-1 w-1 rounded-full bg-white/30" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-slate-500
                  "
                >
                  {projectData.length} Total
                </span>
              </div>

              {/* Search Box */}

              <div className="group relative w-full md:w-90">
                <Search
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-500
                    transition-colors
                    duration-300
                    group-focus-within:text-purple-400
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
                    border-white/15
                    bg-black/20
                    py-4
                    pl-12
                    pr-11
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white
                    outline-none
                    placeholder:text-slate-500
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    focus:border-purple-500/50
                    focus:bg-black/30
                    focus:shadow-[0_0_30px_rgba(168,85,247,0.08)]
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
                      text-slate-500
                      transition-colors
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </motion.div>
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
              bg-[#020204]
              border-white/8
              px-8
              py-4
              md:grid
              grid-cols-12
            "
          >
            <span className="col-span-1 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
              #
            </span>

            <span className="col-span-5 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
              Project
            </span>

            <span className="col-span-3 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
              Built with
            </span>

            <span className="col-span-3 text-right text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
              View
            </span>
          </motion.div>

          {/* ================================================= */}
          {/* PROJECT LIST */}
          {/* ================================================= */}

          <div className="border-t border-white/8 bg-[#020204] md:border-t-0">
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
                    border-white/8
                    px-1
                    py-9
                    md:px-8
                    md:py-10
                  "
                >
                  {/* Animated Purple Line */}

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
                      bg-linear-to-b
                      from-purple-500
                      via-blue-400
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
                        text-purple-400/60
                        md:text-slate-500
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
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-purple-300
                          md:text-3xl
                        "
                      >
                        {project.title}
                      </h2>

                      <span
                        className="
                          rounded-full
                          border
                          border-white/15
                          bg-black/20
                          px-2.5
                          py-1
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-slate-400
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
                        text-slate-300
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
                          border-blue-500/20
                          bg-blue-500/6
                          px-3
                          py-2
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-widest
                          text-blue-300
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
                          border-white/15
                          bg-black/20
                          px-2.5
                          py-1.5
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-300
                          transition-all
                          duration-300
                          group-hover:border-purple-500/30
                          group-hover:text-white
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
                          border-white/15
                          bg-black/20
                          text-slate-400
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:border-white/30
                          hover:bg-white/10
                          hover:text-white
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
                          text-red-400/40
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
                        bg-white
                        px-5
                        py-3
                        text-[9px]
                        font-black
                        uppercase
                        tracking-[0.2em]
                        text-black
                        transition-all
                        duration-300
                        hover:bg-purple-500
                        hover:text-white
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
                border-white/15
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
                  border-white/15
                  bg-black/20
                "
              >
                <Search size={20} className="text-slate-500" />
              </div>

              <h3
                className="
                  text-sm
                  font-black
                  uppercase
                  tracking-widest
                  text-white
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
                  text-slate-500
                "
              >
                Try searching for a different project, technology, or category.
              </p>

              <button
                type="button"
                onClick={() => setQuery("")}
                className="
                  mt-6
                  rounded-full
                  border
                  border-purple-500/30
                  bg-purple-500/10
                  px-5
                  py-2.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-widest
                  text-purple-300
                  transition-all
                  hover:bg-purple-500/20
                "
              >
                Show all projects
              </button>
            </motion.div>
          )}

          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-16
              bg-[#020204]
              flex
              flex-col
              items-center
              justify-between
              gap-5
              border-t
              border-white/8
              py-8
              text-center
              md:flex-row
              md:text-left
            "
          >
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-500
              "
            >
              © {new Date().getFullYear()}{" "}
              <span className="text-white">Rasheed Basha</span>
            </p>

            <Link
              href="/#contact"
              className="
                group
                flex
                items-center
                gap-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-slate-400
                transition-colors
                hover:text-white
              "
            >
              Have a project?
              <ArrowRight
                size={13}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </main>
    </ConfigProvider>
  );
}
