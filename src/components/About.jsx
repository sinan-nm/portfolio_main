

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 bg-white flex flex-col items-center justify-center text-center px-10 md:px-24"
    >
     <div className="w-fit border-[3px] border-black px-10 py-3 bg-white mb-10">
         <h2 className="text-xl font-bold uppercase tracking-[0.5em] text-black">
           About
         </h2>
       </div>

       <div className="max-w-3xl mx-auto">
         <p className="text-lg md:text-2xl text-gray-800 leading-relaxed font-medium">
           Hi, I’m a passionate{" "}
          <span className="text-green-500 font-bold">Frontend Developer,</span>{" "}
          <span className="text-green-500 font-bold">UI Designer,</span> &{" "}
           <span className="text-green-500 font-bold">Video Editor</span> who
           loes turning ideas into creative digital experiences.
         </p>
         <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
           I build responsive, user-friendly websites and design clean interfaces that focus on both beauty and usability.
          Alongside coding, I enjoy bringing stories to life through professional video editing.
        </p>
         
      </div>
    </section>
  );
};

export default About;
