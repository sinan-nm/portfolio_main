import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Skills = () => {
  const skillData = [
    {
      title: "WEB DESIGNER",
      desc: "Web designer specializing in modern layouts, responsive design, and interactive user interfaces that bring ideas to life.",
      icon: "/images/10493636 1.png",
    },
    {
      title: "UI/UX",
      desc: "UI/UX designer specializing in user-centered design, wireframing, and modern UI systems that turn ideas into smooth digital experiences.",
      icon: "/images/14654068 1.png",
    },
    {
      title: "MOBILE APP",
      desc: "I design and develop mobile applications that are fast, user-friendly, and focused on delivering smooth, reliable user experiences.",
      icon: "/images/8083276 1.png",
    },
    {
      title: "EDITING",
      desc: "Professional video editing using CapCut and Premiere Pro.",
      icon: "/images/16112453 1@2x.png",
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 py-20 bg-black text-white px-6 md:px-24"
    >
    
      <div className="border-[3px] border-white px-10 py-3 bg-black mb-16 w-fit mx-auto">
        <h2 className="text-xl font-bold uppercase tracking-[0.5em]">
          Skills
        </h2>
      </div>

      <motion.div
        className="flex flex-col gap-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}  
            whileTap={{ scale: 0.97 }}     
            className="bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-green-500/20 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              
           
              <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

            
              <div>
                <h3 className="text-lg font-extrabold uppercase tracking-wider mb-3 text-green-400">
                  {skill.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;