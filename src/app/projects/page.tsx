import { Metadata } from "next";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/portfolio";
import { Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Proyectos | Portafolio",
  description: "Explora mis proyectos de desarrollo web y aplicaciones",
};

export default function ProjectsPage() {
  // Obtener todas las tecnologías únicas
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  // Separar proyectos destacados
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Mis Proyectos
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Una selección de mis trabajos más recientes en desarrollo web,
              aplicaciones y experimentos técnicos.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Tecnologías utilizadas:</span>
              <div className="flex flex-wrap gap-1 ml-2">
                {allTechnologies.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="default" size="sm">
                    {tech}
                  </Badge>
                ))}
                {allTechnologies.length > 6 && (
                  <Badge variant="default" size="sm">
                    +{allTechnologies.length - 6} más
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                Proyectos Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Todos los Proyectos
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📁</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No hay proyectos disponibles
                </h3>
                <p className="text-gray-600">
                  Los proyectos se mostrarán aquí una vez que estén disponibles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Me encantaría colaborar contigo en tu próximo proyecto. Hablemos
              sobre cómo puedo ayudarte a hacerlo realidad.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Iniciar un proyecto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
