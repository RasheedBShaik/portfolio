"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip, Typography, ConfigProvider } from "antd";
import {
  Github,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { projectData } from "../../../projectsData";

const { Title, Text } = Typography;

export default function Projects() {
  // Featured projects shown on the homepage
  const featured = projectData.slice(0, 4);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3b82f6",
        },
      }}
    >
      <section
        id="projects"
        className="relative w-full bg-[#050505] py-32 px-6 font-syne overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-blue-600/4 blur-[140px]" />
          <div className="absolute bottom-0 right-[-10%] w-100 h-100 rounded-full bg-purple-600/4 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
                filter: "blur(8px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-4"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400"
              >
                {/* Moving beam */}
                <motion.span
                  className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-25deg] bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"
                  animate={{
                    left: ["-50%", "130%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* Single energy core */}
                <motion.span
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    boxShadow: [
                      "0 0 4px rgba(59,130,246,0.4)",
                      "0 0 14px rgba(6,182,212,0.9)",
                      "0 0 4px rgba(59,130,246,0.4)",
                    ],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                />

                <span className="relative z-10">
                  Selected Projects
                </span>
              </motion.div>

              <Title
                level={1}
                className="text-white! m-0! text-6xl! md:text-8xl! font-black! uppercase tracking-tighter leading-none"
              >
                Selected{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-indigo-500">
                  works
                </span>
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
            >
              <Text className="text-slate-500! uppercase text-[10px] font-bold tracking-[0.2em] md:text-right max-w-57.5 block">
                Real projects built with modern web technologies.
              </Text>
            </motion.div>
          </div>

          {/* Project List */}
          <div className="flex flex-col border-t border-white/10">
            {featured.map((project, index) => (
              <ProjectRow
                key={project.title ?? index}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* ALL PROJECTS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-16 flex justify-center"
          >
            <Link
              href="/projects"
              className="group relative flex items-center gap-6 px-10 py-6 rounded-full bg-white text-black font-black text-[11px] uppercase tracking-[0.4em] overflow-hidden transition-all hover:pr-14"
            >
              <span className="relative z-10">
                View All Projects
              </span>

              <ArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* White layer */}
              <div className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>
    </ConfigProvider>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/5 transition-all cursor-pointer"
    >
      {/* Hover Energy */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="projectHoverGlow"
            className="absolute inset-0 z-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/6 via-purple-500/2.5 to-transparent" />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-blue-400/8 to-transparent skew-x-[-20deg]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 grow">
        {/* ID + Icon */}
        <div className="flex items-center gap-6 min-w-25">
          <motion.span
            animate={
              isHovered
                ? {
                    color: "#60a5fa",
                    x: 4,
                  }
                : {
                    color: "#3b82f6",
                    x: 0,
                  }
            }
            className="font-black text-sm tabular-nums"
          >
            0{index + 1}
          </motion.span>

          <motion.div
            animate={
              isHovered
                ? {
                    rotate: 360,
                    scale: 1.08,
                  }
                : {
                    rotate: 0,
                    scale: 1,
                  }
            }
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="p-3 rounded-2xl bg-white/5 text-slate-500 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors duration-500"
          >
            {project.icon}
          </motion.div>
        </div>

        {/* Project Information */}
        <div className="space-y-2">
          <motion.h3
            animate={
              isHovered
                ? {
                    x: 6,
                  }
                : {
                    x: 0,
                  }
            }
            transition={{
              duration: 0.3,
            }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:italic transition-all"
          >
            {project.title}
          </motion.h3>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((stack: string) => (
              <span
                key={stack}
                className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1"
              >
                <span className="h-1 w-1 bg-blue-500 rounded-full" />
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="relative z-10 flex items-center gap-4 mt-8 md:mt-0">
        {/* Credentials */}
        {project.creds && (
          <Tooltip
            title={project.creds}
            color="#3b82f6"
            placement="top"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: -5,
              }}
              className="p-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 text-blue-400 cursor-help hover:bg-blue-500/20 transition-colors"
            >
              <ShieldCheck size={20} />
            </motion.div>
          </Tooltip>
        )}

        <div className="flex gap-2">
          {/* GitHub */}
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/40 transition-all"
            >
              <Github size={20} />
            </motion.a>
          ) : (
            <Tooltip
              title="Source Code Protected"
              color="#ef4444"
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-red-500/20 text-red-400/60 cursor-not-allowed">
                <ShieldCheck size={20} />
              </div>
            </Tooltip>
          )}

          {/* Live */}
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
            }}
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-xl shadow-blue-500/10"
          >
            Live
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
