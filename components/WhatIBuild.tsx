"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Bot, Eye, Clapperboard, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const WhatIBuild: React.FC = () => {
  const cardIcons: Record<string, React.ReactNode> = {
    "01": <Sparkles className="w-6 h-6 text-indigo-400" />,
    "02": <Bot className="w-6 h-6 text-sky-400" />,
    "03": <Eye className="w-6 h-6 text-emerald-400" />,
    "04": <Clapperboard className="w-6 h-6 text-violet-400" />,
  };

  const glowTypes: Record<string, "indigo" | "blue" | "emerald" | "violet"> = {
    "01": "indigo",
    "02": "blue",
    "03": "emerald",
    "04": "violet",
  };

  return (
    <section className="py-20 sm:py-28 relative bg-[#06080E]">
      <Container>
        <SectionHeader
          badge="Core Capabilities"
          title="WHAT I BUILD"
          subtitle="Architecting scalable intelligent workflows and generative digital experiences across four core pillars."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.whatIBuild.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard
                glowColor={glowTypes[item.number]}
                className="p-8 h-full flex flex-col justify-between group border-white/[0.08]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {cardIcons[item.number]}
                    </div>
                    <span className="text-2xl font-mono font-bold text-slate-700 group-hover:text-indigo-400/50 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 uppercase font-mono">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
