import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  Bug,
  Server,
  Smartphone,
  Sparkles,
  GitCommit,
  TrendingUp,
} from 'lucide-react';

export const ExperienceSummary: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('dbiz');

  const timeline = [
    {
      id: 'dkatia',
      phase: '01',
      company: "D'Katia Software Technologies",
      role: 'Junior Software Developer',
      duration: 'December 2018 – March 2020',
      domain: 'Backend & Web Foundation',
      domainBadge: 'PHP & CodeIgniter ERP',
      accentColor: '#FFB86C', // Amber for PHP / backend heritage
      icon: Server,
      summary:
        'Engineered enterprise resource planning (ERP) systems using PHP and CodeIgniter. Built robust backend business logic, database schemas, and resolved application defects across legacy and active codebases.',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
      responsibilities: [
        'Developed and maintained ERP software using PHP and CodeIgniter framework.',
        'Worked on backend business logic and complex relational database integration with MySQL.',
        'Implemented frontend and backend enhancements across critical business workflows.',
        'Troubleshot software defects, performed root cause analysis, and resolved application issues.',
        'Modified existing modules and maintained stability across the enterprise application codebase.',
        'Delivered new features and custom reporting modules based on strict business requirements.',
      ],
      debuggingFocus:
        'Grounded foundational troubleshooting discipline in SQL query optimization, backend error tracing, session state bugs, and ERP business rule validation.',
      transitionNote:
        'Established core algorithmic thinking and software engineering rigor before transitioning into cross-platform mobile development.',
    },
    {
      id: 'newagesys',
      phase: '02',
      company: 'NewAgeSys Solutions',
      role: 'Software Engineer',
      duration: 'March 2020 – June 2023',
      domain: 'Mobile Engineering Transition',
      domainBadge: 'React Native Mobile Pivot',
      accentColor: '#65D6C5', // Teal
      icon: Smartphone,
      summary:
        'Pivotal career transition into dedicated React Native mobile application engineering. Spearheaded cross-platform app features, Redux state management, third-party integrations, and app store deployment lifecycles.',
      technologies: [
        'React Native',
        'Redux',
        'JavaScript',
        'REST APIs',
        'Third-Party Integrations',
        'Android Studio',
        'Xcode',
        'App Publishing',
      ],
      responsibilities: [
        'Specialized in React Native mobile application development for Android and iOS platforms.',
        'Architected application state trees and predictable data flow using Redux.',
        'Integrated third-party native libraries, payment gateways, and backend RESTful APIs.',
        'Managed end-to-end mobile app publishing and release workflows on Google Play Store and Apple App Store.',
        'Maintained build pipelines, configuring Android Gradle and iOS CocoaPods environments.',
        'Addressed multi-device UI compatibility, interaction performance, and responsive styling.',
      ],
      debuggingFocus:
        'Overcame native toolchain hurdles, resolving CocoaPods version mismatches, Gradle build scripts, Android manifest conflicts, and asynchronous state edge cases.',
      transitionNote:
        'Transformed engineering practice into mobile-first development, mastering the React Native bridge and native build toolchains.',
    },
    {
      id: 'qburst',
      phase: '03',
      company: 'QBurst',
      role: 'Lead Engineer',
      duration: 'June 2023 – October 2025',
      domain: 'Technical Leadership & Delivery',
      domainBadge: 'Lead Engineer & Governance',
      accentColor: '#9FE870', // Lime
      icon: Layers,
      summary:
        'Steered mobile project delivery and technical coordination for enterprise-scale client initiatives. Guided architectural decisions, resolved high-complexity technical blockers, and coordinated directly with stakeholders.',
      technologies: [
        'React Native',
        'TypeScript',
        'Mobile Architecture',
        'Technical Coordination',
        'Client Communication',
        'Project Delivery',
        'Code Reviews',
      ],
      responsibilities: [
        'Led technical coordination and mobile engineering delivery across sprint cycles.',
        'Communicated directly with enterprise clients to translate business goals into technical architectures.',
        'Orchestrated multi-developer code reviews, upholding strict code quality and architectural standards.',
        'Directed cross-functional project delivery, ensuring timely milestones and release predictability.',
        'Mentored junior and mid-level engineers in React Native best practices and defensive coding.',
        'Mitigated critical project risks, unblocking complex native integrations and API dependencies.',
      ],
      debuggingFocus:
        'Elevated debugging to architectural levels: isolating cross-platform race conditions, eliminating memory leaks in prolonged user sessions, and unblocking dependency incompatibilities.',
      transitionNote:
        'Honed technical leadership, client communication, and end-to-end delivery governance on production mobile products.',
    },
    {
      id: 'dbiz',
      phase: '04',
      company: 'DBiz.ai / Digital Biz Solutions',
      role: 'Senior Analyst',
      duration: 'October 2025 – Present',
      domain: 'Current Senior Practice',
      domainBadge: 'React Native & AI-Assisted Dev',
      accentColor: '#9FE870', // Primary Lime
      icon: Sparkles,
      isCurrent: true,
      summary:
        'Driving senior mobile and frontend engineering spanning React Native and React.js. Implementing high-impact feature development, production support, runtime performance tuning, and AI-assisted development workflows.',
      technologies: [
        'React Native',
        'React.js',
        'TypeScript',
        'AI-Assisted Development',
        'Performance Optimization',
        'Production Support',
        'REST APIs',
        'Zustand / Redux',
      ],
      responsibilities: [
        'Engineering production React Native mobile applications and React.js web platforms.',
        'Leading high-priority feature development, API integrations, and system-level enhancements.',
        'Providing mission-critical production support, diagnosing live anomalies, and issuing rapid hotfixes.',
        'Conducting performance optimization, profiling rendering cycles, and minimizing memory footprints.',
        'Incorporating AI-assisted development tooling to accelerate debugging, testing, and implementation velocity.',
        'Collaborating with product teams to design maintainable, modular, and future-proof software architectures.',
      ],
      debuggingFocus:
        'Mastering production triage: diagnosing live telemetry, resolving silent API synchronization drops, profiling re-render cascades, and safeguarding release stability.',
      transitionNote:
        'Current senior engineering focus: blending deep React Native specialization with modern React.js and AI-accelerated workflows.',
    },
  ];

  const selectedCompany = timeline.find((t) => t.id === selectedCompanyId) || timeline[3];

  return (
    <section id="experience" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870] flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>CAREER CHRONOLOGY & EVOLUTION</span>
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Professional Trajectory
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1AAB8] flex items-center gap-2">
            <span className="text-[#FFB86C]">PHP &amp; CodeIgniter</span>
            <span className="text-[#273244]">&rarr;</span>
            <span className="text-[#65D6C5]">React Native Pivot</span>
            <span className="text-[#273244]">&rarr;</span>
            <span className="text-[#9FE870]">Lead Engineer</span>
            <span className="text-[#273244]">&rarr;</span>
            <span className="text-[#9FE870] font-semibold">Senior Analyst (Present)</span>
          </div>
        </div>

        {/* Career Transition Narrative Banner */}
        <div className="mt-8 rounded-[6px] border border-[#273244] bg-[#111827]/60 p-4 sm:p-5 font-mono text-xs text-[#A1AAB8] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#273244] bg-[#080B12] text-[#9FE870]">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[#F5F7FA] font-semibold block">
                EVOLUTION: BACKEND RIGOR &rarr; SPECIALIZED REACT NATIVE ENGINEERING
              </span>
              <span className="text-[#A1AAB8] text-[11px]">
                From building database-driven ERPs in PHP/CodeIgniter to leading React Native architecture and AI-assisted workflows.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#9FE870] animate-pulse" />
            <span className="text-[#9FE870] font-semibold">ALL 4 CHAPTERS VISIBLE BELOW</span>
          </div>
        </div>

        {/* Interactive 4-Column Timeline Track */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timeline.map((item) => {
            const Icon = item.icon;
            const isSelected = item.id === selectedCompanyId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCompanyId(item.id)}
                className={`group relative text-left rounded-[8px] border p-5 transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#9FE870] bg-[#111827] ring-1 ring-[#9FE870]/30 shadow-[0_0_20px_rgba(159,232,112,0.12)]'
                    : 'border-[#273244] bg-[#111827]/50 hover:border-[#65D6C5]/50 hover:bg-[#111827]/80'
                }`}
              >
                {/* Top Phase & Badge */}
                <div className="flex items-center justify-between border-b border-[#273244] pb-3 text-xs font-mono">
                  <span className="font-bold text-[#A1AAB8]">PHASE {item.phase}</span>
                  {item.isCurrent ? (
                    <span className="flex items-center gap-1 rounded bg-[#080B12] px-2 py-0.5 text-[10px] font-semibold text-[#9FE870] border border-[#9FE870]/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870] animate-pulse" />
                      CURRENT
                    </span>
                  ) : (
                    <span className="text-[10px] text-[#A1AAB8]">{item.duration.split('–')[1]?.trim() || ''}</span>
                  )}
                </div>

                {/* Company & Role */}
                <div className="mt-3.5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4" style={{ color: item.accentColor }} />
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider font-semibold"
                      style={{ color: item.accentColor }}
                    >
                      {item.domainBadge}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-['Space_Grotesk'] text-base font-bold text-[#F5F7FA] group-hover:text-[#9FE870] transition-colors leading-snug">
                    {item.company}
                  </h3>
                  <div className="font-mono text-xs text-[#9FE870] mt-0.5">
                    {item.role}
                  </div>
                  <div className="font-mono text-[11px] text-[#A1AAB8] mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3 opacity-60" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Compact Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1 border-t border-[#273244]/60 pt-3">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-[#080B12] px-1.5 py-0.5 font-mono text-[10px] text-[#F5F7FA]/70"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 4 && (
                    <span className="rounded bg-[#080B12] px-1.5 py-0.5 font-mono text-[10px] text-[#A1AAB8]">
                      +{item.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Selection Marker */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A1AAB8]">
                  <span className={isSelected ? 'text-[#9FE870] font-semibold' : 'group-hover:text-[#F5F7FA]'}>
                    {isSelected ? '● ACTIVE DOSSIER' : 'Click to inspect'}
                  </span>
                  <ArrowRight
                    className={`h-3 w-3 transition-transform ${
                      isSelected ? 'translate-x-1 text-[#9FE870]' : 'group-hover:translate-x-0.5'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Milestone Dossier */}
        <div className="mt-8 rounded-[8px] border border-[#273244] bg-[#111827] p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#273244] pb-6">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span
                  className="rounded px-2.5 py-0.5 font-semibold uppercase tracking-wider text-[#080B12]"
                  style={{ backgroundColor: selectedCompany.accentColor }}
                >
                  PHASE {selectedCompany.phase} &middot; {selectedCompany.domain}
                </span>
                <span className="text-[#A1AAB8]">|</span>
                <span className="text-[#F5F7FA]">{selectedCompany.duration}</span>
              </div>
              <h3 className="mt-2.5 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#F5F7FA]">
                {selectedCompany.company}
              </h3>
              <div className="font-mono text-sm text-[#9FE870] font-medium mt-1">
                {selectedCompany.role}
              </div>
            </div>

            {/* Quick Switcher Indicators */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-[#A1AAB8] hidden sm:inline">Timeline view:</span>
              {timeline.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedCompanyId(t.id)}
                  className={`h-7 px-2.5 rounded text-xs transition-colors cursor-pointer ${
                    t.id === selectedCompanyId
                      ? 'bg-[#9FE870] text-[#080B12] font-semibold'
                      : 'bg-[#080B12] text-[#A1AAB8] hover:text-[#F5F7FA] border border-[#273244]'
                  }`}
                >
                  {t.phase}
                </button>
              ))}
            </div>
          </div>

          {/* Dossier Grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Responsibilities (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#9FE870] font-semibold mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Key Responsibilities &amp; Engineering Contributions</span>
                </h4>
                <ul className="space-y-2.5 font-['Inter'] text-xs sm:text-sm text-[#F5F7FA]/90">
                  {selectedCompany.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: selectedCompany.accentColor }}
                      />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Debugging & Troubleshooting Thread */}
              <div className="rounded-[6px] border border-[#273244] bg-[#080B12] p-4 text-xs font-['Inter']">
                <div className="font-mono text-xs font-semibold text-[#65D6C5] flex items-center gap-2 mb-1.5">
                  <Bug className="h-3.5 w-3.5" />
                  <span>TROUBLESHOOTING &amp; DEFECT RESOLUTION IN THIS ROLE</span>
                </div>
                <p className="text-[#A1AAB8] leading-relaxed">
                  {selectedCompany.debuggingFocus}
                </p>
              </div>
            </div>

            {/* Right Column: Stack & Context (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Technology Stack */}
              <div className="rounded-[6px] border border-[#273244] bg-[#080B12] p-5">
                <div className="font-mono text-xs font-semibold text-[#F5F7FA] border-b border-[#273244] pb-3 flex items-center justify-between">
                  <span>TECHNOLOGIES APPLIED</span>
                  <span className="text-[10px]" style={{ color: selectedCompany.accentColor }}>
                    {selectedCompany.technologies.length} CORE TOOLS
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedCompany.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#111827] px-2.5 py-1 font-mono text-xs text-[#F5F7FA]"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: selectedCompany.accentColor }}
                      />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Architectural Evolution Note */}
              <div className="rounded-[6px] border border-[#273244]/80 bg-[#111827]/60 p-4 font-mono text-xs">
                <span className="text-[#9FE870] font-semibold block mb-1">
                  Architectural Progression Note:
                </span>
                <p className="font-['Inter'] text-xs text-[#A1AAB8] leading-relaxed">
                  {selectedCompany.transitionNote}
                </p>
              </div>

              {/* Summary Note */}
              <div className="p-3.5 rounded border border-[#273244]/50 bg-[#080B12]/60 text-[11px] font-mono text-[#A1AAB8]">
                <span className="text-[#F5F7FA] font-semibold">Scope: </span>
                <span>{selectedCompany.summary}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
