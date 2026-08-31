"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons";
import { PERSONAL_INFO, CODING_PROFILES } from "@/data/portfolio-data";

export default function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
    },
    {
      label: "Phone",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    ...CODING_PROFILES.map((profile) => ({
      label: profile.platform,
      value: `@${profile.username}`,
      href: profile.url,
      icon: profile.icon === "Github" ? GithubIcon : profile.icon === "Linkedin" ? LinkedinIcon : LeetcodeIcon,
    })),
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Minimal Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg font-sans text-neutral-muted max-w-2xl mx-auto">
            Connect with me through any of the platforms below to discuss engineering opportunities, collaborations, or open source projects.
          </p>
        </div>

        {/* Medium/Large Icon Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== "Email" && method.label !== "Phone" ? "_blank" : undefined}
                rel={method.label !== "Email" && method.label !== "Phone" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent hover:scale-110 hover:shadow-[0_0_25px_rgba(45,212,191,0.2)] transition-all duration-300 group"
                aria-label={method.label}
                title={method.label}
              >
                <Icon className="w-8 h-8 text-neutral-muted group-hover:text-accent transition-colors" />
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
