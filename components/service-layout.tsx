import Link from "next/link";
import { ReactNode } from "react";
import { Reveal } from "./reveal";

export interface ServiceLayoutProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  builds: { title: string; desc: string }[];
  trust?: string;
  sections: { title: string; content: ReactNode }[];
  ctaText: string;
}

export function ServiceLayout({
  eyebrow,
  headline,
  subhead,
  builds,
  trust,
  sections,
  ctaText,
}: ServiceLayoutProps) {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="max-w-[880px] mb-16">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-4 block">
            {eyebrow}
          </span>
          <Reveal>
            <h1 className="text-[clamp(36px,4.8vw,64px)] font-medium leading-[1.08] tracking-[-0.03em] font-heading mb-6">
              {headline}
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-[18px] text-text-muted max-w-[760px]">
              {subhead}
            </p>
          </Reveal>
        </div>

        <Reveal className="mb-12">
          <h2 className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-6 block">
            What we build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {builds.map((b) => (
              <div
                key={b.title}
                className="bg-surface border border-border rounded-[14px] p-8"
              >
                <h3 className="text-[20px] font-semibold font-heading mb-3">
                  {b.title}
                </h3>
                <p className="text-text-muted text-[14.5px]">{b.desc}</p>
              </div>
            ))}
          </div>
          {trust && (
            <p className="text-[13.5px] text-text-muted mt-6 max-w-[800px]">
              {trust}
            </p>
          )}
        </Reveal>

        {sections.map((section, i) => (
          <Reveal key={i} className="max-w-[840px] mb-14">
            <h2 className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-4 block">
              {section.title}
            </h2>
            <div className="text-[15px] text-text-muted leading-relaxed">
              {section.content}
            </div>
          </Reveal>
        ))}

        <Reveal>
          <Link
            href="/contact"
            className="bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] inline-block transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            {ctaText}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
