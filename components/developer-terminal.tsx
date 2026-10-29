"use client";

import { useEffect, useId, useRef, useState } from "react";
import { careerEntries, contactDetails, profile, projects, skills } from "@/data/portfolio";

type Entry = { command: string; lines: string[] };
const quickCommands = ["about", "skills", "projects", "contact"] as const;

function getOutput(command: string): string[] {
  switch (command) {
    case "help":
      return ["about — Meet the developer", "skills — My technologies", "projects — Featured projects", "contact — Get in touch", "clear — Clear output", "help — Available commands"];
    case "about": {
      const degree = careerEntries.find((entry) => entry.kind === "education" && !entry.placeholder);
      return [profile.name, profile.tagline, ...(degree ? [`${degree.title} · ${degree.organization ?? ""}`] : [])];
    }
    case "skills":
      return [...new Set(skills.map((skill) => skill.category))].map((category) => `${category}: ${skills.filter((skill) => skill.category === category).map((skill) => skill.name).join(", ")}`);
    case "projects":
      return projects.map((project) => `${project.title} — ${project.description}`);
    case "contact":
      return [`Email: ${contactDetails.email ?? "Coming soon"}`, `GitHub: ${contactDetails.github}`, `LinkedIn: ${contactDetails.linkedin ?? "Coming soon"}`];
    default:
      return [`Command "${command}" isn't available. Type help to see what you can try.`];
  }
}

export function DeveloperTerminal() {
  const inputId = useId();
  const titleId = useId();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [output, setOutput] = useState<Entry[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = outputRef.current;
    if (panel) panel.scrollTop = panel.scrollHeight;
  }, [output]);

  function runCommand(value: string) {
    const command = value.trim().toLowerCase();
    if (!command) return;
    setHistory((previous) => [...previous, command].slice(-50));
    setHistoryIndex(null);
    setInput("");
    if (command === "clear") {
      setOutput([]);
      return;
    }
    setOutput((previous) => [...previous, { command, lines: getOutput(command) }].slice(-50));
  }

  return (
    <section aria-labelledby={titleId} className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-accent/25 bg-background font-mono text-xs text-foreground shadow-xl shadow-accent/10 sm:text-sm">
      <header className="flex items-center gap-4 border-b border-accent/20 bg-surface px-4 py-4">
        <span className="flex shrink-0 gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
        <h2 id={titleId} className="min-w-0 truncate text-xs font-normal tracking-normal text-muted">arvind@portfolio: ~</h2>
      </header>
      <div ref={outputRef} role="log" aria-label="Terminal output" aria-live="polite" aria-relevant="additions" tabIndex={0} className="h-64 overflow-y-auto overscroll-contain p-4 leading-6 [overflow-wrap:anywhere] sm:h-72 sm:p-5">
        <p className="text-accent">Welcome to {profile.firstName}&apos;s terminal.</p>
        <p className="mb-5 text-muted">Type <span className="text-amber">help</span> or try a command below.</p>
        {output.map((entry, index) => (
          <div key={index} className="mb-5 last:mb-0">
            <p className="mb-1 text-accent"><span className="text-emerald-700 dark:text-emerald-400" aria-hidden="true">❯ </span>{entry.command}</p>
            {entry.lines.map((line, lineIndex) => <p key={lineIndex} className="mb-1 whitespace-pre-wrap">{line}</p>)}
          </div>
        ))}
      </div>
      <div className="border-t border-accent/20 bg-surface px-4 pb-4 pt-3 sm:px-5">
        <div className="mb-3 flex flex-wrap gap-2" aria-label="Quick commands">
          {quickCommands.map((command) => (
            <button key={command} type="button" onClick={() => runCommand(command)} className="min-h-9 rounded-md border border-accent/25 px-2.5 py-1 text-xs capitalize text-accent hover:bg-accent/10">{command}</button>
          ))}
        </div>
        <form onSubmit={(event) => { event.preventDefault(); runCommand(input); }} className="flex min-w-0 items-center gap-2">
          <label htmlFor={inputId} className="sr-only">Terminal command</label>
          <span className="text-emerald-700 dark:text-emerald-400" aria-hidden="true">❯</span>
          <input id={inputId} value={input} onChange={(event) => { setInput(event.target.value); setHistoryIndex(null); }} onKeyDown={(event) => {
            if ((event.key !== "ArrowUp" && event.key !== "ArrowDown") || !history.length) return;
            event.preventDefault();
            const nextIndex = event.key === "ArrowUp" ? Math.max(0, (historyIndex ?? history.length) - 1) : Math.min(history.length, (historyIndex ?? history.length) + 1);
            setHistoryIndex(nextIndex);
            setInput(history[nextIndex] ?? "");
          }} placeholder="Type a command…" autoComplete="off" autoCapitalize="none" spellCheck={false} className="min-h-10 w-full min-w-0 rounded bg-transparent px-1 text-base text-foreground caret-accent placeholder:text-muted sm:text-sm" />
          <button type="submit" className="min-h-10 rounded-md px-2 text-xs text-accent hover:bg-accent/10">Run<span className="sr-only"> command</span></button>
        </form>
      </div>
    </section>
  );
}
