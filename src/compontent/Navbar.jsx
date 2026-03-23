import React, { useState, useEffect } from 'react';
import logo from '../assets/ecommecrs.png';
import { MoonStar, Sun, Menu, X, ShoppingCart } from 'lucide-react'; // ShoppingCart যোগ করুন

import Home from './Home';
import FacthData from './FacthData';

const Navbar = () => {
  const [isMoon, setIsMood] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDark = () => {
    setIsMood(!isMoon);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isOpen &&
        !event.target.closest('.mobile-menu') &&
        !event.target.closest('.menu-toggle')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/50 backdrop-blur-md shadow-lg' : 'py-4 bg-black/70'}`}
      >
        <nav className="w-10/12 mx-auto flex items-center justify-between">
          {/* logo */}
          <div className="w-16 h-16 md:w-20 md:h-20 transition-all duration-300">
            <img
              src={logo}
              alt="Ecommerce Logo"
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <ul className="hidden md:flex items-center gap-4">
              <li className="group">
                <a
                  href="#home"
                  className="px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 bg-transparent text-white group-hover:bg-white/20 group-hover:text-white"
                >
                  Home
                </a>
              </li>
              <li className="group">
                <a
                  href="#product"
                  className="px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 bg-transparent text-white group-hover:bg-white/20 group-hover:text-white"
                >
                  Product
                </a>
              </li>
              <li className="group">
                <a
                  href="#singup"
                  className="px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 bg-white/20 text-white hover:bg-white hover:text-[#3498DB]"
                >
                  Sign Up
                </a>
              </li>
            </ul>

            {/* darkMode */}
            <div
              onClick={handleDark}
              className="cursor-pointer bg-white/20 p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#3498DB]"
            >
              {isMoon ? <Sun size={20} /> : <MoonStar size={20} />}
            </div>

            {/* Shopping Cart Icon */}
            <div className="relative cursor-pointer bg-white/20 p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#3498DB]">
              <ShoppingCart size={20} />
              {/* Optional: Cart item count badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>

            {/* Menu Toggle */}
            <div
              onClick={handleMenu}
              className="md:hidden cursor-pointer bg-white/20 p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#3498DB] menu-toggle"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu absolute top-20 rounded-2xl right-0 w-2xs bg-linear-to-b from-[#1ABC9C] to-[#3498DB] shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 px-6 space-y-4">
            <li>
              <a
                href="#home"
                className="block px-4 py-3 rounded-xl text-lg font-medium text-white bg-white/10 transition-all duration-300 hover:bg-white hover:text-[#3498DB]"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#product"
                className="block px-4 py-3 rounded-xl text-lg font-medium text-white bg-white/10 transition-all duration-300 hover:bg-white hover:text-[#3498DB]"
                onClick={() => setIsOpen(false)}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#singup"
                className="block px-4 py-3 rounded-xl text-lg font-medium text-white bg-white/20 transition-all duration-300 hover:bg-white hover:text-[#3498DB]"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </header>

      <Home isMoon={isMoon} />
      <FacthData isMoon={isMoon} />
    </div>
  );
};

export default Navbar;
