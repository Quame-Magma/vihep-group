interface PageHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ subtitle, title, description, className = '' }: PageHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      {subtitle && <span className="text-red-500 font-mono">{subtitle}</span>}
      <h1 className="text-4xl font-mono font-bold mt-2 mb-4">
        {title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h1>
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
} 