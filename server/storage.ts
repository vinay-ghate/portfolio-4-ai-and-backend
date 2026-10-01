import { 
  Experience, InsertExperience, 
  Project, InsertProject, 
  Skill, InsertSkill, 
  PersonalInfo, InsertPersonalInfo,
  experiences, projects, skills, personalInfo 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Mock data for development without database
const MOCK_PERSONAL_INFO: any = {
  id: 1,
  name: "Vinay Ghate",
  role: "AI & Backend Engineer",
  bio: "Python AI engineer with 2 years of experience building agentic AI, LangGraph workflows, and RAG systems integrated with vector databases and production Kafka/Kubernetes foundations.",
  email: "ghatevinay2@gmail.com",
  github: "https://github.com/vinay-ghate",
  linkedin: "https://linkedin.com/in/vinay-ghate",
  location: "Pune, India",
  avatarUrl: "https://avatars.githubusercontent.com/u/76932315?v=4",
  resumeUrl: "https://v1nay.is-a.dev"
};

const MOCK_BLOGS: any[] = [];

const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 1,
    title: "System Engineer C1 (AI & Backend)",
    company: "IT Services & Consulting Firm",
    period: "Nov 2024 – Present",
    description: [
      "Cut project-context lookup time by 40% for 15+ engineers by building tool-using AI agents integrated with Confluence and Jira via MCP, rolling out developer CLI tools.",
      "Tech: MCP, Tool Calling, LangGraph, Confluence API, Jira API, Python",
      "Made 500+ team notes and documentation searchable through a RAG chat system with semantic retrieval.",
      "Tech: RAG, ChromaDB, OpenAI Embeddings, Python, Vector Search",
      "Deployed Strimzi Kafka on Kubernetes with Helm (1M+ events/sec), secured inter-service traffic with mTLS, and built Prometheus dashboards for observability.",
      "Tech: Apache Kafka, Kubernetes, Helm, Strimzi, mTLS, Prometheus, Docker",
      "Reduced event-handling latency by 70% and raised throughput 2x by implementing a caching layer for high-volume network events.",
      "Tech: Python, Caching, Event-Driven Architecture, REST APIs"
    ]
  },
  {
    id: 2,
    title: "Python Backend Engineering Intern",
    company: "Software Product Studio",
    period: "Jun 2024 – Nov 2024",
    description: [
      "Delivered 5+ GenAI and RAG proof-of-concepts with LLM APIs for client projects, leading internal workshops on GenAI engineering.",
      "Tech: LLM APIs, RAG, LangChain, Python, Prompt Engineering",
      "Developed backend services and REST APIs for an AI-powered content system with automated webpage generation and publishing.",
      "Tech: Django, REST APIs, Python, PostgreSQL"
    ]
  }
];

const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nexyn - Cognitive Memory Middleware for AI Agents",
    description: "Stateful memory middleware for AI agents featuring a four-layer pipeline (sensory buffer, evaluator, consolidator, decay). Leverages LLM scoring to decay trivial memories and reinforce recalled entries, improving recall relevance by 25%.",
    techStack: ["Python", "FastAPI", "asyncio", "PostgreSQL", "Cognee", "NVIDIA NIM", "Llama 3.1"],
    link: "https://github.com/vinay-ghate/nexyn-core"
  },
  {
    id: 2,
    title: "TalkWithDB - Agentic NL2SQL Engine",
    description: "Autonomous agent executing natural language SQL queries on dynamic database schemas. Achieves 88% execution accuracy while cutting token usage by 35% and enforcing strict write-blocking guardrails.",
    techStack: ["Python", "LangGraph", "Gemini API", "Streamlit", "SQL", "Guardrails"],
    link: "https://github.com/vinay-ghate/TalkWithDB-AI-Agent"
  },
  {
    id: 3,
    title: "Chikistalaya - AI Healthcare Platform",
    description: "AI healthcare platform providing LLM workflows with strict data isolation, access control, and tool integrations for provider lookup and cost comparison.",
    techStack: ["Python", "TypeScript", "SQL", "Docker", "HuggingFace", "Google Maps API"],
    link: "https://github.com/vinay-ghate/Chikistalaya"
  }
];

const MOCK_SKILLS: Skill[] = [
  {
    id: 1,
    category: "Languages",
    items: ["Python", "SQL", "Bash", "Java", "TypeScript"]
  },
  {
    id: 2,
    category: "Backend",
    items: ["FastAPI", "Django", "Flask", "REST APIs", "asyncio", "PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    id: 3,
    category: "GenAI & LLM",
    items: ["LangGraph", "LangChain", "CrewAI", "MCP (Model Context Protocol)", "Tool Calling", "RAG Pipelines", "ChromaDB", "OpenAI API", "Gemini API", "NVIDIA NIM"]
  },
  {
    id: 4,
    category: "Data & Infra",
    items: ["Apache Kafka", "Kubernetes", "Helm", "Strimzi", "Docker", "mTLS", "Prometheus"]
  },
  {
    id: 5,
    category: "Tools",
    items: ["Git", "Linux", "CI/CD", "n8n", "Zapier", "Confluence API", "Jira API"]
  }
];

export const MOCK_EDUCATION = [
  {
    id: 1,
    institution: "Zeal College of Engineering, Pune University",
    degree: "B.E. in Computer Engineering + Honors in Cyber Security (CGPA: 8.41)",
    period: "2020 – 2024"
  }
];

export const MOCK_RESEARCH: any[] = [];

export interface IStorage {
  getExperiences(): Promise<Experience[]>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getPersonalInfo(): Promise<PersonalInfo | undefined>;
  
  createExperience(experience: InsertExperience): Promise<Experience>;
  createProject(project: InsertProject): Promise<Project>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo>;
}

export class DatabaseStorage implements IStorage {
  async getExperiences(): Promise<Experience[]> {
    if (!db) return MOCK_EXPERIENCES;
    return await db.select().from(experiences).orderBy(experiences.id);
  }

  async getProjects(): Promise<Project[]> {
    if (!db) return MOCK_PROJECTS;
    return await db.select().from(projects).orderBy(projects.id);
  }

  async getSkills(): Promise<Skill[]> {
    if (!db) return MOCK_SKILLS;
    return await db.select().from(skills).orderBy(skills.id);
  }

  async getPersonalInfo(): Promise<PersonalInfo | undefined> {
    if (!db) return MOCK_PERSONAL_INFO;
    const [info] = await db.select().from(personalInfo).limit(1);
    return info;
  }

  async getBlogs(): Promise<any[]> {
    if (!db) return MOCK_BLOGS;
    // Since there's no blogs table in the database, return mock data
    return MOCK_BLOGS;
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    if (!db) return experience as Experience;
    const [newExperience] = await db.insert(experiences).values(experience).returning();
    return newExperience;
  }

  async createProject(project: InsertProject): Promise<Project> {
    if (!db) return project as Project;
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    if (!db) return skill as Skill;
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async createPersonalInfo(info: InsertPersonalInfo): Promise<PersonalInfo> {
    if (!db) return info as PersonalInfo;
    const [newInfo] = await db.insert(personalInfo).values(info).returning();
    return newInfo;
  }
}

export const storage = new DatabaseStorage();
