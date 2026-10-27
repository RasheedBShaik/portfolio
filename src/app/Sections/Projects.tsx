
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Tooltip, Typography, ConfigProvider } from "antd";
import {
  Github,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { projectData } from "../../../projectsData";

const { Title, Text } = Typography;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const reduce = useReducedMotion();
  const featured = projectData.slice(0, 4);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6D4CC3",
          borderRadius: 12,
        },
      }}
    >
      <section
        id="projects"
        className="relative w-full overflow-hidden bg-[#FAF9F6] px-4 py-20 font-syne text-[#292333] selection:bg-violet-200 sm:px-8 sm:py-24"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-200/25 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-200/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease }}
              className="space-y-5"
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
                whileHover={reduce ? undefined : { y: -2 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E1E9] bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#51416F] shadow-sm"
              >
                <motion.span
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="inline-flex"
                >
                  <Layers size={15} className="text-violet-600" />
                </motion.span>

                Selected Projects

                <motion.span
                  animate={reduce ? undefined : { opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                />
              </motion.div>

              <Title
                level={1}
                className="m-0! text-4xl! font-extrabold! uppercase leading-[1.08]! tracking-[-0.055em]! text-[#292333]! sm:text-5xl! md:text-7xl!"
              >
                Selected{" "}
                <span className="bg-gradient-to-r from-[#51416F] via-violet-600 to-[#9675D9] bg-clip-text text-transparent">
                  Works
                </span>
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : 0.12,
                ease,
              }}
              className="max-w-xs md:pb-2"
            >
              <Text className="block! text-xs! font-medium! leading-6! text-[#777381]! sm:text-sm! md:text-right!">
                A selection of projects built with modern web technologies,
                thoughtful interfaces, and a focus on usability.
              </Text>
            </motion.div>
          </div>

          {/* Project cards */}
          <div className="space-y-4">
            {featured.map((project, index) => (
              <ProjectRow
                key={project.title ?? index}
                project={project}
                index={index}
                reduce={!!reduce}
              />
            ))}
          </div>

          {/* All projects */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: reduce ? 0 : 0.1,
              ease,
            }}
            className="mt-10 flex justify-center sm:mt-14"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-5 rounded-xl bg-[#292333] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(41,35,51,0.1)] transition-all duration-300 hover:bg-violet-700 sm:px-8"
            >
              View All Projects
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
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
  reduce,
}: {
  project: any;
  index: number;
  reduce: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay: reduce ? 0 : index * 0.08,
        ease,
      }}
      whileHover={reduce ? undefined : { y: -3 }}
      className={`group relative overflow-hidden rounded-3xl border bg-white/75 p-5 shadow-[0_5px_25px_rgba(41,35,51,0.025)] transition-colors duration-300 sm:p-7 lg:p-8 ${
        isHovered
          ? "border-violet-200 shadow-[0_12px_35px_rgba(81,65,111,0.07)]"
          : "border-[#E8E2EF]"
      }`}
    >
      {/* Subtle hover glow */}
      <motion.div
        animate={{ opacity: isHovered && !reduce ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-violet-200/40 blur-[80px]"
      />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Project details */}
        <div className="flex min-w-0 flex-1 flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex shrink-0 items-center gap-4">
            <span className="text-xs font-bold tabular-nums text-violet-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            <motion.div
              animate={
                isHovered && !reduce
                  ? { scale: 1.06, rotate: -4 }
                  : { scale: 1, rotate: 0 }
              }
              transition={{ duration: 0.3, ease }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8E2EF] bg-[#FAF9F6] text-[#51416F] transition-colors duration-300 group-hover:border-violet-200 group-hover:bg-violet-50"
            >
              {project.icon}
            </motion.div>
          </div>

          <div className="min-w-0 flex-1">
            <motion.h3
              animate={
                isHovered && !reduce ? { x: 3 } : { x: 0 }
              }
              transition={{ duration: 0.25, ease }}
              className="mb-3 break-words text-2xl font-extrabold uppercase leading-tight tracking-[-0.045em] text-[#292333] sm:text-3xl lg:text-4xl"
            >
              {project.title}
            </motion.h3>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((stack: string) => (
                <span
                  key={stack}
                  className="rounded-lg border border-[#E8E2EF] bg-[#FAF9F6] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#777381] transition-colors duration-200 group-hover:border-violet-100"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project actions */}
        <div className="relative z-10 flex flex-wrap items-center gap-2 sm:gap-3 lg:shrink-0">
          {project.creds && (
            <Tooltip
              title={project.creds}
              color="#51416F"
              placement="top"
            >
              <motion.div
                whileHover={reduce ? undefined : { scale: 1.05 }}
                className="flex h-11 w-11 cursor-help items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-700 transition-colors hover:bg-violet-100"
              >
                <ShieldCheck size={19} />
              </motion.div>
            </Tooltip>
          )}

          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E1E9] bg-white text-[#625B70] transition-colors duration-300 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            >
              <Github size={19} />
            </motion.a>
          ) : (
            <Tooltip title="Source Code Protected" color="#51416F">
              <div
                aria-label="Source code protected"
                className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-xl border border-[#E8E2EF] bg-[#FAF9F6] text-[#A39BAF]"
              >
                <ShieldCheck size={19} />
              </div>
            </Tooltip>
          )}

          {project.live ? (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="group/live inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#292333] px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-violet-700 sm:px-5"
            >
              Live Demo
              <ExternalLink
                size={14}
                className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
              />
            </motion.a>
          ) : (
            <span className="inline-flex h-11 items-center rounded-xl border border-[#E8E2EF] bg-[#FAF9F6] px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#898391]">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
