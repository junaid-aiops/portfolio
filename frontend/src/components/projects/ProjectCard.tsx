import {
  ExternalLink,
  GitBranch,
} from "lucide-react";

import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  isWide?: boolean;
};

function ProjectCard({
  project,
  isWide = false,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card ${
        isWide ? "project-card--wide" : ""
      }`}
    >
      {project.imageUrl && (
        <a
          className="project-card__image-link"
          href={project.liveUrl ?? project.githubUrl ?? "#"}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.shortTitle}`}
        >
          <div className="project-card__image-wrapper">
            <img
              className="project-card__image"
              src={project.imageUrl}
              alt={`${project.shortTitle} project preview`}
              loading="lazy"
            />
          </div>
        </a>
      )}

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.number}</span>
          <span>{project.projectType}</span>
          <span>{project.status}</span>
        </div>

        <h3>{project.shortTitle}</h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__role">
          <span>My contribution</span>
          <p>{project.role}</p>
        </div>

        {project.creditLine && (
          <p className="project-card__credit">
            {project.creditLine}
          </p>
        )}

        <p className="project-card__technologies">
          {project.technologies.join(" · ")}
        </p>

        <div className="project-card__actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit website
              <ExternalLink
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View repository
              <GitBranch
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;