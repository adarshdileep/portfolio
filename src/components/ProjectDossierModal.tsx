import React, { useState } from 'react';
import { Project } from '../types';
import { X, Check, Copy, ArrowUpRight, Cpu, Layers, ShieldCheck } from 'lucide-react';

interface ProjectDossierModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestAudit: () => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({
  project,
  onClose,
  onRequestAudit,
}) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippetPreview) {
      navigator.clipboard.writeText(project.codeSnippetPreview.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative my-8 w-full max-w-4xl rounded-[8px] border border-[#273244] bg-[#080B12] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ring-1 ring-[#1A2234]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded p-1.5 text-[#A1AAB8] hover:bg-[#111827] hover:text-[#F5F7FA] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#A1AAB8]">
          <span className="text-[#65D6C5] font-semibold">{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <span aria-hidden="true">·</span>
          <span>Client: {project.clientType}</span>
        </div>

        {/* Title */}
        <h2 className="mt-3 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
          {project.title}
        </h2>
        <div className="mt-1 font-['Space_Grotesk'] text-base text-[#9FE870]">
          {project.subtitle}
        </div>

        {/* Summary */}
        <p className="mt-4 font-['Inter'] text-sm sm:text-base leading-relaxed text-[#A1AAB8]">
          {project.summary}
        </p>

        {/* Invariant Highlight */}
        <div className="mt-6 rounded-[4px] border border-[#273244] bg-[#111827] p-4 font-mono text-xs text-[#F5F7FA]">
          <div className="text-[10px] uppercase tracking-wider text-[#A1AAB8] mb-1">
            Core Architectural Invariant:
          </div>
          <div className="text-[#9FE870] font-medium leading-relaxed">
            {project.architectureHighlight}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-[#273244] py-4 font-mono">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="rounded-[4px] bg-[#111827]/60 p-3 border border-[#273244]/50">
              <div className="text-[10px] text-[#A1AAB8]">{m.label}</div>
              <div className="mt-1 text-xl font-bold text-[#F5F7FA] tabular-nums">{m.value}</div>
              <div className="text-xs text-[#65D6C5] font-semibold">{m.delta}</div>
            </div>
          ))}
        </div>

        {/* Key Engineering Challenges */}
        <div className="mt-6 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[#A1AAB8]">
            Key Engineering Challenges:
          </div>
          <ul className="space-y-2 font-['Inter'] text-xs sm:text-sm text-[#A1AAB8]">
            {project.keyChallenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-mono text-[#FF5555] font-bold">&gt;</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Decisions & Outcomes */}
        <div className="mt-6 space-y-3">
          <div className="font-mono text-xs uppercase tracking-wider text-[#A1AAB8]">
            Architectural Decisions &amp; Measurable Outcomes:
          </div>
          <div className="space-y-3">
            {project.architecturalDecisions.map((dec, i) => (
              <div key={i} className="rounded-[4px] border border-[#273244] bg-[#111827] p-4 text-xs">
                <div className="font-['Space_Grotesk'] text-sm font-bold text-[#F5F7FA]">
                  {dec.decision}
                </div>
                <div className="mt-1 font-['Inter'] text-[#A1AAB8]">{dec.rationale}</div>
                <div className="mt-2 font-mono text-[11px] text-[#65D6C5]">
                  <span className="text-[#9FE870] font-semibold">Outcome: </span>
                  {dec.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview if available */}
        {project.codeSnippetPreview && (
          <div className="mt-6 overflow-hidden rounded-[4px] border border-[#273244] bg-[#111827]">
            <div className="flex items-center justify-between border-b border-[#273244] bg-[#1A2234] px-4 py-2 font-mono text-xs text-[#A1AAB8]">
              <span>{project.codeSnippetPreview.filename}</span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 hover:text-[#9FE870] transition-colors cursor-pointer"
              >
                {copied ? <Check className="h-3 w-3 text-[#9FE870]" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
            <pre className="p-4 font-mono text-xs text-[#F5F7FA] overflow-x-auto leading-relaxed">
              {project.codeSnippetPreview.code}
            </pre>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#273244] pt-5">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-[4px] border border-[#273244] bg-[#111827] px-2.5 py-1 font-mono text-[10px] text-[#A1AAB8]"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestAudit();
            }}
            className="rounded-[4px] bg-[#9FE870] px-5 py-2.5 font-mono text-xs font-semibold uppercase text-[#080B12] hover:shadow-[0_0_20px_rgba(159,232,112,0.4)] transition-all cursor-pointer"
          >
            Request Architecture Review For Your Stack
          </button>
        </div>
      </div>
    </div>
  );
};
