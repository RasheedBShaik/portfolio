"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/rasheedbshaik", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/rasheedbshaik", icon: Linkedin },
  { label: "Email", href: "mailto:rasheed.sk7337@gmail.com", icon: Mail },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-violet-900/10 bg-[#FAF9F6] px-6 py-16 font-syne text-[#292333] lg:px-12">
      {/* Background ambient subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-violet-200/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer Row */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          {/* Left: Brand / Title */}
          <div>
            <a href="#top" className="group inline-block">
              <span className="font-syne text-xl font-extrabold tracking-wider text-[#292333]">
                RASHEED<span className="text-violet-600">BASHA</span>
              </span>
            </a>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-[#777381]">
              Full Stack Developer & Software Engineer
            </p>
          </div>

          {/* Right: Socials & Back to Top */}
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

        {/* Divider */}
        <div className="my-10 h-px w-full bg-violet-900/10" />

        {/* Bottom Metadata Row */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] font-medium tracking-wide text-[#777381]">
            © {year} <span className="font-semibold text-[#292333]">Rasheed Basha</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#777381]">
              Available for Full-time Roles & Projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};