"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BrainCircuit, Cpu, Terminal, CheckCircle2 } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Certifications: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-sky-400" />,
    Terminal: <Terminal className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 relative bg-[#06080E] border-t border-white/[0.04]">
      <Container>
        <SectionHeader
          badge="Verified Credentials"
          title="CERTIFICATIONS"
          subtitle="Continuous specialized training in deep learning, machine learning systems, and Python data engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard
                glowColor={index === 0 ? "indigo" : index === 1 ? "blue" : "emerald"}
                className="p-6 sm:p-8 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[cert.iconName] || <Award className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] border border-white/[0.08] text-indigo-300">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug font-sans group-hover:text-indigo-200 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light mb-6">
                    {cert.focusArea}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Credential Completed</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
