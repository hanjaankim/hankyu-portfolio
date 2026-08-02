import { useId, useState } from "react";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import useReveal from "../../hooks/useReveal";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const [ref, isVisible] = useReveal();

  const images = project.images ?? [];
  const phoneImages = images.filter((image) => image.type === "phone");
  const wideImages = images.filter((image) => image.type === "wide");
  const gridImages = images.filter((image) => !image.type);

  return (
    <li
      ref={ref}
      className={`project-card reveal ${isVisible ? "reveal--visible" : ""} ${
        isOpen ? "project-card--open" : ""
      }`}
    >
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

          {project.roleGroups?.map((group) => (
            <div className="project-card__block" key={group.category}>
              <h4 className="project-card__block-title">{group.category}</h4>
              <ul className="project-card__details">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {phoneImages.length > 0 && (
            <div className="project-card__block">
              <div className="project-card__phones">
                {phoneImages.map((image) => (
                  <div className="project-card__phone-frame" key={image.label}>
                    <ImagePlaceholder label={image.label} ratio={image.ratio} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {wideImages.length > 0 && (
            <div className="project-card__block project-card__wides">
              {wideImages.map((image) => (
                <ImagePlaceholder key={image.label} label={image.label} ratio={image.ratio} />
              ))}
            </div>
          )}

          {gridImages.length > 0 && (
            <div className="project-card__block">
              <div className="project-card__images">
                {gridImages.map((image) => (
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
