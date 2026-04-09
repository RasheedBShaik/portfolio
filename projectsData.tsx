import React from "react";
import { 
  Building2,     // For IT/Product companies
  Hammer,        // For Maintenance/Service companies
  ShoppingCart,  // For E-commerce
  Layers,        // For SaaS/Corporate UI
  Truck,         // For Delivery/Food Tech
  GraduationCap, // For Ed-Tech
  BookOpen,      // For Marketplace/Books
  Database,      // For Inventory/Systems
  Component,     // For UI Libraries
  Dog,           // For Pet Stores
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
    title: "Anarav Technologies",
    category: "IT Company",
    description: "Anarav Tech is one of the product based company that built high performance softwares, websites and apps globally.",
    icon: <Building2 size={20} />,
    stack: ["Next.js", "Three.js", "Tailwind","Motion Framer"],
    github: "",
    live: "https://anaravtech.com/",
  },
  {
    title: "Furniro Shop",
    category: "E-Commerce",
    description: "Premium furniture retail platform with optimized state management and a seamless checkout experience.",
    icon: <ShoppingCart size={20} />,
    stack: ["Next.js", "Node.js", "Redux", "Tailwind"],
    github: "https://github.com/RasheedBShaik/furniture-shop",
    live: "https://furniro-furniture-shop.vercel.app/",
    creds: "Admin: admin | Pass: password",
  },
  {
    title: "Bharath Home Services",
    category: "Service Company",
    description: "Provide Premium Home Maintenance with many services",
    icon: <Hammer size={20} />,
    stack: ["Next.js", "React.js", "Next Routing" ,"Tailwind"],
    github: "",
    live: "https://bharath-home-services.vercel.app/",
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
    icon: <Truck size={20} />,
    stack: ["Next.js", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/RasheedBShaik/chotu-clone",
    live: "https://chotu-beta.vercel.app",
  },
  {
    title: "Nxtwave Clone",
    category: "Ed-Tech",
    description: "Educational platform interface featuring complex navigation and interactive student dashboard elements.",
    icon: <GraduationCap size={20} />,
    stack: ["React", "Custom CSS", "React Router"],
    github: "https://github.com/RasheedBShaik/nxtwave-clone",
    live: "https://nxtwave-clone-vercel.vercel.app",
  },
  {
    title: "Bazar Book",
    category: "Marketplace",
    description: "Real-time bookstore marketplace utilizing cloud database synchronization for inventory management.",
    icon: <BookOpen size={20} />,
    stack: ["React", "Firebase", "Ant Design"],
    github: "https://github.com/rasheedbshaik/bazar",
    live: "https://rasheedbshaik.github.io/bazar",
    creds: "Email: test@gmail.com | Pass: test12345",
  },
  {
    title: "Product Store",
    category: "Inventory",
    description: "Full-stack inventory system with separate high-performance Client and Admin architectures.",
    icon: <Database size={20} />,
    stack: ["MERN Stack", "Express", "MongoDB"],
    github: "", 
    live: "https://u-product-store-zgez.onrender.com",
    creds: "Dual Repo System (Admin & Client)",
    isPrivate: true,
  },
  {
    title: "E-commerce-ui",
    category: "UI Library",
    description: "A collection of reusable, high-performance e-commerce components built for speed and accessibility.",
    icon: <Component size={20} />,
    stack: ["HTML", "Plain CSS", "JavaScript"],
    github: "https://github.com/RasheedBShaik/e-commerce-ui",
    live: "https://rasheedbshaik.github.io/e-commerce-ui",
  },
  {
    title: "Monito Pet Store",
    category: "Retail",
    description: "Modern pet adoption and supply interface focusing on clean typography and aesthetic product displays.",
    icon: <Dog size={20} />,
    stack: ["React", "CSS Modules", "Vite"],
    github: "https://github.com/RasheedBShaik/monito",
    live: "https://rasheedbshaik.github.io/monito",
  },
];