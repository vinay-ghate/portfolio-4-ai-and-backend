// Static portfolio data for GitHub Pages deployment
export const educationData = [
  { institution: "Zeal College of Engineering, Pune University", degree: "B.E. in Computer Engineering + Honors in Cyber Security (CGPA: 8.41)", period: "2020 – 2024" },
  { institution: "TuljaTuljaram Chaturchand College of Arts, Science and Commerce", degree: "Higher Secondary Certificate (HSC)", period: "2018 – 2020" },
  { institution: "Vidya Pratishthan's Marathi Medium School", degree: "Secondary School Certificate (SSC)", period: "2008 – 2018" },
];

export const researchData: { title: string; authors: string; venue: string; year: string; link: string }[] = [
  {
    title: "QML Powered Interface for Diffusion Imaging",
    authors: "Vinay Ghate",
    venue: "International Journal of Scientific Research in Computer Science and Engineering Techniques",
    year: "2024",
    link: "https://ijsrcseit.com/home/article/view/CSEIT2410329",
  },
];

export const interestsData = [
  { icon: "🤖", title: "Agentic Systems", desc: "Building MCP tool-using agents and LangGraph stateful workflows" },
  { icon: "⚡", title: "RAG & Streaming", desc: "Optimizing semantic retrieval, vector search, and streaming event pipelines" },
  { icon: "☁️", title: "Cloud & Kubernetes", desc: "Deploying high-throughput Kafka and microservices on production K8s" },
];

export const heroPhrases = [
  "Building agentic AI and RAG systems",
  "Designing stateful LangGraph workflows",
  "Integrating MCP tools, memory & vector databases",
  "Deploying production AI on Kafka & Kubernetes",
];

const assetUrl = (p: string) => `${(import.meta.env.BASE_URL || "/").replace(/\/$/, "")}/${p.replace(/^\//, "")}`;

export const portfolioData = {
  personalInfo: {
    id: 1,
    name: "Vinay Ghate",
    role: "AI & Backend Engineer",
    bio: "Python AI engineer with 2 years of experience building agentic AI, LangGraph workflows, and RAG systems integrated with vector databases and production Kafka/Kubernetes foundations.",
    email: "ghatevinay2@gmail.com",
    phone: "+91-8605078054",
    github: "https://github.com/vinay-ghate",
    linkedin: "https://linkedin.com/in/vinay-ghate",
    location: "Pune, India",
    avatarUrl: assetUrl("images/profile_re.webp"),
    resumeUrl: "https://v1nay.is-a.dev/resume/",
    facebook: "",
    instagram: "https://www.instagram.com/vinay_ghate/",
    medium: "https://medium.com/@v1nay",
  },
  experiences: [
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
        "Tech: Python, Caching, Event-Driven Architecture, REST APIs",
      ],
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
        "Tech: Django, REST APIs, Python, PostgreSQL",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "InterVivy - AI-Powered Voice Interviewing Platform",
      description:
        "AI-powered hiring platform streamlining recruitment by automating voice-based interviews. Generates tailored questions from job descriptions and orchestrates conversational voice interviews that adapt dynamically to candidate responses, delivering detailed scoring and insights in a centralized recruiter dashboard.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Clerk",
        "Supabase",
        "Gemini AI",
        "Retell AI",
      ],
      link: "https://v1nay.is-a.dev",
    },
    {
      id: 2,
      title: "Nexyn - Cognitive Memory Middleware for AI Agents",
      description:
        "Stateful memory middleware for AI agents featuring a four-layer pipeline (sensory buffer, evaluator, consolidator, decay). Leverages LLM scoring to decay trivial memories and reinforce recalled entries, improving recall relevance by 25%.",
      techStack: [
        "Python",
        "FastAPI",
        "asyncio",
        "PostgreSQL",
        "Cognee",
        "NVIDIA NIM",
        "Llama 3.1",
      ],
      link: "https://github.com/vinay-ghate/nexyn-core",
    },
    {
      id: 3,
      title: "TalkWithDB - Agentic NL2SQL Engine",
      description:
        "Autonomous agent executing natural language SQL queries on dynamic database schemas. Achieves 88% execution accuracy while cutting token usage by 35% and enforcing strict write-blocking guardrails.",
      techStack: [
        "Python",
        "LangGraph",
        "Gemini API",
        "Streamlit",
        "SQL",
        "Guardrails",
      ],
      link: "https://github.com/vinay-ghate/TalkWithDB-AI-Agent",
    },
    {
      id: 4,
      title: "Chikistalaya - AI Healthcare Platform",
      description:
        "AI healthcare platform providing LLM workflows with strict data isolation, access control, and tool integrations for provider lookup and cost comparison.",
      techStack: [
        "Python",
        "TypeScript",
        "SQL",
        "Docker",
        "HuggingFace",
        "Google Maps API",
      ],
      link: "https://github.com/vinay-ghate/Chikistalaya",
    },
  ],
  skills: [
    {
      id: 1,
      category: "Languages",
      items: ["Python", "SQL", "Bash", "Java", "TypeScript"],
    },
    {
      id: 2,
      category: "Backend",
      items: [
        "FastAPI",
        "Django",
        "Flask",
        "REST APIs",
        "asyncio",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      id: 3,
      category: "GenAI & LLM",
      items: [
        "LangGraph",
        "LangChain",
        "CrewAI",
        "MCP (Model Context Protocol)",
        "Tool Calling",
        "RAG Pipelines",
        "Agent Memory",
        "OpenAI API",
        "Gemini API",
        "NVIDIA NIM",
      ],
    },
    {
      id: 4,
      category: "Vector & Search",
      items: [
        "ChromaDB",
        "FAISS",
        "Semantic Search",
        "Vector Embeddings",
        "Hybrid Search",
      ],
    },
    {
      id: 5,
      category: "Data & Infra",
      items: [
        "Apache Kafka",
        "Kubernetes",
        "Helm",
        "Strimzi",
        "Docker",
        "Prometheus",
      ],
    },
    {
      id: 6,
      category: "Cloud & Security",
      items: [
        "Azure",
        "AWS",
        "GCP APIs",
        "mTLS",
        "Data Governance",
        "Cyber Security",
      ],
    },
    {
      id: 7,
      category: "Tools",
      items: ["Git", "Linux", "CI/CD", "n8n", "Zapier", "Confluence API", "Jira API"],
    },
  ],
  blogs: [
    {
      id: 1,
      title: "Nexyn: The AI Memory Layer That Actually Thinks About What to Remember",
      description: "A deep dive into building Nexyn, a cognitive memory middleware that gives AI agents human-like memory hierarchy using sensory buffers, LLM scoring, consolidation, and memory decay.",
      thumbnail: assetUrl("images/nexyn blog.png"),
      thumbnailWidth: 1200,
      thumbnailHeight: 630,
      externalLink: "https://v1nay.medium.com/nexyn-the-ai-memory-layer-that-actually-thinks-about-what-to-remember-567c35f1dfeb",
      platform: "Medium",
      date: "2026-03-01",
      tags: ["AI", "Agentic AI", "LLM", "Memory", "Python", "FastAPI"]
    },
    {
      id: 2,
      title: "How I Hosted n8n for Free Using Oracle Cloud, DigitalPlat Domain, Cloudflare Tunnel, and Docker",
      description: "A comprehensive step-by-step guide to hosting a free, self-hosted n8n automation workflow instance using Oracle Cloud Always Free tier, Cloudflare Tunnels, custom domains, and Docker Compose.",
      thumbnail: assetUrl("images/n8n.png"),
      thumbnailWidth: 1200,
      thumbnailHeight: 630,
      externalLink: "https://v1nay.medium.com/how-i-hosted-n8n-for-free-using-oracle-cloud-digitalplat-domain-cloudflare-tunnel-and-docker-0ce92bab7b7b",
      platform: "Medium",
      date: "2026-02-15",
      tags: ["n8n", "Automation", "Docker", "Cloudflare", "Oracle Cloud", "DevOps"]
    }
  ],
};
