import { PrimaryButton, SecondaryButton } from "./buttons";

const isPlaceholder = (value) => !value || value.includes("[");

const defaultHighlights = [
  "Worked with teammates to define scope and deliver the release",
  "Iterated with feedback sessions and quick usability checks",
  "Documented decisions and accessibility notes to keep quality consistent",
];

const defaultDescription =
  "Building a clear experience backed by pragmatic engineering choices.";

export default function ProjectCard({ project }) {
  if (!project) {
    return null;
  }

  const { name, type, description, github, deployment, highlights, techStack } = project;
  const hasGithub = !isPlaceholder(github);
  const hasDeployment = !isPlaceholder(deployment);
  const highlightList = Array.isArray(highlights) && highlights.length > 0 ? highlights : defaultHighlights;
  const stackList = Array.isArray(techStack) && techStack.length > 0 ? techStack : [];

  return (
    <article className="card-surface flex h-full flex-col gap-6 p-7 lg:p-8">
      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-[color:var(--foreground)]">
            {name}
          </h3>
          {type ? (
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
              {type}
            </span>
          ) : null}
        </div>
        <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
          {description ?? defaultDescription}
        </p>
      </header>

      {stackList.length ? (
        <div className="flex flex-wrap gap-2">
          {stackList.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <ul className="flex flex-col gap-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
        {highlightList.map((item) => (
          <li key={item} className="relative pl-5">
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[color:var(--primary)] opacity-70" />
            {item}
          </li>
        ))}
      </ul>

      <footer className="mt-auto flex flex-wrap gap-3">
        {hasDeployment ? (
          <PrimaryButton href={deployment} target="_blank" rel="noreferrer" className="px-5">
            Live demo
          </PrimaryButton>
        ) : null}
        {hasGithub ? (
          <SecondaryButton href={github} target="_blank" rel="noreferrer" className="px-5">
            GitHub
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
