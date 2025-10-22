import { Hero } from "./Sections/Hero";
import { Aboutme } from "./Sections/Aboutme";
import { Skills } from "./Sections/Skills";
import { Contact } from "./Sections/Contact";
import { Projects } from "./Sections/Projects";

export default function Home() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
