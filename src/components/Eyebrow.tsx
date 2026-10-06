export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 ${className}`}
    >
      <span className="text-brand-500">✦</span>
      {children}
    </div>
  );
}
