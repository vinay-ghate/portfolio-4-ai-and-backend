import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { specs, swaggerUi } from "./swagger";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Swagger API Documentation
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Portfolio API Docs"
  }));

  // API Endpoints with Swagger documentation
  /**
   * @openapi
   * /api/experiences:
   *   get:
   *     summary: Get all experiences
   *     description: Returns a list of all professional experiences
   *     tags:
   *       - Experiences
   *     responses:
   *       200:
   *         description: List of experiences
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Experience'
   */
  app.get(api.experiences.list.path, async (_req, res) => {
    const data = await storage.getExperiences();
    res.json(data);
  });

  /**
   * @openapi
   * /api/projects:
   *   get:
   *     summary: Get all projects
   *     description: Returns a list of all projects
   *     tags:
   *       - Projects
   *     responses:
   *       200:
   *         description: List of projects
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Project'
   */
  app.get(api.projects.list.path, async (_req, res) => {
    const data = await storage.getProjects();
    res.json(data);
  });

  /**
   * @openapi
   * /api/skills:
   *   get:
   *     summary: Get all skills
   *     description: Returns a list of all skills by category
   *     tags:
   *       - Skills
   *     responses:
   *       200:
   *         description: List of skills
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Skill'
   */
  app.get(api.skills.list.path, async (_req, res) => {
    const data = await storage.getSkills();
    res.json(data);
  });

  /**
   * @openapi
   * /api/personal-info:
   *   get:
   *     summary: Get personal information
   *     description: Returns personal information and contact details
   *     tags:
   *       - Personal Info
   *     responses:
   *       200:
   *         description: Personal information
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/PersonalInfo'
   */
  app.get(api.personalInfo.get.path, async (_req, res) => {
    const data = await storage.getPersonalInfo();
    res.json(data);
  });

  /**
   * @openapi
   * /api/blogs:
   *   get:
   *     summary: Get all blog posts
   *     description: Returns a list of all blog posts
   *     tags:
   *       - Blog
   *     responses:
   *       200:
   *         description: List of blog posts
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Blog'
   */
  app.get("/api/blogs", async (_req, res) => {
    const data = await storage.getBlogs();
    res.json(data);
  });

  // Seed Data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  if (!process.env.DATABASE_URL) {
    console.log("⏭️  Skipping database seed (no DATABASE_URL)");
    return;
  }

  const existingInfo = await storage.getPersonalInfo();
  if (!existingInfo) {
    console.log("Seeding database...");

    await storage.createPersonalInfo({
      name: "Vinay Ghate",
      role: "AI & Backend Engineer",
      bio: "Python AI engineer with 2 years of experience building agentic AI, LangGraph workflows, and RAG systems integrated with vector databases and production Kafka/Kubernetes foundations.",
      email: "ghatevinay2@gmail.com",
      phone: "+91-8605078054",
      github: "https://github.com/vinay-ghate",
      linkedin: "https://linkedin.com/in/vinay-ghate",
      location: "Pune, India",
      avatarUrl: "/images/profile.jpg",
      resumeUrl: "https://v1nay.is-a.dev"
    });

    const expData = [
      {
        title: "System Engineer C1 (AI & Backend)",
        company: "IT Services & Consulting Firm",
        period: "Nov 2024 – Present",
        description: [
          "Cut project-context lookup time by 40% for 15+ engineers by building tool-using AI agents integrated with Confluence and Jira via MCP.",
          "Made 500+ team notes searchable through a RAG chat system with semantic retrieval.",
          "Deployed Strimzi Kafka on Kubernetes with Helm (1M+ events/sec) and secured inter-service traffic with mTLS.",
          "Reduced event-handling latency by 70% and raised throughput 2x by implementing a caching layer for network events."
        ]
      },
      {
        title: "Python Backend Engineering Intern",
        company: "Software Product Studio",
        period: "Jun 2024 – Nov 2024",
        description: [
          "Delivered 5+ GenAI and RAG proof-of-concepts with LLM APIs for client projects.",
          "Developed backend services and REST APIs for an AI-powered content system using Django."
        ]
      }
    ];

    for (const exp of expData) {
      await storage.createExperience(exp);
    }

    const projectData = [
      {
        title: "Nexyn - Cognitive Memory Middleware for AI Agents",
        description: "Stateful memory middleware for AI agents featuring a four-layer pipeline (sensory buffer, evaluator, consolidator, decay), scoring memory importance with an LLM and improving recall relevance by 25%.",
        techStack: ["Python", "FastAPI", "asyncio", "PostgreSQL", "Cognee", "NVIDIA NIM", "Llama 3.1"],
        link: "https://github.com/vinay-ghate/nexyn-core"
      },
      {
        title: "TalkWithDB - Agentic NL2SQL Engine",
        description: "Autonomous agent executing natural language SQL queries on dynamic database schemas with 88% execution accuracy while cutting token usage by 35%.",
        techStack: ["Python", "LangGraph", "Gemini API", "Streamlit", "SQL", "Guardrails"],
        link: "https://github.com/vinay-ghate/TalkWithDB-AI-Agent"
      },
      {
        title: "Chikistalaya - AI Healthcare Platform",
        description: "AI healthcare platform providing LLM workflows with strict data isolation, access control, and external tool integrations.",
        techStack: ["Python", "TypeScript", "SQL", "Docker", "HuggingFace", "Google Maps API"],
        link: "https://github.com/vinay-ghate/Chikistalaya"
      }
    ];

    for (const proj of projectData) {
      await storage.createProject(proj);
    }

    const skillData = [
      { category: "Languages", items: ["Python", "SQL", "Bash", "Java", "TypeScript"] },
      { category: "Backend", items: ["FastAPI", "Django", "Flask", "REST APIs", "asyncio", "PostgreSQL", "MySQL", "MongoDB"] },
      { category: "GenAI & LLM", items: ["LangGraph", "LangChain", "CrewAI", "MCP", "Tool Calling", "RAG Pipelines", "ChromaDB", "OpenAI API", "Gemini API", "NVIDIA NIM"] },
      { category: "Data & Infra", items: ["Apache Kafka", "Kubernetes", "Helm", "Strimzi", "Docker", "mTLS", "Prometheus"] },
      { category: "Tools", items: ["Git", "Linux", "CI/CD", "n8n", "Zapier", "Confluence API", "Jira API"] }
    ];

    for (const skill of skillData) {
      await storage.createSkill(skill);
    }

    console.log("Database seeded successfully!");
  }
}
