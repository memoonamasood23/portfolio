export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "generative-ai",
    name: "Generative AI & LLMs",
    description: "Core specialization in modern Foundation Models, agentic workflows, and fine-tuning.",
    iconName: "Sparkles",
    skills: [
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "LLM Fine-tuning",
      "RAG",
      "AI Agents",
      "AI Chatbots",
      "Google Gemini",
      "LLaMA"
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Theoretical and applied machine learning, neural architectures, and vision systems.",
    iconName: "BrainCircuit",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Model Evaluation"
    ]
  },
  {
    id: "programming",
    name: "Programming Languages",
    description: "Multi-paradigm programming languages for high-performance computing and scripting.",
    iconName: "Code2",
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "JavaScript",
      "SQL"
    ]
  },
  {
    id: "web-dev",
    name: "Web & AI Backend",
    description: "Building resilient microservices, high-throughput APIs, and reactive interfaces.",
    iconName: "Layers",
    skills: [
      "FastAPI",
      "Node.js",
      "React",
      "Next.js"
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational data structures, document stores, and vector database foundations.",
    iconName: "Database",
    skills: [
      "SQL",
      "NoSQL"
    ]
  },
  {
    id: "ai-creative",
    name: "AI Creative & Video Tools",
    description: "Cinematic AI pipelines, audio synthesis, generative visuals, and post-production.",
    iconName: "Video",
    skills: [
      "Google Flow",
      "Runway ML",
      "CapCut AI",
      "ElevenLabs",
      "After Effects",
      "Getty Images",
      "Envato Elements"
    ]
  },
  {
    id: "automation",
    name: "Workflow Automation",
    description: "Automating multi-step AI triggers, webhooks, and asynchronous batch jobs.",
    iconName: "Workflow",
    skills: [
      "n8n"
    ]
  }
];
