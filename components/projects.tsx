import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-heading" className="scroll-mt-32 bg-background px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="projects-heading" eyebrow="PROJECTS" title="Things I've Built" description="A collection of applications and experiments I've worked on." />
        <ul className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => <li key={project.id} className="min-w-0"><ProjectCard project={project} /></li>)}
        </ul>
      </div>
    </section>
  );
}
