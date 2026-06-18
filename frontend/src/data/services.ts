export type Service = {
  id: number;
  number: string;
  title: string;
  description: string;
  technologies: string[];
};

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Python Backend Development",
    description:
      "Structured backend applications and REST APIs designed around real business workflows.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs"],
  },
  {
    id: 2,
    number: "02",
    title: "RAG Applications",
    description:
      "Retrieval systems that answer questions using approved documents and knowledge sources.",
    technologies: [
      "Embeddings",
      "Vector Databases",
      "Retrieval",
      "LLM APIs",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "AI Automation",
    description:
      "AI-assisted workflows connecting APIs, business processes, and automation tools.",
    technologies: ["n8n", "API Integration", "OpenAI", "Gemini"],
  },
  {
    id: 4,
    number: "04",
    title: "Agentic Workflows",
    description:
      "Building stateful AI workflows with tool calling, decision routing, and human approval.",
    technologies: [
      "LangGraph",
      "LangChain",
      "Tool Calling",
      "Human-in-the-loop",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Frontend & CMS Development",
    description:
      "Responsive frontend implementation and CMS-based development for business websites.",
    technologies: [
      "React",
      "TypeScript",
      "Umbraco CMS",
      "Gulp",
      "Figma",
    ],
  },
];