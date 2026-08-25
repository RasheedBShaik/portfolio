import AboutMe from "./Sections/Aboutme";
import { Contact } from "./Sections/Contact";
import { Footer } from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

export default function HomePage() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-start bg-transparent">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
