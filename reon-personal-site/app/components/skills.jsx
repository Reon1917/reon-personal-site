const labelize = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();

const PREFERRED_ORDER = [
  "languages",
  "frontend",
  "backend",
  "databases",
  "cloud",
  "tools",
  "methodologies",
];

export default function Skills({ skills }) {
  if (!skills) {
    return null;
  }

  const categories = Object.entries(skills)
    .filter(([, list]) => Array.isArray(list) && list.length > 0)
    .sort((a, b) => {
      const ia = PREFERRED_ORDER.indexOf(a[0]);
      const ib = PREFERRED_ORDER.indexOf(b[0]);
      if (ia === -1 && ib === -1) return a[0].localeCompare(b[0]);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className="container flex flex-col gap-10">
        <div className="section-heading">
          <h2>Technical range</h2>
          <p>
            I move quickly between discovery and delivery by pairing production-ready tooling with the
            fundamentals needed to build durable systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map(([category, list]) => (
            <article key={category} className="card-muted flex flex-col gap-4 p-6">
              <header className="flex items-center justify-between">
                <h3 className="text-base font-semibold tracking-tight">
                  {labelize(category)}
                </h3>
                <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                  {list.length} skills
                </span>
              </header>
              <ul className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1 text-sm text-[color:var(--muted-foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
