"use client";

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              I am a results-driven Software & AI Engineer with over 3 years of experience in designing and deploying end-to-end ML/DL systems for production environments. I have a proven track record of leading AI innovation, integrating advanced data science solutions into business-critical platforms, and mentoring diverse tech teams.
            </p>

            <p className="text-lg mb-6 leading-relaxed">
              With a strong background in mathematics, software engineering, and delivering measurable business value through automation and optimization, I excel at translating research into practical, scalable solutions. I&apos;m passionate about leveraging AI to solve real-world challenges and drive impactful AI transformation in dynamic, innovation-focused teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-2">Experience</h3>
                <p>3+ years of professional experience in software development and AI research</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-2">Education</h3>
                <p>Advanced training in AI Engineering, Machine Learning, and Data Science</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-primary mb-2">Expertise</h3>
                <p>ML/DL systems, software engineering, data science, and team leadership</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
