"use client";

import { useEffect, useState } from "react";
import { ChevronRight, List } from "lucide-react";
import { Project } from "@/lib/types";

interface TableOfContentsProps {
  project: Project;
}

export default function TableOfContents({ project }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "historia", title: "Historia del Proyecto" },
    { id: "journey", title: "Mi Journey de Aprendizaje" },
    { id: "tech-stack", title: "Stack Tecnológico Detallado" },
    { id: "desafios", title: "Desafíos Técnicos y Soluciones" },
    { id: "highlights", title: "Características Destacadas" },
    { id: "next-steps", title: "Próximos Pasos y Mejoras" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  if (!project.blogContent) return null;

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-20 right-4 z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border border-gray-300 rounded-lg p-2 shadow-lg"
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {/* Table of Contents */}
      <div
        className={`
        fixed top-24 right-4 w-64 bg-white border border-gray-200 rounded-lg p-4 shadow-lg z-10
        transition-all duration-300 ease-in-out
        lg:block
        ${isOpen ? "block" : "hidden lg:block"}
      `}
      >
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <List className="h-4 w-4 mr-2" />
          Contenido
        </h3>
        <nav className="space-y-2">
          {sections.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`
                w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                flex items-center group
                ${
                  activeSection === id
                    ? "bg-blue-100 text-blue-700 border-l-2 border-blue-600"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }
              `}
            >
              <ChevronRight
                className={`
                h-3 w-3 mr-2 transition-transform
                ${
                  activeSection === id
                    ? "rotate-90"
                    : "group-hover:translate-x-1"
                }
              `}
              />
              {title}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
