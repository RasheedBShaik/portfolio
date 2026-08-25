import type { Metadata } from "next";
import { ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import InteractiveBackground from "./Sections/Animation";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Rasheed | Full Stack Developer",
  description:
    "Portfolio of Rasheed, a Full Stack Developer specializing in Next.js, Java, Spring Boot, and interactive web experiences.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Three.js",
    "Full Stack Developer",
    "Rasheed Basha",
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="overflow-x-hidden bg-[#020204] text-white antialiased selection:bg-purple-500/30">
        <AntdRegistry>
          {/* GLOBAL INTERACTIVE BACKGROUND */}
          <div className="pointer-events-none fixed inset-0 z-0">
            <InteractiveBackground />
          </div>

          {/* PAGE CONTENT */}
          <div className="relative z-10 min-h-screen">
            {children}
          </div>

          {/* VERCEL ANALYTICS */}
          <Analytics />
        </AntdRegistry>
      </body>
    </html>
  );
}
