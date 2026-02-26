import React from "react";
import { motion } from "framer-motion";

import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { id: 1, icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/muhammed-sinan-725b39324?utm_source=share_via&utm_content=profile&utm_medium=member_ios", color: "hover:text-blue-500" },
    { id: 2, icon: <FaInstagram />, url: "https://www.instagram.com/siiinenn_?igsh=dm1pYzR0cDg2dHZx", color: "hover:text-pink-500" },
    { id: 3, icon: <FaWhatsapp />, url: " https://wa.me/919447324916", color: "hover:text-green-500" },
  ];

  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center bg-black text-white px-6 sm:px-10 md:px-24 py-20 gap-16 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center md:text-left flex-1"
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I'm <span className="text-green-400">SINAN</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-green-400 mb-6 mx-auto md:mx-0"
        />

        <motion.p
          className="text-sm sm:text-lg md:text-xl text-gray-400 font-light tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Front-end Developer <span className="text-green-400 mx-2">|</span> UI Designer
        </motion.p>

      </motion.div>

      <motion.div
        className="relative flex-1 flex justify-center items-center"
        style={{ perspective: 1200 }} 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1] 
          }}

          transition={{ duration: 5, repeat: Infinity }}
          className="absolute w-[80%] h-[80%] bg-green-500/20 blur-[100px] rounded-full"
        />

        <motion.div
          whileHover={{ 
            rotateY: 15, 
            rotateX: -10,
            transition: { duration: 0.3 } 
          }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-4 border border-green-400/20 rounded-2xl group-hover:border-green-400/50 transition-colors duration-500" />
          
          <img
            src="/images/img45.jpeg" 
            alt="Sinan"
            className="
              w-64 h-80
              sm:w-72 sm:h-96
              md:w-80 md:h-112.5
              lg:w-96 lg:h-125
              object-cover
              rounded-2xl
              border-2 border-white/10
              grayscale group-hover:grayscale-0
              transition-all duration-700 ease-in-out
              shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            "
          />
          <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
        
      </motion.div>
       <div className="flex justify-center md:justify-start gap-6 mt-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              className={`text-2xl text-gray-400 transition-colors duration-300 ${link.color}`}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
    </section>
  );
};

export default Hero;