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
    <section className="section pt-24 sm:pt-28">
      <div className="container flex flex-col gap-10">
        <header className="flex items-center justify-between gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
            {personal?.name}
          </span>
          <ThemeToggle />
        </header>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-4 py-1 text-xs uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                Software engineering student
              </span>
              <h1 className="text-pretty text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Shipping friendly web apps with a curious mind and AI sidekick
              </h1>
              <p className="max-w-2xl text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg sm:leading-8">
                Hey there! I build web experiences that feel welcoming and purposeful. I lean on
                modern stacks, sprinkle in AI coding tools when they help, and keep learning fast by
                pairing with teammates, mentors, and users.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <PrimaryButton href={emailHref} className={emailHref === "#" ? "pointer-events-none opacity-60" : ""}>
                Say hello
              </PrimaryButton>
              <SecondaryButton
                href={linkedinHref}
                target={linkedinHref !== "#" ? "_blank" : undefined}
                rel={linkedinHref !== "#" ? "noreferrer" : undefined}
                className={linkedinHref === "#" ? "pointer-events-none opacity-60" : ""}
              >
                LinkedIn
              </SecondaryButton>
            </div>

            {education ? (
              <p className="text-sm leading-6 text-[color:var(--muted-foreground)] sm:max-w-lg">
                Studying {education.degree} at {education.university} ({education.years}) and keeping a
                {education.gpa} GPA while experimenting with product ideas outside the classroom.
              </p>
            ) : null}
          </div>

          <aside className="card-surface flex flex-col gap-5 p-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold tracking-tight">Classes fueling my work</h2>
              <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                Coursework gives me the theory, side projects supply the reps. Together they help me
                spot the right trade-offs when building in the wild.
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
