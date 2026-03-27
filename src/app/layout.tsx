import type { Metadata } from "next";
import { ReactNode } from "react";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasheed | Frontend Creative Developer",
  description: "Portfolio of Rasheed, a Full-stack developer specializing in Next.js, Java, and interactive 3D web experiences.",
  keywords: ["Next.js", "Java", "Spring Boot", "Three.js", "Full Stack Developer"],
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050508] text-white antialiased selection:bg-purple-500/30 overflow-x-hidden">
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}