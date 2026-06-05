import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WhatIuse from "./components/WhatIuse";
import Contact from "./components/Contact";

/* ── Particle background ─────────────────────────────────────── */
const Particles = () => {
  const canvasRef = useRef();
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = (c.width = window.innerWidth), H = (c.height = window.innerHeight);
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5, o: Math.random() * 0.4 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(181,242,61,${p.o})`; ctx.fill();
      });
      pts.forEach((a, i) =>
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(181,242,61,${0.06 * (1 - d / 120)})`; ctx.stroke();
          }
        })
      );
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.6 }}
    />
  );
};

/* ── Footer ──────────────────────────────────────────────────── */
const Footer = () => (
  <footer style={{
    borderTop: "1px solid #111", padding: "32px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    maxWidth: 1100, margin: "0 auto",
  }}>
    <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 18, letterSpacing: 4, color: "#b5f23d" }}>
      SINAN
    </span>
    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#333", letterSpacing: 2 }}>
      © 2025 — ALL RIGHTS RESERVED
    </span>
  </footer>
);

/* ── Global Styles ───────────────────────────────────────────── */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --black: #080808;
      --white: #f0ede8;
      --green: #b5f23d;
      --gray:  #2a2a2a;
    }

    html { scroll-behavior: smooth; background: #080808; }
    body { font-family: 'Syne', sans-serif; background: #080808; color: #f0ede8; overflow-x: hidden; }

    ::selection { background: #b5f23d; color: #080808; }
    ::-webkit-scrollbar { width: 3px; }
    ::-webkit-scrollbar-track { background: #080808; }
    ::-webkit-scrollbar-thumb { background: #b5f23d; }

    .bebas { font-family: 'Bebas Neue', sans-serif; }
    .mono  { font-family: 'JetBrains Mono', monospace; }

    /* Noise overlay */
    .noise::after {
      content: '';
      position: fixed; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none; z-index: 9999; opacity: 0.4;
    }

    /* Grid background */
    .grid-bg {
      background-image:
        linear-gradient(rgba(181,242,61,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(181,242,61,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    .glow { text-shadow: 0 0 40px rgba(181,242,61,0.4); }

    /* Section tag */
    .section-tag {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'JetBrains Mono', monospace; font-size: 11px;
      letter-spacing: 0.15em; color: #b5f23d; text-transform: uppercase; margin-bottom: 16px;
    }
    .section-tag::before { content: ''; width: 24px; height: 1px; background: #b5f23d; }

    /* Scan line */
    .scan-line {
      position: absolute; left: 0; width: 100%; height: 2px;
      background: linear-gradient(90deg, transparent, #b5f23d, transparent);
      animation: scan 3s linear infinite; opacity: 0.3; pointer-events: none;
    }

    /* Float animation */
    .float { animation: float 4s ease-in-out infinite; }

    /* Keyframes */
    @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
    @keyframes scan    { 0%{top:-10%} 100%{top:110%} }
    @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  `}</style>
);

/* ── Main App ────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <GlobalStyles />
      <div className="noise" style={{ position: "relative", minHeight: "100vh" }}>
        <Particles />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <WhatIuse />
        <Contact />
        <Footer />
      </div>
    </>
  );
}