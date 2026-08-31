"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION_HISTORY, CERTIFICATIONS } from "@/data/portfolio-data";

export default function Academics() {
  return (
    <section id="academics" className="py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Academics Column */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-2">
              Academics
            </h2>
            <p className="text-base font-sans text-neutral-muted">
              Educational background and foundational studies.
            </p>
          </div>

          <div className="relative ml-3 space-y-8 pb-8">
            {/* Crisp vertical line */}
            <div className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-white/20" />

            {EDUCATION_HISTORY.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-10"
              >
                {/* Minimal Teal Dot */}
                <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-accent ring-4 ring-[#050505]" />

                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-accent mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-sans text-neutral-muted mb-3">
                    {edu.institution}
                  </div>
                  {edu.score && (
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-sans text-white font-medium">
                      {edu.scoreLabel}: {edu.score}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-2">
              Certifications
            </h2>
            <p className="text-base font-sans text-neutral-muted">
              Professional milestones collected during 2026.
            </p>
          </div>

          <div className="relative ml-3 space-y-8 pb-8">
            {/* Crisp vertical line */}
            <div className="absolute left-[3px] top-2 bottom-0 w-[2px] bg-white/20" />
            
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-10"
              >
                {/* Minimal Teal Dot */}
                <div className="absolute left-0 top-3 w-2 h-2 rounded-full bg-accent ring-4 ring-[#050505]" />

                <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-2 text-xs font-sans font-bold text-accent uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.category}</span>
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-sans text-neutral-muted">
                    Issued by: <span className="text-neutral-light font-medium">{cert.organization}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
