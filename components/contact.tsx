import { Download, Mail } from "lucide-react";
import { contactContent, contactDetails } from "@/data/portfolio";
import { ActionLink } from "@/components/action-link";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";

export function Contact() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="scroll-mt-32 bg-section px-6 py-20 sm:px-8 sm:py-24">
      <div className="contact-panel mx-auto max-w-7xl rounded-3xl border border-accent/20 bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
        <p className="mb-5 font-mono text-[0.625rem] tracking-[0.3em] text-accent">GET IN TOUCH</p>
        <h2 id="contact-heading" className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">{contactContent.heading}</h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">{contactContent.description}</p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
          <ActionLink label="Email" href={contactDetails.email ? `mailto:${contactDetails.email}` : null} icon={<Mail size={16} aria-hidden="true" />} primary />
          <ActionLink label="GitHub" href={contactDetails.github} icon={<GithubIcon />} primary={!contactDetails.email} />
          <ActionLink label="LinkedIn" href={contactDetails.linkedin} icon={<LinkedinIcon />} />
          <ActionLink label="Download Resume" href={contactDetails.resume} download icon={<Download size={16} aria-hidden="true" />} />
        </div>
        {(!contactDetails.email || !contactDetails.linkedin || !contactDetails.resume) && (
          <p className="mt-5 text-xs leading-6 text-muted">Pending actions will be available once their verified details are added.</p>
        )}
      </div>
    </section>
  );
}
