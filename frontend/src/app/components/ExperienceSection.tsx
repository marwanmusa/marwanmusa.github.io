"use client";

import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    title: "Software Engineer & AI Researcher",
    company: "Baezeni Company Network",
    type: "Full-Time",
    period: "Sep 2024 - Present",
    responsibilities: [
      "Developed and integrated AI features, including Machine Learning and Deep Learning, into BZPublish and Java Power Portal",
      "Led end-to-end system design and engineering code handling for Tinfos Reporting Portal",
      "Collaborated with developers to optimize and implement prototypes and algorithms",
      "Researched and tested cutting-edge technologies to improve product features and capabilities",
      "Initiated the BaezeniAI project for broader AI model applications"
    ]
  },
  {
    title: "Software Engineer & AI Researcher",
    company: "Baezeni Company Network",
    type: "Contract",
    period: "Sep 2022 - Sep 2024",
    responsibilities: [
      "Try and test ideas and solutions",
      "Study and learn about the latest state of the art technology",
      "Hand over prototype and algorithm to developer team for optimization and implementation",
      "Researched and tested cutting-edge technologies to improve product features and capabilities"
    ]
  },
  {
    title: "Data Science Mentor",
    company: "Kelasdata by Kelas.com",
    type: "Contract",
    period: "Oct 2022 - Present",
    responsibilities: [
      "Mentored over 500 students in the 'Python for Data Science' course"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto mt-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-lg text-gray-700">{exp.company}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <FaCalendarAlt className="text-secondary mr-2" />
                    <span className="text-gray-600">{exp.period}</span>
                    {exp.type && (
                      <span className="ml-3 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {exp.type}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
