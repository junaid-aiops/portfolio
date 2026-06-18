import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <p className="hero-section__label">
          Junaid’s AI Portfolio Assistant
        </p>

        <h1 className="hero-section__title">
          Hey, I’m Junaid’s personal AI assistant.
        </h1>

        <p className="hero-section__description">
          Ask me about his experience, technical skills, projects, and work
          across Python backend development, FastAPI, RAG applications, AI
          automation, and agent-based workflows.
        </p>

        <div className="hero-section__assistant">
          <ChatInput />
          <SuggestedQuestions />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;