"use client";

import React from "react";
import { CODING_PROFILES } from "@/data/portfolio-data";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-sans font-medium tracking-tight text-white uppercase">
            CODE. BUILD. SOLVE.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {CODING_PROFILES.map((profile, idx) => (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center justify-between border-b border-white/10 pb-4 group hover:border-white/40 transition-colors"
            >
              <div>
                <div className="text-base font-sans font-medium text-white mb-1">
                  {profile.platform}
                </div>
                <div className="text-sm font-sans text-neutral-muted">
                  @{profile.username}
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-muted group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
