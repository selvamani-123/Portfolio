"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Code2, Wrench } from "lucide-react";

const SKILL_CARDS = [
  {
    title: "FRONTEND",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Leaflet.js", "Chart.js"],
  },
  {
    title: "BACKEND & DATABASES",
    icon: Server,
    skills: ["Python", "FastAPI", "Java Servlets", "JSP", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    title: "LANGUAGES",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "TOOLS & PLATFORMS",
    icon: Wrench,
    skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Figma", "Streamlit", "scikit-learn"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-xs font-sans font-semibold tracking-widest text-neutral-muted uppercase mb-3">
            TECHNICAL SKILLS
          </div>
          <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white tracking-tight mb-4">
            My Skills
          </h2>
          <p className="text-lg font-sans text-neutral-muted max-w-2xl">
            Technologies and tools I use for web development, problem solving, and software projects.
          </p>
        </div>

        {/* 4 Large Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-accent/20 rounded-3xl p-8 hover:-translate-y-2 hover:scale-[1.02] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:bg-white/[0.04] transition-all duration-300 shadow-lg group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-sans font-bold text-white mb-6">
                  {card.title}
                </h3>
                
                <div className="flex flex-wrap gap-2.5">
                  {card.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-sans font-medium text-neutral-light bg-white/5 border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
