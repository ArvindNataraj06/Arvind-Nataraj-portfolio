import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DeveloperTerminal } from "@/components/developer-terminal";
import { profile } from "@/data/portfolio";
import { ActionLink } from "@/components/action-link";

export function Hero() {
  return (
    <section id="home" tabIndex={-1} aria-labelledby="hero-heading" className="hero-section">
      <div className="hero-grid">
        <div className="relative z-10 max-w-xl">
          <p className="mb-6 font-mono text-xs font-medium tracking-[0.3em] text-accent">
            HELLO, I&apos;M
          </p>
          <h1 id="hero-heading" className="hero-heading">
            {profile.firstName}<br />
            <span className="text-accent">{profile.lastName}.</span>
          </h1>
          <p className="mt-7 text-lg font-medium tracking-tight text-foreground sm:text-xl">
            {profile.tagline}
          </p>
          <p className="mt-5 max-w-[28rem] text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {profile.introduction.map((part, index) => (
              <span key={index} className={part.highlight ? "hero-highlight" : undefined}>{part.text}</span>
            ))}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ActionLink href="#projects" label="View Projects" primary iconPosition="end" icon={<ArrowRight size={16} aria-hidden="true" />} />
            <ActionLink href="#contact" label="Contact Me" iconPosition="end" icon={<ArrowUpRight size={16} aria-hidden="true" />} />
          </div>

          <p className="availability-badge mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface px-3 py-1.5 text-xs text-muted">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        <div className="hero-artwork">
          <div className="hero-glow" aria-hidden="true" />
          <DeveloperTerminal />
        </div>
      </div>
    </section>
  );
}
