"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Code, Brain } from "lucide-react";

export default function Journey() {
  const journeySteps = [
    {
      year: "2024",
      title: "Started Engineering Journey",
      description: "Began B.E. Computer Science Engineering, building foundational knowledge in programming and data structures.",
      icon: Compass,
    },
    {
      year: "2025",
      title: "Full-Stack & Backend Focus",
      description: "Developed core competencies in Java, Python, REST APIs, and database architectures (MySQL, MongoDB).",
      icon: Code,
    },
    {
      year: "2026",
      title: "AI Integration & Practical Systems",
      description: "Built the GLOF Sentinel and Vehicle Telemetry systems, merging machine learning with real-world geospatial and telemetry data.",
      icon: Brain,
    },
  ];

  return (
    <section id="journey" className="py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Corner Journey Portion */}
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <div className="text-xs font-sans font-semibold tracking-widest text-neutral-muted uppercase mb-3">
              MY JOURNEY
            </div>
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              The Path So Far
            </h2>
            <p className="text-lg font-sans text-neutral-muted leading-relaxed">
              A brief timeline of my evolution from learning foundational logic to building intelligent software systems.
            </p>
          </div>
        </div>

        {/* Flow Design */}
        <div className="lg:w-2/3">
          <div className="relative border-l-2 border-white/10 ml-6 space-y-12 pb-8">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-[#050505] border-2 border-accent/30 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>

                  <div className="bg-white/[0.02] border border-accent/20 rounded-2xl p-8 hover:scale-[1.02] hover:border-accent/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] hover:bg-white/[0.04] transition-all duration-300">
                    <div className="text-2xl font-sans font-bold text-accent mb-2">
                      {step.year}
                    </div>
                    <h3 className="text-xl font-sans font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base font-sans text-neutral-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
