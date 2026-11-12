export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  summary: string;
  architectureHighlight: string;
  clientType: string;
  metrics: {
    label: string;
    value: string;
    delta: string;
  }[];
  techStack: string[];
  keyChallenges: string[];
  architecturalDecisions: {
    decision: string;
    rationale: string;
    outcome: string;
  }[];
  codeSnippetPreview?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface TelemetryItem {
  id: string;
  timestamp: string;
  headline: string;
  subsystem: 'JSI & C++' | 'Fabric & Rendering' | 'Hermes GC' | 'Turbomodules' | 'Storage/CRDT';
  metric: string;
  details: string;
  commitHash: string;
}

export interface CodeFile {
  id: string;
  filename: string;
  language: string;
  description: string;
  code: string;
  keyInsights: {
    lineRange: string;
    title: string;
    explanation: string;
  }[];
}

export type SimulatorAppId = 'trading' | 'biopulse' | 'physics' | 'crdt';

export interface AuditFormData {
  name: string;
  email: string;
  company: string;
  scope: string;
  currentBottlenecks: string;
  targetTimeline: string;
}
