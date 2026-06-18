import { ArrowUpRight } from "lucide-react";

import { services } from "../../data/services";
import "./WhatIDoSection.css";

function WhatIDoSection() {
  return (
    <section id="what-i-do" className="capabilities-section">
      <div className="container">
        <p className="section-label">01 / Capabilities</p>

        <div className="capabilities-section__layout">
          <div className="capabilities-section__introduction">
            <h2>
              I build reliable Python backends and practical AI applications.
            </h2>

            <p>
              My work includes FastAPI development, RAG systems, AI automation,
              agent workflows, and frontend implementation.
            </p>
          </div>

          <div className="capabilities-section__list">
            {services.map((service) => (
              <article className="capability-row" key={service.id}>
                <div className="capability-row__number">{service.number}</div>

                <div className="capability-row__content">
                  <div className="capability-row__heading">
                    <h3>{service.title}</h3>

                    <ArrowUpRight
                      className="capability-row__arrow"
                      size={21}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="capability-row__description">
                    {service.description}
                  </p>

                  <p className="capability-row__technologies">
                    {service.technologies.join(" · ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDoSection;