import type { ReactNode } from "react";

type ActionLinkProps = {
  href?: string | null;
  label: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  primary?: boolean;
  download?: boolean;
};

export function ActionLink({ href, label, icon, iconPosition = "start", primary = false, download = false }: ActionLinkProps) {
  const className = `action-link ${primary ? "action-link-primary" : "action-link-secondary"}`;
  const content = (
    <>
      {iconPosition === "start" && icon}
      <span>{label}</span>
      {iconPosition === "end" && icon}
    </>
  );

  if (!href) {
    return (
      <span aria-disabled="true" className={`${className} action-link-pending`}>
        {content}
        {" "}<span className="font-mono text-[0.625rem] font-normal">Pending</span>
      </span>
    );
  }

  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={external ? `${label} (opens in a new tab)` : undefined}
      className={className}
    >
      {content}
    </a>
  );
}
