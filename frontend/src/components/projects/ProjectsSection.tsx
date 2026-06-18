import {
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

function ProjectsSection() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const secondaryProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="container">
        <p className="section-label">
          02 / Selected Work
        </p>

        <div className="projects-section__introduction">
          <h2>
            Selected work built around real products and business needs.
          </h2>

          <p>
            A combination of completed business websites,
            professional client contributions, and current
            Python and GenAI products.
          </p>
        </div>

        {featuredProject && (
          <article className="featured-project">
            {featuredProject.imageUrl && (
              <a
                className="featured-project__image-link"
                href={
                  featuredProject.liveUrl ??
                  featuredProject.githubUrl ??
                  "#"
                }
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${featuredProject.shortTitle}`}
              >
                <div className="featured-project__image-wrapper">
                  <img
                    className="featured-project__image"
                    src={featuredProject.imageUrl}
                    alt={`${featuredProject.shortTitle} website preview`}
                  />
                </div>
              </a>
            )}

            <div className="featured-project__content">
              <div className="featured-project__meta">
                <span>{featuredProject.number}</span>
                <span>Featured project</span>
                <span>{featuredProject.status}</span>
              </div>

              <h3>{featuredProject.shortTitle}</h3>

              <p className="featured-project__description">
                {featuredProject.description}
              </p>

              <div className="featured-project__role">
                <span>My contribution</span>
                <p>{featuredProject.role}</p>
              </div>

              <p className="featured-project__technologies">
                {featuredProject.technologies.join(" · ")}
              </p>

              <div className="featured-project__actions">
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
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

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
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
        )}

        <div className="projects-section__grid">
          {secondaryProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isWide={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;