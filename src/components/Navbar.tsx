import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Globe, User, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Faculties', href: '#' },
    { name: 'Research', href: '#' },
    { name: 'Library', href: '#' },
    { name: 'News', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://nebworksmedia.com/wp-content/uploads/2026/03/univen-logo.png" 
              alt="University of Venda Logo" 
              className={`transition-all duration-300 ${isScrolled ? 'h-24' : 'h-32'}`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-univen-gold ${isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-slate-300/30 pl-6">
              <button className={`${isScrolled ? 'text-slate-700' : 'text-white'} hover:text-univen-gold transition-colors`}>
                <Search size={20} />
              </button>
              <button className="bg-univen-gold text-univen-blue px-4 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-univen-blue transition-all shadow-lg">
                Apply Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-700' : 'text-white'} p-2`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-univen-blue border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="flex items-center justify-center space-x-2 bg-univen-blue text-white px-4 py-3 rounded-lg font-bold">
                  <GraduationCap size={20} />
                  <span>Apply Now</span>
                </button>
                <button className="flex items-center justify-center space-x-2 border border-univen-blue text-univen-blue px-4 py-3 rounded-lg font-bold">
                  <Search size={20} />
                  <span>Search Website</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
