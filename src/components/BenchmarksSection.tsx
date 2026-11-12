import React, { useState } from 'react';
import { BarChart3, Zap, Sliders, CheckCircle2, TrendingDown, Clock, ShieldAlert } from 'lucide-react';

export const BenchmarksSection: React.FC = () => {
  const [loadMultiplier, setLoadMultiplier] = useState<number>(2500); // ticks per second

  // Dynamic calculations based on load
  const legacySerializationLag = ((loadMultiplier / 1000) * 3.8).toFixed(1);
  const jsiDirectDispatchLag = (0.05 + (loadMultiplier / 5000) * 0.08).toFixed(2);
  const legacyMemoryChurn = Math.round((loadMultiplier / 1000) * 12.4);
  const jsiMemoryChurn = 0; // zero copy direct array buffer

  return (
    <section id="benchmarks" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870]">
              EMPIRICAL PROFILING &amp; RUNTIME BENCHMARKS
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Hardware &amp; Runtime Performance
            </h2>
          </div>
          <p className="max-w-md font-['Inter'] text-sm text-[#A1AAB8]">
            Stress test the difference between traditional JSON-over-string React Native
            and direct C++ JSI HostObjects under variable WebSocket throughput.
          </p>
        </div>

        {/* Interactive Load Tester Controller */}
        <div className="mt-8 rounded-[8px] border border-[#273244] bg-[#111827]/70 p-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#273244] pb-4">
            <div>
              <div className="font-mono text-xs uppercase text-[#65D6C5]">
                Dynamic WebSocket Tick Stress Simulator
              </div>
              <div className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FA]">
                Throughput: {loadMultiplier.toLocaleString()} ticks / sec
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-72">
              <span className="font-mono text-[10px] text-[#A1AAB8]">500</span>
              <input
                type="range"
                min="500"
                max="5000"
                step="250"
                value={loadMultiplier}
                onChange={(e) => setLoadMultiplier(Number(e.target.value))}
                className="w-full accent-[#9FE870] cursor-pointer"
              />
              <span className="font-mono text-[10px] text-[#A1AAB8]">5,000</span>
            </div>
          </div>

          {/* Comparative Metrics Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy Bridge Box */}
            <div className="rounded-[6px] border border-[#FF5555]/40 bg-[#080B12] p-5">
              <div className="flex items-center justify-between font-mono text-xs text-[#FF5555]">
                <span className="font-bold">LEGACY REACT NATIVE BRIDGE</span>
                <span>ASYNC JSON QUEUE</span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-[#273244] pb-2">
                  <span className="text-[#A1AAB8]">Serialization Queue Lag:</span>
                  <span className="text-lg font-bold text-[#FF5555] tabular-nums">
                    {legacySerializationLag} ms
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#273244] pb-2">
                  <span className="text-[#A1AAB8]">Hermes GC Churn:</span>
                  <span className="text-lg font-bold text-[#FF5555] tabular-nums">
                    {legacyMemoryChurn} MB / min
                  </span>
                </div>

                <div className="flex justify-between items-center pb-1">
                  <span className="text-[#A1AAB8]">Frame Budget Status:</span>
                  <span className="text-xs font-bold text-[#FF5555]">
                    {loadMultiplier > 2500 ? 'VIOLATED (Frame Drops)' : 'Stressed (45 FPS)'}
                  </span>
                </div>
              </div>
            </div>

            {/* JSI TurboModule Box */}
            <div className="rounded-[6px] border border-[#9FE870] bg-[#080B12] p-5 glow-lime-sm">
              <div className="flex items-center justify-between font-mono text-xs text-[#9FE870]">
                <span className="font-bold">OBSIDIAN KINETIC C++ JSI ENGINE</span>
                <span>ZERO-COPY MEMORY</span>
              </div>

              <div className="mt-4 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-[#273244] pb-2">
                  <span className="text-[#A1AAB8]">HostObject Pointer Lag:</span>
                  <span className="text-lg font-bold text-[#9FE870] tabular-nums">
                    {jsiDirectDispatchLag} ms
                  </span>
                </div>

                <div className="flex justify-between items-center border-b border-[#273244] pb-2">
                  <span className="text-[#A1AAB8]">Hermes GC Churn:</span>
                  <span className="text-lg font-bold text-[#9FE870] tabular-nums">
                    0.0 MB (Shared Buffers)
                  </span>
                </div>

                <div className="flex justify-between items-center pb-1">
                  <span className="text-[#A1AAB8]">Frame Budget Status:</span>
                  <span className="text-xs font-bold text-[#9FE870]">
                    OPTIMAL (120 FPS Sustained)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Benchmark Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-[4px] border border-[#273244] bg-[#111827]/60 p-4 font-mono">
            <div className="text-[10px] text-[#A1AAB8]">SQLITE BULK INSERT (5K ROWS)</div>
            <div className="mt-2 text-2xl font-bold text-[#65D6C5] tabular-nums">41.2ms</div>
            <div className="mt-1 text-[11px] text-[#9FE870]">vs 1,840ms on AsyncStorage</div>
            <div className="mt-2 text-[10px] text-[#A1AAB8]">Direct SQLite3 C JSI pointers</div>
          </div>

          <div className="rounded-[4px] border border-[#273244] bg-[#111827]/60 p-4 font-mono">
            <div className="text-[10px] text-[#A1AAB8]">COLD BOOT TIME (TTI)</div>
            <div className="mt-2 text-2xl font-bold text-[#65D6C5] tabular-nums">410ms</div>
            <div className="mt-1 text-[11px] text-[#9FE870]">-55% via Hermes Bytecode</div>
            <div className="mt-2 text-[10px] text-[#A1AAB8]">AOT compiled bytecode cache</div>
          </div>

          <div className="rounded-[4px] border border-[#273244] bg-[#111827]/60 p-4 font-mono">
            <div className="text-[10px] text-[#A1AAB8]">SKIA METAL GPU DRAW TIME</div>
            <div className="mt-2 text-2xl font-bold text-[#65D6C5] tabular-nums">1.1ms</div>
            <div className="mt-1 text-[11px] text-[#9FE870]">Direct CAMetalLayer blit</div>
            <div className="mt-2 text-[10px] text-[#A1AAB8]">Zero iOS UIKit overhead</div>
          </div>

          <div className="rounded-[4px] border border-[#273244] bg-[#111827]/60 p-4 font-mono">
            <div className="text-[10px] text-[#A1AAB8]">BLE SENSOR THROUGHPUT</div>
            <div className="mt-2 text-2xl font-bold text-[#65D6C5] tabular-nums">1.2 Mbps</div>
            <div className="mt-1 text-[11px] text-[#9FE870]">0 dropped GATT packets</div>
            <div className="mt-2 text-[10px] text-[#A1AAB8]">Lock-free atomic circular buffers</div>
          </div>
        </div>
      </div>
    </section>
  );
};
