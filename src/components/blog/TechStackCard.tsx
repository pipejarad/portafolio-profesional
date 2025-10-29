import { TechStackDetail } from "@/lib/types";
import { Code2, Star } from "lucide-react";

interface TechStackCardProps {
  tech: TechStackDetail;
}

const experienceColors = {
  new: "bg-green-100 text-green-800",
  familiar: "bg-blue-100 text-blue-800",
  expert: "bg-purple-100 text-purple-800",
};

const experienceLabels = {
  new: "Nueva tecnología",
  familiar: "Tecnología conocida",
  expert: "Tecnología dominada",
};

export default function TechStackCard({ tech }: TechStackCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Code2 className="h-5 w-5 mr-2 text-blue-600" />
          {tech.technology}
        </h3>
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium ${
            experienceColors[tech.experience]
          }`}
        >
          {experienceLabels[tech.experience]}
        </span>
      </div>

      <p className="text-gray-700 mb-4">{tech.purpose}</p>

      <div>
        <h4 className="font-medium text-gray-900 mb-2 flex items-center">
          <Star className="h-4 w-4 mr-1 text-yellow-500" />
          Características Clave
        </h4>
        <ul className="space-y-1">
          {tech.keyFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
