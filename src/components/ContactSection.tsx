import React, { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, ArrowUpRight, MessageSquare, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Editable configurations
  const EMAIL = 'adarshodileep@gmail.com';
  const GITHUB_URL = 'https://github.com/adarshdileep';
  const LINKEDIN_URL = 'https://linkedin.com/in/adarshodileep';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative border-b border-[#273244] bg-[#080B12] py-20 lg:py-28 overflow-hidden">
      {/* Background ambient aura */}
      <div
        className="pointer-events-none absolute -bottom-20 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #9FE870 0%, #65D6C5 60%, transparent 80%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Top Label */}
          <div className="inline-flex items-center gap-2 rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-1 font-mono text-xs text-[#9FE870]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9FE870] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#9FE870]"></span>
            </span>
            <span className="uppercase tracking-widest font-semibold">GET IN TOUCH</span>
          </div>

          {/* Main Title & Subtitle */}
          <h2 className="mt-6 font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F7FA] leading-[1.15]">
            HAVE AN INTERESTING <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#9FE870] to-[#65D6C5] bg-clip-text text-transparent">
              ENGINEERING CHALLENGE?
            </span>
          </h2>

          <p className="mt-4 font-['Inter'] text-base sm:text-lg text-[#A1AAB8]">
            Let&apos;s connect and build something meaningful.
          </p>

          {/* Contact Action Card */}
          <div className="mt-10 rounded-[8px] border border-[#273244] bg-[#111827]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#273244] pb-6">
              <div className="flex items-center gap-3 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#273244] bg-[#080B12] text-[#9FE870]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#A1AAB8] uppercase">Direct Email Channel</div>
                  <div className="font-mono text-sm sm:text-base font-semibold text-[#F5F7FA]">
                    {EMAIL}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-[4px] border border-[#273244] bg-[#080B12] px-4 py-2.5 font-mono text-xs text-[#F5F7FA] hover:border-[#65D6C5] hover:text-[#65D6C5] transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#9FE870]" />
                      <span className="text-[#9FE870]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-[4px] bg-[#9FE870] px-5 py-2.5 font-mono text-xs font-semibold text-[#080B12] hover:bg-[#8edb5f] transition-all cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </a>
              </div>
            </div>

            {/* Profiles & Connectivity */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A1AAB8]">
              <span>CONNECT VIA TECHNICAL CHANNELS:</span>

              <div className="flex items-center gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#F5F7FA] hover:text-[#9FE870] transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>

                <span className="text-[#273244]">&middot;</span>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#F5F7FA] hover:text-[#65D6C5] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
