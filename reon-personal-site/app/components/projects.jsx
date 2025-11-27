import ProjectCard from "./project-card";

export default function Projects({ projects }) {
  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <section className="section">
      <div className="container flex flex-col gap-10">
        <div className="section-heading">
          <h2>Selected projects</h2>
          <p>Work focused on collaboration and clear UX, pairing design decisions with dependable engineering.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
