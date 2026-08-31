"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-6 lg:px-8 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-accent uppercase">
                OPEN TO INTERNSHIPS & SOFTWARE ENGINEERING OPPORTUNITIES
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-bold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m<br />
                {PERSONAL_INFO.name.split(" ")[0]}{" "}
                <span className="text-accent">{PERSONAL_INFO.name.split(" ")[1] || ""}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-sans font-medium text-neutral-light">
                CSE Student <span className="text-accent px-2">|</span> Full-Stack Developer <span className="text-accent px-2">|</span> AI Enthusiast
              </p>
            </div>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-neutral-muted font-sans font-normal max-w-xl leading-relaxed">
              Computer Science Engineering student focused on building practical software products, full-stack applications, and AI-powered solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-sans font-bold text-black bg-accent hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] transition-all duration-300 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.resumePath}
                download="Selvamani_M_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-sans font-bold text-white border border-white/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_rgba(45,212,191,0.15)] hover:scale-[1.02] transition-all duration-300 active:scale-95 group"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4 text-neutral-muted group-hover:text-accent transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px] transform scale-110" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-accent/40 shadow-[0_0_50px_rgba(45,212,191,0.2)] bg-[#0a0a0a] p-2 hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(45,212,191,0.3)] transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Selvamani M"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
