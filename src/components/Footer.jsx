import React from 'react';
import appleLogo from '../apple-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Mac</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">iPad</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">iPhone</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Watch</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">AirPods</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple Music</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple TV+</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple Fitness+</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple News+</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple Arcade</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple Store Account</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Apple Store</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Find a Store</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Genius Bar</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Today at Apple</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple Camp</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Apple Store App</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-center items-center space-x-6">
<img src={appleLogo} alt="Apple" className="h-6 w-auto mb-4 md:mb-0" />
          <p className="text-sm text-gray-400">Copyright © 2023 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
