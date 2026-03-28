import React from "react";
import { 
  Globe, 
  Layers, 
  Terminal, 
  Code2, 
  Cpu, 
  Layout, 
  ShoppingBag, 
  PawPrint,
  Box
} from "lucide-react";

export interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  stack: string[];
  github: string;
  live: string;
  category: string;
  creds?: string;
  isPrivate?: boolean; // Added to handle projects without repos
}

export const projectData: Project[] = [
  {
    title: "Furniro Shop",
    category: "E-Commerce",
    description: "Premium furniture retail platform with optimized state management and a seamless checkout experience.",
    icon: <Globe size={20} />,
    stack: ["Next.js", "Node.js", "Redux", "Tailwind"],
    github: "https://github.com/RasheedBShaik/furniture-shop",
    live: "https://furniro-furniture-shop.vercel.app/",
    creds: "Admin: admin | Pass: password",
  },
  {
    title: "Saasforce UI",
    category: "Corporate",
    description: "Enterprise SaaS landing page focusing on cinematic GSAP animations and high-conversion UI patterns.",
    icon: <Layers size={20} />,
    stack: ["Next.js", "TypeScript", "GSAP", "Framer"],
    github: "https://github.com/RasheedBShaik/saasforce",
    live: "https://saas-force-eight.vercel.app/",
  },
  {
    title: "Chotu Clone",
    category: "Food Tech",
    description: "A comprehensive clone of the Chotu delivery platform featuring modern grid layouts and responsive design.",
    icon: <Layout size={20} />,
    stack: ["Next.js", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/RasheedBShaik/chotu-clone",
    live: "https://chotu-beta.vercel.app",
  },
  {
    title: "Nxtwave Clone",
    category: "Ed-Tech",
    description: "Educational platform interface featuring complex navigation and interactive student dashboard elements.",
    icon: <Cpu size={20} />,
    stack: ["React", "Custom CSS", "React Router"],
    github: "https://github.com/RasheedBShaik/nxtwave-clone",
    live: "https://nxtwave-clone-vercel.vercel.app",
  },
  {
    title: "Bazar Book",
    category: "Marketplace",
    description: "Real-time bookstore marketplace utilizing cloud database synchronization for inventory management.",
    icon: <Code2 size={20} />,
    stack: ["React", "Firebase", "Ant Design"],
    github: "https://github.com/rasheedbshaik/bazar",
    live: "https://rasheedbshaik.github.io/bazar",
    creds: "Email: test@gmail.com | Pass: test12345",
  },
  {
    title: "Product Store",
    category: "Inventory",
    description: "Full-stack inventory system with separate high-performance Client and Admin architectures.",
    icon: <Terminal size={20} />,
    stack: ["MERN Stack", "Express", "MongoDB"],
    github: "", // Empty as per request
    live: "https://u-product-store-zgez.onrender.com",
    creds: "Dual Repo System (Admin & Client)",
    isPrivate: true,
  },
  {
    title: "E-commerce-ui",
    category: "UI Library",
    description: "A collection of reusable, high-performance e-commerce components built for speed and accessibility.",
    icon: <ShoppingBag size={20} />,
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/RasheedBShaik/e-commerce-ui",
    live: "https://rasheedbshaik.github.io/e-commerce-ui",
  },
  {
    title: "Monito Pet Store",
    category: "Retail",
    description: "Modern pet adoption and supply interface focusing on clean typography and aesthetic product displays.",
    icon: <PawPrint size={20} />,
    stack: ["React", "CSS Modules", "Vite"],
    github: "https://github.com/RasheedBShaik/monito",
    live: "https://rasheedbshaik.github.io/monito",
  },
];