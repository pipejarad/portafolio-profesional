import { Metadata } from "next";
import { MusicCard } from "@/components/sections/MusicCard";
import { Badge } from "@/components/ui/Badge";
import { musicProjects } from "@/data/portfolio";
import { Music, Headphones, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Música | Portafolio",
  description: "Descubre mi trabajo musical y producciones artísticas",
};

export default function MusicPage() {
  // Separar proyectos destacados
  const featuredProjects = musicProjects.filter((project) => project.featured);
  const allGenres = Array.from(
    new Set(musicProjects.flatMap((project) => project.genre))
  ).sort();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Music className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Mi Música</h1>
            <p className="text-xl text-purple-100 mb-8">
              Composiciones originales, producciones y colaboraciones que
              fusionan creatividad tecnológica con expresión artística.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-purple-200">
              <Headphones className="w-4 h-4" />
              <span>Géneros:</span>
              <div className="flex flex-wrap gap-1 ml-2">
                {allGenres.slice(0, 4).map((genre) => (
                  <Badge
                    key={genre}
                    className="bg-white bg-opacity-20 text-white border-0"
                    size="sm"
                  >
                    {genre}
                  </Badge>
                ))}
                {allGenres.length > 4 && (
                  <Badge
                    className="bg-white bg-opacity-20 text-white border-0"
                    size="sm"
                  >
                    +{allGenres.length - 4} más
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Music Section */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
                Trabajos Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <MusicCard key={project.id} musicProject={project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Music Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Discografía Completa
            </h2>

            {/* Music Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {musicProjects.map((project) => (
                <MusicCard key={project.id} musicProject={project} />
              ))}
            </div>

            {/* Empty State */}
            {musicProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No hay música disponible
                </h3>
                <p className="text-gray-600">
                  Los proyectos musicales se mostrarán aquí una vez que estén
                  disponibles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Music Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Servicios Musicales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Composición Original
                </h3>
                <p className="text-gray-600">
                  Creación de música original para proyectos multimedia,
                  videojuegos y contenido digital.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Producción Musical
                </h3>
                <p className="text-gray-600">
                  Producción completa de tracks, desde la idea inicial hasta el
                  master final listo para distribución.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mezcla & Mastering
                </h3>
                <p className="text-gray-600">
                  Servicios profesionales de mezcla y mastering para dar vida a
                  tus grabaciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Necesitas música para tu proyecto?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Colaboremos para crear la banda sonora perfecta para tu idea.
              Desde videojuegos hasta contenido digital.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Empezar colaboración musical
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
