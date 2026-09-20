export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  badge?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  badge: string;
  focusArea: string;
  iconName: string;
}

export const educationData: EducationItem = {
  id: "bahria-bsc-ai",
  degree: "B.Sc. Artificial Intelligence",
  institution: "Bahria University, Islamabad",
  location: "Islamabad, Pakistan",
  duration: "2021 – 2025",
  badge: "Class of 2025",
  description: "Comprehensive study in artificial intelligence, neural networks, machine learning algorithms, computer vision, data structures, and mathematics for computing."
};

export const certificationsData: CertificationItem[] = [
  {
    id: "deep-learning-specialization",
    title: "Deep Learning Specialization",
    badge: "Specialization",
    focusArea: "Neural Networks, Deep Learning Architectures, Optimization & Hyperparameter Tuning",
    iconName: "BrainCircuit"
  },
  {
    id: "intro-machine-learning",
    title: "Introduction to Machine Learning",
    badge: "Foundational AI",
    focusArea: "Supervised & Unsupervised Learning, Regression, Classification & Model Evaluation",
    iconName: "Cpu"
  },
  {
    id: "python-data-science-ai",
    title: "Python for Data Science and AI",
    badge: "Data Science",
    focusArea: "Data Analysis, Scientific Computing, NumPy, Pandas & Model Pipeline Engineering",
    iconName: "Terminal"
  }
];
