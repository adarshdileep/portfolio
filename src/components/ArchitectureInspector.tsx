import React, { useState } from 'react';
import { CODE_INSPECTOR_FILES } from '../data/portfolioData';
import { Copy, Check, FileCode, Cpu, Layers, Zap, Info } from 'lucide-react';

export const ArchitectureInspector: React.FC = () => {
  const [selectedFileId, setSelectedFileId] = useState<string>('jsi-host-object');
  const [copied, setCopied] = useState<boolean>(false);
  const [activeInsightIndex, setActiveInsightIndex] = useState<number>(0);

  const activeFile =
    CODE_INSPECTOR_FILES.find((f) => f.id === selectedFileId) || CODE_INSPECTOR_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = activeFile.code.split('\n');

  return (
    <section id="code-inspector" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870]">
              SYSTEMS CODE &amp; JSI INTERNALS
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Architecture &amp; Memory Pipeline
            </h2>
          </div>
          <p className="max-w-md font-['Inter'] text-sm text-[#A1AAB8]">
            Interactive code review of zero-copy C++ HostObjects, custom Fabric Shadow Nodes,
            and compiled GPU shaders powering 120 FPS mobile applications.
          </p>
        </div>

        {/* Visual Architecture Thread Pipeline Diagram */}
        <div className="mt-8 rounded-[8px] border border-[#273244] bg-[#111827]/70 p-5 backdrop-blur-md">
          <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8] mb-3">
            Hermes &lt;-&gt; JSI &lt;-&gt; Metal/Vulkan Thread Architecture
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3 text-center">
              <div className="text-[#9FE870] font-bold">1. JS THREAD</div>
              <div className="text-[10px] text-[#A1AAB8] mt-1">Hermes Bytecode VM</div>
              <div className="mt-2 text-[10px] text-[#F5F7FA] bg-[#1A2234] py-1 rounded">
                jsi::HostObject Invocation
              </div>
            </div>

            <div className="rounded-[4px] border border-[#65D6C5]/50 bg-[#080B12] p-3 text-center glow-cyan-sm">
              <div className="text-[#65D6C5] font-bold">2. ZERO-COPY JSI</div>
              <div className="text-[10px] text-[#A1AAB8] mt-1">Direct C++ Pointers</div>
              <div className="mt-2 text-[10px] text-[#65D6C5] bg-[#1A2234] py-1 rounded">
                &lt; 0.1ms Memory Bridge
              </div>
            </div>

            <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3 text-center">
              <div className="text-[#FFB86C] font-bold">3. SHADOW TREE</div>
              <div className="text-[10px] text-[#A1AAB8] mt-1">Fabric C++ Nodes</div>
              <div className="mt-2 text-[10px] text-[#F5F7FA] bg-[#1A2234] py-1 rounded">
                Yoga Layout Bypass
              </div>
            </div>

            <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3 text-center">
              <div className="text-[#9FE870] font-bold">4. GPU RENDER</div>
              <div className="text-[10px] text-[#A1AAB8] mt-1">Metal / Vulkan Surface</div>
              <div className="mt-2 text-[10px] text-[#9FE870] bg-[#1A2234] py-1 rounded">
                120 FPS Direct GPU Blit
              </div>
            </div>
          </div>
        </div>

        {/* Code Panel & Insight Split Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Main Code Block (8 cols) */}
          <div className="lg:col-span-8 overflow-hidden rounded-[8px] border border-[#273244] bg-[#080B12] shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)]">
            {/* Header bar with window dots and tabs */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#273244] bg-[#111827] px-4 py-2.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5555]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFB86C]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9FE870]"></span>
                </div>
                {/* File Tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pl-3 font-mono text-xs">
                  {CODE_INSPECTOR_FILES.map((file) => (
                    <button
                      key={file.id}
                      onClick={() => {
                        setSelectedFileId(file.id);
                        setActiveInsightIndex(0);
                      }}
                      className={`flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 transition-colors cursor-pointer whitespace-nowrap ${
                        selectedFileId === file.id
                          ? 'bg-[#1A2234] text-[#9FE870] font-semibold border-b border-[#9FE870]'
                          : 'text-[#A1AAB8] hover:text-[#F5F7FA]'
                      }`}
                    >
                      <FileCode className="h-3 w-3" />
                      <span>{file.filename}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Copy button */}
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#080B12] px-2.5 py-1 font-mono text-xs text-[#A1AAB8] transition-colors hover:border-[#65D6C5] hover:text-[#65D6C5] cursor-pointer"
              >
                {copied ? <Check className="h-3 w-3 text-[#9FE870]" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Code Body with Line Numbers */}
            <div className="max-h-[520px] overflow-auto p-4 font-mono text-xs leading-relaxed select-text">
              <pre className="table w-full">
                {lines.map((line, idx) => {
                  const lineNum = idx + 1;
                  // Custom syntax highlighting tokens
                  let formattedLine: React.ReactNode = line;

                  if (line.trim().startsWith('//')) {
                    formattedLine = <span className="text-[#A1AAB8]/60">{line}</span>;
                  } else if (line.includes('#include') || line.includes('import ')) {
                    formattedLine = <span className="text-[#65D6C5]">{line}</span>;
                  } else if (line.includes('class ') || line.includes('override') || line.includes('public:')) {
                    formattedLine = <span className="text-[#9FE870] font-medium">{line}</span>;
                  } else if (line.includes('return ') || line.includes('const auto') || line.includes('int ')) {
                    formattedLine = (
                      <span>
                        <span className="text-[#FF5555]">{line.substring(0, 10)}</span>
                        <span className="text-[#F5F7FA]">{line.substring(10)}</span>
                      </span>
                    );
                  }

                  return (
                    <div key={lineNum} className="table-row hover:bg-[#111827]/60">
                      <span className="table-cell select-none pr-4 text-right text-[11px] text-[#273244] font-mono w-10">
                        {lineNum}
                      </span>
                      <span className="table-cell text-[#F5F7FA] whitespace-pre">{formattedLine}</span>
                    </div>
                  );
                })}
              </pre>
            </div>
          </div>

          {/* Key Insights & Architectural Explanation (4 cols) */}
          <div className="space-y-4 lg:col-span-4">
            <div className="rounded-[8px] border border-[#273244] bg-[#111827]/80 p-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9FE870]">
                <Info className="h-3.5 w-3.5" />
                <span>File Context</span>
              </div>
              <p className="mt-2 font-['Inter'] text-xs leading-relaxed text-[#A1AAB8]">
                {activeFile.description}
              </p>
            </div>

            <div className="rounded-[8px] border border-[#273244] bg-[#111827]/80 p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8] mb-3">
                Architectural Invariants
              </div>

              <div className="space-y-3">
                {activeFile.keyInsights.map((insight, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveInsightIndex(idx)}
                    className={`w-full text-left rounded-[4px] border p-3 transition-all cursor-pointer font-mono ${
                      activeInsightIndex === idx
                        ? 'border-[#9FE870] bg-[#1A2234] glow-lime-sm'
                        : 'border-[#273244] bg-[#080B12] hover:border-[#65D6C5]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#F5F7FA]">{insight.title}</span>
                      <span className="text-[10px] text-[#65D6C5]">{insight.lineRange}</span>
                    </div>
                    <p className="mt-2 font-['Inter'] text-xs text-[#A1AAB8] leading-relaxed">
                      {insight.explanation}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Invariant guarantee pill */}
            <div className="rounded-[4px] border border-[#65D6C5]/40 bg-[#1A2234]/80 p-3.5 font-mono text-xs text-[#F5F7FA]">
              <div className="text-[#65D6C5] font-semibold mb-1">PROFILING GUARANTEE:</div>
              <div className="text-[#A1AAB8] text-[11px] leading-relaxed">
                Zero allocations in steady-state loop. Certified against Hermes GC stalls on Android
                ARM64 and iOS devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
