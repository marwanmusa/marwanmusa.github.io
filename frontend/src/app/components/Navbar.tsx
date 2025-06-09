"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Training', href: '#training' },
  { name: 'Contact', href: '#contact' },
];

/**
 * Navigation bar component with responsive design and scroll detection
 * @returns JSX element representing the navigation bar
 */
export default function Navbar() {
  /**
   * State for mobile menu visibility
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  /**
   * State for active section tracking
   * Initialize with static value to prevent hydration mismatch
   */
  const [activeSection, setActiveSection] = useState<string>('home');
  
  /**
   * State for navbar scroll styling
   * Initialize with false to prevent hydration mismatch
   */
  const [scrolled, setScrolled] = useState<boolean>(false);

  /**
   * State to track if component has mounted (client-side only)
   * This prevents server/client mismatch during hydration
   */
  const [isMounted, setIsMounted] = useState<boolean>(false);

  /**
   * Effect to set mounted state and handle scroll detection
   * Only runs on client side to prevent hydration issues
   */
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = (): void => {
      // Only run if window is available (client-side)
      if (typeof window === 'undefined') return;

      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Only add scroll listener if window is available
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      
      // Call once to set initial state
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Consistent header class to prevent hydration mismatch
  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isMounted && scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-xl font-bold text-primary">
          Marwan Musa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-link ${
                isMounted && activeSection === link.href.substring(1) ? 'active' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Only render if mounted to prevent hydration mismatch */}
      {isMounted && isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${
                    activeSection === link.href.substring(1) ? 'active' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
}
