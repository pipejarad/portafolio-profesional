import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Code2,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ChallengeCard from "@/components/blog/ChallengeCard";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Proyectos
          </Link>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            {/* Logo específico para Meet & Gig reemplaza el título */}
            {slug === "meet-and-gig" ? (
              <div className="mb-6">
                <Image
                  src="/meet-gig-logo.svg"
                  alt="Meet & Gig Logo"
                  width={300}
                  height={300}
                  className="mx-auto"
                  unoptimized
                />
              </div>
            ) : (
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
            )}

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {project.description}
            </p>
          </div>

          <div className="mb-8">
            <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">
              {slug === "meet-and-gig" ? (
                <Image
                  src="/projects/meet-and-gig-screenshot.png"
                  alt="Screenshot de Meet & Gig - Página Principal"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  unoptimized
                />
              ) : (
                <div className="relative w-full h-64">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-wrap gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  Ver Código
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Ver Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <Code2 className="h-6 w-6 mr-2" />
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.blogContent ? (
          <>
            <div className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Historia del Proyecto
              </h3>
              <div className="text-lg leading-relaxed text-gray-700 space-y-4">
                {project.blogContent.summary
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            {/* Challenges Section */}
            {project.blogContent.challenges &&
              project.blogContent.challenges.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                    <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
                    Desafíos Técnicos
                  </h3>
                  <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-stretch">
                    {project.blogContent.challenges.map((challenge, index) => (
                      <div key={index} className="min-h-[550px]">
                        <ChallengeCard challenge={challenge} index={index} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
            <Calendar className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              Blog en Desarrollo
            </h3>
            <p className="text-yellow-700">
              Estoy preparando el contenido detallado para este proyecto,
              incluyendo mi proceso de aprendizaje, desafíos enfrentados y
              soluciones implementadas. ¡Pronto estará disponible!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} - Felipe Jara`,
    description: project.description,
  };
}
