"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Code2, Award, Star } from "lucide-react";
import { CERTIFICATIONS } from "@/data/portfolio-data";

export default function Achievements() {
  const achievements = [
    {
      title: "168+ LeetCode Problems",
      description: "Consistent problem solving and algorithmic practice.",
      icon: Code2,
    },
    {
      title: "9.17 CGPA",
      description: "Academic excellence in B.E. Computer Science Engineering.",
      icon: Trophy,
    },
    ...CERTIFICATIONS.map((cert) => ({
      title: cert.title,
      description: cert.organization,
      icon: Award,
    })),
  ];

  return (
    <section id="achievements" className="py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-sans font-semibold tracking-widest text-neutral-muted uppercase mb-3 text-center">
            MY ACHIEVEMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight text-center">
            Academic, technical, and professional milestones.
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-accent/30 rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/40 transition-all shadow-sm flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-sans font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm font-sans text-neutral-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
