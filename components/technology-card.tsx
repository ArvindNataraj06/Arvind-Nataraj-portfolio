import Image from "next/image";
import { Database } from "lucide-react";
import type { Technology } from "@/data/portfolio";

export function TechnologyCard({ technology }: { technology: Technology }) {
  return (
    <div className="flex h-full min-w-0 flex-col items-center gap-3 rounded-xl border border-accent/15 bg-surface/70 p-4 text-center transition-colors hover:border-accent/40 hover:bg-surface motion-reduce:transition-none">
      {technology.icon ? (
        <Image
          src={technology.icon}
          width={48}
          height={48}
          alt=""
          unoptimized
          className={`h-12 w-12 shrink-0 object-contain ${technology.invertInDark ? "dark:invert" : ""}`}
        />
      ) : (
        <Database width={48} height={48} strokeWidth={1.5} className="h-12 w-12 shrink-0 text-accent" aria-hidden="true" />
      )}
      <span className="flex min-h-10 items-center justify-center text-sm font-semibold leading-5 text-foreground sm:text-base">
        {technology.name}
      </span>
    </div>
  );
}
