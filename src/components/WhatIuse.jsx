import React from "react";
import { motion } from "framer-motion";

const WhatIuse = () => {
  const techs = [
    { title: "REACT", icon: "/images/react.png" },
    { title: "JS",    icon: "/images/js.png" },
    { title: "HTML",  icon: "/images/html-5.png" },
    { title: "CSS",   icon: "/images/css-3.png" },
  ];

  // Double the array for seamless loop
  const doubled = [...techs, ...techs, ...techs, ...techs];

  return (
    <section
      id="whatIuse"
      style={{ padding: "120px 0", scrollMarginTop: 80, overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", marginBottom: 64 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">03 — Stack</div>
          <h2 className="bebas" style={{ fontSize: "clamp(48px,6vw,80px)" }}>
            TOOLS &<br /><span style={{ color: "#b5f23d" }}>TECHNOLOGIES</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee forward */}
      <div style={{
        borderTop: "1px solid #111", borderBottom: "1px solid #111",
        padding: "32px 0", overflow: "hidden",
      }}>
        <div style={{ display: "flex", width: "max-content", animation: "marquee 20s linear infinite" }}>
          {doubled.map((t, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 20,
              padding: "0 40px", flexShrink: 0,
            }}>
              <div style={{
                width: 64, height: 64, background: "#0f0f0f",
                borderRadius: 16, border: "1px solid #1a1a1a",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <img src={t.icon} alt={t.title} style={{ width: 36, height: 36, objectFit: "contain" }} />
              </div>
              <span className="bebas" style={{ fontSize: 24, letterSpacing: 3, color: "#333" }}>{t.title}</span>
              <span style={{ color: "#222", fontSize: 20 }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee reverse */}
      <div style={{ overflow: "hidden", padding: "24px 0", borderBottom: "1px solid #111" }}>
        <div style={{
          display: "flex", width: "max-content",
          animation: "marquee 28s linear infinite reverse",
        }}>
          {doubled.map((t, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 16,
              padding: "0 32px", flexShrink: 0,
            }}>
              <span className="bebas" style={{ fontSize: 18, letterSpacing: 4, color: "#1d1d1d" }}>{t.title}</span>
              <span style={{ color: "#1a1a1a" }}>—</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIuse;