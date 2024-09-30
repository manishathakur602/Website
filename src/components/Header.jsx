import React, { useState } from 'react';
import h1 from '../assets/Images/img.png';
import h2 from '../assets/Images/header2.png';  // Import the h2 image
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePagesDropdown = () => setIsPagesDropdownOpen(!isPagesDropdownOpen);

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-cover bg-center z-50" style={{ backgroundImage: `url(${h2})` }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={h1} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-black font-bold text-xl">Explore Mind</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link  activeClass="active" 
      to="test1" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  onClick={()=>navigate('/')} className="text-black hover:text-gray-700">Home</Link>
          {/* <NavLink to="/aboutus" onClick={()=>navigate('/aboutus')} className="text-black hover:text-gray-700">About </NavLink> */}
          <Link  activeClass="active" 
      to="test2" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}   onClick={()=>navigate('/services')} className="text-black hover:text-gray-700">Services</Link>
          <Link   activeClass="active" 
      to="test3" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} onClick={()=>navigate('/Courses')} className="text-black hover:text-gray-700">Courses</Link>
          <div className="relative group">
            <button onClick={togglePagesDropdown} className="text-black hover:text-gray-700">
              Pages <span className="ml-1">▼</span>
            </button>
            {isPagesDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                {/* <Link  to="/aboutus" onClick={()=>navigate('/aboutus')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">About Us</Link> */}
                <Link   activeClass="active" 
      to="test2" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} onClick={()=>navigate('/services')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Our Services</Link>
                <Link  activeClass="active" 
      to="test5" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  onClick={()=>navigate('/ContactUS')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact Us</Link>
              </div>
            )}
          </div>
          <Link   activeClass="active" 
      to="test4" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  onClick={()=>navigate('/Testimonials')} className="text-black hover:text-gray-700">Testimonials</Link>
          <Link   activeClass="active" 
      to="test5" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  onClick={()=>navigate('/ContactUS')} className="text-black hover:text-gray-700">Contact Us</Link>
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
          <Link  activeClass="active" 
      to="test1" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className="block text-black py-2 cursor-pointer">Home</Link>
          {/* <Link  href="#about" className="block text-black py-2">About</Link> */}
          <Link activeClass="active" 
      to="test2" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}  className="block text-black py-2 cursor-pointer">Services</Link>
          <Link  activeClass="active" 
      to="test3" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className="block text-black py-2">Courses</Link>
          <button onClick={togglePagesDropdown} className="w-full text-left text-black py-2">
            Pages <span className="ml-1">▼</span>
          </button>
          {isPagesDropdownOpen && (
            <div className="pl-4">
              {/* <Link  href="#" className="block text-black py-2">About Us</Link> */}
              <Link  activeClass="active" 
      to="test2" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className="block text-black py-2">Our Services</Link>
              <Link   activeClass="active" 
      to="test4" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className="block text-black py-2">Contact Us</Link>
            </div>
          )}
          <Link   activeClass="active" 
      to="test4" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className="block text-black py-2">Testimonials</Link>
          <Link   activeClass="active" 
      to="test5" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} className="block text-black py-2">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;