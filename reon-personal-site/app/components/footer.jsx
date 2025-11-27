export default function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-10">
      <div className="container flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted-foreground)]">
        <span>
          © {year} {name ?? "Lin Myat Phyo"}. Built with care.
        </span>
        <span className="text-xs uppercase tracking-[0.24em]">Always learning</span>
      </div>
    </footer>
  );
}
