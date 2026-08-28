import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by people who've already shipped the hard stuff.",
};

export default function AboutPage() {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="max-w-[880px] mb-16">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-4 block">
            About Edecode
          </span>
          <Reveal>
            <h1 className="text-[clamp(36px,4.8vw,64px)] font-medium leading-[1.08] tracking-[-0.03em] font-heading mb-6">
              Built by people who&apos;ve already shipped the hard stuff.
            </h1>
          </Reveal>
        </div>

        <Reveal className="max-w-[800px] mb-14">
          <p className="text-[18px] text-text-muted leading-relaxed mb-8">
            Edecode started from a simple frustration: most software gets built
            to match a template, not a business. We elicitate first — real
            conversations about what&apos;s actually breaking, what a team
            actually needs — before a single line of design or code happens.
          </p>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Edecode is led by a full-stack and AI developer with 7+ years across
            Pakistan, the UK, and Malaysia, working on AI-powered platforms,
            automation systems, and data-driven products. That experience
            includes building voice-AI interview systems handling real-time
            translation across 12 languages, RAG-based semantic search for a
            national employment platform, and multilingual AI receptionist
            systems for clinics and SMEs — work done prior to founding Edecode,
            now built into how we approach every new client problem: understand
            deeply, design deliberately, ship something that holds up in
            production. Edecode also works in affiliation with AI Software
            Solutions (AISS), a Petaling Jaya-based AI and enterprise software
            company — giving Edecode clients access to a wider bench of
            enterprise and government-scale delivery experience when a project
            calls for it.
          </p>
        </Reveal>

        <Reveal className="max-w-[800px] mb-16">
          <h2 className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-6 block">
            What that experience means for you
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-[15px] text-text-muted leading-relaxed">
            <li>
              Real AI infrastructure experience — not a wrapper around a chatbot
              API, but systems involving speech, retrieval, scoring, and
              multilingual pipelines built and shipped.
            </li>
            <li>
              Comfortable working alongside enterprise and government-scale
              requirements, not just startup MVPs.
            </li>
            <li>
              Full-stack ownership — one team that can take a project from first
              conversation to deployed product, rather than handing off between
              departments.
            </li>
          </ul>
        </Reveal>

        <Reveal>
          <Link
            href="/contact"
            className="bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] inline-block transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Talk to us about your project →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
