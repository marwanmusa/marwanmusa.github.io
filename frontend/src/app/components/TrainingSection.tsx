"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const trainings = [
  {
    title: "IBM AI Engineering Professional",
    provider: "Coursera",
    period: "June - Aug 2024"
  },
  {
    title: "AWS Machine Learning Foundations 2022",
    provider: "Udacity",
    period: "Sept - Oct 2022"
  },
  {
    title: "Full-time Data Science Bootcamp",
    provider: "Hacktiv8 Indonesia",
    period: "March - June 2022"
  },
  {
    title: "Professional Academy Data Scientist",
    provider: "Digitalent Scholarship by Ministry of Communication and Information Technology",
    period: "Apr - May 2022"
  }
];

export default function TrainingSection() {
  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Training & Certifications
        </motion.h2>

        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{training.title}</h3>
                  <p className="text-gray-700">{training.provider}</p>
                  <div className="flex items-center mt-2 text-gray-600">
                    <FaCalendarAlt className="mr-2" />
                    <span>{training.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
