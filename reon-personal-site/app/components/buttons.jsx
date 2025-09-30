const baseButton =
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]";

const primaryStyles =
  "border-transparent bg-[color:var(--primary)] px-6 py-2.5 text-[color:var(--primary-foreground)] shadow-sm hover:opacity-90";

const secondaryStyles =
  "border-[color:var(--border)] bg-transparent px-6 py-2.5 text-[color:var(--foreground)] hover:border-transparent hover:bg-[color:var(--surface)]/70";

export function PrimaryButton({ href, children, className = "", target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseButton} ${primaryStyles} ${className}`.trim()}
    >
      {children}
    </a>
  );
}

export function SecondaryButton({ href, children, className = "", target, rel }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseButton} ${secondaryStyles} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
