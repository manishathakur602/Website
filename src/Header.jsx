import React, { useState } from 'react';
import h1 from '../src/assets/Images/img.png';
import h2 from '../src/assets/Images/header2.png';  // Import the h2 image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePagesDropdown = () => setIsPagesDropdownOpen(!isPagesDropdownOpen);

  return (
    <nav className="relative p-4 bg-cover bg-center" style={{ backgroundImage: `url(${h2})` }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={h1} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-black font-bold text-xl">Explore Mind</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-black hover:text-gray-700">Home</a>
          <a href="#about" className="text-black hover:text-gray-700">About</a>
          <a href="#" className="text-black hover:text-gray-700">Services</a>
          <a href="#" className="text-black hover:text-gray-700">Courses</a>
          <div className="relative group">
            <button onClick={togglePagesDropdown} className="text-black hover:text-gray-700">
              Pages <span className="ml-1">▼</span>
            </button>
            {isPagesDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Services</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact Us</a>
              </div>
            )}
          </div>
          <a href="#" className="text-black hover:text-gray-700">Testimonials</a>
          <a href="#" className="text-black hover:text-gray-700">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4">
          <a href="#" className="block text-black py-2">Home</a>
          <a href="#about" className="block text-black py-2">About</a>
          <a href="#" className="block text-black py-2">Services</a>
          <a href="#" className="block text-black py-2">Courses</a>
          <button onClick={togglePagesDropdown} className="w-full text-left text-black py-2">
            Pages <span className="ml-1">▼</span>
          </button>
          {isPagesDropdownOpen && (
            <div className="pl-4">
              <a href="#" className="block text-black py-2">About Us</a>
              <a href="#" className="block text-black py-2">Our Services</a>
              <a href="#" className="block text-black py-2">Contact Us</a>
            </div>
          )}
          <a href="#" className="block text-black py-2">Testimonials</a>
          <a href="#" className="block text-black py-2">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Header;