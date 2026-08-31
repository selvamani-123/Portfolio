"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center pointer-events-auto">
        <div
          className={`flex items-center justify-between md:justify-center px-6 py-3 w-full md:w-auto transition-all duration-300 rounded-full border ${
            isScrolled
              ? "bg-[#050505]/95 backdrop-blur-xl border-accent/20 shadow-[0_0_15px_rgba(45,212,191,0.1)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 text-sm font-sans rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-neutral-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-muted hover:text-white focus:outline-none p-1"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-accent/20 rounded-2xl p-4 space-y-4 shadow-[0_0_15px_rgba(45,212,191,0.1)] pointer-events-auto">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-sans text-neutral-muted hover:text-accent hover:bg-accent/5 px-4 py-3 rounded-xl transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
