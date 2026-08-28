"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { Container } from "./ui/Container";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 relative bg-[#04060A] border-t border-white/[0.06] text-slate-400">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Logo & Identity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-white font-mono font-bold text-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              {portfolioData.monogram}
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-sans tracking-wide">
                {portfolioData.name}
              </h4>
              <p className="text-xs font-mono text-indigo-300">
                {portfolioData.title}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                {social.platform === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                {social.platform === "GitHub" && <Github className="w-4 h-4" />}
                {social.platform === "Email" && <Mail className="w-4 h-4" />}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 flex items-center justify-center text-indigo-300 hover:text-white transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
          <p>© 2026 Memoona Masood. All rights reserved.</p>
          <p className="text-slate-600">
            Crafted for Next-Generation AI & Cinematic Experiences
          </p>
        </div>
      </Container>
    </footer>
  );
};
