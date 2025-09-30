import { PrimaryButton, SecondaryButton } from "./buttons";

const isPlaceholder = (value) => !value || value.includes("[");

const defaultHighlights = [
  "Collaborated closely with teammates to scope, build, and polish the experience",
  "Iterated fast using recorded feedback sessions and lightweight usability tests",
  "Kept quality high with clear documentation, accessibility checks, and code reviews",
];

const defaultDescription =
  "Exploring practical ways to make the experience friendly while keeping the engineering pragmatic.";

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
            <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
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
