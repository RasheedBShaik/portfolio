
"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Database,
  Server,
  Terminal,
  Code2,
  MousePointer2,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const frontend = ["TypeScript", "Next.js", "React", "Tailwind CSS", "Motion"];
const backend = ["Node.js", "Python", "REST APIs"];
const tools = [
  { n: "MongoDB", s: "Database" },
  { n: "PostgreSQL", s: "Database" },
  { n: "Git", s: "Version Control" },
  { n: "Vercel", s: "Deployment" },
];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden bg-[#FAF9F6] px-4 py-20 font-syne text-[#292333] selection:bg-violet-200 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[min(90%,700px)] -translate-x-1/2 rounded-full bg-violet-200/30 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-200/20 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#51416F_1px,transparent_1px),linear-gradient(90deg,#51416F_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.65, ease }}
          className="mb-12 flex flex-col items-start gap-4 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#51416F] shadow-sm shadow-violet-900/[0.03]">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Technical Skills
          </span>

          <h2 className="text-4xl font-extrabold uppercase tracking-[-0.045em] sm:text-5xl md:text-7xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-[#51416F] via-violet-600 to-[#9675D9] bg-clip-text text-transparent">
              Stack
            </span>
          </h2>

          <p className="max-w-xl text-sm leading-7 text-[#777381] sm:text-base">
            The technologies and tools I use to build modern, responsive, and
            scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <BentoCard className="md:col-span-7" delay={0}>
            <Code2 className="mb-6 text-violet-600" size={28} />

            <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-violet-600">
              01. Frontend
            </h3>

            <h4 className="mb-5 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              React & <span className="text-[#898391]">Next.js</span>
            </h4>

            <p className="mb-7 max-w-md text-sm leading-7 text-[#777381] sm:text-base">
              Building{" "}
              <span className="font-semibold text-[#292333]">
                fast, responsive, and scalable
              </span>{" "}
              web applications with modern React architecture and TypeScript.
            </p>

            <div className="flex flex-wrap gap-2">
              {frontend.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[#E8E2EF] bg-white/80 px-3 py-2 text-[10px] font-semibold tracking-wide text-[#625B70] transition-colors duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800 sm:text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-5" delay={0.1}>
            <Server className="mb-6 text-emerald-600" size={28} />

            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700">
              02. Backend
            </h3>

            <h4 className="mb-6 text-2xl font-extrabold uppercase tracking-tight">
              APIs & Services
            </h4>

            <div className="mb-6 space-y-4">
              {backend.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-emerald-500" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#625B70]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-auto border-t border-[#E8E2EF] pt-4 text-xs text-[#898391]">
              From interface to server.
            </p>
          </BentoCard>

          <BentoCard className="md:col-span-4" delay={0.15}>
            <Database className="mb-6 text-orange-500" size={26} />

            <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600">
              03. Data & Tools
            </h3>

            <h4 className="mb-8 text-xl font-extrabold uppercase tracking-tight">
              Development Environment
            </h4>

            <div className="grid grid-cols-2 gap-x-3 gap-y-6">
              {tools.map((tool) => (
                <div key={tool.n}>
                  <p className="mb-1 flex items-center gap-2 text-[11px] font-bold text-[#292333]">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    {tool.n}
                  </p>
                  <p className="pl-3.5 text-[9px] uppercase tracking-wider text-[#898391]">
                    {tool.s}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-8" delay={0.2}>
            <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row sm:items-center sm:gap-10">
              <div className="max-w-md">
                <Terminal className="mb-6 text-purple-600" size={26} />

                <h3 className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-purple-700">
                  04. Software
                </h3>

                <h4 className="mb-4 text-2xl font-extrabold uppercase tracking-tight">
                  Python & Problem Solving
                </h4>

                <p className="text-sm leading-7 text-[#777381]">
                  Using{" "}
                  <span className="font-semibold text-[#292333]">
                    Python and programming fundamentals
                  </span>{" "}
                  to solve problems, automate tasks, work with data, and build
                  useful software.
                </p>
              </div>

              <div className="flex h-28 shrink-0 items-end gap-2">
                {[40, 65, 50, 85].map((height, i) => (
                  <motion.div
                    key={height}
                    initial={{ scaleY: reduce ? 1 : 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduce ? 0 : 0.55,
                      delay: reduce ? 0 : i * 0.09,
                      ease,
                    }}
                    style={{ height: `${height}%`, transformOrigin: "bottom" }}
                    className="w-6 rounded-t-md bg-gradient-to-t from-violet-500/60 to-violet-300/40 sm:w-8"
                  />
                ))}
                <MousePointer2
                  size={15}
                  className="mb-1 text-violet-500"
                />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(360px circle at ${x}px ${y}px, rgba(150,117,217,0.10), transparent 75%)`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduce ? 0 : 0.6,
        delay: reduce ? 0 : delay,
        ease,
      }}
      whileHover={reduce ? undefined : { y: -4 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      className={`group relative isolate overflow-hidden rounded-3xl border border-[#E8E2EF] bg-white/80 p-6 shadow-[0_8px_30px_rgba(41,35,51,0.025)] transition-colors duration-300 hover:border-violet-200 hover:shadow-[0_12px_35px_rgba(41,35,51,0.06)] sm:p-8 md:p-10 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      {children}
    </motion.div>
  );
}
