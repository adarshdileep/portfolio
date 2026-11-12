import React, { useState, useEffect, useRef } from 'react';
import {
  TrendingUp,
  Activity,
  Sparkles,
  Database,
  ArrowUp,
  ArrowDown,
  Wifi,
  WifiOff,
  Battery,
  Layers,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
} from 'lucide-react';
import { SimulatorAppId } from '../types';

export const MobileSimulator: React.FC = () => {
  const [activeApp, setActiveApp] = useState<SimulatorAppId>('trading');
  const [architectureMode, setArchitectureMode] = useState<'jsi' | 'legacy'>('jsi');
  const [deviceModel, setDeviceModel] = useState<'ios' | 'android'>('ios');
  const [currentTime, setCurrentTime] = useState('09:41');

  // Architecture telemetry simulation state
  const isJsi = architectureMode === 'jsi';
  const simulatedFps = isJsi ? 120 : 36;
  const simulatedFrameTime = isJsi ? '2.1ms' : '27.8ms';
  const simulatedGcPressure = isJsi ? '0.0MB/s' : '14.2MB/s';
  const simulatedLatency = isJsi ? '1.4ms' : '24.6ms';

  // Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        `${now.getHours().toString().padStart(2, '0')}:${now
          .getMinutes()
          .toString()
          .padStart(2, '0')}`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="mobile-stage" className="border-b border-[#273244] bg-[#080B12] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#273244] pb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9FE870]">
              LIVE EMBEDDED MICRO-INTERACTIONS
            </div>
            <h2 className="mt-2 font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA]">
              Mobile Architecture Preview Stage
            </h2>
          </div>
          <p className="max-w-md font-['Inter'] text-sm text-[#A1AAB8]">
            Simulated mobile environment running four real-time React Native New Architecture
            engines. Toggle between modern C++ JSI and Legacy Bridge to observe runtime bottlenecks.
          </p>
        </div>

        {/* Cockpit Controls & Simulator Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Controls & Telemetry Dashboard (4 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* App Screen Switcher */}
            <div className="rounded-[8px] border border-[#273244] bg-[#111827]/80 p-5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                Select Engine Demo
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveApp('trading')}
                  className={`flex flex-col items-start gap-1 rounded-[4px] border p-3 text-left transition-all cursor-pointer ${
                    activeApp === 'trading'
                      ? 'border-[#9FE870] bg-[#1A2234] text-[#9FE870] glow-lime-sm'
                      : 'border-[#273244] bg-[#080B12] text-[#A1AAB8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>AETHERIA</span>
                  </div>
                  <span className="text-[10px] text-[#A1AAB8]">
                    HFT Orderbook &amp; Skia Depth
                  </span>
                </button>

                <button
                  onClick={() => setActiveApp('biopulse')}
                  className={`flex flex-col items-start gap-1 rounded-[4px] border p-3 text-left transition-all cursor-pointer ${
                    activeApp === 'biopulse'
                      ? 'border-[#65D6C5] bg-[#1A2234] text-[#65D6C5] glow-cyan-sm'
                      : 'border-[#273244] bg-[#080B12] text-[#A1AAB8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Activity className="h-3.5 w-3.5" />
                    <span>BIOPULSE</span>
                  </div>
                  <span className="text-[10px] text-[#A1AAB8]">
                    120Hz BLE Sensor &amp; ECG
                  </span>
                </button>

                <button
                  onClick={() => setActiveApp('physics')}
                  className={`flex flex-col items-start gap-1 rounded-[4px] border p-3 text-left transition-all cursor-pointer ${
                    activeApp === 'physics'
                      ? 'border-[#FFB86C] bg-[#1A2234] text-[#FFB86C]'
                      : 'border-[#273244] bg-[#080B12] text-[#A1AAB8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>VORTEX</span>
                  </div>
                  <span className="text-[10px] text-[#A1AAB8]">
                    Fluid Touch Worklets
                  </span>
                </button>

                <button
                  onClick={() => setActiveApp('crdt')}
                  className={`flex flex-col items-start gap-1 rounded-[4px] border p-3 text-left transition-all cursor-pointer ${
                    activeApp === 'crdt'
                      ? 'border-[#9FE870] bg-[#1A2234] text-[#9FE870] glow-lime-sm'
                      : 'border-[#273244] bg-[#080B12] text-[#A1AAB8] hover:text-[#F5F7FA]'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-semibold">
                    <Database className="h-3.5 w-3.5" />
                    <span>CHRONOS</span>
                  </div>
                  <span className="text-[10px] text-[#A1AAB8]">
                    Offline SQLite CRDT
                  </span>
                </button>
              </div>
            </div>

            {/* Architecture Mode Comparator Switch */}
            <div className="rounded-[8px] border border-[#273244] bg-[#111827]/80 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A1AAB8]">
                  Runtime Architecture
                </div>
                <span
                  className={`font-mono text-[10px] font-semibold ${
                    isJsi ? 'text-[#9FE870]' : 'text-[#FF5555]'
                  }`}
                >
                  {isJsi ? 'NEW ARCHITECTURE' : 'LEGACY BRIDGE'}
                </span>
              </div>

              <div className="mt-3 flex rounded-[4px] border border-[#273244] bg-[#080B12] p-1 font-mono text-xs">
                <button
                  onClick={() => setArchitectureMode('jsi')}
                  className={`flex-1 rounded-[2px] py-2 transition-all cursor-pointer ${
                    isJsi
                      ? 'bg-[#9FE870] text-[#080B12] font-semibold'
                      : 'text-[#A1AAB8] hover:text-[#F5F7FA]'
                  }`}
                >
                  JSI + C++ Turbo (Zero-Copy)
                </button>
                <button
                  onClick={() => setArchitectureMode('legacy')}
                  className={`flex-1 rounded-[2px] py-2 transition-all cursor-pointer ${
                    !isJsi
                      ? 'bg-[#FF5555] text-[#080B12] font-semibold'
                      : 'text-[#A1AAB8] hover:text-[#F5F7FA]'
                  }`}
                >
                  Legacy Bridge (JSON over String)
                </button>
              </div>

              {!isJsi && (
                <div className="mt-3 flex items-start gap-2 rounded-[4px] border border-[#FF5555]/30 bg-[#FF5555]/10 p-3 text-xs text-[#FFDAD6]">
                  <AlertTriangle className="h-4 w-4 shrink-0 text-[#FF5555]" />
                  <span>
                    Simulating JSON string serialization queue bottleneck: Hermes GC pauses
                    active, dropping frames to ~36 FPS.
                  </span>
                </div>
              )}
            </div>

            {/* Live Telemetry Cockpit */}
            <div className="rounded-[8px] border border-[#273244] bg-[#111827]/80 p-5 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#273244] pb-2 text-[#A1AAB8]">
                <span>FRAME CADENCE TELEMETRY</span>
                <span className="text-[#65D6C5]">16.6ms / 8.3ms BUDGET</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3">
                  <div className="text-[10px] text-[#A1AAB8]">RENDER REFRESH</div>
                  <div
                    className={`text-xl font-bold tabular-nums transition-colors ${
                      isJsi ? 'text-[#9FE870]' : 'text-[#FF5555]'
                    }`}
                  >
                    {simulatedFps} FPS
                  </div>
                  <div className="text-[10px] text-[#A1AAB8]">
                    {isJsi ? 'Locked ProMotion' : 'Frame drops detected'}
                  </div>
                </div>

                <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3">
                  <div className="text-[10px] text-[#A1AAB8]">FRAME DRAW TIME</div>
                  <div
                    className={`text-xl font-bold tabular-nums transition-colors ${
                      isJsi ? 'text-[#65D6C5]' : 'text-[#FF5555]'
                    }`}
                  >
                    {simulatedFrameTime}
                  </div>
                  <div className="text-[10px] text-[#A1AAB8]">
                    {isJsi ? 'Direct GPU pass' : 'UI Thread contention'}
                  </div>
                </div>

                <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3">
                  <div className="text-[10px] text-[#A1AAB8]">DISPATCH LATENCY</div>
                  <div
                    className={`text-xl font-bold tabular-nums transition-colors ${
                      isJsi ? 'text-[#F5F7FA]' : 'text-[#FFB86C]'
                    }`}
                  >
                    {simulatedLatency}
                  </div>
                  <div className="text-[10px] text-[#A1AAB8]">
                    {isJsi ? 'Direct HostObject' : 'JSON bridge enqueue'}
                  </div>
                </div>

                <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-3">
                  <div className="text-[10px] text-[#A1AAB8]">HERMES GC ALLOC</div>
                  <div
                    className={`text-xl font-bold tabular-nums transition-colors ${
                      isJsi ? 'text-[#9FE870]' : 'text-[#FF5555]'
                    }`}
                  >
                    {simulatedGcPressure}
                  </div>
                  <div className="text-[10px] text-[#A1AAB8]">
                    {isJsi ? 'Zero intermediate strings' : 'Stop-the-world risk'}
                  </div>
                </div>
              </div>

              {/* Thread Utilization Bar */}
              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between text-[10px] text-[#A1AAB8]">
                  <span>Thread Distribution</span>
                  <span>{isJsi ? 'Balanced 18% CPU' : 'Throttled 78% CPU'}</span>
                </div>
                <div className="flex h-2 w-full overflow-hidden rounded-full bg-[#080B12]">
                  <div
                    className="bg-[#9FE870] transition-all duration-300"
                    style={{ width: isJsi ? '20%' : '65%' }}
                    title="JS Thread"
                  />
                  <div
                    className="bg-[#65D6C5] transition-all duration-300"
                    style={{ width: isJsi ? '15%' : '25%' }}
                    title="UI Thread"
                  />
                  <div
                    className="bg-[#FFB86C] transition-all duration-300"
                    style={{ width: isJsi ? '10%' : '10%' }}
                    title="Render Pipeline"
                  />
                </div>
                <div className="flex items-center justify-between text-[9px] text-[#A1AAB8]">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870]"></span> JS Thread
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#65D6C5]"></span> UI Thread
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB86C]"></span> GPU Render
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Mobile Stage Frame (7 cols) */}
          <div className="flex flex-col items-center justify-center lg:col-span-7">
            {/* Phone Bezel Frame */}
            <div className="relative mx-auto w-full max-w-[380px] rounded-[38px] border-4 border-[#273244] bg-[#080B12] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_25px_-5px_rgba(159,232,112,0.15)] ring-1 ring-[#1A2234]">
              {/* Device Notch / Dynamic Island */}
              <div className="absolute top-5 left-1/2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-[#080B12] border border-[#273244]/80 flex items-center justify-end pr-2.5">
                <span className="h-2 w-2 rounded-full bg-[#1A2234]"></span>
              </div>

              {/* Screen Bezel (8px container radius per spec) */}
              <div
                className={`relative flex h-[640px] w-full flex-col overflow-hidden rounded-[26px] bg-[#0b0e15] border border-[#273244] ${
                  !isJsi ? 'animate-[pulse_1.8s_ease-in-out_infinite]' : ''
                }`}
              >
                {/* Status Bar */}
                <div className="z-20 flex h-9 shrink-0 items-center justify-between px-6 text-[11px] font-mono text-[#F5F7FA]">
                  <span>{currentTime}</span>
                  <div className="flex items-center gap-2 text-xs">
                    <Wifi className="h-3 w-3 text-[#9FE870]" />
                    <span className="text-[10px]">5G</span>
                    <Battery className="h-3.5 w-3.5 text-[#F5F7FA]" />
                  </div>
                </div>

                {/* Simulated Screen Content Body */}
                <div className="relative flex-1 overflow-y-auto px-4 pb-6 pt-2">
                  {activeApp === 'trading' && <TradingScreen isJsi={isJsi} />}
                  {activeApp === 'biopulse' && <BioPulseScreen isJsi={isJsi} />}
                  {activeApp === 'physics' && <PhysicsScreen isJsi={isJsi} />}
                  {activeApp === 'crdt' && <CrdtScreen isJsi={isJsi} />}
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="z-20 flex h-5 shrink-0 items-center justify-center">
                  <div className="h-1 w-32 rounded-full bg-[#273244]"></div>
                </div>
              </div>
            </div>

            {/* Quick Helper caption below device */}
            <div className="mt-4 text-center font-mono text-xs text-[#A1AAB8]">
              <span>Hardware target: </span>
              <span className="text-[#F5F7FA]">Apple Metal / Android Vulkan Pipeline</span>
              <span className="mx-2">·</span>
              <span className="text-[#65D6C5]">Interact with the screen above</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------
// 1. Aetheria Trading Terminal Screen Prototype
// ----------------------------------------------------
const TradingScreen: React.FC<{ isJsi: boolean }> = ({ isJsi }) => {
  const [price, setPrice] = useState(88420.5);
  const [priceDelta, setPriceDelta] = useState('+2.45%');
  const [lastExecuted, setLastExecuted] = useState<string | null>(null);
  const [tickCount, setTickCount] = useState(1480);

  // Live order book depths
  const [bids, setBids] = useState([
    { price: 88418.0, size: 2.45, pct: 85 },
    { price: 88415.5, size: 4.12, pct: 70 },
    { price: 88412.0, size: 1.88, pct: 55 },
    { price: 88410.0, size: 6.94, pct: 90 },
  ]);

  const [asks, setAsks] = useState([
    { price: 88422.5, size: 1.95, pct: 60 },
    { price: 88425.0, size: 3.44, pct: 75 },
    { price: 88428.5, size: 5.12, pct: 85 },
    { price: 88431.0, size: 2.18, pct: 45 },
  ]);

  // Tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.48) * 8;
      setPrice((prev) => {
        const next = prev + change;
        return Math.round(next * 10) / 10;
      });
      setTickCount((prev) => prev + 1);
    }, isJsi ? 180 : 650);

    return () => clearInterval(interval);
  }, [isJsi]);

  const handleOrder = (type: 'BUY' | 'SELL') => {
    const latency = isJsi ? '0.8ms' : '22.4ms';
    setLastExecuted(
      `${type} 0.50 BTC filled @ $${price.toFixed(1)} (${latency} via ${
        isJsi ? 'JSI Host' : 'Bridge'
      })`
    );
    setTimeout(() => setLastExecuted(null), 3000);
  };

  return (
    <div className="space-y-3 font-mono">
      {/* Header ticker */}
      <div className="flex items-center justify-between border-b border-[#273244] pb-2">
        <div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#F5F7FA]">
            <span>BTC/USDT</span>
            <span className="text-[9px] text-[#9FE870] bg-[#111827] px-1 rounded">PERP 20x</span>
          </div>
          <div className="text-[10px] text-[#A1AAB8]">Aetheria HostObject Engine</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-[#9FE870] tabular-nums">
            ${price.toLocaleString('en-US', { minimumFractionDigits: 1 })}
          </div>
          <div className="text-[10px] text-[#9FE870]">{priceDelta}</div>
        </div>
      </div>

      {/* SVG Canvas Candlestick & Area Chart */}
      <div className="relative h-28 w-full rounded-[4px] border border-[#273244] bg-[#111827] p-1.5 overflow-hidden">
        <div className="absolute top-1 left-2 text-[9px] text-[#A1AAB8]">
          Skia Metal 120 FPS Depth View
        </div>
        <div className="absolute top-1 right-2 text-[9px] text-[#65D6C5]">
          Ticks: {tickCount}
        </div>
        <svg className="h-full w-full pt-4" viewBox="0 0 320 80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="tradeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9FE870" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#9FE870" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q40,30 80,45 T160,25 T240,40 T320,15 L320,80 L0,80 Z"
            fill="url(#tradeGrad)"
          />
          <path
            d="M0,60 Q40,30 80,45 T160,25 T240,40 T320,15"
            fill="none"
            stroke="#9FE870"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Compact High-Frequency Orderbook */}
      <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2 text-[10px]">
        <div className="grid grid-cols-3 text-[#A1AAB8] pb-1 border-b border-[#273244]">
          <span>PRICE</span>
          <span className="text-center">SIZE (BTC)</span>
          <span className="text-right">DEPTH</span>
        </div>

        {/* Asks (Sell) */}
        <div className="space-y-0.5 pt-1">
          {asks.slice(0, 3).map((ask, i) => (
            <div key={`ask-${i}`} className="relative flex items-center justify-between text-[#FF5555]">
              <span className="relative z-10 tabular-nums">${ask.price.toFixed(1)}</span>
              <span className="relative z-10 text-center text-[#F5F7FA] tabular-nums">
                {ask.size}
              </span>
              <span className="relative z-10 text-right text-[#A1AAB8] tabular-nums">
                {(ask.size * 88.4).toFixed(0)}k
              </span>
              <div
                className="absolute top-0 right-0 h-full bg-[#FF5555]/15"
                style={{ width: `${ask.pct}%` }}
              />
            </div>
          ))}
        </div>

        {/* Mid-Spread */}
        <div className="my-1.5 flex items-center justify-between border-y border-[#273244] py-0.5 text-[#F5F7FA] font-bold">
          <span className="text-[#9FE870]">${price.toFixed(1)}</span>
          <span className="text-[9px] text-[#A1AAB8]">SPREAD 0.5 USDT</span>
        </div>

        {/* Bids (Buy) */}
        <div className="space-y-0.5">
          {bids.slice(0, 3).map((bid, i) => (
            <div key={`bid-${i}`} className="relative flex items-center justify-between text-[#9FE870]">
              <span className="relative z-10 tabular-nums">${bid.price.toFixed(1)}</span>
              <span className="relative z-10 text-center text-[#F5F7FA] tabular-nums">
                {bid.size}
              </span>
              <span className="relative z-10 text-right text-[#A1AAB8] tabular-nums">
                {(bid.size * 88.4).toFixed(0)}k
              </span>
              <div
                className="absolute top-0 right-0 h-full bg-[#9FE870]/15"
                style={{ width: `${bid.pct}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Execution confirmation pill */}
      {lastExecuted && (
        <div className="rounded-[4px] border border-[#9FE870] bg-[#1A2234] p-1.5 text-center text-[10px] text-[#9FE870] animate-fadeIn">
          {lastExecuted}
        </div>
      )}

      {/* Action Trade Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          onClick={() => handleOrder('BUY')}
          className="rounded-[4px] bg-[#9FE870] py-2.5 text-xs font-bold uppercase text-[#080B12] transition-transform active:scale-95 cursor-pointer shadow-sm"
        >
          Buy Long
        </button>
        <button
          onClick={() => handleOrder('SELL')}
          className="rounded-[4px] bg-[#FF5555] py-2.5 text-xs font-bold uppercase text-[#F5F7FA] transition-transform active:scale-95 cursor-pointer shadow-sm"
        >
          Sell Short
        </button>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 2. BioPulse Biosensor Screen Prototype
// ----------------------------------------------------
const BioPulseScreen: React.FC<{ isJsi: boolean }> = ({ isJsi }) => {
  const [heartRate, setHeartRate] = useState(72);
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 100);
      setHeartRate((prev) => 70 + Math.floor(Math.sin(Date.now() / 2000) * 5));
    }, isJsi ? 50 : 200);
    return () => clearInterval(interval);
  }, [isJsi]);

  return (
    <div className="space-y-3 font-mono">
      <div className="flex items-center justify-between border-b border-[#273244] pb-2">
        <div>
          <div className="text-[11px] font-bold text-[#F5F7FA]">BIOPULSE VITAL-120</div>
          <div className="text-[10px] text-[#65D6C5]">Continuous BLE Ring Stream</div>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-[#9FE870]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#9FE870] animate-ping" />
          <span>BLE LIVE</span>
        </div>
      </div>

      {/* Live Continuous Waveform Surface */}
      <div className="relative h-32 w-full rounded-[4px] border border-[#273244] bg-[#111827] p-2 overflow-hidden">
        <div className="flex justify-between text-[9px] text-[#A1AAB8]">
          <span>Lead II ECG (Fabric Shadow Node)</span>
          <span className="text-[#65D6C5]">120 Samples/sec</span>
        </div>

        {/* Real-time ECG Trace */}
        <svg className="h-20 w-full pt-1" viewBox="0 0 300 70" preserveAspectRatio="none">
          <path
            d="M0,35 L40,35 L50,33 L55,38 L60,10 L68,60 L74,32 L80,35 L120,35 L130,33 L135,38 L140,10 L148,60 L154,32 L160,35 L200,35 L210,33 L215,38 L220,10 L228,60 L234,32 L240,35 L300,35"
            fill="none"
            stroke="#65D6C5"
            strokeWidth="2"
            strokeDasharray="300"
            strokeDashoffset={-pulsePhase * 3}
          />
        </svg>

        <div className="flex justify-between text-[9px] font-mono text-[#A1AAB8] border-t border-[#273244] pt-1">
          <span>QRS Interval: 88ms</span>
          <span>ST Segment: Normal</span>
        </div>
      </div>

      {/* Vitals Metric Grid */}
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2.5">
          <div className="text-[#A1AAB8]">HEART RATE</div>
          <div className="text-xl font-bold text-[#FF5555] tabular-nums">
            {heartRate} <span className="text-xs font-normal text-[#A1AAB8]">BPM</span>
          </div>
          <div className="text-[9px] text-[#9FE870]">Resting baseline</div>
        </div>

        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2.5">
          <div className="text-[#A1AAB8]">BLOOD OXYGEN</div>
          <div className="text-xl font-bold text-[#65D6C5] tabular-nums">
            98.8 <span className="text-xs font-normal text-[#A1AAB8]">%</span>
          </div>
          <div className="text-[9px] text-[#65D6C5]">Optimal perfusion</div>
        </div>

        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2.5">
          <div className="text-[#A1AAB8]">HRV RMSSD</div>
          <div className="text-xl font-bold text-[#9FE870] tabular-nums">
            68 <span className="text-xs font-normal text-[#A1AAB8]">ms</span>
          </div>
          <div className="text-[9px] text-[#9FE870]">Parasympathetic high</div>
        </div>

        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2.5">
          <div className="text-[#A1AAB8]">SIMD FILTER TIME</div>
          <div className="text-xl font-bold text-[#FFB86C] tabular-nums">
            12 <span className="text-xs font-normal text-[#A1AAB8]">&mu;s</span>
          </div>
          <div className="text-[9px] text-[#A1AAB8]">ARM Neon pass</div>
        </div>
      </div>

      {/* Raw Sensor Packet Hex Inspector */}
      <div className="rounded-[4px] border border-[#273244] bg-[#080B12] p-2 text-[9px] text-[#A1AAB8] font-mono leading-tight">
        <div className="text-[#65D6C5] font-semibold mb-1">GATT Characteristic Byte Stream:</div>
        <div>0x4A 0x2C 0xFF 0x01 0xA4 0x88 0x62 0xE0 [VALID CRC32]</div>
        <div className="text-[#9FE870]">Lock-free C++ ring buffer: 0 dropped frames</div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 3. Vortex Kinetic Physics & Shader Screen Prototype
// ----------------------------------------------------
const PhysicsScreen: React.FC<{ isJsi: boolean }> = ({ isJsi }) => {
  const [pos, setPos] = useState({ x: 140, y: 120 });
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateCoord(e);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateCoord(e);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    // Spring back toward center
    setVelocity({ vx: (140 - pos.x) * 0.15, vy: (120 - pos.y) * 0.15 });
  };

  const updateCoord = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(20, Math.min(260, e.clientX - rect.left));
    const y = Math.max(20, Math.min(220, e.clientY - rect.top));
    setPos({ x, y });
  };

  return (
    <div className="space-y-3 font-mono">
      <div className="flex items-center justify-between border-b border-[#273244] pb-2">
        <div>
          <div className="text-[11px] font-bold text-[#F5F7FA]">VORTEX WORKLET ENGINE</div>
          <div className="text-[10px] text-[#FFB86C]">RK4 Spring Integrator</div>
        </div>
        <div className="text-[10px] text-[#9FE870]">120Hz WORKLET</div>
      </div>

      {/* Interactive Physics Surface */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative h-64 w-full cursor-grab active:cursor-grabbing select-none rounded-[4px] border border-[#273244] bg-[#111827] p-2 overflow-hidden touch-none"
      >
        <div className="absolute top-2 left-2 text-[9px] text-[#A1AAB8]">
          Drag orb to test UI-thread spring response
        </div>

        {/* Coordinate crosshair lines */}
        <div
          className="pointer-events-none absolute h-full w-[1px] bg-[#65D6C5]/20"
          style={{ left: `${pos.x}px` }}
        />
        <div
          className="pointer-events-none absolute w-full h-[1px] bg-[#65D6C5]/20"
          style={{ top: `${pos.y}px` }}
        />

        {/* Physics Orb Token */}
        <div
          className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#9FE870] bg-[#1A2234] shadow-[0_0_20px_rgba(159,232,112,0.6)] flex items-center justify-center transition-transform ${
            isDragging ? 'scale-110' : 'scale-100'
          }`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '56px',
            height: '56px',
          }}
        >
          <div className="text-[9px] font-bold text-[#9FE870]">DRAG</div>
        </div>

        {/* Concentric ripple rings */}
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#65D6C5]/30 animate-ping"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: '80px',
            height: '80px',
          }}
        />
      </div>

      {/* Worklet Telemetry Bar */}
      <div className="grid grid-cols-3 gap-2 text-[10px]">
        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2">
          <div className="text-[#A1AAB8]">COORD X,Y</div>
          <div className="font-bold text-[#F5F7FA] tabular-nums">
            {Math.round(pos.x)}, {Math.round(pos.y)}
          </div>
        </div>
        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2">
          <div className="text-[#A1AAB8]">WORKLET LAG</div>
          <div className="font-bold text-[#9FE870] tabular-nums">0.38ms</div>
        </div>
        <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2">
          <div className="text-[#A1AAB8]">TOUCH CADENCE</div>
          <div className="font-bold text-[#65D6C5] tabular-nums">120 Hz</div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------
// 4. Chronos Offline-First CRDT Ledger Screen Prototype
// ----------------------------------------------------
const CrdtScreen: React.FC<{ isJsi: boolean }> = ({ isJsi }) => {
  const [isOnline, setIsOnline] = useState(true);
  const [entries, setEntries] = useState([
    { id: 'tx-101', title: 'Work Order #4892 Verified', clock: 'nodeA:3', time: '1m ago', synced: true },
    { id: 'tx-102', title: 'Telemetry Calibration Log', clock: 'nodeA:4,nodeB:1', time: 'Just now', synced: true },
  ]);
  const [counter, setCounter] = useState(103);

  const handleAddEntry = () => {
    const newEntry = {
      id: `tx-${counter}`,
      title: `Field Asset Sync #${counter}`,
      clock: `nodeA:${counter - 99}`,
      time: '0s ago',
      synced: isOnline,
    };
    setEntries([newEntry, ...entries]);
    setCounter((prev) => prev + 1);
  };

  const handleToggleOnline = () => {
    const nextState = !isOnline;
    setIsOnline(nextState);
    if (nextState) {
      // Auto resolve & sync offline entries
      setEntries((prev) => prev.map((e) => ({ ...e, synced: true })));
    }
  };

  return (
    <div className="space-y-3 font-mono">
      <div className="flex items-center justify-between border-b border-[#273244] pb-2">
        <div>
          <div className="text-[11px] font-bold text-[#F5F7FA]">CHRONOS CRDT LEDGER</div>
          <div className="text-[10px] text-[#9FE870]">Direct SQLite C++ JSI Bindings</div>
        </div>
        <button
          onClick={handleToggleOnline}
          className={`flex items-center gap-1 rounded-[4px] border px-2 py-0.5 text-[9px] font-semibold cursor-pointer transition-colors ${
            isOnline
              ? 'border-[#9FE870] bg-[#111827] text-[#9FE870]'
              : 'border-[#FFB86C] bg-[#1A2234] text-[#FFB86C]'
          }`}
        >
          {isOnline ? <Wifi className="h-2.5 w-2.5" /> : <WifiOff className="h-2.5 w-2.5" />}
          <span>{isOnline ? 'ONLINE' : 'AIRPLANE'}</span>
        </button>
      </div>

      {/* Storage write latency banner */}
      <div className="rounded-[4px] border border-[#273244] bg-[#111827] p-2 text-[10px] flex items-center justify-between">
        <span className="text-[#A1AAB8]">SQLite JSI Direct Commit:</span>
        <span className="font-bold text-[#65D6C5]">0.35ms (14x AsyncStorage)</span>
      </div>

      {/* Ledger list */}
      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between rounded-[4px] border border-[#273244] bg-[#111827] p-2 text-[10px]"
          >
            <div>
              <div className="font-medium text-[#F5F7FA]">{entry.title}</div>
              <div className="text-[9px] text-[#A1AAB8]">Vector: [{entry.clock}]</div>
            </div>
            <div className="text-right">
              <span
                className={`text-[9px] font-semibold ${
                  entry.synced ? 'text-[#9FE870]' : 'text-[#FFB86C]'
                }`}
              >
                {entry.synced ? 'MERGED' : 'PENDING'}
              </span>
              <div className="text-[8px] text-[#A1AAB8]">{entry.time}</div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddEntry}
        className="w-full rounded-[4px] bg-[#9FE870] py-2 text-xs font-bold uppercase text-[#080B12] transition-transform active:scale-95 cursor-pointer shadow-sm"
      >
        + Commit New Entity
      </button>
    </div>
  );
};
