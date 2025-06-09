import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { getAssetPath } from '../../lib/utils';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-primary hover:underline">&larr; Back</Link>
      <div className="mt-6">
        <div className="relative w-full h-64 md:h-96 mb-6">
          <Image
            src={getAssetPath(project!.image)}
            alt={project!.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">{project!.title}</h1>
        <p className="mb-6 text-gray-700 max-w-2xl">{project!.description}</p>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Key Achievements</h2>
          <ul className="list-disc pl-6 space-y-1">
            {project!.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project!.technologies.map((t, i) => (
              <span key={i} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href={project!.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center btn-outline"
          >
            <FaGithub className="mr-1" /> Code
          </a>
          <a
            href={project!.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center btn-primary"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
