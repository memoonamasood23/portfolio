"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Sparkles,
  CheckCircle2,
  Workflow,
  Database,
  Cpu,
  Layers,
  ArrowRight,
  Bot
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectsData[0].id);

  const activeProject =
    projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];
  const gridProjects = projectsData.filter((p) => p.id !== activeProject.id);

  const renderStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case "Layers":
        return <Layers className="w-4 h-4 text-sky-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-violet-400" />;
      case "Workflow":
        return <Workflow className="w-4 h-4 text-cyan-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-500/5 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Selected Work"
          title="FEATURED PROJECTS"
          subtitle="Autonomous AI agent workflows, three-stage LLM authoring pipelines, deterministic financial parsers, and fine-tuned domain models."
        />

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {projectsData.map((project) => {
            const isSelected = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? "bg-indigo-600/30 text-white border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                    : "bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:bg-white/[0.06]"
                }`}
              >
                <span className="text-slate-500">{project.number}</span>
                <span className="hidden sm:inline">{project.title}</span>
                <span className="sm:hidden">{project.badge || project.title.slice(0, 12)}</span>
              </button>
            );
          })}
        </div>

        {/* 1. Large Spotlight Architecture Card for Active Project */}
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                  {activeProject.badge}
                </span>
                <span className="text-xs font-mono text-slate-500">PROJECT {activeProject.number}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Details & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-sans uppercase mb-2">
                    {activeProject.title}
                  </h3>
                  {activeProject.tagline && (
                    <p className="text-sm sm:text-base font-mono text-indigo-300">
                      {activeProject.tagline}
                    </p>
                  )}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {activeProject.description}
                </p>

                {/* Key Highlights Checklist */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Architecture & Implementation Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProject.highlights.map((highlight, hIndex) => (
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
                    {activeProject.technologies.map((tech) => (
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

              {/* Right Column: Visual Architecture Blueprint Preview */}
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
                      {activeProject.architecture?.badge || "SYSTEM_PIPELINE"}
                    </span>
                  </div>

                  {/* Visual Architecture Nodes */}
                  <div className="space-y-4 py-2 font-mono text-xs">
                    {activeProject.architecture?.steps.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        {sIdx > 0 && <div className="flex justify-center text-slate-600">↓</div>}
                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                          <div className="flex items-center gap-2.5 text-slate-300">
                            {renderStepIcon(step.iconName)}
                            <div>
                              <div className="text-white font-medium">{step.label}</div>
                              <div className="text-[10px] text-slate-400">{step.sublabel}</div>
                            </div>
                          </div>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0 ml-2">
                            {step.status}
                          </span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Metrics Footer */}
                  {activeProject.architecture?.metrics && (
                    <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                      {activeProject.architecture.metrics.map((m, mIdx) => (
                        <span key={mIdx} className={mIdx === 1 ? "text-indigo-400" : ""}>
                          {m.label}: {m.value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* 2. Grid for the remaining projects */}
        <div className="mb-4">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Explore All Key Projects ({projectsData.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const isCurrentlySpotlighted = project.id === activeProject.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard
                  glowColor={
                    index % 4 === 0
                      ? "indigo"
                      : index % 4 === 1
                      ? "blue"
                      : index % 4 === 2
                      ? "emerald"
                      : "violet"
                  }
                  className={`p-6 sm:p-8 h-full flex flex-col justify-between group transition-all duration-300 ${
                    isCurrentlySpotlighted ? "border-indigo-500/50 bg-[#0E1324]/80" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500">
                        PROJECT {project.number}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                            {project.badge}
                          </span>
                        )}
                        {isCurrentlySpotlighted && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Active in Spotlight
                          </span>
                        )}
                      </div>
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
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-400 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
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

                    {/* Action Links & Spotlight Button */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedProjectId(project.id);
                          const el = document.getElementById("projects");
                          el?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 text-xs font-mono text-indigo-200 hover:text-white transition-colors"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Inspect Pipeline</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
