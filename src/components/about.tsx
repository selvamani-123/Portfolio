"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, QUICK_STATS } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-10"
        >
          <div className="text-xs font-sans font-semibold tracking-widest text-neutral-muted uppercase">
            ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
            CSE Student & <span className="text-accent">Product Builder</span>
          </h2>
          <p className="text-lg sm:text-xl font-sans font-medium text-neutral-light max-w-2xl mx-auto">
            Building practical software solutions through full-stack development, AI integrations, and continuous learning.
          </p>
        </motion.div>

        {/* Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16 space-y-6"
        >
          <p className="text-base sm:text-lg font-sans text-neutral-muted leading-relaxed">
            I am a Computer Science Engineering student profoundly passionate about writing clean, efficient code and building practical software solutions. My work spans robust backend systems, intuitive full-stack web applications, and cutting-edge AI-powered integrations.
          </p>
          <p className="text-base sm:text-lg font-sans text-neutral-muted leading-relaxed">
            Whether I'm architecting databases, deploying APIs, or training machine learning models for geospatial analysis, I constantly strive to solve complex problems logically. I continuously improve my technical proficiency through hands-on academic projects, rigorous algorithmic problem solving on platforms like LeetCode, and a deep interest in scalable product architectures.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
          {QUICK_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="bg-white/[0.02] border border-accent/20 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-[1.02] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl font-sans font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-base font-sans font-bold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm font-sans text-neutral-muted text-center">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl w-full flex flex-col items-center"
        >
          <div className="text-sm font-sans font-medium text-accent mb-6 uppercase tracking-widest border-b border-accent/20 pb-2 px-8">
            Core Focus Areas
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {PERSONAL_INFO.coreCompetencies.map((comp) => (
              <span
                key={comp}
                className="px-5 py-2.5 rounded-full text-sm font-sans font-medium text-white bg-white/[0.02] border border-accent/20 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:scale-105 transition-all duration-300 cursor-default"
              >
                {comp}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
