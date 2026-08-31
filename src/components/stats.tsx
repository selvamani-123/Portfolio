"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section id="stats" className="py-8 px-6 lg:px-8 border-b border-white/5 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-sm font-sans text-neutral-muted"
        >
          <span>9.17 CGPA</span>
          <span className="hidden sm:inline">·</span>
          <span>3rd Year CSE</span>
          <span className="hidden sm:inline">·</span>
          <span>2 Featured Projects</span>
          <span className="hidden sm:inline">·</span>
          <span>2024–2028</span>
        </motion.div>
      </div>
    </section>
  );
}
