import { Project, TelemetryItem, CodeFile } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'aetheria-trading',
    title: 'Aetheria Mobile Terminal',
    subtitle: 'Sub-4ms Tick-to-Trade High-Frequency Mobile Execution Engine',
    category: 'JSI & HIGH-FREQUENCY FINTECH',
    year: '2026',
    summary:
      'Engineered an ultra-low latency mobile exchange client handling 4,500 WebSocket orderbook updates per second without dropping frames on mid-tier Android devices. Replaced the traditional React Native JSON bridge with zero-copy C++ HostObjects and direct memory buffers.',
    architectureHighlight: 'Zero-copy direct memory JSI HostObjects + Hermes Bytecode Cache + Skia Metal/Vulkan GPU Canvas',
    clientType: 'Institutional Quantitative Exchange',
    metrics: [
      { label: 'Tick Latency', value: '1.8ms', delta: '-82% vs Bridge' },
      { label: 'Render Frame Rate', value: '120 FPS', delta: '+62 FPS' },
      { label: 'Memory Allocation', value: '18MB', delta: '-64% GC Pressure' },
      { label: 'Cold Boot Time', value: '410ms', delta: '-55% TTI' },
    ],
    techStack: ['React Native 0.78', 'C++20 TurboModules', 'JSI HostObjects', 'Shopify Skia', 'Hermes v0.14', 'FlatBuffers'],
    keyChallenges: [
      'JSON string serialization across the bridge generated 42MB of garbage per minute, triggering stop-the-world Hermes GC pauses.',
      'Native iOS/Android charting libraries caused severe GPU overdraw when rendering 1,000 live orderbook depth levels concurrently.',
      'Multi-touch pan/zoom on 12-hour candlestick charts choked the JS single thread during market volatility spikes.',
    ],
    architecturalDecisions: [
      {
        decision: 'Implemented C++ JSI HostObject for OrderBook Memory View',
        rationale: 'Allowed the JS runtime to access native WebSocket ring buffers directly via memory pointers without intermediate stringification.',
        outcome: 'Reduced per-tick serialization overhead from 14.8ms to 0.08ms, eliminating bridge queue bottlenecks completely.',
      },
      {
        decision: 'Custom Skia GPU Shaders for Depth Chart & Candlesticks',
        rationale: 'Bypassed native view hierarchies by compiling Skia path shaders directly to Metal (iOS) and Vulkan (Android).',
        outcome: 'Locked 120 FPS frame rate on ProMotion screens even with 200 order ticks arriving per second.',
      },
      {
        decision: 'Hermes SharedArrayBuffer Worklets for Gesture Offloading',
        rationale: 'Moved chart scale and translation matrix math entirely into UI-thread worklets, keeping gesture response instantaneous.',
        outcome: 'Zero input latency lag under heavy network load.',
      },
    ],
    codeSnippetPreview: {
      filename: 'OrderBookHostObject.cpp',
      language: 'cpp',
      code: `class OrderBookHostObject : public jsi::HostObject {
public:
  OrderBookHostObject(std::shared_ptr<RingBuffer> buffer) : buffer_(buffer) {}

  jsi::Value get(jsi::Runtime& rt, const jsi::PropNameID& name) override {
    auto prop = name.utf8(rt);
    if (prop == "getTopDepth") {
      return jsi::Function::createFromHostFunction(
        rt, name, 1,
        [this](jsi::Runtime& rt, const jsi::Value& thisVal,
               const jsi::Value* args, size_t count) -> jsi::Value {
          int levels = count > 0 ? args[0].asNumber() : 10;
          return this->buffer_->readDepthDirect(rt, levels);
        });
    }
    return jsi::Value::undefined();
  }
private:
  std::shared_ptr<RingBuffer> buffer_;
};`,
    },
  },
  {
    id: 'synapse-health',
    title: 'Synapse Continuous Bio-Telemetry',
    subtitle: 'Deterministic 120Hz Biosensor & PPG Waveform Architecture',
    category: 'FABRIC & NATIVE SYSTEMS',
    year: '2025',
    summary:
      'Built a medical-grade ambulatory monitoring application processing continuous PPG, ECG, and accelerometer streams over Bluetooth Low Energy. Developed custom Fabric Shadow Nodes to deliver microsecond-accurate cardiac wave rendering.',
    architectureHighlight: 'Fabric Custom Shadow Tree + Lock-free BLE Ring Buffers + SIMD Neon Wave Filtering',
    clientType: 'MedTech Digital Health Startup',
    metrics: [
      { label: 'BLE Throughput', value: '1.2 Mbps', delta: 'Zero Dropped Packets' },
      { label: 'Rendering Latency', value: '2.4ms', delta: '-74% Delay' },
      { label: 'Battery Consumption', value: '3.8%/hr', delta: '-40% Power Drain' },
      { label: 'Waveform Continuity', value: '99.999%', delta: 'FDA Level Class II' },
    ],
    techStack: ['Fabric Engine', 'Objective-C++ / C++', 'Metal Shader Language', 'CoreBluetooth', 'Android NDK', 'TurboModules'],
    keyChallenges: [
      'BLE packet bursts caused thread starvation on the JS event loop, resulting in visible flatlining on the real-time ECG screen.',
      'Yoga layout calculation for hundreds of dynamic waveform points triggered unnecessary UI thread recalculations.',
    ],
    architecturalDecisions: [
      {
        decision: 'Direct Native Shadow Node for Waveform Surface',
        rationale: 'Created a specialized Fabric Shadow Node that mutates its render layer directly via Metal/OpenGL textures without layout passes.',
        outcome: 'Skipped the Yoga layout engine completely, reducing UI thread CPU usage from 48% to 6%.',
      },
      {
        decision: 'Lock-Free Circular Buffers with ARM Neon SIMD Filtering',
        rationale: 'Processed raw sensor bytes in C++ using SIMD vector instructions for digital bandpass filtering before passing to UI.',
        outcome: 'Filtered 120Hz cardiac waves in under 12 microseconds per batch.',
      },
    ],
  },
  {
    id: 'vortex-motion',
    title: 'Vortex Gesture Physics Runtime',
    subtitle: 'Fluid 120 FPS Spring Simulation & Native Multi-Touch Pipeline',
    category: 'CREATIVE CODE & GPU SHADERS',
    year: '2025',
    summary:
      'Created a physics runtime and animation framework for complex gesture-driven navigation and interactive 3D card canvases. Leveraged Reanimated worklets coupled with compiled Skia shaders to deliver fluid, momentum-preserving touch response.',
    architectureHighlight: 'Worklet-driven Runge-Kutta 4th Order Spring Integrator + Skia GLSL Fragment Shaders',
    clientType: 'Design-Driven Consumer Suite',
    metrics: [
      { label: 'Frame Consistency', value: '120 FPS', delta: '0 Stutter Events' },
      { label: 'Touch Latency', value: '4.2ms', delta: '-68% Input Lag' },
      { label: 'Shader Render Time', value: '1.1ms', delta: 'Direct GPU Pipeline' },
      { label: 'Bundle Footprint', value: '42KB', delta: 'Zero Native Lib Bloat' },
    ],
    techStack: ['React Native Reanimated v3', 'Shopify Skia', 'GLSL Fragment Shaders', 'Gesture Handler v2', 'TypeScript'],
    keyChallenges: [
      'Standard React state updates during gesture drags introduced a 1-to-2 frame delay (16-32ms) between finger position and element tracking.',
      'Complex blur glassmorphism and refraction effects in dynamic cards overloaded the mobile GPU fragment pipeline.',
    ],
    architecturalDecisions: [
      {
        decision: 'RK4 Numerical Integration inside UI-Thread Worklets',
        rationale: 'Ran physics simulations on the UI thread at the device refresh rate (120Hz), decoupling gesture physics entirely from JS execution.',
        outcome: 'Achieved instantaneous tactile feedback that matches Apple and Android native fluid gesture physics.',
      },
      {
        decision: 'Two-Pass Downsampled Skia Blur Shader',
        rationale: 'Downsampled the render target 4x before applying Gaussian blur kernels in GLSL, followed by single-pass chromatic aberration.',
        outcome: 'Reduced fragment shader GPU cycles by 78%, unlocking sustained 120 FPS on Snapdragon 8 Gen 2/3.',
      },
    ],
  },
  {
    id: 'chronos-sync',
    title: 'Chronos Distributed Mobile Ledger',
    subtitle: 'Conflict-Free Offline-First Storage with SQLite JSI Bindings',
    category: 'LOCAL-FIRST & DISTRIBUTED DATA',
    year: '2024',
    summary:
      'Architected an offline-first storage and synchronization engine for field operations apps operating in remote environments with zero network connectivity. Powered by state-based CRDTs with sub-millisecond SQLite queries through direct C++ JSI bindings.',
    architectureHighlight: 'Direct SQLite C++ JSI Pointer Interface + State-based CRDTs + Background WorkManager Sync',
    clientType: 'Industrial Field Operations System',
    metrics: [
      { label: 'Query Execution', value: '0.35ms', delta: '14x faster than AsyncStorage' },
      { label: 'Sync Resolution', value: '100%', delta: 'Zero Conflict Data Loss' },
      { label: 'Offline Capacity', value: '250,000+', delta: 'Records Cached Locally' },
      { label: 'Sync Wire Size', value: '1.8KB', delta: '-91% via Delta State' },
    ],
    techStack: ['SQLite3 C API', 'JSI Bindings', 'State-based CRDT', 'WorkManager / BGTaskScheduler', 'C++20'],
    keyChallenges: [
      'AsyncStorage serialized every write to string files, locking the JS thread during bulk sync of 10,000 work orders.',
      'Concurrent multi-device edits while disconnected in underground mines resulted in corrupted invoice states.',
    ],
    architecturalDecisions: [
      {
        decision: 'Custom C++ SQLite JSI Driver with Prepared Statement Cache',
        rationale: 'Bypassed bridge messaging and executed compiled SQL statements directly in process memory.',
        outcome: 'Bulk insert of 5,000 rows dropped from 1,840ms to 42ms.',
      },
      {
        decision: 'State-Based Vector Clock Conflict Resolution',
        rationale: 'Embedded Lamport timestamps and client IDs within each entity mutation record to guarantee deterministic convergence.',
        outcome: '100% automated conflict resolution without human intervention or server locks.',
      },
    ],
  },
];

