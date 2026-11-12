import React from 'react';
import {
  Smartphone,
  Monitor,
  Server,
  Bug,
  ArrowUpRight,
  Download,
  ArrowRight,
  Code2,
} from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onViewResume: () => void;
  onExploreDebugging: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onViewResume,
  onExploreDebugging,
}) => {
  const techBadges = [
    'React Native',
    'TypeScript',
    'JavaScript',
    'React.js',
    'PHP',
    'Firebase',
    'Zustand',
    'REST APIs',
  ];

  return (
    <section className="relative overflow-hidden border-b border-[#273244] bg-[#080B12] bg-cartesian-grid pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle radial ambient spotlight for engineering atmosphere */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, #65D6C5 0%, #9FE870 50%, transparent 80%)',
        }}
      />

      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Top Technical Status Readout */}
        <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-1.5 text-[#F5F7FA]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9FE870] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9FE870]"></span>
            </span>
            <span className="font-semibold text-[#9FE870]">MOBILE ENGINEERING</span>
            <span className="text-[#A1AAB8]">/ REACT NATIVE SPECIALIST</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 rounded-[4px] border border-[#273244]/50 bg-[#111827]/60 px-3 py-1.5 text-[#A1AAB8]">
            <span className="text-[#65D6C5] font-semibold">CORE STACK:</span>
            <span>React Native</span>
            <span aria-hidden="true">&middot;</span>
            <span>React.js</span>
            <span aria-hidden="true">&middot;</span>
            <span>PHP</span>
            <span aria-hidden="true">&middot;</span>
            <span>TypeScript</span>
          </div>
        </div>

        {/* Hero Two-Column Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Main Introduction (7 cols) */}
          <div className="lg:col-span-7">
            {/* Main Heading */}
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FA] leading-[1.1] text-balance">
              <span>BUILDING MOBILE EXPERIENCES.</span>
              <br />
              <span className="bg-gradient-to-r from-[#9FE870] to-[#65D6C5] bg-clip-text text-transparent">
                SOLVING COMPLEX PROBLEMS.
              </span>
              <br />
              <span>ENGINEERING WHAT&apos;S NEXT.</span>
            </h1>

            {/* Professional Description */}
            <p className="mt-6 max-w-2xl font-['Inter'] text-base sm:text-lg leading-relaxed text-[#A1AAB8]">
              Senior Mobile Software Engineer specializing in React Native application development,
              with additional experience in React.js web applications and PHP backend technologies.
              <br className="hidden sm:inline" />
              <span className="mt-2 block sm:inline sm:mt-0 text-[#F5F7FA]/90">
                {' '}Focused on building reliable mobile experiences, solving complex technical challenges,
                and delivering maintainable software.
              </span>
            </p>

            {/* Technology Badges */}
            <div className="mt-7 flex flex-wrap gap-2">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-[4px] border border-[#273244] bg-[#111827]/70 px-2.5 py-1 font-mono text-xs text-[#F5F7FA] transition-all hover:border-[#9FE870] hover:text-[#9FE870] hover:bg-[#1A2234]"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="group flex h-11 items-center gap-2 rounded-[4px] bg-[#9FE870] px-6 font-mono text-xs font-semibold uppercase text-[#080B12] transition-all hover:shadow-[0_0_25px_rgba(159,232,112,0.45)] hover:bg-[#8edb5f] active:scale-95 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onViewResume}
                className="group flex h-11 items-center gap-2 rounded-[4px] border border-[#273244] bg-[#111827] px-5 font-mono text-xs font-medium text-[#F5F7FA] transition-all hover:border-[#65D6C5] hover:text-[#65D6C5] hover:bg-[#1A2234] active:scale-95 cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onExploreDebugging}
                className="group inline-flex items-center gap-1.5 py-2 font-mono text-xs text-[#A1AAB8] transition-colors hover:text-[#9FE870] cursor-pointer"
              >
                <span>Explore My Debugging Approach</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Engineering Inspector Panel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[8px] border border-[#273244] bg-[#111827]/90 p-5 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-[#273244]/80">
              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-[#273244] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5555]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFB86C]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9FE870]"></span>
                  <span className="ml-2 text-[#F5F7FA]">adarsh.engineering_profile</span>
                </div>
                <div className="flex items-center gap-1.5 rounded bg-[#080B12] px-2 py-0.5 text-[11px] text-[#9FE870]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870]"></span>
                  <span>MOBILE FIRST</span>
                </div>
              </div>

              {/* 4 Technical Information Rows */}
              <div className="mt-4 space-y-2.5 font-mono text-xs">
                {/* Row 1: Primary Engineering */}
                <div className="flex items-center justify-between rounded-[4px] border border-[#273244]/60 bg-[#080B12]/80 p-2.5 transition-colors hover:border-[#9FE870]/40">
                  <div className="flex items-center gap-2.5 text-[#A1AAB8]">
                    <Smartphone className="h-3.5 w-3.5 text-[#9FE870]" />
                    <span>Primary Engineering</span>
                  </div>
                  <div className="font-semibold text-[#9FE870]">
                    REACT NATIVE
                  </div>
                </div>

                {/* Row 2: Web Development */}
                <div className="flex items-center justify-between rounded-[4px] border border-[#273244]/60 bg-[#080B12]/80 p-2.5 transition-colors hover:border-[#65D6C5]/40">
                  <div className="flex items-center gap-2.5 text-[#A1AAB8]">
                    <Monitor className="h-3.5 w-3.5 text-[#65D6C5]" />
                    <span>Web Development</span>
                  </div>
                  <div className="font-semibold text-[#65D6C5]">
                    REACT.JS
                  </div>
                </div>

                {/* Row 3: Backend Knowledge */}
                <div className="flex items-center justify-between rounded-[4px] border border-[#273244]/60 bg-[#080B12]/80 p-2.5 transition-colors hover:border-[#FFB86C]/40">
                  <div className="flex items-center gap-2.5 text-[#A1AAB8]">
                    <Server className="h-3.5 w-3.5 text-[#FFB86C]" />
                    <span>Backend Knowledge</span>
                  </div>
                  <div className="font-semibold text-[#FFB86C]">
                    PHP
                  </div>
                </div>

                {/* Row 4: Engineering Strength */}
                <div className="flex items-center justify-between rounded-[4px] border border-[#273244]/60 bg-[#080B12]/80 p-2.5 transition-colors hover:border-[#65D6C5]/40">
                  <div className="flex items-center gap-2.5 text-[#A1AAB8]">
                    <Bug className="h-3.5 w-3.5 text-[#65D6C5]" />
                    <span>Engineering Strength</span>
                  </div>
                  <div className="font-semibold text-[#65D6C5]">
                    DEBUGGING
                  </div>
                </div>
              </div>

              {/* Realistic Code-Editor Section with Syntax Highlighting */}
              <div className="mt-4 rounded-[4px] border border-[#273244] bg-[#080B12] p-3.5 font-mono text-[11px] leading-relaxed shadow-inner">
                <div className="text-[#65D6C5]">// Engineering philosophy</div>
                <div className="mt-1">
                  <span className="text-[#FF5555]">const</span>{' '}
                  <span className="text-[#9FE870]">engineer</span>{' '}
                  <span className="text-[#F5F7FA]">=</span>{' '}
                  <span className="text-[#F5F7FA]">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#A1AAB8]">primary:</span>{' '}
                  <span className="text-[#FFB86C]">&quot;React Native&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#A1AAB8]">web:</span>{' '}
                  <span className="text-[#FFB86C]">&quot;React.js&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#A1AAB8]">backend:</span>{' '}
                  <span className="text-[#FFB86C]">&quot;PHP&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#A1AAB8]">mindset:</span>{' '}
                  <span className="text-[#F5F7FA]">[</span>
                </div>
                <div className="pl-8 text-[#9FE870]">&quot;Investigate&quot;,</div>
                <div className="pl-8 text-[#9FE870]">&quot;Debug&quot;,</div>
                <div className="pl-8 text-[#9FE870]">&quot;Optimize&quot;,</div>
                <div className="pl-8 text-[#9FE870]">&quot;Deliver&quot;</div>
                <div className="pl-4 text-[#F5F7FA]">]</div>
                <div className="text-[#F5F7FA]">{'};'}</div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-[#273244] pt-3 text-[10px] font-mono text-[#A1AAB8]">
                <div>
                  <span className="text-[#A1AAB8]">FOCUS: </span>
                  <span className="font-semibold text-[#9FE870]">MOBILE APPLICATION ENGINEERING</span>
                </div>
                <div>
                  <span className="text-[#A1AAB8]">APPROACH: </span>
                  <span className="font-semibold text-[#65D6C5]">PROBLEM SOLVING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
