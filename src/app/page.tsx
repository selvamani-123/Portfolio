"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Preloader from "@/components/preloader";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Journey from "@/components/journey";
import Academics from "@/components/academics";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor-glow";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Preloader onComplete={() => setLoadingComplete(true)} />
      
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Cursor Glow Effect */}
      <CursorGlow />

      <main className="min-h-screen bg-[#050505] text-[#f5f5f5] relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Academics />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
