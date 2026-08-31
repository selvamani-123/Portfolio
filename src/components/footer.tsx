import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 lg:px-8 bg-[#050505] border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-sans font-medium text-neutral-muted">
          © {currentYear} {PERSONAL_INFO.name}
        </div>
        <div className="text-sm font-sans font-medium text-neutral-muted">
          Built with React • Designed with purpose
        </div>
      </div>
    </footer>
  );
}
