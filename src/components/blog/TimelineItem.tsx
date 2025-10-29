import { LearningStep } from "@/lib/types";
import { BookOpen, Code2, Star } from "lucide-react";

interface TimelineItemProps {
  step: LearningStep;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({
  step,
  index,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-blue-200 -z-10"></div>
      )}

      <div className="flex items-start space-x-4">
        {/* Timeline dot */}
        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          {index + 1}
        </div>

        {/* Content */}
        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
            {step.title}
          </h3>

          <p className="text-gray-700 mb-4">{step.description}</p>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <Code2 className="h-4 w-4 mr-1" />
              Tecnologías Utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {step.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              Insights Clave
            </h4>
            <ul className="space-y-2">
              {step.insights.map((insight, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
