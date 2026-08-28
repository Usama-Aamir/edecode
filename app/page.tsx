import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { HeroChatPrompt } from "@/components/hero-chat-prompt";

export default function Home() {
  return (
    <>
      <section className="pt-[120px] pb-[100px] relative">
        <div className="max-w-[1160px] mx-auto px-8">
          <div className="inline-flex items-center gap-[10px] font-mono text-xs tracking-[0.08em] text-text-muted uppercase mb-7 border border-border px-3.5 py-1.5 rounded-full">
            <span
              className="w-[6px] h-[6px] rounded-full bg-blue"
              aria-hidden="true"
            />
            AI-native software, engineered to ship
          </div>

          <Reveal
            as="h1"
            className="text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.05] max-w-[880px] mb-7 tracking-[-0.03em] font-heading"
          >
            Software that starts
            <br />
            with understanding,{" "}
            <span className="text-blue">not assumptions.</span>
          </Reveal>

          <Reveal>
            <p className="text-[19px] text-text-muted max-w-[540px] mb-11 font-normal">
              Edecode builds AI systems and custom software for startups,
              growing businesses, and enterprise teams — from first conversation
              to production.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] inline-block transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                Start a project
              </Link>
              <Link
                href="/work"
                className="border border-border px-6 py-3.5 rounded-md font-medium text-[15px] text-text transition-colors hover:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                See our work
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <HeroChatPrompt />
          </Reveal>
        </div>
      </section>

      <section
        id="process"
        className="py-20 border-t border-b border-border"
      >
        <div className="max-w-[1160px] mx-auto px-8">
          <Reveal>
            <div className="mb-14 max-w-[600px]">
              <span className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-3.5 block">
                How we work
              </span>
              <h2 className="text-[32px] font-semibold font-heading">
                Elicitate. Design. Code.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
              <div className="bg-surface p-9">
                <div className="text-[22px] font-semibold mb-3.5 font-heading text-red">
                  Elicitate
                </div>
                <p className="text-text-muted text-[14.5px]">
                  We start by drawing out what your business actually needs —
                  not what&apos;s trendy. Real conversations with the people
                  who&apos;ll use the system.
                </p>
              </div>
              <div className="bg-surface p-9">
                <div className="text-[22px] font-semibold mb-3.5 font-heading text-blue">
                  Design
                </div>
                <p className="text-text-muted text-[14.5px]">
                  Architecture and interface decisions made deliberately, so the
                  system is easy to use today and easy to extend later.
                </p>
              </div>
              <div className="bg-surface p-9">
                <div className="text-[22px] font-semibold mb-3.5 font-heading text-green">
                  Code
                </div>
                <p className="text-text-muted text-[14.5px]">
                  Production-grade builds, tested and shipped in sprints — with
                  you seeing progress every step, not just at the end.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="py-[100px]">
        <div className="max-w-[1160px] mx-auto px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <h2 className="text-[34px] font-semibold font-heading max-w-[480px]">
                What we build
              </h2>
              <p className="text-text-muted max-w-[340px] text-[15px]">
                Four core capabilities, applied to your specific problem — not
                off-the-shelf templates.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                num: "01 — AI & Automation",
                href: "/services/ai-automation",
                title: "AI & Automation Systems",
                desc: "Intelligent tools that handle the repetitive work — document processing, data extraction, decision support — so your team focuses on what needs a human.",
                tags: ["LLM integration", "Workflow automation", "Document AI"],
              },
              {
                num: "02 — Custom Software",
                href: "/services/custom-software",
                title: "Custom Software Development",
                desc: "Web platforms and internal systems built around how your business actually operates, not around a generic feature set.",
                tags: ["Web platforms", "Internal tools", "SaaS builds"],
              },
              {
                num: "03 — Web & Mobile",
                href: "/services/web-mobile",
                title: "Web & Mobile Apps",
                desc: "Native and cross-platform apps for customers, staff, or the public — designed for real use on real devices.",
                tags: ["iOS & Android", "Cross-platform", "Progressive web"],
              },
              {
                num: "04 — Integrations",
                href: "/services/integrations",
                title: "API Integration & Middleware",
                desc: "Connect the tools you already use into one working system — CRMs, payment rails, government portals, legacy databases.",
                tags: ["API design", "Legacy systems", "Data pipelines"],
              },
            ].map((card) => (
              <Reveal key={card.href}>
                <Link
                  href={card.href}
                  className="block bg-surface border border-border rounded-[14px] p-8 transition-all hover:border-blue hover:-translate-y-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue h-full"
                >
                  <span className="font-mono text-xs text-text-muted mb-5 block">
                    {card.num}
                  </span>
                  <h3 className="text-[21px] font-semibold font-heading mb-3">
                    {card.title}
                  </h3>
                  <p className="text-text-muted text-[14.5px] mb-5">
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-border text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[70px] border-t border-border">
        <div className="max-w-[1160px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "441+", label: "Community following us" },
              { value: "4", label: "Core service lines" },
              { value: "2", label: "Countries served" },
              { value: "100%", label: "Sprint-based delivery" },
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div>
                  <h3 className="text-[38px] font-semibold font-heading mb-1.5">
                    {stat.value}
                  </h3>
                  <p className="text-[13.5px] text-text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-[100px] text-center border-t border-border"
      >
        <div className="max-w-[1160px] mx-auto px-8">
          <Reveal>
            <h2 className="text-[38px] font-semibold font-heading max-w-[620px] mx-auto mb-5">
              Have a system that needs building?
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-text-muted text-base mb-9">
              Tell us the problem. We&apos;ll tell you honestly whether AI,
              custom software, or both is the right answer.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/contact"
              className="bg-blue text-btn-text px-7 py-4 rounded-md font-medium text-[15px] inline-block transition-colors hover:bg-blue/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
            >
              Book a free demo
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
