import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { ExternalLink, Github, Star, BookOpen } from "lucide-react";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full" hover>
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-contain p-2"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-4xl opacity-50">🚀</div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge
              variant="warning"
              size="sm"
              className="bg-yellow-100 text-yellow-800"
            >
              <Star className="w-3 h-3 mr-1" />
              Destacado
            </Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Blog Link */}
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center gap-2 px-3 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Leer Blog
            </Link>
          )}

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github className="w-4 h-4" />
              Código
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
