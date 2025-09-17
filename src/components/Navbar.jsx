import React, { useState } from 'react';
import appleLogo from '../apple-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
<img src={appleLogo} alt="Apple" className="h-8 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#mac" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Mac</a>
              <a href="#iphone" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">iPhone</a>
              <a href="#ipad" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">iPad</a>
              <a href="#watch" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Watch</a>
              <a href="#airpods" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">AirPods</a>
              <a href="#tvhome" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">TV & Home</a>
              <a href="#support" className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Support</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-gray-600 focus:outline-none">
              <span className="block w-6 h-0.5 bg-current mb-1 transition duration-300"></span>
              <span className="block w-6 h-0.5 bg-current mb-1 transition duration-300"></span>
              <span className="block w-6 h-0.5 bg-current transition duration-300"></span>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#mac" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Mac</a>
            <a href="#iphone" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">iPhone</a>
            <a href="#ipad" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">iPad</a>
            <a href="#watch" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Watch</a>
            <a href="#airpods" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">AirPods</a>
            <a href="#tvhome" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">TV & Home</a>
            <a href="#support" className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300">Support</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
