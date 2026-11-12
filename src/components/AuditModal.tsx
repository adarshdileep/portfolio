import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    email: '',
    company: '',
    scope: 'Fabric & New Architecture Migration',
    currentBottlenecks: '',
    targetTimeline: 'Immediate (1-2 Weeks)',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [auditRef, setAuditRef] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    setAuditRef(`AUDIT-2026-${randomHex}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative my-8 w-full max-w-2xl rounded-[12px] border border-[#273244] bg-[#080B12] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(159,232,112,0.1)] ring-1 ring-[#1A2234]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded p-1.5 text-[#A1AAB8] hover:bg-[#111827] hover:text-[#F5F7FA] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center font-mono space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#9FE870] bg-[#111827] text-[#9FE870] glow-lime">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#F5F7FA]">
              Architecture Audit Request Logged
            </h3>

            <div className="text-xs text-[#A1AAB8]">
              Assigned Reference Ticket: <span className="text-[#9FE870] font-bold">{auditRef}</span>
            </div>

            <p className="mx-auto max-w-md font-['Inter'] text-sm text-[#A1AAB8] leading-relaxed">
              Thank you, <span className="text-[#F5F7FA] font-medium">{formData.name}</span>. Your technical profile has been routed to Adarsh Dileep. Expect an NDA and initial profiling questionnaire dispatch within 24 business hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="rounded-[4px] bg-[#9FE870] px-6 py-2.5 font-mono text-xs font-semibold uppercase text-[#080B12] hover:shadow-[0_0_20px_rgba(159,232,112,0.4)] transition-all cursor-pointer"
              >
                Return to Cockpit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#9FE870]">
              <ShieldCheck className="h-4 w-4" />
              <span>PRINCIPAL ARCHITECTURE ENGAGEMENT</span>
            </div>

            <h3 className="mt-2 font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F7FA]">
              Request Systems Review &amp; Architecture Audit
            </h3>

            <p className="mt-2 font-['Inter'] text-sm text-[#A1AAB8] leading-relaxed">
              For tech leads, CTOs, and mobile engineering teams needing runtime performance
              profiling, C++ TurboModule implementation, or seamless React Native New Architecture
              migration.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A1AAB8] mb-1.5 uppercase text-[10px]">
                    Lead Engineer / Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2.5 text-[#F5F7FA] outline-none focus:border-[#65D6C5] focus:shadow-[0_0_10px_rgba(101,214,197,0.2)]"
                  />
                </div>

                <div>
                  <label className="block text-[#A1AAB8] mb-1.5 uppercase text-[10px]">
                    Engineering Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2.5 text-[#F5F7FA] outline-none focus:border-[#65D6C5] focus:shadow-[0_0_10px_rgba(101,214,197,0.2)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A1AAB8] mb-1.5 uppercase text-[10px]">
                    Organization / Product
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Kinetic Fintech Labs"
                    className="w-full rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2.5 text-[#F5F7FA] outline-none focus:border-[#65D6C5]"
                  />
                </div>

                <div>
                  <label className="block text-[#A1AAB8] mb-1.5 uppercase text-[10px]">
                    Target Kickoff Timeline
                  </label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                    className="w-full rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2.5 text-[#F5F7FA] outline-none focus:border-[#65D6C5]"
                  >
                    <option>Immediate (1-2 Weeks)</option>
                    <option>Next Sprint (1 Month)</option>
                    <option>Q3 / Q4 Architecture Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#A1AAB8] mb-1.5 uppercase text-[10px]">
                  Primary Engagement Scope
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full rounded-[4px] border border-[#273244] bg-[#111827] px-3 py-2.5 text-[#F5F7FA] outline-none focus:border-[#65D6C5]"
                >
                  <option>Fabric &amp; New Architecture Migration</option>
                  <option>JSI &amp; C++ TurboModule Engineering (Zero-Copy)</option>
                  <option>120 FPS GPU Profiling &amp; Hermes Memory Stalls</option>
                  <option>Offline-First Distributed SQLite &amp; CRDT Engine</option>
                  <option>Full Mobile Systems Health &amp; Battery Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-[#A1AAB8] mb-1.5 uppercase text-[10px]">
                  Current Performance Bottlenecks or Project Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.currentBottlenecks}
                  onChange={(e) => setFormData({ ...formData, currentBottlenecks: e.target.value })}
                  placeholder="Describe your current frame drops, memory spikes, bridge serialization issues, or target SLA..."
                  className="w-full rounded-[4px] border border-[#273244] bg-[#111827] p-3 text-[#F5F7FA] outline-none focus:border-[#65D6C5]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] text-[#A1AAB8]">Strict NDA &amp; confidentiality honored.</span>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-[4px] bg-[#9FE870] px-6 py-2.5 font-mono text-xs font-semibold uppercase text-[#080B12] hover:shadow-[0_0_20px_rgba(159,232,112,0.4)] transition-all cursor-pointer"
                >
                  <span>Transmit Audit Request</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
