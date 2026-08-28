"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Video, Sparkles } from "lucide-react";
import { experiencesData } from "@/data/experience";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Career Journey"
          title="PROFESSIONAL EXPERIENCE"
          subtitle="Hands-on experience deploying generative AI architectures, fine-tuning LLMs, and directing cinematic AI video workflows."
        />

        <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  exp.isCurrent
                    ? "border-indigo-400 bg-indigo-950/80 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    : "border-slate-600 bg-[#06080E] group-hover:border-indigo-400"
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    exp.isCurrent ? "bg-indigo-400 animate-pulse" : "bg-slate-500 group-hover:bg-indigo-400"
                  }`} />
                </div>
              </div>

              {/* Experience Card */}
              <GlowCard
                glowColor={exp.isCurrent ? "indigo" : "blue"}
                className="p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <div className="text-base sm:text-lg font-mono font-medium text-indigo-300 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-indigo-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-400 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Key Highlights & Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Tech Chips */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-indigo-500/40 transition-colors"
                      >
                        {tool}
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
