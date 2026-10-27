"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export const Contact = () => {
  const [contactType, setContactType] = useState("Job Opportunity");
  const [availability, setAvailability] = useState("Full-time");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactTypes = [
    "Job Opportunity",
    "Freelance Project",
    "Contract Work",
    "Collaboration",
    "Other",
  ];

  const availabilityOptions = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Let's discuss",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();

        // Reset selected options
        setContactType("Job Opportunity");
        setAvailability("Full-time");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#FAF9F6] px-6 py-32 font-syne text-[#292333]"
    >
      {/* ===================================================== */}
      {/* INTERACTIVE BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft Violet glow matching Hero */}
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

        {/* Secondary glow */}
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

        {/* Grid pattern matching Hero */}
        <div className="absolute inset-0 opacity-[0.022] [background-image:linear-gradient(#51416F_1px,transparent_1px),linear-gradient(90deg,#51416F_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      {/* ===================================================== */}
      {/* CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.35em] text-[#51416F] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-600 shadow-[0_0_12px_rgba(147,51,234,0.5)]" />
            </span>
            Open to opportunities
          </div>

          <h2 className="max-w-5xl text-5xl font-extrabold uppercase leading-[0.85] tracking-tighter text-[#292333] md:text-8xl">
            Let&apos;s {" "}
            <span className="bg-gradient-to-r from-[#292333] via-[#51416F] to-[#9675D9] bg-clip-text text-transparent">
              connect
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#777381] md:text-lg">
            Looking for a developer, have a project in mind, or want to work
            together? Send me a message.
          </p>
        </motion.div>

        {/* ===================================================== */}
        {/* MAIN GRID */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-violet-900/10 bg-white/60 p-8 shadow-sm backdrop-blur-xl md:p-10 lg:col-span-4"
          >
            <div className="relative z-10 flex h-full flex-col">
              <div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.85,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-white text-violet-600 shadow-[0_0_30px_rgba(147,51,234,0.08)]"
                >
                  <motion.div
                    animate={{
                      opacity: [0.15, 0.3, 0.15],
                      scale: [0.9, 1.15, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-xl bg-violet-500/20 blur-xl"
                  />

                  <motion.div
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-2.5 h-px w-4 bg-violet-600"
                  />

                  <div className="relative z-10 flex items-center gap-0.75">
                    <span className="h-1 w-1 rounded-full bg-violet-600" />
                    <span className="h-1 w-1 rounded-full bg-violet-400" />
                    <span className="h-1 w-1 rounded-full bg-violet-600" />
                  </div>

                  <div className="absolute bottom-2.5 h-px w-4 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
                </motion.div>

                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#51416F]">
                  Get in touch
                </p>

                <h3 className="text-3xl font-black uppercase leading-none tracking-tighter text-[#292333]">
                  Open to
                  <br />
                  new
                  <br />
                  <span className="text-[#777381]">opportunities.</span>
                </h3>
              </div>

              {/* STATUS */}

              <div className="mt-12 space-y-4">
                <StatusRow label="Availability" value="Available" green />

                <StatusRow label="Location" value="India / Remote" />

                <StatusRow
                  label="Response"
                  value="Within 24h"
                  icon={<Clock3 size={12} className="text-[#51416F]" />}
                />
              </div>

              {/* SOCIALS */}

              <div className="mt-auto pt-12">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#777381]">
                  Find me online
                </p>

                <div className="flex items-center gap-3">
                  <SocialLink
                    href="https://github.com/rasheedbshaik"
                    icon={
                      <Github
                        size={18}
                        strokeWidth={1.5}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#292333]"
                      />
                    }
                  />

                  <SocialLink
                    href="https://linkedin.com/in/rasheedbshaik"
                    icon={
                      <Linkedin
                        size={18}
                        strokeWidth={1.5}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#0A66C2]"
                      />
                    }
                  />

                  <SocialLink
                    href="mailto:rasheed.sk7337@gmail.com"
                    icon={
                      <Mail
                        size={18}
                        strokeWidth={1.5}
                        className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-[#EA4335]"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================== */}
          {/* FORM CARD */}
          {/* ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-violet-900/10 bg-white/60 p-8 shadow-sm backdrop-blur-xl md:p-10 lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* FORM HEADER */}

                  <div className="mb-10 flex items-center justify-between border-b border-violet-900/5 pb-6">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.35em] text-[#51416F]">
                        Contact
                      </p>

                      <h3 className="mt-2 text-xl font-black uppercase tracking-tighter text-[#292333]">
                        Send me a message
                      </h3>
                    </div>
                  </div>

                  {/* FORM */}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <input
                      type="hidden"
                      name="access_key"
                      value="ee1c0671-8ce0-4a4e-ad13-410a4597fe61"
                    />

                    <input
                      type="hidden"
                      name="subject"
                      value="New Portfolio Contact"
                    />

                    <input
                      type="hidden"
                      name="from_name"
                      value="Rasheed Portfolio"
                    />

                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                    />

                    {/* NAME + EMAIL */}

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <Field
                        label="Your name"
                        name="name"
                        placeholder="Your name"
                        type="text"
                        activeField={activeField}
                        setActiveField={setActiveField}
                      />

                      <Field
                        label="Email"
                        name="email"
                        placeholder="you@example.com"
                        type="email"
                        activeField={activeField}
                        setActiveField={setActiveField}
                      />
                    </div>

                    {/* CONTACT TYPE */}

                    <ChoiceGroup
                      label="What are you contacting me about?"
                      options={contactTypes}
                      value={contactType}
                      onChange={setContactType}
                      name="contact_type"
                    />

                    {/* AVAILABILITY */}

                    <ChoiceGroup
                      label="How would you like to work?"
                      options={availabilityOptions}
                      value={availability}
                      onChange={setAvailability}
                      name="availability"
                    />

                    {/* COMPANY */}

                    <Field
                      label="Company / Organization"
                      name="company"
                      placeholder="Optional"
                      type="text"
                      activeField={activeField}
                      setActiveField={setActiveField}
                      required={false}
                    />

                    {/* MESSAGE */}

                    <div>
                      <label className="mb-3 block text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
                        Message
                      </label>

                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about the role, project, or idea..."
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        className={`w-full resize-none rounded-3xl border bg-white/50 px-5 py-4 text-sm text-[#292333] outline-none transition-all placeholder:text-[#777381]/50 ${
                          activeField === "message"
                            ? "border-violet-500/50 shadow-[0_0_30px_rgba(147,51,234,0.08)]"
                            : "border-violet-900/10"
                        }`}
                      />
                    </div>

                    {/* SUBMIT */}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl bg-[#292333] p-2 pl-6 text-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em]">
                        {isSubmitting ? "Sending..." : "Send message"}
                      </span>

                      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#292333]">
                        {isSubmitting ? (
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="block h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                          />
                        ) : (
                          <ArrowUpRight
                            size={18}
                            className="transition-transform duration-500 group-hover:rotate-45"
                          />
                        )}
                      </span>

                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-600 via-violet-500 to-[#51416F] transition-transform duration-500 group-hover:translate-x-0" />
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <SuccessMessage />
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* BOTTOM */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-between px-2"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#777381]">
            React / Next.js / TypeScript
          </span>

          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-[#777381]">
            <Check size={10} className="text-emerald-600" />
            Message protected
          </span>
        </motion.div>
      </div>
    </section>
  );
};

/* ========================================================= */
/* SUCCESS MESSAGE */
/* ========================================================= */

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="flex min-h-[500px] flex-col items-center justify-center text-center"
    >
      <div className="relative mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
          }}
          className="flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10"
        >
          <Check size={42} className="text-emerald-600" strokeWidth={2.5} />
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full border border-emerald-400/30"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600"
      >
        Message received
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-black uppercase tracking-tighter text-[#292333] md:text-6xl"
      >
        Thanks for
        <br />
        <span className="bg-gradient-to-r from-[#292333] via-[#51416F] to-[#9675D9] bg-clip-text text-transparent">
          reaching out.
        </span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 max-w-md text-sm leading-relaxed text-[#777381]"
      >
        I&apos;ve received your message and will get back to you as soon as
        possible.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.3em] text-[#777381]"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
        Successfully sent
      </motion.div>
    </motion.div>
  );
}

/* ========================================================= */
/* STATUS ROW */
/* ========================================================= */

function StatusRow({
  label,
  value,
  green,
  icon,
}: {
  label: string;
  value: string;
  green?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-violet-900/5 pb-4">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#777381]">
        {label}
      </span>

      <span
        className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${
          green ? "text-emerald-600" : "text-[#292333]"
        }`}
      >
        {green && (
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
        )}

        {icon}

        {value}
      </span>
    </div>
  );
}

/* ========================================================= */
/* SOCIAL LINK */
/* ========================================================= */

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative group
        flex h-12 w-12
        items-center justify-center
        rounded-xl
        border border-violet-900/10
        bg-white/50
        text-[#777381]
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-violet-500/30
      "
    >
      <span
        className="
          absolute inset-0
          rounded-xl
          scale-0
          opacity-0
          blur-sm
          transition-all duration-300
          group-hover:scale-100
          group-hover:opacity-100
          group-hover:blur-none
          border border-violet-500/20
          bg-violet-500/5
        "
      />

      <span className="relative z-10">{icon}</span>
    </a>
  );
}

/* ========================================================= */
/* INPUT FIELD */
/* ========================================================= */

function Field({
  label,
  name,
  placeholder,
  type,
  activeField,
  setActiveField,
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  activeField: string | null;
  setActiveField: (value: string | null) => void;
  required?: boolean;
}) {
  const active = activeField === name;

  return (
    <div>
      <label className="mb-3 block text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
        {label}
      </label>

      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        onFocus={() => setActiveField(name)}
        onBlur={() => setActiveField(null)}
        className={`w-full rounded-2xl border bg-white/50 px-5 py-4 text-sm text-[#292333] outline-none transition-all placeholder:text-[#777381]/50 ${
          active
            ? "border-violet-500/50 shadow-[0_0_30px_rgba(147,51,234,0.08)]"
            : "border-violet-900/10"
        }`}
      />
    </div>
  );
}

/* ========================================================= */
/* CHOICE GROUP */
/* ========================================================= */

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}) {
  return (
    <div>
      <label className="mb-3 block text-[9px] font-black uppercase tracking-[0.3em] text-[#777381]">
        {label}
      </label>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`relative overflow-hidden rounded-xl border px-4 py-3 text-[9px] font-bold uppercase tracking-widest transition-all ${
                selected
                  ? "border-violet-500/50 bg-violet-500/10 text-violet-700"
                  : "border-violet-900/10 bg-white/30 text-[#777381] hover:border-violet-900/20 hover:text-[#292333]"
              }`}
            >
              {selected && (
                <motion.div
                  layoutId={`${name}-selected`}
                  className="absolute inset-0 bg-violet-500/5"
                />
              )}

              <span className="relative z-10">{option}</span>
            </button>
          );
        })}
      </div>

      <input type="hidden" name={name} value={value} />
    </div>
  );
}