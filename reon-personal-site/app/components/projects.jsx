import ProjectCard from "./project-card";

export default function Projects({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className="container flex flex-col gap-10">
        <div className="section-heading">
          <h2>Recent tinkering</h2>
          <p>
            I gravitate toward projects that put collaboration, clear UX, and real users at the
            center. Here are a few builds that taught me how to mix design thinking with solid
            engineering.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
