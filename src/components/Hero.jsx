import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const [typed, setTyped] = useState("");
  const roles = ["Front-end Developer", "UI Designer", "Creative Coder"];
  const [ri, setRi] = useState(0);

  useEffect(() => {
    let i = 0, role = roles[ri], dir = 1, timeout;
    const type = () => {
      if (dir === 1) {
        i++; setTyped(role.slice(0, i));
        if (i === role.length) { dir = -1; timeout = setTimeout(type, 1800); return; }
      } else {
        i--; setTyped(role.slice(0, i));
        if (i === 0) { dir = 1; setRi((r) => (r + 1) % roles.length); }
      }
      timeout = setTimeout(type, dir === 1 ? 70 : 40);
    };
    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, [ri]);

  const socials = [
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/muhammed-sinan-725b39324" },
    { icon: <FaInstagram />,  url: "https://www.instagram.com/siiinenn_" },
    { icon: <FaWhatsapp />,   url: "https://wa.me/919447324916" },
  ];

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Scan line */}
      <div className="scan-line" />

      {/* Glow orb background */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(181,242,61,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 700, width: "100%", padding: "0 24px",
        position: "relative", zIndex: 1,
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      }}>

        {/* ── Circular Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", marginBottom: 32 }}
        >
          {/* Animated pulse rings */}
          {[1, 2].map((n) => (
            <motion.div key={n}
              animate={{ scale: [1, 1.2 + n * 0.1, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5 + n, repeat: Infinity, delay: n * 0.6 }}
              style={{
                position: "absolute",
                inset: -n * 14,
                borderRadius: "50%",
                border: "1px solid rgba(181,242,61,0.25)",
                pointerEvents: "none",
              }}
            />
          ))}

          {/* Green glowing ring border */}
          <div style={{
            width: 160, height: 160,
            borderRadius: "50%",
            padding: 3,
            background: "linear-gradient(135deg, #b5f23d, rgba(181,242,61,0.2), #b5f23d)",
            boxShadow: "0 0 40px rgba(181,242,61,0.25), 0 0 80px rgba(181,242,61,0.1)",
          }}>
            <img
              src="/images/my image.jpeg"
              alt="Sinan"
              className="float"
              style={{
                width: "100%", height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                background: "#111",
              }}
            />
          </div>

          {/* Online indicator dot */}
          <div style={{
            position: "absolute", bottom: 8, right: 8,
            width: 16, height: 16, borderRadius: "50%",
            background: "#b5f23d",
            border: "2px solid #080808",
            boxShadow: "0 0 10px rgba(181,242,61,0.8)",
          }} />
        </motion.div>

        {/* ── Name tag ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mono"
          style={{ fontSize: 13, color: "#666", marginBottom: 16, letterSpacing: 2 }}
        >
          Hi! I'm
        </motion.div>

        {/* ── Big Name ── */}
        <div style={{ overflow: "hidden", marginBottom: 4 }}>
          <motion.h1
            initial={{ y: "100%" }} animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bebas glow"
            style={{
              fontSize: "clamp(64px, 14vw, 120px)",
              lineHeight: 0.9, letterSpacing: 3,
              color: "#f0ede8",
            }}
          >
            SINAN
          </motion.h1>
        </div>

        {/* ── Typewriter role ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
          className="mono"
          style={{ fontSize: 15, color: "#888", marginBottom: 24, minHeight: 24 }}
        >
          <span style={{ color: "#b5f23d" }}>// </span>
          {typed}
          <span style={{ color: "#b5f23d", animation: "blink 1s step-end infinite" }}>_</span>
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{
            color: "#555", fontSize: 15, lineHeight: 1.8,
            maxWidth: 480, marginBottom: 36,
          }}
        >
          I build responsive, user-friendly websites and design clean interfaces
          that focus on both beauty and usability.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap", justifyContent: "center" }}
        >
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #b5f23d, #7aaa1f)",
                color: "#080808", border: "none",
                padding: "14px 36px", borderRadius: 50,
                fontFamily: "'Syne',sans-serif", fontWeight: 700,
                fontSize: 14, letterSpacing: "0.08em",
                cursor: "pointer", boxShadow: "0 8px 30px rgba(181,242,61,0.25)",
              }}
            >Get in touch →</motion.button>
          </a>
          <a href="#skills">
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                background: "transparent", color: "#f0ede8",
                border: "1px solid #333", padding: "14px 36px",
                borderRadius: 50, fontFamily: "'Syne',sans-serif",
                fontWeight: 600, fontSize: 14, letterSpacing: "0.08em",
                cursor: "pointer",
              }}
            >View Work</motion.button>
          </a>
        </motion.div>

        {/* ── Socials ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ display: "flex", gap: 14 }}
        >
          {socials.map((s, i) => (
            <motion.a
              key={i} href={s.url} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.15, y: -4 }} whileTap={{ scale: 0.95 }}
              style={{
                width: 42, height: 42, borderRadius: "50%",
                border: "1px solid #2a2a2a",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#555", textDecoration: "none", fontSize: 15,
                background: "#0f0f0f", transition: "all 0.3s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#b5f23d";
                e.currentTarget.style.color = "#b5f23d";
                e.currentTarget.style.background = "rgba(181,242,61,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#2a2a2a";
                e.currentTarget.style.color = "#555";
                e.currentTarget.style.background = "#0f0f0f";
              }}
            >{s.icon}</motion.a>
          ))}
        </motion.div>

        {/* ── Stat pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap", justifyContent: "center" }}
        >
          {[
            { n: "2+", label: "Years Exp" },
            { n: "15+", label: "Projects" },
            { n: "100%", label: "Passion" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "#0d0d0d", border: "1px solid #1a1a1a",
              borderRadius: 50, padding: "8px 20px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span className="bebas" style={{ fontSize: 18, color: "#b5f23d" }}>{s.n}</span>
              <span className="mono" style={{ fontSize: 10, color: "#555", letterSpacing: 1 }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;