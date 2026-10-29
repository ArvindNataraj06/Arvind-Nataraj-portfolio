import { Briefcase, CalendarDays, GraduationCap } from "lucide-react";
import type { CareerEntry } from "@/data/portfolio";

export function CareerCard({ entry }: { entry: CareerEntry }) {
  const Icon = entry.kind === "education" ? GraduationCap : Briefcase;

  return (
    <article
      aria-labelledby={`${entry.id}-heading`}
      className={`rounded-2xl border border-accent/25 bg-surface p-6 shadow-lg shadow-black/10 sm:p-8 ${entry.placeholder ? "border-dashed" : ""}`}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-background text-accent">
          <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-accent">
          {entry.kind}
        </p>
      </div>

      {entry.placeholder && (
        <p className="mb-4 inline-flex rounded border border-amber/40 bg-amber/10 px-2 py-1 font-mono text-[0.625rem] leading-5 text-amber">
          Placeholder — awaiting verified details
        </p>
      )}

      <h3 id={`${entry.id}-heading`} className="text-xl font-semibold leading-snug text-foreground">
        {entry.title}
      </h3>

      {entry.organization && (
        <p className="mt-4 text-sm leading-7 text-muted">
          {entry.organization}{entry.location ? `, ${entry.location}` : ""}
        </p>
      )}

      {entry.period && (
        <p className="mt-3 flex flex-wrap items-center gap-2 text-xs leading-6 text-muted sm:text-sm">
          <CalendarDays size={15} aria-hidden="true" />
          {entry.kind === "education" && !entry.startPeriod && <span>Completed</span>}
          {entry.startPeriod && (
            <>
              <time dateTime={entry.startDateTime}>{entry.startPeriod}</time>
              <span aria-hidden="true">–</span>
              <span className="sr-only">to</span>
            </>
          )}
          {entry.dateTime ? (
            <time dateTime={entry.dateTime} className="font-medium text-amber">{entry.period}</time>
          ) : <span>{entry.period}</span>}
        </p>
      )}

      {entry.kind === "education" && entry.grade && (
        <div className="mt-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-background px-3 py-1 text-sm text-muted">
            Final grade <strong className="font-semibold text-amber">{entry.grade.value}</strong>
          </p>
          <p className="mt-2 text-xs leading-6 text-muted">{entry.grade.scale}</p>
        </div>
      )}

      {entry.description && (
        <p className="mt-4 max-w-prose text-sm leading-7 text-muted">{entry.description}</p>
      )}
    </article>
  );
}
