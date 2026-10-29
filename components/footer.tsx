import { ArrowUp } from "lucide-react";
import { contactDetails, profile } from "@/data/portfolio";
import { GithubIcon } from "@/components/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-accent/15 bg-background px-6 py-6 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <p>Built with love &copy; 2026 {profile.name}</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-6">
          <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="inline-flex min-h-11 items-center gap-2 hover:text-accent"><GithubIcon />GitHub</a>
          <a href="#home" className="inline-flex min-h-11 items-center gap-2 hover:text-accent">Back to top<ArrowUp size={15} aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}
