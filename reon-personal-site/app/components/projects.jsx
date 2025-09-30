import ProjectCard from "./project-card";

export default function Projects({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className="container flex flex-col gap-10">
        <div className="section-heading">
          <h2>Recent work</h2>
          <p>
            Each project sharpened how I align technical execution with stakeholder goals. I lean on
            rapid iteration, tight feedback loops, and clear documentation to keep momentum high.
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
