import { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card, CardContent } from "@/components/ui/Card";
import { contactInfo } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Music,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Portafolio",
  description: "Ponte en contacto conmigo para oportunidades laborales",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Trabajemos Juntos
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ¿Tienes un proyecto interesante? ¿Necesitas colaboración técnica o
              musical? Me encantaría escuchar sobre tu idea y cómo puedo
              ayudarte.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Respuesta en 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Consultas gratuitas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Información de Contacto
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>

                      {contactInfo.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium text-gray-900">
                              Teléfono
                            </p>
                            <a
                              href={`tel:${contactInfo.phone}`}
                              className="text-green-600 hover:text-green-700"
                            >
                              {contactInfo.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-gray-900">Ubicación</p>
                          <p className="text-gray-600">
                            {contactInfo.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      Sígueme en Redes
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {contactInfo.linkedin && (
                        <a
                          href={contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">LinkedIn</span>
                        </a>
                      )}

                      {contactInfo.github && (
                        <a
                          href={contactInfo.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-800" />
                          <span className="font-medium">GitHub</span>
                        </a>
                      )}

                      {contactInfo.spotify && (
                        <a
                          href={contactInfo.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <Music className="w-5 h-5 text-green-600" />
                          <span className="font-medium">Spotify</span>
                        </a>
                      )}

                      {contactInfo.youtube && (
                        <a
                          href={contactInfo.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-5 h-5 text-red-600">▶️</div>
                          <span className="font-medium">YouTube</span>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Disponibilidad
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Disponible para proyectos
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Colaboraciones musicales
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Consultoría técnica
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cuánto tiempo toma un proyecto típico?
                </h3>
                <p className="text-gray-600">
                  Depende de la complejidad, pero la mayoría de proyectos web
                  toman entre 2-6 semanas. Los proyectos musicales pueden variar
                  desde una semana para un single hasta varios meses para un
                  álbum.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Trabajas con clientes internacionales?
                </h3>
                <p className="text-gray-600">
                  ¡Absolutamente! Trabajo con clientes de todo el mundo. Tengo
                  experiencia coordinando proyectos en diferentes zonas horarias
                  y me adapto a las necesidades de comunicación de cada cliente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Ofreces soporte post-proyecto?
                </h3>
                <p className="text-gray-600">
                  Sí, incluyo un período de soporte gratuito después de entregar
                  cada proyecto. También ofrezco planes de mantenimiento y
                  soporte extendido según las necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
