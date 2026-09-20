export interface PublicationItem {
  id: string;
  badge: string;
  title: string;
  authors: string[];
  conference: string;
  year: string;
  pages: string;
  type: string;
  description: string;
  googleScholarUrl: string;
  paperUrl: string;
  doi?: string;
  topics: string[];
}

export const publicationsData: PublicationItem[] = [
  {
    id: "svd-transformer-attention",
    badge: "RESEARCH PUBLICATION",
    title: "Low-Rank SVD Compression for Memory-Efficient Transformer Attention",
    authors: ["M. A. Shah", "R. Q. Khan", "M. Masood"],
    conference: "2025 6th International Conference on Innovative Computing (ICIC)",
    year: "2025",
    pages: "1–6",
    type: "Conference Paper",
    description: "Presents Low-Rank Singular Value Decomposition (SVD) compression for Transformer attention, significantly reducing memory footprint while preserving representational fidelity.",
    googleScholarUrl: "https://scholar.google.com/citations?user=placeholder-memoona-masood",
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/11413215",
    topics: [
      "Transformer Architecture",
      "Singular Value Decomposition (SVD)",
      "Attention Mechanism Optimization",
      "Model Compression",
      "Memory Efficiency"
    ]
  }
];
