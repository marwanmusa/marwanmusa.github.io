"use client";

import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

export default function Footer() {
  /**
   * State to store the current year
   * Initialize with a static value to prevent hydration mismatch
   */
  const [currentYear, setCurrentYear] = useState<number>(2024);

  /**
   * Effect to set the current year only on client side
   * This prevents hydration mismatch between server and client
   */
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Marwan Musa</h3>
            <p className="text-gray-400">Software & AI Engineer</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/marwanmusa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/marwanmusa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Marwan Musa. All rights reserved. Made with <FaHeart className="text-red-500 mx-1" /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
