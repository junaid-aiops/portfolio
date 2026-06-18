import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState(false);

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed((currentState) => !currentState);
  };

  const openMobileSidebar = () => {
    setIsMobileSidebarOpen(true);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div
      className={`app ${
        isSidebarCollapsed
          ? "app--sidebar-collapsed"
          : ""
      }`}
    >
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onToggleCollapse={toggleSidebarCollapse}
        onOpenMobile={openMobileSidebar}
        onCloseMobile={closeMobileSidebar}
      />

      <main className="app__main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;