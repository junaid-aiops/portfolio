import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  function toggleDesktopSidebar() {
    setIsSidebarCollapsed((currentValue) => !currentValue);
  }

  function toggleMobileSidebar() {
    setIsMobileSidebarOpen((currentValue) => !currentValue);
  }

  function closeMobileSidebar() {
    setIsMobileSidebarOpen(false);
  }

  return (
    <div
      className={`app-layout ${
        isSidebarCollapsed ? "app-layout--collapsed" : ""
      }`}
    >
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onDesktopToggle={toggleDesktopSidebar}
        onMobileClose={closeMobileSidebar}
      />

      {isMobileSidebarOpen && (
        <button
          className="sidebar-overlay"
          type="button"
          aria-label="Close sidebar"
          onClick={closeMobileSidebar}
        />
      )}

      <div className="app-layout__content">
        <header className="mobile-header">
          <button
            className="mobile-header__menu-button"
            type="button"
            aria-label="Open sidebar"
            onClick={toggleMobileSidebar}
          >
            ☰
          </button>

          <span className="mobile-header__brand">Junaid</span>
        </header>

        <HomePage />
      </div>
    </div>
  );
}

export default App;