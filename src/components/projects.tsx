"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Map, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PROJECTS } from "@/data/portfolio-data";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-sans font-semibold tracking-widest text-neutral-muted uppercase mb-3">
              IMPLEMENTATION
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
              My Projects
            </h2>
            <p className="text-lg font-sans text-neutral-muted max-w-2xl">
              Projects showcasing full-stack development, AI integration, and practical software engineering.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-white/[0.02] border border-white/20 text-white hover:border-accent hover:text-accent hover:bg-white/[0.05] transition-all active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-white/[0.02] border border-white/20 text-white hover:border-accent hover:text-accent hover:bg-white/[0.05] transition-all active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipeable Carousel Area - Full Width Cards */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12 pt-4 -mx-6 px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {PROJECTS.map((project, idx) => {
            const isGlof = project.id === "glof-sentinel";
            const ProjectIcon = isGlof ? Map : Code2;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="snap-center shrink-0 w-full group relative bg-transparent border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-500 shadow-xl flex flex-col xl:flex-row"
              >
                {/* Project Demo Preview (Strict Desktop 16:9 Ratio) */}
                <div className="relative w-full xl:w-[60%] aspect-video overflow-hidden border-b xl:border-b-0 xl:border-r border-white/20 bg-black">
                  {project.demoUrl ? (
                    <iframe
                      src={project.demoUrl}
                      title={`${project.title} Demo`}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 border-none"
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                  ) : null}
                  
                  {/* Top Header overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 pointer-events-none">
                    <div className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center">
                      <ProjectIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        LIVE DEMO
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content with Mild Teal Hover */}
                <div className="p-8 lg:p-12 flex flex-col flex-1 justify-center w-full xl:w-[40%] bg-[#080808] group-hover:bg-accent/[0.03] transition-colors duration-500">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg font-sans text-neutral-muted leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.technologies.slice(0, 6).map(tech => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-full text-xs font-sans font-medium text-white bg-white/[0.03] border border-white/10 group-hover:border-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-4 py-1.5 rounded-full text-xs font-sans font-medium text-neutral-muted bg-white/[0.03] border border-white/10">
                        +{project.technologies.length - 6}
                      </span>
                    )}
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-sans font-bold text-black bg-white hover:bg-accent hover:scale-105 transition-all duration-300"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-3 rounded-xl text-white bg-white/[0.03] border border-white/20 hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Helper text for swipe */}
        <div className="flex xl:hidden justify-center items-center mt-4">
          <span className="text-xs font-sans text-neutral-muted uppercase tracking-widest animate-pulse">
            ← Swipe to view more →
          </span>
        </div>

      </div>
    </section>
  );
}
