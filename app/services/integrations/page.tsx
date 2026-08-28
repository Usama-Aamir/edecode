import { ServiceLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Make the tools you already have work like one system.",
};

export default function IntegrationsPage() {
  return (
    <ServiceLayout
      eyebrow="04 — Integrations"
      headline="Make the tools you already have work like one system."
      subhead="Most businesses don't need to rip out their existing software — they need it to talk to each other. We connect what you have into a system that actually flows."
      builds={[
        {
          title: "API design & integration",
          desc: "Clean, documented APIs connecting your existing platforms — CRMs, payment systems, booking tools, government portals — without duct-taping fragile workarounds together.",
        },
        {
          title: "Legacy system connections",
          desc: "Bridging older, harder-to-touch systems (databases, on-prem software, government platforms) into modern tools, without a risky full rebuild.",
        },
        {
          title: "Data pipelines",
          desc: "Automated, reliable movement of data between systems — so reporting, dashboards, and decisions are working off real, current numbers instead of manual exports.",
        },
      ]}
      sections={[
        {
          title: "Why this matters",
          content: (
            <p>
              The most expensive software mistake isn&apos;t picking the wrong
              tool — it&apos;s ending up with five tools that don&apos;t talk to
              each other. Integration work is often the highest-leverage project
              we do, because it makes everything else you already own actually
              usable together.
            </p>
          ),
        },
      ]}
      ctaText="Tell us what needs connecting →"
    />
  );
}
