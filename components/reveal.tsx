"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  HTMLAttributes,
} from "react";

type AsType = "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: AsType;
}

export function Reveal({
  children,
  className = "",
  as = "div",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  const combinedClass = `${className} ${isIn ? "in" : ""}`.trim();

  return (
    <Tag
      ref={ref as any}
      data-reveal
      className={combinedClass}
      {...(rest as any)}
    >
      {children}
    </Tag>
  );
}
