
type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Highlight({
  children,
  className = "",
}: HighlightProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="absolute -inset-1 bg-green-300/60 blur-md rotate-[-2deg] rounded-[30%]" />
      
      <span className="relative z-10">
        {children}
      </span>
    </span>
  );
}