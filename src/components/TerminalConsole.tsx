import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

interface TerminalConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAudit: () => void;
  onSelectProject: (id: string) => void;
}

interface CommandHistoryEntry {
  command: string;
  output: React.ReactNode;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({
  isOpen,
  onClose,
  onRequestAudit,
  onSelectProject,
}) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<CommandHistoryEntry[]>([
    {
      command: 'neofetch',
      output: (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#9FE870] font-bold">
            ADARSH DILEEP — PRINCIPAL MOBILE ARCHITECT &amp; SYSTEMS ENGINEER
          </div>
          <div className="text-[#A1AAB8]">--------------------------------------------------</div>
          <div><span className="text-[#65D6C5]">OS / Target:</span> iOS Metal (Darwin) &amp; Android Vulkan (NDK)</div>
          <div><span className="text-[#65D6C5]">Core Stack:</span> React Native 0.78+, C++20, JSI HostObjects, Hermes v0.14</div>
          <div><span className="text-[#65D6C5]">Graphics:</span> Shopify Skia, GLSL Shaders, Fabric Custom ShadowNodes</div>
          <div><span className="text-[#65D6C5]">Data / Sync:</span> SQLite JSI Bindings, State-based CRDTs, FlatBuffers</div>
          <div><span className="text-[#65D6C5]">Status:</span> Available for Mobile Architecture Audits &amp; Core Systems Design</div>
          <div className="text-[#FFB86C] mt-2">Type "help" to view executable commands.</div>
        </div>
      ),
    },
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [commandHistoryList, setCommandHistoryList] = useState<string[]>(['neofetch']);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    setCommandHistoryList((prev) => [...prev, cmd]);
    setCommandIndex(-1);

    const lower = cmd.toLowerCase();
    let output: React.ReactNode = null;

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      output = (
        <div className="space-y-1 text-xs">
          <div className="text-[#9FE870] font-semibold">Available Cockpit Directives:</div>
          <div><span className="text-[#65D6C5] font-bold">neofetch</span> - System profile &amp; architecture spec</div>
          <div><span className="text-[#65D6C5] font-bold">projects</span> - View case studies and runtime engines</div>
          <div><span className="text-[#65D6C5] font-bold">skills</span> - Inspect technical capabilities &amp; C++ tooling</div>
          <div><span className="text-[#65D6C5] font-bold">benchmarks</span> - Print performance comparison metrics</div>
          <div><span className="text-[#65D6C5] font-bold">cat bio.md</span> - Read engineering manifesto and bio</div>
          <div><span className="text-[#65D6C5] font-bold">audit</span> - Launch technical architecture review dialog</div>
          <div><span className="text-[#65D6C5] font-bold">clear</span> - Clear terminal session buffer</div>
        </div>
      );
    } else if (lower === 'skills') {
      output = (
        <div className="space-y-1.5 text-xs">
          <div className="text-[#9FE870] font-semibold">Core Architectural Competencies:</div>
          <div><span className="text-[#F5F7FA]">1. C++ JSI &amp; TurboModules:</span> Zero-copy memory views, JSI HostObjects, lock-free ring buffers.</div>
          <div><span className="text-[#F5F7FA]">2. Fabric Rendering Engine:</span> Custom ShadowNodes, direct GPU blitting, Yoga bypass.</div>
          <div><span className="text-[#F5F7FA]">3. Creative GPU Graphics:</span> Skia GLSL shaders, 120 FPS Reanimated worklets, Metal / Vulkan.</div>
          <div><span className="text-[#F5F7FA]">4. Distributed Local-First Data:</span> SQLite3 C API JSI, State-based CRDTs, binary serialization.</div>
          <div><span className="text-[#F5F7FA]">5. Hermes VM Optimization:</span> GC nursery tuning, bytecode precompilation, memory leak profiling.</div>
        </div>
      );
    } else if (lower === 'projects') {
      output = (
        <div className="space-y-1.5 text-xs">
          <div className="text-[#9FE870] font-semibold">Flagship Engineered Case Studies:</div>
          <div><span className="text-[#65D6C5]">1. Aetheria Mobile:</span> High-Frequency Trading Terminal (1.8ms tick latency, 120 FPS)</div>
          <div><span className="text-[#65D6C5]">2. Synapse Vital-120:</span> Medical Continuous Biosensor &amp; PPG Waveform (120Hz BLE)</div>
          <div><span className="text-[#65D6C5]">3. Vortex Engine:</span> Fluid Touch Gesture Physics &amp; Skia Shaders (0.38ms worklet lag)</div>
          <div><span className="text-[#65D6C5]">4. Chronos Ledger:</span> Conflict-Free Offline SQLite CRDT (0.35ms writes)</div>
          <div className="text-[#A1AAB8] mt-1">Scroll to the Architecture section on the main page for full dossiers.</div>
        </div>
      );
    } else if (lower === 'benchmarks') {
      output = (
        <div className="space-y-1 text-xs">
          <div className="text-[#9FE870] font-semibold">Production Benchmarks (Aetheria vs Standard Bridge):</div>
          <div>- JSON Bridge Deserialization: <span className="text-[#FF5555]">14.8ms</span> -&gt; JSI Direct: <span className="text-[#9FE870]">0.08ms</span> (-99.4%)</div>
          <div>- Orderbook Frame Rate: <span className="text-[#FF5555]">42 FPS</span> -&gt; Skia Direct GPU: <span className="text-[#9FE870]">120 FPS</span> (+185%)</div>
          <div>- SQLite Bulk Insert (5k rows): <span className="text-[#FF5555]">1,840ms</span> -&gt; SQLite JSI: <span className="text-[#9FE870]">41.2ms</span> (44x faster)</div>
          <div>- Garbage Collection Stalls: <span className="text-[#FF5555]">340ms/min</span> -&gt; Generational Tuning: <span className="text-[#9FE870]">0ms</span></div>
        </div>
      );
    } else if (lower === 'cat bio.md') {
      output = (
        <div className="space-y-1 text-xs leading-relaxed text-[#A1AAB8]">
          <div className="text-[#F5F7FA] font-semibold">Adarsh Dileep — Engineering Philosophy:</div>
          <p>
            I build mobile applications that refuse to feel like WebViews. For over 8 years,
            I have worked at the intersection of modern JavaScript runtimes, C++ systems
            programming, and mobile graphics pipelines.
          </p>
          <p>
            When standard mobile abstractions fail under heavy data volume or tight latency
            budgets, I drop beneath the runtime layer to engineer custom memory conduits,
            native thread pools, and direct GPU shaders.
          </p>
        </div>
      );
    } else if (lower === 'audit' || lower === 'contact') {
      onRequestAudit();
      output = (
        <div className="text-[#9FE870] text-xs">
          ✓ Opened Architecture Audit Request dialog.
        </div>
      );
    } else {
      output = (
        <div className="text-[#FF5555] text-xs">
          Command not recognized: "{cmd}". Type <span className="text-[#F5F7FA]">help</span> for a list of valid directives.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistoryList.length === 0) return;
      const nextIndex = commandIndex + 1;
      if (nextIndex < commandHistoryList.length) {
        setCommandIndex(nextIndex);
        setInputVal(commandHistoryList[commandHistoryList.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIndex = commandIndex - 1;
        setCommandIndex(nextIndex);
        setInputVal(commandHistoryList[commandHistoryList.length - 1 - nextIndex]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[8px] border border-[#273244] bg-[#080B12] shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_20px_rgba(101,214,197,0.15)] ring-1 ring-[#1A2234]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#273244] bg-[#111827] px-4 py-2.5 font-mono text-xs text-[#A1AAB8]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5555]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFB86C]"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#9FE870]"></span>
            <span className="ml-2 flex items-center gap-1.5 text-[#F5F7FA] font-semibold">
              <TerminalIcon className="h-3.5 w-3.5 text-[#65D6C5]" />
              adarsh.tech ~ cockpit console
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded p-1 text-[#A1AAB8] hover:bg-[#1A2234] hover:text-[#F5F7FA] transition-colors cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="h-[420px] overflow-y-auto p-4 font-mono text-xs text-[#F5F7FA] space-y-4 select-text">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#65D6C5]">
                <span>&gt; adarsh.tech ~ $</span>
                <span className="text-[#F5F7FA] font-bold">{entry.command}</span>
              </div>
              <div className="pl-4">{entry.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Interactive Console Input Field */}
        <form
          onSubmit={handleCommandSubmit}
          className="flex items-center gap-2 border-t border-[#273244] bg-[#111827]/90 px-4 py-3 font-mono text-xs focus-within:border-[#65D6C5] focus-within:shadow-[0_0_15px_rgba(101,214,197,0.2)] transition-all"
        >
          <span className="text-[#9FE870] font-bold whitespace-nowrap">&gt; adarsh.tech ~ $</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'benchmarks', 'projects'..."
            className="w-full bg-transparent text-[#F5F7FA] outline-none caret-[#9FE870] placeholder-[#A1AAB8]/40"
            autoFocus
          />
          <button
            type="submit"
            className="flex items-center gap-1 text-[#A1AAB8] hover:text-[#9FE870] transition-colors cursor-pointer"
          >
            <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
