import aiassistantImage from "../assets/images/projects/aiassistant.webp";
import lungarnoImage from "../assets/images/projects/lungarno.webp";
import plumeTheoryImage from "../assets/images/projects/plumetheory.webp";
import plumeOsImage from "../assets/images/projects/plume-os.webp";

export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Planned";

export type ProjectType =
  | "Business Project"
  | "Personal Project"
  | "Portfolio Project"
  | "Client Contribution";

export type Project = {
  id: number;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  role: string;
  status: ProjectStatus;
  projectType: ProjectType;
  featured: boolean;
  technologies: string[];
  creditLine?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Plume Theory Wedding Portfolio",
    shortTitle: "Plume Theory",
    description:
      "A live website for a premium wedding photography and cinematography brand. The platform presents selected wedding stories, brand information, testimonials, and enquiry channels through a responsive visual experience.",
    role:
      "Frontend development, responsive implementation, Gulp-based asset workflow, content integration, and deployment support.",
    status: "Completed",
    projectType: "Business Project",
    featured: true,
    technologies: [
      "HTML",
      "Less",
      "JavaScript",
      "Gulp",
      "Responsive Design",
      "Image Optimization",
    ],
    imageUrl: plumeTheoryImage,
    githubUrl: "https://github.com/junaid-aiops/plumetheory",
    liveUrl: "https://plumetheory.com/",
  },
  {
    id: 2,
    number: "02",
    title: "Lungarno Collection — Umbraco CMS Contribution",
    shortTitle: "Lungarno Collection",
    description:
      "Contributed to frontend and CMS-related development for an Italian luxury hospitality platform while working with my previous company. Supported CMS-based page implementation, frontend updates, and interface-related tasks.",
    role:
      "Umbraco CMS development, frontend implementation, Gulp-based workflow support, responsive updates, and simple Figma-based interface work.",
    status: "Completed",
    projectType: "Client Contribution",
    featured: false,
    technologies: [
      "Umbraco CMS",
      "HTML",
      "CSS",
      "JavaScript",
      "Gulp",
      "Figma",
      "Responsive Design",
    ],
    creditLine: "Contributed through NicorAI Systems Pvt Ltd.",
    imageUrl: lungarnoImage,
    liveUrl: "https://www.lungarnocollection.com/",
  },
  {
    id: 3,
    number: "03",
    title: "Junaid AI Portfolio Assistant",
    shortTitle: "AI Portfolio Assistant",
    description:
      "A recruiter-focused portfolio with a conversational assistant that will answer grounded questions about my professional experience, technical skills, and projects.",
    role:
      "Frontend architecture, React interface development, FastAPI backend planning, RAG implementation, and agent workflow design.",
    status: "In Progress",
    projectType: "Portfolio Project",
    featured: false,
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "RAG",
      "Vector Database",
      "LangGraph",
    ],
    imageUrl: aiassistantImage,
    liveUrl: "https://www.junaid.ai/",
  },
  {
    id: 4,
    number: "04",
    title: "Plume Studio OS",
    shortTitle: "Plume Studio OS",
    description:
      "A wedding studio management system for handling enquiries, clients, quotations, invoices, payments, event reminders, and future AI-assisted business workflows.",
    role:
      "Backend architecture, Python development, API design, database planning, and AI workflow integration.",
    status: "In Progress",
    projectType: "Personal Project",
    featured: false,
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST API",
      "RAG",
      "LangGraph",
    ],
    imageUrl: plumeOsImage,
    githubUrl: "https://github.com/junaid-aiops/plume-os",
  },
];