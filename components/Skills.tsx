"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Code2, Layers, Database, Video, Workflow } from "lucide-react";
import { skillsData } from "@/data/skills";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-sky-400" />,
    Code2: <Code2 className="w-5 h-5 text-emerald-400" />,
    Layers: <Layers className="w-5 h-5 text-amber-400" />,
    Database: <Database className="w-5 h-5 text-violet-400" />,
    Video: <Video className="w-5 h-5 text-pink-400" />,
    Workflow: <Workflow className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Technical Stack"
          title="TECHNICAL SKILLS"
          subtitle="Comprehensive engineering toolkit across foundation models, applied machine learning, software systems, and creative AI suites."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlowCard className="p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[category.iconName] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white uppercase font-mono tracking-wide">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_12px_rgba(99,102,241,0.2)] transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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
