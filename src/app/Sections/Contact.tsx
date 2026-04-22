"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  User,
  Phone,
  MessageSquare,
  Sparkles,
  Github,
  Linkedin,
  RotateCcw,
} from "lucide-react";

export const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const formFields = [
    {
      id: "user_name",
      label: "Full Name",
      icon: <User size={14} />,
      type: "text",
      placeholder: "Enter Your Name",
    },
    {
      id: "user_email",
      label: "Email Address",
      icon: <Mail size={14} />,
      type: "email",
      placeholder: "example@gmail.com",
    },
    {
      id: "phone",
      label: "Phone (Optional)",
      icon: <Phone size={14} />,
      type: "tel",
      placeholder: "+91 00000 00000",
    },
    {
      id: "message",
      label: "Project Brief",
      icon: <MessageSquare size={14} />,
      type: "textarea",
      placeholder: "Describe your vision...",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-24 px-6 font-syne flex items-center justify-center overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Entry Animation Container */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
        }}
        className="w-full max-w-4xl perspective-2000 z-10"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 15,
            mass: 1,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full min-h-[650px] cursor-default"
        >
          {/* FRONT SIDE */}
          <div
            className="absolute inset-0 w-full h-full bg-[#050505] rounded-[3rem]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="h-full rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-2xl p-8 md:p-16 flex flex-col justify-between shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  <Sparkles size={14} /> Available for projects
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                  Let's Build <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">Something Epic</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                  Have a vision that needs a technical architect? Flip the card
                  to start the engine.
                </p>

                <div className="flex gap-4 pt-4">
                  {[
                    {
                      icon: <Github size={20} />,
                      href: "https://github.com/RasheedBShaik",
                    },
                    {
                      icon: <Linkedin size={20} />,
                      href: "https://linkedin.com/in/rasheedbshaik",
                    },
                    {
                      icon: <Mail size={20} />,
                      href: "mailto:your.rasheed.sk7337@gmail.com",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500/50 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFlipped(true)}
                className="group relative flex items-center justify-center gap-4 w-full py-6 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.4em] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Start conversation
                <RotateCcw
                  size={16}
                  className="group-hover:rotate-180 transition-transform duration-700"
                />
              </button>
            </div>
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="h-full rounded-[3rem] border border-white/10 bg-[#0a0a0c] p-8 md:p-12 shadow-2xl flex flex-col backdrop-blur-3xl">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-white font-black uppercase tracking-widest text-sm">
                  Project Brief
                </h3>
                <button
                  onClick={() => setIsFlipped(false)}
                  className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              <form
                action="https://formspree.io/f/xanegjqz"
                method="POST"
                className="flex-1 flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={
                        field.id === "message" || field.id === "phone"
                          ? "md:col-span-2"
                          : "col-span-1"
                      }
                    >
                      <div className="relative group flex flex-col">
                        <div
                          className={`absolute left-6 ${field.type === "textarea" ? "top-7" : "top-1/2 -translate-y-1/2"} transition-colors z-10 ${
                            activeField === field.id
                              ? "text-blue-400"
                              : "text-slate-600"
                          }`}
                        >
                          {field.icon}
                        </div>
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.id}
                            required
                            placeholder={field.placeholder}
                            rows={5}
                            onFocus={() => setActiveField(field.id)}
                            onBlur={() => setActiveField(null)}
                            className="flex flex-col w-full bg-white/[0.03] border border-white/10 rounded-[2rem] pl-14 pr-8 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                          />
                        ) : (
                          <input
                            required={field.id !== "phone"}
                            type={field.type}
                            name={field.id}
                            placeholder={field.placeholder}
                            onFocus={() => setActiveField(field.id)}
                            onBlur={() => setActiveField(null)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-full pl-14 pr-8 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="group relative mt-auto flex items-center justify-center gap-4 py-6 bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] overflow-hidden hover:opacity-90 transition-opacity"
                >
                  <span className="relative z-10">Transmit Signal</span>
                  <Send
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .perspective-2000 {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
};
