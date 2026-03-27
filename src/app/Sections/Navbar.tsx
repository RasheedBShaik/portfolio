"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { ConfigProvider, Drawer, Button } from "antd";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a855f7",
          colorBgElevated: "rgba(5, 5, 8, 0.95)",
        },
      }}
    >
      <nav
        className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 
             bg-black/40 backdrop-blur-md py-2 shadow-2xl"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Enhanced Vortex Logo Section */}
          <a href="/" className="flex items-center gap-4 group relative">
            <div className="relative h-12 w-12 md:h-14 md:w-14 flex items-center justify-center">
              {/* Animated Vortex Rings - Only visible on hover */}
              <div className="absolute inset-0 rounded-full border-t-2 border-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin duration-500" />
              <div className="absolute inset-1 rounded-full border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_2s_linear_infinite_reverse] transition-opacity" />

              {/* Logo Image */}
              <img
                src="/images/RBlogo.png"
                className="relative z-10 h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                alt="logo"
              />

              {/* Background Glow */}
              <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-lg md:text-xl font-bold tracking-[0.15em] text-white font-syne leading-none">
                RASHEED<span className="text-purple-500">BASHA</span>
              </span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-purple-300/90 mt-1 transition-all duration-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] font-bold">
                Full Stack dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Glow Underline */}
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 transition-colors duration-300 hover:text-white group"
                >
                  {link.name}
                  {/* The Animated Underline with Glow */}
                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 transition-all duration-500 ease-out group-hover:w-full group-hover:shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                </a>
              ))}
            </div>

            <div className="h-5 w-[1px] bg-white/10" />

            {/* Social Icons - Pulse Hover */}
            <div className="flex items-center gap-3 sm:gap-5">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/rasheedbshaik"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group p-3 text-slate-400 hover:text-[#0A66C2] transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin
                  size={20}
                  strokeWidth={1.5}
                  className="relative z-10 transition-transform group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-blue-500/5 rounded-full scale-0 group-hover:scale-100 transition-all duration-300 blur-sm group-hover:blur-none border border-blue-500/0 group-hover:border-blue-500/20" />
              </a>

              {/* Email */}
              <a
                href="mailto:your.rasheed.sk7337@gmail.com"
                className="relative group p-3 text-slate-400 hover:text-cyan-400 transition-all duration-300"
                title="Email"
              >
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="relative z-10 transition-transform group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-cyan-400/5 rounded-full scale-0 group-hover:scale-100 transition-all duration-300 blur-sm group-hover:blur-none border border-cyan-400/0 group-hover:border-cyan-400/20" />
              </a>

            </div>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-1.5 md:hidden p-2 group bg-white/5 rounded-lg border border-white/10"
          >
            <div className="h-[1.5px] w-6 bg-white transition-all group-hover:bg-purple-400" />
            <div className="h-[1.5px] w-6 bg-white transition-all group-hover:bg-blue-400" />
          </button>
        </div>

        {/* Mobile Drawer - Space Style */}
        <Drawer
          placement="right"
          onClose={() => setIsOpen(false)}
          open={isOpen}
          closeIcon={
            <X
              size={24}
              className="text-white/70 hover:text-white transition-all"
            />
          }
          size="100%"
          styles={{
            mask: {
              backdropFilter: "blur(12px)",
              background: "rgba(0,0,0,0.6)",
            },
            header: {
              border: "none",
              background: "transparent",
              padding: "30px 24px",
            },
            body: {
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <div className="flex flex-col items-center gap-12">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="group text-5xl font-bold text-white/30 hover:text-white transition-all duration-500 font-syne relative"
                onClick={() => setIsOpen(false)}
              >
                <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs font-mono text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                {link.name}
                <span className="block h-[1px] w-0 bg-purple-500 transition-all duration-500 group-hover:w-full mt-2" />
              </a>
            ))}
          </div>
        </Drawer>
      </nav>
    </ConfigProvider>
  );
}
