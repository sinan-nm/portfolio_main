import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const info = [
    { label: "Location", value: "Malappuram, Kerala" },
    { label: "Experience", value: "2+ Years" },
    { label: "Focus", value: "Frontend & UI" },
    { label: "Status", value: "Open to work ✦" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "120px 32px", maxWidth: 1100, margin: "0 auto", scrollMarginTop: 80 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-tag">01 — About</div>

        <div className="about-grid">
          {/* Left text */}
          <div>
            <h2
              className="bebas"
              style={{ fontSize: "clamp(48px,6vw,80px)", lineHeight: 0.95, marginBottom: 32 }}
            >
              CRAFTING<br />
              <span style={{ color: "#b5f23d" }}>DIGITAL</span><br />
              EXPERIENCES
            </h2>

            <div style={{ width: 60, height: 2, background: "#b5f23d", marginBottom: 32 }} />

            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
              Hi, I'm a passionate{" "}
              <span style={{ color: "#f0ede8", fontWeight: 600 }}>Frontend Developer</span>,{" "}
              <span style={{ color: "#f0ede8", fontWeight: 600 }}>UI Designer</span>, &{" "}
              <span style={{ color: "#f0ede8", fontWeight: 600 }}>Video Editor</span>{" "}
              who loves turning ideas into creative digital experiences.
            </p>

            <p style={{ color: "#555", fontSize: 14, lineHeight: 1.9 }}>
              I build responsive, user-friendly websites and design clean interfaces that focus on
              both beauty and usability. Alongside coding, I enjoy bringing stories to life through
              professional video editing.
            </p>
          </div>

          {/* Right cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "#0d0d0d", border: "1px solid #1a1a1a",
                  borderRadius: 12, padding: "20px 18px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="mono"
                  style={{ fontSize: 10, color: "#b5f23d", letterSpacing: 2,
                    marginBottom: 6, textTransform: "uppercase" }}
                >{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#f0ede8" }}>{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        @media(max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;