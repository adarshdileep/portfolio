import React from 'react';
import { Cpu, Terminal, GitBranch, Layers, Smartphone, Database, Server } from 'lucide-react';

export const TechStrip: React.FC = () => {
  const technologies = [
    { name: 'React Native', category: 'Mobile Core' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React.js', category: 'Web Frontend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'CodeIgniter', category: 'MVC Framework' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Firebase', category: 'Cloud & Auth' },
    { name: 'Zustand', category: 'State' },
    { name: 'Redux Toolkit', category: 'State' },
    { name: 'REST APIs', category: 'Integration' },
    { name: 'Android Studio', category: 'Tooling' },
    { name: 'Xcode', category: 'Tooling' },
    { name: 'Metro Bundler', category: 'Tooling' },
    { name: 'CocoaPods / Gradle', category: 'Dependencies' },
    { name: 'Git & GitHub', category: 'VCS' },
  ];

  return (
    <div className="border-b border-[#273244] bg-[#0B0F19] py-8">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#273244]/60 pb-4 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#A1AAB8]">
            <Terminal className="h-3.5 w-3.5 text-[#9FE870]" />
            <span className="uppercase tracking-widest text-[#9FE870]">TECHNICAL TOOLCHAIN</span>
            <span className="text-[#273244]">/</span>
            <span>PRODUCTION ARSENAL</span>
          </div>

          <div className="font-mono text-[11px] text-[#A1AAB8]">
            MODERN TOOLING &middot; DEPENDENCY MANAGEMENT &middot; RESILIENT ARCHITECTURE
          </div>
        </div>

        {/* Badges Flow */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-2 rounded-[4px] border border-[#273244] bg-[#111827]/80 px-3.5 py-2 font-mono text-xs transition-all hover:border-[#65D6C5] hover:bg-[#1A2234]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#65D6C5] group-hover:bg-[#9FE870] transition-colors" />
              <span className="font-medium text-[#F5F7FA]">{tech.name}</span>
              <span className="text-[10px] text-[#A1AAB8] hidden sm:inline opacity-70">
                ({tech.category})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
