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
  Users,
  FileText,     
  Component,     // For UI Libraries
  Dog,           // For Pet Stores
  School,        // For Schools/Education
  Sparkles,      // For Animations/UI
  Car,           // For Automotive/Scroll
  Globe2,        // For Web Apps
  LayoutDashboard// For Portals/Dashboards
} from "lucide-react";

export type ProjectType = "fullstack" | "frontend" | "singlepage" | "feature";

export interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  stack: string[];
  github: string;
  live: string;
  category: string;
  creds?: string;
  isPrivate?: boolean;
  projectType: ProjectType;
}

export const projectData: Project[] = [
  // ==========================================
  // ENTERPRISE & CORPORATE
  // ==========================================
  {
    title: "Anarav Technologies",
    category: "IT Company",
    description: "Anarav Tech is one of the product based company that built high performance softwares, websites and apps globally.",
    icon: <Building2 size={20} />,
    stack: ["Next.js", "Three.js", "Tailwind", "Motion Framer"],
    github: "",
    live: "https://anaravtech.com/",
    projectType: "frontend",
  },
  {
    title: "Simvora Official website",
    category: "Corporate",
    description: "Enterprise SaaS landing page focusing on cinematic GSAP animations and high-conversion UI patterns.",
    icon: <Layers size={20} />,
    stack: ["Next.js", "TypeScript", "GSAP", "Motion Framer"],
    github: "",
    live: "https://www.simvoratechnologies.com/",
    projectType: "frontend",
  },

  // ==========================================
  // FULL-STACK & DASHBOARDS
  // ==========================================
  {
    title: "User Management System",
    category: "Dashboard",
    description: "User Management System with both user and admin pannel to check and update all details required to a company.",  
    icon: <LayoutDashboard size={20} />,
    stack: ["Next.js", "Node.js", "Redux", "MongoDB"],
    github: "https://github.com/RasheedBShaik/user-management-system",
    live: "https://user-management-system-five-alpha.vercel.app",
    creds: "E-mail(Admin): admin@test.com | Pass: 123456 && E-mail(user): test@gmail.com | Pass: test",
    projectType: "fullstack",
  },
  {
    title: "Student Support",
    category: "Portal",
    description: "Comprehensive student support platform with dedicated student and staff portals for managing requests and communications.",
    icon: <Users size={20} />,
    stack: ["Next.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/RasheedBShaik/student-support",
    live: "https://student-support-vms7.vercel.app/",
    creds: "Student: student@example.com | Pass: test123 && Staff: staff@example.com | Pass: test123",
    projectType: "fullstack",
  },
  {
    title: "Mini Notes App",
    category: "Notes",
    description: "Update the daily notes, implemented all CRUD features with MongoDB",
    icon: <FileText size={20} />,
    stack: ["Next.js", "Node.js", "MongoDB", "Render"],
    github: "https://github.com/RasheedBShaik/mini-notes-app",
    live: "https://mini-notes-app-rose.vercel.app/",
    projectType: "fullstack",
  },

  // ==========================================
  // E-COMMERCE & RETAIL
  // ==========================================
  {
    title: "Furniro Shop",
    category: "E-Commerce",
    description: "Premium furniture retail platform with optimized state management and a seamless checkout experience.",
    icon: <ShoppingCart size={20} />,
    stack: ["Next.js", "Node.js", "Redux", "Tailwind"],
    github: "https://github.com/RasheedBShaik/furniture-shop",
    live: "https://furniro-furniture-shop.vercel.app/",
    creds: "Admin: admin | Pass: password",
    projectType: "fullstack",
  },
  {
    title: "Pernati Naturals",
    category: "E-commerce",
    description: "Provide Premium Dairy and Organic Items",
    icon: <ShoppingCart size={20} />,
    stack: ["Next.js", "React.js", "Next Routing", "Tailwind"],
    github: "https://github.com/rasheedbshaik/pernati-naturals",
    live: "https://pernati-naturals.vercel.app/",
    projectType: "singlepage",
  },
  {
    title: "Bharath Home Services",
    category: "Service Company",
    description: "Provide Premium Home Maintenance with many services",
    icon: <Hammer size={20} />,
    stack: ["Next.js", "React.js", "Next Routing", "Tailwind"],
    github: "https://github.com/RasheedBShaik/bharath-home-services",
    live: "https://bharath-home-services.vercel.app/",
    projectType: "singlepage",
  },
  {
    title: "Monito Pet Store",
    category: "Retail",
    description: "Modern pet adoption and supply interface focusing on clean typography and aesthetic product displays.",
    icon: <Dog size={20} />,
    stack: ["React", "CSS Modules", "Vite"],
    github: "https://github.com/RasheedBShaik/monito",
    live: "https://rasheedbshaik.github.io/monito",
    projectType: "singlepage",
  },

  // ==========================================
  // EDUCATION & ED-TECH
  // ==========================================
  {
    title: "Little Learners School",
    category: "Education",
    description: "Modern educational web application designed for a universal school with interactive layouts and information pages.",
    icon: <School size={20} />,
    stack: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/RasheedBShaik/universal-school",
    live: "https://universal-school-ten.vercel.app/",
    projectType: "singlepage",
  },
  {
    title: "Universal Academy",
    category: "Education",
    description: "Coaching institute platform built to showcase courses, faculty details, and streamlined student outreach.",
    icon: <GraduationCap size={20} />,
    stack: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/RasheedBShaik/universal-coaching",
    live: "https://universal-coaching.vercel.app/",
    projectType: "singlepage",
  },
  {
    title: "Nxtwave Clone",
    category: "Ed-Tech",
    description: "Educational platform interface featuring complex navigation and interactive student dashboard elements.",
    icon: <GraduationCap size={20} />,
    stack: ["React", "Custom CSS", "React Router"],
    github: "https://github.com/RasheedBShaik/nxtwave-clone",
    live: "https://nxtwave-clone-vercel.vercel.app",
    projectType: "singlepage",
  },

  // ==========================================
  // MARKETPLACE & INVENTORY
  // ==========================================
  {
    title: "Bazar Book",
    category: "Marketplace",
    description: "Real-time bookstore marketplace utilizing cloud database synchronization for inventory management.",
    icon: <BookOpen size={20} />,
    stack: ["React", "Firebase", "Ant Design"],
    github: "https://github.com/rasheedbshaik/bazar",
    live: "https://rasheedbshaik.github.io/bazar",
    creds: "Email: test@gmail.com | Pass: test12345",
    projectType: "fullstack",
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
    projectType: "fullstack",
  },

  // ==========================================
  // ANIMATIONS, UI/UX & CLONES
  // ==========================================
  {
    title: "Car Scroll Animation",
    category: "Animation",
    description: "Interactive scroll-based animation showcase delivering a smooth and immersive automotive visual experience.",
    icon: <Car size={20} />,
    stack: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/RasheedBShaik/car-scroll",
    live: "https://car-scroll-ivory.vercel.app/",
    projectType: "feature",
  },
  {
    title: "Tesla Clone",
    category: "UI/UX",
    description: "Pixel-perfect Tesla hero section clone featuring high-end visual aesthetics and responsive navigation elements.",
    icon: <Sparkles size={20} />,
    stack: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/RasheedBShaik/tesla-clone",
    live: "https://tesla-clone-demo.vercel.app/",
    projectType: "feature",
  },
  {
    title: "Elementum",
    category: "Web App",
    description: "Sleek and interactive web application featuring modern user interfaces and responsive design.",
    icon: <Globe2 size={20} />,
    stack: ["Next.js", "React", "TypeScript"],
    github: "https://github.com/RasheedBShaik/elementum",
    live: "https://elementum-fawn.vercel.app/",
    projectType: "singlepage",
  },
  {
    title: "Chotu Clone",
    category: "Food Tech",
    description: "A comprehensive clone of the Chotu delivery platform featuring modern grid layouts and responsive design.",
    icon: <Truck size={20} />,
    stack: ["Next.js", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/RasheedBShaik/chotu-clone",
    live: "https://chotu-beta.vercel.app",
    projectType: "frontend",
  },
  {
    title: "E-commerce-ui",
    category: "UI Library",
    description: "A collection of reusable, high-performance e-commerce components built for speed and accessibility.",
    icon: <Component size={20} />,
    stack: ["HTML", "Plain CSS", "JavaScript"],
    github: "https://github.com/RasheedBShaik/e-commerce-ui",
    live: "https://rasheedbshaik.github.io/e-commerce-ui",
    projectType: "singlepage",
  },
];