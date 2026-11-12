import React, { useState } from 'react';
import { TELEMETRY_LOGS } from '../data/portfolioData';
import { GitCommit, Filter, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

export const TelemetryLog: React.FC = () => {
  const [activeSubsystem, setActiveSubsystem] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const subsystems = ['All', 'JSI & C++', 'Fabric & Rendering', 'Hermes GC', 'Turbomodules', 'Storage/CRDT'];

  const filteredLogs = TELEMETRY_LOGS.filter((log) => {
    if (activeSubsystem === 'All') return true;
    return log.subsystem === activeSubsystem;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="telemetry" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870]">
              SYSTEMS ENGINEERING CHANGELOG
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Architecture Telemetry Log
            </h2>
          </div>

          {/* Subsystem Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#111827] p-1 font-mono text-xs">
            {subsystems.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubsystem(sub)}
                className={`rounded-[2px] px-3 py-1.5 transition-colors cursor-pointer ${
                  activeSubsystem === sub
                    ? 'bg-[#65D6C5] font-semibold text-[#080B12]'
                    : 'text-[#A1AAB8] hover:text-[#F5F7FA]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Log Table / Row Partition */}
        <div className="mt-8 overflow-hidden rounded-[8px] border border-[#273244] bg-[#111827]/70 backdrop-blur-md">
          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-12 border-b border-[#273244] bg-[#111827] px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-[#A1AAB8]">
            <div className="col-span-3">TIMESTAMP &amp; SUBSYSTEM</div>
            <div className="col-span-6">ARCHITECTURAL FEATURE &amp; COMMIT</div>
            <div className="col-span-3 text-right">BENCHMARK DELTA</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#273244]">
            {filteredLogs.map((log) => {
              const isExpanded = expandedId === log.id;
              return (
                <div
                  key={log.id}
                  onClick={() => toggleExpand(log.id)}
                  className="group cursor-pointer transition-colors hover:bg-[#1A2234]/60"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 px-6 py-4.5 sm:items-center">
                    {/* Col 1: Timestamp & Subsystem */}
                    <div className="sm:col-span-3 font-mono text-xs">
                      <div className="text-[#A1AAB8]">{log.timestamp}</div>
                      <div className="mt-0.5 inline-block text-[10px] text-[#9FE870] font-semibold">
                        {log.subsystem}
                      </div>
                    </div>

                    {/* Col 2: Headline & Commit hash */}
                    <div className="sm:col-span-6">
                      <div className="flex items-center gap-2">
                        <GitCommit className="h-4 w-4 shrink-0 text-[#65D6C5]" />
                        <h4 className="font-['Space_Grotesk'] text-base font-semibold text-[#F5F7FA] transition-colors group-hover:text-[#9FE870]">
                          {log.headline}
                        </h4>
                      </div>
                      <div className="mt-1 flex items-center gap-2 font-mono text-[11px] text-[#A1AAB8]">
                        <span className="text-[#65D6C5]">commit {log.commitHash}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{log.details.substring(0, 75)}...</span>
                      </div>
                    </div>

                    {/* Col 3: Performance Gain Callout */}
                    <div className="sm:col-span-3 flex items-center justify-between sm:justify-end gap-3 font-mono">
                      <span className="text-sm font-bold text-[#65D6C5] tabular-nums">
                        {log.metric}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-[#A1AAB8]" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-[#A1AAB8]" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Detail Tray */}
                  {isExpanded && (
                    <div className="border-t border-[#273244]/60 bg-[#080B12]/80 px-6 py-4 font-mono text-xs">
                      <div className="text-[#65D6C5] font-semibold mb-1">
                        Technical Execution Note:
                      </div>
                      <p className="font-['Inter'] text-sm text-[#A1AAB8] leading-relaxed">
                        {log.details}
                      </p>
                      <div className="mt-3 flex items-center gap-4 text-[11px] text-[#A1AAB8]">
                        <span>Verified on: Apple A18 Pro &amp; Snapdragon 8 Gen 3</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#9FE870]">Telemetry Invariant: PASSED</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
