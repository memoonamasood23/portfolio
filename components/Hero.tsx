"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { BackgroundCanvas } from "./ui/BackgroundCanvas";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#06080E]">
      {/* Dynamic Background Canvas (particles + neural links) */}
      <BackgroundCanvas />

      {/* Atmospheric Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/15 via-sky-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Subtle Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider mb-8 border border-white/[0.08] bg-[#0E1322]/80 backdrop-blur-md text-slate-300 shadow-[0_0_20px_rgba(99,102,241,0.12)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300">AVAILABLE FOR AI ROLES & CREATIVE COLLABORATIONS</span>
        </motion.div>

        {/* Hero Name Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white uppercase font-sans">
            <span className="inline-block bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>
        </motion.div>

        {/* Professional Dual Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 font-mono text-sm sm:text-base md:text-lg text-indigo-300 font-semibold tracking-widest uppercase"
        >
          <span className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-200">
            AI ENGINEER
          </span>
          <span className="text-slate-500 text-sm font-sans">×</span>
          <span className="px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-200">
            GENERATIVE AI CREATOR
          </span>
        </motion.div>

        {/* Main Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl font-normal leading-relaxed mb-4"
        >
          &ldquo;{portfolioData.primaryTagline}&rdquo;
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-sm sm:text-base text-slate-400 max-w-2xl font-light leading-relaxed mb-6"
        >
          Specializing in Generative AI, LLM fine-tuning, agentic workflow automation, LangChain, and deploying production-ready AI applications.
        </motion.p>

        {/* Secondary Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          className="text-xs sm:text-sm font-mono tracking-widest text-slate-500 uppercase mb-10"
        >
          {portfolioData.subtitle}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/30 hover:border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] transition-all duration-300 group"
          >
            <span>VIEW MY WORK</span>
            <ArrowRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wider uppercase text-slate-200 hover:text-white bg-[#0F1422]/80 hover:bg-[#151C30] border border-white/[0.1] hover:border-indigo-500/40 transition-all duration-300 backdrop-blur-md"
          >
            <span>LET&apos;S CONNECT</span>
            <Sparkles className="w-4 h-4 text-slate-400 group-hover:text-indigo-300 transition-colors" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            aboutSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border border-white/[0.15] flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-1.5 h-2 rounded-full bg-indigo-400"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
