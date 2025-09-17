import React from 'react';
import heroimage from '../heroimage.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pt-0 px-0 sm:px-0 lg:px-0 text-center bg-transparent">
<img src={heroimage} alt="Hero" className="w-full max-w-4xl h-auto object-contain mx-auto animate-fluidGlow" style={{ boxShadow: 'none', background: 'none', border: 'none' }} />
      <div className="max-w-7xl w-full mt-0 pt-8 pb-20 flex flex-col items-center bg-transparent">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Think Different</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">The best just got better.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition duration-300">Learn more</button>
          <button className="bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-300 transition duration-300">Buy</button>
          <a href="https://www.apple.com/apple-events/?useASL=true" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-300 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:via-yellow-500 hover:to-yellow-400 transition duration-500 animate-fluidGlow inline-block">Apple Event</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
