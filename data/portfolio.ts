export interface PersonalInfo {
  name: string;
  shortName: string;
  monogram: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  primaryTagline: string;
  secondaryTagline: string;
  aboutHeadline: string;
  aboutBio: string[];
  pillars: {
    number: string;
    title: string;
    description: string;
    iconName: string;
  }[];
  whatIBuild: {
    number: string;
    title: string;
    description: string;
    tags: string[];
  }[];
  socialLinks: {
    platform: string;
    label: string;
    url: string;
    icon: string;
  }[];
  navLinks: {
    label: string;
    href: string;
  }[];
}

export const portfolioData: PersonalInfo = {
  name: "Memoona Masood",
  shortName: "Memoona",
  monogram: "MM",
  title: "AI Engineer & Generative AI Creator",
  subtitle: "AI Engineering • Workflow Automation • LLMs",
  email: "memoonamasood23@gmail.com",
  phone: "+92 342 2453906",
  location: "Islamabad, Pakistan",
  primaryTagline: "Building intelligent systems, agentic workflows, and cinematic experiences with AI.",
  secondaryTagline: "Generative AI • LLM Fine-Tuning • Workflow Automation • AI Applications",
  aboutHeadline: "Building production-ready AI systems, autonomous agent workflows, and cinematic generative experiences.",
  aboutBio: [
    "I am an AI Engineer with hands-on experience in Generative AI, LLM fine-tuning, workflow automation, and AI-powered chatbots.",
    "I specialize in building end-to-end AI solutions using LangChain, FastAPI, n8n, and modern AI frameworks. My core expertise spans prompt engineering, model evaluation, agentic workflow automation, and deploying production-ready AI applications.",
    "Currently, I work as an AI Video Creator at eConcepts, transforming prompts and concepts into cinematic content aligned with project goals while optimizing generative AI workflows."
  ],
  pillars: [
    {
      number: "01",
      title: "AGENTIC WORKFLOWS",
      description: "Autonomous AI agents, n8n orchestration, CRM webhooks, and fault-tolerant error handling.",
      iconName: "Workflow"
    },
    {
      number: "02",
      title: "GENERATIVE AI & LLMs",
      description: "Fine-tuning models, domain-specific chatbots, custom knowledge bases, and LangChain pipelines.",
      iconName: "Cpu"
    },
    {
      number: "03",
      title: "CREATIVE & VIDEO AI",
      description: "Cinematic video generation, prompt optimization, Google Flow, Runway ML, and motion graphics.",
      iconName: "Film"
    }
  ],
  whatIBuild: [
    {
      number: "01",
      title: "AGENTIC AUTOMATION",
      description: "Autonomous customer support and lead-qualification agents with webhook integrations and deterministic error handling.",
      tags: ["n8n", "AI Agents", "Webhooks", "CRM Routing", "Error Handling"]
    },
    {
      number: "02",
      title: "GENERATIVE AI & LLMs",
      description: "Fine-tuned LLaMA 3.2 models, domain-specific chatbots with Google Gemini, prompt engineering, and evaluation.",
      tags: ["LLaMA 3.2 1B", "Google Gemini", "LangChain", "Fine-Tuning", "Prompt Tuning"]
    },
    {
      number: "03",
      title: "FULL-STACK AI SYSTEMS",
      description: "Autonomous multi-stage pipelines including book generation, deterministic invoice parsing, and mock interview platforms.",
      tags: ["FastAPI", "Node.js", "Supabase", "GPT-4o", "Data Validation"]
    },
    {
      number: "04",
      title: "CREATIVE AI & VIDEO",
      description: "High-quality AI-generated videos, cinematic storytelling, and visual parameter optimization.",
      tags: ["Google Flow", "Runway ML", "ElevenLabs", "CapCut AI", "After Effects"]
    }
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      label: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/memoona-masood",
      icon: "Linkedin"
    },
    {
      platform: "GitHub",
      label: "GitHub Profile",
      url: "https://github.com/memoonamasood23",
      icon: "Github"
    },
    {
      platform: "Email",
      label: "Send Email",
      url: "mailto:memoonamasood23@gmail.com",
      icon: "Mail"
    }
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    // { label: "AI Visuals", href: "#creative" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ]
};
