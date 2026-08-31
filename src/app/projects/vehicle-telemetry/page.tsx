import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Activity, Layers, Gauge, Cpu, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/portfolio-data";
import TelemetryVisual from "@/components/telemetry-visual";
import ArchitectureDiagram from "@/components/architecture-diagram";
import { GithubIcon } from "@/components/icons";

export const metadata = {
  title: "Vehicle Telemetry Alert & Fault Detection System | Selvamani M",
  description: "Real-time vehicle telemetry monitoring, anomaly detection and rule-based fault alerting platform built with FastAPI and Scikit-learn.",
};

export default function VehicleTelemetryCaseStudy() {
  const project = PROJECTS.find((p) => p.id === "vehicle-telemetry")!;

  return (
    <div className="min-h-screen bg-black text-white bg-tech-grid pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-muted hover:text-white transition-colors bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyber-400" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 font-semibold">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-neutral-muted">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-cyber-300 font-mono">
            {project.subtitle}
          </p>

          <p className="text-base text-neutral-light max-w-3xl leading-relaxed">
            {project.detailedDescription}
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-black bg-white hover:bg-cyber-300 transition-colors shadow-lg"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Key Metrics / Specs Card */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="p-4 rounded-2xl glass-bento">
              <span className="text-[11px] font-mono text-neutral-muted block">
                {metric.label}
              </span>
              <span className="text-sm sm:text-base font-bold font-mono text-white mt-1 block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Dashboard Image & Live Visual Demonstration */}
        <div className="space-y-4">
          <h2 className="text-lg font-mono font-bold text-white flex items-center gap-2">
            <Gauge className="w-4 h-4 text-cyber-400" />
            <span>Interactive Telemetry &amp; Fault Dashboard Preview</span>
          </h2>
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/project-images/vehicle-telemetry.jpg"
                alt="Vehicle Telemetry Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4 border-t border-white/10">
              <TelemetryVisual />
            </div>
          </div>
        </div>

        {/* Problem & Solution Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl glass-bento p-6 sm:p-8 space-y-3">
            <h3 className="text-base font-bold font-mono text-white uppercase tracking-wide">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-neutral-light leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="rounded-3xl glass-bento p-6 sm:p-8 space-y-3">
            <h3 className="text-base font-bold font-mono text-cyber-300 uppercase tracking-wide">
              The Architectural Solution
            </h3>
            <p className="text-sm text-neutral-light leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="space-y-4">
          <h2 className="text-lg font-mono font-bold text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyber-400" />
            <span>Telemetry Pipeline &amp; Fault Detection Architecture</span>
          </h2>
          <ArchitectureDiagram
            steps={project.architectureSteps}
            projectName={project.title}
          />
        </div>

        {/* Key Features & Capabilities */}
        <div className="rounded-2xl glass-bento p-6 sm:p-8 space-y-6">
          <h3 className="text-base font-mono font-bold text-white uppercase tracking-wider">
            Key Capabilities &amp; System Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-cyber-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-neutral-light">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Tech Stack List */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono text-neutral-muted uppercase tracking-wider">
            Full Technology &amp; Library Stack:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-light"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/#projects"
            className="text-xs font-mono text-neutral-muted hover:text-white transition-colors"
          >
            ← Back to Projects
          </Link>
          <Link
            href="/projects/glof-sentinel"
            className="text-xs font-mono text-cyber-300 hover:text-white transition-colors"
          >
            ← Featured: GLOF Sentinel
          </Link>
        </div>

      </div>
    </div>
  );
}
