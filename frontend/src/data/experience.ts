export type Experience = {
  id: number;
  period: string;
  role: string;
  company: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  clientContribution?: {
    name: string;
    description: string;
    creditLine: string;
    liveUrl: string;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    period: "July 2024 — January 2026",
    role: "Software Engineer — AI/ML & Automation",
    company: "NicorAI Systems Pvt Ltd / 27 Technologies Pvt Ltd",
    summary:
      "Worked across AI/ML assignments, RAG systems, automation workflows, frontend development, and CMS-based client projects.",
    responsibilities: [
      "Contributed to a RAG system using document loading, chunking, embeddings, vector retrieval, and LLM response generation.",
      "Built and supported AI automation workflows using n8n and API integrations.",
      "Contributed to frontend and backend implementation using AI-assisted development tools.",
      "Worked with Umbraco CMS and Gulp-based frontend workflows.",
      "Created simple interface layouts and design references using Figma.",
    ],
    technologies: [
      "Python",
      "RAG",
      "n8n",
      "Umbraco CMS",
      "JavaScript",
      "Gulp",
      "Figma",
    ],
    clientContribution: {
      name: "Lungarno Collection",
      description:
        "Contributed to frontend and Umbraco CMS-related development for an Italian luxury hospitality platform.",
      creditLine: "Contributed through NicorAI Systems Pvt Ltd.",
      liveUrl: "https://www.lungarnocollection.com/",
    },
  },
];