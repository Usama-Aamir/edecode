import { ServiceLayout } from "@/components/service-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile",
  description:
    "Apps people actually use, on the devices they actually carry.",
};

export default function WebMobilePage() {
  return (
    <ServiceLayout
      eyebrow="03 — Web & Mobile"
      headline="Apps people actually use, on the devices they actually carry."
      subhead="Whether it's a customer-facing app, an internal tool for your team, or a public-service platform, we build for the device it'll really run on — not just a browser tab."
      builds={[
        {
          title: "Native & cross-platform apps",
          desc: "iOS and Android apps built with a shared codebase where it makes sense, native where performance demands it — using Flutter and modern cross-platform tooling to move fast without cutting corners.",
        },
        {
          title: "Progressive web apps",
          desc: "App-like experiences that install straight from the browser — no app store friction, still fast and reliable offline.",
        },
        {
          title: "Customer & staff-facing platforms",
          desc: "From booking and scheduling apps to internal field-team tools, built around the actual task someone's doing on their phone, not a shrunk-down desktop layout.",
        },
      ]}
      sections={[
        {
          title: "Built on real experience",
          content: (
            <p>
              Our stack includes React, Next.js, TypeScript, and Flutter,
              backed by cloud infrastructure on Supabase and Cloudflare — the
              same technologies behind SaaS platforms already serving real users
              across Malaysia.
            </p>
          ),
        },
      ]}
      ctaText="Tell us what you're building →"
    />
  );
}
