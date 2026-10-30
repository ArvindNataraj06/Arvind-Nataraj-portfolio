import { careerEntries } from "@/data/portfolio";
import { CareerCard } from "@/components/career-card";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceEducation() {
  const educationEntries = careerEntries.filter((entry) => entry.kind === "education");
  const experienceEntries = careerEntries.filter((entry) => entry.kind === "experience");

  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-heading" className="scroll-mt-32 bg-section px-6 pb-10 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="experience-heading"
          eyebrow="EXPERIENCE & EDUCATION"
          title="The Path So Far"
          description="Learning, building, and growing as a developer."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <section aria-labelledby="education-heading" className="min-w-0">
            <h3 id="education-heading" className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Education
            </h3>
            <ul className="flex flex-col gap-6">
              {educationEntries.map((entry) => (
                <li key={entry.id}>
                  <CareerCard entry={entry} />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="professional-experience-heading" className="min-w-0">
            <h3 id="professional-experience-heading" className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Experience
            </h3>
            <ul className="flex flex-col gap-6">
              {experienceEntries.map((entry) => (
                <li key={entry.id}>
                  <CareerCard entry={entry} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
