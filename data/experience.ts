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
    description: "Create high-quality AI-generated videos using generative AI tools, transforming prompts and concepts into cinematic content aligned with project goals.",
    responsibilities: [
      "Create high-quality AI-generated videos using Google Flow, transforming prompts and concepts into cinematic content aligned with project goals.",
      "Optimize AI video workflows by refining prompts and generation parameters to improve visual quality, transitions, and storytelling."
    ],
    tools: [
      "Google Flow",
      "Runway ML",
      "CapCut AI",
      "ElevenLabs",
      "After Effects",
      "Prompt Engineering"
    ]
  },
  {
    id: "insafdaar",
    company: "Insafdaar",
    role: "Generative AI Intern",
    period: "Jul 2024 – Sep 2024",
    type: "Internship",
    isCurrent: false,
    description: "Engineered LLM-powered chatbot architectures, knowledge-retrieval pipelines, and multilingual AI translation workflows.",
    responsibilities: [
      "Developed and deployed AI chatbots using Google Gemini with custom knowledge bases.",
      "Built LLM-powered chatbot solutions using proprietary datasets.",
      "Conducted analysis and evaluation of large language models, including performance, limitations, and real-world applicability.",
      "Worked on multilingual AI solutions, including Urdu question translation and AI-driven voice response systems using Google APIs."
    ],
    tools: [
      "Google Gemini",
      "Generative AI",
      "LLMs",
      "Google APIs",
      "Prompt Engineering",
      "AI Chatbots"
    ]
  }
];
