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
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
          Desafío #{index + 1}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
          <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
          Problema
        </h3>
        <p className="text-gray-700 mb-4">{challenge.problem}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          Solución
        </h4>
        <p className="text-gray-700 mb-4">{challenge.solution}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
          <Lightbulb className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
          Aprendizajes
        </h4>
        <ul className="list-disc list-inside space-y-2">
          {challenge.learnings.map((learning, idx) => (
            <li key={idx} className="text-gray-700">
              {learning}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
