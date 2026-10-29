"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { contactDetails, navigation } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { ThemeToggle } from "@/components/theme-toggle";

type NavigationItemsProps = {
  activeId: string;
  onNavigate: (id: string) => void;
};

function NavigationItems({ activeId, onNavigate }: NavigationItemsProps) {
  return navigation.map(({ id, label }) => (
    <a
      key={id}
      href={`#${id}`}
      aria-current={activeId === id ? "location" : undefined}
      onClick={() => onNavigate(id)}
      className={`nav-link flex min-h-11 w-fit items-center ${activeId === id ? "text-accent" : "text-muted hover:text-accent"}`}
    >
      {label}
    </a>
  ));
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
      // Follow document order when identifying the section currently in view.
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1);
    let frame = 0;

    function updateActive() {
      frame = 0;
      const offset = (header.current?.getBoundingClientRect().bottom ?? 80) + 48;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= offset).at(-1);
      const atBottom = window.scrollY > 0 && Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
      const section = atBottom ? sections.at(-1) : current ?? sections[0];
      if (section) setActiveId(section.id);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }
    function handleOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setIsOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 64rem)");
    function handleDesktop() {
      if (desktop.matches) setIsOpen(false);
    }
    window.addEventListener("keydown", handleEscape);
    window.addEventListener("pointerdown", handleOutsideClick);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("pointerdown", handleOutsideClick);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [isOpen]);

  function handleNavigate(id: string) {
    setActiveId(id);
    setIsOpen(false);
  }

  return (
    <header ref={header} className="site-header">
      <div className="navbar-shell">
        <div className="flex min-h-16 items-center justify-between gap-2 px-4 sm:px-6">
          <a href="#home" aria-label="AN. - Arvind Nataraj home" onClick={() => handleNavigate("home")} className="flex min-h-11 items-center font-mono text-xl font-bold tracking-tight">
            AN<span className="text-accent">.</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm lg:flex xl:gap-7">
            <NavigationItems activeId={activeId} onNavigate={handleNavigate} />
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" aria-label="Arvind Nataraj on GitHub (opens in a new tab)" className="nav-icon text-muted hover:text-accent"><GithubIcon /></a>
            {contactDetails.linkedin ? (
              <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Arvind Nataraj on LinkedIn (opens in a new tab)" className="nav-icon text-muted hover:text-accent"><LinkedinIcon /></a>
            ) : (
              <span className="relative inline-flex" aria-disabled="true" title="LinkedIn profile link pending">
                <span className="sr-only">LinkedIn profile link </span>
                <span className="nav-icon cursor-not-allowed text-muted"><LinkedinIcon /></span>
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 text-[0.5rem] text-muted">pending</span>
              </span>
            )}
            <ThemeToggle />
            <button ref={menuButton} type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} className="nav-icon text-foreground lg:hidden">
              {isOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!isOpen} className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-border/30 px-6 py-4 text-sm lg:hidden">
          <div className="flex flex-col gap-1"><NavigationItems activeId={activeId} onNavigate={handleNavigate} /></div>
        </nav>
      </div>
    </header>
  );
}
