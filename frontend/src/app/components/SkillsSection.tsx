"use client";

import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaCalculator, FaLaptopCode, FaUsers, FaTools } from 'react-icons/fa';

const skills = {
  programming: ["Python", "C++", "C#", "JavaScript", "TypeScript"],
  ai_ml: ["ML/DL algorithm development", "data integration", "model optimization"],
  mathematics: ["Linear algebra", "calculus", "statistics", "probability", "discrete mathematics"],
  software_engineering: ["Full-stack development", "system design", "optimization"],
  tech_mentoring: ["Providing guidance", "fostering learning", "promoting team growth"],
  tools_frameworks: ["AWS", "Google Data Studio", "TensorFlow", "PyTorch"]
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Programming Languages */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-3xl text-primary mr-3" />
              <h3 className="text-xl font-bold">Programming Languages</h3>
            </div>
            <div className="flex flex-wrap">
              {skills.programming.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* AI & Machine Learning */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaBrain className="text-3xl text-primary mr-3" />
              <h3 className="text-xl font-bold">AI & Machine Learning</h3>
            </div>
            <div className="flex flex-wrap">
              {skills.ai_ml.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Mathematics & Statistics */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <FaCalculator className="text-3xl text-primary mr-3" />
              <h3 className="text-xl font-bold">Mathematics & Statistics</h3>
            </div>
            <div className="flex flex-wrap">
              {skills.mathematics.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Software Engineering */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-3xl text-primary mr-3" />
              <h3 className="text-xl font-bold">Software Engineering</h3>
            </div>
            <div className="flex flex-wrap">
              {skills.software_engineering.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Tech Mentoring */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaUsers className="text-3xl text-primary mr-3" />
              <h3 className="text-xl font-bold">Tech Mentoring</h3>
            </div>
            <div className="flex flex-wrap">
              {skills.tech_mentoring.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <FaTools className="text-3xl text-primary mr-3" />
              <h3 className="text-xl font-bold">Tools & Frameworks</h3>
            </div>
            <div className="flex flex-wrap">
              {skills.tools_frameworks.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
