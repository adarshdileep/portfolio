import React, { useState } from 'react';
import { Cpu, Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Editable profile links
  const GITHUB_URL = 'https://github.com/adarshdileep';
  const LINKEDIN_URL = 'https://linkedin.com/in/adarshodileep';

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#273244] bg-[#080B12]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-8">
        {/* Left: Brand Wordmark with CPU Icon */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2.5 font-['Space_Grotesk'] text-sm sm:text-base font-bold tracking-tight text-[#F5F7FA] transition-colors hover:text-[#9FE870] whitespace-nowrap shrink-0 text-left cursor-pointer"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#273244] bg-[#111827] text-[#9FE870]">
            <Cpu className="h-4 w-4" />
          </div>
          <span>ADARSH DILEEP</span>
          <span className="font-mono text-xs font-normal text-[#65D6C5]">/ ENGINEERING</span>
        </button>

        {/* Right: Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-7 font-mono text-xs font-medium uppercase tracking-wider text-[#A1AAB8]">
          <button
            onClick={scrollToTop}
            className="transition-colors hover:text-[#9FE870] cursor-pointer"
          >
            Home
          </button>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-[#F5F7FA]"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-[#F5F7FA]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#111827] px-3.5 py-1.5 text-[#F5F7FA] transition-all hover:border-[#9FE870] hover:text-[#9FE870] cursor-pointer"
          >
            <Mail className="h-3 w-3" />
            <span>Contact</span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-[#273244] bg-[#111827] text-[#A1AAB8] hover:text-[#F5F7FA]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#273244] bg-[#080B12]/95 px-6 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
            <button
              onClick={scrollToTop}
              className="flex items-center justify-between rounded p-2 text-[#9FE870] hover:bg-[#111827] text-left"
            >
              <span>Home</span>
              <span className="text-[10px] text-[#A1AAB8]">CURRENT</span>
            </button>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded p-2 text-[#A1AAB8] hover:bg-[#111827] hover:text-[#F5F7FA]"
            >
              <span className="flex items-center gap-2">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded p-2 text-[#A1AAB8] hover:bg-[#111827] hover:text-[#F5F7FA]"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </span>
              <ArrowUpRight className="h-3 w-3" />
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 flex items-center justify-center gap-2 rounded-[4px] bg-[#9FE870] p-2.5 font-semibold text-[#080B12]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
