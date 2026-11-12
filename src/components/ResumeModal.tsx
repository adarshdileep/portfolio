import React, { useState } from 'react';
import { X, Download, Check, FileText, Smartphone, Briefcase, Server, Layers, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown resume file for instant download
    const resumeContent = `ADARSH DILEEP
Senior Mobile Software Engineer | React Native Specialist
Email: adarshodileep@gmail.com
GitHub: https://github.com/adarshdileep
LinkedIn: https://linkedin.com/in/adarshdileep

PROFESSIONAL SUMMARY:
Software engineer specializing in React Native mobile application development, with experience building and maintaining production-level mobile applications. I also work with React.js for web development and have knowledge of PHP backend technologies.
My engineering approach goes beyond feature development. I enjoy investigating complex technical issues, identifying root causes, resolving application errors, optimizing performance and delivering reliable software solutions.

CORE TECHNICAL SKILLS:
- Primary Specialization: React Native, JavaScript, TypeScript, Android Studio, Xcode, Mobile App Architecture
- Web Frontend: React.js, HTML5, CSS3, Tailwind CSS, Responsive Web Design
- Backend & Database: PHP, CodeIgniter, MySQL, REST API Integration, JSON Schema
- State & Data: Zustand, Redux, Context API, Firebase (Auth, Firestore, Cloud Messaging)
- Tools & Practices: Git, GitHub, Postman, Metro Bundler, CocoaPods, Gradle, Performance Profiling, AI-Assisted Tooling

PROFESSIONAL EXPERIENCE:

1. DBiz.ai / Digital Biz Solutions — Senior Analyst
   Duration: October 2025 – Present
   Focus: React Native, React.js, Feature Development, Production Support, Performance Optimization
   - Engineering production React Native mobile applications and React.js web platforms.
   - Delivering high-priority feature development, complex REST API integrations, and system-level enhancements.
   - Providing mission-critical production support, diagnosing live anomalies, and issuing rapid hotfixes.
   - Performing runtime performance optimization, profiling rendering cycles, and minimizing memory overhead.
   - Incorporating AI-assisted development tooling to accelerate implementation velocity and debugging workflows.

2. QBurst — Lead Engineer
   Duration: June 2023 – October 2025
   Focus: Technical Coordination, Client Communication, Project Delivery, Engineering Leadership
   - Steered technical coordination and engineering delivery across mobile development sprint cycles.
   - Communicated directly with enterprise clients to translate business objectives into scalable architectures.
   - Conducted rigorous code reviews, enforcing architectural standards, modularity, and testability.
   - Directed cross-functional project delivery, ensuring timely milestones and release predictability.
   - Mentored engineering teammates in React Native best practices, error handling, and performance discipline.

3. NewAgeSys Solutions — Software Engineer
   Duration: March 2020 – June 2023
   Focus: React Native Mobile Application Development
   - Dedicated cross-platform mobile application development for Android and iOS using React Native.
   - Architected application state management and data flow using Redux.
   - Implemented third-party integrations, SDKs, and RESTful API endpoints.
   - Managed end-to-end mobile app publishing and release management on Google Play Store and Apple App Store.
   - Configured and maintained build pipelines across Android Gradle and iOS CocoaPods environments.

4. D'Katia Software Technologies — Junior Software Developer
   Duration: December 2018 – March 2020
   Focus: PHP, CodeIgniter & MySQL Backend / ERP Software
   - Developed and maintained ERP software using PHP and the CodeIgniter framework.
   - Worked on backend business logic and complex relational database integration with MySQL.
   - Implemented frontend and backend enhancements across critical business modules.
   - Troubleshot software defects, performed root cause analysis, and resolved application issues.
   - Modified existing modules and maintained stability across the enterprise codebase.
   - Delivered new features and custom reporting modules based on strict business requirements.

KEY DIFFERENTIATOR:
Root-cause debugging, dependency conflict resolution, native crash analysis, and performance optimization.
`;

    const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Adarsh_Dileep_Resume.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative my-8 w-full max-w-3xl rounded-[8px] border border-[#273244] bg-[#080B12] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(159,232,112,0.15)] ring-1 ring-[#1A2234]">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[#273244] pb-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#9FE870]" />
            <span className="font-['Space_Grotesk'] text-lg font-bold text-[#F5F7FA]">
              Adarsh Dileep — Resume Dossier
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-[4px] bg-[#9FE870] px-3 py-1.5 font-mono text-xs font-semibold text-[#080B12] transition-all hover:bg-[#8edb5f] cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="h-3.5 w-3.5" />
                  <span>Download .MD / Doc</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="rounded p-1.5 text-[#A1AAB8] hover:bg-[#111827] hover:text-[#F5F7FA] transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="mt-6 max-h-[70vh] overflow-y-auto pr-2 space-y-6 font-['Inter'] text-sm text-[#A1AAB8]">
          {/* Identity & Contact */}
          <div className="rounded-[4px] border border-[#273244] bg-[#111827]/60 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FA]">
                  Adarsh Dileep
                </h3>
                <p className="font-mono text-xs text-[#9FE870] mt-0.5">
                  Senior Mobile Software Engineer | React Native Specialist
                </p>
              </div>
              <div className="font-mono text-xs text-[#65D6C5] flex flex-col sm:items-end">
                <span>adarshodileep@gmail.com</span>
                <span>github.com/adarshdileep</span>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#F5F7FA]">
              Software engineer specializing in React Native mobile application development, with experience building and maintaining production-level mobile applications, React.js web applications, and PHP backend integration. Focused on root-cause debugging, dependency resolution, and deliverable software reliability.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#9FE870] mb-3 flex items-center gap-2">
              <Smartphone className="h-3.5 w-3.5" />
              <span>Core Engineering Competencies</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded border border-[#273244] bg-[#080B12] p-3">
                <span className="font-mono text-[#F5F7FA] block mb-1">Mobile Engineering (Dominant)</span>
                <span>React Native, TypeScript, JavaScript, Android Studio, Xcode, Hermes, Metro, Firebase</span>
              </div>
              <div className="rounded border border-[#273244] bg-[#080B12] p-3">
                <span className="font-mono text-[#F5F7FA] block mb-1">Web & Backend</span>
                <span>React.js, Tailwind CSS, PHP, CodeIgniter, MySQL fundamentals, RESTful APIs</span>
              </div>
              <div className="rounded border border-[#273244] bg-[#080B12] p-3">
                <span className="font-mono text-[#F5F7FA] block mb-1">State & Tooling</span>
                <span>Zustand, Redux, Context API, Gradle, CocoaPods, AI-Assisted Workflows</span>
              </div>
              <div className="rounded border border-[#273244] bg-[#080B12] p-3">
                <span className="font-mono text-[#F5F7FA] block mb-1">Key Differentiator</span>
                <span>Build failure investigation, Gradle/CocoaPods conflict resolution, runtime debugging</span>
              </div>
            </div>
          </div>

          {/* Chronological Career Progression (All 4 Companies) */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#65D6C5] mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5" />
                <span>Professional Career History</span>
              </div>
              <span className="text-[10px] text-[#A1AAB8]">CHRONOLOGICAL (2018 – PRESENT)</span>
            </div>

            <div className="space-y-3">
              {/* 1. DBiz.ai */}
              <div className="rounded border border-[#9FE870]/60 bg-[#111827]/80 p-3.5 ring-1 ring-[#9FE870]/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-3.5 w-3.5 text-[#9FE870]" />
                    <span className="font-semibold text-[#F5F7FA]">DBiz.ai / Digital Biz Solutions</span>
                    <span className="rounded bg-[#080B12] px-1.5 py-0.5 text-[10px] font-semibold text-[#9FE870]">CURRENT</span>
                  </div>
                  <span className="text-[#9FE870]">Senior Analyst &middot; Oct 2025 – Present</span>
                </div>
                <p className="mt-2 text-xs text-[#F5F7FA]/90">
                  React Native and React.js engineering, feature development, mission-critical production support, performance optimization, REST API integrations, and AI-assisted development workflows.
                </p>
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px] text-[#A1AAB8]">
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">React Native</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">React.js</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">AI-Assisted Dev</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">Performance Tuning</span>
                </div>
              </div>

              {/* 2. QBurst */}
              <div className="rounded border border-[#273244] bg-[#111827]/50 p-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Layers className="h-3.5 w-3.5 text-[#9FE870]" />
                    <span className="font-semibold text-[#F5F7FA]">QBurst</span>
                  </div>
                  <span className="text-[#65D6C5]">Lead Engineer &middot; Jun 2023 – Oct 2025</span>
                </div>
                <p className="mt-2 text-xs text-[#A1AAB8]">
                  Technical coordination, client communication, cross-functional project delivery, and engineering leadership. Directed code reviews and mobile architectural decisions.
                </p>
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px] text-[#A1AAB8]">
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">React Native</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">Technical Coordination</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">Client Delivery</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">Mobile Architecture</span>
                </div>
              </div>

              {/* 3. NewAgeSys Solutions */}
              <div className="rounded border border-[#273244] bg-[#111827]/50 p-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-3.5 w-3.5 text-[#65D6C5]" />
                    <span className="font-semibold text-[#F5F7FA]">NewAgeSys Solutions</span>
                  </div>
                  <span className="text-[#65D6C5]">Software Engineer &middot; Mar 2020 – Jun 2023</span>
                </div>
                <p className="mt-2 text-xs text-[#A1AAB8]">
                  Focused on React Native mobile application development for Android and iOS. Built Redux state architectures, third-party integrations, REST APIs, and managed app store publishing.
                </p>
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px] text-[#A1AAB8]">
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">React Native</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">Redux</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">REST APIs</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">App Publishing</span>
                </div>
              </div>

              {/* 4. D'Katia Software Technologies */}
              <div className="rounded border border-[#273244] bg-[#111827]/50 p-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <Server className="h-3.5 w-3.5 text-[#FFB86C]" />
                    <span className="font-semibold text-[#F5F7FA]">D&apos;Katia Software Technologies</span>
                  </div>
                  <span className="text-[#FFB86C]">Junior Software Developer &middot; Dec 2018 – Mar 2020</span>
                </div>
                <p className="mt-2 text-xs text-[#A1AAB8]">
                  Developed and maintained enterprise ERP software using PHP and CodeIgniter with MySQL. Engineered backend business logic, database integrations, troubleshooting software defects, and delivering modular enhancements.
                </p>
                <div className="mt-2 flex flex-wrap gap-1 font-mono text-[10px] text-[#A1AAB8]">
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded text-[#FFB86C]/90">PHP</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded text-[#FFB86C]/90">CodeIgniter</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">MySQL</span>
                  <span className="bg-[#080B12] px-1.5 py-0.5 rounded">ERP Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Approach Footer */}
          <div className="rounded border border-[#273244] bg-[#080B12] p-4 text-xs font-mono">
            <div className="text-[#9FE870] font-semibold mb-1">
              ENGINEERING APPROACH: INVESTIGATE &middot; DEBUG &middot; OPTIMIZE &middot; DELIVER
            </div>
            <p className="text-[#A1AAB8] font-sans">
              &quot;My engineering approach goes beyond feature development. I enjoy investigating complex technical issues, identifying root causes, resolving application errors, optimizing performance and delivering reliable software solutions.&quot;
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex items-center justify-end gap-3 border-t border-[#273244] pt-4">
          <button
            onClick={onClose}
            className="rounded-[4px] border border-[#273244] bg-[#111827] px-4 py-2 font-mono text-xs text-[#A1AAB8] hover:text-[#F5F7FA] transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="rounded-[4px] bg-[#9FE870] px-5 py-2 font-mono text-xs font-semibold text-[#080B12] hover:bg-[#8edb5f] transition-all cursor-pointer"
          >
            Download Dossier (.MD)
          </button>
        </div>
      </div>
    </div>
  );
};
