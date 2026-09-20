export interface ArchitectureStep {
  label: string;
  sublabel: string;
  status: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  description: string;
  isFeatured: boolean;
  badge?: string;
  category: "agentic" | "fullstack-ai" | "llm-finetuning";
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  architecture?: {
    badge: string;
    steps: ArchitectureStep[];
    metrics: { label: string; value: string }[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "skillmate",
    number: "01",
    title: "SKILLMATE — AI TECHNICAL INTERVIEW PLATFORM",
    tagline: "Dual-LLM (Local Quantized LLaMA GGUF + GPT-4o-mini) with Voice STT/TTS & Instant PDF Scoring",
    description: "An intelligent, end-to-end technical interview preparation and mock evaluation system. Empowers candidates to practice real-world coding and engineering interviews with domain-specific dynamic questions, real-time voice interaction, AI model answers, automated evaluation, and downloadable performance reports.",
    isFeatured: true,
    badge: "Flagship Dual-LLM System",
    category: "llm-finetuning",
    highlights: [
      "Dual-LLM Architecture: Local quantized LLaMA GGUF (2.4 GB unsloth.F16 via llama-cpp-python) for zero-cost question & sample answer generation, paired with cloud OpenAI GPT-4o-mini for scoring",
      "Dynamic Question Generation: Strictly tailored to the candidate's chosen domain (Python, Java, R, C++) and seniority level (Fresher / Intermediate / Advanced)",
      "Bidirectional Voice Interaction: Real-time Speech-to-Text via Web Speech API (SpeechRecognition) and Speech Synthesis (SpeechSynthesisUtterance) for spoken model answers",
      "Instant PDF Evaluation Reports: Generates professional PDF scorecards with question-by-question breakdown, strengths, and study topics using jsPDF & jspdf-autotable",
      "Full-Stack Architecture: FastAPI & Uvicorn backend with SQLAlchemy ORM (SQLite) and Next.js / React with Bootstrap 5 frontend",
      "Authentication & Security: Passlib bcrypt password hashing, JWT bearer token sessions (python-jose), Google OAuth, and automated SMTP email verification"
    ],
    technologies: [
      "FastAPI",
      "Next.js",
      "LLaMA (GGUF)",
      "llama-cpp-python",
      "OpenAI GPT-4o-mini",
      "LangChain",
      "Web Speech API",
      "SQLAlchemy",
      "SQLite",
      "JWT (python-jose)",
      "jsPDF"
    ],
    githubUrl: "https://github.com/memoonamasood23/fyp",
    demoUrl: "https://github.com/memoonamasood23/fyp#-overview",
    architecture: {
      badge: "DUAL_LLM_VOICE_PIPELINE",
      steps: [
        {
          label: "Local Quantized LLaMA (GGUF)",
          sublabel: "Zero-Cost Local Question & Code Answer Synthesis",
          status: "Local Offline Inference",
          iconName: "Cpu"
        },
        {
          label: "Web Speech API (STT & TTS Engine)",
          sublabel: "Live Voice Recognition & Spoken Feedback",
          status: "Real-Time Audio",
          iconName: "Workflow"
        },
        {
          label: "Cloud GPT-4o-mini & jsPDF Engine",
          sublabel: "Rubric Scoring, Feedback & Instant PDF Report",
          status: "Multi-Factor Report",
          iconName: "Database"
        }
      ],
      metrics: [
        { label: "Local Model", value: "2.4 GB LLaMA GGUF" },
        { label: "Evaluation", value: "GPT-4o-mini + PDF" }
      ]
    }
  },
  {
    id: "automated-book-generation",
    number: "02",
    title: "AUTOMATED BOOK GENERATION SYSTEM",
    tagline: "Three-Stage Autonomous Authoring Pipeline with Human-in-the-Loop Verification",
    description: "A full-stack Node.js & TypeScript system that autonomously generates complete, publication-grade books using OpenAI and Anthropic LLMs, featuring context-chaining across chapters, editor approval gates, multi-format export (DOCX/TXT), and Supabase tracking.",
    isFeatured: false,
    badge: "3-Stage LLM Pipeline",
    category: "fullstack-ai",
    highlights: [
      "Modular Three-Stage Pipeline: Independent workflows for outline generation, context-chained chapter writing, and final book compilation",
      "Human-in-the-Loop Approval Gates: Dedicated review checkpoints where editors approve, modify, or inject notes before the pipeline proceeds",
      "Context Chaining Architecture: Injects summaries of preceding chapters into subsequent prompts to guarantee narrative consistency across long-form content",
      "Multi-Format Export: Programmatic compilation into beautifully styled DOCX and TXT files ready for publishing",
      "Automated Webhooks & Notifications: Real-time status notifications via Nodemailer email and MS Teams incoming webhooks",
      "Database Tracking & Demo Mode: Supabase (PostgreSQL) tracking for books, chapters, and approvals, with a zero-dependency local demo mode"
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "OpenAI API",
      "Anthropic Claude",
      "Supabase",
      "docx Library",
      "MS Teams Webhooks",
      "Nodemailer"
    ],
    githubUrl: "https://github.com/memoonamasood23",
    demoUrl: "https://github.com/memoonamasood23",
    architecture: {
      badge: "THREE_STAGE_LLM_PIPELINE",
      steps: [
        {
          label: "Stage 1: Outline Generation",
          sublabel: "Title + Editor Notes → AI Outline with Human Gate",
          status: "Editor Approved",
          iconName: "Layers"
        },
        {
          label: "Stage 2: Context-Chained Chapters",
          sublabel: "Prior-Chapter Summaries Injected Iteratively",
          status: "Narrative Cohesive",
          iconName: "Cpu"
        },
        {
          label: "Stage 3: Compilation & Webhooks",
          sublabel: "DOCX/TXT Export + MS Teams & Email Alerts",
          status: "Supabase Synced",
          iconName: "Database"
        }
      ],
      metrics: [
        { label: "Pipeline", value: "3 Autonomous Stages" },
        { label: "Approval", value: "Human-in-the-Loop" }
      ]
    }
  },
  {
    id: "invoice-automation-system",
    number: "03",
    title: "INVOICE AUTOMATION SYSTEM",
    tagline: "Deterministic Validation & GPT-4o Pipeline for Google Workspace & HubSpot",
    description: "An end-to-end invoice automation pipeline that eliminates manual data entry for finance teams by parsing PDF invoices with GPT-4o, enforcing deterministic math validation (Subtotal + Tax + Shipping = Total), and exporting booking-ready CSVs.",
    isFeatured: false,
    badge: "Financial Automation",
    category: "fullstack-ai",
    highlights: [
      "Eliminates Error-Prone Manual Entry: Frees finance teams on Google Workspace and HubSpot from tedious data entry and costly payment errors",
      "Intelligent Document Ingestion: Uses pdf-parse to extract raw invoice text and GPT-4o to transform chaotic, unformatted supplier invoices into structured JSON",
      "Deterministic Mathematical Validation: Enforces programmatic calculation checks (verifying Subtotal + Tax + Shipping = Total) rather than relying on LLM math",
      "CRM-Ready CSV Generation: Automatically outputs booking-ready CSV files formatted for direct upload into HubSpot CRM or Google Sheets",
      "Automated Alerting & Audit Logging: Implemented immediate failure alerts via Nodemailer with detailed error logging for rapid discrepancy resolution"
    ],
    technologies: [
      "Node.js",
      "OpenAI GPT-4o",
      "pdf-parse",
      "Nodemailer",
      "HubSpot CRM",
      "CSV Automation",
      "Data Validation"
    ],
    githubUrl: "https://github.com/memoonamasood23",
    demoUrl: "https://github.com/memoonamasood23",
    architecture: {
      badge: "DETERMINISTIC_FINANCIAL_PIPELINE",
      steps: [
        {
          label: "PDF Ingestion & Text Parsing",
          sublabel: "pdf-parse + GPT-4o Contextual JSON Extraction",
          status: "Multi-Layout Ingestion",
          iconName: "Layers"
        },
        {
          label: "Deterministic Math Verification",
          sublabel: "Hard-coded Subtotal + Tax + Shipping = Total Check",
          status: "100% Math Accuracy",
          iconName: "Cpu"
        },
        {
          label: "CRM Booking CSV & Alerting",
          sublabel: "HubSpot/Sheets CSV Output + Nodemailer Alerts",
          status: "Zero-Drift Sync",
          iconName: "Database"
        }
      ],
      metrics: [
        { label: "Validation", value: "100% Deterministic" },
        { label: "Alerts", value: "Nodemailer Automated" }
      ]
    }
  },
  {
    id: "ai-customer-support-agent",
    number: "04",
    title: "AI CUSTOMER SUPPORT AGENT",
    tagline: "Autonomous n8n Support Agent with Error-Handling Workflows & Webhooks",
    description: "An autonomous customer support agent built in n8n that understands incoming customer queries, conducts intent classification, and generates accurate, context-aware responses in real time with resilient error recovery.",
    isFeatured: false,
    badge: "Agentic Automation",
    category: "agentic",
    highlights: [
      "Designed and deployed an autonomous customer support agent in n8n understanding incoming queries in real time",
      "Generates accurate, context-aware responses using integrated LLM reasoning and prompt workflows",
      "Built a dedicated error-handling module to gracefully manage API failures, invalid inputs, and edge cases",
      "Automated first-response query handling, reducing manual support workload and ensuring 24/7 consistency"
    ],
    technologies: [
      "n8n",
      "LLM Integration",
      "Webhooks",
      "Error-Handling Workflows",
      "Context Memory"
    ],
    githubUrl: "https://github.com/memoonamasood23",
    demoUrl: "https://github.com/memoonamasood23",
    architecture: {
      badge: "AUTONOMOUS_N8N_WORKFLOW",
      steps: [
        {
          label: "Incoming Query Ingestion",
          sublabel: "Webhook Listener & Sanitizer",
          status: "24/7 Active",
          iconName: "Workflow"
        },
        {
          label: "LLM Context-Aware Reasoning",
          sublabel: "Intent Classification & Prompt Flow",
          status: "Contextual Response",
          iconName: "Cpu"
        },
        {
          label: "Dedicated Error-Handling Guard",
          sublabel: "Fallback Handling & API Recovery",
          status: "Zero-Downtime",
          iconName: "Layers"
        }
      ],
      metrics: [
        { label: "Response Mode", value: "Real-Time Streaming" },
        { label: "Resilience", value: "Auto Fallback" }
      ]
    }
  },
  {
    id: "ai-lead-qualifier-agent",
    number: "05",
    title: "AI LEAD QUALIFIER AGENT",
    tagline: "Intelligent Lead Scoring & Sales Pipeline Routing via CRM Webhooks",
    description: "An intelligent lead-qualification agent that automatically scores and filters incoming leads using natural language understanding to assess buyer intent, budget fit, and deal quality.",
    isFeatured: false,
    badge: "Sales AI Agent",
    category: "agentic",
    highlights: [
      "Built an intelligent lead-qualification agent that automatically scores and filters incoming leads using natural language understanding",
      "Assesses intent, urgency, and budget quality from inbound inquiries",
      "Automated routing of qualified leads directly into sales pipelines via CRM webhooks",
      "Delivered as part of a detailed masterclass workflow demonstrating scalable multi-step lead-nurturing logic"
    ],
    technologies: [
      "n8n",
      "LLM Integration",
      "CRM Webhooks",
      "Lead Scoring Logic",
      "Pipeline Automation"
    ],
    githubUrl: "https://github.com/memoonamasood23",
    demoUrl: "https://github.com/memoonamasood23",
    architecture: {
      badge: "LEAD_SCORING_ENGINE",
      steps: [
        {
          label: "Inbound Prospect Parsing",
          sublabel: "NLU Intent & Entity Extraction",
          status: "Instant Score",
          iconName: "Cpu"
        },
        {
          label: "Multi-Factor Scoring Engine",
          sublabel: "Budget, Urgency & Fit Evaluation",
          status: "Automated Filter",
          iconName: "Workflow"
        },
        {
          label: "CRM Webhook Pipeline Dispatch",
          sublabel: "Auto-Routing to Sales Pipeline",
          status: "Pipeline Connected",
          iconName: "Database"
        }
      ],
      metrics: [
        { label: "Screening Time", value: "Instant Routing" },
        { label: "Conversion", value: "High Intent Priority" }
      ]
    }
  }
];
