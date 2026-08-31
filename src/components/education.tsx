"use client";

import React from "react";
import { EDUCATION_HISTORY } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-mono text-neutral-muted tracking-widest uppercase mb-4">
            05 / EDUCATION
          </div>
        </div>

        <div className="space-y-12 max-w-3xl">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-12 ${
                edu.isPrimary ? "" : "opacity-70"
              }`}
            >
              <div className="w-32 flex-shrink-0 text-sm font-sans text-neutral-muted pt-1">
                {edu.period}
              </div>
              <div className="space-y-2">
                <h3 className={`font-sans font-medium ${edu.isPrimary ? "text-xl text-white" : "text-lg text-neutral-light"}`}>
                  {edu.degree}
                </h3>
                <div className="text-sm font-sans text-neutral-muted">
                  {edu.institution}
                </div>
                {edu.score && (
                  <div className="text-sm font-sans font-medium text-white pt-2">
                    {edu.scoreLabel}: {edu.score}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
