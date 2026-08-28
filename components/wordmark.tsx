export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-heading font-medium tracking-tight text-text ${className}`}
    >
      edecode<span className="font-mono text-blue">.</span>
    </span>
  );
}

export function IconMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-heading font-semibold tracking-tight text-text ${className}`}
    >
      e<span className="font-mono text-blue">.</span>
    </span>
  );
}
