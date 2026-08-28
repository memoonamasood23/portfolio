import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memoona Masood | AI Engineer & Generative AI Creator",
  description:
    "Portfolio of Memoona Masood, an AI Engineer specializing in Generative AI, LLM applications, AI chatbots, computer vision, AI research, and creative AI.",
  keywords: [
    "Memoona Masood",
    "AI Engineer",
    "Generative AI Creator",
    "LLM Engineer",
    "LangChain",
    "FastAPI",
    "Computer Vision",
    "AI Research",
    "ICIC 2025",
    "AI Video Creator",
    "Google Flow",
    "Prompt Engineering"
  ],
  authors: [{ name: "Memoona Masood" }],
  creator: "Memoona Masood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://memoonamasood.dev",
    title: "Memoona Masood | AI Engineer & Generative AI Creator",
    description:
      "Building intelligent systems and cinematic experiences with AI. Specializing in Generative AI, LLMs, AI applications, computer vision, and creative AI workflows.",
    siteName: "Memoona Masood Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memoona Masood | AI Engineer & Generative AI Creator",
    description:
      "Building intelligent systems and cinematic experiences with AI. Specializing in Generative AI, LLMs, AI applications, computer vision, and creative AI workflows.",
    creator: "@memoonamasood",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#06080E] text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
