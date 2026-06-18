import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  FolderOpen,
  GitBranch,
  Home,
  Mail,
  Menu,
  Plus,
  Search,
  X,
} from "lucide-react";

import "./Sidebar.css";

type SidebarProps = {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggleCollapse: () => void;
  onOpenMobile: () => void;
  onCloseMobile: () => void;
};

const navigationItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
    icon: Home,
  },
  {
    id: 2,
    label: "Capabilities",
    href: "#what-i-do",
    icon: Code2,
  },
  {
    id: 3,
    label: "Selected Work",
    href: "#projects",
    icon: FolderOpen,
  },
  {
    id: 4,
    label: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

function Sidebar({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onOpenMobile,
  onCloseMobile,
}: SidebarProps) {
  const currentYear = new Date().getFullYear();

  const handleInternalNavigation = () => {
    onCloseMobile();
  };

  const focusChatInput = () => {
    document
      .getElementById("home")
      ?.scrollIntoView({ behavior: "smooth" });

    onCloseMobile();

    window.setTimeout(() => {
      const chatInput =
        document.querySelector<HTMLInputElement>(
          ".chat-input__field"
        );

      chatInput?.focus();
    }, 400);
  };

  return (
    <>
      <button
        className="sidebar-mobile-trigger"
        type="button"
        onClick={onOpenMobile}
        aria-label="Open navigation menu"
        aria-expanded={isMobileOpen}
      >
        <Menu size={23} strokeWidth={1.8} />
      </button>

      {isMobileOpen && (
        <button
          className="sidebar-overlay"
          type="button"
          onClick={onCloseMobile}
          aria-label="Close navigation menu"
        />
      )}

      <aside
        className={[
          "sidebar",
          isCollapsed ? "sidebar--collapsed" : "",
          isMobileOpen ? "sidebar--mobile-open" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="sidebar__header">
          <a
            className="sidebar__brand"
            href="#home"
            onClick={handleInternalNavigation}
            aria-label="Go to portfolio home"
          >
            <span className="sidebar__brand-mark">J</span>

            <span className="sidebar__brand-copy">
              <strong>Junaid</strong>
              <small>AI Portfolio</small>
            </span>
          </a>

          <button
            className="sidebar__mobile-close"
            type="button"
            onClick={onCloseMobile}
            aria-label="Close navigation menu"
          >
            <X size={21} strokeWidth={1.8} />
          </button>
        </div>

        <nav
          className="sidebar__navigation"
          aria-label="Portfolio navigation"
        >
          <div className="sidebar__assistant-actions">
            <button
              className="sidebar__action sidebar__action--primary"
              type="button"
              onClick={focusChatInput}
              title={isCollapsed ? "New Chat" : undefined}
            >
              <Plus size={19} strokeWidth={1.8} />

              <span className="sidebar__link-label">
                New Chat
              </span>
            </button>

            <button
              className="sidebar__action"
              type="button"
              onClick={focusChatInput}
              title={isCollapsed ? "Search" : undefined}
            >
              <Search size={19} strokeWidth={1.8} />

              <span className="sidebar__link-label">
                Search
              </span>
            </button>
          </div>

          <div className="sidebar__divider" />

          <div className="sidebar__nav-list">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className="sidebar__nav-link"
                  href={item.href}
                  key={item.id}
                  onClick={handleInternalNavigation}
                  title={
                    isCollapsed ? item.label : undefined
                  }
                >
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />

                  <span className="sidebar__link-label">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>
        </nav>

        <div className="sidebar__bottom">
          <a
            className="sidebar__resume-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            title={
              isCollapsed ? "Download Resume" : undefined
            }
            aria-label="View or download Muhammed Junaid's resume"
          >
            <Download
              size={19}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span className="sidebar__link-label">
              Download Resume
            </span>
          </a>

          <div className="sidebar__external-links">
            <a
              className="sidebar__external-link"
              href="https://github.com/junaid-aiops"
              target="_blank"
              rel="noreferrer"
              title={isCollapsed ? "GitHub" : undefined}
              aria-label="Visit Muhammed Junaid's GitHub profile"
            >
              <GitBranch
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span className="sidebar__link-label">
                GitHub
              </span>
            </a>

            <a
              className="sidebar__external-link"
              href="https://www.linkedin.com/in/muhammed-junaid-98156634b"
              target="_blank"
              rel="noreferrer"
              title={isCollapsed ? "LinkedIn" : undefined}
              aria-label="Visit Muhammed Junaid's LinkedIn profile"
            >
              <span
                className="sidebar__linkedin-mark"
                aria-hidden="true"
              >
                in
              </span>

              <span className="sidebar__link-label">
                LinkedIn
              </span>
            </a>

            <a
              className="sidebar__external-link"
              href="mailto:muhammedjunaid2026@gmail.com"
              title={isCollapsed ? "Email" : undefined}
              aria-label="Send an email to Muhammed Junaid"
            >
              <Mail
                size={19}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <span className="sidebar__link-label">
                Email
              </span>
            </a>
          </div>

          <p className="sidebar__copyright">
            © {currentYear} Muhammed Junaid P.
          </p>
        </div>

        <button
          className="sidebar__collapse-button"
          type="button"
          onClick={onToggleCollapse}
          aria-label={
            isCollapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
          title={
            isCollapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >
          {isCollapsed ? (
            <ChevronRight
              size={18}
              strokeWidth={1.8}
            />
          ) : (
            <ChevronLeft
              size={18}
              strokeWidth={1.8}
            />
          )}
        </button>
      </aside>
    </>
  );
}

export default Sidebar;