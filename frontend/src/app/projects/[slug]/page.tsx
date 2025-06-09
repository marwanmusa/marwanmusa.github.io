import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';
import { getAssetPath } from '../../lib/utils';

const mdxMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  'hydropower-portal': () => import('../../../content/projects/hydropower-portal.mdx'),
  'bz-publish-ai-features': () => import('../../../content/projects/bz-publish-ai-features.mdx'),
  'coal-document-processing': () => import('../../../content/projects/coal-document-processing.mdx'),
};

/**
 * Generate static paths for all project pages
 * @returns Array of slug parameters for static generation
 */
export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

/**
 * Props interface for the ProjectPage component
 * Must match Next.js 15 PageProps requirements
 */
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * Project detail page component
 * @param params - Route parameters containing the project slug
 * @param searchParams - URL search parameters (unused but required by Next.js)
 * @returns JSX element representing the project detail page
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    notFound();
  }

  const MDXModule = mdxMap[slug] ? await mdxMap[slug]() : null;
  const MDXContent = MDXModule ? MDXModule.default : null;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-primary hover:underline">&larr; Back</Link>
      <div className="mt-6">
        <div className="relative w-full h-64 md:h-96 mb-6">
          <Image
            src={getAssetPath(project.image)}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
        <p className="mb-6 text-gray-700 max-w-2xl">{project.description}</p>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Key Achievements</h2>
          <ul className="list-disc pl-6 space-y-1">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="font-semibold text-lg mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, i) => (
              <span key={i} className="skill-tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex gap-6 mt-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center btn-outline"
          >
            <FaGithub className="mr-1" /> Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center btn-primary"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        </div>

        {MDXContent && (
          <article className="prose prose-slate mt-10">
            <MDXContent />
          </article>
        )}
      </div>
    </div>
  );
}
