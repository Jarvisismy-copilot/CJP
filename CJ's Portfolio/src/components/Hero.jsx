import React from "react";
import HeroImage from "..//assets/Image.2.Chels.png";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img src={HeroImage} alt="" 
      className= 'mx-auto mb-12 w-48 h-48 rounded-full object-cover transform transition-transform duration -300 hover:scale-105'/>
      <h1 className="text-4xl font-bold">
        I'm {" "}
        <span className="bg-clip-text bg-gradient-to-r from green-400 to-blue-500">Chelsea Jarvis</span>
        ,Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
    I specialize in ... let's see... 
      </p>
      <div className="mt-8 space-x-4">
      <button className='bg-gradient-to-r from-blue-400 to-green-300 text-white hidden md:inline transform transitiion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> Contact Me </button>
      <button className='bg-gradient-to-r from-blue-300 to-green-400 text-white hidden md:inline transform transitiion-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>

      </div>
    </div>
  );
};

export default Hero;
