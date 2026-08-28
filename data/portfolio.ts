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
  subtitle: "AI Engineering • Research • Creative Technology",
  email: "memoonamasood23@gmail.com",
  phone: "+92 342 2453906",
  location: "Islamabad, Pakistan",
  primaryTagline: "Building intelligent systems and cinematic experiences with AI.",
  secondaryTagline: "Generative AI • LLMs • AI Applications • Creative AI",
  aboutHeadline: "Pioneering the intersection of algorithmic intelligence and visual storytelling.",
  aboutBio: [
    "I am an AI Engineer with hands-on experience in Generative AI, LLM fine-tuning, AI-powered chatbots, and intelligent application development.",
    "My experience spans LLM applications, prompt engineering, model evaluation, LangChain, FastAPI, chatbot development, computer vision, and AI-generated visual content.",
    "Currently, I work as an AI Video Creator, where I combine generative AI with cinematic storytelling to create high-quality visual experiences."
  ],
  pillars: [
    {
      number: "01",
      title: "AI ENGINEERING",
      description: "Generative AI, LLMs, AI applications and intelligent systems.",
      iconName: "Cpu"
    },
    {
      number: "02",
      title: "AI RESEARCH",
      description: "Machine learning research and academic publication.",
      iconName: "Sparkles"
    },
    {
      number: "03",
      title: "CREATIVE AI",
      description: "AI-generated video, visual storytelling and creative workflows.",
      iconName: "Film"
    }
  ],
  whatIBuild: [
    {
      number: "01",
      title: "GENERATIVE AI",
      description: "LLM applications, prompt engineering, fine-tuning, RAG and AI assistants.",
      tags: ["LLaMA", "Gemini", "RAG", "Prompt Tuning", "LangChain"]
    },
    {
      number: "02",
      title: "AI APPLICATIONS",
      description: "Intelligent web applications, AI chatbots and automated workflows.",
      tags: ["FastAPI", "Full-Stack AI", "Chatbots", "n8n Automation"]
    },
    {
      number: "03",
      title: "COMPUTER VISION",
      description: "Image understanding, gesture recognition and accessibility-focused AI.",
      tags: ["Gesture Recognition", "Image Captioning", "Deep Learning"]
    },
    {
      number: "04",
      title: "CREATIVE AI",
      description: "AI-generated video, cinematic storytelling and creative automation.",
      tags: ["Google Flow", "Runway ML", "ElevenLabs", "Cinematics"]
    }
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      label: "LinkedIn Profile",
      url: "https://linkedin.com/in/placeholder-memoona-masood",
      icon: "Linkedin"
    },
    {
      platform: "GitHub",
      label: "GitHub Profile",
      url: "https://github.com/placeholder-memoona-masood",
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
