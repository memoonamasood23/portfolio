export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  description: string;
  isFeatured: boolean;
  badge?: string;
  highlights?: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  image?: string;
  architectureDiagram?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "interview-assistant",
    number: "01",
    title: "AI-BASED INTERVIEW ASSISTANT",
    tagline: "Fine-tuned LLaMA 3.2 1B Real-Time Candidate Assessment & Feedback Engine",
    description: "An AI-powered interview preparation platform that generates role-specific interview questions and answers, evaluates candidate responses, identifies weak areas, and provides personalized feedback.",
    isFeatured: true,
    badge: "Featured Project",
    highlights: [
      "Scraped 6000+ interview Q&A pairs for custom dataset synthesis",
      "Fine-tuned LLaMA 3.2 1B for domain-specific evaluation and scoring",
      "Built a full-stack AI application with real-time bidirectional response streaming",
      "Robust FastAPI backend integrated with LangChain orchestration",
      "Interactive Node.js frontend interface with response analytics",
      "Automated rubric-based feedback generating personalized performance analysis"
    ],
    technologies: [
      "Python",
      "LLaMA 3.2 1B",
      "LangChain",
      "FastAPI",
      "Node.js",
      "NLP",
      "Generative AI"
    ],
    githubUrl: "https://github.com/placeholder-memoona-masood/ai-interview-assistant",
    demoUrl: "https://demo.placeholder.com/ai-interview-assistant"
  },
  {
    id: "image-captioning",
    number: "02",
    title: "AUDIO-ENHANCED IMAGE CAPTIONING",
    tagline: "Multimodal Vision & NLP Pipeline for Visually Impaired Accessibility",
    description: "A deep learning system combining computer vision and NLP to generate image captions with audio output, improving accessibility for visually impaired users.",
    isFeatured: false,
    badge: "Computer Vision & NLP",
    highlights: [
      "Convolutional-Recurrent neural architecture for dense visual feature extraction",
      "Natural language generation with semantic attention alignment",
      "Integrated text-to-speech audio synthesis engine for instant acoustic playback"
    ],
    technologies: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Text-to-Speech"
    ],
    githubUrl: "https://github.com/placeholder-memoona-masood/audio-image-captioning",
    demoUrl: "https://demo.placeholder.com/audio-image-captioning"
  },
  {
    id: "sign-language-translator",
    number: "03",
    title: "SIGN LANGUAGE TRANSLATOR",
    tagline: "Real-Time Spatial Gesture Recognition & Assistive Translation",
    description: "A computer vision system using deep learning for real-time gesture recognition and translation, enabling communication for hearing-impaired individuals.",
    isFeatured: false,
    badge: "Assistive AI & Vision",
    highlights: [
      "Real-time hand landmark tracking and dynamic temporal gesture classification",
      "Optimized inference pipeline for low-latency live camera streaming",
      "Translates complex sign gestures into readable textual representations"
    ],
    technologies: [
      "Python",
      "Computer Vision",
      "Deep Learning"
    ],
    githubUrl: "https://github.com/placeholder-memoona-masood/sign-language-translator",
    demoUrl: "https://demo.placeholder.com/sign-language-translator"
  },
  {
    id: "movie-recommendation",
    number: "04",
    title: "MOVIE RECOMMENDATION SYSTEM",
    tagline: "Collaborative Filtering & Latent Factor Matrix Decomposition",
    description: "A collaborative filtering-based recommendation engine using machine learning to personalize movie recommendations.",
    isFeatured: false,
    badge: "Machine Learning",
    highlights: [
      "User-item interaction modeling with collaborative filtering techniques",
      "Matrix factorization algorithm delivering personalized ranking scores",
      "Optimized similarity scoring engine handling sparse interaction matrices"
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Collaborative Filtering"
    ],
    githubUrl: "https://github.com/placeholder-memoona-masood/movie-recommendation-system",
    demoUrl: "https://demo.placeholder.com/movie-recommendation-system"
  }
];
