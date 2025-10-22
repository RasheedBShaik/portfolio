"use client";
import React from "react";
import { motion } from "framer-motion";
export const Contact = () => {
  return (
    <div id="contact" className="bg-[var(--bg)] text-center px-2 lg:px-0">
      {/* Section title */}
      <div
        className="text-center text-xl md:3xl lg:5xl font-semibold m-auto max-w-[350px] tracking-[13px] border-8 border-[var(--text)]
          p-8 text-[var(--text)] "
      >
        CONTACT
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="flex justify-center py-25">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xanegjqz"
            method="POST"
            autoComplete="off"
            className="w-full max-w-[600px] flex flex-col gap-6 px-6"
          >
            {/* Name */}
            <input
              type="text"
              name="user_name"
              placeholder="ENTER YOUR NAME*"
              required
              autoComplete="name"
              className="w-full p-3  border-4 border-l-[var(--text)] border-b-[var(--text)] border-r-transparent border-t-transparent text-[var(--text)] placeholder-white focus:outline-none focus:border-[var(--text)] transition"
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="ENTER YOUR EMAIL*"
              required
              autoComplete="email"
              className="w-full p-3 border-4 border-l-[var(--text)] border-b-[var(--text)] border-r-transparent border-t-transparent text-[var(--text)] placeholder-white focus:outline-none focus:border-[var(--text)] transition"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="PHONE NUMBER"
              autoComplete="tel"
              className="w-full p-3 border-4 border-l-[var(--text)] border-b-[var(--text)] border-r-transparent border-t-transparent text-[var(--text)] placeholder-white focus:outline-none focus:border-[var(--text)] transition"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              rows={5}
              required
              className="w-full p-3 border-4 border-l-[var(--text)] border-b-[var(--text)] border-r-transparent border-t-transparent text-[var(--text)] placeholder-white focus:outline-none focus:border-[var(--text)] transition"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 w-50 py-3 bg-[#00000050] border-white border-3 border-b-transparent border-r-transparent text-white font-bold hover:cursor-pointer"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
