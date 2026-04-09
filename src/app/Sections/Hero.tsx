"use client";
// Added FileText and Mail to the imports
import {
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
  FileText,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden  selection:bg-purple-500/30 font-syne flex flex-col justify-center"
      id="top"
    >
      {/* 3. Content Layer */}
      <div className="relative z-20 flex flex-col items-center px-6 py-12 md:py-24 text-center">
        {/* Main Headline */}
        <div className="relative mb-4 md:mb-6">
          <h1 className="max-w-6xl text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-extrabold tracking-tighter text-white leading-[0.9] md:leading-[0.8] drop-shadow-2xl">
            I&apos;m{" "}
            <span className="bg-gradient-to-b from-white via-white/90 to-purple-500 bg-clip-text text-transparent">
              Rasheed
            </span>
          </h1>
        </div>

        {/* Bio Section */}
        <div className="mt-4 md:mt-8 max-w-2xl w-full group">
          <div
            className="relative rounded-[1.5rem] md:rounded-[2.5rem]
  border border-white/10
  p-6 md:p-10
  backdrop-blur-xl
  shadow-[0_0_40px_rgba(0,0,0,0.6)]
  transition-all duration-300
  hover:border-blue-400/40"
          >
            {/* 🔥 subtle overlay to kill background noise */}
            <div className="absolute inset-0 rounded-[inherit] bg-black/30 backdrop-blur-xl pointer-events-none" />
            <p
              className="relative z-10 text-base sm:text-lg md:text-2xl leading-relaxed
    text-slate-100 font-light tracking-wide"
            >
              I build{" "}
              <span className="text-white font-semibold">
                fast, beautiful web apps
              </span>{" "}
              by combining{" "}
              <span className="text-blue-300 font-semibold">clean code</span>{" "}
              with{" "}
              <span className="text-purple-300 font-semibold">
                pixel-perfect design.
              </span>
            </p>

            <div className="relative z-10 mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind", "Three.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 md:px-4 py-1 md:py-1.5
          rounded-lg md:rounded-xl
          bg-black/40
          border border-white/10
          text-[10px] md:text-[11px]
          font-semibold tracking-widest
          text-slate-200
          transition-all duration-300
          hover:text-white
          hover:border-blue-400/50
          hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Action Row - Stacked on mobile, row on desktop */}
        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up">
          <a
            href="#projects"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-white px-8 md:px-10 py-4 md:py-5 font-black text-black transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 uppercase tracking-tighter text-base md:text-lg transition-colors duration-300 group-hover:text-white">
              Explore Works
            </span>

            {/* Arrow Container */}
            <div className="relative z-10 flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>

            {/* Background Slide Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 transition-transform duration-500 ease-out group-hover:translate-x-0" />
          </a>

          {/* Social & Contact Cluster */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* GitHub - White Glow */}
            <a
              href="https://github.com/rasheedbshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              title="GitHub"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn - Blue Glow */}
            <a
              href="https://linkedin.com/in/rasheedbshaik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-5 rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            {/* Email - Cyber Cyan/Blue Glow */}
            <a
              href="mailto:rasheed.sk7337@gmail.com"
              className="p-4 md:p-5 rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              title="Send Email"
            >
              <Mail size={20} />
            </a>

            {/* Resume - Purple/Vortex Glow */}
            <a
              href="/resume/Shaik_Rasheed_Basha.pdf"
              target="_blank"
              className="p-4 md:p-5 rounded-full border border-white/10 bg-white/5 text-white/50 transition-all duration-300 hover:text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              title="Open Resume"
            >
              <FileText size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
