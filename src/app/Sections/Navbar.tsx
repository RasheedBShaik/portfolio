"use client";

import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { ConfigProvider, Drawer } from "antd";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/rasheedbshaik", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/rasheedbshaik", icon: Linkedin },
  { label: "Email", href: "mailto:rasheed.sk7337@gmail.com", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const close = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const socialLinks = (mobile = false) =>
    socials.map(({ label, href, icon: Icon }) => {
      const getHoverClass = () => {
        if (label === "GitHub") return "group-hover:scale-110 group-hover:text-[#292333]";
        if (label === "LinkedIn") return "group-hover:scale-110 group-hover:text-[#0A66C2]";
        if (label === "Email") return "group-hover:scale-110 group-hover:text-[#EA4335]";
        return "group-hover:scale-110";
      };

      return (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          onClick={mobile ? close : undefined}
          className={`
            relative group
            flex items-center justify-center
            rounded-xl border border-[#E8E2EF]
            bg-white text-[#777381]
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1 hover:border-violet-300
            ${mobile ? "h-11 w-11" : "h-9 w-9"}
          `}
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

          <span className="relative z-10">
            <Icon
              size={18}
              strokeWidth={1.7}
              className={`transition-transform duration-300 ${getHoverClass()}`}
            />
          </span>
        </a>
      );
    });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7652B5",
          colorInfo: "#7652B5",
          colorLink: "#7652B5",
          colorBgElevated: "#FAF9F6",
          colorText: "#292333",
          colorTextSecondary: "#777381",
          colorBorder: "#E8E2EF",
          controlOutline: "rgba(118,82,181,0.2)",
        },
        components: {
          Drawer: {
            colorBgElevated: "#FAF9F6",
            colorText: "#292333",
            colorTextHeading: "#292333",
            colorIcon: "#292333",
            colorIconHover: "#7652B5",
          },
        },
      }}
    >
      <header className="fixed inset-x-0 top-0 z-[1000] w-full">
        <nav
          className={`w-full border-b transition-colors duration-300 ${
            scrolled
              ? "border-[#E8E2EF] bg-[#FAF9F6]/95 shadow-sm backdrop-blur-xl"
              : "border-[#E8E2EF]/70 bg-[#FAF9F6]/90 backdrop-blur-xl"
          }`}
        >
          <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <a href="/" aria-label="Rasheed Basha home" className="flex shrink-0 items-center gap-2 sm:gap-3">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-violet-400/30 bg-[#292333]">
                <img src="/images/RBlogo.png" alt="" className="h-7 w-7 object-contain" />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="whitespace-nowrap font-syne text-xs font-extrabold tracking-wide text-[#292333] sm:text-sm lg:text-base">
                  RASHEED<span className="text-violet-600">BASHA</span>
                </span>
                <span className="whitespace-nowrap text-[7px] font-semibold uppercase tracking-[0.15em] text-[#898391] sm:text-[8px]">
                  Full Stack Developer
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-5 md:flex lg:gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={active === link.href ? "location" : undefined}
                  className={`group relative py-2 text-[10px] font-bold uppercase tracking-wider transition-colors lg:text-[11px] ${
                    active === link.href ? "text-violet-700" : "text-[#777381] hover:text-[#292333]"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-violet-500 transition-all ${
                    active === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden items-center gap-2 border-l border-[#E8E2EF] pl-3 lg:flex">
                {socialLinks()}
              </div>
              <a
                href="#contact"
                className="hidden items-center gap-1 rounded-xl bg-[#292333] px-3 py-2.5 text-[9px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-violet-700 sm:flex lg:px-4"
              >
                Let's Talk <ArrowUpRight size={13} />
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E8E2EF] bg-white text-[#292333] hover:border-violet-300 hover:text-violet-700 md:hidden"
              >
                <Menu size={19} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <Drawer
        placement="right"
        open={open}
        onClose={close}
        size="default"
        closeIcon={<X size={20} />}
        title={
          <span className="font-syne text-sm font-extrabold tracking-wider">
            RASHEED<span className="text-violet-600">BASHA</span>
          </span>
        }
        styles={{
          section: { background: "#FAF9F6" },
          header: { borderBottom: "1px solid #E8E2EF", padding: "20px 24px" },
          body: { padding: 24 },
          mask: { backdropFilter: "blur(5px)", background: "rgba(41,35,51,0.2)" },
        }}
      >
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#898391]">
          Navigation
        </p>

        <div className="flex flex-col">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              aria-current={active === link.href ? "location" : undefined}
              className={`flex items-center justify-between border-b border-[#E8E2EF] py-4 transition-colors ${
                active === link.href ? "text-violet-700" : "text-[#777381] hover:text-[#292333]"
              }`}
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[10px] text-violet-500">0{i + 1}</span>
                <span className="font-syne text-2xl font-bold">{link.name}</span>
              </span>
              <ArrowUpRight size={19} />
            </a>
          ))}
        </div>

        <div className="mt-7 flex gap-3">{socialLinks(true)}</div>
        <a
          href="#contact"
          onClick={close}
          className="mt-6 flex items-center justify-between rounded-xl bg-[#292333] p-4 text-sm font-semibold text-white hover:bg-violet-700"
        >
          Let's Talk <ArrowUpRight size={18} />
        </a>
      </Drawer>
    </ConfigProvider>
  );
}