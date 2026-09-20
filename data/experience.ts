export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  tools: string[];
  isCurrent?: boolean;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "econcepts",
    company: "eConcepts",
    role: "AI Video Creator",
    period: "Nov 2025 – Present",
    type: "Professional Experience",
    isCurrent: true,
    description: "Transform concepts and prompts into cinematic content while optimizing generative AI video pipelines.",
    responsibilities: [
      "Create high-quality AI-generated videos using Google Flow, transforming prompts and concepts into cinematic content aligned with project goals.",
      "Optimize AI video workflows by refining prompts and generation parameters to enhance visual quality, transitions, and storytelling."
    ],
    tools: [
      "Google Flow",
      "Runway ML",
      "CapCut AI",
      "ElevenLabs",
      "After Effects",
      "Motion Graphics"
    ]
  },
  {
    id: "insafdaar",
    company: "Insafdaar",
    role: "Generative AI Intern",
    period: "Jul 2024 – Sep 2024",
    type: "Internship",
    isCurrent: false,
    description: "Developed domain-specific chatbot architectures, evaluated LLMs, and engineered multilingual voice solutions.",
    responsibilities: [
      "Developed and deployed AI chatbots using Google Gemini with custom knowledge bases, improving response accuracy for domain-specific queries.",
      "Built and deployed LLM-powered chatbot solutions using proprietary datasets to improve user interaction.",
      "Conducted analysis and evaluation of large language models, including performance, limitations, and real-world applicability.",
      "Worked on multilingual AI solutions, including Urdu question translation and AI-driven voice response systems using Google APIs."
    ],
    tools: [
      "Google Gemini",
      "Generative AI",
      "LLMs",
      "Google APIs",
      "Model Evaluation",
      "Multilingual AI"
    ]
  }
];
