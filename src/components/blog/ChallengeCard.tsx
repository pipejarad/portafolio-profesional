import { Challenge } from "@/lib/types";
import { AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

interface ChallengeCardProps {
  challenge: Challenge;
  index: number;
}

export default function ChallengeCard({
  challenge,
  index,
}: ChallengeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="p-6 h-full grid grid-rows-[auto_1fr_1fr_1fr] gap-6">
        {/* Header */}
        <div className="flex-shrink-0">
          <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Desafío #{index + 1}
          </span>
        </div>

        {/* Problema */}
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
            Problema
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed flex-grow">
            {challenge.problem}
          </p>
        </div>

        {/* Solución */}
        <div className="flex flex-col">
          <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            Solución
          </h4>
          <p className="text-sm text-gray-700 leading-relaxed flex-grow">
            {challenge.solution}
          </p>
        </div>

        {/* Aprendizajes */}
        <div className="flex flex-col">
          <h4 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
            <Lightbulb className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
            Aprendizajes
          </h4>
          <ul className="list-disc list-inside space-y-2 flex-grow">
            {challenge.learnings.map((learning, idx) => (
              <li key={idx} className="text-sm text-gray-700 leading-relaxed">
                {learning}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
