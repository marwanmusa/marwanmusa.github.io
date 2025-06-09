"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { getAssetPath } from '../lib/utils';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const router = useRouter();

  /**
   * Handle click on project card to navigate to project detail page
   * @param slug - The project slug for navigation
   * @param event - The click event
   */
  const handleProjectClick = (slug: string, event: React.MouseEvent<HTMLDivElement>): void => {
    // Prevent navigation if clicking on external links
    const target = event.target as HTMLElement;
    if (target.closest('a[href^="http"]')) {
      return;
    }
    
    // Navigate to project detail page using Next.js router
    router.push(`/projects/${slug}`);
  };

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
              className="project-card cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={(e) => handleProjectClick(project.slug, e)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={getAssetPath(project.image)}
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
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
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
