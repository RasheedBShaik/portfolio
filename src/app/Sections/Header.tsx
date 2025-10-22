"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons
import Link from "next/link";
export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="z-10 fixed w-full flex items-center justify-between px-10 lg:px-25 text-[var(--nav)] bg-[var(--bg)] h-16 inset-x-0 top-0 bottom-auto">
      {/* Logo */}
      <div
        className={`flex gap-4 md:flex focus:outline-none text-[#3ec1ff] transition-transform ease-in-out duration-900 ${
          open ? "rotate-360" : "rotate-0"
        }`}
      >
        <img className="w-16 h-[55px]" src="./images/RBlogo.png" alt="logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex text-lg gap-8 w-fit font-semibold ">
        <Link
          onClick={() => setOpen(!open)}
          href="#aboutme"
          className="px-4 hover:underline"
        >
          About me
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          href="#skills"
          className="px-4 hover:underline"
        >
          Skills
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          href="#portfolio"
          className="px-4 hover:underline"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          href="#projects"
          className="px-4 hover:underline"
        >
          Projects
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          href="#contact"
          className="px-4 hover:underline"
        >
          Contact Me
        </Link>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        className={`md:hidden focus:outline-none text-[#3ec1ff] transition-transform ease-in-out duration-500 ${
          open ? "rotate-90" : "rotate-0"
        }`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={40} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="absolute text-lg top-full left-0 w-full flex flex-col gap-2 md:hidden shadow-lg border-t border-[var(--nav)] transition-all duration-300 bg-[var(--text)] text-[var(--bg)]
        "
        >
          <Link
            onClick={() => setOpen(!open)}
            className="hover:bg-[#4fc3dc] h-full py-4 px-4"
            href="#aboutme"
          >
            About me
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="hover:bg-[#4fc3dc] h-full py-4 px-4"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="hover:bg-[#4fc3dc] h-full py-4 px-4"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="hover:bg-[#4fc3dc] h-full py-4 px-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            onClick={() => setOpen(!open)}
            className="hover:bg-[#4fc3dc] h-full py-4 px-4"
            href="#contact"
          >
            Contact Me
          </Link>
        </nav>
      )}
    </header>
  );
};
