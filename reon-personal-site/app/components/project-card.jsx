import { PrimaryButton, SecondaryButton } from "./buttons";

const isPlaceholder = (value) => !value || value.includes("[");

const defaultHighlights = [
  "Scoped the feature roadmap with classmates and mentors",
  "Iterated quickly using design feedback sessions",
  "Ship-ready code reviews with attention to accessibility",
];

export default function ProjectCard({ project }) {
  if (!project) {
    return null;
  }

  const { name, type, description, github, deployment, highlights } = project;
  const hasGithub = !isPlaceholder(github);
  const hasDeployment = !isPlaceholder(deployment);
  const highlightList = Array.isArray(highlights) && highlights.length > 0 ? highlights : defaultHighlights;

  return (
    <article className="card-surface group relative grid min-h-[240px] grid-rows-[auto_1fr_auto] gap-6 overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:shadow-2xl/80">
      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
            {name}
          </h3>
          {type ? (
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
              {type}
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
          {description ?? "Making the project feel delightful while keeping the engineering practical."}
        </p>
      </header>

      <ul className="grid gap-2 text-sm text-[color:var(--muted-foreground)]">
        {highlightList.map((item) => (
          <li key={item} className="relative pl-5">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)] opacity-70" />
            {item}
          </li>
        ))}
      </ul>

      <footer className="flex flex-wrap gap-3">
        {hasDeployment ? (
          <PrimaryButton href={deployment} target="_blank" rel="noreferrer" className="px-5">
            Live demo &gt;
          </PrimaryButton>
        ) : null}
        {hasGithub ? (
          <SecondaryButton href={github} target="_blank" rel="noreferrer" className="px-5">
            GitHub repo
          </SecondaryButton>
        ) : null}
        {!hasGithub && !hasDeployment ? (
          <span className="text-xs text-[color:var(--muted-foreground)]">
            Links available on request.
          </span>
        ) : null}
      </footer>
    </article>
  );
}
