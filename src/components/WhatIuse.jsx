import React from "react";
import { motion } from "framer-motion";

const WhatIuse = () => {
  const language = [
    { title: "REACT", icon: "/images/react.png" },
    { title: "JS", icon: "/images/js.png" },
    { title: "HTML", icon: "/images/html-5.png" },
    { title: "CSS", icon: "/images/css-3.png" }
  ];

  return (
    <section
      id="whatIuse"
      className="scroll-mt-24 py-20 bg-black overflow-hidden"
    >
      {/* Heading */}
      <div className="border-[3px] border-white px-10 py-3 bg-black mb-16 w-fit mx-auto">
        <h2 className="text-xl font-bold uppercase tracking-[0.5em] text-white">
          What I Use
        </h2>
      </div>

      {/* Horizontal Moving Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear"
          }}
        >
          {/* Duplicate array for smooth infinite effect */}
          {[...language, ...language].map((tech, index) => (
            <div key={index} className="flex flex-col items-center min-w-37.5">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <img
                  src={tech.icon}
                  alt={tech.title}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>

              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500">
                {tech.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIuse;