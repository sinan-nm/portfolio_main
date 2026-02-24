import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-green-400">
          SINAN
        </h1>

   
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="#home" className="hover:text-green-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-400">About Me</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-green-400">Skills</a>
          </li>
          <li>
            <a href="#whatIuse" className="hover:text-green-400">What I Use</a>
          </li>

          <a href="#contact">
            <button className="border rounded-full text-black px-6 py-2 bg-white hover:bg-green-400 transition">
              Contact Me
            </button>
          </a>
        </ul>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6 flex flex-col space-y-6 text-center">
          <a href="#home" onClick={handleClick} className="hover:text-green-400">Home</a>
          <a href="#about" onClick={handleClick} className="hover:text-green-400">About Me</a>
          <a href="#skills" onClick={handleClick} className="hover:text-green-400">Skills</a>
          <a href="#whatIuse" onClick={handleClick} className="hover:text-green-400">What I Use</a>
<a href="#contact">
  <button className="px-6 py-2 bg-white rounded-lg text-black">
    Contact
  </button>
</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
