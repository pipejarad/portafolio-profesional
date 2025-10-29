import { ReactNode } from "react";

interface BlogSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function BlogSection({
  title,
  children,
  icon,
  className = "",
}: BlogSectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        {icon && <span className="mr-3">{icon}</span>}
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
