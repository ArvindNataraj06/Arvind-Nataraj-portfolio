import { Hero } from "@/components/hero";
import { ExperienceEducation } from "@/components/experience-education";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1">
      <Hero />
      <ExperienceEducation />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
