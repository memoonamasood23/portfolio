export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "ai-ml",
    name: "AI / ML & Generative AI",
    description: "Generative AI systems, LLM fine-tuning, prompt engineering, and model evaluation.",
    iconName: "Sparkles",
    skills: [
      "Generative AI",
      "LLMs",
      "LangChain",
      "Prompt Engineering",
      "LLM Fine-tuning",
      "Deep Learning",
      "Computer Vision",
      "Model Evaluation"
    ]
  },
  {
    id: "automation",
    name: "Automation & AI Agents",
    description: "Autonomous agentic workflows, n8n orchestration, and multi-service webhook integrations.",
    iconName: "Workflow",
    skills: [
      "n8n",
      "AI Agents",
      "Workflow Automation",
      "Webhook Integrations",
      "Error-Handling Workflows"
    ]
  },
  {
    id: "web-dev",
    name: "Web & Backend",
    description: "High-performance API backends, modern server architectures, and interactive client UIs.",
    iconName: "Layers",
    skills: [
      "FastAPI",
      "Node.js",
      "React"
    ]
  },
  {
    id: "programming",
    name: "Languages",
    description: "Core programming languages for machine learning, backend services, and algorithmic systems.",
    iconName: "Code2",
    skills: [
      "Python",
      "Java",
      "C/C++",
      "JavaScript",
      "SQL"
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational, document, and cloud backend databases for stateful applications.",
    iconName: "Database",
    skills: [
      "SQL",
      "NoSQL",
      "Supabase"
    ]
  },
  {
    id: "video-editing",
    name: "Video Editing & Creative AI",
    description: "Cinematic generative video workflows, voice synthesis, and dynamic motion design.",
    iconName: "Video",
    skills: [
      "Runway ML",
      "CapCut AI",
      "ElevenLabs",
      "Google Flow",
      "After Effects",
      "Motion Graphics"
    ]
  }
];
