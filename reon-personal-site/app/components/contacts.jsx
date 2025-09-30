import { PrimaryButton, SecondaryButton } from "./buttons";

const isPlaceholder = (value) => !value || value.includes("[");

export default function Contacts({ contacts, socials }) {
  const email = contacts?.gmail;
  const linkedin = contacts?.linkedin;
  const instagram = socials?.instagram;

  const emailHref = !isPlaceholder(email)
    ? `mailto:${email}?subject=Let%27s%20collaborate`
    : "#";
  const linkedinHref = !isPlaceholder(linkedin) ? linkedin : "#";
  const instagramHref = !isPlaceholder(instagram) ? instagram : "#";

  return (
    <section className="section pb-24">
      <div className="container">
        <div className="card-surface flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Let&apos;s team up</h2>
            <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
              I&apos;m always up for talking internships, hackathons, or your next product idea. Send me a
              note and we can jam on timelines, prototypes, or the best noodles in town.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href={emailHref} className={emailHref === "#" ? "pointer-events-none opacity-60" : ""}>
              Email Lin
            </PrimaryButton>
            <SecondaryButton
              href={linkedinHref}
              target={linkedinHref !== "#" ? "_blank" : undefined}
              rel={linkedinHref !== "#" ? "noreferrer" : undefined}
              className={linkedinHref === "#" ? "pointer-events-none opacity-60" : ""}
            >
              LinkedIn DMs
            </SecondaryButton>
            {instagramHref !== "#" ? (
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[color:var(--muted-foreground)] underline-offset-4 transition hover:text-[color:var(--primary)]"
              >
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
