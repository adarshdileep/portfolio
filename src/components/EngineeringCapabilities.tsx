import React from 'react';
import { Smartphone, Layout, Wrench, Database, ArrowRight, ShieldCheck, Zap, Layers } from 'lucide-react';

interface EngineeringCapabilitiesProps {
  onExploreDebugging: () => void;
  onContactClick: () => void;
}

export const EngineeringCapabilities: React.FC<EngineeringCapabilitiesProps> = ({
  onExploreDebugging,
  onContactClick,
}) => {
  const capabilities = [
    {
      id: '01',
      title: 'MOBILE ENGINEERING',
      icon: Smartphone,
      accentColor: '#9FE870',
      badge: 'PRIMARY SPECIALIZATION',
      description:
        'React Native, TypeScript, application architecture, state management, API integration, Firebase and mobile application development.',
      points: [
        'Production React Native architecture & clean component hierarchy',
        'Zustand / Redux state modeling & local offline cache patterns',
        'Firebase auth, database, push notifications & analytics',
        'Cross-platform delivery across Android & iOS target matrices',
      ],
    },
    {
      id: '02',
      title: 'WEB DEVELOPMENT',
      icon: Layout,
      accentColor: '#65D6C5',
      badge: 'FRONTEND ARCHITECTURE',
      description:
        'React.js, reusable components, responsive interfaces and API integration.',
      points: [
        'Modern React.js SPAs with clean, decoupled UI logic',
        'Responsive layout engineering across desktop, tablet & mobile',
        'Tailwind CSS & design systems with strict visual hierarchy',
        'Robust REST API clients & asynchronous state orchestration',
      ],
    },
    {
      id: '03',
      title: 'DEBUGGING & TROUBLESHOOTING',
      icon: Wrench,
      accentColor: '#9FE870',
      badge: 'KEY DIFFERENTIATOR',
      isHighlight: true,
      description:
        'Investigating build failures, dependency conflicts, runtime errors, API issues and application performance problems.',
      points: [
        'Root cause diagnosis for complex Android & iOS build failures',
        'Gradle, CocoaPods & NPM / Yarn dependency reconciliation',
        'Profiling rendering hitches, memory leaks & unnecessary re-renders',
        'Eliminating edge-case runtime exceptions & silent API failures',
      ],
    },
    {
      id: '04',
      title: 'BACKEND KNOWLEDGE',
      icon: Database,
      accentColor: '#FFB86C',
      badge: 'SERVICES & INTEGRATION',
      description:
        'PHP, MySQL fundamentals, REST APIs and backend integration.',
      points: [
        'PHP backend endpoint development & RESTful architecture',
        'MySQL relational schemas, query structuring & index hygiene',
        'Contract design between mobile frontend & server APIs',
        'Authentication pipelines, payload serialization & validation',
      ],
    },
  ];

  return (
    <section id="capabilities" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870]">
              CORE COMPETENCIES & EXPERTISE
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Engineering Capabilities
            </h2>
          </div>
          <p className="max-w-md font-['Inter'] text-sm text-[#A1AAB8]">
            Disciplined mobile and frontend software engineering tailored for production scale,
            maintainability, and rapid troubleshooting.
          </p>
        </div>

        {/* 4 Capabilities Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.id}
                className={`relative rounded-[8px] border bg-[#111827]/70 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#65D6C5]/50 hover:bg-[#111827] group ${
                  cap.isHighlight
                    ? 'border-[#9FE870]/60 ring-1 ring-[#9FE870]/20'
                    : 'border-[#273244]'
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between border-b border-[#273244]/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#273244] bg-[#080B12]"
                      style={{ color: cap.accentColor }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="font-mono text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#080B12] border border-[#273244]"
                      style={{ color: cap.accentColor }}
                    >
                      {cap.badge}
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-[#A1AAB8]">
                    {cap.id}
                  </span>
                </div>

                {/* Card Title & Description */}
                <h3 className="mt-4 font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#F5F7FA] group-hover:text-[#9FE870] transition-colors">
                  {cap.title}
                </h3>
                <p className="mt-2.5 font-['Inter'] text-sm leading-relaxed text-[#A1AAB8]">
                  {cap.description}
                </p>

                {/* Key Points Checklist */}
                <ul className="mt-5 space-y-2 border-t border-[#273244]/60 pt-4 font-['Inter'] text-xs text-[#F5F7FA]/80">
                  {cap.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: cap.accentColor }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer Action */}
                {cap.id === '03' ? (
                  <div className="mt-6 pt-2">
                    <button
                      onClick={onExploreDebugging}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#9FE870] hover:underline underline-offset-4 cursor-pointer"
                    >
                      <span>Explore debugging methodology</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 pt-2">
                    <button
                      onClick={onContactClick}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1AAB8] hover:text-[#F5F7FA] transition-colors cursor-pointer"
                    >
                      <span>Discuss this capability</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
