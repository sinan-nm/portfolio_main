import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const send = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_zhjuk0z", "template_h877fh3", formRef.current, "R5-aVT597HS4rjqrm")
      .then(() => { setSent(true); setLoading(false); formRef.current.reset(); })
      .catch(() => { alert("Failed to send ❌"); setLoading(false); });
  };

  const contacts = [
    { label: "Location", val: "Malappuram, Kerala 676562" },
    { label: "Phone",    val: "+91 9447324916" },
    { label: "Email",    val: "sinannm1212@gmail.com" },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "120px 32px", scrollMarginTop: 80 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-tag">04 — Contact</div>
          <h2 className="bebas" style={{ fontSize: "clamp(48px,6vw,80px)", marginBottom: 64 }}>
            LET'S<br /><span style={{ color: "#b5f23d" }}>WORK TOGETHER</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ color: "#666", fontSize: 15, lineHeight: 1.9, marginBottom: 48, maxWidth: 380 }}>
              Have a project in mind or a question? I'm always open to new ideas and collaborations.
            </p>

            {contacts.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  display: "flex", gap: 20, alignItems: "flex-start",
                  marginBottom: 28, paddingBottom: 28,
                  borderBottom: i < 2 ? "1px solid #111" : "none",
                }}
              >
                <div
                  className="mono"
                  style={{ fontSize: 10, letterSpacing: 2, color: "#b5f23d",
                    textTransform: "uppercase", paddingTop: 2, width: 70, flexShrink: 0 }}
                >{c.label}</div>
                <div style={{ fontSize: 14, color: "#f0ede8" }}>{c.val}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: "#0a0a0a", border: "1px solid #1a1a1a",
              borderRadius: 20, padding: 40,
            }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 0" }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
                <div className="bebas" style={{ fontSize: 32, color: "#b5f23d", marginBottom: 8 }}>
                  MESSAGE SENT!
                </div>
                <div style={{ color: "#666", fontSize: 14 }}>I'll get back to you soon.</div>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={send} className="contact-form">
                <input type="text"  name="from_name"  placeholder="Your Name"  required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your message..." rows={5} required />
                <motion.button
                  type="submit" disabled={loading}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  style={{
                    background: loading ? "#1a1a1a" : "#b5f23d",
                    color: loading ? "#444" : "#080808",
                    border: "none", padding: "16px 32px", borderRadius: 10,
                    fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 13,
                    letterSpacing: "0.15em", cursor: loading ? "not-allowed" : "pointer",
                    textTransform: "uppercase", transition: "all 0.3s",
                  }}
                >{loading ? "Sending..." : "Send Message →"}</motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
        }
        .contact-form { display: flex; flex-direction: column; gap: 28px; }
        .contact-form input, .contact-form textarea {
          background: transparent; border: none; border-bottom: 1px solid #333;
          color: #f0ede8; font-family: 'Syne',sans-serif; font-size: 14px;
          outline: none; padding: 12px 0; transition: border-color 0.3s; width: 100%;
        }
        .contact-form input:focus, .contact-form textarea:focus { border-bottom-color: #b5f23d; }
        .contact-form input::placeholder, .contact-form textarea::placeholder { color: #444; }
        .contact-form textarea { resize: none; }
        @media(max-width:768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;