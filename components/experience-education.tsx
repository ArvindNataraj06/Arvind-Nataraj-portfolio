import { careerEntries } from "@/data/portfolio";
import { CareerCard } from "@/components/career-card";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceEducation() {
  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-heading" className="scroll-mt-32 bg-section px-6 pb-10 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="experience-heading"
          eyebrow="EXPERIENCE & EDUCATION"
          title="The Path So Far"
          description="Learning, building, and growing as a developer."
        />
        <ul className="grid items-start gap-6 md:grid-cols-2 lg:gap-8">
          {careerEntries.map((entry) => (
            <li key={entry.id} className="min-w-0">
              <CareerCard entry={entry} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
