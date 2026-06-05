import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      title: "WEB DESIGNER",
      desc: "Specializing in modern layouts, responsive design, and interactive user interfaces that bring ideas to life.",
      icon: "/images/10493636 1.png", n: "01",
    },
    {
      title: "UI / UX",
      desc: "User-centered design, wireframing, and modern UI systems that turn ideas into smooth digital experiences.",
      icon: "/images/14654068 1.png", n: "02",
    },
    {
      title: "MOBILE APP",
      desc: "Design and develop mobile applications that are fast, user-friendly, and focused on smooth user experiences.",
      icon: "/images/8083276 1.png", n: "03",
    },
    {
      title: "VIDEO EDITING",
      desc: "Professional video editing using CapCut and Premiere Pro, bringing stories to life with precision.",
      icon: "/images/16112453 1@2x.png", n: "04",
    },
  ];

  return (
    <section
      id="skills"
      style={{ padding: "120px 32px", scrollMarginTop: 80 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">02 — Skills</div>
          <h2
            className="bebas"
            style={{ fontSize: "clamp(48px,6vw,80px)", marginBottom: 64 }}
          >
            WHAT I<br /><span style={{ color: "#b5f23d" }}>DO BEST</span>
          </h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="skill-card"
              style={{
                background: "#0a0a0a", border: "1px solid #1a1a1a",
                borderRadius: 16, padding: "32px 28px",
                position: "relative", overflow: "hidden", cursor: "default",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(181,242,61,0.3)"}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
            >
              {/* Background number */}
              <div style={{
                position: "absolute", top: 20, right: 24,
                fontFamily: "'Bebas Neue',sans-serif", fontSize: 64,
                color: "#111", lineHeight: 1, pointerEvents: "none",
              }}>{s.n}</div>

              {/* Icon */}
              <div style={{
                width: 52, height: 52, background: "rgba(181,242,61,0.08)",
                borderRadius: 14, display: "flex", alignItems: "center",
                justifyContent: "center", marginBottom: 20,
                border: "1px solid rgba(181,242,61,0.15)",
                transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)",
              }} className="skill-icon">
                <img src={s.icon} alt={s.title} style={{ width: 28, height: 28, objectFit: "contain" }} />
              </div>

              <h3 className="bebas" style={{ fontSize: 24, letterSpacing: 2, color: "#b5f23d", marginBottom: 12 }}>
                {s.title}
              </h3>
              <p style={{ color: "#555", fontSize: 13, lineHeight: 1.8 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
        .skill-card:hover .skill-icon { transform: scale(1.15) rotate(5deg); }
        @media(max-width:600px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default Skills;