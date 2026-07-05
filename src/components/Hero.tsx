import React from 'react';
import { ArrowRight, ThermometerSun, Droplets, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="hero"
      className="relative h-screen bg-brandBlack flex items-center overflow-hidden pt-20">

    <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-[#0d0d0d] brightness-40" >
      <style>{`
        @keyframes flowHot {
          0%   { stroke-dashoffset: 600; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes flowCold {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -600; }
        }
        @keyframes pulseGlowOrange {
          0%, 100% { opacity: 0.18; }
          50%       { opacity: 0.45; }
        }
        @keyframes pulseGlowBlue {
          0%, 100% { opacity: 0.12; }
          50%       { opacity: 0.32; }
        }
        @keyframes driftGradient {
          0%   { transform: translate(0%, 0%) rotate(0deg); }
          33%  { transform: translate(2%, -1.5%) rotate(0.8deg); }
          66%  { transform: translate(-1.5%, 1%) rotate(-0.5deg); }
          100% { transform: translate(0%, 0%) rotate(0deg); }
        }
        @keyframes nodePulse {
          0%, 100% { r: 3; opacity: 0.7; }
          50%       { r: 5; opacity: 1; }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 0.04; }
          90%  { opacity: 0.04; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .flow-hot {
          stroke-dasharray: 12 18;
          animation: flowHot 10s linear infinite;
        }
        .flow-hot-slow {
          stroke-dasharray: 8 24;
          animation: flowHot 16s linear infinite;
        }
        .flow-cold {
          stroke-dasharray: 10 20;
          animation: flowCold 13s linear infinite;
        }
        .flow-cold-fast {
          stroke-dasharray: 6 14;
          animation: flowCold 9s linear infinite;
        }
        .glow-orange {
          animation: pulseGlowOrange 9s ease-in-out infinite;
        }
        .glow-blue {
          animation: pulseGlowBlue 12s ease-in-out infinite;
        }
        .drift {
          animation: driftGradient 70s ease-in-out infinite;
          transform-origin: center;
        }
        .scanline {
          animation: scanline 32s linear infinite;
        }
      `}</style>

      {/* ── Base radial gradient canvas ───────────────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full drift"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Background gradients */}
          <radialGradient id="bg-warm" cx="25%" cy="65%" r="55%">
            <stop offset="0%" stopColor="#2a0f04" stopOpacity="1" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-cool" cx="78%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#051828" stopOpacity="1" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-mid" cx="52%" cy="48%" r="40%">
            <stop offset="0%" stopColor="#181818" stopOpacity="1" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0" />
          </radialGradient>

          {/* Hot pipe glow blur */}
          <filter id="glow-hot" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-hot-lg" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-cold" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-cold-lg" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="blur-xl">
            <feGaussianBlur stdDeviation="40" />
          </filter>

          {/* Grid pattern */}
          <pattern id="grid-fine" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.3" strokeOpacity="0.04" />
          </pattern>
          <pattern id="grid-coarse" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M160 0 L0 0 0 160" fill="none" stroke="#f15a24" strokeWidth="0.5" strokeOpacity="0.06" />
          </pattern>

          {/* Hot pipe gradient stroke */}
          <linearGradient id="hot-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c23800" />
            <stop offset="40%" stopColor="#f15a24" />
            <stop offset="100%" stopColor="#ff8c55" />
          </linearGradient>
          <linearGradient id="hot-grad-h2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="#d44000" />
          </linearGradient>
          <linearGradient id="hot-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f15a24" />
            <stop offset="100%" stopColor="#a83000" />
          </linearGradient>
          <linearGradient id="hot-grad-d" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c55" />
            <stop offset="100%" stopColor="#c23800" />
          </linearGradient>

          {/* Cold pipe gradient stroke */}
          <linearGradient id="cold-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a8c8e8" />
            <stop offset="50%" stopColor="#d0e8f8" />
            <stop offset="100%" stopColor="#7ab0d0" />
          </linearGradient>
          <linearGradient id="cold-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8dff0" />
            <stop offset="100%" stopColor="#6898b8" />
          </linearGradient>
          <linearGradient id="cold-grad-d" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5890b8" />
            <stop offset="100%" stopColor="#b8d8f0" />
          </linearGradient>

          {/* Ambient bloom blobs */}
          <radialGradient id="bloom-orange-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f15a24" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f15a24" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom-orange-2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8040" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff8040" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom-blue-1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#70b8e8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#70b8e8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom-blue-2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#40a0d0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#40a0d0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Background fill layers ─────────────────────────────────── */}
        <rect width="1920" height="1080" fill="#0d0d0d" />
        <rect width="1920" height="1080" fill="url(#bg-warm)" />
        <rect width="1920" height="1080" fill="url(#bg-cool)" />
        <rect width="1920" height="1080" fill="url(#bg-mid)" />

        {/* ── Grid overlays ─────────────────────────────────────────── */}
        <rect width="1920" height="1080" fill="url(#grid-fine)" />
        <rect width="1920" height="1080" fill="url(#grid-coarse)" />

        {/* ── Ambient glow blooms (far background) ─────────────────── */}
        <ellipse cx="320" cy="720" rx="380" ry="280" fill="url(#bloom-orange-1)" className="glow-orange" filter="url(#blur-xl)" />
        <ellipse cx="180" cy="500" rx="220" ry="180" fill="url(#bloom-orange-2)" className="glow-orange" filter="url(#blur-xl)" style={{ animationDelay: "1.4s" }} />
        <ellipse cx="1640" cy="260" rx="340" ry="260" fill="url(#bloom-blue-1)" className="glow-blue" filter="url(#blur-xl)" />
        <ellipse cx="1800" cy="180" rx="200" ry="160" fill="url(#bloom-blue-2)" className="glow-blue" filter="url(#blur-xl)" style={{ animationDelay: "2.8s" }} />
        <ellipse cx="960" cy="140" rx="180" ry="100" fill="url(#bloom-orange-2)" className="glow-orange" filter="url(#blur-xl)" style={{ animationDelay: "0.7s" }} />

        {/* ══════════════════════════════════════════════════════════════
            COLD PIPE NETWORK — blues, steel gray, white accents
        ══════════════════════════════════════════════════════════════ */}

        {/* ── Cold: Main horizontal spine top-right ─────────────────── */}
        {/* Pipe body (thick, muted) */}
        <path d="M 1920 180 L 1400 180 L 1400 340 L 800 340" stroke="#2a4560" strokeWidth="6" fill="none" strokeOpacity="0.5" />
        {/* Pipe highlight (thin, bright) */}
        <path d="M 1920 180 L 1400 180 L 1400 340 L 800 340" stroke="url(#cold-grad-h)" strokeWidth="1.5" fill="none" strokeOpacity="0.8" />
        {/* Flow animation overlay */}
        <path d="M 1920 180 L 1400 180 L 1400 340 L 800 340" stroke="#d0e8f8" strokeWidth="1.2" fill="none" className="flow-cold" />
        {/* Outer glow */}
        <path d="M 1920 180 L 1400 180 L 1400 340 L 800 340" stroke="#80c0e8" strokeWidth="8" fill="none" strokeOpacity="0.12" filter="url(#glow-cold)" className="glow-blue" />

        {/* ── Cold: Branch dropping from 1400,340 down ──────────────── */}
        <path d="M 1400 340 L 1400 580 L 1600 580 L 1600 780 L 1920 780" stroke="#2a4560" strokeWidth="5" fill="none" strokeOpacity="0.45" />
        <path d="M 1400 340 L 1400 580 L 1600 580 L 1600 780 L 1920 780" stroke="url(#cold-grad-v)" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path d="M 1400 340 L 1400 580 L 1600 580 L 1600 780 L 1920 780" stroke="#c0d8f0" strokeWidth="1" fill="none" className="flow-cold-fast" style={{ animationDelay: "1s" }} />

        {/* ── Cold: Top diagonal pipe upper-left ────────────────────── */}
        <path d="M 0 120 L 280 120 L 280 0" stroke="#224055" strokeWidth="4" fill="none" strokeOpacity="0.5" />
        <path d="M 0 120 L 280 120 L 280 0" stroke="url(#cold-grad-h)" strokeWidth="1.5" fill="none" strokeOpacity="0.65" />
        <path d="M 0 120 L 280 120 L 280 0" stroke="#b8d8f0" strokeWidth="1" fill="none" className="flow-cold" style={{ animationDelay: "2s" }} />

        {/* ── Cold: Diagonal upper-right ────────────────────────────── */}
        <path d="M 1200 0 L 1200 80 L 1700 80 L 1700 180" stroke="#2a4560" strokeWidth="3.5" fill="none" strokeOpacity="0.5" />
        <path d="M 1200 0 L 1200 80 L 1700 80 L 1700 180" stroke="url(#cold-grad-d)" strokeWidth="1.2" fill="none" strokeOpacity="0.75" />
        <path d="M 1200 0 L 1200 80 L 1700 80 L 1700 180" stroke="#d0eaf8" strokeWidth="0.8" fill="none" className="flow-cold-fast" style={{ animationDelay: "0.5s" }} />

        {/* ── Cold: Mid-right vertical riser ────────────────────────── */}
        <path d="M 1750 180 L 1750 580" stroke="#263850" strokeWidth="5" fill="none" strokeOpacity="0.4" />
        <path d="M 1750 180 L 1750 580" stroke="url(#cold-grad-v)" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
        <path d="M 1750 180 L 1750 580" stroke="#c8e0f4" strokeWidth="1" fill="none" className="flow-cold" style={{ animationDelay: "1.6s" }} />

        {/* ── Cold: Far-left horizontal run ─────────────────────────── */}
        <path d="M 0 460 L 160 460 L 160 580 L 0 580" stroke="#1e3448" strokeWidth="4" fill="none" strokeOpacity="0.45" />
        <path d="M 0 460 L 160 460 L 160 580 L 0 580" stroke="url(#cold-grad-h)" strokeWidth="1.2" fill="none" strokeOpacity="0.6" />

        {/* ── Cold: Thin accent lines (circuit traces) ──────────────── */}
        <line x1="800" y1="340" x2="800" y2="500" stroke="#4888b0" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="800" y1="500" x2="560" y2="500" stroke="#4888b0" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="560" y1="500" x2="560" y2="680" stroke="#4888b0" strokeWidth="1" strokeOpacity="0.35" />
        <line x1="1600" y1="580" x2="1600" y2="480" stroke="#5090b8" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="1480" y1="480" x2="1600" y2="480" stroke="#5090b8" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* ══════════════════════════════════════════════════════════════
            HOT PIPE NETWORK — #f15a24 orange, warm reds, soft amber
        ══════════════════════════════════════════════════════════════ */}

        {/* ── Hot: Main horizontal spine left-bottom ────────────────── */}
        <path d="M 0 680 L 560 680 L 560 540 L 880 540 L 880 760 L 640 760 L 640 1080" stroke="#5a1a00" strokeWidth="7" fill="none" strokeOpacity="0.55" />
        <path d="M 0 680 L 560 680 L 560 540 L 880 540 L 880 760 L 640 760 L 640 1080" stroke="url(#hot-grad-h)" strokeWidth="2" fill="none" strokeOpacity="0.9" />
        <path d="M 0 680 L 560 680 L 560 540 L 880 540 L 880 760 L 640 760 L 640 1080" stroke="#ff9060" strokeWidth="1.2" fill="none" className="flow-hot" />
        <path d="M 0 680 L 560 680 L 560 540 L 880 540 L 880 760 L 640 760 L 640 1080" stroke="#f15a24" strokeWidth="10" fill="none" strokeOpacity="0.1" filter="url(#glow-hot)" className="glow-orange" />

        {/* ── Hot: Left vertical riser ──────────────────────────────── */}
        <path d="M 200 1080 L 200 760 L 360 760 L 360 540" stroke="#5a1a00" strokeWidth="6" fill="none" strokeOpacity="0.5" />
        <path d="M 200 1080 L 200 760 L 360 760 L 360 540" stroke="url(#hot-grad-v)" strokeWidth="2" fill="none" strokeOpacity="0.85" />
        <path d="M 200 1080 L 200 760 L 360 760 L 360 540" stroke="#ffaa70" strokeWidth="1" fill="none" className="flow-hot-slow" style={{ animationDelay: "0.8s" }} />
        <path d="M 200 1080 L 200 760 L 360 760 L 360 540" stroke="#f15a24" strokeWidth="12" fill="none" strokeOpacity="0.08" filter="url(#glow-hot-lg)" className="glow-orange" style={{ animationDelay: "1.2s" }} />

        {/* ── Hot: Top-left diagonal entry ──────────────────────────── */}
        <path d="M 0 320 L 360 320 L 360 540" stroke="#4a1500" strokeWidth="5" fill="none" strokeOpacity="0.5" />
        <path d="M 0 320 L 360 320 L 360 540" stroke="url(#hot-grad-h2)" strokeWidth="1.8" fill="none" strokeOpacity="0.85" />
        <path d="M 0 320 L 360 320 L 360 540" stroke="#ff8055" strokeWidth="1" fill="none" className="flow-hot" style={{ animationDelay: "1.5s" }} />

        {/* ── Hot: Mid-screen diagonal branch ───────────────────────── */}
        <path d="M 880 540 L 1080 540 L 1080 380 L 1200 380 L 1200 180 L 1000 180 L 1000 0" stroke="#4a1200" strokeWidth="5" fill="none" strokeOpacity="0.5" />
        <path d="M 880 540 L 1080 540 L 1080 380 L 1200 380 L 1200 180 L 1000 180 L 1000 0" stroke="url(#hot-grad-d)" strokeWidth="1.8" fill="none" strokeOpacity="0.85" />
        <path d="M 880 540 L 1080 540 L 1080 380 L 1200 380 L 1200 180 L 1000 180 L 1000 0" stroke="#ff9060" strokeWidth="1" fill="none" className="flow-hot" style={{ animationDelay: "0.3s" }} />
        <path d="M 880 540 L 1080 540 L 1080 380 L 1200 380 L 1200 180" stroke="#f15a24" strokeWidth="14" fill="none" strokeOpacity="0.07" filter="url(#glow-hot-lg)" className="glow-orange" style={{ animationDelay: "2s" }} />

        {/* ── Hot: Lower-right diagonal exit ────────────────────────── */}
        <path d="M 880 760 L 1080 760 L 1080 920 L 1400 920 L 1400 1080" stroke="#4a1500" strokeWidth="5" fill="none" strokeOpacity="0.45" />
        <path d="M 880 760 L 1080 760 L 1080 920 L 1400 920 L 1400 1080" stroke="url(#hot-grad-h)" strokeWidth="1.8" fill="none" strokeOpacity="0.8" />
        <path d="M 880 760 L 1080 760 L 1080 920 L 1400 920 L 1400 1080" stroke="#ffb080" strokeWidth="1" fill="none" className="flow-hot-slow" style={{ animationDelay: "2.2s" }} />

        {/* ── Hot: Center bloom at main junction ────────────────────── */}
        <circle cx="880" cy="540" r="60" fill="#f15a24" fillOpacity="0.04" filter="url(#blur-xl)" className="glow-orange" />
        <circle cx="560" cy="540" r="40" fill="#f15a24" fillOpacity="0.05" filter="url(#blur-xl)" className="glow-orange" style={{ animationDelay: "1s" }} />

        {/* ── Hot: Thin circuit trace accents ───────────────────────── */}
        <line x1="1000" y1="180" x2="860" y2="180" stroke="#c04000" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="860" y1="180" x2="860" y2="340" stroke="#c04000" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="860" y1="340" x2="800" y2="340" stroke="#c04000" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="1080" y1="760" x2="1080" y2="680" stroke="#c04000" strokeWidth="0.8" strokeOpacity="0.35" />
        <line x1="1080" y1="680" x2="1200" y2="680" stroke="#c04000" strokeWidth="0.8" strokeOpacity="0.35" />

        {/* ══════════════════════════════════════════════════════════════
            JUNCTION NODES
        ══════════════════════════════════════════════════════════════ */}

        {/* Hot junctions */}
        {[
          [560, 680], [560, 540], [880, 540], [880, 760], [640, 760],
          [360, 760], [360, 540], [200, 760], [1080, 540], [1080, 380],
          [1200, 380], [1200, 180], [1000, 180], [1080, 760], [1080, 920],
          [1400, 920], [0, 680],
        ].map(([cx, cy], i) => (
          <g key={`hj-${i}`}>
            <circle cx={cx} cy={cy} r="5" fill="#f15a24" fillOpacity="0.15" />
            <circle cx={cx} cy={cy} r="3" fill="none" stroke="#f15a24" strokeWidth="1" strokeOpacity="0.7" />
            <circle cx={cx} cy={cy} r="1.5" fill="#ff9060" fillOpacity="0.9" />
          </g>
        ))}

        {/* Cold junctions */}
        {[
          [1400, 180], [1400, 340], [1400, 580], [1600, 580], [1600, 780],
          [1750, 180], [1750, 580], [800, 340], [280, 120], [1700, 180],
          [1700, 80], [1200, 80], [160, 460], [160, 580],
        ].map(([cx, cy], i) => (
          <g key={`cj-${i}`}>
            <circle cx={cx} cy={cy} r="4.5" fill="#70b8e8" fillOpacity="0.12" />
            <circle cx={cx} cy={cy} r="2.8" fill="none" stroke="#90d0f0" strokeWidth="1" strokeOpacity="0.65" />
            <circle cx={cx} cy={cy} r="1.2" fill="#c8eaf8" fillOpacity="0.9" />
          </g>
        ))}

        {/* ══════════════════════════════════════════════════════════════
            PIPE END CAPS  (filled circles at terminations)
        ══════════════════════════════════════════════════════════════ */}
        {/* Hot end caps */}
        {[[0, 320], [640, 1080], [200, 1080], [1000, 0], [1400, 1080]].map(([cx, cy], i) => (
          <circle key={`hec-${i}`} cx={cx} cy={cy} r="4" fill="#f15a24" fillOpacity="0.6" stroke="#ff8040" strokeWidth="1" />
        ))}
        {/* Cold end caps */}
        {[[1920, 180], [1920, 780], [1920, 580], [0, 120], [1200, 0], [0, 460], [0, 580]].map(([cx, cy], i) => (
          <circle key={`cec-${i}`} cx={cx} cy={cy} r="3.5" fill="#90c8e8" fillOpacity="0.6" stroke="#b0d8f4" strokeWidth="1" />
        ))}

        {/* ══════════════════════════════════════════════════════════════
            SECONDARY FINE CIRCUIT TRACES (decorative overlay)
        ══════════════════════════════════════════════════════════════ */}
        <g strokeOpacity="0.18" fill="none">
          <polyline points="400,0 400,100 520,100 520,180 760,180 760,340" stroke="#f15a24" strokeWidth="0.7" />
          <polyline points="920,1080 920,920 1020,920 1020,760 1280,760 1280,680 1480,680 1480,580 1600,580" stroke="#f15a24" strokeWidth="0.7" />
          <polyline points="0,880 80,880 80,960 240,960 240,1080" stroke="#f15a24" strokeWidth="0.7" />
          <polyline points="0,220 120,220 120,120 280,120" stroke="#90c8e8" strokeWidth="0.7" />
          <polyline points="1920,440 1840,440 1840,340 1700,340 1700,180" stroke="#90c8e8" strokeWidth="0.7" />
          <polyline points="720,0 720,80 840,80 840,180 1000,180" stroke="#90c8e8" strokeWidth="0.7" />
          <polyline points="1920,680 1860,680 1860,780 1600,780" stroke="#90c8e8" strokeWidth="0.7" />
          <polyline points="560,1080 560,960 400,960 400,880 160,880 160,780 0,780" stroke="#70a8c8" strokeWidth="0.7" />
        </g>

        {/* Tiny cross-marks at circuit intersections */}
        {[
          [760, 180], [520, 180], [520, 100], [840, 80], [840, 180],
          [1020, 920], [1280, 760], [1480, 680], [1840, 340], [1840, 440],
        ].map(([cx, cy], i) => (
          <g key={`cross-${i}`} stroke="#aaaaaa" strokeWidth="0.6" strokeOpacity="0.25">
            <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} />
            <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} />
          </g>
        ))}

        {/* ══════════════════════════════════════════════════════════════
            VIGNETTE & TOP FADE
        ══════════════════════════════════════════════════════════════ */}
        <defs>
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="40%" stopColor="#0d0d0d" stopOpacity="0" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0.65" />
          </radialGradient>
          <linearGradient id="top-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d0d0d" stopOpacity="0.5" />
            <stop offset="18%" stopColor="#0d0d0d" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bottom-fade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="80%" stopColor="#0d0d0d" stopOpacity="0" />
            <stop offset="100%" stopColor="#0d0d0d" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#vignette)" />
        <rect width="1920" height="1080" fill="url(#top-fade)" />
        <rect width="1920" height="1080" fill="url(#bottom-fade)" />
      </svg>

      {/* ── Scanline sweep (very subtle) ─────────────────────────────── */}
      <div
        className="scanline absolute inset-x-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(241,90,36,0.04), transparent)",
          top: 0,
        }}
      />
    </div>
      
      {/* Dynamic Layered Gradient Background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-brandBlack to-brandBlack opacity-80"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div> */}

      {/* Technical Grid Overlay */}
      {/* <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-15 mix-blend-overlay"></div> */}

      {/* Diagonal Technical Lines */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -rotate-12"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent transform -rotate-12"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-20">
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="lg:col-span-7">
          
          <div className="flex gap-3 mb-8">
            <span className="flex items-center gap-1.5 text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm">
              <Droplets size={16} /> Plumbing
            </span>
            <span className="flex items-center gap-1.5 text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm">
              <ThermometerSun size={16} /> Heating
            </span>
            <span className="flex items-center gap-1.5 text-primary text-sm font-bold uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm">
              <Wind size={16} /> Cooling
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-display font-bold text-brandWhite leading-[1.05] mb-6 drop-shadow-lg">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-yellow-500">
              Perfect Climate.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-brandWhite/80 mb-10 max-w-xl leading-relaxed font-light">
            Werker is a family-owned technical firm specializing in advanced
            plumbing, heating, and cooling systems. We design and install robust
            solutions that stand the test of time, without compromising your
            home's integrity.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="bg-primary text-brandWhite px-8 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-white hover:text-brandBlack transition-all group shadow-[0_0_20px_rgba(241,90,36,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              
              Request a Consultation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform" />
              
            </a>
            <a
              href="#projects"
              className="bg-brandBlack/50 backdrop-blur-md text-brandWhite border border-white/20 px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all">
              
              View Our Work
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="hidden lg:flex lg:col-span-5 relative h-full items-center justify-center">
          
          {/* Large Bold Icons Composition */}
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Central glowing core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
            </div>

            {/* Heating Icon */}
            <motion.div
              initial={{
                y: 20,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                delay: 0.4,
                duration: 0.8
              }}
              className="absolute top-0 right-10 bg-gradient-to-br from-brandBlack to-gray-900 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl z-30 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              
              <ThermometerSun
                size={80}
                className="text-primary mb-4"
                strokeWidth={1.5} />
              
              <div className="text-brandWhite font-display font-bold text-xl tracking-wider">
                HEATING
              </div>
              <div className="text-brandWhite/50 text-xs uppercase tracking-widest mt-1">
                Thermal Control
              </div>
            </motion.div>

            {/* Cooling Icon */}
            <motion.div
              initial={{
                x: 20,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: 0.6,
                duration: 0.8
              }}
              className="absolute bottom-10 right-0 bg-gradient-to-br from-brandBlack to-gray-900 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              
              <Wind
                size={80}
                className="text-blue-400 mb-4"
                strokeWidth={1.5} />
              
              <div className="text-brandWhite font-display font-bold text-xl tracking-wider">
                COOLING
              </div>
              <div className="text-brandWhite/50 text-xs uppercase tracking-widest mt-1">
                Air Dynamics
              </div>
            </motion.div>

            {/* Plumbing Icon */}
            <motion.div
              initial={{
                x: -20,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: 0.8,
                duration: 0.8
              }}
              className="absolute top-1/3 -left-10 bg-gradient-to-br from-brandBlack to-gray-900 p-8 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl z-40 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              
              <Droplets
                size={80}
                className="text-cyan-400 mb-4"
                strokeWidth={1.5} />
              
              <div className="text-brandWhite font-display font-bold text-xl tracking-wider">
                PLUMBING
              </div>
              <div className="text-brandWhite/50 text-xs uppercase tracking-widest mt-1">
                Fluid Systems
              </div>
            </motion.div>

            {/* Connecting technical lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30"
              viewBox="0 0 500 500">
              
              <path
                d="M 150 250 L 350 150"
                stroke="url(#orange-grad)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none" />
              
              <path
                d="M 150 250 L 350 350"
                stroke="url(#orange-grad)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none" />
              
              <path
                d="M 350 150 L 350 350"
                stroke="url(#orange-grad)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none" />
              
              <defs>
                <linearGradient
                  id="orange-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%">
                  
                  <stop offset="0%" stopColor="#f15a24" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>);

}