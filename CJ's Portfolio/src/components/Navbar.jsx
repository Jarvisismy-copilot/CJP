﻿import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 1g:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          CJ   

          {/*Edit ^^*/}
        </div>
        <div className="space-x-14">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#resume" className="hover:text-gray-400">
            Resume
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transitiion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> Connect Me </button>
      {/*Edit ^^*/}
      </div>
    </nav>
  );
};

export default Navbar
