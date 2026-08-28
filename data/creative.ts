export interface CreativeCategory {
  id: string;
  name: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  category: string;
  toolset: string[];
  description: string;
  type: "video" | "motion" | "visual" | "experiment";
  mediaUrl?: string;
  thumbnail?: string;
  status: "available" | "placeholder";
  placeholderText?: string;
  aspectRatio?: "16:9" | "9:16" | "1:1" | "4:3";
}

export const creativeCategories: CreativeCategory[] = [
  { id: "all", name: "All Works" },
  { id: "ai-advertising", name: "AI Advertising" },
  { id: "product-visualization", name: "Product Visualization" },
  { id: "cinematic-ai", name: "Cinematic AI Videos" },
  { id: "social-media", name: "Social Media Content" },
  { id: "motion-graphics", name: "Motion Graphics" },
  { id: "creative-experiments", name: "Creative Experiments" },
];

export const creativeWorksData: CreativeItem[] = [
  {
    id: "cinematic-narrative",
    title: "Cinematic Atmosphere & Narrative Flow",
    category: "cinematic-ai",
    toolset: ["Google Flow", "Runway ML", "ElevenLabs", "After Effects"],
    description: "Multi-shot conceptual sequence blending generative worldbuilding with rhythmic pacing and atmospheric acoustic design.",
    type: "video",
    status: "placeholder",
    placeholderText: "Cinematic Sequence Preview",
    aspectRatio: "16:9"
  },
  {
    id: "product-visualization-concept",
    title: "Futuristic Hardware Product Reveal",
    category: "product-visualization",
    toolset: ["Google Flow", "Runway ML", "After Effects"],
    description: "High-fidelity speculative product showcase featuring dynamic lighting, material textures, and studio motion trajectories.",
    type: "video",
    status: "placeholder",
    placeholderText: "Product Visualization Reel",
    aspectRatio: "16:9"
  },
  {
    id: "ai-commercial-spot",
    title: "Dynamic Brand Campaign & Visual Identity",
    category: "ai-advertising",
    toolset: ["Google Flow", "Runway ML", "ElevenLabs", "CapCut AI"],
    description: "Fast-paced commercial spot synthesizing prompt-engineered visual assets into an impactful promotional narrative.",
    type: "video",
    status: "placeholder",
    placeholderText: "Advertising Spot Coming Soon",
    aspectRatio: "16:9"
  },
  {
    id: "social-media-vertical",
    title: "Immersive Short-Form Visual Experience",
    category: "social-media",
    toolset: ["CapCut AI", "Runway ML", "Prompt Engineering"],
    description: "High-retention vertical format visual storytelling optimized for modern digital channels.",
    type: "video",
    status: "placeholder",
    placeholderText: "Vertical Reel Placeholder",
    aspectRatio: "9:16"
  },
  {
    id: "motion-graphics-synthesis",
    title: "Generative Kinetic Typography & UI",
    category: "motion-graphics",
    toolset: ["After Effects", "Google Flow", "Prompt Engineering"],
    description: "Kinetic UI elements and hybrid motion design blending classical keyframing with AI generation passes.",
    type: "motion",
    status: "placeholder",
    placeholderText: "Motion Graphics Showcase",
    aspectRatio: "16:9"
  },
  {
    id: "experimental-latent-journey",
    title: "Latent Space Morphing & Abstract Studies",
    category: "creative-experiments",
    toolset: ["Google Flow", "Runway ML", "Prompt Engineering"],
    description: "Exploration of latent space interpolation, surreal transitions, and experimental video synthesis.",
    type: "experiment",
    status: "placeholder",
    placeholderText: "Latent Exploration Archive",
    aspectRatio: "16:9"
  }
];
