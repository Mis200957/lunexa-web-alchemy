
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300 px-4 md:px-10 lg:px-24 py-4',
        scrolled ? 'bg-navy/80 backdrop-blur-lg' : 'bg-transparent'
      )}>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-medium text-white">
            <span className="text-gold">Lu</span>nexa
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="neumorphic-btn text-gold" 
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-4/5 bg-navy shadow-xl transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={closeMenu}
            className="text-white"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center pt-10 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className="text-white/80 hover:text-gold text-xl transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="neumorphic-btn text-gold mt-8" 
          >
            Get Started
          </Link>
        </nav>
      </div>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
