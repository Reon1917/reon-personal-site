function hasUrl(value) {
  return typeof value === "string" && value.trim().length > 0 && value !== "#";
}

export default function MinimalSite({ data }) {
  const {
    personal,
    experience = [],
    projects = [],
    education,
    coursework = [],
    skills = [],
    contacts = {},
  } = data ?? {};
  const email = contacts.gmail;
  const linkedin = contacts.linkedin;

  return (
    <div className="mx-auto max-w-[var(--container)] px-4 py-12 sm:py-16 md:py-20">
      <header className="mb-14 sm:mb-16">
        <h1 className="text-xl font-medium tracking-tight text-[color:var(--foreground)] sm:text-2xl">
          {personal?.name}
        </h1>
        <p className="mt-2 text-sm text-[color:var(--muted)] sm:text-base">
          {personal?.title}
          {personal?.location ? ` · ${personal.location} based` : null}
        </p>
      </header>

      <section className="mb-12 sm:mb-14">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
          Work experience
        </h2>
        <ul className="space-y-8">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2">
                <span className="font-medium text-[color:var(--foreground)]">{job.role}</span>
                <span className="text-[color:var(--muted)] sm:before:content-['—_']"> {job.company}</span>
              </div>
              {job.period ? (
                <p className="mt-1 text-sm text-[color:var(--muted)]">{job.period}</p>
              ) : null}
              {Array.isArray(job.bullets) && job.bullets.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-[color:var(--foreground)]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 sm:mb-14">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
          Projects
        </h2>
        <ul className="space-y-6">
          {projects.map((p) => (
            <li key={p.name}>
              <p className="font-medium text-[color:var(--foreground)]">{p.name}</p>
              {p.description ? (
                <p className="mt-1 text-sm text-[color:var(--muted)]">{p.description}</p>
              ) : null}
              {(hasUrl(p.github) || hasUrl(p.deployment)) && (
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {hasUrl(p.github) ? (
                    <a href={p.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : null}
                  {hasUrl(p.deployment) ? (
                    <a href={p.deployment} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {Array.isArray(skills) && skills.length > 0 ? (
        <section className="mb-12 sm:mb-14">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
            Skills
          </h2>
          <div className="space-y-6">
            {skills.map((group) =>
              group?.category && Array.isArray(group.items) && group.items.length > 0 ? (
                <div key={group.category}>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
                    {group.category}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--foreground)]">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ) : null
            )}
          </div>
        </section>
      ) : null}

      <section className="mb-12">
        <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
          Education
        </h2>
        {education ? (
          <div className="text-sm sm:text-base">
            <p className="font-medium text-[color:var(--foreground)]">{education.university}</p>
            <p className="mt-1 text-[color:var(--muted)]">
              {education.degree}
              {education.gpa ? ` · GPA ${education.gpa}/4.00` : null}
              {education.period ? ` · ${education.period}` : null}
            </p>
          </div>
        ) : null}

        {Array.isArray(coursework) && coursework.length > 0 ? (
          <>
            <h3 className="mb-4 mt-8 text-xs font-medium uppercase tracking-[0.12em] text-[color:var(--muted)]">
              Relevant coursework
            </h3>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-[color:var(--foreground)]">
              {coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      {(email || linkedin) && (
        <footer className="border-t border-neutral-800 pt-8 text-sm text-[color:var(--muted)]">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {email ? (
              <a href={`mailto:${email}`} className="break-all">
                {email}
              </a>
            ) : null}
            {linkedin ? (
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : null}
          </div>
        </footer>
      )}
    </div>
  );
}
