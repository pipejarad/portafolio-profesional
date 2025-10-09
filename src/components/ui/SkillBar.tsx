interface SkillBarProps {
  name: string;
  level: number;
  category?: string;
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
