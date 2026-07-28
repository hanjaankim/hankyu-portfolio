import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">프로젝트</h2>

        <ul className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
