"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { educationData } from "@/data/certifications";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#06080E] border-t border-white/[0.04]">
      <Container>
        <SectionHeader
          badge="Academic Background"
          title="EDUCATION"
          subtitle="Rigorous foundations in theoretical computation, artificial intelligence, and algorithmic systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlowCard glowColor="indigo" className="p-8 sm:p-10 border-indigo-500/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-indigo-400" />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      {educationData.degree}
                    </h3>
                    {educationData.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {educationData.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-mono font-medium text-indigo-300 mb-2">
                    {educationData.institution}
                  </h4>

                  <p className="text-sm text-slate-400 font-light leading-relaxed max-w-2xl mb-4">
                    {educationData.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {educationData.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {educationData.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </Container>
    </section>
  );
};
