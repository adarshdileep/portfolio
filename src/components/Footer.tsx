import React from 'react';
import { Cpu, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const GITHUB_URL = 'https://github.com/adarshdileep';
  const LINKEDIN_URL = 'https://linkedin.com/in/adarshodileep';
  const EMAIL = 'adarshodileep@gmail.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#273244] bg-[#080B12] py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#273244] pb-8">
          <div>
            <div className="flex items-center gap-2 font-['Space_Grotesk'] text-lg font-bold text-[#F5F7FA]">
              <div className="flex h-6 w-6 items-center justify-center rounded-[4px] border border-[#273244] bg-[#111827] text-[#9FE870]">
                <Cpu className="h-3.5 w-3.5" />
              </div>
              <span>ADARSH DILEEP</span>
              <span className="font-mono text-xs font-normal text-[#65D6C5]">/ ENGINEERING</span>
            </div>
            <p className="mt-2 max-w-md font-['Inter'] text-xs text-[#A1AAB8]">
              Senior Mobile Software Engineer &middot; React Native Specialist &middot; React.js &middot; PHP
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2 text-[#A1AAB8] hover:border-[#65D6C5] hover:text-[#65D6C5] transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2 text-[#A1AAB8] hover:border-[#65D6C5] hover:text-[#65D6C5] transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex items-center gap-1 rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2 text-[#A1AAB8] hover:text-[#9FE870] hover:border-[#9FE870] transition-colors cursor-pointer"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A1AAB8]">
          <div>
            &copy; {new Date().getFullYear()} Adarsh Dileep. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-[#9FE870] transition-colors"
            >
              {EMAIL}
            </a>
            <span aria-hidden="true">&middot;</span>
            <span className="flex items-center gap-1 text-[#9FE870]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870] animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
