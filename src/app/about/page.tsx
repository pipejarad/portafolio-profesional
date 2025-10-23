import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SkillBar } from "@/components/ui/SkillBar";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  personalInfo,
  skills,
  experience,
  getSkillLevel,
} from "@/data/portfolio";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mí | Portafolio",
  description: "Conoce más sobre mi experiencia como desarrollador y músico",
};

export default function AboutPage() {
  // Agrupar habilidades por categoría
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="relative w-80 h-80 mx-auto lg:w-full lg:h-full max-w-sm">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                  {/* Placeholder para imagen real */}
                  <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">Agregar foto personal</p>
                  </div>
                </div>
              </div>

              {/* Bio Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-blue-600 font-medium mb-6">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {personalInfo.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Santiago, Chile</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    <span>Disponible para trabajar</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Badge variant="primary">Desarrollador Full Stack</Badge>
                  <Badge variant="secondary">Productor Musical</Badge>
                  <Badge variant="success">Freelancer</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Habilidades Técnicas
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(skillsByCategory).map(
                ([category, categorySkills]) => (
                  <Card key={category} className="p-6">
                    <CardHeader>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {category}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      {categorySkills.map((skill) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={getSkillLevel(skill.level)}
                        />
                      ))}
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Experiencia Profesional
            </h2>

            <div className="space-y-8">
              {experience.map((exp) => (
                <Card key={exp.id} className="p-6" hover>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {exp.startDate} - {exp.endDate || "Presente"}
                      </span>
                      {exp.current && (
                        <Badge variant="success" size="sm" className="ml-2">
                          Actual
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Mi Filosofía de Trabajo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pasión por la Excelencia
                </h3>
                <p className="text-gray-600">
                  Cada línea de código y cada nota musical reflejan mi
                  compromiso con la calidad y la atención al detalle.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Aprendizaje Continuo
                </h3>
                <p className="text-gray-600">
                  La tecnología y la música evolucionan constantemente. Me
                  mantengo actualizado para ofrecer soluciones innovadoras.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Colaboración Efectiva
                </h3>
                <p className="text-gray-600">
                  Creo en el poder del trabajo en equipo y la comunicación clara
                  para alcanzar objetivos ambiciosos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
