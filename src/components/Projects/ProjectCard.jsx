import { useId, useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <li className={`project-card ${isOpen ? "project-card--open" : ""}`}>
      <button
        type="button"
        className="project-card__header"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="project-card__heading">
          <p className="project-card__period">{project.period}</p>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>
        </div>
        <span className="project-card__toggle" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div id={panelId} className="project-card__panel">
          {project.url && (
            <p className="project-card__url">
              <a href={`https://${project.url}`} target="_blank" rel="noreferrer">
                {project.url}
              </a>
            </p>
          )}

          {project.role?.length > 0 && (
            <div className="project-card__block">
              <h4 className="project-card__block-title">역할</h4>
              <ul className="project-card__tags">
                {project.role.map((role) => (
                  <li key={role} className="project-card__tag">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.details?.length > 0 && (
            <div className="project-card__block">
              <h4 className="project-card__block-title">상세</h4>
              <ul className="project-card__details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {project.images?.length > 0 && (
            <div className="project-card__block">
              <div className="project-card__images">
                {project.images.map((image) => (
                  <ImagePlaceholder
                    key={image.label}
                    label={image.label}
                    ratio={image.ratio}
                  />
                ))}
              </div>
            </div>
          )}

          {project.outcome && (
            <div className="project-card__block">
              <h4 className="project-card__block-title">성과</h4>
              <p className="project-card__outcome">{project.outcome}</p>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default ProjectCard;
