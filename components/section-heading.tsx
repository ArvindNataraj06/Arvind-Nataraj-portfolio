type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-9 text-center sm:mb-12">
      <p className="mb-3 font-mono text-[0.625rem] font-medium tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <span aria-hidden="true" className="mx-auto mt-4 block h-0.5 w-12 rounded-full bg-amber" />
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
      )}
    </header>
  );
}
