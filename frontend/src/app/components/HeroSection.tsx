"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { getAssetPath } from '../lib/utils';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
              <Image
                src={getAssetPath("/profilepict.jpg")}
                alt="Marwan Musa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            className="w-full md:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-primary">
              Marwan Musa
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-secondary">
              Software & AI Engineer
            </h2>
            <p className="text-lg mb-6 max-w-2xl">
              Results-driven engineer with 3+ years of experience in designing and deploying end-to-end ML/DL systems. 
              Passionate about leveraging AI to solve real-world challenges.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span>+62 852 4075 5074</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <span>marwanmusa@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              <a
                href="https://linkedin.in/marwanmusa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/marwanmusa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
