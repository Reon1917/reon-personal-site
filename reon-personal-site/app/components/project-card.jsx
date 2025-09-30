import { SecondaryButton } from "./buttons";

const isPlaceholder = (value) => !value || value.includes("[");

export default function ProjectCard({ project }) {
  if (!project) {
    return null;
  }

  const { name, type, description, github, deployment } = project;
  const hasGithub = !isPlaceholder(github);
  const hasDeployment = !isPlaceholder(deployment);

  return (
    <article className="card-surface grid min-h-[220px] grid-rows-[auto_1fr_auto] gap-6 p-6">
      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
            {name}
          </h3>
          {type ? (
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1 text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              {type}
            </span>
          ) : null}
        </div>
        {description ? (
          <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{description}</p>
        ) : (
          <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
            Building a resilient solution with attention to usability and delivery metrics.
          </p>
        )}
      </header>

      <div className="rounded-lg border border-dashed border-[color:var(--border)] bg-[color:var(--surface)]/50 p-4 text-xs leading-5 text-[color:var(--muted-foreground)]">
        <p>
          Shipped responsibilities:
          <br />
          • Scoped milestones with mentors and stakeholders.
          <br />• Kept feedback tight with iterative demos and usability passes.
          <br />• Balanced technical debt with delivery speed for smooth handoff.
        </p>
      </div>

      <footer className="flex flex-wrap gap-3">
        {hasGithub ? (
          <SecondaryButton href={github} target="_blank" rel="noreferrer">
            GitHub
          </SecondaryButton>
        ) : null}
        {hasDeployment ? (
          <SecondaryButton href={deployment} target="_blank" rel="noreferrer">
            Live demo
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
