
import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { TechnologyCard } from "@/components/technology-card";

export function Skills() {
  return (
    <section id="skills" tabIndex={-1} aria-labelledby="skills-heading" className="scroll-mt-32 bg-section px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading id="skills-heading" eyebrow="CORE TECHNOLOGIES" title="My Toolkit" />
        <ul aria-label="Technologies" className="grid grid-cols-2 gap-3 min-[480px]:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {skills.map((skill) => (
            <li key={skill.name} data-category={skill.category} className="min-w-0">
              <TechnologyCard technology={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
