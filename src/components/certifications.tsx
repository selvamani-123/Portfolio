"use client";

import React from "react";
import { CERTIFICATIONS } from "@/data/portfolio-data";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-mono text-neutral-muted tracking-widest uppercase mb-4">
            04 / CERTIFICATIONS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-white/10 pb-6 group"
            >
              <h3 className="text-lg font-sans font-medium text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm font-sans text-neutral-muted">
                {cert.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