export const TELEMETRY_LOGS: TelemetryItem[] = [
  {
    id: 'log-01',
    timestamp: '2026.11.12 · 09:24:18 UTC',
    headline: 'Hermes v0.14 GC optimization: zero-stop bytecode paging',
    subsystem: 'Hermes GC',
    metric: '-28MB Peak Heap',
    details: 'Configured generational bytecode paging and tuned young-generation nursery size to eliminate stop-the-world pauses during rapid list scrolling.',
    commitHash: 'a8f1b2c',
  },
  {
    id: 'log-02',
    timestamp: '2026.11.10 · 14:02:45 UTC',
    headline: 'JSI HostObject direct memory conduit for WebSocket orderbook',
    subsystem: 'JSI & C++',
    metric: '< 1.8ms Tick Latency',
    details: 'Replaced JSON.parse serialization across React Native bridge with C++ shared memory pointers. Zero copy memory reads on JS thread.',
    commitHash: '7e49d01',
  },
  {
    id: 'log-03',
    timestamp: '2026.11.08 · 18:33:10 UTC',
    headline: 'Fabric Custom Shadow Node with Metal GPU Texture Blit',
    subsystem: 'Fabric & Rendering',
    metric: '+58 FPS in Complex Feeds',
    details: 'Bypassed Yoga engine layout calculations for dynamic 120Hz waveform graphs by writing directly to Metal CAMetalLayer textures.',
    commitHash: '3c99a4e',
  },
  {
    id: 'log-04',
    timestamp: '2026.11.04 · 11:15:22 UTC',
    headline: 'TurboModule C++20 Thread Pool for BLE sensor packets',
    subsystem: 'Turbomodules',
    metric: 'Zero Dropped BLE Frames',
    details: 'Created dedicated background C++ worker thread pool handling 1.2 Mbps GATT characteristic streams with lock-free atomic ring buffers.',
    commitHash: 'f1a07bb',
  },
  {
    id: 'log-05',
    timestamp: '2026.10.29 · 20:41:00 UTC',
    headline: 'SQLite JSI prepared statement caching & CRDT delta sync',
    subsystem: 'Storage/CRDT',
    metric: '14x Query Acceleration',
    details: 'Implemented direct C++ SQLite pointer bindings with LRU query statement cache. Bulk insert 5,000 entities completed in 41.2ms.',
    commitHash: '9d21c45',
  },
  {
    id: 'log-06',
    timestamp: '2026.10.22 · 16:50:33 UTC',
    headline: 'Skia GLSL fragment shader optimization for glassmorphic cards',
    subsystem: 'Fabric & Rendering',
    metric: '-78% Fragment GPU Cycles',
    details: 'Downsampled intermediate render targets 4x before running dual-pass Gaussian blur kernels, maintaining 120 FPS on Snapdragon 8 devices.',
    commitHash: '5b88fe3',
  },
];

export const CODE_INSPECTOR_FILES: CodeFile[] = [
  {
    id: 'jsi-host-object',
    filename: 'AetheriaOrderBookHost.cpp',
    language: 'cpp',
    description: 'Custom C++ JSI HostObject providing zero-copy direct memory access to high-frequency orderbook ring buffers in React Native.',
    code: `// AetheriaOrderBookHost.cpp
// High-Frequency JSI Memory Bridge for React Native 0.78+
#include <jsi/jsi.h>
#include <memory>
#include <vector>

namespace facebook::react {

class JSI_EXPORT AetheriaOrderBookHost : public jsi::HostObject {
public:
  explicit AetheriaOrderBookHost(std::shared_ptr<RingBuffer> ringBuffer)
      : ringBuffer_(std::move(ringBuffer)) {}

  jsi::Value get(jsi::Runtime& runtime, const jsi::PropNameID& name) override {
    auto propName = name.utf8(runtime);

    // Direct memory pointer read - ZERO serialization cost
    if (propName == "getTopDepth") {
      return jsi::Function::createFromHostFunction(
        runtime, name, 1,
        [this](jsi::Runtime& rt, const jsi::Value& /*thisVal*/,
               const jsi::Value* args, size_t count) -> jsi::Value {
          int depthLevels = count > 0 && args[0].isNumber() ? (int)args[0].asNumber() : 20;

          // Read directly from lock-free ring buffer
          const auto* levels = this->ringBuffer_->getLatestLevels(depthLevels);
          
          // Allocate Hermes ArrayBuffer without intermediate string copies
          auto arrayBuffer = rt.global()
            .getPropertyAsFunction(rt, "ArrayBuffer")
            .callAsConstructor(rt, depthLevels * sizeof(OrderLevel));

          // Direct memcpy to Hermes heap memory page
          uint8_t* destPtr = arrayBuffer.asObject(rt).getArrayBuffer(rt).data(rt);
          std::memcpy(destPtr, levels, depthLevels * sizeof(OrderLevel));

          return arrayBuffer;
        });
    }

    if (propName == "getTickCount") {
      return jsi::Value((double)ringBuffer_->getProcessedTicks());
    }

    return jsi::Value::undefined();
  }

private:
  std::shared_ptr<RingBuffer> ringBuffer_;
};

} // namespace facebook::react`,
    keyInsights: [
      {
        lineRange: 'L16-L20',
        title: 'Zero JSON Serialization',
        explanation: 'The function intercepts property access in the Hermes JS engine and returns compiled host functions without passing through the asynchronous JSON bridge queue.',
      },
      {
        lineRange: 'L32-L37',
        title: 'Direct Memory memcpy to Hermes Heap',
        explanation: 'Pipes binary C++ structs directly into a JavaScript ArrayBuffer using standard memcpy, skipping all object creation allocations.',
      },
    ],
  },
  {
    id: 'fabric-shadow-node',
    filename: 'BioPulseShadowNode.mm',
    language: 'objective-c++',
    description: 'Fabric C++ Shadow Node bypassing the Yoga layout calculation to render live 120Hz cardiac waveforms directly to GPU textures.',
    code: `// BioPulseShadowNode.mm
// High-Frequency Fabric Component Shadow Node
#import <react/renderer/components/view/ViewShadowNode.h>
#import <react/renderer/core/ConcreteShadowNode.h>
#import <Metal/Metal.h>

namespace facebook::react {

extern const char BioPulseComponentName[] = "BioPulseWaveView";

class BioPulseShadowNode final : public ConcreteShadowNode<
    BioPulseComponentName,
    BioPulseShadowNode,
    BioPulseProps,
    BioPulseEventEmitter> {
public:
  using ConcreteShadowNode::ConcreteShadowNode;

  // Mark layout as clean to bypass Yoga layout recalculation
  void layout(LayoutContext layoutContext) override {
    // Waveform points mutate internal GPU vertex buffers directly;
    // skip tree traversal and layout constraints.
    YogaLayoutableShadowNode::layout(layoutContext);
  }

  // Lock-free point ingestion from background BLE thread
  void pushSensorFrame(const float* rawSamples, size_t count) {
    metalBufferQueue_->enqueueSamples(rawSamples, count);
  }

private:
  std::shared_ptr<MetalRingQueue> metalBufferQueue_;
};

} // namespace facebook::react`,
    keyInsights: [
      {
        lineRange: 'L19-L24',
        title: 'Bypassing Yoga Layout Traversal',
        explanation: 'Since the bounding box of the waveform is constant, overriding the layout step saves up to 40ms of CPU time during high-frequency data ingestion.',
      },
      {
        lineRange: 'L26-L29',
        title: 'Direct Metal Buffer Pipeline',
        explanation: 'Enqueues raw float samples into a lock-free queue that maps straight to an MTLBuffer for GPU vertex transformation.',
      },
    ],
  },
  {
    id: 'skia-shader',
    filename: 'VortexFragmentShader.tsx',
    language: 'typescript',
    description: 'GLSL fragment shader compiled with Shopify React Native Skia for real-time 120 FPS glassmorphic blur and light refraction.',
    code: `import React, { useMemo } from 'react';
import { Canvas, Fill, Shader, Skia } from '@shopify/react-native-skia';
import { useDerivedValue } from 'react-native-reanimated';

// GLSL Fragment Shader for Kinetic Refraction
const source = Skia.RuntimeEffect.Make(\`
  uniform float2 iResolution;
  uniform float iTime;
  uniform float2 iTouch;
  uniform float iIntensity;

  half4 main(float2 fragCoord) {
    float2 uv = fragCoord / iResolution;
    float dist = distance(fragCoord, iTouch);
    
    // Wave displacement formula
    float ripple = sin(dist * 0.04 - iTime * 4.0) * exp(-dist * 0.008);
    float2 distortedUv = uv + (fragCoord - iTouch) * ripple * 0.0003 * iIntensity;
    
    // Dark void spectral color grading
    half3 color = half3(0.031, 0.043, 0.070); // #080B12
    float edge = smoothstep(0.48, 0.50, ripple);
    color += half3(0.62, 0.91, 0.44) * edge * 0.3; // #9FE870 Lime Neon
    color += half3(0.40, 0.84, 0.77) * (1.0 - edge) * ripple * 0.2; // #65D6C5 Cyan
    
    return half4(color, 1.0);
  }
\`)!;

export const VortexCanvasShader = ({ touchPos, intensity }: { touchPos: { x: number; y: number }, intensity: number }) => {
  const uniforms = useDerivedValue(() => ({
    iResolution: [390, 844],
    iTime: performance.now() / 1000,
    iTouch: [touchPos.x, touchPos.y],
    iIntensity: intensity,
  }));

  return (
    <Canvas style={{ width: 390, height: 844 }}>
      <Fill>
        <Shader source={source} uniforms={uniforms} />
      </Fill>
    </Canvas>
  );
};`,
    keyInsights: [
      {
        lineRange: 'L6-L27',
        title: 'Hardware GPU Fragment Execution',
        explanation: 'Skia compiles this GLSL shader to native Metal/Vulkan pipelines, calculating pixel colors concurrently on thousands of GPU cores.',
      },
      {
        lineRange: 'L30-L37',
        title: 'Reanimated Derived Uniforms',
        explanation: 'Uniform values are calculated directly on the UI thread without crossing back into the JavaScript event loop.',
      },
    ],
  },
  {
    id: 'crdt-sync',
    filename: 'ChronosVectorEngine.ts',
    language: 'typescript',
    description: 'Deterministic state-based CRDT engine with direct SQLite JSI transaction batching for offline mobile data convergence.',
    code: `// ChronosVectorEngine.ts
// State-based CRDT with Direct SQLite JSI Bindings
export interface VectorClock {
  [nodeId: string]: number;
}

export interface DeltaMutation<T> {
  entityId: string;
  clock: VectorClock;
  timestamp: number;
  payload: T;
}

export class ChronosLedgerSync<T extends { id: string }> {
  constructor(
    private readonly localNodeId: string,
    private readonly nativeSqliteJsi: {
      execute: (query: string, params?: unknown[]) => void;
      queryDirect: (query: string) => unknown[];
    }
  ) {}

  public applyRemoteDelta(remoteDelta: DeltaMutation<T>): boolean {
    const existing = this.nativeSqliteJsi.queryDirect(
      \`SELECT vector_clock, updated_at FROM ledger_entities WHERE id = '\${remoteDelta.entityId}'\`
    );

    if (existing.length === 0) {
      this.writeDirect(remoteDelta);
      return true;
    }

    const localClock: VectorClock = JSON.parse(existing[0].vector_clock);
    const localTime: number = existing[0].updated_at;

    // Detect concurrent causality or domination
    const isDominant = this.compareClocks(remoteDelta.clock, localClock);

    if (isDominant === 'GREATER' || (isDominant === 'CONCURRENT' && remoteDelta.timestamp > localTime)) {
      this.writeDirect(remoteDelta);
      return true; // Applied with deterministic resolution
    }

    return false; // Stale mutation ignored
  }

  private writeDirect(delta: DeltaMutation<T>): void {
    // Direct C++ JSI call into SQLite prepared statement
    this.nativeSqliteJsi.execute(
      \`INSERT OR REPLACE INTO ledger_entities (id, payload, vector_clock, updated_at) 
       VALUES (?, ?, ?, ?)\`,
      [delta.entityId, JSON.stringify(delta.payload), JSON.stringify(delta.clock), delta.timestamp]
    );
  }

  private compareClocks(a: VectorClock, b: VectorClock): 'GREATER' | 'LESS' | 'EQUAL' | 'CONCURRENT' {
    // Vector clock partial ordering evaluation
    let hasGreater = false;
    let hasLesser = false;
    const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);

    for (const key of allKeys) {
      const vA = a[key] ?? 0;
      const vB = b[key] ?? 0;
      if (vA > vB) hasGreater = true;
      if (vA < vB) hasLesser = true;
    }

    if (hasGreater && !hasLesser) return 'GREATER';
    if (!hasGreater && hasLesser) return 'LESS';
    if (!hasGreater && !hasLesser) return 'EQUAL';
    return 'CONCURRENT';
  }
}`,
    keyInsights: [
      {
        lineRange: 'L28-L43',
        title: 'Lamport & Vector Clock Conflict Resolution',
        explanation: 'Mathematically resolves split-brain edits between disconnected mobile devices without requiring locks or centralized coordinator servers.',
      },
      {
        lineRange: 'L48-L55',
        title: 'Direct C++ SQLite JSI Call',
        explanation: 'Bypasses the asynchronous JavaScript bridge, writing directly to the memory-mapped SQLite database in 0.35ms.',
      },
    ],
  },
];
