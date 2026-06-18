import {
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

import { experiences } from "../../data/experience";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <div className="container">
        <p className="section-label">
          03 / Experience
        </p>

        <div className="experience-section__introduction">
          <h2>
            Professional experience across software, automation,
            and applied AI.
          </h2>

          <p>
            My previous role included practical work across RAG,
            n8n automation, frontend implementation, and Umbraco
            CMS-based client projects.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience) => (
            <article
              className="experience-item"
              key={experience.id}
            >
              <div className="experience-item__period">
                <BriefcaseBusiness
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>{experience.period}</span>
              </div>

              <div className="experience-item__content">
                <div className="experience-item__heading">
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>

                <p className="experience-item__summary">
                  {experience.summary}
                </p>

                <ul className="experience-item__responsibilities">
                  {experience.responsibilities.map(
                    (responsibility) => (
                      <li key={responsibility}>
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>

                <p className="experience-item__technologies">
                  {experience.technologies.join(" · ")}
                </p>

                {experience.clientContribution && (
                  <div className="client-contribution">
                    <p className="client-contribution__label">
                      Selected client contribution
                    </p>

                    <div className="client-contribution__heading">
                      <div>
                        <h4>
                          {experience.clientContribution.name}
                        </h4>

                        <p>
                          {
                            experience.clientContribution
                              .description
                          }
                        </p>
                      </div>

                      <a
                        href={
                          experience.clientContribution.liveUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${experience.clientContribution.name}`}
                      >
                        <ArrowUpRight
                          size={21}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </a>
                    </div>

                    <p className="client-contribution__credit">
                      {
                        experience.clientContribution
                          .creditLine
                      }
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;