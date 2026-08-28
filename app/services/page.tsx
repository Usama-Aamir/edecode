import Link from "next/link";
import { Reveal } from "@/components/reveal";

const services = [
  {
    num: "01 — AI & Automation",
    href: "/services/ai-automation",
    title: "AI & Automation Systems",
    desc: "Intelligent tools that handle the repetitive work — document processing, data extraction, decision support — so your team focuses on what needs a human.",
  },
  {
    num: "02 — Custom Software",
    href: "/services/custom-software",
    title: "Custom Software Development",
    desc: "Web platforms and internal systems built around how your business actually operates, not around a generic feature set.",
  },
  {
    num: "03 — Web & Mobile",
    href: "/services/web-mobile",
    title: "Web & Mobile Apps",
    desc: "Native and cross-platform apps for customers, staff, or the public — designed for real use on real devices.",
  },
  {
    num: "04 — Integrations",
    href: "/services/integrations",
    title: "API Integration & Middleware",
    desc: "Connect the tools you already use into one working system — CRMs, payment rails, government portals, legacy databases.",
  },
];

export default function ServicesPage() {
  return (
    <section className="pt-[120px] pb-[100px]">
      <div className="max-w-[1160px] mx-auto px-8">
        <div className="mb-14">
          <span className="font-mono text-xs text-text-muted uppercase tracking-[0.08em] mb-4 block">
            Services
          </span>
          <h1 className="text-[clamp(40px,5.6vw,72px)] font-medium leading-[1.05] tracking-[-0.03em] font-heading max-w-[880px]">
            What we build
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <Reveal key={s.href}>
              <Link
                href={s.href}
                className="block bg-surface border border-border rounded-[14px] p-8 transition-all hover:border-blue hover:-translate-y-[3px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue h-full"
              >
                <span className="font-mono text-xs text-text-muted mb-5 block">
                  {s.num}
                </span>
                <h2 className="text-[21px] font-semibold font-heading mb-3">
                  {s.title}
                </h2>
                <p className="text-text-muted text-[14.5px]">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
