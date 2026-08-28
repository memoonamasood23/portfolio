import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { CreativeWork } from "@/components/CreativeWork";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06080E] text-slate-100 selection:bg-indigo-500/30 selection:text-white relative">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section (Profile Bio & 3 Focus Pillars) */}
      <About />

      {/* What I Build (Generative AI, AI Applications, Vision, Creative AI) */}
      <WhatIBuild />

      {/* Professional Experience Timeline */}
      <Experience />

      {/* Featured Technical Projects */}
      <Projects />

      {/* Research & Publications */}
      <Publications />

      {/* AI × Visual Storytelling (Creative Video Direction) - Temporarily commented out */}
      {/* <CreativeWork /> */}

      {/* Technical Skills Overview */}
      <Skills />

      {/* Education */}
      <Education />

      {/* Certifications */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
