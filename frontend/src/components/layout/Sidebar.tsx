import {
  BriefcaseBusiness,
  Download,
  FolderGit2,
  GitBranch,
  History,
  House,
  Mail,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  SquarePen,
  X,
} from "lucide-react";

import "./Sidebar.css";

type SidebarProps = {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onDesktopToggle: () => void;
  onMobileClose: () => void;
};

function Sidebar({
  isCollapsed,
  isMobileOpen,
  onDesktopToggle,
  onMobileClose,
}: SidebarProps) {
  return (
    <aside
      className={`sidebar ${isCollapsed ? "sidebar--collapsed" : ""} ${
        isMobileOpen ? "sidebar--mobile-open" : ""
      }`}
    >
      <div className="sidebar__main">
        <div className="sidebar__header">
          <a className="sidebar__brand" href="#home" onClick={onMobileClose}>
            <span className="sidebar__brand-icon">J</span>

            {!isCollapsed && (
              <span className="sidebar__brand-text">Junaid</span>
            )}
          </a>

          <button
            className="sidebar__collapse-button"
            type="button"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={onDesktopToggle}
          >
            {isCollapsed ? (
              <PanelLeftOpen size={20} strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <PanelLeftClose size={20} strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>

          <button
            className="sidebar__mobile-close"
            type="button"
            aria-label="Close sidebar"
            onClick={onMobileClose}
          >
            <X size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <button className="sidebar__new-chat" type="button">
          <SquarePen
            className="sidebar__item-icon"
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          {!isCollapsed && (
            <span className="sidebar__item-label">New Chat</span>
          )}
        </button>

        <button className="sidebar__search" type="button">
          <Search
            className="sidebar__item-icon"
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          {!isCollapsed && <span className="sidebar__item-label">Search</span>}
        </button>

        <nav className="sidebar__navigation" aria-label="Portfolio navigation">
          <a href="#home" onClick={onMobileClose}>
            <House
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && <span className="sidebar__item-label">Home</span>}
          </a>

          <a href="#what-i-do" onClick={onMobileClose}>
            <BriefcaseBusiness
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && (
              <span className="sidebar__item-label">Capabilities</span>
            )}
          </a>

          <a href="#projects" onClick={onMobileClose}>
            <FolderGit2
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && (
              <span className="sidebar__item-label">Selected Work</span>
            )}
          </a>

          <a href="#experience" onClick={onMobileClose}>
            <History
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && (
              <span className="sidebar__item-label">Experience</span>
            )}
          </a>

          <a href="#contact" onClick={onMobileClose}>
            <Mail
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && (
              <span className="sidebar__item-label">Contact</span>
            )}
          </a>
        </nav>
      </div>

      <div className="sidebar__footer">
        <a className="sidebar__resume" href="/resume.pdf" download>
          <Download
            className="sidebar__item-icon"
            size={20}
            strokeWidth={1.8}
            aria-hidden="true"
          />

          {!isCollapsed && (
            <span className="sidebar__item-label">Download Resume</span>
          )}
        </a>

        <div className="sidebar__footer-links">
          <a
            href="https://github.com/junaid-aiops"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
          >
            <GitBranch
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && (
              <span className="sidebar__item-label">GitHub</span>
            )}
          </a>

          <a href="mailto:muhammedjunaid2026@gmail.com" aria-label="Send email">
            <Mail
              className="sidebar__item-icon"
              size={20}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            {!isCollapsed && <span className="sidebar__item-label">Email</span>}
          </a>
        </div>

        {!isCollapsed && (
          <p className="sidebar__copyright">© 2026 Muhammed Junaid P.</p>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;