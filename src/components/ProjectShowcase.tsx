import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Layers, ExternalLink } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectProject }) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'FINTECH', 'SYSTEMS', 'GPU SHADERS', 'STORAGE'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filterCategory === 'ALL') return true;
    if (filterCategory === 'FINTECH') return project.category.includes('FINTECH');
    if (filterCategory === 'SYSTEMS') return project.category.includes('FABRIC');
    if (filterCategory === 'GPU SHADERS') return project.category.includes('GPU');
    if (filterCategory === 'STORAGE') return project.category.includes('STORAGE');
    return true;
  });

  return (
    <section id="architecture" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870]">
              CASE STUDIES &amp; SYSTEMS ARCHITECTURE
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Engineered Mobile Runtimes
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#111827] p-1 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`rounded-[2px] px-3 py-1.5 transition-colors cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#9FE870] font-semibold text-[#080B12]'
                    : 'text-[#A1AAB8] hover:text-[#F5F7FA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Fluid Grid of Editorial Project Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-[8px] border border-[#273244] bg-[#111827]/70 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-t-[#9FE870] hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)]"
            >
              {/* Header: Label Caps & Year */}
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.12em] text-[#A1AAB8]">
                  <span className="text-[#65D6C5]">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-4 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F7FA] transition-colors group-hover:text-[#9FE870]">
                  {project.title}
                </h3>
                <div className="mt-1 font-['Space_Grotesk'] text-sm font-medium text-[#65D6C5]">
                  {project.subtitle}
                </div>

                {/* Narrative Summary */}
                <p className="mt-4 font-['Inter'] text-sm leading-relaxed text-[#A1AAB8]">
                  {project.summary}
                </p>

                {/* Architecture Highlight Box */}
                <div className="mt-5 rounded-[4px] border border-[#273244]/80 bg-[#080B12]/80 p-3.5 font-mono text-xs text-[#F5F7FA]">
                  <div className="text-[10px] uppercase tracking-wider text-[#A1AAB8] mb-1">
                    Architectural Invariant:
                  </div>
                  <div className="text-[#9FE870] leading-snug">{project.architectureHighlight}</div>
                </div>

                {/* Concrete Quantitative Metrics Grid */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[#273244] py-4 font-mono">
                  {project.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] text-[#A1AAB8]">{m.label}</div>
                      <div className="text-lg font-bold text-[#F5F7FA] tabular-nums">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#65D6C5] font-medium">{m.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tokens */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-[4px] border border-[#273244] bg-[#1A2234]/70 px-2.5 py-1 font-mono text-[11px] text-[#A1AAB8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#273244]/60 flex items-center justify-between">
                <span className="font-mono text-xs text-[#A1AAB8]">
                  Client: <span className="text-[#F5F7FA]">{project.clientType}</span>
                </span>
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 font-mono text-xs font-semibold text-[#9FE870] transition-colors hover:text-[#F5F7FA] cursor-pointer"
                >
                  <span>Dossier &amp; Architecture</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
