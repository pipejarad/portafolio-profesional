import Link from "next/link";
import { ArrowRight, Code, Music, User, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hola, soy <span className="text-blue-600">Desarrollador</span> y{" "}
              <span className="text-purple-600">Músico</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creo experiencias digitales innovadoras y composiciones musicales
              únicas. Combino creatividad técnica con sensibilidad artística.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contactarme
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Lo que hago
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Development Card */}
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Desarrollo Web
              </h3>
              <p className="text-gray-600 mb-4">
                Aplicaciones web modernas con React, Next.js y TypeScript.
                Enfoque en performance y experiencia de usuario.
              </p>
              <Link
                href="/projects"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Ver proyectos →
              </Link>
            </div>

            {/* Music Card */}
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Music className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Producción Musical
              </h3>
              <p className="text-gray-600 mb-4">
                Composición, grabación y producción musical. Especializado en
                música electrónica y bandas sonoras.
              </p>
              <Link
                href="/music"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Escuchar música →
              </Link>
            </div>

            {/* About Card */}
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Mi Historia
              </h3>
              <p className="text-gray-600 mb-4">
                Conoce más sobre mi trayectoria profesional, experiencia y la
                intersección entre tecnología y arte.
              </p>
              <Link
                href="/about"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Sobre mí →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Estoy abierto a nuevas oportunidades laborales y colaboraciones
            interesantes. ¡Hablemos sobre tu próximo proyecto!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Ponte en contacto
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
