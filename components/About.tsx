"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Film, CheckCircle2, Workflow } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const About: React.FC = () => {
  const pillarIcons: Record<string, React.ReactNode> = {
    "01": <Workflow className="w-6 h-6 text-indigo-400" />,
    "02": <Cpu className="w-6 h-6 text-sky-400" />,
    "03": <Film className="w-6 h-6 text-violet-400" />,
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Profile Overview"
          title="ABOUT ME"
          subtitle="Combining engineering rigor with creative exploration to deliver intelligent, production-ready AI solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0F1B]/90 border border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-sky-500" />
              
              <p className="text-white font-medium text-lg sm:text-xl leading-relaxed mb-4">
                &ldquo;{portfolioData.aboutHeadline}&rdquo;
              </p>

              {portfolioData.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}

              <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-indigo-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Agentic Workflows & n8n
                </span>
                <span className="flex items-center gap-1.5 text-sky-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" /> LLMs & Fine-Tuning
                </span>
                <span className="flex items-center gap-1.5 text-violet-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400" /> AI Video Direction
                </span>
              </div>
            </div>
          </motion.div>

          {/* Three Visual Focus Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {portfolioData.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <GlowCard className="p-6 transition-all duration-300 hover:translate-x-1">
                  <div className="flex items-start gap-5">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-1">
                        {pillarIcons[pillar.number]}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400">
                        {pillar.number}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold tracking-wide text-white mb-1.5 uppercase font-mono">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
