import ThemeToggle from "./theme-toggle";
import { PrimaryButton, SecondaryButton } from "./buttons";

const isPlaceholder = (value) => !value || value.includes("[");

export default function Hero({ personal, education, coursework, contacts }) {
  const email = contacts?.gmail;
  const linkedin = contacts?.linkedin;

  const emailHref = !isPlaceholder(email)
    ? `mailto:${email}?subject=Exploring%20an%20opportunity`
    : "#";
  const linkedinHref = !isPlaceholder(linkedin) ? linkedin : "#";

  return (
    <section className="section pt-20">
      <div className="container flex flex-col gap-12">
        <header className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
            {personal?.name}
          </span>
          <ThemeToggle />
        </header>

        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-4 py-1 text-xs uppercase tracking-[0.32em] text-[color:var(--muted-foreground)]">
                Open for internships
              </span>
              <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Designing dependable web experiences with a product mindset
              </h1>
              <p className="max-w-xl text-base leading-7 text-[color:var(--muted-foreground)]">
                I am a software engineering student focused on translating user insights into
                shipped products. I work across the stack, keep delivery lean, and team up with
                designers and engineers to push thoughtful solutions into production.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <PrimaryButton href={emailHref} className={emailHref === "#" ? "pointer-events-none opacity-60" : ""}>
                Let&apos;s build together
              </PrimaryButton>
              <SecondaryButton
                href={linkedinHref}
                target={linkedinHref !== "#" ? "_blank" : undefined}
                rel={linkedinHref !== "#" ? "noreferrer" : undefined}
                className={linkedinHref === "#" ? "pointer-events-none opacity-60" : ""}
              >
                View LinkedIn profile
              </SecondaryButton>
            </div>

            {education ? (
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Currently pursuing {education.degree} at {education.university} ({education.years})
                , maintaining a GPA of {education.gpa}.
              </p>
            ) : null}
          </div>

          <aside className="card-surface flex flex-col gap-5 p-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold tracking-tight">Coursework snapshot</h2>
              <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                Blending rigorous computer science foundations with hands-on delivery principles keeps
                my contributions focused on measurable impact.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {Array.isArray(coursework)
                ? coursework.map((course) => (
                    <li
                      key={course}
                      className="card-muted px-3 py-1 text-sm text-[color:var(--muted-foreground)]"
                    >
                      {course}
                    </li>
                  ))
                : null}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
