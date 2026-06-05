import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["home", "about", "skills", "whatIuse", "contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: scrolled ? "14px 32px" : "22px 32px",
          background: scrolled ? "rgba(8,8,8,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
          transition: "all 0.4s ease",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 4, color: "#b5f23d" }}>
          SINAN
        </span>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", alignItems: "center" }} className="nav-desktop">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="nav-link">
                {l === "whatIuse" ? "Stack" : l}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "#f0ede8", cursor: "pointer", display: "flex" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", inset: 0, zIndex: 99,
              background: "rgba(8,8,8,0.97)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 40,
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l} href={`#${l}`} onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{
                  fontFamily: "'Bebas Neue',sans-serif", fontSize: 48,
                  letterSpacing: 4, color: "#f0ede8", textDecoration: "none",
                }}
              >
                {l === "whatIuse" ? "STACK" : l.toUpperCase()}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          position: relative; color: #888; font-size: 13px;
          font-weight: 600; letter-spacing: 0.1em; text-decoration: none;
          text-transform: uppercase; transition: color 0.3s; font-family: 'Syne', sans-serif;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1px; background: #b5f23d; transition: width 0.3s ease;
        }
        .nav-link:hover { color: #f0ede8; }
        .nav-link:hover::after { width: 100%; }
        .nav-desktop { display: flex; }
        @media(max-width: 768px) { .nav-desktop { display: none !important; } }
      `}</style>
    </>
  );
};

export default Navbar;