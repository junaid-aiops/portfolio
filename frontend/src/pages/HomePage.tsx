import WhatIDoSection from "../components/about/WhatIDoSection";
import ExperienceSection from "../components/experience/ExperienceSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/projects/ProjectsSection";

function HomePage() {
  return (
    <main id="home">
      <HeroSection />
      <WhatIDoSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}

export default HomePage;