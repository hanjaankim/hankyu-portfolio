import { useEffect, useId } from "react";
import ImageGroup from "./ImageGroup";
import ProjectStats from "./ProjectStats";
import useReveal from "../../hooks/useReveal";
import "./ProjectCard.css";

function ProjectCard({ project, isOpen, onToggle }) {
  const panelId = useId();
  const [ref, isVisible] = useReveal();

  useEffect(() => {
    if (isOpen) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen, ref]);

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
        onClick={onToggle}
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
          {(project.url || project.appLinks) && (
            <div className="project-card__link-row">
              {project.url && (
                <a
                  className="project-card__link-button"
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.url}
                </a>
              )}
              {project.appLinks?.ios && (
                <a
                  className="project-card__link-button"
                  href={project.appLinks.ios}
                  target="_blank"
                  rel="noreferrer"
                >
                  App Store
                </a>
              )}
              {project.appLinks?.android && (
                <a
                  className="project-card__link-button"
                  href={project.appLinks.android}
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Play
                </a>
              )}
            </div>
          )}

          {project.background && (
            <div className="project-card__block">
              <h4 className="project-card__block-title">배경</h4>
              <p className="project-card__background">{project.background}</p>
            </div>
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

          {project.imageGroups?.map((group) => (
            <ImageGroup
              key={group.title ?? group.type}
              title={group.title}
              type={group.type}
              items={group.items}
              framed={group.framed}
              showCaption={group.showCaption}
              sections={group.sections}
            />
          ))}

          <ProjectStats stats={project.stats} />

          {project.outcome && (
            <div className="project-card__block">
              <h4 className="project-card__block-title">성과</h4>
              <p className="project-card__outcome">{project.outcome}</p>
            </div>
          )}

          {!project.outcome && project.expectedEffect && (
            <div className="project-card__block">
              <h4 className="project-card__block-title">기대효과</h4>
              <p className="project-card__outcome">{project.expectedEffect}</p>
            </div>
          )}
        </div>
      )}
    </li>
  );
}

export default ProjectCard;
