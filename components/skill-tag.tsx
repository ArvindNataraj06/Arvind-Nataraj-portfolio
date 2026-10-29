type SkillTagProps = {
  label: string;
  size?: "compact" | "readable";
};

export function SkillTag({ label, size = "compact" }: SkillTagProps) {
  const sizing = size === "readable"
    ? "px-4 py-[9px] text-base font-semibold leading-6"
    : "px-2.5 py-1 text-[0.6875rem] leading-4";

  return (
    <span className={`inline-flex w-auto items-center whitespace-nowrap rounded-full border border-tag-border bg-tag-background font-mono text-tag-foreground ${sizing}`}>
      {label}
    </span>
  );
}
