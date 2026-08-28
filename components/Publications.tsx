"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FileText, ChevronDown, ChevronUp, ExternalLink, GraduationCap, Sparkles } from "lucide-react";
import { publicationsData } from "@/data/publications";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Publications: React.FC = () => {
  const [expandedPubId, setExpandedPubId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPubId(expandedPubId === id ? null : id);
  };

  return (
    <section id="research" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Academic Research"
          title="RESEARCH & PUBLICATIONS"
          subtitle="Advancing memory efficiency and mathematical optimization for scalable transformer architectures."
        />

        <div className="space-y-6">
          {publicationsData.map((pub, index) => {
            const isExpanded = expandedPubId === pub.id;

            return (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard
                  glowColor="blue"
                  className="p-6 sm:p-8 lg:p-10 border-sky-500/20 bg-[#0A0E1A]/80 backdrop-blur-md"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-sky-500/10 text-sky-300 border border-sky-500/20 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                          {pub.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {pub.conference} ({pub.year})
                        </span>
                      </div>

                      {/* Paper Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white font-sans leading-snug">
                        &ldquo;{pub.title}&rdquo;
                      </h3>

                      {/* Authors */}
                      <p className="text-sm font-mono text-indigo-300">
                        <span className="text-slate-500">Authors: </span>
                        {pub.authors.map((author, aIdx) => (
                          <span key={author} className={author.includes("Masood") ? "text-white font-bold underline decoration-indigo-400 underline-offset-4" : "text-slate-300"}>
                            {author}{aIdx < pub.authors.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>

                      {/* Brief Summary */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                        {pub.description}
                      </p>

                      {/* Research Topics */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {pub.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Column */}
                    <div className="flex flex-row lg:flex-col items-center sm:items-stretch gap-3 shrink-0 lg:w-48">
                      <a
                        href={pub.googleScholarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-sky-600/30 hover:bg-sky-600/50 border border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-200"
                      >
                        <GraduationCap className="w-4 h-4 text-sky-300" />
                        <span>GOOGLE SCHOLAR</span>
                      </a>

                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all duration-200"
                      >
                        <FileText className="w-4 h-4 text-slate-400" />
                        <span>VIEW PAPER</span>
                      </a>

                      {/* Accordion Toggle */}
                      <button
                        onClick={() => toggleExpand(pub.id)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Publication Details"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Publication Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white/[0.02] p-5 rounded-xl">
                          <div>
                            <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                              Publication Title
                            </span>
                            <span className="text-xs sm:text-sm text-slate-200 font-medium leading-tight">
                              {pub.title}
                            </span>
                          </div>

                          <div>
                            <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                              Authors
                            </span>
                            <span className="text-xs sm:text-sm text-slate-200">
                              {pub.authors.join(", ")}
                            </span>
                          </div>

                          <div>
                            <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                              Conference
                            </span>
                            <span className="text-xs sm:text-sm text-slate-200">
                              {pub.conference}
                            </span>
                          </div>

                          <div>
                            <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                              Year & Pages
                            </span>
                            <span className="text-xs sm:text-sm text-slate-200">
                              Year: {pub.year} • Pages: {pub.pages}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
