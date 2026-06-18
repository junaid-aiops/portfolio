import {
  ArrowUpRight,
  Download,
  GitBranch,
  Mail,
} from "lucide-react";

import "./ContactSection.css";

function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">04 / Contact</p>

        <div className="contact-section__layout">
          <div className="contact-section__introduction">
            <p className="contact-section__eyebrow">
              Available for software opportunities
            </p>

            <h2>
              Let&apos;s build useful software with Python and
              practical AI.
            </h2>

            <p className="contact-section__description">
              I&apos;m currently looking for opportunities in Python
              backend development, FastAPI, RAG applications, AI
              automation, and agent-based workflows.
            </p>

            <p className="contact-section__location">
              Kerala, India · Open to Bangalore and remote
              opportunities
            </p>
          </div>

          <div className="contact-section__links">
            <a
              className="contact-link"
              href="mailto:muhammedjunaid2026@gmail.com"
              aria-label="Send an email to Muhammed Junaid"
            >
              <div className="contact-link__identity">
                <Mail
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>Email</span>
                  <p>muhammedjunaid2026@gmail.com</p>
                </div>
              </div>

              <ArrowUpRight
                className="contact-link__arrow"
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>

            <a
              className="contact-link"
              href="https://github.com/junaid-aiops"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Muhammed Junaid's GitHub profile"
            >
              <div className="contact-link__identity">
                <GitBranch
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>GitHub</span>
                  <p>github.com/junaid-aiops</p>
                </div>
              </div>

              <ArrowUpRight
                className="contact-link__arrow"
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/muhammed-junaid-98156634b"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Muhammed Junaid's LinkedIn profile"
            >
              <div className="contact-link__identity">
                <span className="linkedin-mark" aria-hidden="true">
                  in
                </span>

                <div>
                  <span>LinkedIn</span>
                  <p>
                    linkedin.com/in/muhammed-junaid-98156634b
                  </p>
                </div>
              </div>

              <ArrowUpRight
                className="contact-link__arrow"
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>

            <a
              className="contact-link"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="View or download Muhammed Junaid's resume"
            >
              <div className="contact-link__identity">
                <Download
                  size={20}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div>
                  <span>Resume</span>
                  <p>View or download my resume</p>
                </div>
              </div>

              <ArrowUpRight
                className="contact-link__arrow"
                size={22}
                strokeWidth={1.7}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <footer className="contact-section__footer">
          <p>© {currentYear} Muhammed Junaid P.</p>

          <div className="contact-section__footer-links">
            <a
              href="https://github.com/junaid-aiops"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/muhammed-junaid-98156634b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:muhammedjunaid2026@gmail.com">
              Email
            </a>
          </div>

          <p>Python Backend · FastAPI · RAG · AI Automation</p>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;