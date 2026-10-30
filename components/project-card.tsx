import { ChartColumn, FileText, Layers } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/social-icons";
import { SkillTag } from "@/components/skill-tag";

const visualIcons = { leads: Layers, documents: FileText, traffic: ChartColumn };

export function ProjectCard({ project }: { project: Project }) {
  const Icon = visualIcons[project.visual];

  return (
    <article aria-labelledby={`${project.id}-title`} className="project-card flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-accent/20 bg-surface shadow-lg shadow-black/10">
      <div className={`project-visual project-visual-${project.visual}`}>
        <span className="project-visual-icon" aria-hidden="true"><Icon size={64} strokeWidth={1.25} /></span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 id={`${project.id}-title`} className="text-xl font-semibold leading-snug text-foreground">{project.title}</h3>
        <p className="mt-2 text-xs leading-5 text-muted">{project.category} · {project.status}</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          {project.description.map((segment, index) => segment.highlight ? (
            <strong key={index} className="font-medium text-amber">{segment.text}</strong>
          ) : <span key={index}>{segment.text}</span>)}
        </p>
        <ul aria-label={`${project.title} technologies`} className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => <li key={technology}><SkillTag label={technology} /></li>)}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7 text-xs">
          {project.repositoryUrl && (
            <a href={project.repositoryUrl} className="project-link inline-flex min-h-11 items-center gap-2 text-accent"><GithubIcon />GitHub<span className="sr-only"> for {project.title}</span></a>
          )}
        </div>
      </div>
    </article>
  );
}
