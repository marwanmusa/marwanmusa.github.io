"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getAssetPath } from '../lib/utils';

const projects = [
  {
    title: "Hydropower Portal",
    description: "Comprehensive web portal for managing hydropower projects",
    technologies: ["Python", "C++", "Django", "DRF", "PostgreSQL", "Pandas", "Numpy"],
    highlights: [
      "7 core modules including Dashboard Analysis, Financial Analysis",
      "Complex engineering and financial calculations",
      "Team leadership of 5 developers"
    ],
    image: getAssetPath("/images/projects/hydropower-portal.png"),
    githubUrl: "https://gitlab.baezeni.net/",
    liveUrl: "https://tinfosportal.z23.web.core.windows.net/"
  },
  {
    title: "BZ-Publish AI Features",
    description: "AI enhancements for financial platform",
    technologies: ["Python", "Django", "Prophet", "Selenium", "BeautifulSoup", "OpenAI API"],
    highlights: [
      "Time-series forecasting model",
      "AI-powered chatbot with OpenAI integration",
      "Automated data scraping system"
    ],
    image: getAssetPath("/images/projects/bz-publish.png"),
    githubUrl: "https://gitlab.baezeni.net/",
    liveUrl: "https://www.bzpublish.com/"
  },
  {
    title: "Automated Coal Document Processing",
    description: "OCR system for automating data extraction from coal shipment documents",
    technologies: ["Python", "Tesseract OCR", "OpenCV", "pypdfium2", "SendGrid API", "Azure OCR"],
    highlights: [
      "OCR pipeline development",
      "Automated data extraction with regex",
      "Email notification system",
      "Significant improvement in processing speed"
    ],
    image: getAssetPath("/images/projects/coal-document-processing.png"),
    githubUrl: "https://gitlab.baezeni.net/",
    liveUrl: "https://www.jawapower.co.id/"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project thumbnail`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-700 text-sm">{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">{tech}</span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
