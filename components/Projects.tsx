"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, CheckCircle2, ArrowRight, Code2, Database, Cpu, Layers } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Projects: React.FC = () => {
  const featuredProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const standardProjects = projectsData.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Selected Work"
          title="FEATURED PROJECTS"
          subtitle="Engineering full-stack intelligent systems, fine-tuned language models, computer vision accessibility engines, and algorithmic recommenders."
        />

        {/* 1. Large Spotlight Card for Project 01 (AI-Based Interview Assistant) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <GlowCard
            glowColor="indigo"
            className="p-8 sm:p-10 lg:p-12 border-indigo-500/30 bg-gradient-to-b from-[#0F1424]/90 via-[#0B0F1B]/95 to-[#06080E]"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-indigo-500/20 to-sky-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
                  {featuredProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">PROJECT {featuredProject.number}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-xs font-mono text-indigo-200 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans uppercase mb-2">
                    {featuredProject.title}
                  </h3>
                  {featuredProject.tagline && (
                    <p className="text-sm sm:text-base font-mono text-indigo-300">
                      {featuredProject.tagline}
                    </p>
                  )}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {featuredProject.description}
                </p>

                {/* Key Highlights Checklist */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Architecture & Implementation Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {featuredProject.highlights?.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-indigo-950/40 border border-indigo-500/30 text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Architecture / Interactive Blueprint Preview */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-[#090D18] border border-indigo-500/20 p-6 sm:p-8 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                  
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                      LLM_INFERENCE_PIPELINE
                    </span>
                  </div>

                  {/* Visual Node Diagram */}
                  <div className="space-y-4 py-2 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-slate-300">
                        <Cpu className="w-4 h-4 text-indigo-400" />
                        <span>Fine-Tuned LLaMA 3.2 1B</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Evaluator Ready
                      </span>
                    </div>

                    <div className="flex justify-center text-slate-600">↓</div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-slate-300">
                        <Layers className="w-4 h-4 text-sky-400" />
                        <span>LangChain & FastAPI Engine</span>
                      </div>
                      <span className="text-[10px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        Streaming Q&A
                      </span>
                    </div>

                    <div className="flex justify-center text-slate-600">↓</div>

                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-slate-300">
                        <Database className="w-4 h-4 text-violet-400" />
                        <span>6000+ Interview Dataset</span>
                      </div>
                      <span className="text-[10px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                        Domain Specific
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Latency: Low-latency stream</span>
                    <span className="text-indigo-400">Status: Production Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* 2. Alternating Standard Project Cards (Projects 02, 03, 04) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {standardProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GlowCard
                glowColor={index === 0 ? "blue" : index === 1 ? "emerald" : "violet"}
                className="p-6 sm:p-8 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-500">
                      PROJECT {project.number}
                    </span>
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-slate-400">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2 uppercase font-mono group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {project.tagline && (
                    <p className="text-xs font-mono text-slate-400 mb-3 font-light">
                      {project.tagline}
                    </p>
                  )}

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-2 mb-6">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-xs font-mono text-indigo-300 hover:text-indigo-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
