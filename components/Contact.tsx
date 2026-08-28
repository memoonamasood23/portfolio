"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Linkedin, Github, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Container } from "./ui/Container";
import { SectionHeader } from "./ui/SectionHeader";
import { GlowCard } from "./ui/GlowCard";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulating frontend response - ready for backend API / EmailJS / Formspree integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#06080E] border-t border-white/[0.04]">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeader
          badge="Start a Conversation"
          title="LET'S BUILD SOMETHING INTELLIGENT."
          subtitle="Have an AI idea, creative project, or product concept? Let's turn it into something real."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlowCard glowColor="indigo" className="p-8 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase font-mono tracking-wider">
                Direct Contact
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] group hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-500 block">Email</span>
                    <a
                      href={`mailto:${portfolioData.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-indigo-300 transition-colors truncate block"
                    >
                      {portfolioData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.email, "email")}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="Copy email"
                >
                  {copiedField === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] group hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block">Phone</span>
                    <a
                      href={`tel:${portfolioData.phone}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-sky-300 transition-colors"
                    >
                      {portfolioData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(portfolioData.phone, "phone")}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {portfolioData.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3">
                  Social & Code Platforms
                </span>
                <div className="flex items-center gap-3">
                  {portfolioData.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-indigo-500/30 text-xs font-mono text-slate-300 hover:text-white transition-all"
                    >
                      {social.platform === "LinkedIn" && <Linkedin className="w-4 h-4 text-sky-400" />}
                      {social.platform === "GitHub" && <Github className="w-4 h-4 text-indigo-400" />}
                      {social.platform === "Email" && <Mail className="w-4 h-4 text-emerald-400" />}
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlowCard glowColor="indigo" className="p-8 sm:p-10">
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mb-8">
                Inquire about full-time AI Engineering roles, freelance generative AI projects, or video collaborations.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Received!</h4>
                  <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                    Thank you for reaching out. I will review your note and respond back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/[0.08] focus:border-indigo-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/[0.08] focus:border-indigo-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                      Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project, role, or collaboration idea..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D18] border border-white/[0.08] focus:border-indigo-500 text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 border border-indigo-400/30 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
