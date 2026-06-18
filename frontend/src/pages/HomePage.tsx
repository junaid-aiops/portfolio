import WhatIDoSection from "../components/about/WhatIDoSection";
import ContactSection from "../components/contact/ContactSection";
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
      <ContactSection />
    </main>
  );
}

export default HomePage;