import { useEffect, useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState(false);

  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileSidebarOpen]);

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
        onToggleCollapse={() =>
          setIsSidebarCollapsed((current) => !current)
        }
        onOpenMobile={() =>
          setIsMobileSidebarOpen(true)
        }
        onCloseMobile={() =>
          setIsMobileSidebarOpen(false)
        }
      />

      <main className="app__main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;