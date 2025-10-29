import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectNavigationProps {
  currentProject: Project;
  allProjects: Project[];
}

export default function ProjectNavigation({
  currentProject,
  allProjects,
}: ProjectNavigationProps) {
  const currentIndex = allProjects.findIndex((p) => p.id === currentProject.id);
  const previousProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <div className="border-t border-gray-200 pt-8 mt-12">
      <div className="flex justify-between items-center">
        {/* Proyecto Anterior */}
        <div className="flex-1">
          {previousProject && (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group flex items-center text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all max-w-sm"
            >
              <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-blue-600 mr-3 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Proyecto Anterior</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-700">
                  {previousProject.title}
                </p>
              </div>
            </Link>
          )}
        </div>

        {/* Ver Todos los Proyectos */}
        <div className="flex-shrink-0 mx-4">
          <Link
            href="/projects"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            Todos los Proyectos
          </Link>
        </div>

        {/* Proyecto Siguiente */}
        <div className="flex-1 flex justify-end">
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center text-right p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all max-w-sm"
            >
              <div>
                <p className="text-sm text-gray-500 mb-1">Proyecto Siguiente</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-700">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 ml-3 flex-shrink-0" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
