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
  "architecture",
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
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="section-heading">
            <h2>Toolbox & team-ups</h2>
            <p>
              These are the languages, stacks, and collaboration habits I reach for when building web
              products that have to scale from MVP to something teammates can rely on.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {categories.map(([category, list]) => (
              <div key={category} className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  {labelize(category)}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/60 px-3 py-1 text-sm text-[color:var(--muted-foreground)] shadow-sm shadow-black/5 backdrop-blur"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
