"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Play, Sparkles, Video, Layers, X, Clapperboard } from "lucide-react";
import { creativeCategories, creativeWorksData, CreativeItem } from "@/data/creative";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const CreativeWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<CreativeItem | null>(null);

  const filteredWorks =
    activeCategory === "all"
      ? creativeWorksData
      : creativeWorksData.filter((work) => work.category === activeCategory);

  return (
    <section id="creative" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-violet-600/5 blur-[160px] rounded-full pointer-events-none" />

      <Container>
        {/* Intentional philosophical transition quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sm sm:text-base font-mono tracking-widest text-indigo-300 uppercase mb-2">
            The Creative Dimension
          </p>
          <blockquote className="text-xl sm:text-2xl font-light italic text-slate-300 leading-relaxed border-l-2 sm:border-l-0 sm:border-y border-indigo-500/20 py-4 px-6 sm:px-0">
            &ldquo;Engineering intelligence is one side of AI. <br className="hidden sm:inline" />
            Creating with it is another.&rdquo;
          </blockquote>
        </motion.div>

        <SectionHeader
          badge="Generative Direction"
          title="AI × VISUAL STORYTELLING"
          subtitle="Exploring the creative possibilities of Generative AI through cinematic storytelling, AI advertising, and motion synthesis."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {creativeCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/40"
                  : "bg-white/[0.03] text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] border border-white/[0.06]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Visual Work Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlowCard
                  glowColor="violet"
                  className="h-full flex flex-col justify-between overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedVideo(work)}
                >
                  {/* Visual Preview Thumbnail Box */}
                  <div className="relative aspect-video w-full bg-[#080B14] border-b border-white/[0.06] flex flex-col items-center justify-center overflow-hidden p-6 text-center">
                    {/* Atmospheric Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-violet-950/20 to-transparent group-hover:scale-105 transition-transform duration-500" />
                    
                    {/* Center Play Indicator */}
                    <div className="relative z-10 w-14 h-14 rounded-full bg-indigo-600/30 group-hover:bg-indigo-600/60 border border-indigo-400/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 group-hover:scale-110 mb-3">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>

                    <span className="relative z-10 text-xs font-mono tracking-wider text-slate-300 font-medium">
                      {work.placeholderText || "Play Preview"}
                    </span>
                    
                    <span className="relative z-10 text-[10px] font-mono text-slate-400 mt-1">
                      Ready for MP4 / WebM Asset
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400">
                          {work.category.replace("-", " ")}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                          {work.aspectRatio || "16:9"}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-indigo-200 transition-colors font-sans">
                        {work.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-4">
                        {work.description}
                      </p>
                    </div>

                    {/* Toolset Tags */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                      {work.toolset.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-3xl rounded-2xl bg-[#0B0F1B] border border-indigo-500/30 p-6 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Clapperboard className="w-5 h-5 text-indigo-400" />
                    <h4 className="text-lg font-bold text-white">{selectedVideo.title}</h4>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Video Container Placeholder */}
                <div className="aspect-video w-full rounded-xl bg-black/60 border border-white/[0.06] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-4">
                    <Video className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h5 className="text-base font-semibold text-white mb-1">
                    {selectedVideo.title}
                  </h5>
                  <p className="text-xs text-slate-400 max-w-md font-light mb-4">
                    Add your MP4/WebM video asset in <code className="text-indigo-300">public/videos/</code> to showcase this project.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedVideo.toolset.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.05] text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Category: {selectedVideo.category}</span>
                  <span className="text-indigo-400">Creative Video Direction</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
