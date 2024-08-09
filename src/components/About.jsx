import React from "react";
import AboutImage from "..//assets/Image.1.Chels.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 1g:px-24">
        <h2 className="text-4x1 font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              
              Add Bio...


            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-blue-400 h-2.5 rounded-full transform transitiion-transform duration-300 hover:scale-105 w-10/12">
              </div>

               <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-blue-400 h-2.5 rounded-full transform transitiion-transform duration-300 hover:scale-105 w-7/12">
                  </div>
                </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-300 to-blue-400 h-2.5 rounded-full transform transitiion-transform duration-300 hover:scale-105 w-8/12">
                  </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div> 
<div className= "mt-12 flex justify-between text-center">
  <div>
    <h3 className= "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from blue-500 to green-400">
        2+ 
    </h3>
    <p>Years Experience</p>
              </div>
              <div>
    <h3 className= "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from blue-500 to green-400">
        3
    </h3>
    <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
