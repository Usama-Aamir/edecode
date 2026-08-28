import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "What we've built — before and since Edecode.",
};

const projects = [
  {
    title: "FWIS-AI — Foreign Worker Interview System",
    desc: "Cloud-based SaaS platform eliminating language barriers in cross-border recruitment — live video interviews with real-time bidirectional AI voice translation across 12 languages, automated scoring, and instant AI-ranked candidate reports.",
    tech: "Next.js · Node.js/Fastify · PostgreSQL · OpenAI (Whisper, GPT-4o-mini, TTS) · LiveKit",
  },
  {
    title: "MyFutureJobs AI Module — PERKESO",
    desc: "AI-powered employment matching for a national government jobs portal, using retrieval-augmented search and explainable AI scoring to match candidates to roles.",
    tech: "React · TypeScript · Supabase (pgvector) · Groq Llama 3.3 · Cloudflare Workers AI",
  },
  {
    title: "Solmy — AI Receptionist for Malaysian SMEs",
    desc: "Multilingual AI receptionist SaaS platform for dental clinics, medical clinics, and Malaysian SMEs.",
    tech: "Next.js · TypeScript · Tailwind · Supabase · Groq LLM",
  },
];

export default function WorkPage() {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="max-w-[880px] mb-16">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-4 block">
            Work
          </span>
          <Reveal>
            <h1 className="text-[clamp(36px,4.8vw,64px)] font-medium leading-[1.08] tracking-[-0.03em] font-heading mb-6">
              What we&apos;ve built — before and since Edecode.
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-[18px] text-text-muted max-w-[760px]">
              Edecode is a new studio, but not new hands. Below is prior work
              built by our founder at previous companies, shown here as evidence
              of real capability — not projects delivered under the Edecode name.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="bg-surface border border-border rounded-[14px] p-8 h-full flex flex-col">
                <span className="inline-flex self-start font-mono text-[11px] uppercase tracking-[0.06em] text-blue border border-blue/30 rounded-full px-3 py-1 mb-5">
                  Built at IPROS EDUTECH SDN BHD
                </span>
                <h2 className="text-[21px] font-semibold font-heading mb-3">
                  {project.title}
                </h2>
                <p className="text-text-muted text-[14.5px] mb-5 flex-1">
                  {project.desc}
                </p>
                <p className="font-mono text-xs text-text-muted border-t border-border pt-4">
                  {project.tech}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mb-16">
          <div className="border border-dashed border-border rounded-[14px] p-8 bg-surface-2/50">
            <p className="text-[15px] text-text-muted">
              Our first Edecode-delivered projects are underway — check back
              soon, or{" "}
              <Link
                href="/contact"
                className="text-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue rounded"
              >
                start yours →
              </Link>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Link
            href="/contact"
            className="bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] inline-block transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Start your project →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
